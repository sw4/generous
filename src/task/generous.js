var glob = require("glob"),
    path=require('path'),
    q=require('q'),
    chalk=require('chalk'),
    NEW_LINE = /\n\r?/,
    docs=[],
    fs = require('fs-extra'),
    argv = require('minimist')(process.argv.slice(2));


var GENEROUS=[];

function getNestedChildren(arr, parent) {
    var out = [];
    for(var i in arr) {
        if(arr[i].parent == parent) {
            var children = getNestedChildren(arr, arr[i].name);
            if(children.length) {
                arr[i].children = children;
            }
            out.push(arr[i]);
        }
    }
    return out;
}

function trim(text) {
    var MAX_INDENT = 9999;
    var empty = RegExp.prototype.test.bind(/^\s*$/);
    var lines = text.split('\n');
    var minIndent = MAX_INDENT;
    var indentRegExp;
    var ignoreLine = (lines[0][0] != ' '  && lines.length > 1);
    // ignore first line if it has no indentation and there is more than one line

    lines.forEach(function(line){
        if (ignoreLine) {
            ignoreLine = false;
            return;
        }

        var indent = line.match(/^\s*/)[0].length;
        if (indent > 0 || minIndent == MAX_INDENT) {
            minIndent = Math.min(minIndent, indent);
        }
    });

    indentRegExp = new RegExp('^\\s{0,' + minIndent + '}');

    for ( var i = 0; i < lines.length; i++) {
        lines[i] = lines[i].replace(indentRegExp, '');
    }

    // remove leading lines
    while (empty(lines[0])) {
        lines.shift();
    }

    // remove trailing
    while (empty(lines[lines.length - 1])) {
        lines.pop();
    }
    return lines.join('\n');
}

function parseExample(text, opt) {
    if(!text){return null;}
    function splitType(type){
        var sTag = "<"+type+">",
            eTag = "</"+type+">";
        if(text.indexOf(sTag)>-1){
            return text.substring(text.indexOf(sTag)+sTag.length,text.indexOf(eTag));
        }else{
            return null;
        }
    }
    var exampleObj={};
    opt.example.forEach(function(section){
        exampleObj[section]=splitType(section);
    });
    if(text.indexOf('<')>0){
        exampleObj.description=trim(text.substr(0,text.indexOf('<')));
    }
    return exampleObj;
}

function markdown(text){
    return text;
}
function constructDocItem(file, text, startingLine, lineNumber, opt){

    var atName,
        atText,
        match,
        self={
            examples:[]
        },
        examples=[];

    text.split(NEW_LINE).forEach(function(line){
        if ((match = line.match(/^\s*@(\w+)(\s+(.*))?/))) {
            flush();
            atName = match[1];
            atText = [];
            //if(match[3]) atText.push(match[3].trimRight());
            if(match[3]) atText.push(match[3].trim());
        } else {
            if (atName) {
                atText.push(line);
            }
        }
    });


    flush();
    function flush() {
        if (atName) {
            var text = trim(atText.join('\n')), match;
            if (atName == 'module') {
                match = text.match(/^\s*(\S+)\s*$/);
                if (match) {
                    self.moduleName = match[1];
                }
            } else if (atName == 'param') {
                if(!self.parameters){
                    self.parameters=[];
                }
                match = text.match(/^\{([^}]+)\}\s+(([^\s=]+)|\[(\S+)=([^\]]+)\])\s+(.*)/);
                //  1      1    23       3   4   4 5      5  2   6  6
                if (!match) {
                    throw new Error("Not a valid 'param' format: " + text + ' (found in: ' + self.file + ':' + self.line + ')');
                }

                var optional = (match[1].slice(-1) === '=');
                var param = {
                    name: match[4] || match[3],
                    description:markdown(text.replace(match[0], match[6])),
                    type: optional ? match[1].substring(0, match[1].length-1) : match[1],
                    optional: optional,
                    default: match[5]
                };
                // if param name is a part of an object passed to a method
                // move it to a nested property of the parameter.
                var dotIdx = param.name.indexOf(".");
                if(dotIdx > 0){
                    param.isProperty = true;
                    var paramName = param.name.substr(0, dotIdx);
                    var propertyName = param.name.substr(dotIdx + 1);
                    param.name = propertyName;
                    var p = self.parameters.filter(function(p) { return p.name === paramName; })[0];
                    if (p) {
                        p.properties = p.properties || [];
                        p.properties.push(param);
                    }
                } else {
                    self.parameters.push(param);
                }

            } else if (atName == 'returns' || atName == 'return') {
                match = text.match(/^\{([^}]+)\}\s+(.*)/);
                if (!match) {
                    throw new Error("Not a valid 'returns' format: " + text + ' (found in: ' + self.file + ':' + self.line + ')');
                }
                self.returns = {
                    type: match[1],
                    description: markdown(text.replace(match[0], match[2]))
                };
            } else if(atName == 'requires') {
                match = text.match(/^([^\s]*)\s*([\S\s]*)/);
                self.requires.push({
                    name: match[1],
                    text: markdown(match[2])
                });
            } else if(atName == 'property') {
                match = text.match(/^\{(\S+)\}\s+(\S+)(\s+(.*))?/);
                if (!match) {
                    throw new Error("Not a valid 'property' format: " + text + ' (found in: ' + self.file + ':' + self.line + ')');
                }
                var property = new Doc({
                    type: match[1],
                    name: match[2],
                    shortName: match[2],
                    description: markdown(text.replace(match[0], match[4]))
                });
                self.properties.push(property);
            } else if(atName == 'eventType') {
                match = text.match(/^([^\s]*)\s+on\s+([\S\s]*)/);
                self.type = match[1];
                self.target = match[2];
            } else if(atName == 'constructor') {
                self.constructor = true;
            } else if(atName === 'example'){
                examples.push(text);
            } else {
                self[atName] = text;
            }
        }
    }


    function camelize(str) {
        return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
            if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        });
    }


    self.shortName=camelize(self.name);
    self.id=self.id || self.shortName;
    examples.forEach(function(example){
        self.examples.push(parseExample(example, opt));
    });
    self[opt.denominator]={
        source:path.relative(opt.dest,file),
        line:{
            from:startingLine,
            to:lineNumber
        }
    };
    GENEROUS.push(self);
}

