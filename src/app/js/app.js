angular.module('generous', ['hljs'])
    .run(['$rootScope', '$location', '$anchorScroll', '$timeout', function($rootScope, $location, $anchorScroll, $timeout) {
        // when the page loads scroll to the proper element.
        $timeout(function() {
            $anchorScroll();
        }, false);
        // when the route is changed scroll to the proper element.
        $rootScope.$on('$routeChangeSuccess', function() {
            if ($location.hash()) {
                $anchorScroll();
            }
        });
    }])
    .directive('generousLogo', [function() {
        return {
            restrict: 'E',
            replace: true,
            template: "<span class='gen__logo'>" +
                "<span class='gen__logoShardGroup gen__logoShardGroup1'>" +
                "<span class='gen__logoShard gen__logoShard1'></span>" +
                "<span class='gen__logoShard gen__logoShard2'></span>" +
                "<span class='gen__logoShard gen__logoShard3'></span>" +
                "<span class='gen__logoShard gen__logoShard4'></span>" +
                "</span>" +
                "<span class='gen__logoShardGroup gen__logoShardGroup2'>" +
                "<span class='gen__logoShard gen__logoShard1'></span>" +
                "<span class='gen__logoShard gen__logoShard2'></span>" +
                "<span class='gen__logoShard gen__logoShard3'></span>" +
                "<span class='gen__logoShard gen__logoShard4'></span>" +
                "</span>" +
                "</span>"
        };
    }])
    .directive('generousExample', ['$timeout', '$http', '$q', function($timeout, $http, $q) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                source: '='
            },
            template: "<section>" +
                "<p ng-if='source.description'>{{source.description}}<br /><br /></p>" +
                "<ul class='tabset__tabs list--inline'>" +
                "<li ng-repeat='(key,val) in tabs track by $index' ng-click='setTab($index)' ng-class='{\"tab--active\":showTab===$index}'>{{key}}</li>" +
                "</ul>" +
                "<iframe id='gen__exampleOutput' ng-show='showTab === 0'></iframe>" +
                "<div ng-repeat='tab in tabs track by $index' ng-if='showTab === $index && $index > 0' hljs hljs-linums source='tab' class='gen__exampleSnippet'>{{tab}}</div>" +
                "</section>",
            link: function(scope, el) {
                scope.tabs = {};
                scope.setTab = function(t) {
                    t = t || 0;
                    scope.showTab = t;
                };
                scope.setTab();
                scope.tabs.output = "<iframe id='gen__exampleOutput'></iframe>";
                for (var key in angular.copy(scope.source)) {
                    if (scope.source.hasOwnProperty(key) && key !== 'description') {
                        scope.tabs[key] = scope.source[key];
                    }
                }

                scope.genExampleLoaded = false;
                scope.getExampleLoadingMsg = [];


                var iframe = el[0].getElementsByTagName('iframe')[0],
                    head = iframe.contentDocument.head,
                    body = iframe.contentDocument.body,
                    scripts = [];


                iframe.style.opacity = '0';
                if (scope.source.head) {
                    scope.getExampleLoadingMsg.push({
                        text: 'Loading HEAD content'
                    });
                    var tmp = document.createElement('div');
                    tmp.innerHTML = scope.source.head;
                    for (var n = 0; n < tmp.children.length; n++) {
                        if (tmp.children[n].tagName.toLowerCase() !== 'script') {
                            head.appendChild(tmp.children[n]); //stylesheet or other content
                        } else {
                            scripts.push(tmp.children[n]);
                        }
                    }

                }

                function iterateScripts(n) {
                    n = n || 0;
                    if (n === scripts.length) {
                        resolveContent(); // all (if any) script content loaded, so load the rest
                        return;
                    } else if (scripts[n]) {
                        injectJavascript(scripts[n]).then(function() { // load in the script, when ready load next
                            iterateScripts(n + 1);
                        });
                    }
                }
                iterateScripts();


                function injectJavascript(source) {
                    var deferred = $q.defer();
                    var script = iframe.contentWindow.document.createElement("script");
                    script.type = "text/javascript";
                    if (source.hasAttribute('embed') && source.src) { // embedding a remote script
                        $http.get(source.src).
                        then(function(response) {

                            scope.getExampleLoadingMsg.push({
                                text: 'Loading ' + source.src
                            });
                            script.text = response.data;
                            deferred.resolve(script);
                        }, function(err) {
                            scope.getExampleLoadingMsg.push({
                                text: 'Failed to load ' + url,
                                error: true
                            });
                            deferred.reject(err);
                        })

                    } else if (source.src) { // simply laoding in a script tag
                        script.src = source.src;
                        angular.element(script).on('load', function(e) {
                            deferred.resolve(script);
                        });
                    } else { // inline script
                        script.innerHTML = typeof source === 'string' ? source : source.innerHTML;
                        deferred.resolve(script);
                    }
                    head.appendChild(script);
                    return deferred.promise;
                }


                function resolveContent() {
                    angular.element(document.getElementById('gen__logo')).removeClass('gen__anim_phaseOut gen__anim_loop');
                    if (scope.source.javascript) {
                        scope.getExampleLoadingMsg.push({
                            text: 'Javascript loaded'
                        });
                        injectJavascript(scope.source.javascript);
                    }

                    if (scope.source.css) {
                        scope.getExampleLoadingMsg.push({
                            text: 'CSS loaded'
                        });
                        var styles = document.createElement('style');
                        styles.innerHTML = scope.source.css;
                        head.appendChild(styles);
                    }

                    if (scope.source.html) {
                        scope.getExampleLoadingMsg.push({
                            text: 'HTML loaded'
                        });
                        body.innerHTML = scope.source.html;
                    }
                    scope.genExampleLoaded = true;
                    iframe.style.height = body.scrollHeight + 25 + 'px';
                    iframe.style.opacity = '1';
                }



            }
        };
    }])
    .service('errorSvc', function() {
        return {
            init: function(scope) {
                scope.errorSvc = {
                    errors: {}
                };
                this.scope = scope;
            },
            handle: function(code, error, critical) {
                console = console || {
                    log: function() {}
                };
                console.log('Generous has encountered an error: ', code, error);
                this.scope.errorSvc.errors[code] = typeof error === 'object' ? JSON.stringify(error) : error;
            },
            dismiss: function(code) {
                delete this.scope.errorSvc.errors[code];
            }
        };
    })
    .filter('trusted', ['$sce', function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    }])
    .config(['hljsServiceProvider', function(hljsServiceProvider) {
        hljsServiceProvider.setOptions({
            tabReplace: '    '
        });
    }])
    .service('smoothScroll', function() {
        return {
            scroll: function(el, px) {
                el = el[0] ? el[0] : el;
                var startY = el.scrollTop,
                    stopY = px,
                    distance = stopY - startY,
                    duration = 100,
                    step = 15,
                    increment = stopY - startY < 0 ? -1 * step : step,
                    interval = duration / (distance / increment),
                    count = 0,
                    counter = null;
                if (el.scrollTop === stopY) {
                    return;
                }
                counter = setInterval(function() {
                    el.scrollTop = el.scrollTop + increment;
                    count += interval;
                    if (count >= duration) {
                        el.scrollTop = stopY;
                        clearInterval(counter);
                    }
                }, interval);
            }
        };
    })
    .directive('genMarkdown', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            scope: {
                genMarkdown: '='
            },
            link: function(scope, el) {
                el.addClass('gen__markdown');
                scope.$watch('genMarkdown', function(n, o) {
                    el[0].innerHTML = marked(n);
                });
            }
        };
    }])
    .directive('genAnchor', ['$compile', '$location', function($compile, $location) {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                genAnchor: '=?link'
            },
            template: "<a id='{{genAnchor}}' href ng-click='setAnchor(genAnchor)' class='gen__anchor'><i class='gen__icon icon__link'></i><span ng-transclude></span></a>",
            link: function(scope, el, attr) {
                function camelize(str) {
                    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
                        return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
                    }).replace(/\s+/g, '');
                }
                scope.genAnchor = scope.genAnchor || camelize(el[0].innerText);
                scope.setAnchor = function(a) {
                    $location.hash(a);
                };
            }
        };
    }])
    .directive('hljsLinums', ['$timeout', function($timeout) {
        return {
            restrict: 'A',
            scope: {
                linums: '=hljsLinums',
                source: '='
            },
            compile: function() {
                return {
                    pre: function(scope, el) {

                        function highlighter() {
                            /*
                             remove any current highlighting
                             */
                            numbering.find('li').removeClass('hljs-highlight');
                            /*
                             highlight rows
                             */
                            function highlightLine(n) {
                                angular.element(numbering[0].children[parseInt(n, 0)]).addClass('hljs-highlight');
                            }
                            for (var i = 0; i < scope.linums.length; i++) {
                                if (scope.linums[i].indexOf('-') > -1) {
                                    var lines = scope.linums[i].split('-');
                                    lines[0] = parseInt(lines[0].replace("'", "").replace('"', ""), 0);
                                    lines[1] = parseInt(lines[1].replace("'", "").replace('"', ""), 0);
                                    for (var l = lines[0] - 1; l < lines[1]; l++) {
                                        highlightLine(l);
                                    }
                                } else {
                                    highlightLine(highlight[i]);
                                }
                            }
                        }
                        // lines being highlighted have changed, so re-highlight
                        scope.$watch('linums', function(n, o) {
                            if (n && n !== o) {
                                highlighter();
                            }
                        });
                        var codeEl = el[0].getElementsByTagName('code')[0],
                            code,
                            lines,
                            numbering = angular.element('<ul class="hljs-linum-numbers"/>');

                        angular.element(el[0].getElementsByTagName('code'))
                            .parent()
                            .append(numbering);

                        // source is being changed, so update line numbers available
                        scope.$watch('source', function(nV, oV) {
                            if (nV === undefined) {
                                return;
                            }
                            code = scope.source;
                            lines = code.split('\n').length;
                            numbering.find('li').remove();
                            for (i = 1; i <= lines; i++) {
                                numbering.append(angular.element('<li/>').text(i));
                            }
                            if (scope.linums) {
                                highlighter();
                            }
                        });
                        el.addClass('hljs-linums');
                        // if the <code> tag is scrollable, make sure that the line numbers stick to the top..
                        angular.element(codeEl).on('scroll', function() {
                            numbering[0].style.top = (-1 * codeEl.scrollTop) + 'px';
                        });

                    }
                };
            }
        };
    }])
    .service('debounce', ['$timeout', function($timeout) {
        return function(el, e, fn, ms) {
            var bounce = null;
            ms = ms || 100;
            el = el[0] ? el : angular.element(el);
            el.on(e, function() {
                if (bounce) {
                    clearTimeout(bounce);
                }
                bounce = setTimeout(function() {
                    $timeout(fn, false);
                    clearTimeout(bounce);
                }, ms);
            });
        };
    }])
    .controller('generousCtrl', ['$http', '$scope', '$location', '$timeout', 'smoothScroll', 'debounce', 'errorSvc', function($http, $scope, $location, $timeout, smoothScroll, debounce, errorSvc) {
        $scope.model = [];
        $scope.view = {};
        $scope.hashTable = {};
        $scope.sourceMap = {};
        $scope.genSearchActive = false;
        $scope.genSearchTerm = null;

        function search(term, across, inObj) {
            $scope.genSearch = [];
            if (!term) {
                $scope.genSearchActive = false;
                return;
            }
            term = term.toLowerCase();
            across = across || ['name', 'description', 'type'];
            inObj = inObj || $scope.hashTable;
            for (var key in inObj) {
                if (inObj.hasOwnProperty(key)) {
                    var found = false;
                    across.forEach(function(t) {
                        if (inObj[key][t] && inObj[key][t].toString().toLowerCase().indexOf(term) > -1) {
                            found = true;
                        }
                    });
                    if (found) {
                        $scope.genSearch.push(inObj[key]);
                    }
                }
            }
            $scope.genSearchActive = true;
        }
        var searchEl = angular.element(document.getElementById('genSearchInput'));
        debounce(searchEl, 'keyup', function() {
            search(searchEl[0].value);
        }, 150);
        searchEl.on('focus', function() {
            $timeout(function() {
                search(searchEl[0].value);
            }, false);
        });
        searchEl.on('blur', function() {
            if (!searchEl[0].value) {
                $timeout(function() {
                    search(searchEl[0].value);
                }, false);
            }

        });

        $scope.sourceEditor = function(e) {
            e.preventDefault();

            function formPostData(url, fields) {
                var form = angular.element('<form style="display: none;" method="POST" action="' + url + '" target="_blank"></form>');
                angular.forEach(fields, function(value, name) {
                    var input = angular.element('<textarea name="' + name + '">' + value + '</textarea>');
                    form.append(input);
                });
                angular.element(document.body).append(form);
                $timeout(function() {
                    form[0].submit();
                    form.remove();
                }, false);
            }
            var exampleCode = {},
                postData = {};

            if ($scope.view.example.javascript) {
                exampleCode.js = $scope.view.example.javascript;
            }
            if ($scope.view.example.css) {
                exampleCode.css = $scope.view.example.css;
            }
            exampleCode.html = '<!doctype html>\n' +
                '<html>\n' +
                '  <head>\n';
            if ($scope.view.example.head) {
                exampleCode.html += $scope.view.example.head + '\n';
            }
            exampleCode.html += '  </head>\n' +
                '  <body>\n\n';

            if ($scope.view.example.html) {
                exampleCode.html += $scope.view.example.html;
            }

            exampleCode.html += '  </body>\n' +
                '</html>\n';

            var svc = $scope.model.options.sourceEditor.toLowerCase().replace(/\s/g, ""),
                svcLink;

            switch (svc) {
                case "jsbin":
                    svcLink = "http://jsbin.com";
                    postData = exampleCode;
                    break;
                case "jsfiddle":
                    svcLink = "http://jsfiddle.net/api/post/library/pure/";
                    postData = exampleCode;
                    break;
                case "plunker":
                case "plnkr":
                default:
                    postData.description = $scope.view.hash;
                    postData['files[index.html]'] = exampleCode.html;
                    if (exampleCode.css) {
                        postData['files[styles.css]'] = exampleCode.css;
                    }
                    if (exampleCode.js) {
                        postData['files[javascript.js]'] = exampleCode.js;
                    }
                    svcLink = "http://plnkr.co/edit/?p=preview";
                    break;
            }
            formPostData(svcLink, postData);
        };
        $scope.gdSourceCode = '';

        function sourceView() {
            var sourceEl = document.getElementById('gen__sourceView');
            if (!sourceEl) {
                return;
            }
            sourceEl = sourceEl.getElementsByTagName('code')[0];
            var lineHeight = parseInt(window.getComputedStyle(sourceEl, null).getPropertyValue("line-height"), 0);
            //   sourceEl.scrollTop=(lineHeight*$scope.view.generous.line.from)-(lineHeight*2);
            sourceEl.scrollLeft = 0;
            smoothScroll.scroll(sourceEl, (lineHeight * $scope.view[$scope.model.options.denominator].line.from) - (lineHeight * 2));
        }
        $scope.sourceLink = function(src) {
            if (!src || !$scope.model.options.sourceLink) {
                $scope.genSourceCode = null;
                $scope.genViewSource = false;
                return;
            }
            // dont reload the source file if already cached
            if (src === $scope.genViewSource) {
                sourceView();
                return;
            }
            angular.element(document.getElementById('gen__logo')).addClass('gen__anim_phaseOut gen__anim_loop');
            $http.get(src).
            then(function(response) {
                //   $timeout(function(){
                $scope.genSourceCode = response.data;
                $scope.genViewSource = src;
                $timeout(function() {
                    sourceView();
                });
                angular.element(document.getElementById('gen__logo')).removeClass('gen__anim_phaseOut gen__anim_loop');
            }, function(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                angular.element(document.getElementById('gen__logo')).removeClass('gen__anim_phaseOut gen__anim_loop');
            });
        };
        $scope.updateView = function(item) {
            if (typeof item === 'string') {
                item = $scope.hashTable[item.replace(/^\//, '')]; // remove initial slash if present
            }
            $location.path(item.hash);
            $scope.view = angular.copy(item);
            $scope.genSourceLines = [$scope.view[$scope.model.options.denominator].line.from + '-' + $scope.view.generous.line.to];
            breadcrumb();
            if ($scope.genViewSource) {
                $scope.sourceLink(item[$scope.model.options.denominator].source);
            }
            $timeout(function() {
                $scope.genSearchActive = false;
            }, false);
        };

        function hashMap(arr, depth) {
            var hash = '';
            for (var i = 0; i < arr.length; i++) {
                hash = depth === undefined ? arr[i].shortName : depth + '/' + arr[i].shortName;
                arr[i].hash = hash;
                $scope.hashTable[hash] = arr[i];
                if (!$scope.sourceMap[arr[i][$scope.model.options.denominator].source]) {
                    $scope.sourceMap[arr[i][$scope.model.options.denominator].source] = [];
                }
                $scope.sourceMap[arr[i][$scope.model.options.denominator].source].push(hash);
                if (arr[i].children) {
                    hashMap(arr[i].children, hash);
                } else {
                    hash = '';
                }
            }
        }

        function breadcrumb() {
            var hash = $scope.view.hash,
                shash = hash.split('/'),
                bits = shash.length,
                bread = [];
            for (var h = 0; h < bits; h++) {
                hash = shash.join('/');
                bread.push({
                    hash: hash,
                    name: $scope.hashTable[hash].name
                });
                shash.pop();
            }
            $scope.breadcrumb = bread.reverse();
        }
        errorSvc.init($scope);
        angular.element(document.getElementById('gen__logo')).addClass('gen__anim_phaseOut gen__anim_loop');
        $http.get('data/generous.json').
        then(function(response) {
            angular.element(document.getElementById('gen__logo')).removeClass('gen__anim_phaseOut gen__anim_loop');
            $scope.model = response.data;
            hashMap($scope.model.data);
            $scope.updateView($location.path() || $scope.model.data[0].hash);
            $scope.$on('$locationChangeStart', function(event, next, current) {
                // if the page has loaded with a route- now the hash lookup is available, load the correct item
                if ($location.path()) {
                    $scope.updateView($location.path());
                }
            });
        }, function(error) {
            angular.element(document.getElementById('gen__logo')).removeClass('gen__anim_phaseOut gen__anim_loop');
        });
    }]);
