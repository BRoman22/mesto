(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e){var r=e.name,n=e.about,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(r),this._about=document.querySelector(n),this._avatar=document.querySelector(o)}var r,n;return r=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about,n=t.avatar;this._name.textContent=e,this._about.textContent=r,this._avatar.alt=e,n&&(this._avatar.src=n)}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r,n,o,i){var a=i.handleCardClick,u=i.postLike,c=i.removeLike,l=i.handleDelete;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardData=e,this._templateSelector=r,this._propsCard=n,this._userData=o,this._handleCardClick=a,this._postLike=u,this._removeLike=c,this._handleDelete=l,this._handleToggleLike=this._handleToggleLike.bind(this),this._handleDeleteCard=this._handleDeleteCard.bind(this),this._element=this._getTemplate(),this._elementTitle=this._element.querySelector(this._propsCard.cardTitle),this._elementImage=this._element.querySelector(this._propsCard.cardImage),this._elementLike=this._element.querySelector(this._propsCard.cardLike),this._elementLikeCounter=this._element.querySelector(this._propsCard.cardLikeCounter),this._elementDelete=this._element.querySelector(this._propsCard.cardDelete)}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(this._propsCard.card).cloneNode(!0)}},{key:"generateCard",value:function(){var t=this;return this._elementTitle.textContent=this._cardData.name,this._elementImage.src=this._cardData.link,this._elementImage.alt=this._cardData.name,this._elementLikeCounter.textContent=this._cardData.likes.length,this._userData._id!=this._cardData.owner._id&&(this._elementDelete.remove(),this._elementDelete=null),this._cardData.likes.some((function(e){return e._id===t._userData._id}))&&this._elementLike.classList.add("card__like_active"),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){this._elementLike.addEventListener("click",this._handleToggleLike),this._elementImage.addEventListener("click",this._handleCardClick),this._elementDelete&&this._elementDelete.addEventListener("click",this._handleDeleteCard)}},{key:"_handleToggleLike",value:function(){this._elementLike.classList.contains("card__like_active")?(this._elementLikeCounter.textContent=--this._cardData.likes.length,this._elementLike.classList.remove("card__like_active"),this._removeLike()):(this._elementLikeCounter.textContent=++this._cardData.likes.length,this._elementLike.classList.add("card__like_active"),this._postLike())}},{key:"_handleDeleteCard",value:function(){this._handleDelete(this._cardData._id,this._element),this._element=null}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===a(o)?o:String(o)),n)}var o}var c=function(){function t(e){var r=e.containerSelector,n=e.render;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._render=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"rendererArr",value:function(t,e){var r=this;this._userData=e,t.reverse().forEach((function(t){r._render(t,r._userData)}))}},{key:"rendererCard",value:function(t){this._render(t,this._userData)}},{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"deleteItem",value:function(t){t.remove(),t=null}}])&&u(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this),this._handleCrossButtonAndOverlayClose=this._handleCrossButtonAndOverlayClose.bind(this)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleCrossButtonAndOverlayClose",value:function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__close"))&&this.close()}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._handleCrossButtonAndOverlayClose)}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},h.apply(this,arguments)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(n);if(o){var r=m(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._title=e._popup.querySelector(".popup__title"),e._image=e._popup.querySelector(".popup__image"),e}return e=a,(r=[{key:"open",value:function(t){var e=t.name,r=t.link;this._title.textContent=e,this._image.src=r,this._image.alt=e,h(m(a.prototype),"open",this).call(this)}}])&&y(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(f);function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===_(o)?o:String(o)),n)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},S.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(n);if(o){var r=k(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e,r=t.popupSelector,n=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,r))._handleFormSubmit=n,e._form=e._popup.querySelector(".popup__form"),e._inputs=e._form.querySelectorAll(".popup__input"),e._button=e._form.querySelector(".popup__button"),e}return e=a,(r=[{key:"close",value:function(){S(k(a.prototype),"close",this).call(this),this._form.reset()}},{key:"getInputValues",value:function(){var t={};return this._inputs.forEach((function(e){return t[e.name]=e.value})),t}},{key:"setInputValues",value:function(t){this._inputs.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){S(k(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",this._handleFormSubmit)}},{key:"renderLoading",value:function(t){this._button.textContent=t?"Сохранение...":"Создать"}}])&&b(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(f);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function C(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==j(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===j(o)?o:String(o)),n)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},E.apply(this,arguments)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(n);if(o){var r=L(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t){var e,r=t.popupSelector,n=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,r))._form=e._popup.querySelector(".popup__form"),e._handleFormSubmit=n,e}return e=a,(r=[{key:"open",value:function(t,e){E(L(a.prototype),"open",this).call(this),this._id=t,this._elem=e}},{key:"setEventListeners",value:function(){var t=this;E(L(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._id,t._elem)}))}}])&&C(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(f);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function D(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==T(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===T(o)?o:String(o)),n)}var o}var I=function(){function t(e,r){var n=r.inputSelector,o=r.submitButtonSelector,i=r.inactiveButtonClass,a=r.inputErrorClass,u=r.errorClass;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElement=e,this._inputSelector=n,this._submitButtonSelector=o,this._inactiveButtonClass=i,this._inputErrorClass=a,this._errorClass=u}var e,r;return e=t,(r=[{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideError(t):this._showError(t)}},{key:"_showError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));e.textContent=t.validationMessage,e.classList.add(this._errorClass),t.classList.add(this._inputErrorClass)}},{key:"_hideError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));e.textContent="",e.classList.remove(this._errorClass),t.classList.remove(this._inputErrorClass)}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){t._hideError(e)}))}}])&&D(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===R(o)?o:String(o)),n)}var o}var A=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e,this._token=r}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/v1/cohort-71/users/me"),{headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/v1/cohort-71/cards"),{headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"postCard",value:function(t){var e=t.name,r=t.link;return fetch("".concat(this._url,"/v1/cohort-71/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:r})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"removeCard",value:function(t){return fetch("".concat(this._url,"/v1/cohort-71/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"setUserInfo",value:function(t){var e=t.name,r=t.about;return fetch("".concat(this._url,"/v1/cohort-71/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:r})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"postLike",value:function(t){return fetch("".concat(this._url,"/v1/cohort-71/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"removeLike",value:function(t){return fetch("".concat(this._url,"/v1/cohort-71/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}}])&&q(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),B=Array.from(document.querySelectorAll(".popup__form")),x=document.querySelector(".profile__button-edit"),V=document.querySelector(".profile__button-add"),U={card:".card",cardTitle:".card__title",cardImage:".card__image",cardLike:".card__like",cardLikeCounter:".card__counter",cardLikeActive:"card__like_active",cardDelete:".card__delete"};function F(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function z(){alert("Что-то не так, проверьте ссылку")}var N=new c({containerSelector:".cards__list",render:function(t,e){var r=function(t,e){return new i(t,"#card",U,e,{handleCardClick:function(){return G.open(t)},postLike:function(){return W.postLike(t._id)},removeLike:function(){return W.removeLike(t._id)},handleDelete:J.open.bind(J)}).generateCard()}(t,e);!function(t,e,r){var n=t.querySelector(".card__image");n.onload=e,n.onerror=r}(r,N.addItem(r),z)}}),J=new P({popupSelector:".popup_confirmation",handleFormSubmit:function(t,e){W.removeCard(t).then((function(){N.deleteItem(e),J.close()})).catch((function(t){return console.log(t)}))}});J.setEventListeners();var M=new w({popupSelector:".popup_card",handleFormSubmit:function(t){t.preventDefault(),M.renderLoading(!0),W.postCard(M.getInputValues()).then((function(t){return N.rendererCard(t)})).catch((function(t){return console.log(t)})).finally((function(){return M.renderLoading(!1)})),M.close()}});M.setEventListeners(),V.addEventListener("click",(function(){M.open(),Q.card.resetValidation()}));var H=new w({popupSelector:".popup_profile",handleFormSubmit:function(t){t.preventDefault(),H.renderLoading(!0),W.setUserInfo(H.getInputValues()).catch((function(t){return console.log(t)})).finally((function(){return H.renderLoading(!1)})),$.setUserInfo(H.getInputValues()),H.close()}});H.setEventListeners(),x.addEventListener("click",(function(){H.open(),H.setInputValues($.getUserInfo()),Q.profile.resetValidation()}));var $=new r({name:".profile__title",about:".profile__subtitle",avatar:".profile__avatar"}),G=new v(".popup_picture");G.setEventListeners();var K,Q={};K={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__error_active"},B.forEach((function(t){var e=new I(t,K),r=t.getAttribute("name");Q[r]=e,e.enableValidation()}));var W=new A("https://nomoreparties.co","b4e9b707-98ea-45f6-a839-27ec2937e3df"),X=W.getUserInfo(),Y=W.getInitialCards();Promise.all([X,Y]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,r)||function(t,e){if(t){if("string"==typeof t)return F(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?F(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];$.setUserInfo(o),N.rendererArr(i,o)})).catch((function(t){return console.log(t)}))})();