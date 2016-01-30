(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = {
    // NOTE: MODULE PREFIX
    name: 'ibd'
};
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
"use strict";

angular.module("ibd.partials", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("ibd.accordion.tpl.html", "<div class={{::prefix}}-accordion><input type=\"{{config.group && \'radio\' || \'checkbox\'}}\" name={{config.group}} class=\"{{::prefix}}-accordion-toggle ng-cloak\" ng-checked=config.toggle checked><div class={{::prefix}}-accordion-header-base ng-if=prefix.length><i class=\"ibd-icon {{::prefix}}-icon-next-right-arrow {{::prefix}}-accordion-arrow\" width=10 height=10></i><label class={{::prefix}}-accordion-header ibd-compile=config.header></label></div><div class={{::prefix}}-accordion-content ng-transclude></div></div>");
  $templateCache.put("ibd.block.resize.handle.tpl.html", "<div class=ibd-resize-handle><div class=ibd-resize-handle-prev ng-click=\"ibdBlocksSize($event, true)\"><i class=\"ibd-icon ibd-resize-right ibd-icon-arrow-left\"></i> <i class=\"ibd-icon ibd-resize-down ibd-icon-arrow-up\"></i></div><div class=ibd-resize-helper><div class=ibd-resize-handle-restore ng-click=ibdBlocksSize($event)><i class=\"ibd-icon ibd-icon-default ibd-resize-restore\"></i></div></div><div class=ibd-resize-handle-next ng-click=\"ibdBlocksSize($event, false)\"><i class=\"ibd-icon ibd-resize-left ibd-icon-next-right-arrow\"></i> <i class=\"ibd-icon ibd-resize-up ibd-icon-next-down-arrow\"></i></div></div>");
  $templateCache.put("ibd.block.tpl.html", "<section class=ibd-block><div class=ibd-block-container><div class=ibd-block-content ng-transclude></div></div></section>");
  $templateCache.put("ibd.blocks.tpl.html", "<div class=ibd-blocks ng-transclude></div>");
  $templateCache.put("ibd.checkbox.tpl.html", "<input type=\"checkbox\">");
  $templateCache.put("ibd.checkbox.wrap.tpl.html", "<label class=ibd-checkbox><span class=ibd-checkbox-indicator><i class=\"ibd-icon ibd-icon-checkmark\"></i></span> <span class=ibd-checkbox-label>{{::uxLabel}}</span></label>");
  $templateCache.put("ibd.flyover.invalid.tpl.html", "<div class=ibd-flyover-content><div class=ibd-flyover-title ibd-compile=ibdInvalidTitle></div><div class=ibd-flyover-body ibd-compile=ibdInvalidBody></div></div>");
  $templateCache.put("ibd.flyover.tpl.html", "<div class=ibd-flyover-content><div class=ibd-flyover-title>{{::flyoverTitle}}</div><div class=ibd-flyover-body>{{::flyoverBody}}</div></div>");
  $templateCache.put("ibd.notification.tpl.html", "<li class=ibd-notification-item><i class=\"{{notificationIcon}} ibd-icon ibd-notification-icon\"></i> <i class=\"ibd-notification-close ibd-icon ibd-icon-close\"></i><div class=ibd-notification-header><span class=ibd-notification-title>{{notificationTitle}}</span> <span class=ibd-notification-subtitle>{{notificationSubtitle}}</span></div><div class=ibd-notification-body>{{notificationBody}}</div></li>");
  $templateCache.put("ibd.notification.wrapper.tpl.html", "<ul id=ibd-notification></ul>");
  $templateCache.put("ibd.radio.tpl.html", "<input type=\"radio\">");
  $templateCache.put("ibd.radio.wrapper.tpl.html", "<label class=ibd-radio><span></span> {{::uxLabel}}</label>");
  $templateCache.put("ibd.scroll.tpl.html", "<div class=ibd-scroll-container><div class=scroll-content ng-transclude></div><div class=scroll-trackX><div class=scroll-floatX></div></div><div class=scroll-trackY><div class=scroll-floatY></div></div></div>");
  $templateCache.put("ibd.table.tpl.html", "<div class=ibd-table><div class=ibd-table-head><div ng-style=\"{\'width\':column.width}\" ng-repeat=\"column in ibdConfig.columns\" data-column={{$index}} ng-click=\"ibdConfig.sortFn(column.field, column.sortable)\" class=ibd-table-header>{{column.name || column.field}} <span ng-show=\"ibdConfig.sort.field===column.field && !ibdConfig.sort.asc\"><i class=\"ibd-icon ibd-icon-next-up-arrow\"></i></span> <span ng-show=\"ibdConfig.sort.field===column.field && ibdConfig.sort.asc\"><i class=\"ibd-icon ibd-icon-next-down-arrow\"></i></span></div></div><div ibd-scroll=y ibd-live=true class=ibd-table-body style=\"height: 300px\"><div ibd-nestable-virtualise=\"rowData in ibdConfig.data | orderBy:ibdConfig.sort.field:ibdConfig.sort.asc\" class=ibd-table-row data-row={{$index}}>{{$index}} <span ng-repeat=\"column in ibdConfig.columns track by $index\" ng-style=\"{\'width\':column.width}\" data-column={{$index}}><span ng-if=column.template ibd-compile=column.template></span> <span ng-if=!column.template>{{rowData[column.field]}}</span></span></div></div></div>");
  $templateCache.put("ibd.togglelist.tpl.html", "<fieldset class=ibd-togglelist><label class=ibd-togglelist-label ng-repeat=\"option in ibdOptions track by $index\" ng-class=\"{\'ibd-selected\':ngModel.toString()===option.value.toString()}\" ng-style=\"{\'z-index\':ibdOptions.length-$index}\"><input class=ibd-togglelist-option type=radio ng-model=$parent.ngModel name={{ibdName}} value=\"{{option.value}}\">{{option.name}}</label></fieldset>");
  $templateCache.put("ibd.validate.tpl.html", "<span class=ibd-validate><span class=ibd-invalid-trigger></span></span>");
  $templateCache.put("ibd.virtualise.tpl.html", "<div class=ibd-virtualise><div class=ibd-virtualise-float></div></div>");
  $templateCache.put("ibd.window.mask.tpl.html", "<div id=ibd-window-mask></div>");
  $templateCache.put("ibd.window.notice.tpl.html", "<section class=\"window-body-notice p1\"><div><i class=\"ibd-icon {{noticeIcon}}\"></i></div><div><p class=\"bold mb1\">{{noticeTitle}}</p>{{noticeMessage}}</div></section>");
  $templateCache.put("ibd.window.tpl.html", "<section class=ibd-window><header class=\"window-header px1 py05 clearfix bg-accent-01\"><span ibd-compile=ibdWindowTitle class=\"bold left mr2 color-white\"></span> <span class=\"right z4 cursor-hand\" ng-click=ibdWindowClose()><i class=\"ibd-icon ibd-icon-close icon-color-white\" width=8></i></span></header><section class=window-body ibd-compile=ibdWindowBody></section><section class=window-footer ibd-compile=ibdWindowFooter></section></section>");
  $templateCache.put("ibd-icon-add.svg", "<svg xmlns=http://www.w3.org/2000/svg width=13 height=13 viewBox=\"0 0 13 13\"><path d=\"M13 5H8V0H5v5H0v3h5v5h3V8h5\"/></svg>");
  $templateCache.put("ibd-icon-arrow-down.svg", "<svg xmlns=http://www.w3.org/2000/svg width=17.8 height=11.6 viewBox=\"0 0 17.8 11.6\"><path d=\"M17.8 2.7l-8.9 8.9L0 2.7 2.7 0l6.2 6.2L15.1 0\" fill=\"#020202\"/></svg>");
  $templateCache.put("ibd-icon-arrow-left.svg", "<svg xmlns=http://www.w3.org/2000/svg width=11.606 height=17.828 viewBox=\"0 0 11.606 17.828\"><path fill=#020202 d=\"M8.912 17.828L0 8.914 8.912 0l2.694 2.693-6.22 6.22 6.22 6.222\"/></svg>");
  $templateCache.put("ibd-icon-arrow-right.svg", "<svg xmlns=http://www.w3.org/2000/svg width=11.606 height=17.827 viewBox=\"0 0 11.606 17.827\"><path fill=#020202 d=\"M2.693 17.827l8.913-8.913L2.693 0 0 2.692l6.22 6.222L0 15.134\"/></svg>");
  $templateCache.put("ibd-icon-arrow-up.svg", "<svg xmlns=http://www.w3.org/2000/svg width=17.8 height=11.6 viewBox=\"0 0 17.8 11.6\"><path d=\"M0 8.9L8.9 0l8.9 8.9-2.7 2.7-6.2-6.2-6.2 6.2\" fill=\"#020202\"/></svg>");
  $templateCache.put("ibd-icon-checkmark.svg", "<svg xmlns=http://www.w3.org/2000/svg width=26.382 height=20.345 viewBox=\"0 0 26.382 20.345\"><path fill=#231F20 d=\"M8.82 20.345L0 11.522l2.78-2.78 6.04 6.04L23.602 0l2.78 2.78\"/></svg>");
  $templateCache.put("ibd-icon-close.svg", "<svg xmlns=http://www.w3.org/2000/svg width=14.484 height=14.486 viewBox=\"0 0 14.484 14.486\"><path fill=#231F20 d=\"M14.484 1.954L12.53 0 7.243 5.29 1.953 0 0 1.955l5.29 5.29L0 12.532l1.953 1.953 5.29-5.29 5.288 5.29 1.96-1.953L9.2 7.244\"/></svg>");
  $templateCache.put("ibd-icon-document.svg", "<svg xmlns=http://www.w3.org/2000/svg width=24 height=28 viewBox=\"0 0 24 28\"><path d=\"M24 9L14 0H0v28h24V9zm-6 0h-4V4.8L18 9zm2 15H4V4h6v9h10v11z\" fill=\"#020202\"/></svg>");
  $templateCache.put("ibd-icon-documents-multiple.svg", "<svg xmlns=http://www.w3.org/2000/svg width=26 height=32 viewBox=\"0 0 26 32\"><path d=\"M17.23 0H7v7H0v25h21v-7h5V9.23L17.23 0zM17 28H4V11h3v14h10v3zm5-7H11V4h6v6h5v11z\"/></svg>");
  $templateCache.put("ibd-icon-download.svg", "<svg xmlns=http://www.w3.org/2000/svg width=31.447 height=25.334 viewBox=\"0 0 31.447 25.334\"><path d=\"M24.3 7.404C23.55 3.194 20.003 0 15.724 0c-4.28 0-7.828 3.193-8.575 7.404C3.08 8.18 0 11.852 0 16.284c0 4.997 3.91 9.05 8.735 9.05 1.098 0 2.144-.218 3.108-.603-.62-.95-1.07-2.11-1.26-3.41-.584.24-1.2.4-1.85.4-2.89 0-5.24-2.43-5.24-5.43 0-2.61 1.803-4.85 4.287-5.32l2.367-.45.437-2.45c.457-2.57 2.62-4.44 5.14-4.44s4.682 1.87 5.14 4.44l.435 2.45 2.36.46c2.48.48 4.28 2.72 4.28 5.32 0 3-2.35 5.43-5.24 5.43-.65 0-1.27-.16-1.85-.39-.19 1.3-.64 2.46-1.26 3.41.96.39 2.01.61 3.11.61 4.82 0 8.73-4.05 8.73-9.05 0-4.43-3.09-8.1-7.15-8.88zM20.725 16h-3v-6h-4v6h-3l5.004 5\"/></svg>");
  $templateCache.put("ibd-icon-edit.svg", "<svg xmlns=http://www.w3.org/2000/svg width=25.988 height=26.177 viewBox=\"0 0 25.988 26.177\"><path d=\"M1.463 18.406L19.87 0l6.118 6.117L7.58 24.524zM0 26.176h6.3l-6.3-6.3\"/></svg>");
  $templateCache.put("ibd-icon-executed.svg", "<svg xmlns=http://www.w3.org/2000/svg width=41.847 height=41.846 viewBox=\"0 0 41.847 41.846\"><path d=\"M20.924 0C9.37 0 0 9.37 0 20.922c0 11.556 9.37 20.924 20.924 20.924s20.923-9.368 20.923-20.924C41.847 9.37 32.48 0 20.924 0zm0 36.615c-8.652 0-15.694-7.04-15.694-15.693S12.27 5.23 20.924 5.23c8.65 0 15.692 7.037 15.692 15.69s-7.04 15.695-15.692 15.695z\"/><path d=\"M27.115 13.81l-8.846 8.844-3.54-3.54c-.98-.977-2.56-.977-3.54 0s-.98 2.564 0 3.54l5.31 5.308c.98.974 2.56.974 3.53 0l10.62-10.615c.98-.98.98-2.56 0-3.537-.98-.98-2.56-.98-3.54 0z\"/></svg>");
  $templateCache.put("ibd-icon-info.svg", "<svg xmlns=http://www.w3.org/2000/svg width=31 height=31 viewBox=\"0 0 31 31\"><path d=\"M15.5 0C6.94 0 0 6.94 0 15.5 0 24.06 6.94 31 15.5 31 24.06 31 31 24.06 31 15.5 31 6.94 24.06 0 15.5 0zM18 24h-5V13h5v11zm-2.43-13.144c-1.34 0-2.428-1.087-2.428-2.428 0-1.34 1.088-2.428 2.43-2.428S18 7.087 18 8.43c0 1.34-1.088 2.426-2.43 2.426z\" fill=\"#020202\"/></svg>");
  $templateCache.put("ibd-icon-loading.svg", "<svg xmlns=http://www.w3.org/2000/svg width=36 height=36 viewBox=\"0 0 36 36\"><path d=\"M16 0h4v8h-4zm0 28h4v8h-4zM0 16h8v4H0zm28 0h8v4h-8zM6.686 32.14l-2.828-2.827 5.657-5.657 2.828 2.828zM29.313 3.857l2.828 2.828-5.65 5.657-2.83-2.828zm0 28.283l-5.66-5.655 2.83-2.83 5.657 5.657zM6.683 3.857l5.657 5.657-2.826 2.828-5.656-5.656z\" fill=\"#020202\"/></svg>");
  $templateCache.put("ibd-icon-lock-solid.svg", "<svg xmlns=http://www.w3.org/2000/svg width=26 height=32 viewBox=\"0 0 26 32\"><path d=\"M23 10c0-5.52-4.478-10-10-10C7.477 0 3 4.48 3 10H0v22h26V10h-3zm-8 16h-4v-8h4v8zM6.755 10c0-3.447 2.796-6.244 6.245-6.244 3.447 0 6.244 2.797 6.244 6.244H6.754z\" fill-rule=evenodd clip-rule=evenodd fill=\"#272727\"/></svg>");
  $templateCache.put("ibd-icon-logout.svg", "<svg xmlns=http://www.w3.org/2000/svg width=30 height=30 viewBox=\"0 0 30 30\"><g fill-rule=evenodd clip-rule=evenodd fill=#020202><path d=\"M30 0H0v30h30v-9h-4v5H4V4h22v5h4\"/><path d=\"M28.444 14.88l-6.437-6.437v4.407H10.01v4.062h11.997v4.406\"/></g></svg>");
  $templateCache.put("ibd-icon-popup-window.svg", "<svg xmlns=http://www.w3.org/2000/svg width=13.471 height=14.04 viewBox=\"0 0 13.471 14.04\"><g fill=#231F20><path d=\"M5.083 4.787L6.83 3.04H0v11h11V6.113L8.704 8.408l-3.62-3.62zM10 13.04H1v-4h9v4z\"/><path d=\"M7.07 0l2.3 2.305-2.44 2.44L8.726 6.54l2.44-2.44 2.304 2.303V0\"/></g></svg>");
  $templateCache.put("ibd-icon-profile.svg", "<svg xmlns=http://www.w3.org/2000/svg width=28.003 height=27.981 viewBox=\"0 0 28.003 27.981\"><g fill=#020202><path d=\"M14 14.274c-7.52 0-13.64 6.242-14 13.707h28.003c-.3-7.46-6.443-13.7-14.003-13.7z\"/><circle cx=14.002 cy=6.989 r=\"6.989\"/></g></svg>");
  $templateCache.put("ibd-icon-refresh.svg", "<svg xmlns=http://www.w3.org/2000/svg width=32 height=31.818 viewBox=\"0 0 32 31.818\"><path d=\"M28.1 12.894H32V1.637l-3.814 3.77C25.253 1.957 20.886 0 15.996 0 7.163 0 0 7.113 0 15.948c0 8.837 7.162 15.87 15.997 15.87 7.74 0 14.193-4.925 15.676-12.925H28.11c-1.416 6-6.295 9.444-12.112 9.444-6.927 0-12.54-5.563-12.54-12.488S9.07 3.43 15.998 3.43c3.92 0 7.404 1.58 9.696 4.44l-5.08 5.023H28.1z\" fill=\"#020202\"/></svg>");
  $templateCache.put("ibd-icon-search.svg", "<svg xmlns=http://www.w3.org/2000/svg width=29.95 height=30.269 viewBox=\"0 0 29.95 30.269\"><path d=\"M29.95 27.27l-9.313-9.313c1.324-1.86 2.11-4.127 2.11-6.582C22.747 5.09 17.654 0 11.373 0S0 5.09 0 11.375c0 6.28 5.092 11.372 11.373 11.372 2.292 0 4.422-.684 6.207-1.85l9.37 9.37 3-2.998zM3 11.374C3 6.757 6.756 3 11.373 3s8.374 3.757 8.374 8.375c0 1.622-.472 3.134-1.274 4.418l-.04-.038-2.84 2.84c-1.24.73-2.68 1.152-4.22 1.152C6.756 19.747 3 15.99 3 11.375z\" fill=\"#020202\"/></svg>");
  $templateCache.put("ibd-icon-settings.svg", "<svg xmlns=http://www.w3.org/2000/svg width=30 height=30 viewBox=\"0 0 30 30\"><path d=\"M30 13.123v3.75h-3.92c-.28 1.664-.94 3.188-1.867 4.516l3.935 3.42-2.708 3.34-4.336-3.77c-1.262.82-2.684 1.42-4.23 1.68V30h-3.75v-3.92c-1.55-.262-2.973-.863-4.238-1.693L4.56 28.153 1.853 24.81l3.938-3.427c-.91-1.326-1.57-2.848-1.85-4.51H0v-3.75h3.918c.28-1.66.94-3.184 1.867-4.512L1.852 5.2 4.56 1.85l4.335 3.768c1.26-.82 2.684-1.416 4.23-1.68V0h3.75v3.938c1.546.264 2.968.86 4.23 1.68L25.44 1.85l2.708 3.344-3.935 3.418c.928 1.328 1.586 2.852 1.867 4.512H30zm-15-3.75c-3.107 0-5.627 2.52-5.627 5.627 0 3.107 2.52 5.623 5.627 5.623s5.623-2.516 5.623-5.623c0-3.105-2.516-5.627-5.623-5.627\" fill-rule=evenodd clip-rule=\"evenodd\"/></svg>");
  $templateCache.put("ibd-icon-upload.svg", "<svg xmlns=http://www.w3.org/2000/svg width=31.447 height=25.334 viewBox=\"0 0 31.447 25.334\"><g fill-rule=evenodd clip-rule=evenodd><path d=\"M24.3 7.404C23.55 3.194 20.003 0 15.724 0c-4.28 0-7.828 3.193-8.575 7.404C3.08 8.18 0 11.852 0 16.284c0 4.997 3.91 9.05 8.736 9.05 1.097 0 2.143-.22 3.107-.604-.62-.95-1.07-2.11-1.258-3.412-.586.236-1.203.396-1.85.396-2.89 0-5.242-2.438-5.242-5.43 0-2.61 1.803-4.85 4.287-5.322l2.367-.453.437-2.45c.457-2.58 2.62-4.44 5.14-4.44s4.682 1.86 5.14 4.44l.435 2.45 2.36.45c2.48.47 4.28 2.71 4.28 5.32 0 2.99-2.35 5.43-5.24 5.43-.65 0-1.27-.16-1.85-.4-.19 1.3-.64 2.46-1.26 3.41.96.38 2.01.6 3.11.6 4.82 0 8.73-4.06 8.73-9.05 0-4.43-3.09-8.11-7.15-8.88z\"/><path d=\"M15.686 9.302L10.68 15.07h3.147v6.005h3.91V15.07h3.145\"/></g></svg>");
  $templateCache.put("ibd-icon-warning-circle.svg", "<svg xmlns=http://www.w3.org/2000/svg width=31.924 height=31.926 viewBox=\"0 0 31.924 31.926\"><path d=\"M15.962 0C7.146 0 0 7.146 0 15.963c0 8.815 7.146 15.963 15.962 15.963 8.814 0 15.962-7.147 15.962-15.963C31.924 7.146 24.776 0 15.962 0zm-2.346 6.012h4.692v11.896h-4.692V6.012zM15.96 26c-1.573 0-2.85-1.277-2.85-2.853 0-1.576 1.276-2.853 2.85-2.853 1.577 0 2.855 1.276 2.855 2.853 0 1.576-1.278 2.853-2.854 2.853z\" fill=\"#020202\"/></svg>");
  $templateCache.put("ibd-icon-warning-triangle.svg", "<svg xmlns=http://www.w3.org/2000/svg width=30 height=30 viewBox=\"0 0 30 30\"><path d=\"M15 0L0 30h30L15 0zm-1.946 10.813h3.892v9.578h-3.892v-9.57zM15 26.46c-1.307 0-2.366-1.06-2.366-2.367 0-1.308 1.06-2.366 2.365-2.366 1.3 0 2.36 1.06 2.36 2.366S16.3 26.46 15 26.46z\" fill=\"#020202\"/></svg>");
}]);

},{}],3:[function(require,module,exports){
/**
  * @generous
    
  * @type component
   
  * @name accordion
   
  * @parent wrap.ng
     
  * @description 
    Ultra lightweight accordion implementation, leveraging DOM state and CSS vs Javascript for show/hide control. 
    It is important to note the component assumes the first immediate child element represents the accordion header (toggle).
  
  * @param {object} config Accordion configuration object  
  * @param {mixed=} config.toggle resolves to a `boolean` value to determine 
            the toggle state of the accordion
  * @param {string=} config.header the header for the accordion, can be a string, HTML or template entry, 
            if defined inline as a string, encapsulate in single quotation marks
  * @param {string=} config.group the name of the group the accordion item is part of, 
            only a single group item can be expanded at once - leave blank to disable. 
            Various accordions in a group. (Works similar to radio group, this helps achieve open only one at a time).
  
  * @example
  
    <head>
       <link href="../ibd.bare.css" rel="stylesheet" type="text/css">
       <link href="../ibd.wrap.ng.css" rel="stylesheet" type="text/css">
       <script src="libs/angular.1.4.7.min.js"></script>       
       <script src="../ibd.core.js"></script>       
       <script src="../ibd.wrap.ng.js"></script>       
    </head>
    <html>
        <div ng-app='app' ng-controller='exampleController'>
            <h4>Simple Accordion Example </h4>
            <ibd-accordion config="{header:'Accordion Simple Header '}">
                actual body content
            </ibd-accordion>
            <br>
            <hr>
            <br>
            <h4>Accordion Group Example </h4>
            <ibd-accordion config="{header:'Accordion Group Header 1', group: 'exampleGroup'}">
                actual body content
            </ibd-accordion>
            <ibd-accordion config="{header:'Accordion Group Header 2', group: 'exampleGroup'}">
                actual body content
            </ibd-accordion>
            <ibd-accordion config="{header:'Accordion Group Header 3', group: 'exampleGroup'}">
                actual body content
            </ibd-accordion>
        </div>
    </html>
   <javascript>        
        angular.module('app', ['ibd'])
            .controller('exampleController', [function () {}]);
   </javascript>  
  */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

exports['default'] = {

    name: _commonModulePrefix2['default'].name + 'Accordion',
    directive: ["$log", "ibdUtilFactory", "$timeout", function directive($log, ibdUtilFactory, $timeout) {
        'ngInject';

        var tpls = {
            'default': _commonModulePrefix2['default'].name + '.accordion.tpl.html'
        };

        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: tpls['default'],
            scope: {
                prefix: '&',
                config: '='
            },
            compile: function compile(element) {
                return {
                    pre: function pre(scope, element, attrs) {
                        scope.prefix = _commonModulePrefix2['default'].name;
                    },
                    post: function post(scope, el, attrs) {
                        $timeout(function () {
                            el[0].getElementsByTagName('label')[0].setAttribute('for', ibdUtilFactory.genId(el[0].getElementsByTagName('input')[0]));
                        });
                    }
                };
            }
        };
    }]
};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}],4:[function(require,module,exports){
/* 

There is no documentation needed for block, as this is a nested component of blocks.
Please refer blocks.js for documentation & usage specifics.

*/
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

exports['default'] = {
    name: _commonModulePrefix2['default'].name + 'Block',

    component: ["$log", function component($log) {
        'ngInject';

        var tpls = {
            'default': _commonModulePrefix2['default'].name + '.block.tpl.html'
        };

        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: tpls['default']
        };
    }]
};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}],5:[function(require,module,exports){
/**    
    * @generous
    
    * @type component
  
    * @name blocks
   
    * @parent wrap.ng
     
    * @description 
        Used to create areas of nestable resizable blocks.
    
    * @param {string=} ibd-size Starting size (any CSS value allowed) for child block, 
            the block with the first value present is used above any other.
    * @param {=} ibd-vertical Layout blocks vertically, does not require a value
    * @param {number=} ibd-snap Number of pixels within which to snap elements when resizing, defaults to `50`
    * @param {=} ibd-resizable Allow blocks to be resizable, does not require a value. 
            Double click a resize handle to restore original dimensions.
    * @param {function=} ibd-on-change Function to fire when a resize event has occurred. 
            Passed the parent `ibd-blocks` element and array of child `ibd-block` elements
    * @param {=} ibd-spill Add to any child `ibd-block` to allow overflowing content (e.g. for popup menus etc)
    * @param {=} ibd-resize-toolbar If the blocks are resizable, show helper buttons
    * @param {=} ibd-ghost Ghosts the splitter on resize, instead of resizing content when dragging, 
            content is only sized when the mouse button is released
    * @param {number=} ibd-live Optional time in `ms` to recalculate layout - use if child blocks are likely to 
            programatically change in size, note `ibd-live` should not be used
            in conjunction with `ibd-resizable`. Instead, manually trigger a layout update using the scoped method `ibdBlocksRefresh()`

  
    * @example
      <head>
       <link href="../ibd.bare.css" rel="stylesheet" type="text/css">
       <link href="../ibd.wrap.ng.css" rel="stylesheet" type="text/css">
       <script src="libs/angular.1.4.7.min.js"></script>       
       <script src="../ibd.core.js"></script>       
       <script src="../ibd.wrap.ng.js"></script>
    </head>
    <html>
        <div ng-app='app' ng-controller='exampleController'>
            <ibd-blocks style="height:500px;" ibd-resizable ibd-horizontal>
                <ibd-block>
                    One
                </ibd-block>
                <ibd-block>
                    Two
                </ibd-block>
            </ibd-blocks>
        </div>
    </html>
   <javascript>        
        angular.module('app', ['ibd'])
            .controller('exampleController', [function () {}]);
   </javascript>  
  */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

exports['default'] = {
    name: _commonModulePrefix2['default'].name + 'Blocks',
    component: ["$log", "ibdUtilFactory", "$timeout", "ibdDragFactory", "$templateCache", "$compile", "$window", function component($log, ibdUtilFactory, $timeout, ibdDragFactory, $templateCache, $compile, $window) {
        'ngInject';

        var tpls = {
            'default': _commonModulePrefix2['default'].name + '.blocks.tpl.html',
            resizeHandle: _commonModulePrefix2['default'].name + '.block.resize.handle.tpl.html'
        };

        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: tpls['default'],
            link: function link(scope, el, attrs) {

                $timeout(function () {
                    ibdUtilFactory.ensurePosition(el);

                    var orientation = el[0].hasAttribute('ibd-vertical') ? 'vertical' : 'horizontal',
                        dimension = orientation === 'vertical' ? 'height' : 'width',
                        offset = orientation === 'vertical' ? 'top' : 'left',
                        blocks = el[0].children,
                        checkBlocks = [],
                        onResizeFn = el[0].hasAttribute('ibd-on-change') && scope[el[0].getAttribute('ibd-on-change')] ? scope[el[0].getAttribute('ibd-on-change')] : null,
                        dimensionSize,
                        ghost = el[0].hasAttribute('ibd-ghost'),
                        blockCount = blocks.length,
                        snap = attrs.ibdSnap || 50,
                        resizeHandle = $window.angular.element($templateCache.get(tpls.resizeHandle)),
                        p,
                        blocksWithNoSize = [],
                        dimensionCalc,
                        ffCompatability = ibdUtilFactory.getBrowserInfo(),
                        live = null,
                        interval = null;

                    ffCompatability = ffCompatability.name === 'firefox' && ffCompatability.version === '10' ? '-moz-' : '';

                    // make sure we are dealing with direct children only...to prevent nested layouts causing issues...
                    for (p = 0; p < blockCount; p++) {
                        if (blocks[p].getAttribute('class').indexOf('ibd-block') > -1) {
                            checkBlocks.push(blocks[p]);
                        }
                    }
                    blocks = checkBlocks;
                    blockCount = blocks.length;
                    if (blockCount < 2) {
                        return;
                    }
                    el.addClass('ibd-' + orientation);
                    // first, find all blocks with size - override the others and bin the rest
                    function calcSize() {
                        blocksWithNoSize = [];
                        dimensionCalc = null;
                        for (p = 0; p < blockCount; p++) {
                            if (blocks[p].hasAttribute('ibd-size')) {
                                dimensionSize = blocks[p].getAttribute('ibd-size');
                                blocks[p].style[dimension] = dimensionSize;
                                dimensionCalc = (dimensionCalc ? dimensionCalc + ' + ' : '') + dimensionSize;
                            } else {
                                blocksWithNoSize.push(blocks[p]);
                            }
                        }
                        for (var n = blocksWithNoSize.length; n--;) {
                            blocksWithNoSize[n].style[dimension] = ffCompatability + 'calc((100% - (' + (dimensionCalc || '0px') + ')) / ' + blocksWithNoSize.length + ')';
                        }
                    }
                    calcSize();
                    scope.ibdBlocksRefresh = calcSize;
                    scope.ibdBlocksSize = function (e, collapsePrev) {
                        var pEl = ibdUtilFactory.parent($window.angular.element(e.target), '.ibd-block');
                        if (collapsePrev === true) {
                            setSize(pEl, 0);
                        } else if (collapsePrev === false) {
                            setSize(pEl, dimension === 'width' ? pEl[0].offsetWidth + pEl.next()[0].offsetWidth : pEl[0].offsetHeight + pEl.next()[0].offsetHeight);
                        } else {
                            calcSize();
                        }
                        e.preventDefault();
                        e.stopPropagation();
                    };

                    function setSize(pEl, d) {
                        var nEl = pEl.next(),
                            parentDimension = dimension === 'width' ? pEl[0].offsetWidth + nEl[0].offsetWidth : pEl[0].offsetHeight + nEl[0].offsetHeight,
                            perc = d * 100 / parentDimension,
                            availableCalc = null;
                        for (p = 0; p < blockCount; p++) {
                            if (blocks[p] !== pEl[0] && blocks[p] !== nEl[0]) {
                                availableCalc = (availableCalc ? availableCalc + ' + ' : '') + (dimension === 'width' ? blocks[p].offsetWidth : blocks[p].offsetHeight) + 'px';
                            }
                        }
                        pEl[0].style[dimension] = availableCalc ? ffCompatability + 'calc(((100% - (' + availableCalc + ')) / 100) * ' + perc + ')' : perc + '%';
                        nEl[0].style[dimension] = availableCalc ? ffCompatability + 'calc(((100% - (' + availableCalc + ')) / 100) * ' + (100 - perc) + ')' : 100 - perc + '%';
                    }

                    function positionHandle(rEl, d) {
                        rEl = d !== undefined ? d.handle : rEl;
                        rEl[0].style[offset] = '100%';
                    }

                    function triggerSize(e, d) {
                        var resizeHandleOffset = offset === 'left' ? d.handle[0].offsetLeft : d.handle[0].offsetTop,
                            pEl = d.handle.parent(),
                            parentDimension = dimension === 'width' ? pEl[0].offsetWidth + pEl.next()[0].offsetWidth : pEl[0].offsetHeight + pEl.next()[0].offsetHeight;
                        if (resizeHandleOffset < 0 + snap) {
                            setSize(pEl, 0);
                        } else if (resizeHandleOffset > parentDimension - snap) {
                            setSize(pEl, parentDimension);
                        } else {
                            setSize(pEl, resizeHandleOffset);
                        }
                        positionHandle(d.handle);
                    }

                    function onDraggingFn(e, d) {
                        if (ghost) {
                            return;
                        }
                        triggerSize(e, d);
                    }

                    var styleGhost = function styleGhost(d, toggle) {
                        var pEl = d.handle.parent(),
                            nEl = pEl.next();
                        toggle = toggle === true ? true : false;
                        pEl.toggleClass('ibd-ghost', toggle);
                        nEl.toggleClass('ibd-ghost', toggle);
                    };

                    var onDragStartFn = function onDragStartFn(e, d) {
                        d.handle.parent().parent().addClass('ibd-resizing');
                        if (ghost && d) {
                            styleGhost(d, true);
                        }
                    };

                    var onDragEndFn = function onDragEndFn(e, d) {
                        if (ghost && d) {
                            triggerSize(e, d);
                            styleGhost(d, false);
                        } else {
                            var rEl = d !== undefined ? d.handle : rEl;
                            rEl[0].style[offset] = '100%';
                        }
                        if (onResizeFn) {
                            onResizeFn(el, blocks);
                        }
                        d.handle.parent().parent().removeClass('ibd-resizing');
                    };

                    if (el[0].hasAttribute('ibd-resizable')) {
                        for (p = 0; p < blockCount - 1; p++) {
                            var blockEl = $window.angular.element(blocks[p]),
                                resizeHandleEl = resizeHandle.clone();
                            blockEl.append(resizeHandleEl);

                            $compile(resizeHandleEl)(scope);
                            if (el[0].hasAttribute('ibd-resize-toolbar')) {
                                resizeHandleEl.addClass('ibd-resize-toolbar');
                            }
                            resizeHandleEl.on('dblclick', calcSize);
                            positionHandle(resizeHandleEl);

                            ibdDragFactory.init({
                                element: resizeHandleEl,
                                container: el,
                                allowX: orientation === 'horizontal',
                                allowY: orientation === 'vertical',
                                snap: false,
                                listeners: {
                                    dragStart: onDragStartFn,
                                    dragging: onDraggingFn,
                                    dragEnd: onDragEndFn
                                }
                            });
                        }
                    }
                    if (el[0].hasAttribute('ibd-live')) {
                        live = parseInt(el[0].getAttribute('ibd-live'), 0);
                        live = live === 0 ? 250 : live;
                        interval = setInterval(function () {
                            calcSize();
                        }, live);
                    }
                    scope.$on('$destroy', function () {
                        clearInterval(interval);
                    });
                }, false);
            }
        };
    }]
};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}],6:[function(require,module,exports){


/**    
    * @generous
    
    * @type component
  
    * @name checkbox
   
    * @parent wrap.ng
     
    * @description 
        Used to create checkboxes with custom styling. 
        Functionally identical to angular {@link https://docs.angularjs.org/api/ng/input/input%5Bcheckbox%5D input[type=checkbox]}        
    
    * ## CSS Classes:
    *  - `ibd-multiple` can be used to display a multiple checkbox.
    *  - `ibd-required` can be used to indicate the checkbox is required.
  
    * @param {string=} ibd-label Label to use for the checkbox
  
    * @example
      <head>
       <link href="../ibd.bare.css" rel="stylesheet" type="text/css">
       <link href="../ibd.wrap.ng.css" rel="stylesheet" type="text/css">
       <script src="libs/angular.1.4.7.min.js"></script>       
       <script src="../ibd.core.js"></script>       
       <script src="../ibd.wrap.ng.js"></script>
    </head>
    <html>
        <div ng-app='app' ng-controller='exampleController'>
            <ibd-checkbox ibd-label="Checkbox" ng-model="model"></ibd-checkbox>
            <br /><br />
            <ibd-checkbox class="ibd-required" ibd-label="Checkbox With Required Class" ng-model="model"></ibd-checkbox>
            <br /><br />
            <ibd-checkbox class="ibd-required" ibd-label="Checkbox Disabled" ng-model="model" ng-disabled="true"></ibd-checkbox>
            <br /><br />
            <ibd-checkbox ibd-label="Multiple Checkbox" ng-model="model" class="ibd-multiple"></ibd-checkbox>
            <br /><br />
            {{model}}
        </div>
    </html>
   <javascript>        
        angular.module('app', ['ibd'])
            .controller('exampleController', ['$scope', function($scope) {
                $scope.model = false;
            }]);
   </javascript>  
  */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

exports['default'] = {
    name: _commonModulePrefix2['default'].name + 'Checkbox',
    directive: ["$log", "ibdUtilFactory", function directive($log, ibdUtilFactory) {
        'ngInject';

        var tpls = {
            'default': _commonModulePrefix2['default'].name + '.checkbox.tpl.html',
            wrapper: _commonModulePrefix2['default'].name + '.checkbox.wrap.tpl.html'
        };

        return {
            restrict: 'E',
            replace: true,
            templateUrl: tpls['default'],
            scope: {
                ibdLabel: "@"
            },
            link: function link(scope, el) {
                var tmpEl = ibdUtilFactory.wrap(scope, el, tpls.wrapper);
                tmpEl[1].setAttribute('class', tmpEl[1].getAttribute('class') + ' ' + tmpEl[0].getAttribute('class').trim());
            }
        };
    }]
};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}],7:[function(require,module,exports){
/**    
    * @generous
    
    * @type component
  
    * @name compile
   
    * @parent wrap.ng
     
    * @description 
        Used to compile passed content of varying types.
    
    * @param {mixed} ibd-compile Can either be a scoped variable, 
            template cache address, 
            text or HTML string which is compiled to form the contents of the element the attribute is present on
    
    * @example
      <head>
       <link href="../ibd.bare.css" rel="stylesheet" type="text/css">
       <link href="../ibd.wrap.ng.css" rel="stylesheet" type="text/css">
       <script src="libs/angular.1.4.7.min.js"></script>       
       <script src="../ibd.core.js"></script>       
       <script src="../ibd.wrap.ng.js"></script>
    </head>
    <html>
        <div ng-app='app' ng-controller='exampleController'>
            <div ibd-compile='your-template-cache-name.tpl.html'>
            </div>
        </div>
    </html>
   <javascript>        
        angular.module('app', ['ibd'])
            .controller('exampleController', [function () {}]);
   </javascript>  
  */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

exports['default'] = {

    name: _commonModulePrefix2['default'].name + 'Compile',
    directive: ["$log", "$templateCache", "$compile", "ibdUtilFactory", function directive($log, $templateCache, $compile, ibdUtilFactory) {
        'ngInject';

        return {
            restrict: 'A',
            scope: {
                ibdCompile: '='
            },
            link: function link(scope, el) {
                var tpl = $templateCache.get(scope.ibdCompile) || scope.ibdCompile,
                    tgt;
                tpl = typeof tpl === 'string' && tpl.substr(0, 1) !== '<' ? '<span>' + tpl + '</span>' : tpl;
                tgt = typeof tpl === 'string' && tpl.indexOf('{{') > -1 ? tpl.substring(tpl.lastIndexOf("{{") + 2, tpl.lastIndexOf("}}")).split('.').shift() : null;

                el.append($compile(tpl)(ibdUtilFactory.recurseScope(scope.$parent, tgt)));
            }
        };
    }]
};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}],8:[function(require,module,exports){
/**    
    * @generous
    
    * @type factory
  
    * @name dragFactory
   
    * @parent wrap.ng
     
    * @description 
            Utility factory to provide drag functionality.
  */

/**    
  * @generous
  
  * @type method
 
  * @name init
 
  * @parent dragFactory
   
  * @description 
          Initiates drag functionality on passed element
  
  * @param {object} config Configuration object
  * @param {object} config.element Element to make draggable
  * @param {object=} config.handle Element to use as drag handle, defaults to `options.element`
  * @param {object=} config.container Element to make contain draggable element within, defaults to `document.body`
  * @param {Boolean=} config.allowX  Allow dragging on X axis, defaults to `false`
  * @param {Boolean=} config.allowY  Allow dragging on Y axis, defaults to `false`
  * @param {Boolean=} config.snap Whether to allow the element to be dragged outside of the container 
        boundary and to snap back inside on release, defaults to `false`, which contains the draggable element
  * @param {Object=} config.listeners Object consisting of listener events
  * @param {function=} config.listeners.dragstart Function to fire on event, passed event as well as 
        object containing various items relating to the drag
  * @param {function=} config.listeners.dragging Function to fire on event, passed event as well as 
        object containing various items relating to the drag
  * @param {function=} config.listeners.dragend Function to fire on event, passed event as well as 
        object containing various items relating to the drag
  
  * @example
  <head>
     <link href="../ibd.bare.css" rel="stylesheet" type="text/css">
     <link href="../ibd.wrap.ng.css" rel="stylesheet" type="text/css">
     <script src="libs/angular.1.4.7.min.js"></script>       
     <script src="../ibd.core.js"></script>       
     <script src="../ibd.wrap.ng.js"></script>
     <style>
        [id^=exampleDraggable]{
            height:100px;
            width:100px;
            background:rgb(255, 254, 205);
        }
        [id^=exampleContainer]{
            width:100%;
            height:200px;
            background:#ddd;
        }
        .exampleDragHandle{
            height:20px;
            background:rgb(212, 249, 217);
        }
     </style>
  </head>
  <html>
      <div ng-app='app' ng-controller='exampleController'>
            <h1>Simple draggable</h1>
            <div id="exampleContainer1">
                <div id="exampleDraggable1"></div>
            </div><br /><br />
            <h1>Draggable with drag handle and snapping (drag outside container)</h1>
            <div id="exampleContainer2">
                <div id="exampleDraggable2">
                    <div class="exampleDragHandle"></div>
                </div>
            </div><br /><br />
            <h1>Draggable with in bounds and with event logging.</h1>
            <div id="exampleContainer3">
                <div id="exampleDraggable3">
                </div>
            </div>
            <span ng-if="state">Drag {{state}}, x:{{xCoord}} y:{{yCoord}}</span>
      </div>
  </html>
 <javascript>        
      angular.module('app', ['ibd'])
          .controller('exampleController', ['ibdDragFactory', '$scope', function(ibdDragFactory, $scope) {
               $scope.xCoord=0;
                $scope.yCoord=0;
                $scope.state=null;
                $scope.checkDrag=function(state, el){
                    $scope.state=state;
                    if(el){
                        $scope.xCoord=el.offsetLeft;
                        $scope.yCoord=el.offsetTop;
                    }else{
                        $scope.xCoord=0;
                        $scope.yCoord=0;
                    }
                    $scope.$apply()
                };
                ibdDragFactory.init({
                    element: document.getElementById("exampleDraggable1"),
                    container: document.getElementById("exampleContainer1"),
                    allowX:true,
                    allowY:true
                });
                ibdDragFactory.init({
                    element: document.getElementById("exampleDraggable2"),
                    container: document.getElementById("exampleContainer2"),
                    handle: document.getElementById("exampleDraggable2").children[0],
                    allowX:true,
                    allowY:true,
                    snap:true
                });
                ibdDragFactory.init({
                    element: document.getElementById("exampleDraggable3"),
                    container: document.getElementById("exampleContainer3"),
                    allowX:true,
                    allowY:true,
                    listeners:{
                        dragStart:function(e, dragObj){
                            $scope.checkDrag("started");
                        },
                        dragging:function(e, dragObj){
                            $scope.checkDrag("dragging",dragObj.element[0]);
                        },
                        dragEnd:function(e, dragObj){
                            $scope.checkDrag("ended");
                        }
                    }
                });
          }]);
 </javascript>  
*/

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

exports['default'] = {

    name: _commonModulePrefix2['default'].name + 'DragFactory',
    factory: ["ibdUtilFactory", "$window", function factory(ibdUtilFactory, $window) {
        'ngInject';

        var dragging = null,
            html = $window.angular.element(document.documentElement);

        //Checks if a given element is with in the bounds of a given DOM object or viewport
        var contain = function contain() {
            var el = dragging.element[0],
                container = dragging.container[0],
                h = container.tagName === "BODY" ? document.documentElement.clientHeight : container.offsetHeight,
                w = container.tagName === "BODY" ? document.documentElement.clientWidth : container.offsetWidth,
                oX = container.style.x || 0,
                oY = container.style.y || 0;

            if (dragging.allowX) {
                if (el.offsetLeft < 0 + oX) {
                    el.style.left = 0 + oX + 'px';
                } else if (el.offsetLeft > w - el.offsetWidth - oX) {
                    el.style.left = (w - el.offsetWidth - oX < 0 ? 0 : w - el.offsetWidth - oX) + 'px';
                }
            }
            if (dragging.allowY) {
                if (el.offsetTop < 0 + oY) {
                    el.style.top = 0 + oY + 'px';
                } else if (el.offsetTop > h - el.offsetHeight - oY) {
                    el.style.top = (h - el.offsetHeight - oY < 0 ? 0 : h - el.offsetHeight - oY) + 'px';
                }
            }
        };

        var dragMove = function dragMove(e) {
            if (!dragging) return;
            var el = dragging.element[0];
            dragging.dragPos = {
                x: el.offsetLeft + (e.clientX - el.getBoundingClientRect().left - dragging.offsetStart.x),
                y: el.offsetTop + (e.clientY - el.getBoundingClientRect().top - dragging.offsetStart.y)
            };
            if (dragging.allowX) {
                el.style.left = dragging.dragPos.x + 'px';
            }
            if (dragging.allowY) {
                el.style.top = dragging.dragPos.y + 'px';
            }
            if (dragging.listeners && dragging.listeners.dragging && typeof dragging.listeners.dragging === "function") {
                dragging.listeners.dragging(e, dragging);
            }
            if (!dragging.snap) {
                contain();
            }
        };

        //to dragUp
        var dragUp = function dragUp(e) {
            if (!dragging) return;
            document.onselectstart = function () {
                return true;
            };
            dragging.element.removeClass("ibd-dragging");
            html.removeClass("ibd-dragging");
            if (dragging.snap) contain();
            if (dragging.listeners && dragging.listeners.dragEnd && typeof dragging.listeners.dragEnd === "function") {
                dragging.dragEnd = {
                    x: e.clientX,
                    y: e.clientY
                };
                dragging.listeners.dragEnd(e, dragging);
            }
            dragging = null;

            angular.element(window).unbind('mouseup', dragUp).unbind('mousemove', dragMove);
        };

        var service = {};

        service.init = function (options) {

            if (!options || !options.element || !options.allowX && !options.allowY) {
                return;
            }

            var element = options.element,
                handle = options.handle || element,
                container = options.container || document.body;
            element = element[0] ? element : angular.element(element);
            handle = handle[0] ? handle : angular.element(handle);
            container = container[0] ? container : angular.element(container);

            ibdUtilFactory.ensurePosition(handle);
            ibdUtilFactory.ensurePosition(container);
            ibdUtilFactory.ensurePosition(element);

            handle.addClass('ibd-draggable');
            handle.on('mousedown', function (e) {
                document.onselectstart = function () {
                    return false;
                };
                angular.element(window).on('mouseup', dragUp).on('mousemove', dragMove);
                element.addClass("ibd-dragging");
                html.addClass("ibd-dragging");
                dragging = {
                    element: element,
                    handle: handle,
                    container: container,
                    dragStart: {
                        x: e.clientX,
                        y: e.clientY
                    },
                    allowX: options.allowX === undefined ? false : options.allowX,
                    allowY: options.allowY === undefined ? false : options.allowY,
                    snap: Boolean(options.snap),
                    offsetStart: {
                        x: e.clientX - element[0].getBoundingClientRect().left,
                        y: e.clientY - element[0].getBoundingClientRect().top
                    },
                    listeners: options.listeners
                };
                if (dragging.listeners && dragging.listeners.dragStart && typeof dragging.listeners.dragStart === "function") {
                    dragging.listeners.dragStart(e, dragging);
                }
            });
        };

        return service;
    }]

};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}],9:[function(require,module,exports){
// Author: Jey

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

exports['default'] = {

    name: _commonModulePrefix2['default'].name + 'FlyoverController',
    controller: ["$log", "$scope", "$templateCache", "ibdFlyoverFactory", "ibdUtilFactory", "$rootScope", "$timeout", "$compile", "$element", "$window", function controller($log, $scope, $templateCache, ibdFlyoverFactory, ibdUtilFactory, $rootScope, $timeout, $compile, $element, $window) {
        'ngInject';

        $scope.ibdFlyoverInit = function () {

            var flyover = $scope.ibdFlyover;

            if (flyover.templateUrl) {
                flyover.templateHTML = $templateCache.get(flyover.templateUrl);
            } else if (flyover.template) {
                flyover.templateHTML = flyover.template;
            } else if (ibdFlyoverFactory.group[flyover.group]) {
                flyover.templateHTML = ibdFlyoverFactory.group[flyover.group].templateHTML;
            } else if ($templateCache.get('ibd.flyover.component' + flyover.group + '.ng.tpl.html')) {
                flyover.templateHTML = $templateCache.get('ibd.flyover.component' + flyover.group + '.ng.tpl.html');
            } else {
                flyover.templateHTML = ibdFlyoverFactory.template;
            }
            flyover = {
                el: flyover.el && flyover.el !== 'undefined' ? flyover.el : $element,
                on: flyover.on === 'hover' || !flyover.on ? 'mouseover' : flyover.on,
                group: flyover.group || 'default',
                position: flyover.position || 'right',
                autoPos: flyover.autoPos === false ? false : true,
                showFn: flyover.showFn,
                hideFn: flyover.hideFn,
                templateHTML: flyover.templateHTML
            };

            if (flyover.on === 'mouseover' || flyover.on === 'hover') {
                flyover.off = 'mouseout';
            } else if (flyover.on === 'click') {
                flyover.off = 'click';
            } else if (flyover.on === 'contextmenu') {
                flyover.off = 'click contextmenu';
            } else {
                flyover.off = 'blur';
            }

            if (!flyover.el[0].id) {
                ibdUtilFactory.genId(flyover.el);
            }
            flyover.offEl = flyover.on === 'click' || flyover.on === 'contextmenu' ? angular.element(window) : flyover.el;

            $scope.ibdFlyoverConfig = flyover;

            flyover.el.on(flyover.on, $scope.ibdFlyoverShow);

            return ibdFlyoverFactory.register(flyover);
        };

        $scope.ibdFlyoverHide = function (e) {

            var flyoverConfig = $scope.ibdFlyoverConfig,
                flyover = ibdFlyoverFactory.group[flyoverConfig.group];

            if (e && !e.target.hasAttribute('ibd-flyover-close') && flyoverConfig.off.indexOf('click') > -1 && (e.target === flyover.active[0] || ibdUtilFactory.parent(e.target, flyover.active[0]) || e.target === flyover.el[0] || ibdUtilFactory.parent(e.target, flyover.el[0]) || ibdUtilFactory.parent(e.target, '.ibd-flyover') && ibdUtilFactory.parent(e.target, '.ibd-flyover').hasAttribute('for') && ibdUtilFactory.parent(document.getElementById(ibdUtilFactory.parent(e.target, '.ibd-flyover').getAttribute('for')), flyover.el[0]))) {
                return;
            }

            //DEBUG:
            //$log.log('hide ', flyoverConfig.off);

            flyover.el.removeClass('display-block');
            flyover.el.css({
                top: "-1px",
                left: "-1px"
            });

            if (flyover.active) {
                flyover.active.removeClass('ibd-flyover-active');
            }
            if (flyover.active) {
                // CONFIRM
                flyover.active.on(flyover.scope.ibdFlyoverConfig.on, flyover.scope.ibdFlyoverShow);

                flyover.scope.ibdFlyoverConfig.offEl.off(flyover.scope.ibdFlyoverConfig.off, flyover.scope.ibdFlyoverHide);

                clearInterval(flyover.scope.ibdFlyoverConfig.interval);

                if (flyover.scope.ibdFlyoverConfig.hideFn) {
                    flyover.scope.ibdFlyoverConfig.hideFn(flyoverConfig.el, flyover.el, $scope, flyover);
                }

                flyover.active = null;
                flyover.scope = null;
            }
        };
        $scope.ibdFlyoverShow = function (e) {

            // assign scope here, as may not be available content on initialisation
            if ($scope.ibdFlyover.scope && !$scope.ibdFlyoverConfig.scope) {
                $scope.ibdFlyoverConfig.scope = angular.extend($rootScope.$new(), $scope.ibdFlyover.scope);
            } else if (!$scope.ibdFlyoverConfig.scope) {
                $scope.ibdFlyoverConfig.scope = $scope.$parent;
            }
            if ($scope.ibdFlyover.enable === false || $scope.ibdFlyover.enable === 'false' || typeof $scope.ibdFlyover.enable === 'function' && !$scope.ibdFlyover.enable()) {
                return;
            }
            var flyoverConfig = $scope.ibdFlyoverConfig,
                flyover = ibdFlyoverFactory.group[flyoverConfig.group],
                posObj = flyoverConfig.on === 'contextmenu' ? {
                x: e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft),
                y: e.clientY + (document.documentElement.scrollTop || document.body.scrollTop)
            } : null;
            if (flyoverConfig.on === 'contextmenu') {
                // context menu event so dont show default menu
                e.preventDefault();
                e.stopPropagation();
            }
            flyoverConfig.el.addClass('ibd-flyover-active');
            flyoverConfig.el.off(flyoverConfig.on, $scope.ibdFlyoverShow);
            if (flyover.active && flyover.active !== flyoverConfig.el) {
                //DEBUG:
                //$log.log('clear ');
                $scope.ibdFlyoverHide();
            }
            //DEBUG:
            //$log.log('show ', flyoverConfig.on);

            $timeout(function () {
                flyover.el[0].innerHTML = flyoverConfig.templateHTML;
                $compile(angular.element(flyover.el[0].children[0]))(flyoverConfig.scope);
                flyoverConfig.scope.$apply();
                flyoverConfig.offEl.on(flyoverConfig.off, $scope.ibdFlyoverHide);
            }, 0, false);
            flyover.active = flyoverConfig.el;
            flyover.scope = $scope;

            $scope.ibdFlyoverConfig.interval = setInterval(function () {
                ibdFlyoverFactory.position(flyover.el, flyoverConfig.el, flyoverConfig.position, flyoverConfig.group, posObj, flyoverConfig);
            }, 25);

            ['ibd-left', 'ibd-right', 'ibd-top', 'ibd-bottom'].forEach(function (cls) {
                flyover.el.removeClass(cls);
            });

            flyover.el.addClass('display-block');
            flyover.el[0].setAttribute('for', flyoverConfig.el[0].id);

            ibdFlyoverFactory.position(flyover.el, flyoverConfig.el, flyoverConfig.position, flyoverConfig.group, posObj, flyoverConfig);

            flyover.el.addClass('ibd-' + flyoverConfig.position);

            if (flyoverConfig.showFn) {
                $timeout(function () {
                    flyoverConfig.showFn(flyoverConfig.el, flyover.el, $scope, flyover);
                });
            }
        };

        $scope.$on('$destroy', function () {
            $scope.ibdFlyoverHide();
        });

        $element.on('$destroy', function () {
            $scope.ibdFlyoverHide();
        });
    }]
};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

exports['default'] = {

    name: _commonModulePrefix2['default'].name + 'FlyoverFactory',

    factory: ["$templateCache", "$compile", "ibdUtilFactory", "$window", function factory($templateCache, $compile, ibdUtilFactory, $window) {
        'ngInject';

        var tpls = {
            'default': _commonModulePrefix2['default'].name + '.flyover.tpl.html'
        };

        var service = {};

        service.template = $templateCache.get(tpls['default']);

        service.group = {};

        service.register = function (flyover) {
            var ibdFlyoverFctry = service;

            if (!ibdFlyoverFctry.group[flyover.group]) {
                // flyover not already registered, so create

                var tmpEl = document.createElement('div');
                ibdFlyoverFctry.group[flyover.group] = {
                    el: $window.angular.element(document.getElementById('ibd-flyover-' + flyover.group) || document.body.insertBefore(tmpEl, document.body.firstChild))
                };
                tmpEl.id = 'ibd-flyover-' + flyover.group;
                ibdFlyoverFctry.group[flyover.group].el.addClass('ibd-flyover');
                ibdFlyoverFctry.group[flyover.group].templateHTML = flyover.templateHTML;
            }

            return ibdFlyoverFctry.group[flyover.group].el;
        };

        service.position = function (fEl, el, pos, group, coord, config) {

            var inView = ibdUtilFactory.inView(el),
                hasCls = fEl.hasClass('display-block');

            if (!inView && hasCls) {
                fEl.removeClass('display-block');
                return;
            } else if (inView && !hasCls) {
                fEl.addClass('display-block');
            } else if (!inView) {
                return;
            }
            var flyover = this;

            var top = el[0].getBoundingClientRect().top + (window.pageYOffset || document.body.scrollTop),
                left = el[0].getBoundingClientRect().left + (window.pageXOffset || document.body.scrollLeft);

            function position() {
                // Below may not be required.
                if (top < 0 && left < 0) {
                    flyover.group[group].scope.hideFn();
                    return;
                }
                // EOM above
                switch (pos) {
                    case "bottom":
                        top += el[0].offsetHeight;
                        break;
                    case "top":
                        top -= fEl[0].offsetHeight;
                        break;
                    case "left":
                        left -= fEl[0].offsetWidth;
                        break;
                    default:
                    case "right":
                        left += el[0].offsetWidth;
                        break;
                }
                fEl.css({
                    "top": (coord ? coord.y : top) + "px",
                    "left": (coord ? coord.x : left) + "px"
                });

                checkPosition();
            }

            function checkPosition() {
                if (!config.autoPos) {
                    return;
                }
                var top = fEl[0].getBoundingClientRect().top + (window.pageYOffset || document.body.scrollTop),
                    left = fEl[0].getBoundingClientRect().left + (window.pageXOffset || document.body.scrollLeft),
                    vW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
                    vH = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
                    eH = el[0].offsetHeight,
                    eW = el[0].offsetWidth,
                    fH = fEl[0].offsetHeight,
                    fW = fEl[0].offsetWidth;

                if (top + fH > vH && fH < vH) {
                    // exceeds bottom
                    setAs('top');
                } else if (left + fW > vW && fW < vW) {
                    // exceeds right
                    setAs('left');
                } else if (top < 0 && fH < vH) {
                    // exceeds top
                    setAs('bottom');
                } else if (left < 0 && fW < vW) {
                    // exceeds left
                    setAs('right');
                }

                function setAs(cls) {
                    config.position = cls;
                    fEl.removeClass('ibd-top ibd-bottom ibd-left ibd-right');
                    fEl.addClass('ibd-' + cls);
                }
            }
            position();
        };

        return service;
    }]
};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}],11:[function(require,module,exports){
/**
  * @generous
    
  * @type component
   
  * @name flyover
   
  * @parent wrap.ng
     
  * @description 
        Used to create flyover items. A flyover is a layer transposed over the page to contain content above the regular page flow. 
        These can be used to create tooltips, menus, windows etc. 
        
        Flyovers group shared functional items, efficiently repurposing a single element outside the flow of the
        main document, as such perfomance is markedly improved due to significantly reduced DOM complexity, reflows, repaints and data binding.
        
        To trigger the appearance of a flyover programmatically, simply trigger the relevant event on the element
        in question, 
        e.g. `angular.element(documentGetElementById('flyoverTrigger')).trigger('focus')` or call the relevant scoped show method.
        
        Flyovers given the `tooltip` group will fade in after a short delay by default. Close a flyover by clicking any element with the attribute `ux-flyover-close`
        within the template
  
  
  * @param {object} config Flyover configuration object
  * @param {string=} config.position can be `top`, `right`, `bottom`, `left`. If not passed - automatic positioning is attempted based on viewport size.
  * @param {string=} config.group the flyover group to add the flyover to. Defaults to `default`. This allows a single flyover element to be efficiently re-used between instances
  * @param {string=} config.templateUrl `$templateCache` entry to use for the flyover template, takes priority over `config.template`
  * @param {string=} config.template HTML string to use for the flyover template, 
        if neither `config.template` 
        or `config.templateUrl` is found, the `$templateCache` will be searched
        for a flyover template matching the `config.group` (e.g.: `ux.flyover.{{config.group}}.tpl.html`). 
        If none is found, the default flyover template will be used. The default template accommodates
        `{{flyoverTitle}}` and `{{flyoverBody}}` bindings
 * @param {object=} config.scope either an angular `$scope`, or a javascript object to compile the template against for lightweight usage. If none is given, the parent scope is used
 * @param {string=} config.on the event type to trigger the flyover, can be either `hover` (default), `click`, `contextmenu`, or `focus`
 * @param {function=} config.showFn function to be called when the flyover is shown and compiled, passed the originating element, flyover element, scope and flyover config
 * @param {function=} config.hideFn function to be called when the flyover is hidden, passed the originating element, flyover element, scope and flyover config
 * @param {boolean=} config.enable boolean value, whether to enable (show) the flyover - can be set to scoped variable
  
 * @example
  
    <head>
       <link href="../ibd.bare.css" rel="stylesheet" type="text/css">
       <link href="../ibd.wrap.ng.css" rel="stylesheet" type="text/css">
       <script src="libs/angular.1.4.7.min.js"></script>       
       <script src="../ibd.core.js"></script>       
       <script src="../ibd.wrap.ng.js"></script>       
    </head>
    <html>
        <div ng-app='app' ng-controller='exampleController'>
            <a href="#" ibd-flyover="{scope:{flyoverTitle:'Top',flyoverBody:'This tooltip is at the top'}, position:'top'}">Tooltip with title (top)</a>,
            <a href="#" ibd-flyover="{scope:{flyoverBody:'This tooltip is at the right'}}">Tooltip (right)</a>,
            <a href="#" ibd-flyover="{scope:{flyoverTitle:'Bottom',flyoverBody:'This tooltip is at the bottom'}, position:'bottom'}">Tooltip with title (bottom)</a>,
            <a href="#" ibd-flyover="{scope:{flyoverBody:'This tooltip is at the left'}, position:'left'}">Tooltip (left)</a><br /><br />
            <h1>Menus</h1>
            <button ibd-flyover="{on:'click', group:'menu', template:'<ul><li>Menu item 1</li><li>Menu item 2</li><li>Menu item 3</li></ul>'}">Menu</button>
            <h1>Inputs</h1>
            <input type="text" ibd-flyover="{on:'focus',group:'input', template:'<span>Input focused!</span>'}" />
        </div>
    </html>
   <javascript>        
        angular.module('app', ['ibd'])
            .controller('exampleController', [function () {}]);
   </javascript>  
  */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

exports['default'] = {

    name: _commonModulePrefix2['default'].name + 'Flyover',
    directive: ["$log", function directive($log) {
        'ngInject';

        var ctrl = _commonModulePrefix2['default'].name + 'FlyoverController';

        return {
            restrict: 'A',
            controller: ctrl,
            scope: {
                ibdFlyover: '='
            },
            link: function link(scope) {
                scope.ibdFlyoverInit();
            }
        };
    }]
};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}],12:[function(require,module,exports){
/**    
    * @generous
    
    * @type component
  
    * @name icon
   
    * @parent wrap.ng
     
    * @description
        Used to inject an SVG icon into the contents of the element the attribute is present on. 
        Used to compile passed content of varying types.
   
    * @example
      <head>
       <link href="../ibd.bare.css" rel="stylesheet" type="text/css">
       <link href="../ibd.wrap.ng.css" rel="stylesheet" type="text/css">
       <script src="libs/angular.1.4.7.min.js"></script>       
       <script src="../ibd.core.js"></script>       
       <script src="../ibd.wrap.ng.js"></script>
    </head>
    <html>
        <div ng-app='app' ng-controller='exampleController'>
            <i class="ibd-icon ibd-icon-settings"></i>            
        </div>
    </html>
   <javascript>        
        angular.module('app', ['ibd'])
            .controller('exampleController', [function () {}]);
   </javascript>  
  */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

//Usage
//<i class="ibd-icon ibd-icon-settings"></i>

exports['default'] = {
    name: _commonModulePrefix2['default'].name + 'Icon',
    directive: ["$log", "$templateCache", "$window", function directive($log, $templateCache, $window) {
        'ngInject';

        return {
            restrict: 'C',
            replace: true,
            link: function link(scope, el, attrs) {
                var classList = attrs['class'].split(' '),
                    iconSrc = null,
                    iconEl;

                for (var c = classList.length; c--;) {
                    if (classList[c].indexOf('ibd-icon-') > -1) {
                        iconSrc = classList[c] + '.svg';
                        break;
                    }
                }

                if (!iconSrc || !$templateCache.get(iconSrc)) {
                    return;
                }

                iconEl = $window.angular.element($templateCache.get(iconSrc));
                for (var a in el[0].attributes) {
                    var attr = el[0].attributes[a];
                    if (attr.specified) {
                        if ((attr.name == 'height' || attr.name == 'width') && attr.value == 'auto') {
                            //Ignore this case as its handled below
                        } else {
                                iconEl[0].setAttribute(attr.name, attr.value);
                            }
                    }
                }

                if (attrs.height) {
                    iconEl[0].style.height = attrs.height == 'auto' ? 'auto' : attrs.height + 'px';
                }
                if (attrs.width) {
                    iconEl[0].style.width = attrs.width == 'auto' ? 'auto' : attrs.width + 'px';
                }

                iconEl[0].setAttribute('height', '100%');
                iconEl[0].setAttribute('width', '100%');
                iconEl.addClass('ibd-icon ' + attrs.ibdIcon);
                el.replaceWith(iconEl);
            }
        };
    }]
};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}],13:[function(require,module,exports){
/**
 * @generous
 * @type module
 * @name wrap.ng
 */

//templates - partials
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('../../tmp/templates');

//This is an auto/gulp generated file - which contains all the partials for the components

//get module prefix

var _commonModulePrefix = require('../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

//components and factory imported in order of folder structure to keep sanity

var _accordionAccordion = require('./accordion/accordion');

var _accordionAccordion2 = _interopRequireDefault(_accordionAccordion);

var _blocksBlock = require('./blocks/block');

var _blocksBlock2 = _interopRequireDefault(_blocksBlock);

var _blocksBlocks = require('./blocks/blocks');

var _blocksBlocks2 = _interopRequireDefault(_blocksBlocks);

var _checkboxCheckbox = require('./checkbox/checkbox');

var _checkboxCheckbox2 = _interopRequireDefault(_checkboxCheckbox);

var _compileCompile = require('./compile/compile');

var _compileCompile2 = _interopRequireDefault(_compileCompile);

var _dragDragFactory = require('./drag/drag.factory');

var _dragDragFactory2 = _interopRequireDefault(_dragDragFactory);

var _flyoverFlyover = require('./flyover/flyover');

var _flyoverFlyover2 = _interopRequireDefault(_flyoverFlyover);

var _flyoverFlyoverController = require('./flyover/flyover.controller');

var _flyoverFlyoverController2 = _interopRequireDefault(_flyoverFlyoverController);

var _flyoverFlyoverFactory = require('./flyover/flyover.factory');

var _flyoverFlyoverFactory2 = _interopRequireDefault(_flyoverFlyoverFactory);

var _iconIcon = require('./icon/icon');

var _iconIcon2 = _interopRequireDefault(_iconIcon);

var _notificationNotificationFactory = require('./notification/notification.factory');

var _notificationNotificationFactory2 = _interopRequireDefault(_notificationNotificationFactory);

var _radioRadio = require('./radio/radio');

var _radioRadio2 = _interopRequireDefault(_radioRadio);

var _scrollScroll = require('./scroll/scroll');

var _scrollScroll2 = _interopRequireDefault(_scrollScroll);

var _tableTable = require('./table/table');

var _tableTable2 = _interopRequireDefault(_tableTable);

var _togglelistTogglelist = require('./togglelist/togglelist');

var _togglelistTogglelist2 = _interopRequireDefault(_togglelistTogglelist);

var _utilUtilFactory = require('./util/util.factory');

var _utilUtilFactory2 = _interopRequireDefault(_utilUtilFactory);

var _validateValidate = require('./validate/validate');

var _validateValidate2 = _interopRequireDefault(_validateValidate);

var _virtualiseVirtualise = require('./virtualise/virtualise');

var _virtualiseVirtualise2 = _interopRequireDefault(_virtualiseVirtualise);

var _windowWindowFactory = require('./window/window.factory');

var _windowWindowFactory2 = _interopRequireDefault(_windowWindowFactory);

var dependencies = [_commonModulePrefix2['default'].name + '.partials'];

//module
angular.module('ibd', dependencies).directive(_accordionAccordion2['default'].name, _accordionAccordion2['default'].directive).directive(_blocksBlock2['default'].name, _blocksBlock2['default'].component).directive(_blocksBlocks2['default'].name, _blocksBlocks2['default'].component).directive(_checkboxCheckbox2['default'].name, _checkboxCheckbox2['default'].directive).directive(_compileCompile2['default'].name, _compileCompile2['default'].directive).factory(_dragDragFactory2['default'].name, _dragDragFactory2['default'].factory).directive(_flyoverFlyover2['default'].name, _flyoverFlyover2['default'].directive).controller(_flyoverFlyoverController2['default'].name, _flyoverFlyoverController2['default'].controller).factory(_flyoverFlyoverFactory2['default'].name, _flyoverFlyoverFactory2['default'].factory).directive(_iconIcon2['default'].name, _iconIcon2['default'].directive).factory(_notificationNotificationFactory2['default'].name, _notificationNotificationFactory2['default'].factory).directive(_radioRadio2['default'].name, _radioRadio2['default'].directive).directive(_scrollScroll2['default'].name, _scrollScroll2['default'].directive).directive(_tableTable2['default'].name, _tableTable2['default'].component).directive(_togglelistTogglelist2['default'].name, _togglelistTogglelist2['default'].component).factory(_utilUtilFactory2['default'].name, _utilUtilFactory2['default'].factory).directive(_validateValidate2['default'].name, _validateValidate2['default'].component).directive(_virtualiseVirtualise2['default'].name, _virtualiseVirtualise2['default'].component).factory(_windowWindowFactory2['default'].name, _windowWindowFactory2['default'].factory);

},{"../../common/modulePrefix":1,"../../tmp/templates":2,"./accordion/accordion":3,"./blocks/block":4,"./blocks/blocks":5,"./checkbox/checkbox":6,"./compile/compile":7,"./drag/drag.factory":8,"./flyover/flyover":11,"./flyover/flyover.controller":9,"./flyover/flyover.factory":10,"./icon/icon":12,"./notification/notification.factory":14,"./radio/radio":15,"./scroll/scroll":16,"./table/table":17,"./togglelist/togglelist":18,"./util/util.factory":19,"./validate/validate":20,"./virtualise/virtualise":21,"./window/window.factory":22}],14:[function(require,module,exports){
/**    
    * @generous
    
    * @type factory
  
    * @name notificationFactory
   
    * @parent wrap.ng
     
    * @description
        Angular factory used to create popup notifications in the bottom right of the viewport.
        
    * @param {object} config Configuration object for the notification
    * @param {object=} config.scope either an angular `$scope`, or a javascript object to compile the template 
        against for lightweight usage.
    * @param {string=} config.templateUrl `$templateCache` entry to use for the notification template, takes priority over `config.template`
    * @param {string=} config.template HTML string to use for the notification template, if neither `config.template` or `config.templateUrl` is found,
        the default notification template will be used. The default template accommodates `notificationTitle`, `notificationSubtitle`,`notificationBody` and optionally `notificationIcon`
        scope bindings.
    * @param {string=} config.type Type of notification to create, can be `error`, `warning`, `info` (default), `success` or custom value, overridden by `config.scope.notificationIcon`
         in the default template
    * @param {mixed=} config.expiry Defaults to `3000` (3 seconds), set to number in ms to wait before closing notification,
         or `false` to display until clicking to dismiss
    * @param {object=} scope Scope to compile notification against. If not passed, no compilation or scope interaction occurs.        
   
    * @example
      <head>
       <link href="../ibd.bare.css" rel="stylesheet" type="text/css">
       <link href="../ibd.wrap.ng.css" rel="stylesheet" type="text/css">
       <script src="libs/angular.1.4.7.min.js"></script>       
       <script src="../ibd.core.js"></script>       
       <script src="../ibd.wrap.ng.js"></script>
    </head>
    <html>
        <div ng-app='app' ng-controller='exampleController'>
            <button ng-click="createNotification()">Click to open notification...</button>                        
        </div>
    </html>
   <javascript>        
        angular.module('app', ['ibd'])
            .controller('exampleController', ['ibdNotificationFactory', '$scope', function (ibdNotificationFactory, $scope) {
                var n=0,
                    types=['error','info','warning'];

                    function randomString(length) {
                        var n = (Math.pow(36, length + 1) - Math.random() * Math.pow(36, length));
                        return Math.round(n).toString(36).slice(1);
                    }

                    n++;
                    ibdNotificationFactory.open({scope:{notificationTitle:'Notification #'+n, notificationSubtitle:'subtitle...',notificationBody:'Content: ' + randomString(10)}, type: types[Math.floor(Math.random()*types.length)]});
                    n++;
                    ibdNotificationFactory.open({scope:{notificationTitle:'Notification #'+n, notificationSubtitle:'subtitle...',notificationBody:'Content: ' + randomString(10)}, type: types[Math.floor(Math.random()*types.length)]});

                    $scope.createNotification=function(){
                        n++;
                        ibdNotificationFactory.open({scope:{notificationTitle:'Notification #'+n, notificationSubtitle:'subtitle...',notificationBody:'Notification Content'}, type: types[Math.floor(Math.random()*types.length)]});
                    }
            }]);
   </javascript>  
  */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

exports['default'] = {

    name: _commonModulePrefix2['default'].name + 'NotificationFactory',

    factory: ["$log", "$templateCache", "$rootScope", "ibdUtilFactory", "$compile", "$window", function factory($log, $templateCache, $rootScope, ibdUtilFactory, $compile, $window) {
        'ngInject';

        var tpls = {
            'default': _commonModulePrefix2['default'].name + '.notification.tpl.html',
            wrapper: _commonModulePrefix2['default'].name + '.notification.wrapper.tpl.html'
        };

        var service = {};

        service.nWrapperEl = null;

        service.cleanup = function () {
            var ibdNotificationFctry = service,
                ns = ibdNotificationFctry.nWrapperEl.getElementsByClassName('ibd-notification-item');

            for (var n = ns.length; n--;) {
                if (!ibdUtilFactory.hasClass(ns[n], 'display-block')) {
                    ibdNotificationFctry.nWrapperEl.removeChild(ns[n]);
                }
            }
        };

        //open
        service.open = function (config) {
            var ibdNotificationFctry = service;

            config.type = config.type || 'info';
            config.expiry = config.expiry !== false && (!config.expiry || typeof config.expiry !== 'number') ? 5000 : config.expiry;

            config.templateHTML = config.templateUrl ? $templateCache.get(config.templateUrl) : config.template ? config.template : $templateCache.get(tpls['default']);

            if (!ibdNotificationFctry.nWrapperEl) {
                var tmpEl = document.createElement('div');
                tmpEl.innerHTML = $templateCache.get(tpls.wrapper);
                ibdNotificationFctry.nWrapperEl = document.body.insertBefore(tmpEl.children[0], document.body.firstChild);
            }

            var nW = document.createElement('div'),
                nTimeout = null;
            nW.innerHTML = config.templateHTML;

            var nEl = nW.children[0],
                angEl = $window.angular.element(nEl);

            ibdNotificationFctry.cleanup();

            angEl.addClass('display-block ibd-' + config.type);

            ibdNotificationFctry.nWrapperEl.appendChild(nEl);

            if (config.scope) {
                var _scope = $rootScope.$new();
                $window.angular.extend(_scope, config.scope);
                config.scope = _scope;
            } else {
                config.scope = $rootScope.$new(true);
            }

            config.scope.notificationIcon = config.scope.notificationIcon || ibdUtilFactory.getIconNameFromIconType(config.type);

            $compile(nEl)(config.scope);

            $window.angular.element(nEl.getElementsByClassName('ibd-notification-close')[0]).on('click', function () {
                ibdNotificationFctry.cleanup();
                angEl.removeClass('display-block');
            });

            if (config.expiry !== false) {
                nTimeout = setTimeout(function () {
                    ibdNotificationFctry.cleanup();
                    angEl.removeClass('display-block');

                    clearTimeout(nTimeout);
                }, config.expiry);
            }
        };

        return service;
    }]
};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}],15:[function(require,module,exports){
/**    
    * @generous
    
    * @type component
  
    * @name radio
   
    * @parent wrap.ng
     
    * @description
        Used to create radio inputs with custom styling. 
        Functionally identical to angular {@link https://docs.angularjs.org/api/ng/input/input%5Bradio%5D input[type=radio]}        
        
    * ## CSS Classes:
        - `ibd-required` can be used to indicate the checkbox is required {@link css.directive:Labels see here}
        
    * @param {string=} ibd-label Label to use for the radio input    
   
    * @example
      <head>
       <link href="../ibd.bare.css" rel="stylesheet" type="text/css">
       <link href="../ibd.wrap.ng.css" rel="stylesheet" type="text/css">
       <script src="libs/angular.1.4.7.min.js"></script>       
       <script src="../ibd.core.js"></script>       
       <script src="../ibd.wrap.ng.js"></script>
    </head>
    <html>
        <div ng-app='app' ng-controller='exampleController'>
            <ibd-radio ibd-label="Option" value="opt1" ng-model="model" name="radiogroup"></ibd-radio>
            <ibd-radio ibd-label="Option with Required Class" class="ibd-required" value="opt2" ng-model="model" name="radiogroup"></ibd-radio>
            <br>
            <br>
            Current value: {{model}}
        </div>
    </html>
   <javascript>        
        angular.module('app', ['ibd'])
            .controller('exampleController', [function () {
               
            }]);
   </javascript>  
  */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

exports['default'] = {
    name: _commonModulePrefix2['default'].name + 'Radio',
    directive: function directive($log, ibdUtilFactory) {

        var tpls = {
            'default': _commonModulePrefix2['default'].name + '.radio.tpl.html',
            wrapper: _commonModulePrefix2['default'].name + '.radio.wrapper.tpl.html'
        };

        return {
            restrict: 'E',
            replace: true,
            scope: {
                ibdLabel: "@"
            },
            templateUrl: tpls['default'],
            link: function link(scope, el) {

                var tmpEl = ibdUtilFactory.wrap(scope, el, tpls.wrapper);
                tmpEl[1].setAttribute('class', tmpEl[1].getAttribute('class') + ' ' + tmpEl[0].getAttribute('class').trim());
            }
        };
    }
};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}],16:[function(require,module,exports){
/**    
    * @generous
    
    * @type component
  
    * @name scroll
   
    * @parent wrap.ng
     
    * @description
        Used to create a custom scrollbar.
        
    * ## Usage Notes:
        Customised scroll bars, regardless of the implementation rely on adding items to the DOM and monitoring a number of user interactions in order to mimic scrolling functionality.
        As this happens within the same thread of execution as all other operations, there is a performance implication using custom scroll bars. Typically this implication
        is that in worse performing contexts, users will notice scrolling becoming 'laggy'. This is as opposed to the custom scrollbars themselves causing performance issues directly. As such, it is important
        to note that the default browser scroll bar will always offer a more consistent UI/UX from an interaction (albeit not visual) perspective. If you wish to use `min-height` and `max-height`
        values to control content sizing, note that these should be applied to the child ibd-scroll-content` container.
        The directive will wrap the passed element in a number of parent elements. It is important to note the implication this may have on any applied CSS (e.g. descendant / adjacency selectors).
        In addition, the CSS classes `ibd-scroll-x` and `ibd-scroll-y` will be added to the parent when the appropriate scroll bars are shown.
       
       
    * @param {string=} ibd-scroll Optional, defaults to `y` - can be either `x`, `y`, `xy` to denote the 
            axis to enable scrolling on
    * @param {number=} ibd-sensitivity Number in pixels or percentage string, defaults to 60 pixels.
            This represents the minimal amount to scroll by on a scroll action.
    * @param {boolean=} ibd-live Defaults to `null`, set to `true` to recalculate scroll configuration 
            on window resize or dimension change to either the container or its content.
            Leave unset or set to `window` to recalculate on window resize only. Set to `false` to never recalculate.
        
   
    * @example
    <head>
       <link href="../ibd.bare.css" rel="stylesheet" type="text/css">
       <link href="../ibd.wrap.ng.css" rel="stylesheet" type="text/css">
       <script src="libs/angular.1.4.7.min.js"></script>       
       <script src="../ibd.core.js"></script>       
       <script src="../ibd.wrap.ng.js"></script>
    </head>
    <html>
        <div ng-app='app' ng-controller='exampleController'>
            <div ibd-scroll="y" style="height: 200px; border: 1px solid">
                a<br />b<br />c<br />1<br />2<br />3<br />
                a<br />b<br />c<br />1<br />2<br />3<br />
                a<br />b<br />c<br />1<br />2<br />3<br />
                a<br />b<br />c<br />1<br />2<br />3<br />
                a<br />b<br />c<br />1<br />2<br />3<br />
            </div>
        </div>
    </html>
   <javascript>        
        angular.module('app', ['ibd'])
            .controller('exampleController', [function () {
               
            }]);
   </javascript>  
  */

//TODO: Convert this into a config!

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

exports['default'] = {
    name: _commonModulePrefix2['default'].name + 'Scroll',
    directive: ["$log", "ibdUtilFactory", "$timeout", "ibdDragFactory", "$window", function directive($log, ibdUtilFactory, $timeout, ibdDragFactory, $window) {
        'ngInject';

        return {
            restrict: 'A',
            scope: {
                ibdOnScrolled: '&'
            },
            compile: function compile(element) {

                var createTrack = function createTrack(axis) {
                    var tmpEl = document.createElement('div');
                    tmpEl.setAttribute('class', 'scroll-track' + axis.toUpperCase());
                    tmpEl.innerHTML = "<div class='scroll-float" + axis.toUpperCase() + "'></div>";
                    element[0].appendChild(tmpEl);
                };

                element.addClass('ibd-scroll-container');

                if (element[0].getElementsByClassName('scroll-content').length === 0) {
                    element[0].innerHTML = "<div class='scroll-content'>" + element[0].innerHTML + "<div>";
                }

                createTrack('x');
                createTrack('y');

                return {
                    post: function post(scope, element, attrs) {
                        $timeout(function () {
                            var trackX = {},
                                trackY = {},
                                floatX = {},
                                floatY = {},
                                content = {},
                                sensitivity = attrs.ibdSensitivity || 60,
                                contentWidth = 0,
                                contentHeight = 0,
                                containerWidth = 0,
                                containerHeight = 0,
                                contentH = 0,
                                contentW = 0,
                                containerH = 0,
                                containerW = 0,
                                trackH = 0,
                                trackW = 0,
                                floatYh = 0,
                                floatXw = 0,
                                scrollAxis = attrs.ibdScroll.toLowerCase(),
                                allowX = scrollAxis.indexOf("x") > -1 ? true : false,
                                allowY = scrollAxis.indexOf("y") > -1 ? true : false,
                                percX = 0,
                                percY = 0,
                                interval = null;

                            // Appears to be the only bulletproof way of correctly resolving when dealing with transcluded/nested scroll directives
                            for (var c = element[0].children.length; c--;) {
                                var cEl = element[0].children[c],
                                    cls = cEl.getAttribute('class');
                                if (cls.indexOf('scroll-content') > -1) {
                                    content = cEl;
                                } else if (cls.indexOf('scroll-trackX') > -1) {
                                    trackX = cEl;
                                } else if (cls.indexOf('scroll-trackY') > -1) {
                                    trackY = cEl;
                                }
                            }

                            floatX = trackX.getElementsByClassName('scroll-floatX')[0];
                            floatY = trackY.getElementsByClassName('scroll-floatY')[0];

                            content.style.overflowX = "hidden";
                            content.style.overflowY = "hidden";

                            ibdUtilFactory.ensurePosition(element);

                            var resolveDimensions = function resolveDimensions() {
                                // need to show initially to resolve dimensions
                                trackY.style.display = "block";
                                trackX.style.display = "block";
                                contentH = content.scrollHeight;
                                contentW = content.scrollWidth;
                                containerH = element[0].offsetHeight;
                                containerW = element[0].offsetWidth;
                                trackH = trackY.offsetHeight;
                                trackW = trackX.offsetWidth;

                                if (allowY && contentH > containerH) {
                                    trackY.style.display = "block";
                                    floatYh = floatY.offsetHeight;
                                    content.scrollTop = (contentH - containerH) * percY;
                                    element.addClass('ibd-scroll-y');
                                } else {
                                    trackY.style.display = "none";
                                    if (content.scrollTop) {
                                        content.scrollTop = 0;
                                    }
                                    element.removeClass('ibd-scroll-y');
                                }

                                if (allowX && contentW > containerW) {
                                    trackX.style.display = "block";
                                    floatXw = floatX.offsetWidth;
                                    content.scrollLeft = (contentW - containerW) * percX;
                                    element.addClass('ibd-scroll-x');
                                } else {
                                    trackX.style.display = "none";
                                    if (content.scrollLeft) {
                                        content.scrollLeft = 0;
                                    }
                                    element.removeClass('ibd-scroll-x');
                                }
                            };

                            if (attrs.ibdLive === "window" || attrs.ibdLive === null || attrs.ibdLive === undefined) {
                                $window.angular.element(window).on('resize', resolveDimensions);
                            }

                            $window.angular.element(content).on("scroll", function () {
                                percY = content.scrollTop / (contentH - trackH);
                                percX = content.scrollLeft / (contentW - trackW);
                                percY = percY < 0 ? 0 : percY > 1 ? 1 : percY;
                                percX = percX < 0 ? 0 : percX > 1 ? 1 : percX;
                                floatY.style.top = (trackH - floatYh) * percY + 'px';
                                floatX.style.left = (trackW - floatXw) * percX + 'px';
                            });

                            ibdUtilFactory.mousewheel($window.angular.element(content), function (e) {
                                if (allowY && ibdUtilFactory.isScrollable(e.target).y || allowX && ibdUtilFactory.isScrollable(e.target).x) {
                                    return false; // scroll event is on a child with overflow & scrollbars, so reject
                                }
                                var scrollX = typeof sensitivity === 'string' && sensitivity.indexOf('%') ? containerW * parseInt(sensitivity.replace('%', ''), 0) / 100 : sensitivity,
                                    scrollY = typeof sensitivity === 'string' && sensitivity.indexOf('%') ? containerH * parseInt(sensitivity.replace('%', ''), 0) / 100 : sensitivity;

                                if (e.ibd.mousewheel === "up") {
                                    if (allowY) {
                                        content.scrollTop -= scrollY;
                                    } else {
                                        content.scrollLeft -= scrollX;
                                    }
                                } else if (allowY) {
                                    content.scrollTop += scrollY;
                                } else {
                                    content.scrollLeft += scrollX;
                                }

                                /* Stop wheel propogation (prevent parent scrolling) */
                                ibdUtilFactory.popBubble(e);
                            });

                            // KEYBOARD HANDLERS
                            element[0].setAttribute("tabindex", 0);

                            ibdUtilFactory.keydown(element, function (e) {
                                if (['input', 'textarea'].indexOf(document.activeElement.tagName.toLowerCase()) > -1) {
                                    return;
                                }
                                if (allowY) {
                                    switch (e.ibd.key) {
                                        case "up":
                                            content.scrollTop -= typeof sensitivity === 'string' && sensitivity.indexOf('%') ? containerH * parseInt(sensitivity.replace('%', ''), 0) / 100 : sensitivity;
                                            ibdUtilFactory.popBubble(e);
                                            break;
                                        case "down":
                                        case "spacebar":
                                            content.scrollTop += typeof sensitivity === 'string' && sensitivity.indexOf('%') ? containerH * parseInt(sensitivity.replace('%', ''), 0) / 100 : sensitivity;
                                            ibdUtilFactory.popBubble(e);
                                            break;
                                        case "pageUp":
                                            content.scrollTop -= containerH;
                                            ibdUtilFactory.popBubble(e);
                                            break;
                                        case "pageDown":
                                            content.scrollTop += containerH;
                                            ibdUtilFactory.popBubble(e);
                                            break;
                                        case "home":
                                            content.scrollTop = 0;
                                            ibdUtilFactory.popBubble(e);
                                            break;
                                        case "end":
                                            content.scrollTop = contentH;
                                            ibdUtilFactory.popBubble(e);
                                            break;
                                    }
                                }
                                if (allowX) {
                                    switch (e.ibd.key) {
                                        case "left":
                                            content.scrollLeft -= typeof sensitivity === 'string' && sensitivity.indexOf('%') ? containerW * parseInt(sensitivity.replace('%', ''), 0) / 100 : sensitivity;
                                            ibdUtilFactory.popBubble(e);
                                            break;
                                        case "right":
                                            content.scrollLeft += typeof sensitivity === 'string' && sensitivity.indexOf('%') ? containerW * parseInt(sensitivity.replace('%', ''), 0) / 100 : sensitivity;
                                            ibdUtilFactory.popBubble(e);
                                            break;
                                    }
                                }
                            });

                            if (attrs.ibdLive === "true" || attrs.ibdLive === "container") {

                                interval = setInterval(function () {
                                    var widthContainer = element[0].offsetWidth,
                                        heightContainer = element[0].offsetHeight,
                                        widthContent = content.scrollWidth,
                                        heightContent = content.scrollHeight;
                                    if (widthContainer !== containerWidth || heightContainer !== containerHeight || widthContent !== contentWidth || heightContent !== contentHeight) {
                                        contentWidth = widthContent;
                                        contentHeight = heightContent;
                                        containerWidth = widthContainer;
                                        containerHeight = heightContainer;
                                        resolveDimensions();
                                    }
                                }, 100);
                            }
                            if (allowX) {
                                ibdDragFactory.init({
                                    element: floatX,
                                    container: trackX,
                                    allowX: allowX,
                                    listeners: {
                                        dragging: function dragging() {
                                            content.scrollLeft = (contentW - containerW) * (floatX.offsetLeft / (trackX.offsetWidth - floatX.offsetWidth));
                                        }
                                    }
                                });
                                $window.angular.element(floatX).on("click", function (e) {
                                    ibdUtilFactory.popBubble(e);
                                });
                                $window.angular.element(trackX).on("click", function (e) {
                                    var floatW = floatX.offsetWidth,
                                        perc = ((e.offsetX === undefined ? e.layerX : e.offsetX) - floatW / 2) / (trackW - floatW);
                                    perc = perc < 0 ? 0 : perc > 1 ? 1 : perc;
                                    content.scrollLeft = perc * (contentW - trackW);
                                    ibdUtilFactory.popBubble(e);
                                });
                            }
                            if (allowY) {
                                ibdDragFactory.init({
                                    element: floatY,
                                    container: trackY,
                                    allowY: allowY,
                                    listeners: {
                                        dragging: function dragging() {
                                            content.scrollTop = (contentH - trackH) * (floatY.offsetTop / (trackY.offsetHeight - floatY.offsetHeight));
                                        }
                                    }
                                });
                                $window.angular.element(floatY).on("click", function (e) {
                                    ibdUtilFactory.popBubble(e);
                                });
                                $window.angular.element(trackY).on("click", function (e) {
                                    var floatH = floatY.offsetHeight,
                                        perc = ((e.offsetY === undefined ? e.layerY : e.offsetY) - floatH / 2) / (trackH - floatH);
                                    perc = perc < 0 ? 0 : perc > 1 ? 1 : perc;
                                    content.scrollTop = perc * (contentH - trackH);
                                    ibdUtilFactory.popBubble(e);
                                });
                            }

                            $timeout(function () {
                                resolveDimensions();
                            }, false);

                            scope.$on('$destroy', function () {
                                clearInterval(interval);
                            });
                        });
                    }
                };
            }

        };
    }]
};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}],17:[function(require,module,exports){
/**    
    * @generous
    
    * @type component
  
    * @name table
   
    * @parent wrap.ng
     
    * @description
        Used to produce a styled table with sortable headers, and optionally- a scrollable body
        
    * @param {object} config Mandatory object containing table definitions
    * @param {object} config.data Array of objects where each array item represents a row, with the respective object's keys related to field names, the value relates to the value for that field
    * @param {object} config.columns Array of objects used to define field/column mappings
    * @param {string} config.columns.field String mapping to key in table data
    * @param {string=} config.columns.name Optional text label for the column header
    * @param {boolean=} config.columns.sortable Whether the column is sortable (defaults to false)
    * @param {string=} config.columns.template Optional HTML template, inclusive of bindings, to compile for column cells, the current cell value can be retrieved with `{{row[column.field]}}`,
    * the application scope with `uxAppScope`, the row, column and fieldname with `row`, `column` and `column.field` and the current column or row index with `$parent.$index` and `$parent.$parent.$index`
    * @param {string=} -config.columns.width Optional width setting for column (CSS value strings only)
    * @param {number=} config.maxRows Optional number denoting the maximum number of rows to display before scrolling the table body
    * @param {object=} config.sort Optional object to configure initial table sorting
    * @param {string=} config.sort.field Optional reference to column to sort by
    * @param {boolean=} config.sort.asc Optional `boolean` value for ascending sort 
       
   
    * @example
      <head>
       <link href="../ibd.bare.css" rel="stylesheet" type="text/css">
       <link href="../ibd.wrap.ng.css" rel="stylesheet" type="text/css">
       <script src="libs/angular.1.4.7.min.js"></script>       
       <script src="../ibd.core.js"></script>       
       <script src="../ibd.wrap.ng.js"></script>
    </head>
    <html>
        <div ng-app='app' ng-controller='exampleController'>
            <ibd-table config="table" class="ibd-table-hover"></ibd-table>            
        </div>
    </html>
   <javascript>        
        angular.module('app', ['ibd'])
            .controller('exampleController', ['$scope', function ($scope) {
               $scope.table = {
                maxRows: 3,
                columns: [{
                    field: 'col1',
                    name: 'column1',
                    width: "150px",
                    template: "<ibd-radio name='example'></ibd-radio>"
                }, {
                    field: 'col2',
                    name: 'column2'
                }, {
                    field: 'col3',
                    name: 'column3'
                }],
                data: [{
                    col1: "1",
                    col2: "1",
                    col3: "1"
                }, {
                    col1: "2",
                    col2: "3",
                    col3: "4"
                }, {
                    col1: "1",
                    col2: "1",
                    col3: "1"
                }, {
                    col1: "2",
                    col2: "3",
                    col3: "4"
                }, {
                    col1: "1",
                    col2: "1",
                    col3: "1"
                }, {
                    col1: "2",
                    col2: "3",
                    col3: "4"
                }]
                }
            }]);
   </javascript>  
  */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

exports['default'] = {
    name: _commonModulePrefix2['default'].name + 'Table',
    component: ["$log", "$timeout", function component($log, $timeout) {
        'ngInject';

        var tpls = {
            'default': _commonModulePrefix2['default'].name + '.table.tpl.html'
        };

        return {
            restrict: 'E',
            replace: true,
            scope: {
                config: "="
            },
            templateUrl: tpls['default'],
            link: function link(scope, el) {

                scope.ibdAppScope = scope.$parent;

                if (!scope.config.sort) {
                    scope.config.sort = {
                        field: null,
                        asc: null
                    };
                }

                scope.config.sortFn = scope.config.sortFn || function (field, sortable) {
                    if (sortable === false) {
                        return;
                    }
                    scope.config.sort = {
                        field: field,
                        asc: !scope.config.sort.asc
                    };
                };

                if (scope.config.maxRows) {
                    $timeout(function () {
                        var row = el[0].getElementsByClassName('ibd-table-row');
                        if (row.length === 0) {
                            return;
                        }
                        el[0].getElementsByClassName('ibd-scroll-content')[0].style.maxHeight = scope.config.maxRows * el[0].getElementsByClassName('ibd-table-row')[0].offsetHeight + 'px';
                    }, false);
                }
            }
        };
    }]
};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}],18:[function(require,module,exports){
/**    
    * @generous
    
    * @type component
  
    * @name togglelist
   
    * @parent wrap.ng
     
    * @description
        Used to create a series of items, with only a single item selectable. radio inputs with custom styling. Note, the control uses radio input elements, as such- all values are set to strings. Bear this in mind for any cases where your `ng-model` value is a boolean, integer etc.

    * ## CSS Classes:
        None for now, but will need primary and secondary
    
    * @param {object} ng-model Scoped item to bind values to
    * @param {array} ibd-options Array of objects to create toggleable items for, each object must have `value` and `name` items
    * @param {string=} ibd-name Name to give the underlying `input[type=radio]` elements
   
    * @example
      <head>
       <link href="../ibd.bare.css" rel="stylesheet" type="text/css">
       <link href="../ibd.wrap.ng.css" rel="stylesheet" type="text/css">
       <script src="libs/angular.1.4.7.min.js"></script>       
       <script src="../ibd.core.js"></script>       
       <script src="../ibd.wrap.ng.js"></script>
    </head>
    <html>
        <div ng-app='app' ng-controller='exampleController'>
            <ibd-togglelist ibd-options="options"
                ng-model="model"
                ibd-name="togglelist">
            </ibd-togglelist>
        </div>
    </html>
   <javascript>        
        angular.module('app', ['ibd'])
            .controller('exampleController', ['$scope', function ($scope) {
                $scope.options=[{
                    name:"Option 1",
                    value:"option1"
                },{
                    name:"Option 2",
                    value:"option2"
                },{
                    name:"Option 3",
                    value:"option3"
                }];
                
                $scope.model="option2";
            }]);
   </javascript>  
  */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

exports['default'] = {
    name: _commonModulePrefix2['default'].name + 'Togglelist',
    component: ["$log", function component($log) {
        'ngInject';

        var tpls = {
            'default': _commonModulePrefix2['default'].name + '.togglelist.tpl.html'
        };

        return {
            restrict: 'E',
            replace: true,
            scope: {
                ngModel: '=',
                ibdName: '@',
                ibdOptions: '='
            },
            templateUrl: tpls['default']
        };
    }]
};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}],19:[function(require,module,exports){
/**    
    * @generous
    
    * @type factory
  
    * @name utilFactory
   
    * @parent wrap.ng
     
    * @description 
            Utility factory exposing multiple helper fuctions consumed by components.
  */

'use strict';

//TODO, extract them to plain js and inject into ibd-ng consumption as a service.

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

exports['default'] = {

    name: _commonModulePrefix2['default'].name + 'UtilFactory',

    factory: ["$log", "$templateCache", "$compile", "$window", function factory($log, $templateCache, $compile, $window) {
        'ngInject';

        var extendEvent = function extendEvent(e) {
            if (!e.ibd) e.ibd = {};
            return e;
        };

        var keymap = function keymap(e) {
            e = extendEvent(e);
            switch (e.keyCode) {
                case 13:
                    //return key
                    e.ibd.key = "return";
                    break;
                case 9:
                    //tab key
                    e.ibd.key = "tab";
                    break;
                case 27:
                    //escape key
                    e.ibd.key = "esc";
                    break;
                case 8:
                    //backspace key
                    e.ibd.key = "backspace";
                    break;
                case 46:
                    //delete key
                    e.ibd.key = "del";
                    break;
                case 38:
                    //up cursor
                    e.ibd.key = "up";
                    break;
                case 40:
                    //down cursor
                    e.ibd.key = "down";
                    break;
                case 32:
                    //spacebar
                    e.ibd.key = "spacebar";
                    break;
                case 33:
                    //page up
                    e.ibd.key = "pageUp";
                    break;
                case 34:
                    //page down
                    e.ibd.key = "pageDown";
                    break;
                case 36:
                    //home
                    e.ibd.key = "home";
                    break;
                case 35:
                    //end
                    e.ibd.key = "end";
                    break;
                case 37:
                    //left cursor
                    e.ibd.key = "left";
                    break;
                case 39:
                    //right cursor
                    e.ibd.key = "right";
                    break;
            }
            return e;
        };

        var service = {};

        /**    
         * @generous
        
        * @type method
        
        * @name wrap
        
        * @parent utilFactory
        
        * @description 
            Provides the ability to wrap a given element within a given template, then compile the wrapped element against the originating (or given) scope.
        
        * @param {object} scope Scope to compile wrapper against
        * @param {object} element Angular element to wrap
        * @param {string} template Location of template to use as wrapper for passed element, retrieved from `$templateCache`
        * @returns {Array} Array consisting of the originating element, and wrapping element (containing the originating element) respectively
        */

        service.wrap = function (scope, el, template) {

            var wrapperEl = document.createElement("div");
            wrapperEl.innerHTML = $templateCache.get(template);

            var replacedEl = wrapperEl.children[0];
            $compile(angular.element(replacedEl))(scope);

            var rplEl = el[0].parentNode.replaceChild(replacedEl, el[0]);

            if (replacedEl.children.length > 0) {
                replacedEl.insertBefore(rplEl, replacedEl.children[0]);
            } else {
                replacedEl.appendChild(rplEl);
            }
            return {
                0: rplEl,
                1: replacedEl
            };
        };

        /**    
        * @generous
        
        * @type method
        
        * @name recurseScope
        
        * @parent utilFactory
        
        * @description
            Locates the given variable (Scope) by recursing through parent scopes. 
        
        * @param {object} scope scope to be resolved.
        * @param {object} target element to apply `resolved scope` to        
        //TODO: better docs
        */

        service.recurseScope = function (s, t) {
            if (t === null || t === undefined || !s.$parent || t in s) {
                return s;
            } else {
                return undefined.recurseScope(s.$parent, t);
            }
        };

        /**    
          * @generous
         
         * @type method
         
         * @name genId
         
         * @parent utilFactory
         
         * @description 
             Applies an auto generated `id` to an element if none already present
         
         * @param {object} el element to apply `id` to
         * @param {string} prefix to be applied to the id, defaults to `ibd-element-`
         * @returns {string} Returns `id` attribute of element
         */
        service.genId = function (el, pre) {
            el = el[0] ? el[0] : el;
            pre = pre || 'ibd-element-';
            el.id = el.id || pre + Math.floor(Math.random() * (999999 - 0)) + 0;
            return el.id;
        };

        /**    
         * @generous
         
         * @type method
         
         * @name inView
         
         * @parent utilFactory
         
         * @description
             Checks to see whether passed element is actually within visible boundaries of all parent nodes. 
             It is important to note that method performance is dependant on DOM/Styling complexity.
         
         * @param {object} element Element to check (angular or regular)
         * @returns {boolean} Returns `true` or `false`
         */
        service.inView = function (el) {

            var baseEl = el[0] ? el[0] : el,
                elPos = baseEl.getBoundingClientRect(),
                inView = false;

            function parent(tmpEl) {
                var parentNode = tmpEl.parentNode;
                if (!parentNode || window.getComputedStyle(parentNode, null).getPropertyValue("position") === "fixed") {
                    parentNode = document.body;
                }
                if (parentNode && parentNode !== document.body) {
                    var pElPos = parentNode.getBoundingClientRect(),
                        pElH = parentNode.offsetHeight,
                        pElW = parentNode.offsetWidth;

                    if (parentNode.scrollHeight > parentNode.offsetHeight || parentNode.scrollWidth > parentNode.offsetWidth) {
                        // is element within visible area of any parent with overflow
                        if (elPos.top < pElPos.top || elPos.top > pElPos.top + pElH || elPos.left < pElPos.left || elPos.left > pElPos.left + pElW) {
                            inView = false; // element hidden...so exit
                            return inView;
                        }
                    }
                    //}
                    parent(parentNode); // element visible so escalate to next parent
                } else if (parentNode === document.body) {
                        // is element in viewport area..checked last as may be within viewport, but scrolled outside visible area of a parent
                        inView = elPos.top >= 0 && elPos.left >= 0 && elPos.bottom <= (window.innerHeight || document.documentElement.clientHeight) && elPos.right <= (window.innerWidth || document.documentElement.clientWidth);
                        return inView;
                    } else {
                        inView = true;
                        return inView;
                    }
                return inView;
            }

            return parent(baseEl);
        };

        /**    
         * @generous
         
         * @type method
         
         * @name parent
         
         * @parent utilFactory
         
         * @description
             Traverses upward through the DOM to find the closest parent element by either `id` or CSS class
         
         * @param {object} element Originating element (angular or regular)
         * @param {string} selector Either a DOM node, `id`,  CSS class or attribute to check for. `id` strings must be prefixed with a hash character `#`, classes with a period `.` and attributes between `[` and `]`
         * @returns {mixed} Returns either `false` if no element is found, or the relevant element
         */
        service.parent = function (el, selector) {

            var hasClass = service.hasClass,
                baseEl = el[0] ? el[0] : el;
            var isType = null;
            if (typeof selector === 'object') {
                isType = 'element';
                selector = selector[0] ? selector[0] : selector;
            } else if (selector.substr(0, 1) === "#") {
                isType = 'id';
                selector = selector.replace('#', "");
            } else if (selector.substr(0, 1) === ".") {
                isType = 'class';
                selector = selector.replace('.', "");
            } else if (selector.substr(0, 1) === "[") {
                isType = 'attribute';
                selector = selector.replace('[', "").replace(']', "");
            } else {
                // not looking for id or class....so return
                return false;
            }

            function parent(tmpEl) {
                var rEl = null;
                if (tmpEl.parentNode && (isType === 'attribute' && tmpEl.parentNode.hasAttribute(selector) || isType === 'id' && tmpEl.parentNode.id === selector || isType === 'class' && hasClass(tmpEl.parentNode, selector) || isType === 'element' && tmpEl.parentNode === selector)) {
                    if (el[0]) {
                        rEl = $window.angular.element(tmpEl.parentNode);
                    } else {
                        rEl = tmpEl.parentNode;
                    }
                } else if (tmpEl.parentNode) {
                    rEl = parent(tmpEl.parentNode);
                } else {
                    rEl = false;
                }
                return rEl;
            }
            return parent(baseEl);
        };

        //TODO: Docs
        // set selected
        // Given an arry and a specfic item - iterates and sets the givem item to selected and resets the others
        service.setSelectedInCollection = function (item, collection) {
            //TODO: Use map instead of for
            for (var i = collection.length; i--;) {
                collection[i].selected = false;
            }
            if (item) {
                item.selected = true;
            }
        };

        //TODO: Docs
        //remove item from array
        service.removeItemFromCollection = function (item, collection) {
            for (var i = collection.length; i--;) {
                if (collection[i] == item) {
                    collection.splice(i, 1);
                    return;
                }
            }
        };

        /**    
         * @generous
        
        * @type method
        
        * @name hasClass
        
        * @parent utilFactory
        
        * @description 
            Checks to see whether passed element has passed CSS class
        * @param {object} element Element to check (angular or regular)
        * @param {string} class CSS class to check for
        * @returns {boolean} Returns `true` or `false`
        */
        service.hasClass = function (el, cls) {
            el = el[0] ? el[0] : el;
            return (' ' + el.className + ' ').indexOf(' ' + cls.replace('.', '') + ' ') > -1;
        };

        //TODO: Docs
        //get class for icon from given config type
        service.getIconNameFromIconType = function (cls) {

            var iconCls = 'ibd-icon-';
            switch (cls) {
                case "error":
                    iconCls += "warning-circle";
                    break;
                default:
                case "info":
                    iconCls += "info";
                    break;
                case "warning":
                    iconCls += "warning-triangle";
                    break;
                case "success":
                    iconCls += "executed";
                    break;
                case "wait":
                    iconCls += "loading";
                    break;
            }
            return iconCls;
        };

        /**    
        * @generous
        
        * @type method
        
        * @name ensurePosition
        
        * @parent utilFactory
        
        * @description 
             For the passed element, ensures it has a CSS position applied, sets to `relative` if none or `static` detected,
             this allows any child positioning dependancies to be correctly resolved             
            
        * @param {object} element DOM element to ensure has a position set
        */
        service.ensurePosition = function (el) {
            el = el[0] ? el[0] : el; // convert from angular element to DOM node

            if (!el || !el.tagName || el.tagName === 'undefined') {
                return;
            }

            if (!window.getComputedStyle(el, null).getPropertyValue("position") || window.getComputedStyle(el, null).getPropertyValue("position") === "static") {
                el.style.position = "relative";
            }
        };

        /**    
        * @generous
        
        * @type method
        
        * @name popBubble
        
        * @parent utilFactory
        
        * @description 
             Kills the passed event in its tracks
            
        * @param {object} event Event object to terminate
        * @returns {boolean} Returns `false`
        */
        service.popBubble = function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        };

        /**    
        * @generous
        
        * @type method
        
        * @name mousewheel
        
        * @parent utilFactory
        
        * @description 
            Provides normalized feedback as to mousewheel direction on mousewheel event            
            
        * @param {object} element Angular element to listen to event
        * @param {function} function Function to run on event, passed augmented event object
        * @returns {Object} Original event object is returned to passed function argument, with additional `ibd` parameter consisting of `mousewheel` property which can be either `up` or `down`
        */
        service.mousewheel = function (el, fn) {
            function mouseScroll(e) {
                e = e.originalEvent ? e.originalEvent : e;
                //extend should happen after the operator to extend object map with ibd
                e = extendEvent(e);
                if (e.wheelDeltaY > 0 || e.wheelDelta > 0 || e.detail < 0) {
                    e.ibd.mousewheel = "up";
                } else {
                    e.ibd.mousewheel = "down";
                }
                return e;
            }
            el.on("mousewheel DOMMouseScroll", function (e) {
                return fn(mouseScroll(e));
            });
        };

        /**    
        * @generous
        
        * @type method
        
        * @name keydown
        
        * @parent utilFactory
        
        * @description
            Provides semantic feedback as to key pressed 
            
        * @param {object} element Angular element to listen to event
        * @param {function} function Function to run on event, passed augmented event object
        * @returns {Object} Original event object is returned to passed function argument, with additional `ibd` parameter consisting of `key` property which can be:
              `up`,`down`, `left`, `right`, `spacebar`, `pageUp`, `pageDown`, `home`, `end`, `return`, `esc`, `tab`, `del`, `backspace`
        */
        service.keyup = function (el, fn) {
            el.on('keyup', function (e) {
                return fn(keymap(e));
            });
        };

        //TODO: Improve these docs
        /**
         * @name keyup
         * @description
         */
        /**    
        * @generous
        
        * @type method
        
        * @name keyup
        
        * @parent utilFactory
        
        * @description
            Provides semantic feedback as to key pressed 
            
        * @param {object} element Angular element to listen to event
        * @param {function} function Function to run on event, passed augmented event object
        * @returns {Object} Original event object is returned to passed function argument, with additional `ibd` parameter consisting of `key` property which can be:
              `up`,`down`, `left`, `right`, `spacebar`, `pageUp`, `pageDown`, `home`, `end`, `return`, `esc`, `tab`, `del`, `backspace`
        */
        service.keydown = function (el, fn) {
            el.on('keydown', function (e) {
                return fn(keymap(e));
            });
        };

        /**    
        * @generous
        
        * @type method
        
        * @name onReturn
        
        * @parent utilFactory
        
        * @description
            Runs a function when the return keyup event is detected on the passed element 
            
        * @param {object} element Angular element to listen to event
        * @param {function} function Function to run on event, passed event object        
        */
        service.onReturn = function (el, fn) {
            el.on('keyup', function (e) {
                if (e.keyCode === "13") {
                    fn(e);
                }
            });
        };

        /**    
        * @generous
        
        * @type method
        
        * @name isScrollable
        
        * @parent utilFactory
        
        * @description
            Checks to see whether passed element is scrollable (has scrollbars) 
            
        * @param {object} element Element to check (angular or regular)
        * @returns {object} Returns object consisting of `x` and `y` keys with `boolean` values
        */
        service.isScrollable = function (el) {
            el = el[0] ? el[0] : el;
            var oArr = ['visible', 'hidden'];
            return {
                y: el.scrollHeight > el.offsetHeight && (oArr.indexOf(window.getComputedStyle(el, null).getPropertyValue('overflow')) < 0 || oArr.indexOf(window.getComputedStyle(el, null).getPropertyValue('overflow-y')) < 0),
                x: el.scrollWidth > el.offsetWidth && (oArr.indexOf(window.getComputedStyle(el, null).getPropertyValue('overflow')) < 0 || oArr.indexOf(window.getComputedStyle(el, null).getPropertyValue('overflow-x')) < 0)
            };
        };

        //TODO: DOcs
        //get browser info
        service.getBrowserInfo = function () {
            var ua = navigator.userAgent,
                tem,
                M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return {
                    name: 'IE',
                    version: tem[1] || ''
                };
            }
            if (M[1] === 'Chrome') {
                tem = ua.match(/\bOPR\/(\d+)/);
                if (tem !== null) {
                    return {
                        name: 'Opera',
                        version: tem[1]
                    };
                }
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
            if ((tem = ua.match(/version\/(\d+)/i)) !== null) {
                M.splice(1, 1, tem[1]);
            }
            return {
                name: M[0].toLowerCase(),
                version: M[1]
            };
        };

        //TODO: Docs
        service.parseRepeatExpression = function (expression) {
            var match = expression.match(/^\s*([\$\w]+)\s+in\s+([\S\s]*)$/);
            if (!match) {
                throw new Error("Expected expression in form of '_item_ in _collection_' but got '" + expression + "'.");
            }
            return {
                value: match[1],
                collection: match[2]
            };
        };

        //TODO: Docs
        //Exposing a templateCache builder for use to inject Markup on the fly for use in app.
        service.addToTemplateCache = function (tplName, tpl) {
            $templateCache.put(tplName, tpl);
        };

        return service;
    }]
};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}],20:[function(require,module,exports){
/**    
    * @generous
    
    * @type component
  
    * @name validate
   
    * @parent wrap.ng
     
    * @description
        Ultra-lightweight wrapper to display field/control validation popups. Loads the `ux.flyover.invalid.tpl.html` 
            template from the `$templateCache`.
        Node, the invalid styling of form fields etc is dictated  by the {@link css.directive:Inputs relevant CSS}, 
            which, if using
        `ng-invalid` should automatically apply. The validation trigger (red triangle) will only display 
            when the field has the class `ng-invalid` or `ibd-invalid` set.
        

    * @param {string=} ibd-validate Optional flyover event trigger, can be `focus` (default), `hover`, `click`, or `trigger` (click the red error triangle)
    * @param {string=} ibd-message The error message to show, if a string, should be encapsulated within single quotation marks
    
   
    * @example
      <head>
       <link href="../ibd.bare.css" rel="stylesheet" type="text/css">
       <link href="../ibd.wrap.ng.css" rel="stylesheet" type="text/css">
       <script src="libs/angular.1.4.7.min.js"></script>       
       <script src="../ibd.core.js"></script>       
       <script src="../ibd.wrap.ng.js"></script>
    </head>
    <html>
        <div ng-app='app' ng-controller='exampleController'>
            <h2>On Focus</h2>
            <input type="text" ibd-validate ibd-message="'Message on focus!'" class="ng-invalid" />
            <h2>On Click</h2>
            <input type="text" ibd-validate="click" ibd-message="'Message on click!'" class="ng-invalid" />
            <h2>On Hover</h2>
            <input type="text" ibd-validate="hover" ibd-message="'Message on hover!'" class="ng-invalid" />
            <h2>On Trigger</h2>
            <input type="text" ibd-validate="trigger" ibd-message="'Message on trigger!'" class="ng-invalid" />
        </div>
    </html>
   <javascript>        
        angular.module('app', ['ibd'])
            .controller('exampleController', ['$scope', function ($scope) {
            }]);
   </javascript>  
  */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

exports['default'] = {
    name: _commonModulePrefix2['default'].name + 'Validate',
    component: ["$log", "ibdUtilFactory", "$window", function component($log, ibdUtilFactory, $window) {
        'ngInject';

        var ctrl = _commonModulePrefix2['default'].name + 'FlyoverController';

        var tpls = {
            'default': _commonModulePrefix2['default'].name + '.validate.tpl.html',
            flyoverInvalid: _commonModulePrefix2['default'].name + '.flyover.invalid.tpl.html'
        };

        return {
            restrict: 'A',
            controller: ctrl,
            scope: {
                ibdValidate: '@',
                ibdMessage: '='
            },

            link: function link(scope, el) {
                var vEl = ibdUtilFactory.wrap(scope, el, tpls['default']),
                    tgtEl = $window.angular.element(vEl[0]);

                ibdUtilFactory.ensurePosition(vEl[1]);

                function enableValidation() {
                    if (tgtEl.hasClass('ibd-invalid') || tgtEl.hasClass('ng-invalid')) {
                        scope.ibdFlyoverConfig.scope.ibdInvalidBody = scope.ibdMessage;
                        return true;
                    } else {
                        return false;
                    }
                }
                scope.ibdFlyover = {
                    enable: enableValidation,
                    on: scope.ibdValidate && typeof scope.ibdValidate === 'string' ? scope.ibdValidate === 'trigger' ? 'click' : scope.ibdValidate : 'focus',
                    group: 'invalid',
                    el: scope.ibdValidate === "trigger" ? $window.angular.element(vEl[1].getElementsByClassName('ibd-invalid-trigger')[0]) : el,
                    scope: {
                        ibdMessage: scope.ibdMessage
                    }
                };
                scope.ibdFlyoverInit();
            }
        };
    }]
};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}],21:[function(require,module,exports){
/**    
    * @generous
    
    * @type component
  
    * @name virtualise
   
    * @parent wrap.ng
     
    * @description
        Lightweight virtualisation, use exactly the same way as `ng-repeat`, except replace `ng-repeat` with `ux-virtualise`. The number of items is dictated by the height of the parent
        container, as such the containing element should ideally have an explicit height set. Alternatively, use the attribute `ux-live` to monitor and recalculate after an dimension changes.
        Note that virtualisation does not support syntax with an inline filter declaration, as angular creates an isolated scope for filtered results outside of that reliably
        readable by this directive. As such, run any filter on the originating source array directly, and not inline on the `ux-virtualise` attribute.

    * @param {number=} ux-debounce Optional, millisecond delay to debounce reprocessing on scroll, set to zero for no flash of content - however will have performance implications
        for more complex views. Defaults to `10`.
   
    * @example
      <head>
       <link href="../ibd.bare.css" rel="stylesheet" type="text/css">
       <link href="../ibd.wrap.ng.css" rel="stylesheet" type="text/css">
       <script src="libs/angular.1.4.7.min.js"></script>       
       <script src="../ibd.core.js"></script>       
       <script src="../ibd.wrap.ng.js"></script>
       <style>
        #exampleVirtualise{
            height:200px;
            border:1px solid;
        }
       </style>
    </head>
    <html>
        <div ng-app='app' ng-controller='exampleController'>
            <h1>Virtualised list with n={{options.length}} items and n*2 bindings</h1>
            <div id="exampleVirtualise" ibd-scroll="y">
                <div ibd-virtualise="option in options" >name: {{::option.name}}, value:{{option.value}}</div>
            </div>
        </div>
    </html>
   <javascript>        
        angular.module('app', ['ibd'])
            .controller('exampleController', ['$scope', function ($scope) {
                
                function randomString(length) {
                    var n=(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length));
                    return Math.round(n).toString(36).slice(1);
                }
                
                $scope.options = [];
                
                genData = function() {
                    var o = 0,
                        opts = [];
                    for (o = 0; o < 100000; o++) {
                        opts.push({
                            name: randomString(10),
                            value: randomString(1)
                        });
                    }
                    return opts;
                };
                
                $scope.options = genData();
                
            }]);
   </javascript>  
  */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

exports['default'] = {
    name: _commonModulePrefix2['default'].name + 'Virtualise',
    component: ["$log", "$compile", "$templateCache", "$timeout", function component($log, $compile, $templateCache, $timeout) {
        'ngInject';

        var tpls = {
            'default': _commonModulePrefix2['default'].name + '.virtualise.tpl.html'
        };

        return {
            restrict: 'A',
            link: function link(scope, el, attrs) {

                var dataSource = attrs.ibdVirtualise.split(' in ')[1],
                    items = [],
                    varName = 'ibdVirtualisedData',
                    parentEl = el.parent(),
                    containerEl = document.createElement('div'),
                    itemHeight = el[0].offsetHeight,
                    debounce = attrs.ibdDebounce || 10,
                    debounceTimeout = null;

                scope.ibdVirtualiseUpdate = function () {
                    items = recurse(scope, dataSource);
                    draw();
                    chunk();
                };

                // recursively get the data source if nested on scope, e.g. data.row.items
                function recurse(fov, route) {
                    var tunnel = fov,
                        keys = route.split('.');
                    for (var k = 0; k < keys.length; k++) {
                        tunnel = tunnel[keys[k]];
                    }
                    if (!tunnel && fov.$parent) {
                        recurse(fov.$parent, route);
                    } else if (tunnel) {
                        return tunnel;
                    } else {
                        return false;
                    }
                }

                // grab actual data source from ng-repeat string
                dataSource = dataSource.split(' ')[0].split('|')[0].split('(').pop().trim();

                function chunk() {
                    var parentHeight = parentEl[0].offsetHeight,
                        viewableItems = Math.floor(parentHeight / itemHeight),
                        lowTide = Math.ceil(parentEl[0].scrollTop / itemHeight) || 0,
                        highTide = lowTide + viewableItems;
                    scope[varName] = items.slice(lowTide, highTide);
                    $timeout(function () {
                        scope.$apply();
                    });
                }

                function draw() {
                    vWrapEl.css({
                        height: itemHeight * items.length + 'px'
                    });
                }
                el[0].setAttribute('ng-repeat', attrs.ibdVirtualise.replace(dataSource, varName));
                el[0].removeAttribute('ibd-virtualise');

                containerEl.innerHTML = $templateCache.get(tpls['default']);
                containerEl.firstChild.firstChild.appendChild(el[0].cloneNode(true));

                var vWrapEl = angular.element(containerEl.children[0]),
                    vFloatEl = angular.element(containerEl.children[0].children[0]);
                el.replaceWith(vWrapEl);

                $compile(vWrapEl)(scope);

                scope.$watch(dataSource.split('.').pop(), scope.ibdVirtualiseUpdate, false);
                $timeout(function () {
                    scope.ibdVirtualiseUpdate();
                }, false);

                parentEl.on('scroll', function () {
                    vFloatEl.css({
                        top: parentEl[0].scrollTop + 'px'
                    });
                    debounceTimeout = setTimeout(function () {
                        clearTimeout(debounceTimeout);
                        chunk();
                    }, debounce);
                });
            }
        };
    }]
};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}],22:[function(require,module,exports){
'use strict';

/**    
    * @generous
    
    * @type factory
  
    * @name windowFactory
   
    * @parent wrap.ng
     
    * @description
        Angular service used to create windows for use as dialogs, popups, or modals. Supports intelligent layering / stacking- allowing multiple modals to be opened from one another
        with modals using a single mask under the upper most. Also supports dragging, keyboard escaping etc.
   
    * @example
      <head>
       <link href="../ibd.bare.css" rel="stylesheet" type="text/css">
       <link href="../ibd.wrap.ng.css" rel="stylesheet" type="text/css">
       <script src="libs/angular.1.4.7.min.js"></script>       
       <script src="../ibd.core.js"></script>       
       <script src="../ibd.wrap.ng.js"></script>
    </head>
    <html>
        <div ng-app='app' ng-controller='exampleController'>
            <button class='btn btn-outline' ng-click="openWindow(false)">OPEN WINDOW</button>
            <button class='btn btn-outline' ng-click="openWindow(true)">OPEN MODAL</button>
            <button class='btn btn-outline' ng-click="showNotice()">SHOW NOTIFICATION</button>
        </div>
    </html>
   <javascript>        
        angular.module('app', ['ibd'])
            .controller('exampleController', ['$scope', 'ibdWindowFactory', function ($scope, ibdWindowFactory) {
                
                function openWindow(modal) {
                    
                    var body = modal 
                             ? '<button class='btn btn-outline' ng-click="openWindow(true)">OPEN MODAL</button>' 
                             : ' <button class='btn btn-outline' ng-click="openWindow(false)">OPEN WINDOW</button>';
                            
                        body="<div style='padding:20px;'>"+body+" ({{valueFromScope}})</div>";
                        ibdWindowFactory.open({
                            draggable: true,
                            modal: modal,
                            title:'Window title ({{valueFromController}})',
                            body:body,
                            controller:'exampleCtrl',
                            footer: {
                                right:[
                                    {
                                        text: 'Close',
                                        cssCls:'ibd-secondary',
                                        action:function(a, b, c){
                                            c.scope.ibdWindowClose();
                                        }
                                    }
                                ]
                            },
                            scope: {
                                openWindow:openWindow,
                                valueFromScope:'this value comes from the scope'
                            }
                    });
                }
                
                $scope.valueFromController='from controller';
                
                $scope.openWindow = function(modal) {
                    openWindow(modal);
                };
                
                $scope.showNotice = function() {
                    ibdWindowFactory.open({
                        draggable: true,
                        cssCls:'ibd-small',
                        title:'Error!',
                        body:'ibd.window.notice.tpl.html',
                        scope: {
                            noticeTitle:'An error has occurred',
                            noticeMessage:'Some generic error message',
                            noticeIcon:'ibd-icon-warning-circle'
                        }
                    });
                }
            }]);
   </javascript>  
  */

/**    
  * @generous
  
  * @type method
 
  * @name open
 
  * @parent windowFactory
   
  * @description
        Instantiates a new window from the passed config, re-displays an existing instance if hidden or moves an existing instance to the top of the visible stack. 

  * @param {object} config Window configuration
  * @param {string=} config.id `id` to give window instance. If none is given, one is generated in the format `ibd-window{{n}}`. If one is passed and and instance of the window
  * exists, the window is shown and moved to the top of the visible stack
  * @param {boolean=} config.modal Whether the window is modal
  * @param {boolean=} config.closeOnMask If the window is modal, whether to close it when clicking the mask (defaults to true)
  * @param {object=} config.title Either text, HTML or a template location to use for the window title
  * @param {object=} config.body Either text, HTML or a template location to use for the window body. Note: You can pass a special template to the body to create a notification window.
  * Pass the value `ibd.window.notice.tpl.html` which expects scoped values for `noticeIcon`, `noticeTitle` (optional) and `noticeMessage`
  * @param {object=} config.footer Either text, HTML or a template location to use for the window footer, defaults to a close button
  * @param {object=} config.scope either an angular `$scope`, or a javascript object to compile the template against for lightweight usage.
  * @param {object=} config.onClose function to call when the window is closed
  * @param {object=} config.controller The controller to use for the window
  * @param {string=} config.templateUrl `$templateCache` entry to use for the template for the window, takes priority over `title`, `body` and `footer` items, defaults 
        to `ibd.window.tpl.html`
  * @param {string=} config.cssCls CSS class(es) to apply to the window element, the following can also be applied for relevant styling: 
        `ibd-large`, `ibd-small`, `ibd-error`, `ibd-warning`, `ibd-success` and `ibd-info`
  * @param {boolean=} config.persist Whether the window should persist (be hidden) on close and not be destroyed so it can be quickly be shown later using `open(id)`, defaults to `false`
  * @param {number=} config.x Initial `x` position of window, defaults to center of viewport
  * @param {number=} config.y Initial `y` position of window, defaults to center of viewport
  * @param {boolean=} config.centerOnResize Whether to center the window when the viewport is resized, defaults to `false`
  * @param {boolean=} config.draggable Whether to allow dragging of the window, defaults to `true`
  * @returns {string} Returns `id` of window instance
  
*/

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonModulePrefix = require('../../../common/modulePrefix');

var _commonModulePrefix2 = _interopRequireDefault(_commonModulePrefix);

'use strict';

exports['default'] = {
    name: _commonModulePrefix2['default'].name + 'WindowFactory',
    factory: ["$log", "$templateCache", "$rootScope", "$compile", "$window", "$document", "ibdDragFactory", function factory($log, $templateCache, $rootScope, $compile, $window, $document, ibdDragFactory) {
        'ngInject';

        var tpls = {
            'default': _commonModulePrefix2['default'].name + '.window.tpl.html',
            mask: _commonModulePrefix2['default'].name + '.window.mask.tpl.html',
            notice: _commonModulePrefix2['default'].name + '.window.notice.tpl.html'
        };

        var service = {};

        service.winMaskEl = null;

        service.winMgr = [];

        service.closeWindow = function (id, persist) {
            var ibdWindowFctry = service,
                w,
                i;
            for (w = ibdWindowFctry.winMgr.length; w--;) {
                if (ibdWindowFctry.winMgr[w].id === id) {
                    i = w;
                }
            }
            if (ibdWindowFctry.winMgr[i].scope.onClose) {
                ibdWindowFctry.winMgr[i].scope.onClose(persist);
            }
            if (persist) {
                $window.angular.element(document.getElementById(id)).removeClass('display-block');
            } else {
                ibdWindowFctry.winMgr[i].scope.$destroy();
                document.body.removeChild(document.getElementById(id));
                ibdWindowFctry.winMgr.splice(w, 1);
                $window.angular.element(window).off('resize', ibdWindowFctry.position);
                //    $rootScope.$broadcast('$destroy'); // fake nuking of child scopes (primarily to trigger flyover destruction due to loosely coupled scoping:https://github.com/angular/angular.js/issues/10706
            }
            ibdWindowFctry.setLayers();
        };

        service.getActive = function () {
            var ibdWindowFctry = service,
                wCount = ibdWindowFctry.winMgr.length,
                aM = null,
                aW = null,
                w;

            for (w = 0; w < wCount; w++) {
                var wAng = $window.angular.element(document.getElementById(ibdWindowFctry.winMgr[w].id));
                if (wAng.hasClass('display-block')) {
                    aW = w;
                    if (wAng.hasClass('ibd-modal')) {
                        aM = w;
                    }
                }
            }
            return {
                modal: aM,
                window: aW
            };
        };

        service.setLayers = function () {
            var ibdWindowFctry = service,
                wCount = ibdWindowFctry.winMgr.length,
                w,
                m = ibdWindowFctry.getActive().modal;

            // loop through all windows and set z-index, accommodating for the presence of any modal layer
            for (w = wCount; w--;) {
                document.getElementById(ibdWindowFctry.winMgr[w].id).style.zIndex = 10000 - (wCount - (m !== null && w >= m ? w + 1 : w));
            }
            if (ibdWindowFctry.winMaskEl && m === null) {
                // no modals remain...so hide mask element
                ibdWindowFctry.winMaskEl.removeClass('display-block');
            } else if (m !== null) {
                // ensure mask element is shown
                ibdWindowFctry.winMaskEl.addClass('display-block');
                ibdWindowFctry.winMaskEl[0].style.zIndex = 10000 - (wCount - m);
            }
        };

        service.toFront = function (id) {
            if (!id) {
                return false;
            }
            var ibdWindowFctry = service,
                wCount = ibdWindowFctry.winMgr.length,
                w,
                i = null;
            // if id in window manager, bring to front and show
            for (w = 0; w < wCount; w++) {
                if (ibdWindowFctry.winMgr[w].id === id) {
                    i = w;
                }
            }
            if (i !== null) {
                // window is already present..but hidden, so shuffle to front
                i = ibdWindowFctry.winMgr.splice(i, 1)[0]; // remove from position
                ibdWindowFctry.winMgr.push(i); // push to end
                $window.angular.element(document.getElementById(id)).addClass('display-block'); // ensure the window is visible;
                ibdWindowFctry.setLayers(i); // shuffle layering
                return true;
            } else {
                return false;
            }
        };

        service.position = function (id, x, y) {
            if (!id) {
                return false;
            }
            var windowEl = document.getElementById(id),
                posLeft = x || Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 2 - windowEl.offsetWidth / 2,
                posTop = y || Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 2 - windowEl.offsetHeight / 2;
            windowEl.style.top = (posTop > 0 ? posTop : 0) + "px";
            windowEl.style.left = (posLeft > 0 ? posLeft : 0) + "px";
        };

        service.open = function (ibdWindow) {
            var ibdWindowFctry = service;
            if (ibdWindow.id && ibdWindowFctry.toFront(ibdWindow.id)) {
                // window already exists, so bring to front
                return;
            }

            ibdWindow.templateHTML = ibdWindow.templateUrl ? $templateCache.get(ibdWindow.templateUrl) : $templateCache.get(tpls['default']);

            var winWrapper = $window.angular.element(ibdWindow.templateHTML);

            ibdWindow.id = ibdWindow.id || 'ibd-window-' + (ibdWindowFctry.winMgr.length + 1);
            if (!ibdWindow.scope || ibdWindow.scope.$id === undefined || ibdWindow.scope.$id === null) {

                //TODO: Check for scope mismatches here!
                ibdWindow.scope = $window.angular.extend($rootScope.$new(), ibdWindow.scope);
            }
            ibdWindow.scope.ibdWindowClose = function () {
                ibdWindowFctry.closeWindow(ibdWindow.id, ibdWindow.persist);
            };
            ibdWindow.scope.ibdWindowTitle = ibdWindow.title;
            ibdWindow.scope.ibdWindowBody = ibdWindow.body;
            ibdWindow.scope.onClose = ibdWindow.onClose;

            function fixClasses(k) {
                if (!ibdWindow.footer[k]) {
                    return;
                }
                for (var i = 0; i < ibdWindow.footer[k].length; i++) {
                    ibdWindow.footer[k][i].cssCls += ' ibd-button';
                }
            }

            if (typeof ibdWindow.footer === 'object') {
                fixClasses('left');
                fixClasses('right');
                ibdWindow.scope.windowFooterConfig = ibdWindow.footer;
                ibdWindow.scope.ibdWindowFooter = '<ibd-footer ibd-config="windowFooterConfig"></ibd-footer>';
            } else {
                ibdWindow.scope.ibdWindowFooter = ibdWindow.footer;
            }
            ibdWindow.closeOnMask = ibdWindow.closeOnMask === false ? false : true;

            if (ibdWindow.modal && !ibdWindowFctry.winMaskEl) {
                // modal, but no mask present..so add
                ibdWindowFctry.winMaskEl = $window.angular.element(document.body.insertBefore($window.angular.element($templateCache.get(tpls.mask))[0], document.body.firstChild));
                ibdWindowFctry.winMaskEl.on('click', function () {
                    if (ibdWindowFctry.getActive().modal !== null && ibdWindowFctry.winMgr[ibdWindowFctry.getActive().modal].closeOnMask === true) {
                        var win = ibdWindowFctry.winMgr[ibdWindowFctry.getActive().modal];
                        ibdWindowFctry.closeWindow(win.id, win.persist);
                    }
                });
            }
            if (ibdWindow.controller) {
                winWrapper[0].setAttribute('ng-controller', ibdWindow.controller);
            } else {
                winWrapper[0].removeAttribute('ng-controller');
            }
            ibdWindow.el = $window.angular.element(document.body.insertBefore($compile(winWrapper)(ibdWindow.scope)[0], document.body.firstChild));
            ibdWindow.el.addClass((ibdWindow.modal ? 'ibd-modal ' : '') + ibdWindow.cssCls + ' display-block');
            ibdWindow.el[0].id = ibdWindow.id;
            ibdWindow.el.on('mousedown', function (e) {
                ibdWindowFctry.toFront(ibdWindow.id);
            });
            ibdWindowFctry.winMgr.push({
                id: ibdWindow.id,
                persist: ibdWindow.persist,
                scope: ibdWindow.scope,
                closeOnMask: ibdWindow.closeOnMask
            });
            ibdWindowFctry.setLayers(window);

            ibdWindowFctry.position(ibdWindow.id, ibdWindow.x, ibdWindow.y);

            if (ibdWindow.draggable === true) {
                ibdDragFactory.init({
                    element: ibdWindow.el,
                    handle: ibdWindow.el[0].getElementsByClassName('ibd-window-header')[0],
                    allowX: true,
                    allowY: true,
                    snap: true
                });
            }

            if (ibdWindow.centerOnResize) {
                $window.angular.element(window).on('resize', ibdWindowFctry.position(ibdWindow.id, ibdWindow.x, ibdWindow.y));
            }
            return ibdWindow.id;
        };

        //Close modal/ window on escape
        $window.angular.element(window).on('keydown', function (e) {
            if (e.keyCode === 27 && service.getActive().window !== null) {
                var win = service.winMgr[service.getActive().window];
                service.closeWindow(win.id, win.persist);
            }
        });

        return service;
    }]
};
module.exports = exports['default'];

},{"../../../common/modulePrefix":1}]},{},[13]);
