!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).firebase=e()}(this,(function(){"use strict";
/**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function t(e,n){if(!(n instanceof Object))return n;switch(n.constructor){case Date:return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return n}for(const r in n)n.hasOwnProperty(r)&&(e[r]=t(e[r],n[r]));return e}
/**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const e="FirebaseError";class n extends Error{constructor(t,i){super(i),this.code=t,this.name=e,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,r.prototype.create)}}class r{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const r=e[0]||{},o=`${this.service}/${t}`,a=this.errors[t],s=a?function(t,e){return t.replace(i,(t,n)=>{const r=e[n];return null!=r?r.toString():`<${n}?>`})}(a,r):"Error",c=`${this.serviceName}: ${s} (${o}).`,u=new n(o,c);for(const t of Object.keys(r))"_"!==t.slice(-1)&&(t in u&&console.warn(`Overwriting FirebaseError base field "${t}" can cause unexpected behavior.`),u[t]=r[t]);return u}}const i=/\{\$([^}]+)}/g;
/**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function o(t,e){return Object.prototype.hasOwnProperty.call(t,e)}
/**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var a;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(a||(a={}));const s=a.INFO,c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString();switch(e){case a.DEBUG:case a.VERBOSE:console.log(`[${r}]  ${t.name}:`,...n);break;case a.INFO:console.info(`[${r}]  ${t.name}:`,...n);break;case a.WARN:console.warn(`[${r}]  ${t.name}:`,...n);break;case a.ERROR:console.error(`[${r}]  ${t.name}:`,...n);break;default:throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)}};class u{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in a))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}debug(...t){this._logHandler(this,a.DEBUG,...t)}log(...t){this._logHandler(this,a.VERBOSE,...t)}info(...t){this._logHandler(this,a.INFO,...t)}warn(...t){this._logHandler(this,a.WARN,...t)}error(...t){this._logHandler(this,a.ERROR,...t)}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const l=new r("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."}),p="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class f{constructor(e,n,r){this.firebase_=r,this.isDeleted_=!1,this.services_={},this.INTERNAL={},this.name_=n.name,this.automaticDataCollectionEnabled_=n.automaticDataCollectionEnabled||!1,this.options_=t(void 0,e)}get automaticDataCollectionEnabled(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_}set automaticDataCollectionEnabled(t){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=t}get name(){return this.checkDestroyed_(),this.name_}get options(){return this.checkDestroyed_(),this.options_}delete(){return new Promise(t=>{this.checkDestroyed_(),t()}).then(()=>{this.firebase_.INTERNAL.removeApp(this.name_);const t=[];for(const e of Object.keys(this.services_))for(const n of Object.keys(this.services_[e]))t.push(this.services_[e][n]);return Promise.all(t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()))}).then(()=>{this.isDeleted_=!0,this.services_={}})}_getService(t,e=p){if(this.checkDestroyed_(),this.services_[t]||(this.services_[t]={}),!this.services_[t][e]){const n=e!==p?e:void 0,r=this.firebase_.INTERNAL.factories[t](this,this.extendApp.bind(this),n);this.services_[t][e]=r}return this.services_[t][e]}extendApp(e){t(this,e)}checkDestroyed_(){if(this.isDeleted_)throw l.create("app-deleted",{appName:this.name_})}}const h="7.2.1",d=new u("@firebase/app");
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const g=
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(){const e=
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(e){const n={},r={},i={},a={__esModule:!0,initializeApp:function(t,r={}){if("object"!=typeof r||null===r){r={name:r}}const i=r;void 0===i.name&&(i.name=p);const{name:s}=i;if("string"!=typeof s||!s)throw l.create("bad-app-name",{appName:String(s)});if(o(n,s))throw l.create("duplicate-app",{appName:s});const c=new e(t,i,a);return n[s]=c,u(c,"create"),c},app:s,apps:null,SDK_VERSION:h,INTERNAL:{registerService:function(n,o,u,p,f=!1){if(r[n])return d.debug(`There were multiple attempts to register service ${n}.`),a[n];r[n]=o,p&&(i[n]=p,c().forEach(t=>{p("create",t)}));function h(t=s()){if("function"!=typeof t[n])throw l.create("invalid-app-argument",{appName:n});return t[n]()}void 0!==u&&t(h,u);return a[n]=h,e.prototype[n]=function(...t){return this._getService.bind(this,n).apply(this,f?t:[])},h},removeApp:function(t){u(n[t],"delete"),delete n[t]},factories:r,useAsService:f}};function s(t){if(!o(n,t=t||p))throw l.create("no-app",{appName:t});return n[t]}function c(){return Object.keys(n).map(t=>n[t])}function u(t,e){for(const n of Object.keys(r)){const r=f(t,n);if(null===r)return;i[r]&&i[r](e,t)}}function f(t,e){if("serverAuth"===e)return null;return e}return(a.default=a,Object.defineProperty(a,"apps",{get:c}),s.App=e,a)}(f);e.SDK_VERSION=`${e.SDK_VERSION}_LITE`;const n=e.INTERNAL.registerService;return e.INTERNAL.registerService=function(t,e,r,i,o){if("performance"!==t&&"installations"!==t)throw Error(`${t} cannot register with the standalone perf instance`);return n(t,e,r,i,o)},e}();function m(t){return Array.prototype.slice.call(t)}function b(t){return new Promise((function(e,n){t.onsuccess=function(){e(t.result)},t.onerror=function(){n(t.error)}}))}function _(t,e,n){var r,i=new Promise((function(i,o){b(r=t[e].apply(t,n)).then(i,o)}));return i.request=r,i}function w(t,e,n){var r=_(t,e,n);return r.then((function(t){if(t)return new T(t,r.request)}))}function y(t,e,n){n.forEach((function(n){Object.defineProperty(t.prototype,n,{get:function(){return this[e][n]},set:function(t){this[e][n]=t}})}))}function v(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return _(this[e],r,arguments)})}))}function E(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return this[e][r].apply(this[e],arguments)})}))}function I(t,e,n,r){r.forEach((function(r){r in n.prototype&&(t.prototype[r]=function(){return w(this[e],r,arguments)})}))}function S(t){this._index=t}function T(t,e){this._cursor=t,this._request=e}function A(t){this._store=t}function N(t){this._tx=t,this.complete=new Promise((function(e,n){t.oncomplete=function(){e()},t.onerror=function(){n(t.error)},t.onabort=function(){n(t.error)}}))}function k(t,e,n){this._db=t,this.oldVersion=e,this.transaction=new N(n)}function O(t){this._db=t}y(S,"_index",["name","keyPath","multiEntry","unique"]),v(S,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),I(S,"_index",IDBIndex,["openCursor","openKeyCursor"]),y(T,"_cursor",["direction","key","primaryKey","value"]),v(T,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(t){t in IDBCursor.prototype&&(T.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then((function(){return e._cursor[t].apply(e._cursor,n),b(e._request).then((function(t){if(t)return new T(t,e._request)}))}))})})),A.prototype.createIndex=function(){return new S(this._store.createIndex.apply(this._store,arguments))},A.prototype.index=function(){return new S(this._store.index.apply(this._store,arguments))},y(A,"_store",["name","keyPath","indexNames","autoIncrement"]),v(A,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),I(A,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),E(A,"_store",IDBObjectStore,["deleteIndex"]),N.prototype.objectStore=function(){return new A(this._tx.objectStore.apply(this._tx,arguments))},y(N,"_tx",["objectStoreNames","mode"]),E(N,"_tx",IDBTransaction,["abort"]),k.prototype.createObjectStore=function(){return new A(this._db.createObjectStore.apply(this._db,arguments))},y(k,"_db",["name","version","objectStoreNames"]),E(k,"_db",IDBDatabase,["deleteObjectStore","close"]),O.prototype.transaction=function(){return new N(this._db.transaction.apply(this._db,arguments))},y(O,"_db",["name","version","objectStoreNames"]),E(O,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(t){[A,S].forEach((function(e){t in e.prototype&&(e.prototype[t.replace("open","iterate")]=function(){var e=m(arguments),n=e[e.length-1],r=this._store||this._index,i=r[t].apply(r,e.slice(0,-1));i.onsuccess=function(){n(i.result)}})}))})),[S,A].forEach((function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var n=this,r=[];return new Promise((function(i){n.iterateCursor(t,(function(t){t?(r.push(t.value),void 0===e||r.length!=e?t.continue():i(r)):i(r)}))}))})}));const D=1e4,R="w:0.3.1",j="FIS_v2",$="https://firebaseinstallations.googleapis.com/v1",P=36e5,M=new r("installations","Installations",{"missing-app-config-values":"Missing App configuration values.","create-installation-failed":"Could not register Firebase Installation.","generate-token-failed":"Could not generate Auth Token.","not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function C(t){return t instanceof n&&t.code.includes("request-failed")}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function L(t){if(!t||!t.options)throw M.create("missing-app-config-values");const e=t.name,{projectId:n,apiKey:r,appId:i}=t.options;if(!(e&&n&&r&&i))throw M.create("missing-app-config-values");return{appName:e,projectId:n,apiKey:r,appId:i}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function B({projectId:t}){return`${$}/projects/${t}/installations`}function q(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function F(t,e){const n=(await e.json()).error;return M.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function U({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function x(t,{refreshToken:e}){const n=U(t);return n.append("Authorization",function(t){return`${j} ${t}`}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)),n}async function K(t){const e=await t();return e.status>=500&&e.status<600?t():e}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function V(t){return new Promise(e=>{setTimeout(e,t)})}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const H=/^[cdef][\w-]{21}$/,W="";function J(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t);return H.test(e)?e:W}catch(t){return W}}const z="firebase-installations-database",G=1,Z="firebase-installations-store";let Q=null;function X(){return Q||(Q=function(t,e,n){var r=_(indexedDB,"open",[t,e]),i=r.request;return i&&(i.onupgradeneeded=function(t){n&&n(new k(i.result,t.oldVersion,i.transaction))}),r.then((function(t){return new O(t)}))}(z,G,t=>{switch(t.oldVersion){case 0:t.createObjectStore(Z)}})),Q}async function Y(t,e){const n=nt(t),r=(await X()).transaction(Z,"readwrite");return await r.objectStore(Z).put(e,n),await r.complete,e}async function tt(t){const e=nt(t),n=(await X()).transaction(Z,"readwrite");await n.objectStore(Z).delete(e),await n.complete}async function et(t,e){const n=nt(t),r=(await X()).transaction(Z,"readwrite"),i=r.objectStore(Z),o=e(await i.get(n));return void 0===o?await i.delete(n):await i.put(o,n),await r.complete,o}function nt(t){return`${t.appName}!${t.appId}`}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function rt(t){let e;const n=await et(t,n=>{const r=function(t){return at(t||{fid:J(),registrationStatus:0})}(n),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(M.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(t,e){try{const n=await async function(t,{fid:e}){const n=B(t),r=U(t),i={fid:e,authVersion:j,appId:t.appId,sdkVersion:R},o={method:"POST",headers:r,body:JSON.stringify(i)},a=await K(()=>fetch(n,o));if(a.ok){const t=await a.json();return{fid:t.fid||e,registrationStatus:2,refreshToken:t.refreshToken,authToken:q(t.authToken)}}throw await F("Create Installation",a)}(t,e);return Y(t,n)}catch(n){throw C(n)&&409===n.serverCode?await tt(t):await Y(t,{fid:e.fid,registrationStatus:0}),n}}(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:it(t)}:{installationEntry:e}}(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===W?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function it(t){let e=await ot(t);for(;1===e.registrationStatus;)await V(100),e=await ot(t);if(0===e.registrationStatus)throw M.create("create-installation-failed");return e}function ot(t){return et(t,t=>{if(!t)throw M.create("installation-not-found");return at(t)})}function at(t){return 1===(e=t).registrationStatus&&e.registrationTime+D<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}async function st(t,e){const n=function(t,{fid:e}){return`${B(t)}/${e}/authTokens:generate`}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t,e),r=x(t,e),i={installation:{sdkVersion:R}},o={method:"POST",headers:r,body:JSON.stringify(i)},a=await K(()=>fetch(n,o));if(a.ok){return q(await a.json())}throw await F("Generate Auth Token",a)}async function ct(t,e=!1){let n;const r=await et(t,r=>{if(!lt(r))throw M.create("not-registered");const i=r.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+P}(t)}(i))return r;if(1===i.requestStatus)return n=async function(t){let e=await ut(t);for(;1===e.authToken.requestStatus;)await V(100),e=await ut(t);const n=e.authToken;if(0===n.requestStatus)throw M.create("generate-token-failed");return n}(t),r;{if(!navigator.onLine)throw M.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(r);return n=async function(t,e){try{const n=await st(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Y(t,r),n}catch(n){if(!C(n)||401!==n.serverCode&&404!==n.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Y(t,n)}else await tt(t);throw n}}(t,e),e}});return(n?await n:r.authToken).token}function ut(t){return et(t,t=>{if(!lt(t))throw M.create("not-registered");return function(t){return 1===t.requestStatus&&t.requestTime+D<Date.now()}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t.authToken)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}function lt(t){return void 0!==t&&2===t.registrationStatus}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function pt(t,e=!1){const n=L(t);return await async function(t){const{installationEntry:e,registrationPromise:n}=await rt(t);if(n)await n;else if(2!==e.registrationStatus)throw M.create("create-installation-failed")}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(n),ct(n,e)}async function ft(t,e){const n=function(t,{fid:e}){return`${B(t)}/${e}`}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t,e),r={method:"DELETE",headers:x(t,e)},i=await K(()=>fetch(n,r));if(!i.ok)throw await F("Delete Installation",i)}g.INTERNAL.registerService("installations",t=>(L(t),{app:t,getId:()=>(async function(t){const e=L(t),{installationEntry:n,registrationPromise:r}=await rt(e);return r&&r.catch(()=>{}),2===n.registrationStatus&&ct(e).catch(()=>{}),n.fid})(t),getToken:e=>pt(t,e),delete:()=>(async function(t){const e=L(t),n=await et(e,t=>{if(!t||0!==t.registrationStatus)return t});if(n){if(1===n.registrationStatus)throw M.create("delete-pending-registration");if(2===n.registrationStatus){if(!navigator.onLine)throw M.create("app-offline");await ft(e,n),await tt(e)}}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */)(t)}));const ht="0.2.21",dt="FB-PERF-TRACE-START",gt="FB-PERF-TRACE-STOP",mt="FB-PERF-TRACE-MEASURE",bt="_wt_",_t="_fp",wt="_fcp",yt="_fid",vt="@firebase/performance/config",Et="@firebase/performance/configexpire",It=new r("performance","Performance",{"trace started":"Trace {$traceName} was started before.","trace stopped":"Trace {$traceName} is not running.","no window":"Window is not available.","no app id":"App id is not available.","no project id":"Project id is not available.","no api key":"Api key is not available.","invalid cc log":"Attempted to queue invalid cc event","FB not default":"Performance can only start when Firebase app instance is the default one.","RC response not ok":"RC response is not ok","invalid attribute name":"Attribute name {$attributeName} is invalid.","invalid attribute value":"Attribute value {$attributeValue} is invalid.","invalide custom metric name":"Custom metric name {$customMetricName} is invalid"});
/**
     * @license
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let St,Tt,At,Nt;class kt{constructor(t){if(!t)throw It.create("no window");this.performance=t.performance,this.PerformanceObserver=t.PerformanceObserver,this.windowLocation=t.location,this.navigator=t.navigator,this.document=t.document,this.navigator&&this.navigator.cookieEnabled&&(this.localStorage=t.localStorage),t.perfMetrics&&t.perfMetrics.onFirstInputDelay&&(this.onFirstInputDelay=t.perfMetrics.onFirstInputDelay)}getUrl(){return this.windowLocation.href.split("?")[0]}mark(t){this.performance&&this.performance.mark&&this.performance.mark(t)}measure(t,e,n){this.performance&&this.performance.measure&&this.performance.measure(t,e,n)}getEntriesByType(t){return this.performance&&this.performance.getEntriesByType?this.performance.getEntriesByType(t):[]}getEntriesByName(t){return this.performance&&this.performance.getEntriesByName?this.performance.getEntriesByName(t):[]}getTimeOrigin(){return this.performance&&(this.performance.timeOrigin||this.performance.timing.navigationStart)}requiredApisAvailable(){return!!(fetch&&Promise&&this.navigator&&this.navigator.cookieEnabled)}setupObserver(t,e){if(!this.PerformanceObserver)return;new this.PerformanceObserver(t=>{for(const n of t.getEntries())e(n)}).observe({entryTypes:[t]})}static getInstance(){return void 0===St&&(St=new kt(Tt)),St}}class Ot{constructor(){this.instrumentationEnabled=!0,this.dataCollectionEnabled=!0,this.loggingEnabled=!1,this.tracesSamplingRate=1,this.networkRequestsSamplingRate=1,this.logEndPointUrl="https://firebaselogging.googleapis.com/v0cc/log?format=json_proto",this.logSource=462,this.logTraceAfterSampling=!1,this.logNetworkAfterSampling=!1,this.configTimeToLive=12}getAppId(){const t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.appId;if(!t)throw It.create("no app id");return t}getProjectId(){const t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.projectId;if(!t)throw It.create("no project id");return t}getApiKey(){const t=this.firebaseAppInstance&&this.firebaseAppInstance.options&&this.firebaseAppInstance.options.apiKey;if(!t)throw It.create("no api key");return t}static getInstance(){return void 0===At&&(At=new Ot),At}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Dt(){return Nt}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
var Rt;!function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.VISIBLE=1]="VISIBLE",t[t.HIDDEN=2]="HIDDEN",t[t.PRERENDER=3]="PRERENDER",t[t.UNLOADED=4]="UNLOADED"}(Rt||(Rt={}));const jt=["firebase_","google_","ga_"],$t=new RegExp("^[a-zA-Z]\\w*$"),Pt=40,Mt=100;function Ct(){const t=kt.getInstance().navigator;return"serviceWorker"in t?t.serviceWorker.controller?2:3:1}function Lt(){switch(kt.getInstance().document.visibilityState){case"visible":return Rt.VISIBLE;case"hidden":return Rt.HIDDEN;case"prerender":return Rt.PRERENDER;default:return Rt.UNKNOWN}}function Bt(){const t=kt.getInstance().navigator.connection;switch(t&&t.effectiveType){case"slow-2g":return 1;case"2g":return 2;case"3g":return 3;case"4g":return 4;default:return 0}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const qt=new u("Performance");qt.logLevel=a.INFO;
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Ft="0.0.1",Ut={loggingEnabled:!0},xt="FIREBASE_INSTALLATIONS_AUTH";function Kt(t){const e=function(){const t=kt.getInstance().localStorage,e=t.getItem(Et);if(!(e&&(n=e,Number(n)>Date.now())))return;var n;const r=t.getItem(vt);if(!r)return;try{return JSON.parse(r)}catch(t){return}}();return e?(Ht(e),Promise.resolve()):function(t){return function(){const t=Ot.getInstance().firebaseAppInstance.installations().getToken();return t.then(t=>{}),t}().then(e=>{const n=`https://firebaseremoteconfig.googleapis.com/v1/projects/${Ot.getInstance().getProjectId()}/namespaces/fireperf:fetch?key=${Ot.getInstance().getApiKey()}`,r=new Request(n,{method:"POST",headers:{Authorization:`${xt} ${e}`},body:JSON.stringify({app_instance_id:t,app_instance_id_token:e,app_id:Ot.getInstance().getAppId(),app_version:ht,sdk_version:Ft})});return fetch(r).then(t=>{if(t.ok)return t.json();throw It.create("RC response not ok")})}).catch(()=>{qt.info(Vt)})}(t).then(t=>Ht(t)).then(t=>(function(t){if(!t)return;const e=kt.getInstance().localStorage;e.setItem(vt,JSON.stringify(t)),e.setItem(Et,String(Date.now()+60*Ot.getInstance().configTimeToLive*60*1e3))})(t),()=>{})}const Vt="Could not fetch config, will use default configs";function Ht(t){if(!t)return t;const e=Ot.getInstance(),n=t.entries||{};return void 0!==n.fpr_enabled?e.loggingEnabled="true"===String(n.fpr_enabled):e.loggingEnabled=Ut.loggingEnabled,n.fpr_log_source&&(e.logSource=Number(n.fpr_log_source)),n.fpr_log_endpoint_url&&(e.logEndPointUrl=n.fpr_log_endpoint_url),void 0!==n.fpr_vc_network_request_sampling_rate&&(e.networkRequestsSamplingRate=Number(n.fpr_vc_network_request_sampling_rate)),void 0!==n.fpr_vc_trace_sampling_rate&&(e.tracesSamplingRate=Number(n.fpr_vc_trace_sampling_rate)),e.logTraceAfterSampling=Wt(e.tracesSamplingRate),e.logNetworkAfterSampling=Wt(e.networkRequestsSamplingRate),t}function Wt(t){return Math.random()<=t}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Jt,zt=1;function Gt(){return zt=2,Jt=Jt||function(){const t=kt.getInstance().document;return new Promise(e=>{if(t&&"complete"!==t.readyState){const n=()=>{"complete"===t.readyState&&(t.removeEventListener("readystatechange",n),e())};t.addEventListener("readystatechange",n)}else e()})}().then(()=>(function(){const t=Ot.getInstance().firebaseAppInstance.installations().getId();return t.then(t=>{Nt=t}),t})()).then(t=>Kt(t)).then(()=>Zt(),()=>Zt())}function Zt(){zt=3}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Qt=1e4,Xt=3;let Yt,te=Xt,ee=[];function ne(t){return(e,n,...r)=>{!function(t){if(!t.eventTime||!t.message)throw It.create("invalid cc log");ee=[...ee,t]}({message:t(...r),eventTime:Date.now()})}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function re(){if(Yt)return Yt;const t=ne(ae);return(Yt=new u("@firebase/performance/cc")).logHandler=t,Yt}function ie(t){const e=Ot.getInstance();!e.instrumentationEnabled&&t.isAuto||(e.dataCollectionEnabled||t.isAuto)&&kt.getInstance().requiredApisAvailable()&&(t.isAuto&&Lt()!==Rt.VISIBLE||e.loggingEnabled&&e.logTraceAfterSampling&&(3===zt?oe(t):Gt().then(()=>oe(t),()=>oe(t))))}function oe(t){Dt()&&setTimeout(()=>re().log(t,1),0)}function ae(t,e){return 0===e?function(t){const e={url:t.url,http_method:t.httpMethod||0,http_response_code:200,response_payload_bytes:t.responsePayloadBytes,client_start_time_us:t.startTimeUs,time_to_response_initiated_us:t.timeToResponseInitiatedUs,time_to_response_completed_us:t.timeToResponseCompletedUs},n={application_info:se(),network_request_metric:e};return JSON.stringify(n)}(t):function(t){const e={name:t.name,is_auto:t.isAuto,client_start_time_us:t.startTimeUs,duration_us:t.durationUs};0!==Object.keys(t.counters).length&&(e.counters=ce(t.counters));const n=t.getAttributes();0!==Object.keys(n).length&&(e.custom_attributes=ce(n));const r={application_info:se(),trace_metric:e};return JSON.stringify(r)}(t)}function se(){return{google_app_id:Ot.getInstance().getAppId(),app_instance_id:Dt(),web_app_info:{sdk_version:ht,page_url:kt.getInstance().getUrl(),service_worker_status:Ct(),visibility_state:Lt(),effective_connection_type:Bt()},application_process_state:0}}function ce(t){return Object.keys(t).map(e=>({key:e,value:t[e]}))}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */!function t(e){setTimeout(()=>{if(0===te)return;if(!ee.length)return t(Qt);const e=[...ee];ee=[];const n=e.map(t=>({source_extension_json:t.message,event_time_ms:String(t.eventTime)})),r={request_time_ms:String(Date.now()),client_info:{client_type:1,js_client_info:{}},log_source:Ot.getInstance().logSource,log_event:n};fetch(Ot.getInstance().logEndPointUrl,{method:"POST",body:JSON.stringify(r)}).then(t=>(t.ok||qt.info("Call to Firebase backend failed."),t.json())).then(e=>{const n=Number(e.next_request_wait_millis),r=isNaN(n)?Qt:Math.max(Qt,n);te=Xt,t(r)}).catch(()=>{ee=[...e,...ee],te--,qt.info(`Tries left: ${te}.`),t(Qt)})},e)}(5500);const ue=100,le="_",pe=[_t,wt,yt];
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class fe{constructor(t,e=!1,n){this.name=t,this.isAuto=e,this.state=1,this.customAttributes={},this.counters={},this.api=kt.getInstance(),this.randomId=Math.floor(1e6*Math.random()),this.isAuto||(this.traceStartMark=`${dt}-${this.randomId}-${this.name}`,this.traceStopMark=`${gt}-${this.randomId}-${this.name}`,this.traceMeasure=n||`${mt}-${this.randomId}-${this.name}`,n&&this.calculateTraceMetrics())}start(){if(1!==this.state)throw It.create("trace started",{traceName:this.name});this.api.mark(this.traceStartMark),this.state=2}stop(){if(2!==this.state)throw It.create("trace stopped",{traceName:this.name});this.state=3,this.api.mark(this.traceStopMark),this.api.measure(this.traceMeasure,this.traceStartMark,this.traceStopMark),this.calculateTraceMetrics(),ie(this)}record(t,e,n){if(this.durationUs=Math.floor(1e3*e),this.startTimeUs=Math.floor(1e3*t),n&&n.attributes&&(this.customAttributes=Object.assign({},n.attributes)),n&&n.metrics)for(const t of Object.keys(n.metrics))isNaN(Number(n.metrics[t]))||(this.counters[t]=Number(Math.floor(n.metrics[t])));ie(this)}incrementMetric(t,e=1){void 0===this.counters[t]&&this.putMetric(t,0),this.counters[t]+=e}putMetric(t,e){if(n=t,r=this.name,0===n.length||n.length>ue||!(r&&r.startsWith(bt)&&pe.indexOf(n)>-1)&&n.startsWith(le))throw It.create("invalide custom metric name",{customMetricName:t});var n,r;this.counters[t]=e}getMetric(t){return this.counters[t]||0}putAttribute(t,e){const n=!(0===(r=t).length||r.length>Pt||jt.some(t=>r.startsWith(t))||!r.match($t));var r;const i=function(t){return 0!==t.length&&t.length<=Mt}(e);if(n&&i)this.customAttributes[t]=e;else{if(!n)throw It.create("invalid attribute name",{attributeName:t});if(!i)throw It.create("invalid attribute value",{attributeValue:e})}}getAttribute(t){return this.customAttributes[t]}removeAttribute(t){void 0!==this.customAttributes[t]&&delete this.customAttributes[t]}getAttributes(){return Object.assign({},this.customAttributes)}setStartTime(t){this.startTimeUs=t}setDuration(t){this.durationUs=t}calculateTraceMetrics(){const t=this.api.getEntriesByName(this.traceMeasure),e=t&&t[0];e&&(this.durationUs=Math.floor(1e3*e.duration),this.startTimeUs=Math.floor(1e3*(e.startTime+this.api.getTimeOrigin())))}static createOobTrace(t,e,n){const r=kt.getInstance().getUrl();if(!r)return;const i=new fe(bt+r,!0),o=Math.floor(1e3*kt.getInstance().getTimeOrigin());i.setStartTime(o),t&&t[0]&&(i.setDuration(Math.floor(1e3*t[0].duration)),i.putMetric("domInteractive",Math.floor(1e3*t[0].domInteractive)),i.putMetric("domContentLoadedEventEnd",Math.floor(1e3*t[0].domContentLoadedEventEnd)),i.putMetric("loadEventEnd",Math.floor(1e3*t[0].loadEventEnd)));if(e){const t=e.find(t=>"first-paint"===t.name);t&&t.startTime&&i.putMetric(_t,Math.floor(1e3*t.startTime));const r=e.find(t=>"first-contentful-paint"===t.name);r&&r.startTime&&i.putMetric(wt,Math.floor(1e3*r.startTime)),n&&i.putMetric(yt,Math.floor(1e3*n))}ie(i)}static createUserTimingTrace(t){ie(new fe(t,!1,t))}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function he(t){const e=t;if(!e||void 0===e.responseStart)return;const n=kt.getInstance().getTimeOrigin(),r=Math.floor(1e3*(e.startTime+n)),i=e.responseStart?Math.floor(1e3*(e.responseStart-e.startTime)):void 0,o=Math.floor(1e3*(e.responseEnd-e.startTime));!function(t){const e=Ot.getInstance();e.instrumentationEnabled&&t.url!==e.logEndPointUrl.split("?")[0]&&e.loggingEnabled&&e.logNetworkAfterSampling&&setTimeout(()=>re().log(t,0),0)}({url:e.name&&e.name.split("?")[0],responsePayloadBytes:e.transferSize,startTimeUs:r,timeToResponseInitiatedUs:i,timeToResponseCompletedUs:o})}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const de=5e3;function ge(){Dt()&&(setTimeout(()=>(function(){const t=kt.getInstance(),e=t.getEntriesByType("navigation"),n=t.getEntriesByType("paint");if(t.onFirstInputDelay){let r=setTimeout(()=>{fe.createOobTrace(e,n),r=void 0},de);t.onFirstInputDelay(t=>{r&&(clearTimeout(r),fe.createOobTrace(e,n,t))})}else fe.createOobTrace(e,n)})(),0),setTimeout(()=>(function(){const t=kt.getInstance(),e=t.getEntriesByType("resource");for(const t of e)he(t);t.setupObserver("resource",he)})(),0),setTimeout(()=>(function(){const t=kt.getInstance(),e=t.getEntriesByType("measure");for(const t of e)me(t);t.setupObserver("measure",me)})(),0))}function me(t){const e=t.name;e.substring(0,mt.length)!==mt&&fe.createUserTimingTrace(e)}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class be{constructor(t){this.app=t,kt.getInstance().requiredApisAvailable()?Gt().then(ge,ge):qt.info("Firebase Performance cannot start if browser does not support fetch and Promise or cookie is disabled.")}trace(t){return new fe(t)}set instrumentationEnabled(t){Ot.getInstance().instrumentationEnabled=t}get instrumentationEnabled(){return Ot.getInstance().instrumentationEnabled}set dataCollectionEnabled(t){Ot.getInstance().dataCollectionEnabled=t}get dataCollectionEnabled(){return Ot.getInstance().dataCollectionEnabled}}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const _e="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return function(t){t.INTERNAL.registerService("performance",t=>{if(t.name!==_e)throw It.create("FB not default");if("undefined"==typeof window)throw It.create("no window");return function(t){Tt=t}
/**
     * @license
     * Copyright 2019 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(window),Ot.getInstance().firebaseAppInstance=t,new be(t)},{})}(g),g}));
//# sourceMappingURL=firebase-performance-standalone.es2017.js.map
