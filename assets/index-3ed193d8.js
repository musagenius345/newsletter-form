(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const n of u.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerPolicy&&(u.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?u.credentials="include":r.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(r){if(r.ep)return;r.ep=!0;const u=o(r);fetch(r.href,u)}})();const M=document.querySelector(".popoverBtn"),W=document.querySelector("form"),m=document.querySelector(".warning"),D=document.querySelector("dialog"),p=document.querySelector("#email"),V=()=>{const e=()=>{p.validity.valid&&p.value.trim()!==""?M.disabled=!1:M.disabled=!0};p.addEventListener("input",t=>{p.validity.valid?m.textContent="":m.textContent="Valid Email Required",e()}),M.addEventListener("click",t=>{t.preventDefault(),!p.validity.valid||p.value.trim()===""?m.textContent="Valid Email Required":D.showPopover()}),W.addEventListener("submit",t=>{t.preventDefault(),!p.validity.valid||p.value.trim()===""?m.textContent="Valid Email Required":D.showPopover()}),e()};V();var A=class extends Event{constructor(e,{oldState:t="",newState:o="",...i}={}){super(e,i),this.oldState=String(t||""),this.newState=String(o||"")}},H=new WeakMap;function F(e,t,o){H.set(e,setTimeout(()=>{H.has(e)&&e.dispatchEvent(new A("toggle",{cancelable:!1,oldState:t,newState:o}))},0))}var N=globalThis.ShadowRoot||function(){},B=globalThis.HTMLDialogElement||function(){},y=new WeakMap,l=new WeakMap,h=new WeakMap;function w(e){return h.get(e)||"hidden"}var E=new WeakMap;function j(e){const t=e.popoverTargetElement;if(!t)return;const o=w(t);e.popoverTargetAction==="show"&&o==="showing"||e.popoverTargetAction==="hide"&&o==="hidden"||(o==="showing"?g(t,!0,!0):f(t,!1)&&(E.set(t,e),k(t)))}function f(e,t){return!(e.popover!=="auto"&&e.popover!=="manual"||!e.isConnected||t&&w(e)!=="showing"||!t&&w(e)!=="hidden"||e instanceof B&&e.hasAttribute("open")||document.fullscreenElement===e)}function q(e){return e?Array.from(l.get(e.ownerDocument)||[]).indexOf(e)+1:0}function K(e){const t=I(e),o=U(e);return q(t)>q(o)?t:o}function b(e){const t=l.get(e);for(const o of t||[])if(!o.isConnected)t.delete(o);else return o;return null}function v(e){return typeof e.getRootNode=="function"?e.getRootNode():e.parentNode?v(e.parentNode):e}function I(e){for(;e;){if(e instanceof HTMLElement&&e.popover==="auto"&&h.get(e)==="showing")return e;if(e=e.parentElement||v(e),e instanceof N&&(e=e.host),e instanceof Document)return}}function U(e){for(;e;){const t=e.popoverTargetElement;if(t)return t;if(e=e.parentElement||v(e),e instanceof N&&(e=e.host),e instanceof Document)return}}function z(e){const t=new Map;let o=0;const i=e.ownerDocument;for(const n of l.get(i)||[])t.set(n,o),o+=1;t.set(e,o),o+=1;let r=null;function u(n){const s=I(n);if(s===null)return null;const a=t.get(s);(r===null||t.get(r)<a)&&(r=s)}return u(e==null?void 0:e.parentElement),r}function G(e){return e.hidden||(e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||e instanceof HTMLOptGroupElement||e instanceof HTMLOptionElement||e instanceof HTMLFieldSetElement)&&e.disabled||e instanceof HTMLInputElement&&e.type==="hidden"||e instanceof HTMLAnchorElement&&e.href===""?!1:e.tabIndex!==-1}function Q(e){if(e.shadowRoot&&e.shadowRoot.delegatesFocus!==!0)return null;let t=e;t.shadowRoot&&(t=t.shadowRoot);const o=t.querySelector("[autofocus]");if(o)return o;const i=e.ownerDocument.createTreeWalker(t,NodeFilter.SHOW_ELEMENT);let r=i.currentNode;for(;r;){if(G(r))return r;r=i.nextNode()}}function _(e){var t;(t=Q(e))==null||t.focus()}var L=new WeakMap;function k(e){if(!f(e,!1))return;const t=e.ownerDocument;if(!e.dispatchEvent(new A("beforetoggle",{cancelable:!0,oldState:"closed",newState:"open"}))||!f(e,!1))return;let o=!1;if(e.popover==="auto"){const r=e.getAttribute("popover"),u=z(e)||t;if(S(u,!1,!0),r!==e.getAttribute("popover")||!f(e,!1))return}b(t)||(o=!0),L.delete(e);const i=t.activeElement;e.classList.add(":popover-open"),h.set(e,"showing"),y.has(t)||y.set(t,new Set),y.get(t).add(e),_(e),e.popover==="auto"&&(l.has(t)||l.set(t,new Set),l.get(t).add(e),C(E.get(e),!0)),o&&i&&e.popover==="auto"&&L.set(e,i),F(e,"closed","open")}function g(e,t=!1,o=!1){var u,n;if(!f(e,!0))return;const i=e.ownerDocument;if(e.popover==="auto"&&(S(e,t,o),!f(e,!0))||(C(E.get(e),!1),E.delete(e),o&&(e.dispatchEvent(new A("beforetoggle",{oldState:"open",newState:"closed"})),!f(e,!0))))return;(u=y.get(i))==null||u.delete(e),(n=l.get(i))==null||n.delete(e),e.classList.remove(":popover-open"),h.set(e,"hidden"),o&&F(e,"open","closed");const r=L.get(e);r&&(L.delete(e),t&&r.focus())}function O(e,t=!1,o=!1){let i=b(e);for(;i;)g(i,t,o),i=b(e)}function S(e,t,o){var n;const i=e.ownerDocument||e;if(e instanceof Document)return O(i,t,o);let r=null,u=!1;for(const s of l.get(i)||[])if(s===e)u=!0;else if(u){r=s;break}if(!u)return O(i,t,o);for(;r&&w(r)==="showing"&&((n=l.get(i))!=null&&n.size);)g(r,t,o)}var T=new WeakMap;function R(e){if(!e.isTrusted)return;const t=e.composedPath()[0];if(!t)return;const o=t.ownerDocument;if(!b(o))return;const r=K(t);if(r&&e.type==="pointerdown")T.set(o,r);else if(e.type==="pointerup"){const u=T.get(o)===r;T.delete(o),u&&S(r||o,!1,!0)}}var P=new WeakMap;function C(e,t=!1){if(!e)return;P.has(e)||P.set(e,e.getAttribute("aria-expanded"));const o=e.popoverTargetElement;if(o&&o.popover==="auto")e.setAttribute("aria-expanded",String(t));else{const i=P.get(e);i?e.setAttribute("aria-expanded",i):e.removeAttribute("aria-expanded")}}var x=globalThis.ShadowRoot||function(){};function $(){return typeof HTMLElement<"u"&&typeof HTMLElement.prototype=="object"&&"popover"in HTMLElement.prototype}function c(e,t,o){const i=e[t];Object.defineProperty(e,t,{value(r){return i.call(this,o(r))}})}var J=/(^|[^\\]):popover-open\b/g;function X(){window.ToggleEvent=window.ToggleEvent||A;function e(n){return n!=null&&n.includes(":popover-open")&&(n=n.replace(J,"$1.\\:popover-open")),n}c(Document.prototype,"querySelector",e),c(Document.prototype,"querySelectorAll",e),c(Element.prototype,"querySelector",e),c(Element.prototype,"querySelectorAll",e),c(Element.prototype,"matches",e),c(Element.prototype,"closest",e),c(DocumentFragment.prototype,"querySelectorAll",e),c(DocumentFragment.prototype,"querySelectorAll",e),Object.defineProperties(HTMLElement.prototype,{popover:{enumerable:!0,configurable:!0,get(){if(!this.hasAttribute("popover"))return null;const n=(this.getAttribute("popover")||"").toLowerCase();return n===""||n=="auto"?"auto":"manual"},set(n){this.setAttribute("popover",n)}},showPopover:{enumerable:!0,configurable:!0,value(){k(this)}},hidePopover:{enumerable:!0,configurable:!0,value(){g(this,!0,!0)}},togglePopover:{enumerable:!0,configurable:!0,value(n){h.get(this)==="showing"&&n===void 0||n===!1?g(this,!0,!0):(n===void 0||n===!0)&&k(this)}}});const t=new WeakMap;function o(n){Object.defineProperties(n.prototype,{popoverTargetElement:{enumerable:!0,configurable:!0,set(s){if(s===null)this.removeAttribute("popovertarget"),t.delete(this);else if(s instanceof Element)this.setAttribute("popovertarget",""),t.set(this,s);else throw new TypeError("popoverTargetElement must be an element or null")},get(){if(this.localName!=="button"&&this.localName!=="input"||this.localName==="input"&&this.type!=="reset"&&this.type!=="image"&&this.type!=="button"||this.disabled||this.form&&this.type==="submit")return null;const s=t.get(this);if(s&&s.isConnected)return s;if(s&&!s.isConnected)return t.delete(this),null;const a=v(this),d=this.getAttribute("popovertarget");return(a instanceof Document||a instanceof x)&&d&&a.getElementById(d)||null}},popoverTargetAction:{enumerable:!0,configurable:!0,get(){const s=(this.getAttribute("popovertargetaction")||"").toLowerCase();return s==="show"||s==="hide"?s:"toggle"},set(s){this.setAttribute("popovertargetaction",s)}}})}o(HTMLButtonElement),o(HTMLInputElement);const i=n=>{if(!n.isTrusted)return;const s=n.composedPath()[0];if(!(s instanceof Element)||s!=null&&s.shadowRoot)return;const a=v(s);if(!(a instanceof x||a instanceof Document))return;const d=s.closest("[popovertargetaction],[popovertarget]");if(d){j(d);return}},r=n=>{const s=n.key,a=n.target;a&&(s==="Escape"||s==="Esc")&&S(a.ownerDocument,!0,!0)};(n=>{n.addEventListener("click",i),n.addEventListener("keydown",r),n.addEventListener("pointerdown",R),n.addEventListener("pointerup",R)})(document)}$()||X();
