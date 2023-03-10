const styleSheet = `
/* W3.CSS 4.15 December 2020 by Jan Egil and Borge Refsnes */
html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}
/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */
html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}
article,aside,details,figcaption,figure,footer,header,main,menu,nav,section{display:block}summary{display:list-item}
audio,canvas,progress,video{display:inline-block}progress{vertical-align:baseline}
audio:not([controls]){display:none;height:0}[hidden],template{display:none}
a{background-color:transparent}a:active,a:hover{outline-width:0}
abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}
b,strong{font-weight:bolder}dfn{font-style:italic}mark{background:#ff0;color:#000}
small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}
sub{bottom:-0.25em}sup{top:-0.5em}figure{margin:1em 40px}img{border-style:none}
code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}hr{box-sizing:content-box;height:0;overflow:visible}
button,input,select,textarea,optgroup{font:inherit;margin:0}optgroup{font-weight:bold}
button,input{overflow:visible}button,select{text-transform:none}
button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}
button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}
button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}
fieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}
legend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}
[type=checkbox],[type=radio]{padding:0}
[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}
[type=search]{-webkit-appearance:textfield;outline-offset:-2px}
[type=search]::-webkit-search-decoration{-webkit-appearance:none}
::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}
/* End extract */
html,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}html{overflow-x:hidden}
h1{font-size:36px}h2{font-size:30px}h3{font-size:24px}h4{font-size:20px}h5{font-size:18px}h6{font-size:16px}
.w3-serif{font-family:serif}.w3-sans-serif{font-family:sans-serif}.w3-cursive{font-family:cursive}.w3-monospace{font-family:monospace}
h1,h2,h3,h4,h5,h6{font-family:"Segoe UI",Arial,sans-serif;font-weight:400;margin:10px 0}.w3-wide{letter-spacing:4px}
hr{border:0;border-top:1px solid #eee;margin:20px 0}
.w3-image{max-width:100%;height:auto}img{vertical-align:middle}a{color:inherit}
.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}.w3-table-all{border:1px solid #ccc}
.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}
.w3-table-all tr:nth-child(odd){background-color:#fff}.w3-table-all tr:nth-child(even){background-color:#f1f1f1}
.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}.w3-centered tr th,.w3-centered tr td{text-align:center}
.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}
.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}
.w3-btn,.w3-button{border:none;display:inline-block;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}
.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}
.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}
.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}.w3-disabled *,:disabled *{pointer-events:none}
.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}
.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}.w3-badge{border-radius:50%}
.w3-ul{list-style-type:none;padding:0;margin:0}.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}.w3-ul li:last-child{border-bottom:none}
.w3-tooltip,.w3-display-container{position:relative}.w3-tooltip .w3-text{display:none}.w3-tooltip:hover .w3-text{display:inline-block}
.w3-ripple:active{opacity:0.5}.w3-ripple{transition:opacity 0s}
.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}
.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}
.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}
.w3-dropdown-hover:hover .w3-dropdown-content{display:block}
.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}
.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}
.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0;z-index:1}
.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}
.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}
.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}
.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}
.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}
.w3-main,#main{transition:margin-left .4s}
.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}
.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}
.w3-bar{width:100%;overflow:hidden}.w3-center .w3-bar{display:inline-block;width:auto}
.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;display:block;outline:0}
.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}
.w3-bar .w3-button{white-space:normal}
.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;white-space:normal;float:none;outline:0}
.w3-bar-block.w3-center .w3-bar-item{text-align:center}.w3-block{display:block;width:100%}
.w3-responsive{display:block;overflow-x:auto}
.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,
.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:"";display:table;clear:both}
.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}
.w3-col.s1{width:8.33333%}.w3-col.s2{width:16.66666%}.w3-col.s3{width:24.99999%}.w3-col.s4{width:33.33333%}
.w3-col.s5{width:41.66666%}.w3-col.s6{width:49.99999%}.w3-col.s7{width:58.33333%}.w3-col.s8{width:66.66666%}
.w3-col.s9{width:74.99999%}.w3-col.s10{width:83.33333%}.w3-col.s11{width:91.66666%}.w3-col.s12{width:99.99999%}
@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}
.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}
.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}
@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}
.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}
.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}
.w3-rest{overflow:hidden}.w3-stretch{margin-left:-16px;margin-right:-16px}
.w3-content,.w3-auto{margin-left:auto;margin-right:auto}.w3-content{max-width:980px}.w3-auto{max-width:1140px}
.w3-cell-row{display:table;width:100%}.w3-cell{display:table-cell}
.w3-cell-top{vertical-align:top}.w3-cell-middle{vertical-align:middle}.w3-cell-bottom{vertical-align:bottom}
.w3-hide{display:none!important}.w3-show-block,.w3-show{display:block!important}.w3-show-inline-block{display:inline-block!important}
@media (max-width:1205px){.w3-auto{max-width:95%}}
@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}
.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}
.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}
.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}
@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}
@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}
@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}
@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}.w3-auto{max-width:100%}}
.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}.w3-top{top:0}.w3-bottom{bottom:0}
.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}
.w3-display-topleft{position:absolute;left:0;top:0}.w3-display-topright{position:absolute;right:0;top:0}
.w3-display-bottomleft{position:absolute;left:0;bottom:0}.w3-display-bottomright{position:absolute;right:0;bottom:0}
.w3-display-middle{position:absolute;top:30%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}
.w3-display-left{position:absolute;top:50%;left:0%;transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}
.w3-display-right{position:absolute;top:50%;right:0%;transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}
.w3-display-topmiddle{position:absolute;left:50%;top:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}
.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}
.w3-display-container:hover .w3-display-hover{display:block}.w3-display-container:hover span.w3-display-hover{display:inline-block}.w3-display-hover{display:none}
.w3-display-position{position:absolute}
.w3-circle{border-radius:50%}
.w3-round-small{border-radius:2px}.w3-round,.w3-round-medium{border-radius:4px}.w3-round-large{border-radius:8px}.w3-round-xlarge{border-radius:16px}.w3-round-xxlarge{border-radius:32px}
.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}
.w3-container,.w3-panel{padding:0.01em 16px}.w3-panel{margin-top:16px;margin-bottom:16px}
.w3-code,.w3-codespan{font-family:Consolas,"courier new";font-size:16px}
.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}
.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}
.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}
.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}
.w3-spin{animation:w3-spin 2s infinite linear}@keyframes w3-spin{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}
.w3-animate-fading{animation:fading 10s infinite}@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}
.w3-animate-opacity{animation:opac 0.8s}@keyframes opac{from{opacity:0} to{opacity:1}}
.w3-animate-top{position:relative;animation:animatetop 0.4s}@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}
.w3-animate-left{position:relative;animation:animateleft 0.4s}@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}
.w3-animate-right{position:relative;animation:animateright 0.4s}@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}
.w3-animate-bottom{position:relative;animation:animatebottom 0.4s}@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}
.w3-animate-zoom {animation:animatezoom 0.6s}@keyframes animatezoom{from{transform:scale(0)} to{transform:scale(1)}}
.w3-animate-input{transition:width 0.4s ease-in-out}.w3-animate-input:focus{width:100%!important}
.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}
.w3-opacity-max{opacity:0.25}.w3-opacity-min{opacity:0.75}
.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{filter:grayscale(100%)}
.w3-greyscale,.w3-grayscale{filter:grayscale(75%)}.w3-greyscale-min,.w3-grayscale-min{filter:grayscale(50%)}
.w3-sepia{filter:sepia(75%)}.w3-sepia-max,.w3-hover-sepia:hover{filter:sepia(100%)}.w3-sepia-min{filter:sepia(50%)}
.w3-tiny{font-size:10px!important}.w3-small{font-size:12px!important}.w3-medium{font-size:15px!important}.w3-large{font-size:18px!important}
.w3-xlarge{font-size:24px!important}.w3-xxlarge{font-size:36px!important}.w3-xxxlarge{font-size:48px!important}.w3-jumbo{font-size:64px!important;line-height:1.0;padding-bottom:18px}
.w3-left-align{text-align:left!important}.w3-right-align{text-align:right!important}.w3-justify{text-align:justify!important}.w3-center{text-align:center!important}
.w3-border-0{border:0!important}.w3-border{border:1px solid #ccc!important}
.w3-border-top{border-top:1px solid #ccc!important}.w3-border-bottom{border-bottom:1px solid #ccc!important}
.w3-border-left{border-left:1px solid #ccc!important}.w3-border-right{border-right:1px solid #ccc!important}
.w3-topbar{border-top:6px solid #ccc!important}.w3-bottombar{border-bottom:6px solid #ccc!important}
.w3-leftbar{border-left:6px solid #ccc!important}.w3-rightbar{border-right:6px solid #ccc!important}
.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}
.w3-margin{margin:16px!important}.w3-margin-top{margin-top:16px!important}.w3-margin-bottom{margin-bottom:16px!important}
.w3-margin-left{margin-left:16px!important}.w3-margin-right{margin-right:16px!important}
.w3-padding-small{padding:4px 8px!important}.w3-padding{padding:8px 16px!important}.w3-padding-large{padding:12px 24px!important}
.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}
.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}
.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}
.w3-padding-top-64{padding-top:64px!important}.w3-padding-top-48{padding-top:48px!important}
.w3-padding-top-32{padding-top:32px!important}.w3-padding-top-24{padding-top:24px!important}
.w3-left{float:left!important}.w3-right{float:right!important}
.w3-button:hover{color:#000!important;background-color:#ccc!important}
.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}
.w3-hover-none:hover{box-shadow:none!important}
/* Colors */
.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}
.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}
.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}
.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}
.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}
.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}
.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}
.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}
.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}
.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}
.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}
.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}
.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}
.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}
.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}
.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}
.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}
.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}
.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}
.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}
.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}
.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}
.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}
.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#9e9e9e!important}
.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}
.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}
.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}
.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}
.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}
.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}
.w3-text-amber,.w3-hover-text-amber:hover{color:#ffc107!important}
.w3-text-aqua,.w3-hover-text-aqua:hover{color:#00ffff!important}
.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}
.w3-text-light-blue,.w3-hover-text-light-blue:hover{color:#87CEEB!important}
.w3-text-brown,.w3-hover-text-brown:hover{color:#795548!important}
.w3-text-cyan,.w3-hover-text-cyan:hover{color:#00bcd4!important}
.w3-text-blue-grey,.w3-hover-text-blue-grey:hover,.w3-text-blue-gray,.w3-hover-text-blue-gray:hover{color:#607d8b!important}
.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}
.w3-text-light-green,.w3-hover-text-light-green:hover{color:#8bc34a!important}
.w3-text-indigo,.w3-hover-text-indigo:hover{color:#3f51b5!important}
.w3-text-khaki,.w3-hover-text-khaki:hover{color:#b4aa50!important}
.w3-text-lime,.w3-hover-text-lime:hover{color:#cddc39!important}
.w3-text-orange,.w3-hover-text-orange:hover{color:#ff9800!important}
.w3-text-deep-orange,.w3-hover-text-deep-orange:hover{color:#ff5722!important}
.w3-text-pink,.w3-hover-text-pink:hover{color:#e91e63!important}
.w3-text-purple,.w3-hover-text-purple:hover{color:#9c27b0!important}
.w3-text-deep-purple,.w3-hover-text-deep-purple:hover{color:#673ab7!important}
.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}
.w3-text-sand,.w3-hover-text-sand:hover{color:#fdf5e6!important}
.w3-text-teal,.w3-hover-text-teal:hover{color:#009688!important}
.w3-text-yellow,.w3-hover-text-yellow:hover{color:#d2be0e!important}
.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}
.w3-text-black,.w3-hover-text-black:hover{color:#000!important}
.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}
.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}
.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}
.w3-border-amber,.w3-hover-border-amber:hover{border-color:#ffc107!important}
.w3-border-aqua,.w3-hover-border-aqua:hover{border-color:#00ffff!important}
.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}
.w3-border-light-blue,.w3-hover-border-light-blue:hover{border-color:#87CEEB!important}
.w3-border-brown,.w3-hover-border-brown:hover{border-color:#795548!important}
.w3-border-cyan,.w3-hover-border-cyan:hover{border-color:#00bcd4!important}
.w3-border-blue-grey,.w3-hover-border-blue-grey:hover,.w3-border-blue-gray,.w3-hover-border-blue-gray:hover{border-color:#607d8b!important}
.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}
.w3-border-light-green,.w3-hover-border-light-green:hover{border-color:#8bc34a!important}
.w3-border-indigo,.w3-hover-border-indigo:hover{border-color:#3f51b5!important}
.w3-border-khaki,.w3-hover-border-khaki:hover{border-color:#f0e68c!important}
.w3-border-lime,.w3-hover-border-lime:hover{border-color:#cddc39!important}
.w3-border-orange,.w3-hover-border-orange:hover{border-color:#ff9800!important}
.w3-border-deep-orange,.w3-hover-border-deep-orange:hover{border-color:#ff5722!important}
.w3-border-pink,.w3-hover-border-pink:hover{border-color:#e91e63!important}
.w3-border-purple,.w3-hover-border-purple:hover{border-color:#9c27b0!important}
.w3-border-deep-purple,.w3-hover-border-deep-purple:hover{border-color:#673ab7!important}
.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}
.w3-border-sand,.w3-hover-border-sand:hover{border-color:#fdf5e6!important}
.w3-border-teal,.w3-hover-border-teal:hover{border-color:#009688!important}
.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}
.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}
.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}
.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#9e9e9e!important}
.w3-border-light-grey,.w3-hover-border-light-grey:hover,.w3-border-light-gray,.w3-hover-border-light-gray:hover{border-color:#f1f1f1!important}
.w3-border-dark-grey,.w3-hover-border-dark-grey:hover,.w3-border-dark-gray,.w3-hover-border-dark-gray:hover{border-color:#616161!important}
.w3-border-pale-red,.w3-hover-border-pale-red:hover{border-color:#ffe7e7!important}.w3-border-pale-green,.w3-hover-border-pale-green:hover{border-color:#e7ffe7!important}
body{background-color: black;color: white;}h1{color: red;}h6{color: red;}`;

