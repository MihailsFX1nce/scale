/*! For license information please see 43.3db67aea.iframe.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"../components/dist/esm/scale-rating-stars.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"scale_rating_stars",(function(){return RatingStars}));__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../components/dist/esm/index-6d95a4bc.js"),_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../components/dist/esm/utils-c4af5b47.js"),_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../components/dist/esm/status-note-0089e9c9.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var sizes={small:16,large:24},ratingStarCount=0,RatingStars=function(){function RatingStars(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,RatingStars),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.i)(this,hostRef),this.scaleChange=Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.e)(this,"scale-change",7),this.scaleChangeLegacy=Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.e)(this,"scaleChange",7),this.ratingStarId="scale-rating-star-"+ratingStarCount++,this.starSize="large",this.size="large",this.minRating=0,this.maxRating=5,this.max=5,this.rating=0,this.readonly=!1,this.disabled=!1,this.ariaLabelTranslation="$rating out of $max stars",this.label="Rating",this.hideLabel=!1,this.handleInput=function(ev){var input=ev.composedPath()[0],value=Number(input.value);switch(!0){case value<_this.minRating:input.value=_this.minRating.toString();break;case value>_this.max:input.value=_this.max.toString()}_this.rating=Number(input.value),Object(_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_8__.d)(_this,"scaleChange",{value:_this.rating})},this.handleStarClick=function(ev){var star=ev.composedPath()[0],starValue=Number(star.dataset.value);_this.host.shadowRoot.querySelector("input").focus(),1===starValue&&1===_this.rating&&0===_this.minRating?_this.rating=_this.minRating:_this.rating=starValue,Object(_utils_c4af5b47_js__WEBPACK_IMPORTED_MODULE_8__.d)(_this,"scaleChange",{value:_this.rating})}}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(RatingStars,[{key:"componentWillRender",value:function componentWillRender(){5!==this.maxRating&&(this.max=this.maxRating,Object(_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_9__.a)({tag:"deprecated",message:'Property "maxRating" is deprecated. Please use the "max" property!',type:"warn",source:this.host})),0!==this.minRating&&Object(_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_9__.a)({tag:"deprecated",message:'Property "minRating" is deprecated and will be deleted upon the next release',type:"warn",source:this.host}),"large"!==this.starSize&&(this.size=this.starSize,Object(_status_note_0089e9c9_js__WEBPACK_IMPORTED_MODULE_9__.a)({tag:"deprecated",message:'Property "starSize" is deprecated. Please use the "size" property!',type:"warn",source:this.host})),this.rating=Math.round(this.rating)}},{key:"getRatingText",value:function getRatingText(){return this.ariaLabelTranslation.replace(/\$rating/g,""+this.rating).replace(/\$maxRating/g,""+this.max).replace(/\$max/g,""+this.max)}},{key:"renderStar",value:function renderStar(index){var selected=arguments.length>1&&void 0!==arguments[1]&&arguments[1],rating=arguments.length>2?arguments[2]:void 0,size=sizes[this.size],isWholeNumber=rating%1==0,isLastNumber=Math.ceil(rating)===index;return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.g)("div",{part:"star","data-value":index,"data-selected":selected,"data-half":isLastNumber&&!isWholeNumber,onMouseUp:!this.readonly&&this.handleStarClick,style:{zIndex:1===index?"5":"auto"}},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.g)("scale-icon-action-favorite",{size:size,part:"placeholder-star"}),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.g)("div",{class:"icon-clip"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.g)("scale-icon-action-favorite",{size:size,selected:!0,part:"selected-star"})))}},{key:"renderRating",value:function renderRating(){for(var stars=[],roundedRating=Math.ceil(this.rating),max=this.max,index=1;index<=max;index++){var isSelected=roundedRating>=index;stars.push(this.renderStar(index,isSelected,this.rating))}return stars}},{key:"render",value:function render(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.g)(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.c,{class:{hideLabel:this.hideLabel,disabled:this.disabled,readonly:this.readonly}},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.g)("div",{part:"container"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.g)("label",{id:this.ratingStarId+"-label",part:"label",htmlFor:this.ratingStarId},this.label),Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.g)("div",{part:"content"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.g)("div",{part:"wrapper","aria-valuetext":this.getRatingText(),"aria-orientation":"horizontal","aria-describedby":!!this.infoText&&this.ratingStarId+"-infotext"},Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.g)("input",{disabled:this.disabled,readonly:this.readonly,part:"range-slider",type:this.readonly?"number":"range",id:this.ratingStarId,min:0,max:this.max+1,value:this.rating,step:"1","aria-labelledby":this.ratingStarId+"-label","aria-readonly":!!this.readonly&&"true","aria-valuemin":this.minRating,"aria-valuemax":this.max,"aria-valuenow":this.rating,"aria-valuetext":this.getRatingText(),onInput:!this.readonly&&this.handleInput}),this.renderRating()),this.infoText&&Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.g)("div",{part:"infotext",id:this.ratingStarId+"-infotext"},this.infoText))))}},{key:"host",get:function get(){return Object(_index_6d95a4bc_js__WEBPACK_IMPORTED_MODULE_7__.f)(this)}}]),RatingStars}();RatingStars.style=":host{--stars-color:var(--telekom-color-text-and-icon-primary-standard);--stars-hover-color:var(--telekom-color-text-and-icon-primary-hovered);--stars-active-color:var(--telekom-color-text-and-icon-primary-pressed);--stars-inactive-color:transparent;--stars-placeholder-color:var(--telekom-color-ui-border-standard);--stars-placeholder-hover-color:var(--telekom-color-ui-border-hovered);--stars-disabled-color:var(--telekom-color-text-and-icon-disabled);--stars-spacing:var(--telekom-spacing-unit-x05);--stars-transition:color var(--telekom-motion-duration-immediate);--stars-size:24px;--label-font:var(--telekom-text-style-ui);--infotext-font:var(--telekom-text-style-body);--infotext-font-small:var(--telekom-text-style-body);--infotext-color:var(--telekom-color-text-and-icon-additional);--focus-outline:var(--telekom-line-weight-highlight) solid\n    var(--telekom-color-functional-focus-standard)}[star-size='small'],[size='small']{--stars-size:16px}[part='container']{display:inline-flex;flex-direction:column;position:relative}[part='range-slider']{position:absolute;border:0;margin:0;left:calc(-1 * var(--stars-size));bottom:0;z-index:2;width:calc(100% + var(--stars-size) * 2);opacity:0;height:var(--stars-size)}@media (hover: hover){[part='range-slider']{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;white-space:nowrap;width:1px}}input[type='range']::-webkit-slider-thumb{-webkit-appearance:none;border:0;height:var(--stars-size);width:var(--stars-size);border-radius:50%;background:#ffffff;cursor:pointer;margin-left:0px;margin-top:0}[part='content']{display:flex;align-items:center}[part='wrapper']{display:inline-flex;border-radius:var(--telekom-spacing-unit-x1);margin-left:calc(-1 * var(--stars-spacing))}[part='wrapper']:hover [part='star'] [part='selected-star']{opacity:1}[part='star']>*{pointer-events:none}[part='label']{font:var(--label-font);margin-bottom:var(--telekom-spacing-unit-x2);white-space:nowrap}[part='infotext']{margin-left:var(--telekom-spacing-unit-x2);display:flex;align-items:center;font:var(--infotext-font);color:var(--infotext-color);white-space:nowrap}:host([size='small']) [part='infotext']{font:var(--infotext-font-small)}[part='star']{--decimal-width:100%;display:inline-flex;position:relative;color:var(--stars-color);cursor:pointer;padding:0 var(--stars-spacing)}[part='placeholder-star']{display:inline-flex;color:var(--stars-placeholder-color);transition:var(--stars-transition)}[part='selected-star']{color:var(--stars-inactive-color);margin-left:0px;position:relative;transition:var(--stars-transition)}.icon-clip{overflow:hidden;position:absolute;width:var(--decimal-width);height:100%}[part='star'][data-half]{--decimal-width:calc(50% - var(--stars-spacing))}[part='star'][data-selected]{--stars-placeholder-color:transparent}[part='star'][data-half]{--stars-placeholder-color:currentColor}[part='star'][data-selected] [part='selected-star']{color:var(--stars-color)}@media (hover: hover){[part='wrapper']:hover{--stars-color:var(--stars-hover-color);--stars-placeholder-color:transparent}[part='wrapper']:hover [part='star']{--decimal-width:100%}[part='wrapper']:hover [part='star'][data-half]{--stars-placeholder-color:transparent}[part='wrapper']:hover [part='selected-star']{color:var(--stars-color)}[part='star']:hover~[part='star'] [part='selected-star']{color:var(--stars-inactive-color)}[part='star']:hover~[part='star'] [part='placeholder-star']{color:var(--stars-placeholder-hover-color)}}[part='wrapper']:active{--stars-color:var(--stars-active-color)}:host(:focus-within) [part='wrapper'],[part='wrapper']:focus{outline:var(--focus-outline)}:host(.readonly) [part='wrapper']{--stars-placeholder-color:var(--stars-disabled-color);pointer-events:none}:host(.disabled) [part='label'],:host(.disabled) [part='infotext']{color:var(--stars-disabled-color)}:host(.disabled) [part='wrapper']{--stars-color:var(--stars-disabled-color);--stars-placeholder-color:var(--stars-disabled-color);pointer-events:none}:host(.hideLabel) [part='label']{visibility:hidden;height:0;margin-bottom:0}@media screen and (forced-colors: active), (-ms-high-contrast: active){[part='star'] [part='placeholder-star']{color:var(--telekom-color-text-and-icon-inverted-standard)}[part='star'][data-selected] [part='placeholder-star']{color:var(--stars-inactive-color)}[part='star']:hover~[part='star'] [part='placeholder-star']{color:var(--telekom-color-text-and-icon-inverted-standard)}[part='wrapper']:hover [part='placeholder-star']{color:var(--stars-inactive-color)}}"},"../components/dist/esm/status-note-0089e9c9.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return statusNote}));var tagTypes={beta:"β",WIP:"🛠 WIP",deprecated:"😵 Deprecation notice",warning:"Warning"},defaultMessages={beta:"This component is currently in beta status. Some things may be refactored. Watch the change log for now.",WIP:"This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.",deprecated:"This component is deprecated."};function statusNote(_ref){var _ref$tag=_ref.tag,tag=void 0===_ref$tag?"WIP":_ref$tag,_ref$extraMessage=_ref.extraMessage,extraMessage=void 0===_ref$extraMessage?null:_ref$extraMessage,_ref$message=_ref.message,message=void 0===_ref$message?null:_ref$message,_ref$source=_ref.source,source=void 0===_ref$source?null:_ref$source,_ref$type=_ref.type;(0,console[void 0===_ref$type?"info":_ref$type])("%c scale – "+tagTypes[tag]+" ","background: #E20074; color: #FFF; border-radius: 4px","\n\n"+(message||defaultMessages[tag])+" "+(extraMessage?"\n"+extraMessage:"")+"\n    ",null!==source?"\nsource:":"","object"==typeof source?source:""+source,null!==source?"\n\n":"")}},"../components/dist/esm/utils-c4af5b47.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return animationsFinished})),__webpack_require__.d(__webpack_exports__,"b",(function(){return isClickOutside})),__webpack_require__.d(__webpack_exports__,"c",(function(){return isPseudoClassSupported})),__webpack_require__.d(__webpack_exports__,"d",(function(){return emitEvent})),__webpack_require__.d(__webpack_exports__,"e",(function(){return generateUniqueId})),__webpack_require__.d(__webpack_exports__,"f",(function(){return hasShadowDom})),__webpack_require__.d(__webpack_exports__,"g",(function(){return isScaleIcon}));__webpack_require__("../../node_modules/core-js/modules/es.promise.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.map.js");var hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},isPseudoClassSupported=function isPseudoClassSupported(pseudoClass){var ss=document.styleSheets[0];if(!ss){var el=document.createElement("style");document.head.appendChild(el),ss=document.styleSheets[0],document.head.removeChild(el)}return function testPseudo(){try{return/^:/.test(pseudoClass)||(pseudoClass=":"+pseudoClass),ss.insertRule("html"+pseudoClass+"{}",0),ss.deleteRule(0),!0}catch(e){return!1}}()};function emitEvent(instance,eventKey,detail){var legacyKey=eventKey+"Legacy",emitted=[];return void 0!==instance[legacyKey]&&emitted.push(instance[legacyKey].emit(detail)),emitted.push(instance[eventKey].emit(detail)),emitted}function isClickOutside(event,host){var target=event.target,hasShadow=null!=target.shadowRoot,composedPath=hasShadow?event.composedPath():[];do{if(target===host)return!1;target=hasShadow?composedPath.shift():target.parentNode}while(target);return!0}var isScaleIcon=function isScaleIcon(el){return null!=el&&1===el.nodeType&&"SCALE-ICON"===el.nodeName.toUpperCase().substring(0,10)},id=0;function generateUniqueId(){return id++}var animationsFinished=function animationsFinished(el){return Promise.all(el.getAnimations({subtree:!0}).map((function(x){return x.finished})))}}}]);
//# sourceMappingURL=43.3db67aea.iframe.bundle.js.map