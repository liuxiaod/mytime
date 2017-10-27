(function(window){var svgSprite='<svg><symbol id="icon-icon" viewBox="0 0 1024 1024"><path d="M962.576618 1023.998977H70.231992V502.291392c0-240.302754 194.803536-435.106291 435.106291-435.106291h22.114648c240.311964 0 435.123687 194.811723 435.123687 435.123687v521.690189z" fill="#FFD900" ></path><path d="M69.866673 456.312244h893.074242v118.185608H69.866673z" fill="" ></path><path d="M69.866673 499.926534h893.074242v30.956005H69.866673z" fill="#2B2B2D" ></path><path d="M516.404305 515.405048m-247.883399 0a247.883399 247.883399 0 1 0 495.766799 0 247.883399 247.883399 0 1 0-495.766799 0Z" fill="#AFB0B4" ></path><path d="M512 513.358438m-175.871367 0a175.871367 175.871367 0 1 0 351.742734 0 175.871367 175.871367 0 1 0-351.742734 0Z" fill="#FDFDFF" ></path><path d="M214.510859 785.509519s219.487704 187.255637 517.255184 96.697223c0 0-1.534958 121.255523-251.720794 87.488499S208.371028 816.207651 214.510859 785.509519z" fill="#050505" ></path><path d="M214.510859 785.509519s219.487704 187.255637 517.255184 96.697223c0 0-1.534958 121.255523-251.720794 87.488499S208.371028 816.207651 214.510859 785.509519z" fill="#FC326C" ></path><path d="M278.465386 894.932565s104.372011-3.069916 110.511842 49.116602c0 0 93.627307-66.000114 153.48759 24.558301 0 0 52.185494-39.906855 101.302096-7.674789 0 0-65.934622 22.128974-175.428276 6.267744-54.585145-7.908102-121.48679-22.906686-189.873252-72.267858z" fill="#FDFEFF" ></path><path d="M515.336998 514.429838m-75.976316 0a75.976316 75.976316 0 1 0 151.952632 0 75.976316 75.976316 0 1 0-151.952632 0Z" fill="#514217" ></path><path d="M515.336998 514.429838m-44.70411 0a44.70411 44.70411 0 1 0 89.40822 0 44.70411 44.70411 0 1 0-89.40822 0Z" fill="" ></path><path d="M524.086257 490.326908m-20.984919 0a20.984919 20.984919 0 1 0 41.969839 0 20.984919 20.984919 0 1 0-41.969839 0Z" fill="#FFFFFF" ></path><path d="M290.283537 111.716273s72.735509-53.495325 186.422667-22.896454c-47.322748-6.986104-124.485075-5.734602-186.020508 55.905209 0 0 63.505296-60.134529 176.662383-46.486708-47.999153 0.769525-118.970483 14.607681-168.918009 80.162658 0 0 71.016356-87.999129 219.093731-66.125981l2.238992-9.583253-0.292665-0.065491 4.12699-7.794516s-126.378189-66.514836-233.313581 16.884536zM763.885546 144.726051C702.350112 83.085217 625.187785 81.834738 577.865038 88.819819c113.687158-30.598871 186.422667 22.896453 186.422667 22.896454-106.935391-83.399372-233.31358-16.884535-233.31358-16.884536l4.126989 7.794516c-0.179078 0.038886-0.292665 0.065492-0.292665 0.065491l2.238992 9.583253c148.077375-21.873148 219.093731 66.12598 219.093731 66.125981-49.947526-65.553953-120.919879-79.392109-168.918009-80.161635 113.157086-13.647821 176.662382 46.486708 176.662383 46.486708z" fill="#050505" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)