const htmlTemplate = {

    messageWrapper: (msg) => {
        return `
            <style>
            ${styleSheet}
            </style>
            <div class='grid'>
                <p class='text'>&#x26D4; ${msg} &#x26D4;</p>
            </div>`;
    },

    noAccessWrapper: (title, msg, code) => {
        return `
        <!DOCTYPE html>
        <html>
        <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta charset="UTF-8">
        <!--

        Copyright (c) 2022 - The Leo Developer @leodev12345 - https://codepen.io/leodev12345/pen/VERPdE

        Permission is hereby granted, free of charge, to any person
        obtaining a copy of this software and associated documentation
        files (the "Software"), to deal in the Software without restriction,
        including without limitation the rights to use, copy, modify,
        merge, publish, distribute, sublicense, and/or sell copies of
        the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall
        be included in all copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
        OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
        NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
        HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
        WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
        DEALINGS IN THE SOFTWARE.

        -->
        <style>
        ${styleSheet}
        </style>
        </head>
        <body>
        <div class="w3-display-middle">
        <h1 class="w3-jumbo w3-animate-top w3-center"><code>${title}</code></h1>
        <hr class="w3-border-white w3-animate-left" style="margin:auto;width:50%">
        <h3 class="w3-center w3-animate-right">${msg}</h3>
        <h3 class="w3-center w3-animate-zoom">&#x26D4;&#x26D4;&#x26D4;&#x26D4;</h3>
        <h6 class="w3-center w3-animate-zoom">error code: ${code}</h6>
        </div>
        </body>
        </html>
        `
    },

    notFoundPage: (title) => {

        return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charset="UTF-8">
                <!--

                Copyright (c) 2018 - Carla - https://codepen.io/ckroll17/pen/MzWgLo

                Permission is hereby granted, free of charge, to any person
                obtaining a copy of this software and associated documentation
                files (the "Software"), to deal in the Software without restriction,
                including without limitation the rights to use, copy, modify,
                merge, publish, distribute, sublicense, and/or sell copies of
                the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:

                The above copyright notice and this permission notice shall
                be included in all copies or substantial portions of the Software.

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
                DEALINGS IN THE SOFTWARE.

                -->
                <style>
                    .main {
                        margin-top: 15%;
                    }

                    .st0 {
                        fill: #fff;
                    }

                    .st2 {
                        fill: #5d89af;
                    }

                    .st3 {
                        fill: #709abf;
                    }

                    .st4,
                    .st6 {
                        fill: #fff;
                        stroke: #b3dcdf;
                        stroke-miterlimit: 10;
                    }

                    .st6 {
                        stroke: #5d89af;
                        stroke-width: 2;
                    }

                    .st7,
                    .st8,
                    .st9 {
                        stroke: #709abf;
                        stroke-miterlimit: 10;
                    }

                    .st7 {
                        stroke-width: 5;
                        stroke-linecap: round;
                        fill: none;
                    }

                    .st8,
                    .st9 {
                        fill: #fff;
                    }

                    .st9 {
                        fill: none;
                    }

                    .st10 {}

                    #cloud1 {
                        animation: cloud003 15s linear infinite;
                    }

                    #cloud2 {
                        animation: cloud002 25s linear infinite;
                    }

                    #cloud3 {
                        animation: cloud003 20s linear infinite;
                    }

                    #cloud4 {
                        animation: float 4s linear infinite;
                    }

                    #cloud5 {
                        animation: float 8s linear infinite;
                    }

                    #cloud7 {
                        animation: float 5s linear infinite;
                    }

                    #tracks {
                        animation: slide 650ms linear infinite;
                    }

                    #bumps {
                        animation: land 10000ms linear infinite;
                    }

                    @keyframes jig {
                        0% {
                            transform: translateY(0px);
                        }

                        50% {
                            transform: translateY(1px);
                        }

                        100% {
                            transform: translateY(0px);
                        }
                    }

                    #car-layers {
                        animation: jig 0.35s linear infinite;
                    }

                    @keyframes land {
                        from {
                            transform: translateX(0);
                        }

                        to {
                            transform: translateX(1000px);
                        }
                    }

                    @keyframes slide {
                        from {
                            transform: translateX(0px);
                        }

                        to {
                            transform: translateX(100px);
                        }
                    }

                    /* @keyframes cloudFloat {
                        0% { transform: translateX(0) translateY(3px); }
                        100% { transform: translateX(1000px) translateY(0); }
                    } */

                    @keyframes cloud001 {
                        0% {
                            transform: translateX(-1000px) translateY(3px);
                        }

                        100% {
                            transform: translateX(1000px) translateY(0);
                        }
                    }

                    @keyframes cloud002 {
                        0% {
                            transform: translateX(-1000px) translateY(3px);
                        }

                        100% {
                            transform: translateX(1000px) translateY(0);
                        }
                    }

                    @keyframes cloud003 {
                        0% {
                            transform: translateX(-1000px) translateY(3px);
                        }

                        100% {
                            transform: translateX(1000px) translateY(0);
                        }
                    }

                    @keyframes float {
                        0% {
                            transform: translateY(0px) translateX(0);
                        }

                        50% {
                            transform: translateY(8px) translateX(5px);
                        }

                        100% {
                            transform: translateY(0px) translateX(0);
                        }
                    }

                    #bracefront,
                    #braceback {
                        animation: braces 1s linear infinite;
                    }

                    @keyframes braces {
                        0% {
                            transform: translateX(-2px);
                        }

                        25% {
                            transform: translateX(3px);
                        }

                        50% {
                            transform: translateX(-2px);
                        }

                        75% {
                            transform: translateX(3px);
                        }

                        100% {
                            transform: translateX(-2px);
                        }
                    }
                </style>
            </head>
            <body>
                <div class="main">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 355">
                            <g id="ocean">
                            <path id="sky" class="st0" d="M0 0h1000v203.1H0z"/>
                            <linearGradient id="water_1_" gradientUnits="userSpaceOnUse" x1="500" y1="354" x2="500" y2="200.667">
                                <stop offset="0" stop-color="#fff"/>
                                <stop offset="1" stop-color="#b3dcdf"/>
                            </linearGradient>
                            <path id="water" fill="url(#water_1_)" d="M0 200.7h1000V354H0z"/>
                            <path id="land" class="st0" d="M0 273.4h1000V354H0z"/>
                            <g id="bumps">
                                <path class="st0" d="M0 275.2s83.8-28 180-28 197 28 197 28H0z"/>
                            <path class="st0" d="M377 275.2s54.7-28 117.5-28 128.6 28 128.6 28H377z"/>
                            <path class="st0" d="M623.2 275.2s83.7-28 179.9-28 196.9 28 196.9 28H623.2z"/>
                                <path class="st0" d="M-998 275.2s83.8-28 180-28 197 28 197 28h-377z"/>
                                <path class="st0" d="M-621 275.2s54.7-28 117.5-28 128.6 28 128.6 28H-621z"/>
                                <path class="st0" d="M-374.8 275.2s83.7-28 179.9-28S2 275.2 2 275.2h-376.8z"/>
                            </g>
                            </g>
                            <g id="tracks">
                            <path class="st2" d="M9.8 282.4h-3L0 307.6h3z"/>
                            <path class="st2" d="M19.8 282.4h-3L10 307.6h3z"/>
                            <path class="st2" d="M29.8 282.4h-3L20 307.6h3z"/>
                            <path class="st2" d="M39.8 282.4h-3L30 307.6h3z"/>
                            <path class="st2" d="M49.8 282.4h-3L40 307.6h3z"/>
                            <path class="st2" d="M59.8 282.4h-3L50 307.6h3z"/>
                            <path class="st2" d="M69.8 282.4h-3L60 307.6h3z"/>
                            <path class="st2" d="M79.8 282.4h-3L70 307.6h3z"/>
                            <path class="st2" d="M89.8 282.4h-3L80 307.6h3z"/>
                            <path class="st2" d="M99.8 282.4h-3L90 307.6h3z"/>
                            <path class="st2" d="M109.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M119.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M129.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M139.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M149.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M159.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M169.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M179.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M189.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M199.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M209.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M219.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M229.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M239.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M249.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M259.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M269.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M279.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M289.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M299.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M309.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M319.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M329.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M339.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M349.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M359.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M369.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M379.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M389.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M399.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M409.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M419.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M429.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M439.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M449.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M459.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M469.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M479.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M489.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M499.8 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M1000 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M990 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M980 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M970 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M960 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M950 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M940 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M930 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M920 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M910 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M900 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M890 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M880 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M870 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M860 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M850 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M840 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M830 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M820 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M810 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M800 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M790 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M780 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M770 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M760 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M750 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M740 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M730 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M720 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M710 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M700 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M690 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M680 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M670 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M660 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M650 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M640 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M630 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M620 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M610 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M600 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M590 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M580 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M570 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M560 282.4h-3l-6.8 25.2h3z"/>
                            <g>
                                <path class="st2" d="M-490.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-480.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-470.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-460.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-450.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-440.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-430.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-420.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-410.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-400.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-390.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-380.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-370.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-360.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-350.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-340.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-330.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-320.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-310.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-300.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-290.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-280.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-270.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-260.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-250.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-240.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-230.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-220.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-210.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-200.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-190.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-180.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-170.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-160.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-150.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-140.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-130.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-120.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-110.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-100.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-90.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-80.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-70.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-60.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-50.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-40.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-30.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-20.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-10.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M-.2 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M500 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M490 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M480 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M470 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M460 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M450 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M440 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M430 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M420 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M410 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M400 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M390 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M380 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M370 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M360 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M350 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M340 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M330 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M320 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M310 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M300 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M290 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M280 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M270 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M260 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M250 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M240 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M230 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M220 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M210 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M200 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M190 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M180 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M170 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M160 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M150 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M140 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M130 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M120 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M110 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M100 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M90 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M80 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M70 282.4h-3l-6.8 25.2h3z"/>
                                <path class="st2" d="M60 282.4h-3l-6.8 25.2h3z"/>
                            </g>
                            <path class="st2" d="M550 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M540 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M530 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M520 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M510 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M550 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M540 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M530 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M520 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st2" d="M510 282.4h-3l-6.8 25.2h3z"/>
                            <path class="st3" d="M-499.5 300.2H1000v5.1H-499.5z"/>
                            <path class="st3" d="M-499.5 283.8H1000v2.8H-499.5z"/>
                            </g>
                            <g id="cloudsAll">
                            <path id="cloud1" class="st4" d="M19.5 69.7s-21.3.5-25-12.2c0 0-4.3-21.3 16-21.8 0 0-2.1-12.2 12.2-14.9 0 0 15-3.2 21.3 6.9 0 0 3.6-20.7 17.8-22.3 0 0 24-3 26.6 13.1 0 0 .1 9.5-2.8 13.5 0 0 9.5-15 26.5-4.8 0 0 12.1 7.9 7 20.2 0 0 16 4.8 10.1 18.1 0 0-10.2 8.5-17.1-1.1 0 0-5.5 16-32.5 16 0 0-19.1 2.1-27-13.3 0 0 .5 10.1-13.3 10.6-.1 0-20.3 3.2-19.8-8z"/>
                            <path id="cloud3" class="st4" d="M836 132s-18.3 2.1-22.2-4.9c0 0-4.9-11.8 12.5-13.8 0 0-2.5-6.8 9.7-9.6 0 0 12.7-3.1 18.7 2.1 0 0 2-12.2 14-14.3 0 0 16.6-3.3 23.7 2.1 0 0 4.8 3.9 2.4 6.5 0 0 3.1-4.8 18.4-.4 0 0 10.9 3.5 7.2 11 0 0 13.8-1.5 9.7 9.5 0 0-4.1 10.8-15.5 4.8 0 0-3.1 5.6-26.4 7.9 0 0-16.3 2.8-24-5.3 0 0 1 5.7-10.8 7.2-.1.1-17.2 3.6-17.4-2.8z"/>
                            <path id="cloud2" class="st4" d="M19.3 159.5s-15.9.6-18.8-5.1c0 0-3.4-9.5 11.7-10.1 0 0-1.7-5.5 9-6.9 0 0 11.2-1.7 16 2.8 0 0 2.5-9.4 13.1-10.3 0 0 17.9-1.8 20 5.4 0 0 .2 4.3-2 6.1 0 0 6.9-6.9 19.8-2.6 0 0 9.1 3.4 5.5 9 0 0 6.5 0 4.5 6.7 0 0-2.6 5.6-9.6 1 0 0-4 7.3-24.2 7.7 0 0-14.2 1.3-20.4-5.5 0 0 .5 4.5-9.8 5 0 .1-15 1.8-14.8-3.2z"/>
                            <path id="cloud4" class="st4" d="M370.3 109.5s15.9.6 18.8-5.1c0 0 3.4-9.5-11.7-10.1 0 0 1.7-5.5-9-6.9 0 0-11.2-1.7-16 2.8 0 0-2.5-9.4-13.1-10.3 0 0-17.9-1.8-20 5.4 0 0-.2 4.3 2 6.1 0 0-6.9-6.9-19.8-2.6 0 0-9.1 3.4-5.5 9 0 0-12 1.9-7.7 8 0 0 7.5 4 12.8-.2 0 0 4 7.3 24.2 7.7 0 0 14.2 1.3 20.4-5.5 0 0-.5 4.5 9.8 5 0 0 15.1 1.7 14.8-3.3z"/>
                            <path id="cloud5" class="st4" d="M511.7 12.4s-21.3-.3-25 7c0 0-4.3 12.2 16 12.5 0 0-2.1 7 12.2 8.6 0 0 15 1.8 21.3-4 0 0 3.6 11.9 17.8 12.8 0 0 19.5 1.6 27-4.4 0 0 5-4.4 2.1-6.7 0 0 4.1 4.4 21.2-1.5 0 0 12.1-4.6 7-11.6 0 0 16-2.8 10.1-10.4 0 0-10.2-4.9-17.1.6 0 0-5.5-9.2-32.5-9.2 0 0-19.1-1.2-27 7.6 0 0 .5-5.8-13.3-6.1-.1.2-20.3-1.6-19.8 4.8z"/>
                            </g>
                            <g id="train">
                            <path fill="#b3dcdf" d="M344.5 248.5h507.2v37.8H344.5z"/>
                            <g id="wheels">
                                <circle class="st6" cx="384.1" cy="285.6" r="15.1"/>
                                <path class="st2" d="M384.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z"/>
                                <circle class="st6" cx="416.1" cy="285.6" r="15.1"/>
                                <path class="st2" d="M416.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z"/>
                                <circle class="st6" cx="469.1" cy="285.6" r="15.1"/>
                                <path class="st2" d="M469.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z"/>
                                <circle class="st6" cx="734.1" cy="285.6" r="15.1"/>
                                <path class="st2" d="M734.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z"/>
                                <circle class="st6" cx="766.1" cy="285.6" r="15.1"/>
                                <path class="st2" d="M766.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z"/>
                                <circle class="st6" cx="821.1" cy="285.6" r="15.1"/>
                                <path class="st2" d="M821.1 295.7c-5.6 0-10.1-4.5-10.1-10.1s4.5-10.1 10.1-10.1 10.1 4.5 10.1 10.1c0 5.5-4.6 10.1-10.1 10.1z"/>
                            </g>
                            <path id="bracefront" class="st7" d="M383.2 285.6h88.1"/>
                            <path id="braceback" class="st7" d="M733.2 285.6h88.1"/>
                            <g id="car-layers">
                                <path id="car" class="st8" d="M321.8 300.7v-32.4s1.2.7-1.5-2.4v-29.1s3.1-11.6 10.7-21.1c0 0 7.6-12 15.5-17.5h1.3s10.2-4.9 30.9-28h.6s-.9-1.4 0-2.7c0 0 10.1-10.5 21-12.3 0 0 9.4-1.8 20.2-1.8h47.7V151H492v-1.1h10.1v1.1h19v2.2s8.2.9 19.2-4.2c0 0 1.4-1.1 28.8-1.1h291.5v6.8h7.5v2.2s12.2-.6 12.2 9.8V177l-10-.1v57.9s14.9-.5 14.9 10.2c0 0 1 9-14.9 8.9v3.8H719.5s-2.4.1-4.3 3l-15 29s-2.9 5.1-10.8 5.1H504.3s-2.9.1-6.1-5l-13.1-25s-4.5-7.1-11.8-7.1H369v2.4s-3.2 1.3-7.1 8.7L351.4 289s-2.9 6.3-6.9 6.4h-17.8l-4.9 5.3z"/>
                                <path id="streamline-outine" class="st8" d="M320.3 236.6s1.4-6.8 4.4-11.3c0 0 .1-2.3 23.2-6.3l78-16.6s103.3-21.1 134.9-26.1c0 0 93.3-16 120.5-17.9 0 0 57.6-4.3 100-4.1h88.9v63.4s-10.3 5.4-17.1 5.3c0 0-305.6 4.9-366.3 8.1 0 0-100.3 4.8-119.1 6.8 0-.1-46.6 1.2-47.4-1.3z"/>
                                <g id="window-grate">
                                <path class="st9" d="M739.5 182.6H854"/>
                                <path class="st9" d="M739.5 177.6H854"/>
                                <path class="st9" d="M739.5 172.6H854"/>
                                <path class="st9" d="M739.5 167.6H854"/>
                                <path class="st9" d="M739.5 161.4H854v26.1H739.5z"/>
                                </g>
                                <path class="st9" d="M320.3 257.8h549.9"/>
                                <g id="Text">
                                <text transform="translate(377.037 230.025)" class="st8 st10" font-size="21">
                                    404
                                </text>
                                <text transform="translate(659.5 213.994)" class="st8 st10" font-size="24.025">
                                Page not found.
                                </text>
                                </g>
                                <g id="ladders">
                                <g id="ladder-f">
                                    <path id="front-ladder" class="st8" d="M433.8 258.4h17.8v34.8h-17.8z"/>
                                    <path id="fb-rung" class="st9" d="M433.8 281.1h17.7"/>
                                    <path id="ft-rung" class="st9" d="M433.8 268.6h17.7"/>
                                </g>
                                <g id="ladder-b">
                                    <path id="ladder-back" class="st8" d="M851.8 257.8h17.8v34.8h-17.8z"/>
                                    <path id="bt-rung" class="st9" d="M851.8 268.6h17.7"/>
                                    <path id="bb-rung" class="st9" d="M851.8 281.1h17.7"/>
                                </g>
                                </g>
                                <path id="window-front" class="st8" d="M350.5 196.4s-.4 3.9 15.2 4.3l32.3-30.3s-18.2 1.1-19-.8l-28.5 26.8z"/>
                            </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </body>
        </html>
        `
    }
}

export default htmlTemplate