function parseSrcFiles(file, content, opt){
    var lines = content.toString().split(NEW_LINE),
        match,
        inDoc = false,
        text,
        startingLine,
        regex = new RegExp("@" + opt.denominator);
    lines.forEach(function(line, lineNumber){
        lineNumber++;
        // is the comment starting?
        if (!inDoc && (match = line.match(/^\s*\/\*\*\s*(.*)$/))) {
            line = match[1];
            inDoc = true;
            text = [];
            startingLine = lineNumber;
        }
        // are we done?
        if (inDoc && line.match(/\*\//)) {
            text = text.join('\n');
            text = text.replace(/^\n/, '');
            if (text.match(regex)){
                docs.push(constructDocItem(file, text, startingLine, lineNumber, opt));
            }
            inDoc = false;
        }
        // the line falls within valid comment tags, so add to the doc content
        if (inDoc){
            text.push(line.replace(/^\s*\*\s?/, ''));
        }
    });
}

function keysrt(key,desc) {
    return function(a,b){
        return desc ? ~~(a[key] < b[key]) : ~~(a[key] > b[key]);
    };
}


function generous(opt){

    opt=opt || {};
    opt.dest=opt.dest || argv.dest || 'generous';
    opt.denominator=opt.denominator || 'generous';
    opt.example=opt.example||['html', 'javascript','css','head'];
    opt.sourceLink=opt.sourceLink || true;
    opt.src=argv.src || opt.src;
    opt.title=opt.title||'generous';
    opt.dest.replace(/\/+$/, "");
    opt.sourceEditor=opt.sourceEditor || 'plunker';

    var fileCount= 0;
    console.time('Completed in');
    console.log('\nGenerous started...\n');
    if(typeof opt.src !== 'object'){
        opt.src=[opt.src];
    }
    // reads a glob and returns a list of files found (sync)
    var globPromise = function (src) {
        var deferred = q.defer();
        glob(src, function(err, file){
            if(err){
                console.log('  '+chalk.red('\u00D7')+' Failed to resolve '+ file+ ' from glob '+src+'\n\n');
                deferred.reject(err);
            }else{
                deferred.resolve(file);
            }
        });
        return deferred.promise;
    };
    // reads a file, and parses it
    var readPromise = function (file) {
        var deferred = q.defer();
        fs.readFile(file, 'utf8', function(err, data){
            fileCount++;
            if(err){
                console.log('  '+chalk.red('\u00D7')+' Failed to parse '+ file);
                deferred.reject(err);
            }else{
                parseSrcFiles(file, data, opt);
                console.log('  '+chalk.green('\u2714')+' Parsed '+ file);
                deferred.resolve();
            }
        });
        return deferred.promise;
    };

    return q.all(opt.src.map(globPromise)).then(function(results){
        var files=[].concat.apply([], results);
        return q.all(files.map(readPromise));
    }).then(function(){
        fs.copy(__dirname+'/../app', opt.dest, {clobber:true}, function(err){
            if(err){
                console.log(chalk.red('Error copying app files from '+__dirname+'/../app to '+ opt.dest+'/index.html'));
                return;
            }
            if(opt.template){
                fs.copy(opt.template, opt.dest+'/index.html', {clobber:true}, function(err){
                    if(err){
                        console.log(chalk.red('Error copying template from '+opt.template+' to '+ opt.dest+'/index.html'));
                        return;
                    }
                });
            }
            fs.writeJson(opt.dest+'/data/generous.json', {options:opt, data:getNestedChildren(GENEROUS.sort(keysrt(opt.denominator)))}, function(err){
                if(err){
                    console.log(chalk.red('Error writing data file to: '+opt.dest+'/data/generous.json'));
                    return;
                }
            });

            console.log("\nGenerous finished: "+fileCount+' files and '+GENEROUS.length+' items');
            console.timeEnd("Completed in");
            console.log('');

        });
    });
}
if(argv.src){
    generous();
}
module.exports = generous;
