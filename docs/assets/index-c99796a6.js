(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const _ of o)if(_.type==="childList")for(const s of _.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const _={};return o.integrity&&(_.integrity=o.integrity),o.referrerPolicy&&(_.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?_.credentials="include":o.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function r(o){if(o.ep)return;o.ep=!0;const _=n(o);fetch(o.href,_)}})();var X,a,Le,A,he,Me,ie,I={},Ue=[],_t=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,J=Array.isArray;function $(e,t){for(var n in t)e[n]=t[n];return e}function Be(e){var t=e.parentNode;t&&t.removeChild(e)}function se(e,t,n){var r,o,_,s={};for(_ in t)_=="key"?r=t[_]:_=="ref"?o=t[_]:s[_]=t[_];if(arguments.length>2&&(s.children=arguments.length>3?X.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(_ in e.defaultProps)s[_]===void 0&&(s[_]=e.defaultProps[_]);return F(e,s,r,o,null)}function F(e,t,n,r,o){var _={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++Le};return o==null&&a.vnode!=null&&a.vnode(_),_}function H(e){return e.children}function E(e,t){this.props=e,this.context=t}function L(e,t){if(t==null)return e.__?L(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?L(e):null}function Ke(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ke(e)}}function ve(e){(!e.__d&&(e.__d=!0)&&A.push(e)&&!j.__r++||he!==a.debounceRendering)&&((he=a.debounceRendering)||Me)(j)}function j(){var e,t,n,r,o,_,s,l,c;for(A.sort(ie);e=A.shift();)e.__d&&(t=A.length,r=void 0,o=void 0,_=void 0,l=(s=(n=e).__v).__e,(c=n.__P)&&(r=[],o=[],(_=$({},s)).__v=s.__v+1,ue(c,s,_,n.__n,c.ownerSVGElement!==void 0,s.__h!=null?[l]:null,r,l??L(s),s.__h,o),ze(r,s,o),s.__e!=l&&Ke(s)),A.length>t&&A.sort(ie));j.__r=0}function Ve(e,t,n,r,o,_,s,l,c,v,h){var i,m,d,u,p,R,y,b,N,k=0,S=r&&r.__k||Ue,O=S.length,C=O,T=t.length;for(n.__k=[],i=0;i<T;i++)(u=n.__k[i]=(u=t[i])==null||typeof u=="boolean"||typeof u=="function"?null:typeof u=="string"||typeof u=="number"||typeof u=="bigint"?F(null,u,null,null,u):J(u)?F(H,{children:u},null,null,null):u.__b>0?F(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u)!=null?(u.__=n,u.__b=n.__b+1,(b=ot(u,S,y=i+k,C))===-1?d=I:(d=S[b]||I,S[b]=void 0,C--),ue(e,u,d,o,_,s,l,c,v,h),p=u.__e,(m=u.ref)&&d.ref!=m&&(d.ref&&fe(d.ref,null,u),h.push(m,u.__c||p,u)),p!=null&&(R==null&&(R=p),(N=d===I||d.__v===null)?b==-1&&k--:b!==y&&(b===y+1?k++:b>y?C>T-y?k+=b-y:k--:k=b<y&&b==y-1?b-y:0),y=i+k,typeof u.type!="function"||b===y&&d.__k!==u.__k?typeof u.type=="function"||b===y&&!N?u.__d!==void 0?(c=u.__d,u.__d=void 0):c=p.nextSibling:c=qe(e,p,c):c=Fe(u,c,e),typeof n.type=="function"&&(n.__d=c))):(d=S[i])&&d.key==null&&d.__e&&(d.__e==c&&(c=L(d)),le(d,d,!1),S[i]=null);for(n.__e=R,i=O;i--;)S[i]!=null&&(typeof n.type=="function"&&S[i].__e!=null&&S[i].__e==n.__d&&(n.__d=S[i].__e.nextSibling),le(S[i],S[i]))}function Fe(e,t,n){for(var r,o=e.__k,_=0;o&&_<o.length;_++)(r=o[_])&&(r.__=e,t=typeof r.type=="function"?Fe(r,t,n):qe(n,r.__e,t));return t}function G(e,t){return t=t||[],e==null||typeof e=="boolean"||(J(e)?e.some(function(n){G(n,t)}):t.push(e)),t}function qe(e,t,n){return n==null||n.parentNode!==e?e.insertBefore(t,null):t==n&&t.parentNode!=null||e.insertBefore(t,n),t.nextSibling}function ot(e,t,n,r){var o=e.key,_=e.type,s=n-1,l=n+1,c=t[n];if(c===null||c&&o==c.key&&_===c.type)return n;if(r>(c!=null?1:0))for(;s>=0||l<t.length;){if(s>=0){if((c=t[s])&&o==c.key&&_===c.type)return s;s--}if(l<t.length){if((c=t[l])&&o==c.key&&_===c.type)return l;l++}}return-1}function it(e,t,n,r,o){var _;for(_ in n)_==="children"||_==="key"||_ in t||Y(e,_,null,n[_],r);for(_ in t)o&&typeof t[_]!="function"||_==="children"||_==="key"||_==="value"||_==="checked"||n[_]===t[_]||Y(e,_,t[_],n[_],r)}function me(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||_t.test(t)?n:n+"px"}function Y(e,t,n,r,o){var _;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||me(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||me(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")_=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?r||e.addEventListener(t,_?ge:ye,_):e.removeEventListener(t,_?ge:ye,_);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function ye(e){return this.l[e.type+!1](a.event?a.event(e):e)}function ge(e){return this.l[e.type+!0](a.event?a.event(e):e)}function ue(e,t,n,r,o,_,s,l,c,v){var h,i,m,d,u,p,R,y,b,N,k,S,O,C,T,w=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,l=t.__e=n.__e,t.__h=null,_=[l]),(h=a.__b)&&h(t);e:if(typeof w=="function")try{if(y=t.props,b=(h=w.contextType)&&r[h.__c],N=h?b?b.props.value:h.__:r,n.__c?R=(i=t.__c=n.__c).__=i.__E:("prototype"in w&&w.prototype.render?t.__c=i=new w(y,N):(t.__c=i=new E(y,N),i.constructor=w,i.render=lt),b&&b.sub(i),i.props=y,i.state||(i.state={}),i.context=N,i.__n=r,m=i.__d=!0,i.__h=[],i._sb=[]),i.__s==null&&(i.__s=i.state),w.getDerivedStateFromProps!=null&&(i.__s==i.state&&(i.__s=$({},i.__s)),$(i.__s,w.getDerivedStateFromProps(y,i.__s))),d=i.props,u=i.state,i.__v=t,m)w.getDerivedStateFromProps==null&&i.componentWillMount!=null&&i.componentWillMount(),i.componentDidMount!=null&&i.__h.push(i.componentDidMount);else{if(w.getDerivedStateFromProps==null&&y!==d&&i.componentWillReceiveProps!=null&&i.componentWillReceiveProps(y,N),!i.__e&&(i.shouldComponentUpdate!=null&&i.shouldComponentUpdate(y,i.__s,N)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(i.props=y,i.state=i.__s,i.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(B){B&&(B.__=t)}),k=0;k<i._sb.length;k++)i.__h.push(i._sb[k]);i._sb=[],i.__h.length&&s.push(i);break e}i.componentWillUpdate!=null&&i.componentWillUpdate(y,i.__s,N),i.componentDidUpdate!=null&&i.__h.push(function(){i.componentDidUpdate(d,u,p)})}if(i.context=N,i.props=y,i.__P=e,i.__e=!1,S=a.__r,O=0,"prototype"in w&&w.prototype.render){for(i.state=i.__s,i.__d=!1,S&&S(t),h=i.render(i.props,i.state,i.context),C=0;C<i._sb.length;C++)i.__h.push(i._sb[C]);i._sb=[]}else do i.__d=!1,S&&S(t),h=i.render(i.props,i.state,i.context),i.state=i.__s;while(i.__d&&++O<25);i.state=i.__s,i.getChildContext!=null&&(r=$($({},r),i.getChildContext())),m||i.getSnapshotBeforeUpdate==null||(p=i.getSnapshotBeforeUpdate(d,u)),Ve(e,J(T=h!=null&&h.type===H&&h.key==null?h.props.children:h)?T:[T],t,n,r,o,_,s,l,c,v),i.base=t.__e,t.__h=null,i.__h.length&&s.push(i),R&&(i.__E=i.__=null)}catch(B){t.__v=null,(c||_!=null)&&(t.__e=l,t.__h=!!c,_[_.indexOf(l)]=null),a.__e(B,t,n)}else _==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=st(n.__e,t,n,r,o,_,s,c,v);(h=a.diffed)&&h(t)}function ze(e,t,n){for(var r=0;r<n.length;r++)fe(n[r],n[++r],n[++r]);a.__c&&a.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(_){_.call(o)})}catch(_){a.__e(_,o.__v)}})}function st(e,t,n,r,o,_,s,l,c){var v,h,i,m=n.props,d=t.props,u=t.type,p=0;if(u==="svg"&&(o=!0),_!=null){for(;p<_.length;p++)if((v=_[p])&&"setAttribute"in v==!!u&&(u?v.localName===u:v.nodeType===3)){e=v,_[p]=null;break}}if(e==null){if(u===null)return document.createTextNode(d);e=o?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,d.is&&d),_=null,l=!1}if(u===null)m===d||l&&e.data===d||(e.data=d);else{if(_=_&&X.call(e.childNodes),h=(m=n.props||I).dangerouslySetInnerHTML,i=d.dangerouslySetInnerHTML,!l){if(_!=null)for(m={},p=0;p<e.attributes.length;p++)m[e.attributes[p].name]=e.attributes[p].value;(i||h)&&(i&&(h&&i.__html==h.__html||i.__html===e.innerHTML)||(e.innerHTML=i&&i.__html||""))}if(it(e,d,m,o,l),i)t.__k=[];else if(Ve(e,J(p=t.props.children)?p:[p],t,n,r,o&&u!=="foreignObject",_,s,_?_[0]:n.__k&&L(n,0),l,c),_!=null)for(p=_.length;p--;)_[p]!=null&&Be(_[p]);l||("value"in d&&(p=d.value)!==void 0&&(p!==e.value||u==="progress"&&!p||u==="option"&&p!==m.value)&&Y(e,"value",p,m.value,!1),"checked"in d&&(p=d.checked)!==void 0&&p!==e.checked&&Y(e,"checked",p,m.checked,!1))}return e}function fe(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){a.__e(r,n)}}function le(e,t,n){var r,o;if(a.unmount&&a.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||fe(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(_){a.__e(_,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&le(r[o],t,n||typeof e.type!="function");n||e.__e==null||Be(e.__e),e.__=e.__e=e.__d=void 0}function lt(e,t,n){return this.constructor(e,n)}function ct(e,t,n){var r,o,_,s;a.__&&a.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,_=[],s=[],ue(t,e=(!r&&n||t).__k=se(H,null,[e]),o||I,I,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?X.call(t.childNodes):null,_,!r&&n?n:o?o.__e:t.firstChild,r,s),ze(_,e,s)}X=Ue.slice,a={__e:function(e,t,n,r){for(var o,_,s;t=t.__;)if((o=t.__c)&&!o.__)try{if((_=o.constructor)&&_.getDerivedStateFromError!=null&&(o.setState(_.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),s=o.__d),s)return o.__E=o}catch(l){e=l}throw e}},Le=0,E.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof e=="function"&&(e=e($({},n),this.props)),e&&$(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ve(this))},E.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ve(this))},E.prototype.render=H,A=[],Me=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ie=function(e,t){return e.__v.__b-t.__v.__b},j.__r=0;var M,g,te,be,Q=0,je=[],q=[],Se=a.__b,Pe=a.__r,ke=a.diffed,we=a.__c,Ne=a.unmount;function de(e,t){a.__h&&a.__h(g,e,Q||t),Q=0;var n=g.__H||(g.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:q}),n.__[e]}function W(e){return Q=1,at(Ye,e)}function at(e,t,n){var r=de(M++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Ye(void 0,t),function(l){var c=r.__N?r.__N[0]:r.__[0],v=r.t(c,l);c!==v&&(r.__N=[v,r.__[1]],r.__c.setState({}))}],r.__c=g,!g.u)){var o=function(l,c,v){if(!r.__c.__H)return!0;var h=r.__c.__H.__.filter(function(m){return m.__c});if(h.every(function(m){return!m.__N}))return!_||_.call(this,l,c,v);var i=!1;return h.forEach(function(m){if(m.__N){var d=m.__[0];m.__=m.__N,m.__N=void 0,d!==m.__[0]&&(i=!0)}}),!(!i&&r.__c.props===l)&&(!_||_.call(this,l,c,v))};g.u=!0;var _=g.shouldComponentUpdate,s=g.componentWillUpdate;g.componentWillUpdate=function(l,c,v){if(this.__e){var h=_;_=void 0,o(l,c,v),_=h}s&&s.call(this,l,c,v)},g.shouldComponentUpdate=o}return r.__N||r.__}function U(e,t){var n=de(M++,3);!a.__s&&Ge(n.__H,t)&&(n.__=e,n.i=t,g.__H.__h.push(n))}function Z(e){return Q=5,ut(function(){return{current:e}},[])}function ut(e,t){var n=de(M++,7);return Ge(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function ft(){for(var e;e=je.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(z),e.__H.__h.forEach(ce),e.__H.__h=[]}catch(t){e.__H.__h=[],a.__e(t,e.__v)}}a.__b=function(e){g=null,Se&&Se(e)},a.__r=function(e){Pe&&Pe(e),M=0;var t=(g=e.__c).__H;t&&(te===g?(t.__h=[],g.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=q,n.__N=n.i=void 0})):(t.__h.forEach(z),t.__h.forEach(ce),t.__h=[],M=0)),te=g},a.diffed=function(e){ke&&ke(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(je.push(t)!==1&&be===a.requestAnimationFrame||((be=a.requestAnimationFrame)||dt)(ft)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==q&&(n.__=n.__V),n.i=void 0,n.__V=q})),te=g=null},a.__c=function(e,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(r){return!r.__||ce(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],a.__e(r,n.__v)}}),we&&we(e,t)},a.unmount=function(e){Ne&&Ne(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{z(r)}catch(o){t=o}}),n.__H=void 0,t&&a.__e(t,n.__v))};var Ee=typeof requestAnimationFrame=="function";function dt(e){var t,n=function(){clearTimeout(r),Ee&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Ee&&(t=requestAnimationFrame(n))}function z(e){var t=g,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),g=t}function ce(e){var t=g;e.__c=e.__(),g=t}function Ge(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Ye(e,t){return typeof t=="function"?t(e):t}let P=[],pt=(e,t)=>{let n=[],r={get(){return r.lc||r.listen(()=>{})(),r.value},l:t||0,lc:0,listen(o,_){return r.lc=n.push(o,_||r.l)/2,()=>{let s=n.indexOf(o);~s&&(n.splice(s,2),r.lc--,r.lc||r.off())}},notify(o){let _=!P.length;for(let s=0;s<n.length;s+=2)P.push(n[s],r.value,o,n[s+1]);if(_){for(let s=0;s<P.length;s+=4){let l=!1;for(let c=s+7;c<P.length;c+=4)if(P[c]<P[s+3]){l=!0;break}l?P.push(P[s],P[s+1],P[s+2],P[s+3]):P[s](P[s+1],P[s+2])}P.length=0}},off(){},set(o){r.value!==o&&(r.value=o,r.notify())},subscribe(o,_){let s=r.listen(o,_);return o(r.value),s},value:e};return r};function ht(e,t,n){let r=new Set([...t,void 0]);return e.listen((o,_)=>{r.has(_)&&n(o,_)})}let vt=(e={})=>{let t=pt(e);return t.setKey=function(n,r){typeof r>"u"?n in t.value&&(t.value={...t.value},delete t.value[n],t.notify(n)):t.value[n]!==r&&(t.value={...t.value,[n]:r},t.notify(n))},t};function pe(e,t={}){let[,n]=W({}),[r]=W(e.get());return U(()=>{r!==e.get()&&n({})},[]),U(()=>{let o,_,s,l=()=>{o||(o=1,_=setTimeout(()=>{o=void 0,n({})}))};return t.keys?s=ht(e,t.keys,l):s=e.listen(l),()=>{s(),clearTimeout(_)}},[e,""+t.keys]),e.get()}var mt=0;function f(e,t,n,r,o,_){var s,l,c={};for(l in t)l=="ref"?s=t[l]:c[l]=t[l];var v={type:e,props:c,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--mt,__source:o,__self:_};if(typeof e=="function"&&(s=e.defaultProps))for(l in s)c[l]===void 0&&(c[l]=s[l]);return a.vnode&&a.vnode(v),v}const ae=({children:e,className:t="",...n})=>f("button",{...n,className:["button",t].join(" "),children:e}),yt="_Setup_d6ilb_1",gt={Setup:yt},bt="Loremipsumdolorsitametconsectetur adipisicing elit. Veniam dignissimos facere ab, rerum dicta vitae dolorem quisquam accusantium perferendis ad, obcaecati, praesentium sint. Voluptates, officiis illum sapiente, numquam optio ducimus ipsa eaque ratione vel, repudiandae adipisci iste consequatur molestiae magnam? Consequatur quidem qui est ipsa. Quisquam velit accusantium laborum voluptatem.",St=({onSubmit:e})=>{const[t,n]=W(bt),r=({target:s})=>{n(s.value)},o=({target:s})=>{const l=new FileReader;l.onload=({target:c})=>n(c.result),l.readAsText(s.files[0],"windows-1251")},_=s=>{s.preventDefault(),e==null||e(t)};return f("section",{className:gt.Setup,children:f("form",{onSubmit:_,children:[f("h2",{children:"Paste text"}),f("textarea",{onChange:r,value:t}),f("h2",{children:"or upload text file"}),f("input",{onChange:o,type:"file"}),f(ae,{disabled:!t,children:"Start reading"})]})})};const Pt=({value:e})=>f("div",{className:"progress",style:{"--progress":`${e}%`}}),kt="/assets/menu-dots-vertical-c4815cef.png",wt="_PlayerHead_61x3c_1",Nt="_Actions_61x3c_7",Et="_DetailsButton_61x3c_29",Ct="_CloseButton_61x3c_30",K={PlayerHead:wt,Actions:Nt,DetailsButton:Et,CloseButton:Ct},$t=({onDetailsClick:e,onCancel:t,progress:n})=>f("div",{className:K.PlayerHead,children:[f(Pt,{value:n}),f("div",{className:K.Actions,children:[f("button",{className:K.DetailsButton,onClick:e,"aria-label":"View settings",children:f("img",{src:kt,alt:"","aria-hidden":"true"})}),f("button",{className:K.CloseButton,onClick:t,"aria-label":"Cancel reading session"})]})]});function xt(e,t){for(var n in t)e[n]=t[n];return e}function Ce(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function $e(e){this.props=e}($e.prototype=new E).isPureReactComponent=!0,$e.prototype.shouldComponentUpdate=function(e,t){return Ce(this.props,e)||Ce(this.state,t)};var xe=a.__b;a.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),xe&&xe(e)};var At=a.__e;a.__e=function(e,t,n,r){if(e.then){for(var o,_=t;_=_.__;)if((o=_.__c)&&o.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t)}At(e,t,n,r)};var Ae=a.unmount;function Qe(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=xt({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return Qe(r,t,n)})),e}function Ze(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return Ze(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function ne(){this.__u=0,this.t=null,this.__b=null}function Xe(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function V(){this.u=null,this.o=null}a.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),Ae&&Ae(e)},(ne.prototype=new E).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=Xe(r.__v),_=!1,s=function(){_||(_=!0,n.__R=null,o?o(l):l())};n.__R=s;var l=function(){if(!--r.__u){if(r.state.__a){var v=r.state.__a;r.__v.__k[0]=Ze(v,v.__c.__P,v.__c.__O)}var h;for(r.setState({__a:r.__b=null});h=r.t.pop();)h.forceUpdate()}},c=t.__h===!0;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(s,s)},ne.prototype.componentWillUnmount=function(){this.t=[]},ne.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Qe(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__a&&se(H,null,e.fallback);return o&&(o.__h=null),[se(H,null,t.__a?null:e.children),o]};var Re=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(V.prototype=new E).__a=function(e){var t=this,n=Xe(t.__v),r=t.o.get(e);return r[0]++,function(o){var _=function(){t.props.revealOrder?(r.push(o),Re(t,e,r)):o()};n?n(_):_()}},V.prototype.render=function(e){this.u=null,this.o=new Map;var t=G(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},V.prototype.componentDidUpdate=V.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){Re(e,n,t)})};var Rt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Tt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,It=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Ht=/[A-Z0-9]/g,Wt=typeof document<"u",Ot=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};E.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(E.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Te=a.event;function Dt(){}function Lt(){return this.cancelBubble}function Mt(){return this.defaultPrevented}a.event=function(e){return Te&&(e=Te(e)),e.persist=Dt,e.isPropagationStopped=Lt,e.isDefaultPrevented=Mt,e.nativeEvent=e};var Ut={enumerable:!1,configurable:!0,get:function(){return this.class}},Ie=a.vnode;a.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,o={};for(var _ in n){var s=n[_];if(!(_==="value"&&"defaultValue"in n&&s==null||Wt&&_==="children"&&r==="noscript"||_==="class"||_==="className")){var l=_.toLowerCase();_==="defaultValue"&&"value"in n&&n.value==null?_="value":_==="download"&&s===!0?s="":l==="ondoubleclick"?_="ondblclick":l!=="onchange"||r!=="input"&&r!=="textarea"||Ot(n.type)?l==="onfocus"?_="onfocusin":l==="onblur"?_="onfocusout":It.test(_)?_=l:r.indexOf("-")===-1&&Tt.test(_)?_=_.replace(Ht,"-$&").toLowerCase():s===null&&(s=void 0):l=_="oninput",l==="oninput"&&o[_=l]&&(_="oninputCapture"),o[_]=s}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=G(n.children).forEach(function(c){c.props.selected=o.value.indexOf(c.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=G(n.children).forEach(function(c){c.props.selected=o.multiple?o.defaultValue.indexOf(c.props.value)!=-1:o.defaultValue==c.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",Ut)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),t.props=o}(e),e.$$typeof=Rt,Ie&&Ie(e)};var He=a.__r;a.__r=function(e){He&&He(e),e.__c};var We=a.diffed;a.diffed=function(e){We&&We(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value)};const Bt="_Reader_1h3zv_1",Kt="_Reader__content_1h3zv_8",Vt="_Reader__word_1h3zv_38",re={Reader:Bt,Reader__content:Kt,Reader__word:Vt},Ft=[{opacity:.8,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],qt=300,zt=e=>new Animation(new KeyframeEffect(e,Ft,{duration:qt})),jt=({word:e,onTogglePlayPause:t})=>{const n=Z(null),r=Z(null);return U(()=>{if(n.current&&!r.current&&(r.current=zt(n.current)),n.current){const o=n.current.parentElement.parentElement;n.current.clientWidth>o.clientWidth?n.current.parentElement.classList.add("overflowing"):n.current.parentElement.classList.remove("overflowing")}r.current&&r.current.play()},[e]),f("section",{className:re.Reader,onClick:t,children:f("div",{className:re.Reader__content,children:[f("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 300 24",children:f("text",{textLength:"290",lengthAdjust:"spacing",x:"5",y:"14",children:e})}),f("h1",{ref:n,className:re.Reader__word,children:e})]})})},Gt="/assets/turtle-13206d53.png",Yt="/assets/cat-3fc2a29f.png",Qt="/assets/alien-403c1a7e.png",Je={content:"",currentWord:"",speedInWpm:0,currentEntryIdx:0,progressInPercent:0,playingState:"idle",entries:[],promisifiedEntries:[]},ee=vt(Je),Zt="_SpeedSelect_u7e4g_1",Xt="_SpeedSelect__content_u7e4g_14",Jt="_SpeedSelect__footer_u7e4g_23",en="_CancelButton_u7e4g_28",tn="_SpeedSelect__RadioGroup_u7e4g_32",nn="_LowSpeed_u7e4g_60",x={SpeedSelect:Zt,SpeedSelect__content:Xt,SpeedSelect__footer:Jt,CancelButton:en,SpeedSelect__RadioGroup:tn,LowSpeed:nn},rn=[{label:"Low speed (100 words per minute)",value:100,icon:Gt,iconAlt:"turtle",id:"low-speed"},{label:"Medium speed (300 words per minute)",value:300,icon:Yt,iconAlt:"cat"},{label:"High speed (450 words per minute)",value:450,icon:Qt,iconAlt:"alien"}],_n=({onSpeedChange:e,onCancel:t})=>{const{speedInWpm:n}=pe(ee),[r,o]=W(n),_=({target:l})=>o(+l.value),s=()=>{e(r),t()};return f("section",{className:x.SpeedSelect,children:[f("div",{className:x.SpeedSelect__content,children:[f("div",{className:x.SpeedSelect__CurrentValue,children:f("span",{children:[f("strong",{children:r})," Words Per Minute"]})}),f("h3",{children:"Choose speed option"}),f("div",{className:x.SpeedSelect__RadioGroup,children:rn.map(l=>f("label",{children:[f("input",{onChange:_,className:"visually-hidden",type:"radio",name:"speed",checked:l.value===r,"aria-label":l.label,value:l.value}),f("div",{className:"custom-icon",children:f("img",{src:l.icon,alt:l.iconAlt,className:l.id==="low-speed"&&x.LowSpeed})})]},l.value))}),f("h3",{children:"or set custom speed"}),f("input",{type:"range",min:100,max:700,step:50,value:r,onChange:_})]}),f("div",{className:x.SpeedSelect__footer,children:[f(ae,{onClick:s,children:"Apply"}),f(ae,{onClick:t,className:x.CancelButton,children:"Cancel"})]})]})},on=[{opacity:0,transform:"translateY(50%)"},{opacity:1,transform:"translateY(0%)"}],et=200,sn=e=>new Animation(new KeyframeEffect(e,on,{duration:et,easing:"ease-in"})),tt=({children:e,visibility:t})=>{const n=Z(null),[r,o]=W(!1),_=Z(null);return U(()=>{n.current&&!_.current&&(_.current=sn(n.current))},[]),U(()=>{var s,l,c;t?(o(!0),(s=_.current)==null||s.cancel(),(l=_.current)==null||l.play()):((c=_.current)==null||c.reverse(),setTimeout(()=>{o(!1),_.current.updatePlaybackRate(1)},et))},[t]),f("div",{ref:n,children:r?e:null})},ln="_Player_grg2m_1",cn="_Player__annotation_grg2m_11",Oe={Player:ln,Player__annotation:cn},an=({player:e})=>{const[t,n]=W(!1),{currentWord:r,playingState:o,progressInPercent:_}=pe(ee),s=()=>{n(!1),o==="playing"?e.pause():e.play()},l={show:()=>{e.pause(),n(!0)},hide:()=>{n(!1),e.play()}},c=i=>e.changeSpeed(i),v=({target:i})=>e.moveTo(+i.value),h=()=>e.cancel();return f("section",{className:Oe.Player,children:[f($t,{progress:_,onDetailsClick:l.show,onCancel:h}),f(jt,{word:r,onTogglePlayPause:s}),f("input",{type:"range",value:_,min:1,max:100,step:1,onChange:v}),o==="paused"&&f("span",{className:Oe.Player__annotation,children:"Tap to play"}),f("div",{className:"settings",children:f(tt,{visibility:t,children:f(_n,{onSpeedChange:c,onCancel:l.hide})})})]})},un=1e3,_e=un*60,D=230,fn=2722;class dn{static parseContent(t){return t.split(" ")}}const nt=class rt{constructor(t,n){this._resolveDelay=_e/D,this._store=null;const{store:r,wpm:o}=n,_=this.getNormalizedWps(o);this._store=r,this._resolveDelay=_e/_,this._store.setKey("content",t),this._store.setKey("entries",dn.parseContent(t)),this._store.setKey("speedInWpm",_)}setWpm(t){const n=this.getNormalizedWps(t);this._store.setKey("speedInWpm",n),this._resolveDelay=_e/n}getNormalizedWps(t){return t<0||t>fn?D:t}getPromisifiedEntries(){return this._store.get().entries.map(t=>()=>new Promise(n=>setTimeout(()=>n(t),this._resolveDelay)))}static getInstance(){return this._instance||(this._instance=new rt("",{wpm:D})),this._instance}};nt._instance=null;let De=nt;class pn{constructor(t,n){this._isAborted=!1,this.store=n==null?void 0:n.store,this._reader=new De(t,n)}async play(){var o,_,s;this._isAborted=!1;const t=this._reader.getPromisifiedEntries();this.store.setKey("playingState","playing"),this.store.setKey("promisifiedEntries",t);const{currentEntryIdx:n}=this.store.get(),r=t.slice(n);for(const l of r){if((o=this.store)==null||o.setKey("progressInPercent",this.getPercentage(this.store.get().currentEntryIdx)),this._isAborted){this._isAborted=!1;return}const c=await l();(_=this.store)==null||_.setKey("currentWord",c),this.store.setKey("currentEntryIdx",this.store.get().currentEntryIdx+1)}(s=this.store)==null||s.setKey("playingState","ended")}pause(){var t;this._isAborted=!0,(t=this.store)==null||t.setKey("playingState","paused")}cancel(){this._isAborted=!0,this.store.set(Je)}changeSpeed(t){var r;const{playingState:n}=this.store.get();n==="playing"&&this.pause(),this._reader.setWpm(t),(r=this.store)==null||r.setKey("promisifiedEntries",this._reader.getPromisifiedEntries())}changeContent(t){var r;const{playingState:n}=this.store.get();n==="playing"&&this.pause(),this._reader=new De(t,{store:this.store,wpm:this.store.get().speedInWpm||D}),(r=this.store)==null||r.setKey("promisifiedEntries",this._reader.getPromisifiedEntries())}moveTo(t){var o,_;(o=this.store)==null||o.setKey("promisifiedEntries",this._reader.getPromisifiedEntries());const{promisifiedEntries:n,currentEntryIdx:r}=this.store.get();this._isAborted=!0,(_=this.store)==null||_.setKey("currentEntryIdx",Math.floor(n.length/100*t)),n[r]().then(()=>{this.play()})}getPercentage(t){return Math.floor((t+1)/this.store.get().entries.length*100)}}const oe=new pn("",{store:ee,wpm:D});function hn(){const{playingState:e}=pe(ee);return f("main",{class:"view",children:[f(St,{onSubmit:async n=>{oe.changeContent(n),oe.play()}}),f("div",{className:"player-view",children:f(tt,{visibility:!["idle"].includes(e),children:f(an,{player:oe})})})]})}ct(f(hn,{}),document.getElementById("app"));