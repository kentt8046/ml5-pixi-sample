import{_ as Js}from"./preload-helper-8983ef1c.js";function Ba(t,e){for(var n=0;n<e.length;n++){const s=e[n];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in t)){const r=Object.getOwnPropertyDescriptor(s,o);r&&Object.defineProperty(t,o,r.get?r:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}let ce,er,Un;function Ey(){return Un!=null?Un:Un=Promise.all([Js(()=>import("./pixi-77187642.js"),["immutable/chunks/pixi-77187642.js","immutable/chunks/core-227cabec.js"]),Js(()=>import("./filter-pixelate.esm-0bdb7ad2.js"),["immutable/chunks/filter-pixelate.esm-0bdb7ad2.js","immutable/chunks/core-227cabec.js"])]).then(([t,e])=>{ce=t,ce.utils.skipHello(),er=e})}const an=100;class Ry{constructor(e,n,s,o){this.bgResource=e,this.mosaics=[],this.mask=new ce.Sprite,this.pixelateFilter=new er.PixelateFilter(20),this.app=new ce.Application({view:n,width:s,height:o,powerPreference:"high-performance"}),this.base=ce.Sprite.from(e),this.base.width=s,this.base.height=o,this.app.stage.addChild(this.base)}changeBase(e,n,s){this.base.texture=ce.Texture.from(e),typeof n=="number"&&(this.base.width=n),typeof s=="number"&&(this.base.height=s)}updateMosaic(...e){var i,a;Ma(this.bgResource);const n=this.bgResource,{width:s,height:o}=n;let r=0;for(;r<e.length;r++){const c=e[r].box,l=(a=(i=this.mosaics)[r])!=null?a:i[r]=(()=>{const d=new ce.Sprite;return d.filters=[this.pixelateFilter],this.app.stage.addChild(d),d})(),u={x:c.xMin-an/2,y:c.yMin-an/2,w:c.width+an,h:c.height+an};u.x+u.w>s&&(u.w=s-u.x),u.y+u.h>o&&(u.h=o-u.y),l.texture=new ce.Texture(ce.BaseTexture.from(n),new ce.Rectangle(u.x,u.y,u.w,u.h)),l.position.x=u.x,l.position.y=u.y,l.width=u.w,l.height=u.h}this.mosaics.splice(r,this.mosaics.length).forEach(c=>{c.visible=!1,this.app.stage.removeChild(c)})}setMaskBase(e){this.mask.texture=ce.Texture.from(e)}applyBgFilter(e){var s,o;const n=(o=(s=this.mask).mask)!=null?o:s.mask=new ce.Sprite;n.texture=ce.Texture.from(ce.BaseTexture.fromBuffer(e.data,e.width,e.height)),this.app.stage.addChild(this.mask)}clear(){this.mosaics.splice(0,this.mosaics.length).forEach(e=>{e.visible=!1,this.app.stage.removeChild(e)}),this.app.stage.removeChild(this.mask)}destroy(){this.clear(),this.app.destroy(!1,!0)}}function Ma(t){if(t.tagName!=="VIDEO")throw"not video."}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ua=1e-7,Va=1e-4;class Wa{constructor(e,n){this.backend=e,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,n){this.dataIdsCount++,this.data.set(e,n)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}}class tr{refCount(e){return he("refCount")}incRef(e){return he("incRef")}timerAvailable(){return!0}time(e){return he("time")}read(e){return he("read")}readSync(e){return he("readSync")}readToGPU(e,n){return he("readToGPU")}numDataIds(){return he("numDataIds")}disposeData(e,n){return he("disposeData")}write(e,n,s){return he("write")}move(e,n,s,o,r){return he("move")}memory(){return he("memory")}floatPrecision(){return he("floatPrecision")}epsilon(){return this.floatPrecision()===32?Ua:Va}dispose(){return he("dispose")}}function he(t){throw new Error(`'${t}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xn(t,e,n){return Math.max(t,Math.min(e,n))}function nr(t){return t%2===0?t:t+1}function Wt(t,e,n){const s=t[e];t[e]=t[n],t[n]=s}function Ga(t){let e=0;for(let n=0;n<t.length;n++)e+=t[n];return e}function k(t,e){if(!t)throw new Error(typeof e=="string"?e:e())}function sr(t,e,n=""){k(q(t,e),()=>n+` Shapes ${t} and ${e} must match`)}function St(t,e=[],n=!1){if(e==null&&(e=[]),Array.isArray(t)||Oe(t)&&!n)for(let s=0;s<t.length;++s)St(t[s],e,n);else e.push(t);return e}function E(t){if(t.length===0)return 1;let e=t[0];for(let n=1;n<t.length;n++)e*=t[n];return e}function q(t,e){if(t===e)return!0;if(t==null||e==null||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function Cn(t){return t%1===0}function es(t){const e=Math.ceil(Math.sqrt(t));return[e,Math.ceil(t/e)]}function vt(t,e){return e<=t.length?t:t+" ".repeat(e-t.length)}function eo(t,e=s=>0,n){return new Promise((s,o)=>{let r=0;const i=()=>{if(t()){s();return}r++;const a=e(r);if(n!=null&&r>=n){o();return}setTimeout(i,a)};i()})}function za(t,e){let n=1,s=-1;for(let r=0;r<t.length;++r)if(t[r]>=0)n*=t[r];else if(t[r]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${r}`);s=r}else if(t[r]<0)throw Error(`Shapes can not be < 0. Found ${t[r]} at dim ${r}`);if(s===-1){if(e>0&&e!==n)throw Error(`Size(${e}) must match the product of shape ${t}`);return t}if(n===0)throw Error(`Cannot infer the missing size in [${t}] when there are 0 elements`);if(e%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${n}`);const o=t.slice();return o[s]=e/n,o}function te(t,e){const n=e.length;return t=t==null?e.map((s,o)=>o):[].concat(t),k(t.every(s=>s>=-n&&s<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${t}`),k(t.every(s=>Cn(s)),()=>`All values in axis param must be integers but got axis ${t}`),t.map(s=>s<0?n+s:s)}function ut(t,e){const n=[],s=[],o=e!=null&&Array.isArray(e)&&e.length===0,r=e==null||o?null:te(e,t).sort();let i=0;for(let a=0;a<t.length;++a){if(r!=null){if(r[i]===a&&t[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${t[a]}' is not 1`);(r[i]==null||r[i]>a)&&t[a]===1&&(n.push(t[a]),s.push(a)),r[i]<=a&&i++}t[a]!==1&&(n.push(t[a]),s.push(a))}return{newShape:n,keptDims:s}}function Xe(t,e){let n=null;if(t==null||t==="float32")n=new Float32Array(e);else if(t==="int32")n=new Int32Array(e);else if(t==="bool")n=new Uint8Array(e);else throw new Error(`Unknown data type ${t}`);return n}function Ce(t,e){let n=null;if(t==null||t==="float32")n=new Float32Array(e);else if(t==="int32")n=new Int32Array(e);else if(t==="bool")n=new Uint8Array(e);else if(t==="string")n=new Array(e);else throw new Error(`Unknown data type ${t}`);return n}function Ha(t,e){for(let n=0;n<t.length;n++){const s=t[n];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${e} being uploaded contains ${s}.`)}}function Xa(t){return t==="bool"||t==="complex64"||t==="float32"||t==="int32"||t==="string"}function ja(t,e){return!(e==="complex64"||e==="float32"&&t!=="complex64"||e==="int32"&&t!=="float32"&&t!=="complex64"||e==="bool"&&t==="bool")}function Oe(t){return t instanceof Float32Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray}function ts(t){if(t==="float32"||t==="int32")return 4;if(t==="complex64")return 8;if(t==="bool")return 1;throw new Error(`Unknown dtype ${t}`)}function qa(t){if(t==null)return 0;let e=0;return t.forEach(n=>e+=n.length),e}function En(t){return typeof t=="string"||t instanceof String}function Ka(t){return typeof t=="boolean"}function Ya(t){return typeof t=="number"}function Rn(t){return Array.isArray(t)?Rn(t[0]):t instanceof Float32Array?"float32":t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray?"int32":Ya(t)?"float32":En(t)?"string":Ka(t)?"bool":"float32"}function to(t){return!!(t&&t.constructor&&t.call&&t.apply)}function ns(t,e){for(let n=e;n<t;++n)if(t%n===0)return n;return t}function Q(t){const e=t.length;if(e<2)return[];const n=new Array(e-1);n[e-2]=t[e-1];for(let s=e-3;s>=0;--s)n[s]=n[s+1]*t[s+1];return n}function or(t,e,n,s=!1){const o=new Array;if(e.length===1){const r=e[0]*(s?2:1);for(let i=0;i<r;i++)o[i]=n[t+i]}else{const r=e[0],i=e.slice(1),a=i.reduce((c,l)=>c*l)*(s?2:1);for(let c=0;c<r;c++)o[c]=or(t+c*a,i,n,s)}return o}function no(t,e,n=!1){if(t.length===0)return e[0];const s=t.reduce((o,r)=>o*r)*(n?2:1);if(s===0)return[];if(s!==e.length)throw new Error(`[${t}] does not match the input size ${e.length}${n?" for a complex tensor":""}.`);return or(0,t,e,n)}function Qa(t,e){const n=je(t,e);for(let s=0;s<n.length;s++)n[s]=1;return n}function je(t,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool")return new Uint8Array(t);throw new Error(`Unknown data type ${e}`)}function rr(t){t.forEach(e=>{k(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${t}].`)})}function ss(t,e,n){if(e===0)return 0;if(e===1)return t[0];let s=t[t.length-1];for(let o=0;o<t.length-1;++o)s+=n[o]*t[o];return s}function ir(t,e,n){if(e===0)return[];if(e===1)return[t];const s=new Array(e);for(let o=0;o<s.length-1;++o)s[o]=Math.floor(t/n[o]),t-=s[o]*n[o];return s[s.length-1]=t,s}function ar(t){return t&&t.then&&typeof t.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const so="tfjsflags";class Za{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=Ja,this.populateURLFlags()}setPlatform(e,n){this.platform!=null&&($().getBool("IS_TEST")||$().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=n}registerFlag(e,n,s){if(this.flagRegistry[e]={evaluationFn:n,setHook:s},this.urlFlags[e]!=null){const o=this.urlFlags[e];$().getBool("IS_TEST")||$().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${o}.`),this.set(e,o)}}async getAsync(e){return e in this.flags?this.flags[e]:(this.flags[e]=await this.evaluateFlag(e),this.flags[e])}get(e){if(e in this.flags)return this.flags[e];const n=this.evaluateFlag(e);if(ar(n))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=n,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,n){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=n,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(n)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const e=this.getQueryParams(this.global.location.search);so in e&&e[so].split(",").forEach(s=>{const[o,r]=s.split(":");this.urlFlags[o]=tc(o,r)})}}function Ja(t){const e={};return t.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...s)=>(ec(e,s[0],s[1]),s.join("="))),e}function ec(t,e,n){t[decodeURIComponent(e)]=decodeURIComponent(n||"")}function tc(t,e){if(e=e.toLowerCase(),e==="true"||e==="false")return e==="true";if(`${+e}`===e)return+e;throw new Error(`Could not parse value flag value ${e} for flag ${t}.`)}function $(){return cr}let cr=null;function nc(t){cr=t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let Vn;function lr(){if(Vn==null){let t;if(typeof window<"u")t=window;else if(typeof global<"u")t=global;else if(typeof process<"u")t=process;else if(typeof self<"u")t=self;else throw new Error("Could not find a global object");Vn=t}return Vn}function sc(){const t=lr();return t._tfGlobals==null&&(t._tfGlobals=new Map),t._tfGlobals}function Es(t,e){const n=sc();if(n.has(t))return n.get(t);{const s=e();return n.set(t,s),n.get(t)}}const oc="Abs",rc="Acos",ic="Acosh",ur="Add",ac="AddN",cc="All",lc="Any",uc="ArgMax",dc="ArgMin",hc="Asin",fc="Asinh",pc="Atan",mc="Atanh",gc="Atan2",xc="AvgPool",Cc="AvgPoolGrad",bc="AvgPool3D",wc="AvgPool3DGrad",$c="BatchMatMul",vc="BatchToSpaceND",yc="Bincount",Sc="BroadcastArgs",Rs="Cast",Ic="Ceil",Ec="ClipByValue",dr="Complex",Rc="ComplexAbs",Tc="Concat",kc="Conv2D",Nc="Conv2DBackpropFilter",Fc="Conv2DBackpropInput",Ac="Conv3D",Dc="Conv3DBackpropFilterV2",Pc="Conv3DBackpropInputV2",Oc="Cos",_c="Cosh",Lc="Cumprod",Bc="Cumsum",Mc="CropAndResize",Uc="DenseBincount",Vc="DepthToSpace",Wc="DepthwiseConv2dNative",Gc="DepthwiseConv2dNativeBackpropFilter",zc="DepthwiseConv2dNativeBackpropInput",Hc="Diag",Xc="Dilation2D",jc="RealDiv",qc="Einsum",hr="Elu",Kc="EluGrad",Yc="Erf",Qc="Equal",Zc="Exp",Jc="ExpandDims",el="Expm1",tl="FFT",nl="Fill",sl="FlipLeftRight",ol="Floor",rl="FloorDiv",il="FusedBatchNorm",al="GatherV2",cl="GatherNd",ll="Greater",ul="GreaterEqual",Ts="Identity",dl="IFFT",hl="Imag",fl="IsFinite",pl="IsInf",ml="IsNan",fr="LeakyRelu",gl="Less",xl="LessEqual",Cl="LinSpace",bl="Log",wl="Log1p",$l="LogicalAnd",vl="LogicalNot",yl="LogicalOr",Sl="LRN",Il="LRNGrad",El="Max",Rl="Maximum",Tl="MaxPool",kl="MaxPoolGrad",Nl="MaxPool3D",Fl="MaxPool3DGrad",Al="MaxPoolWithArgmax",Dl="Mean",Pl="Min",Ol="Minimum",_l="MirrorPad",Ll="Mod",Bl="Multinomial",pr="Multiply",Ml="Neg",Ul="NotEqual",Vl="NonMaxSuppressionV3",Wl="NonMaxSuppressionV4",Gl="NonMaxSuppressionV5",zl="OnesLike",Hl="OneHot",Xl="Pack",jl="PadV2",ql="Pow",mr="Prelu",Kl="Prod",Yl="Range",Ql="Real",Zl="Reciprocal",gr="Relu",xr="Reshape",Jl="ResizeNearestNeighbor",eu="ResizeNearestNeighborGrad",tu="ResizeBilinear",nu="ResizeBilinearGrad",Cr="Relu6",su="Reverse",ou="Round",ru="Rsqrt",iu="ScatterNd",au="SearchSorted",cu="Select",lu="Selu",uu="Slice",du="Sin",hu="Sinh",fu="Sign",br="Sigmoid",pu="Softplus",mu="Sqrt",wr="Sum",gu="SpaceToBatchND",xu="SplitV",Cu="Softmax",bu="SparseFillEmptyRows",wu="SparseReshape",$u="SparseSegmentMean",vu="SparseSegmentSum",yu="SparseToDense",Su="SquaredDifference",Iu="Square",Eu="StridedSlice",Ru="StringNGrams",Tu="StringSplit",ku="StringToHashBucketFast",Nu="Sub",Fu="Tan",Au="Tanh",Du="Tile",Pu="TopK",Ou="Transform",_u="Transpose",Lu="Unique",Bu="Unpack",Mu="UnsortedSegmentSum",Uu="ZerosLike",$r="Step",Vu="FromPixels",Wu="RotateWithOffset",Gu="_FusedMatMul",zu="FusedConv2D",Hu="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ne(...t){$().getBool("IS_TEST")||$().getBool("PROD")||console.warn(...t)}function Xu(...t){$().getBool("IS_TEST")||$().getBool("PROD")||console.log(...t)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bn=Es("kernelRegistry",()=>new Map),ju=Es("gradRegistry",()=>new Map);function oo(t,e){const n=vr(t,e);return bn.get(n)}function ro(t){return ju.get(t)}function io(t){const e=bn.entries(),n=[];for(;;){const{done:s,value:o}=e.next();if(s)break;const[r,i]=o,[a]=r.split("_");a===t&&n.push(i)}return n}function qu(t){const{kernelName:e,backendName:n}=t,s=vr(e,n);bn.has(s)&&Ne(`The kernel '${e}' for backend '${n}' is already registered`),bn.set(s,t)}function vr(t,e){return`${e}_${t}`}var os=M,be=null;try{be=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function M(t,e,n){this.low=t|0,this.high=e|0,this.unsigned=!!n}M.prototype.__isLong__;Object.defineProperty(M.prototype,"__isLong__",{value:!0});function de(t){return(t&&t.__isLong__)===!0}M.isLong=de;var ao={},co={};function dt(t,e){var n,s,o;return e?(t>>>=0,(o=0<=t&&t<256)&&(s=co[t],s)?s:(n=U(t,(t|0)<0?-1:0,!0),o&&(co[t]=n),n)):(t|=0,(o=-128<=t&&t<128)&&(s=ao[t],s)?s:(n=U(t,t<0?-1:0,!1),o&&(ao[t]=n),n))}M.fromInt=dt;function we(t,e){if(isNaN(t))return e?tt:$e;if(e){if(t<0)return tt;if(t>=yr)return Er}else{if(t<=-uo)return le;if(t+1>=uo)return Ir}return t<0?we(-t,e).neg():U(t%It|0,t/It|0,e)}M.fromNumber=we;function U(t,e,n){return new M(t,e,n)}M.fromBits=U;var wn=Math.pow;function ks(t,e,n){if(t.length===0)throw Error("empty string");if(t==="NaN"||t==="Infinity"||t==="+Infinity"||t==="-Infinity")return $e;if(typeof e=="number"?(n=e,e=!1):e=!!e,n=n||10,n<2||36<n)throw RangeError("radix");var s;if((s=t.indexOf("-"))>0)throw Error("interior hyphen");if(s===0)return ks(t.substring(1),e,n).neg();for(var o=we(wn(n,8)),r=$e,i=0;i<t.length;i+=8){var a=Math.min(8,t.length-i),c=parseInt(t.substring(i,i+a),n);if(a<8){var l=we(wn(n,a));r=r.mul(l).add(we(c))}else r=r.mul(o),r=r.add(we(c))}return r.unsigned=e,r}M.fromString=ks;function Ae(t,e){return typeof t=="number"?we(t,e):typeof t=="string"?ks(t,e):U(t.low,t.high,typeof e=="boolean"?e:t.unsigned)}M.fromValue=Ae;var lo=1<<16,Ku=1<<24,It=lo*lo,yr=It*It,uo=yr/2,ho=dt(Ku),$e=dt(0);M.ZERO=$e;var tt=dt(0,!0);M.UZERO=tt;var $t=dt(1);M.ONE=$t;var Sr=dt(1,!0);M.UONE=Sr;var rs=dt(-1);M.NEG_ONE=rs;var Ir=U(-1,2147483647,!1);M.MAX_VALUE=Ir;var Er=U(-1,-1,!0);M.MAX_UNSIGNED_VALUE=Er;var le=U(0,-2147483648,!1);M.MIN_VALUE=le;var y=M.prototype;y.toInt=function(){return this.unsigned?this.low>>>0:this.low};y.toNumber=function(){return this.unsigned?(this.high>>>0)*It+(this.low>>>0):this.high*It+(this.low>>>0)};y.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(le)){var n=we(e),s=this.div(n),o=s.mul(n).sub(this);return s.toString(e)+o.toInt().toString(e)}else return"-"+this.neg().toString(e);for(var r=we(wn(e,6),this.unsigned),i=this,a="";;){var c=i.div(r),l=i.sub(c.mul(r)).toInt()>>>0,u=l.toString(e);if(i=c,i.isZero())return u+a;for(;u.length<6;)u="0"+u;a=""+u+a}};y.getHighBits=function(){return this.high};y.getHighBitsUnsigned=function(){return this.high>>>0};y.getLowBits=function(){return this.low};y.getLowBitsUnsigned=function(){return this.low>>>0};y.getNumBitsAbs=function(){if(this.isNegative())return this.eq(le)?64:this.neg().getNumBitsAbs();for(var e=this.high!=0?this.high:this.low,n=31;n>0&&(e&1<<n)==0;n--);return this.high!=0?n+33:n+1};y.isZero=function(){return this.high===0&&this.low===0};y.eqz=y.isZero;y.isNegative=function(){return!this.unsigned&&this.high<0};y.isPositive=function(){return this.unsigned||this.high>=0};y.isOdd=function(){return(this.low&1)===1};y.isEven=function(){return(this.low&1)===0};y.equals=function(e){return de(e)||(e=Ae(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low};y.eq=y.equals;y.notEquals=function(e){return!this.eq(e)};y.neq=y.notEquals;y.ne=y.notEquals;y.lessThan=function(e){return this.comp(e)<0};y.lt=y.lessThan;y.lessThanOrEqual=function(e){return this.comp(e)<=0};y.lte=y.lessThanOrEqual;y.le=y.lessThanOrEqual;y.greaterThan=function(e){return this.comp(e)>0};y.gt=y.greaterThan;y.greaterThanOrEqual=function(e){return this.comp(e)>=0};y.gte=y.greaterThanOrEqual;y.ge=y.greaterThanOrEqual;y.compare=function(e){if(de(e)||(e=Ae(e)),this.eq(e))return 0;var n=this.isNegative(),s=e.isNegative();return n&&!s?-1:!n&&s?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1};y.comp=y.compare;y.negate=function(){return!this.unsigned&&this.eq(le)?le:this.not().add($t)};y.neg=y.negate;y.add=function(e){de(e)||(e=Ae(e));var n=this.high>>>16,s=this.high&65535,o=this.low>>>16,r=this.low&65535,i=e.high>>>16,a=e.high&65535,c=e.low>>>16,l=e.low&65535,u=0,d=0,h=0,f=0;return f+=r+l,h+=f>>>16,f&=65535,h+=o+c,d+=h>>>16,h&=65535,d+=s+a,u+=d>>>16,d&=65535,u+=n+i,u&=65535,U(h<<16|f,u<<16|d,this.unsigned)};y.subtract=function(e){return de(e)||(e=Ae(e)),this.add(e.neg())};y.sub=y.subtract;y.multiply=function(e){if(this.isZero())return $e;if(de(e)||(e=Ae(e)),be){var n=be.mul(this.low,this.high,e.low,e.high);return U(n,be.get_high(),this.unsigned)}if(e.isZero())return $e;if(this.eq(le))return e.isOdd()?le:$e;if(e.eq(le))return this.isOdd()?le:$e;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(ho)&&e.lt(ho))return we(this.toNumber()*e.toNumber(),this.unsigned);var s=this.high>>>16,o=this.high&65535,r=this.low>>>16,i=this.low&65535,a=e.high>>>16,c=e.high&65535,l=e.low>>>16,u=e.low&65535,d=0,h=0,f=0,p=0;return p+=i*u,f+=p>>>16,p&=65535,f+=r*u,h+=f>>>16,f&=65535,f+=i*l,h+=f>>>16,f&=65535,h+=o*u,d+=h>>>16,h&=65535,h+=r*l,d+=h>>>16,h&=65535,h+=i*c,d+=h>>>16,h&=65535,d+=s*u+o*l+r*c+i*a,d&=65535,U(f<<16|p,d<<16|h,this.unsigned)};y.mul=y.multiply;y.divide=function(e){if(de(e)||(e=Ae(e)),e.isZero())throw Error("division by zero");if(be){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;var n=(this.unsigned?be.div_u:be.div_s)(this.low,this.high,e.low,e.high);return U(n,be.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?tt:$e;var s,o,r;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return tt;if(e.gt(this.shru(1)))return Sr;r=tt}else{if(this.eq(le)){if(e.eq($t)||e.eq(rs))return le;if(e.eq(le))return $t;var i=this.shr(1);return s=i.div(e).shl(1),s.eq($e)?e.isNegative()?$t:rs:(o=this.sub(e.mul(s)),r=s.add(o.div(e)),r)}else if(e.eq(le))return this.unsigned?tt:$e;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();r=$e}for(o=this;o.gte(e);){s=Math.max(1,Math.floor(o.toNumber()/e.toNumber()));for(var a=Math.ceil(Math.log(s)/Math.LN2),c=a<=48?1:wn(2,a-48),l=we(s),u=l.mul(e);u.isNegative()||u.gt(o);)s-=c,l=we(s,this.unsigned),u=l.mul(e);l.isZero()&&(l=$t),r=r.add(l),o=o.sub(u)}return r};y.div=y.divide;y.modulo=function(e){if(de(e)||(e=Ae(e)),be){var n=(this.unsigned?be.rem_u:be.rem_s)(this.low,this.high,e.low,e.high);return U(n,be.get_high(),this.unsigned)}return this.sub(this.div(e).mul(e))};y.mod=y.modulo;y.rem=y.modulo;y.not=function(){return U(~this.low,~this.high,this.unsigned)};y.and=function(e){return de(e)||(e=Ae(e)),U(this.low&e.low,this.high&e.high,this.unsigned)};y.or=function(e){return de(e)||(e=Ae(e)),U(this.low|e.low,this.high|e.high,this.unsigned)};y.xor=function(e){return de(e)||(e=Ae(e)),U(this.low^e.low,this.high^e.high,this.unsigned)};y.shiftLeft=function(e){return de(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?U(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):U(0,this.low<<e-32,this.unsigned)};y.shl=y.shiftLeft;y.shiftRight=function(e){return de(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?U(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):U(this.high>>e-32,this.high>=0?0:-1,this.unsigned)};y.shr=y.shiftRight;y.shiftRightUnsigned=function(e){if(de(e)&&(e=e.toInt()),e&=63,e===0)return this;var n=this.high;if(e<32){var s=this.low;return U(s>>>e|n<<32-e,n>>>e,this.unsigned)}else return e===32?U(n,0,this.unsigned):U(n>>>e-32,0,this.unsigned)};y.shru=y.shiftRightUnsigned;y.shr_u=y.shiftRightUnsigned;y.toSigned=function(){return this.unsigned?U(this.low,this.high,!1):this};y.toUnsigned=function(){return this.unsigned?this:U(this.low,this.high,!0)};y.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()};y.toBytesLE=function(){var e=this.high,n=this.low;return[n&255,n>>>8&255,n>>>16&255,n>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]};y.toBytesBE=function(){var e=this.high,n=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,n>>>24,n>>>16&255,n>>>8&255,n&255]};M.fromBytes=function(e,n,s){return s?M.fromBytesLE(e,n):M.fromBytesBE(e,n)};M.fromBytesLE=function(e,n){return new M(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,n)};M.fromBytesBE=function(e,n){return new M(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],n)};const Yu=Ba({__proto__:null,default:os},[os]);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Je=os||Yu;function Tn(t){return Je.fromString(t,!0,16)}const Rr=Tn("c3a5c85c97cb3127"),Ze=Tn("b492b66fbe98f273"),Z=Tn("9ae16a3b2f90404f");function is(t){return t.xor(t.shru(47))}function Tr(t,e,n){const s=t.slice(e,e+n);return Je.fromBytes(Array.from(s),!0,!0)}function B(t,e){return Tr(t,e,8)}function fo(t,e){return Tr(t,e,4)}function G(t,e){return e===0?t:t.shru(e).or(t.shl(64-e))}function He(t,e,n=Tn("9ddfea08eb382d69")){let s=t.xor(e).mul(n);s=s.xor(s.shru(47));let o=e.xor(s).mul(n);return o=o.xor(o.shru(47)),o=o.mul(n),o}function Qu(t,e,n,s,o,r){o=o.add(t),r=G(r.add(o).add(s),21);const i=o;return o=o.add(e),o=o.add(n),r=r.add(G(o,44)),[o.add(s),r.add(i)]}function cn(t,e,n,s){return Qu(B(t,e),B(t,e+8),B(t,e+16),B(t,e+24),n,s)}function Zu(t,e=t.length){if(e>=8){const n=Z.add(e*2),s=B(t,0).add(Z),o=B(t,e-8),r=G(o,37).mul(n).add(s),i=G(s,25).add(o).mul(n);return He(r,i,n)}if(e>=4){const n=Z.add(e*2),s=fo(t,0);return He(s.shl(3).add(e),fo(t,e-4),n)}if(e>0){const n=t[0],s=t[e>>1],o=t[e-1],r=n+(s<<8),i=e+(o<<2);return is(Z.mul(r).xor(Rr.mul(i))).mul(Z)}return Z}function Ju(t,e=t.length){const n=Z.add(e*2),s=B(t,0).mul(Ze),o=B(t,8),r=B(t,e-8).mul(n),i=B(t,e-16).mul(Z);return He(G(s.add(o),43).add(G(r,30)).add(i),s.add(G(o.add(Z),18)).add(r),n)}function ed(t,e=t.length){const n=Z.add(e*2),s=B(t,0).mul(Z),o=B(t,8),r=B(t,e-8).mul(n),i=B(t,e-16).mul(Z),a=G(s.add(o),43).add(G(r,30)).add(i),c=He(a,s.add(G(o.add(Z),18)).add(r),n),l=B(t,16).mul(n),u=B(t,24),d=a.add(B(t,e-32)).mul(n),h=c.add(B(t,e-24)).mul(n);return He(G(l.add(u),43).add(G(d,30)).add(h),l.add(G(u.add(s),18)).add(d),n)}function td(t,e=t.length){const n=Je.fromNumber(81,!0);if(e<=32)return e<=16?Zu(t,e):Ju(t,e);if(e<=64)return ed(t,e);let s=n,o=n.mul(Ze).add(113),r=is(o.mul(Z).add(113)).mul(Z),i=[Je.UZERO,Je.UZERO],a=[Je.UZERO,Je.UZERO];s=s.mul(Z).add(B(t,0));let c=0;const l=(e-1>>6)*64,u=l+(e-1&63)-63;do s=G(s.add(o).add(i[0]).add(B(t,c+8)),37).mul(Ze),o=G(o.add(i[1]).add(B(t,c+48)),42).mul(Ze),s=s.xor(a[1]),o=o.add(i[0]).add(B(t,c+40)),r=G(r.add(a[0]),33).mul(Ze),i=cn(t,c,i[1].mul(Ze),s.add(a[0])),a=cn(t,c+32,r.add(a[1]),o.add(B(t,c+16))),[r,s]=[s,r],c+=64;while(c!==l);const d=Ze.add(r.and(255).shl(1));return c=u,a[0]=a[0].add(e-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),s=G(s.add(o).add(i[0]).add(B(t,c+8)),37).mul(d),o=G(o.add(i[1]).add(B(t,c+48)),42).mul(d),s=s.xor(a[1].mul(9)),o=o.add(i[0].mul(9).add(B(t,c+40))),r=G(r.add(a[0]),33).mul(d),i=cn(t,c,i[1].mul(d),s.add(a[0])),a=cn(t,c+32,r.add(a[1]),o.add(B(t,c+16))),[r,s]=[s,r],He(He(i[0],a[0],d).add(is(o).mul(Rr)).add(r),He(i[1],a[1],d).add(s),d)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ft(t,e){return e==="string"?ot(t):Ns([t],e)}function nd(t,e){return t instanceof Float32Array&&e==="float32"||t instanceof Int32Array&&e==="int32"||t instanceof Uint8Array&&e==="bool"}function Ns(t,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(t)&&(t=St(t)),$().getBool("DEBUG")&&Ha(t,e),nd(t,e))return t;if(e==null||e==="float32"||e==="complex64")return new Float32Array(t);if(e==="int32")return new Int32Array(t);if(e==="bool"){const n=new Uint8Array(t.length);for(let s=0;s<n.length;++s)Math.round(t[s])!==0&&(n[s]=1);return n}else throw new Error(`Unknown data type ${e}`)}function Te(){return $().platform.now()}function ot(t,e="utf-8"){return e=e||"utf-8",$().platform.encode(t,e)}function Et(t,e="utf-8"){return e=e||"utf-8",$().platform.decode(t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class sd{constructor(e,n){this.backendTimer=e,this.logger=n,n==null&&(this.logger=new rd)}profileKernel(e,n,s){let o;const r=()=>{o=s()};let i;const a=Te();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(r);else{r();for(const l of o)l.dataSync();i=Promise.resolve({kernelMs:Te()-a})}if($().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<o.length;l++){const u=o[l];u.data().then(d=>{od(d,u.dtype,e)})}return{kernelName:e,outputs:o,inputs:n,timeMs:i.then(l=>l.kernelMs),extraInfo:i.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(e){const{kernelName:n,outputs:s,timeMs:o,inputs:r,extraInfo:i}=e;s.forEach(a=>{Promise.all([a.data(),o,i]).then(c=>{this.logger.logKernelProfile(n,a,c[0],c[1],r,c[2])})})}}function od(t,e,n){if(e!=="float32")return!1;for(let s=0;s<t.length;s++){const o=t[s];if(isNaN(o)||!isFinite(o))return console.warn(`Found ${o} in the result of '${n}'`),!0}return!1}class rd{logKernelProfile(e,n,s,o,r,i){const a=typeof o=="number"?vt(`${o}ms`,9):o.error,c=vt(e,25),l=n.rank,u=n.size,d=vt(n.shape.toString(),14);let h="";for(const f in r){const p=r[f];if(p!=null){const m=p.shape||n.shape,g=m.length;h+=`${f}: ${g}D ${g>0?m:""} `}}console.log(`%c${c}	%c${a}	%c${l}D ${d}	%c${u}	%c${h}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function id(t,e,n){const s={},o={};for(let c=0;c<e.length;c++)s[e[c].id]=!0;for(let c=0;c<t.length;c++){const l=t[c],u=l.inputs;for(const d in u){const h=u[d];let f=!1;for(let p=0;p<e.length;p++)if(s[h.id]){l.outputs.forEach(m=>s[m.id]=!0),f=!0,o[l.id]=!0;break}if(f)break}}const r={};r[n.id]=!0;const i={};for(let c=t.length-1;c>=0;c--){const l=t[c],u=l.inputs;for(let d=0;d<l.outputs.length;d++)if(r[l.outputs[d].id]){for(const h in u)r[u[h].id]=!0,i[l.id]=!0;break}}const a=[];for(let c=0;c<t.length;c++){const l=t[c];if(o[l.id]&&i[l.id]){const u={};for(const h in l.inputs){const f=l.inputs[h];s[f.id]&&(u[h]=f)}const d=Object.assign({},l);d.inputs=u,d.outputs=l.outputs,a.push(d)}}return a}function ad(t,e,n,s){for(let o=e.length-1;o>=0;o--){const r=e[o],i=[];if(r.outputs.forEach(c=>{const l=t[c.id];l!=null?i.push(l):i.push(null)}),r.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${r.kernelName}.`);const a=r.gradient(i);for(const c in r.inputs){if(!(c in a))throw new Error(`Cannot backprop through input ${c}. Available gradients found: ${Object.keys(a)}.`);const l=n(()=>a[c]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input ${c} must have 'float32' dtype, but has '${l.dtype}'`);const u=r.inputs[c];if(!q(l.shape,u.shape))throw new Error(`Error in gradient for op ${r.kernelName}. The gradient of input '${c}' has shape '${l.shape}', which does not match the shape of the input '${u.shape}'`);if(t[u.id]==null)t[u.id]=l;else{const d=t[u.id];t[u.id]=s(d,l),d.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const po=20,Gt=3,Wn=7;function cd(t,e,n,s){const o=Q(e),r=ld(t,e,n,o),i=e.length,a=mn(t,e,n,o,r),c=["Tensor"];return s&&(c.push(`  dtype: ${n}`),c.push(`  rank: ${i}`),c.push(`  shape: [${e}]`),c.push("  values:")),c.push(a.map(l=>"    "+l).join(`
`)),c.join(`
`)}function ld(t,e,n,s){const o=E(e),r=s[s.length-1],i=new Array(r).fill(0),a=e.length,c=n==="complex64"?Ht(t):t;if(a>1)for(let l=0;l<o/r;l++){const u=l*r;for(let d=0;d<r;d++)i[d]=Math.max(i[d],zt(c[u+d],0,n).length)}return i}function zt(t,e,n){let s;return Array.isArray(t)?s=`${parseFloat(t[0].toFixed(Wn))} + ${parseFloat(t[1].toFixed(Wn))}j`:En(t)?s=`'${t}'`:n==="bool"?s=kr(t):s=parseFloat(t.toFixed(Wn)).toString(),vt(s,e)}function kr(t){return t===0?"false":"true"}function mn(t,e,n,s,o,r=!0){const i=n==="complex64"?2:1,a=e[0],c=e.length;if(c===0){if(n==="complex64"){const m=Ht(t);return[zt(m[0],0,n)]}return n==="bool"?[kr(t[0])]:[t[0].toString()]}if(c===1){if(a>po){const g=Gt*i;let x=Array.from(t.slice(0,g)),C=Array.from(t.slice((a-Gt)*i,a*i));return n==="complex64"&&(x=Ht(x),C=Ht(C)),["["+x.map((b,w)=>zt(b,o[w],n)).join(", ")+", ..., "+C.map((b,w)=>zt(b,o[a-Gt+w],n)).join(", ")+"]"]}const m=n==="complex64"?Ht(t):Array.from(t);return["["+m.map((g,x)=>zt(g,o[x],n)).join(", ")+"]"]}const l=e.slice(1),u=s.slice(1),d=s[0]*i,h=[];if(a>po){for(let m=0;m<Gt;m++){const g=m*d,x=g+d;h.push(...mn(t.slice(g,x),l,n,u,o,!1))}h.push("...");for(let m=a-Gt;m<a;m++){const g=m*d,x=g+d;h.push(...mn(t.slice(g,x),l,n,u,o,m===a-1))}}else for(let m=0;m<a;m++){const g=m*d,x=g+d;h.push(...mn(t.slice(g,x),l,n,u,o,m===a-1))}const f=c===2?",":"";h[0]="["+h[0]+f;for(let m=1;m<h.length-1;m++)h[m]=" "+h[m]+f;let p=`,
`;for(let m=2;m<c;m++)p+=`
`;return h[h.length-1]=" "+h[h.length-1]+"]"+(r?"":p),h}function Ht(t){const e=[];for(let n=0;n<t.length;n+=2)e.push([t[n],t[n+1]]);return e}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class as{constructor(e,n,s){if(this.dtype=n,this.shape=e.slice(),this.size=E(e),s!=null){const o=s.length;k(o===this.size,()=>`Length of values '${o}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||Ce(n,this.size),this.strides=Q(e)}set(e,...n){n.length===0&&(n=[0]),k(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const s=this.locToIndex(n);this.values[s]=e}get(...e){e.length===0&&(e=[0]);let n=0;for(const o of e){if(o<0||o>=this.shape[n]){const r=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(r)}n++}let s=e[e.length-1];for(let o=0;o<e.length-1;++o)s+=this.strides[o]*e[o];return this.values[s]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let n=e[e.length-1];for(let s=0;s<e.length-1;++s)n+=this.strides[s]*e[s];return n}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];const n=new Array(this.shape.length);for(let s=0;s<n.length-1;++s)n[s]=Math.floor(e/this.strides[s]),e-=n[s]*this.strides[s];return n[n.length-1]=e,n}get rank(){return this.shape.length}toTensor(){return ke().makeTensor(this.values,this.shape,this.dtype)}}let ke=null,Ct=null;function ud(t){ke=t}function dd(t){Ct=t}class xe{constructor(e,n,s,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=n||"float32",this.size=E(e),this.strides=Q(e),this.dataId=s,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const e=await this.data();return Ct.buffer(this.shape,this.dtype,e)}bufferSync(){return Ct.buffer(this.shape,this.dtype,this.dataSync())}async array(){const e=await this.data();return no(this.shape,e,this.dtype==="complex64")}arraySync(){return no(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const e=ke().read(this.dataId);if(this.dtype==="string"){const n=await e;try{return n.map(s=>Et(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),ke().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();const e=ke().readSync(this.dataId);if(this.dtype==="string")try{return e.map(n=>Et(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();const e=await ke().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(ke().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return Ct.print(this,e)}clone(){return this.throwIfDisposed(),Ct.clone(this)}toString(e=!1){const n=this.dataSync();return cd(n,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),Ct.cast(this,e)}variable(e=!0,n,s){return this.throwIfDisposed(),ke().makeVariable(this,e,n,s)}}Object.defineProperty(xe,Symbol.hasInstance,{value:t=>!!t&&t.data!=null&&t.dataSync!=null&&t.throwIfDisposed!=null});function hd(){return Es("Tensor",()=>xe)}hd();class cs extends xe{constructor(e,n,s,o){super(e.shape,e.dtype,e.dataId,o),this.trainable=n,this.name=s}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!q(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);ke().disposeTensor(this),this.dataId=e.dataId,ke().incRef(this,null)}dispose(){ke().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(cs,Symbol.hasInstance,{value:t=>t instanceof xe&&t.assign!=null&&t.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var mo;(function(t){t.R0="R0",t.R1="R1",t.R2="R2",t.R3="R3",t.R4="R4",t.R5="R5",t.R6="R6"})(mo||(mo={}));var ls;(function(t){t.float32="float32",t.int32="int32",t.bool="int32",t.complex64="complex64"})(ls||(ls={}));var us;(function(t){t.float32="float32",t.int32="int32",t.bool="bool",t.complex64="complex64"})(us||(us={}));var ds;(function(t){t.float32="float32",t.int32="float32",t.bool="float32",t.complex64="complex64"})(ds||(ds={}));var hs;(function(t){t.float32="complex64",t.int32="complex64",t.bool="complex64",t.complex64="complex64"})(hs||(hs={}));const fd={float32:ds,int32:ls,bool:us,complex64:hs};function _e(t,e){if(t==="string"||e==="string"){if(t==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${t} with ${e}`)}return fd[t][e]}function Fs(t){return _e(t,"int32")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pd(t,e){if(t.dtype===e.dtype)return[t,e];const n=_e(t.dtype,e.dtype);return[t.cast(n),e.cast(n)]}function md(t){const e=[];return Nr(t,e,new Set),e}function Nr(t,e,n){if(t==null)return;if(t instanceof xe){e.push(t);return}if(!gd(t))return;const s=t;for(const o in s){const r=s[o];n.has(r)||(n.add(r),Nr(r,e,n))}}function gd(t){return Array.isArray(t)||typeof t=="object"}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gn(t){return t.kernelName!=null}class go{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(const e in this.registeredVariables)this.registeredVariables[e].dispose()}}class Rt{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new go}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const e=this.getSortedBackends();for(let n=0;n<e.length;n++){const s=e[n];if(await this.initializeBackend(s).success){await this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:e,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){const{asyncInit:n}=this.initializeBackend(e);if(n)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,n,s=1){return e in this.registryFactory?(Ne(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:n,priority:s},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw new Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;const{success:n,asyncInit:s}=this.initializeBackend(e);if(!(s?await n:n))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new sd(this.backendInstance),!0}setupRegisteredKernels(){io(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){io(e).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[e])})}initializeBackend(e){const n=this.registryFactory[e];if(n==null)throw new Error(`Cannot initialize backend ${e}, no registration found.`);try{const s=n.factory();if(s&&!(s instanceof tr)&&typeof s.then=="function"){const o=++this.pendingBackendInitId,r=s.then(i=>o<this.pendingBackendInitId?!1:(this.registry[e]=i,this.pendingBackendInit=null,!0)).catch(i=>(o<this.pendingBackendInitId||(this.pendingBackendInit=null,Ne(`Initialization of backend ${e} failed`),Ne(i.stack||i.message)),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}else return this.registry[e]=s,{success:!0,asyncInit:!1}}catch(s){return Ne(`Initialization of backend ${e} failed`),Ne(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw new Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,n)=>this.registryFactory[n].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){const e=this.getSortedBackends();for(let n=0;n<e.length;n++){const s=e[n],{success:o,asyncInit:r}=this.initializeBackend(s);if(r||o)return{name:s,asyncInit:r}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,n){const s=this.state.tensorInfo.get(n),o=s.backend,r=this.readSync(n),i=o.refCount(n);o.disposeData(n,!0),s.backend=e,e.move(n,r,s.shape,s.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,n){let s=null;if(n==null){if(typeof e!="function")throw new Error("Please provide a function to tidy()");n=e}else{if(typeof e!="string"&&!(e instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=e}let o;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(o),()=>(o=n(),o instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),o))}scopedRun(e,n,s){e();try{const o=s();return n(),o}catch(o){throw n(),o}}nextTensorId(){return Rt.nextTensorId++}nextVariableId(){return Rt.nextVariableId++}clone(e){const n=V.runKernel(Ts,{x:e}),s={x:e},o=i=>({x:()=>{const a="float32",c={x:i},l={dtype:a};return V.runKernel(Rs,c,l)}}),r=[];return this.addTapeNode(this.state.activeScope.name,s,[n],o,r,{}),n}runKernel(e,n,s){if(this.backendName==null&&this.backend,!(oo(e,this.backendName)!=null))throw new Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:n,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,n,s){const o=this.backend.numDataIds();let r=0;s.forEach(c=>{r+=c.dtype==="complex64"?3:1});const i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=o-n-r-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${e}'`)}runKernelFunc(e){let n,s=[];const o=this.isTapeOn(),r=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let c;const l=Gn(e)?e.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Gn(e)){const{kernelName:p,inputs:m,attrs:g}=e;this.backendName==null&&this.backend;const x=oo(p,this.backendName);k(x!=null,()=>`Cannot find registered kernel '${p}' for backend '${this.backendName}'`),a=()=>{const C=this.backend.numDataIds();c=x.kernelFunc({inputs:m,attrs:g,backend:this.backend});const b=Array.isArray(c)?c:[c];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(p,C,b);const w=b.map(v=>v.rank!=null?v:this.makeTensorFromTensorInfo(v));if(o){const v=this.getTensorsForGradient(p,m,w);s=this.saveTensorsForBackwardMode(v)}return w}}else{const{forwardFunc:p}=e,m=g=>{!o||(s=g.map(x=>this.keep(this.clone(x))))};a=()=>{const g=this.backend.numDataIds();c=this.tidy(()=>p(this.backend,m));const x=Array.isArray(c)?c:[c];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,g,x),x}}const{inputs:u,attrs:d}=e,h=Gn(e)?null:e.backwardsFunc;let f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=a():(f=this.profiler.profileKernel(l,u,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(f),n=f.outputs)}),o&&this.addTapeNode(l,u,n,h,s,d),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-r,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(u).map(p=>u[p]!=null?u[p].shape:null),outputShapes:n.map(p=>p.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(c)?n:n[0]}saveTensorsForBackwardMode(e){return e.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(e,n,s){const o=ro(e);if(o!=null){const r=o.inputsToSave||[],i=o.outputsToSave||[];let a;o.saveAllInputs?(k(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(n).map(l=>n[l])):a=r.map(l=>n[l]);const c=s.filter((l,u)=>i[u]);return a.concat(c)}return[]}makeTensor(e,n,s,o){if(e==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",o=o||this.backend;let r=e;s==="string"&&En(e[0])&&(r=e.map(c=>ot(c)));const i=o.write(r,n,s),a=new xe(n,s,i,this.nextTensorId());if(this.trackTensor(a,o),s==="string"){const c=this.state.tensorInfo.get(i),l=qa(r);this.state.numBytes+=l-c.bytes,c.bytes=l}return a}makeTensorFromDataId(e,n,s,o){s=s||"float32";const r={dataId:e,shape:n,dtype:s};return this.makeTensorFromTensorInfo(r,o)}makeTensorFromTensorInfo(e,n){const{dataId:s,shape:o,dtype:r}=e,i=new xe(o,r,s,this.nextTensorId());return this.trackTensor(i,n),i}makeVariable(e,n=!0,s,o){s=s||this.nextVariableId().toString(),o!=null&&o!==e.dtype&&(e=e.cast(o));const r=new cs(e,n,s,this.nextTensorId());if(this.state.registeredVariables[r.name]!=null)throw new Error(`Variable with name ${r.name} was already registered`);return this.state.registeredVariables[r.name]=r,this.incRef(r,this.backend),r}trackTensor(e,n){this.state.numTensors++,e.dtype==="string"&&this.state.numStringTensors++;let s=0;e.dtype!=="complex64"&&e.dtype!=="string"&&(s=e.size*ts(e.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:n||this.backend,dtype:e.dtype,shape:e.shape,bytes:s})),e instanceof cs||this.track(e)}incRef(e,n){this.trackTensor(e,n),this.backend.incRef(e.dataId)}removeDataId(e,n){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===n&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;const n=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),e.dtype!=="complex64"&&e.dtype!=="string"){const s=e.size*ts(e.dtype);this.state.numBytes-=s}n.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,n.backend)}disposeVariables(){for(const e in this.state.registeredVariables){const n=this.state.registeredVariables[e];this.disposeVariable(n)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){const e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons==null&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;const n=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(o=>o.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const o of this.state.activeProfile.kernels)o.kernelTimeMs=await o.kernelTimeMs,o.extraInfo=await o.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,n,s,o,r,i){const a={id:this.state.nextTapeNodeId++,kernelName:e,inputs:n,outputs:s,saved:r},c=ro(e);c!=null&&(o=c.gradFunc),o!=null&&(a.gradient=l=>(l=l.map((u,d)=>{if(u==null){const h=s[d],f=je(h.size,h.dtype);return this.makeTensor(f,h.shape,h.dtype)}return u}),o(l.length>1?l:l[0],r,i))),this.state.activeTape.push(a)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(n.name=e),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(e){const n=md(e),s=new Set(n.map(r=>r.id));for(let r=0;r<this.state.activeScope.track.length;r++){const i=this.state.activeScope.track[r];!i.kept&&!s.has(i.id)&&i.dispose()}const o=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(r=>{!r.kept&&r.scopeId===o.id&&this.track(r)})}gradients(e,n,s,o=!1){if(k(n.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const r=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));k(r instanceof xe,()=>"The result y returned by f() must be a tensor.");const i=id(this.state.activeTape,n,r);if(!o&&i.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const a={};a[r.id]=s==null?xd(r.shape):s,ad(a,i,l=>this.tidy(l),Cd);const c=n.map(l=>a[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(const u of l.saved)u.dispose()}),this.state.activeTape=null),{value:r,grads:c}})}customGrad(e){return k(to(e),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{k(n.every(a=>a instanceof xe),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const o={};n.forEach((a,c)=>{o[c]=a});const r=(a,c)=>(s=e(...n,c),k(s.value instanceof xe,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),k(to(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),i=(a,c)=>{const l=s.gradFunc(a,c),u=Array.isArray(l)?l:[l];k(u.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),k(u.every(h=>h instanceof xe),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const d={};return u.forEach((h,f)=>{d[f]=()=>h}),d};return this.runKernelFunc({forwardFunc:r,backwardsFunc:i,inputs:o})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,n){return this.state.tensorInfo.get(e).backend.readToGPU(e,n)}async time(e){const n=Te(),s=await this.backend.time(e);return s.wallMs=Te()-n,s}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new go;for(const e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Rt.nextTensorId=0;Rt.nextVariableId=0;function xd(t){const e=Qa(E(t),"float32");return V.makeTensor(e,t,"float32")}function Fr(){const t=lr();if(t._tfengine==null){const e=new Za(t);t._tfengine=new Rt(e)}return nc(t._tfengine.ENV),ud(()=>t._tfengine),t._tfengine}const V=Fr();function Cd(t,e){const n={a:t,b:e};return V.runKernel(ur,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bd(){return typeof navigator<"u"&&navigator!=null}function Ar(t){if(t||bd()){if(t||(t=navigator),t.product==="ReactNative")return!0;const e=t.userAgent||t.vendor||(typeof window<"u"?window.opera:"");if(!e){const n=t;return n.userAgentData&&n.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}return!1}function Dr(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ye=$();ye.registerFlag("DEBUG",()=>!1,t=>{t&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});ye.registerFlag("IS_BROWSER",()=>Dr());ye.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");ye.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));ye.registerFlag("PROD",()=>!1);ye.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>ye.getBool("DEBUG"));ye.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);ye.registerFlag("IS_TEST",()=>!1);ye.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0);ye.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);ye.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wd(t,e){let n=t;if(Oe(t))return e==="string"?[]:[t.length];if(!Array.isArray(t))return[];const s=[];for(;Array.isArray(n)||Oe(n)&&e!=="string";)s.push(n.length),n=n[0];return Array.isArray(t)&&$().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&Pr(t,s,[]),s}function Pr(t,e,n){if(n=n||[],!Array.isArray(t)&&!Oe(t)){k(e.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}k(e.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${t.length} elements`),k(t.length===e[0],()=>`Element arr[${n.join("][")}] should have ${e[0]} elements, but has ${t.length} elements`);const s=e.slice(1);for(let o=0;o<t.length;++o)Pr(t[o],s,n.concat(o))}function xo(t,e,n,s){if(t!=="string_or_numeric"){if(t==null)throw new Error("Expected dtype cannot be null.");if(t!=="numeric"&&t!==e||t==="numeric"&&e==="string")throw new Error(`Argument '${n}' passed to '${s}' must be ${t} tensor, but got ${e} tensor`)}}function ee(t,e,n,s="numeric"){if(t instanceof xe)return xo(s,t.dtype,e,n),t;let o=Rn(t);if(o!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(o=s),xo(s,o,e,n),t==null||!Oe(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string"){const c=t==null?"null":t.constructor.name;throw new Error(`Argument '${e}' passed to '${n}' must be a Tensor or TensorLike, but got '${c}'`)}const r=wd(t,o);!Oe(t)&&!Array.isArray(t)&&(t=[t]);const a=o!=="string"?Ns(t,o):St(t,[],!0);return V.makeTensor(a,r,o)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $d="__op";function pe(t){const e=Object.keys(t);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let n=e[0];const s=t[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+$d;const o=(...r)=>{V.startScope(n);try{const i=s(...r);return ar(i)&&console.error("Cannot return a Promise inside of tidy."),V.endScope(i),i}catch(i){throw V.endScope(null),i}};return Object.defineProperty(o,"name",{value:n,configurable:!0}),o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vd(t,e){const n=ee(t,"real","complex"),s=ee(e,"imag","complex");sr(n.shape,s.shape,`real and imag shapes, ${n.shape} and ${s.shape}, must match in call to tf.complex().`);const o={real:n,imag:s};return V.runKernel(dr,o)}const yd=pe({complex_:vd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sd(t,e,n,s){if(s==null&&(s=Rn(t)),s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Oe(t)&&!Array.isArray(t)&&typeof t!="number"&&typeof t!="boolean"&&typeof t!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){rr(e);const o=E(e),r=E(n);k(o===r,()=>`Based on the provided shape, [${e}], the tensor should have ${o} values but has ${r}`);for(let i=0;i<n.length;++i){const a=n[i],c=i===n.length-1?a!==E(e.slice(i)):!0;k(n[i]===e[i]||!c,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${e}). `)}}return!Oe(t)&&!Array.isArray(t)&&(t=[t]),e=e||n,t=s!=="string"?Ns(t,s):St(t,[],!0),V.makeTensor(t,e,s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const As=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Co(t){return As?Buffer.byteLength(t):new Blob([t]).size}function Id(t){if(As)return Buffer.from(t).toString("base64");const e=new Uint8Array(t);let n="";for(let s=0,o=e.length;s<o;s++)n+=String.fromCharCode(e[s]);return btoa(n)}function Ed(t){if(As){const s=Buffer.from(t,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const e=atob(t),n=new Uint8Array(e.length);for(let s=0;s<e.length;++s)n.set([e.charCodeAt(s)],s);return n.buffer}function Rd(t){if(t.length===1)return t[0];let e=0;t.forEach(o=>{e+=o.byteLength});const n=new Uint8Array(e);let s=0;return t.forEach(o=>{n.set(new Uint8Array(o),s),s+=o.byteLength}),n.buffer}function Or(t,e){const n={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:e};return t.signature!=null&&(n.signature=t.signature),t.userDefinedMetadata!=null&&(n.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(n.modelInitializer=t.modelInitializer),t.trainingConfig!=null&&(n.trainingConfig=t.trainingConfig),n}async function Td(t,e){const n={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy};if(t.trainingConfig!=null&&(n.trainingConfig=t.trainingConfig),t.weightsManifest!=null){const[s,o]=await e(t.weightsManifest);n.weightSpecs=s,n.weightData=o}return t.signature!=null&&(n.signature=t.signature),t.userDefinedMetadata!=null&&(n.userDefinedMetadata=t.userDefinedMetadata),t.modelInitializer!=null&&(n.modelInitializer=t.modelInitializer),n}function kn(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:t.modelTopology==null?0:Co(JSON.stringify(t.modelTopology)),weightSpecsBytes:t.weightSpecs==null?0:Co(JSON.stringify(t.weightSpecs)),weightDataBytes:t.weightData==null?0:t.weightData.byteLength}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class X{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return X.instance==null&&(X.instance=new X),X.instance}static registerSaveRouter(e){X.getInstance().saveRouters.push(e)}static registerLoadRouter(e){X.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return X.getHandlers(e,"save")}static getLoadHandlers(e,n){return X.getHandlers(e,"load",n)}static getHandlers(e,n,s){const o=[];return(n==="load"?X.getInstance().loadRouters:X.getInstance().saveRouters).forEach(i=>{const a=i(e,s);a!==null&&o.push(a)}),o}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fs="tensorflowjs",ps=1,nt="models_store",ze="model_info_store";function _r(){if(!$().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const t=typeof window>"u"?self:window,e=t.indexedDB||t.mozIndexedDB||t.webkitIndexedDB||t.msIndexedDB||t.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function ms(t){const e=t.result;e.createObjectStore(nt,{keyPath:"modelPath"}),e.createObjectStore(ze,{keyPath:"modelPath"})}class it{constructor(e){if(this.indexedDB=_r(),e==null||!e)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,n){return new Promise((s,o)=>{const r=this.indexedDB.open(fs,ps);r.onupgradeneeded=()=>ms(r),r.onsuccess=()=>{const i=r.result;if(n==null){const a=i.transaction(nt,"readonly"),l=a.objectStore(nt).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return i.close(),o(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(l.result.modelArtifacts)},l.onerror=u=>(i.close(),o(l.error)),a.oncomplete=()=>i.close()}else{const a=kn(n),c=i.transaction(ze,"readwrite");let l=c.objectStore(ze);const u=l.put({modelPath:this.modelPath,modelArtifactsInfo:a});let d;u.onsuccess=()=>{d=i.transaction(nt,"readwrite");const f=d.objectStore(nt).put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:a});f.onsuccess=()=>s({modelArtifactsInfo:a}),f.onerror=p=>{l=c.objectStore(ze);const m=l.delete(this.modelPath);m.onsuccess=()=>(i.close(),o(f.error)),m.onerror=g=>(i.close(),o(f.error))}},u.onerror=h=>(i.close(),o(u.error)),c.oncomplete=()=>{d==null?i.close():d.oncomplete=()=>i.close()}}},r.onerror=i=>o(r.error)})}}it.URL_SCHEME="indexeddb://";const Lr=t=>$().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(it.URL_SCHEME)?kd(t.slice(it.URL_SCHEME.length)):null;X.registerSaveRouter(Lr);X.registerLoadRouter(Lr);function kd(t){return new it(t)}function Nd(t){return t.startsWith(it.URL_SCHEME)?t.slice(it.URL_SCHEME.length):t}class Fd{constructor(){this.indexedDB=_r()}async listModels(){return new Promise((e,n)=>{const s=this.indexedDB.open(fs,ps);s.onupgradeneeded=()=>ms(s),s.onsuccess=()=>{const o=s.result,r=o.transaction(ze,"readonly"),a=r.objectStore(ze).getAll();a.onsuccess=()=>{const c={};for(const l of a.result)c[l.modelPath]=l.modelArtifactsInfo;e(c)},a.onerror=c=>(o.close(),n(a.error)),r.oncomplete=()=>o.close()},s.onerror=o=>n(s.error)})}async removeModel(e){return e=Nd(e),new Promise((n,s)=>{const o=this.indexedDB.open(fs,ps);o.onupgradeneeded=()=>ms(o),o.onsuccess=()=>{const r=o.result,i=r.transaction(ze,"readwrite"),a=i.objectStore(ze),c=a.get(e);let l;c.onsuccess=()=>{if(c.result==null)return r.close(),s(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{const u=a.delete(e),d=()=>{l=r.transaction(nt,"readwrite");const f=l.objectStore(nt).delete(e);f.onsuccess=()=>n(c.result.modelArtifactsInfo),f.onerror=p=>s(c.error)};u.onsuccess=d,u.onerror=h=>(d(),r.close(),s(c.error))}},c.onerror=u=>(r.close(),s(c.error)),i.oncomplete=()=>{l==null?r.close():l.oncomplete=()=>r.close()}},o.onerror=r=>s(o.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Be="/",bt="tensorflowjs_models",Br="info",Ad="model_topology",Dd="weight_specs",Pd="weight_data",Od="model_metadata";function Mr(t){return{info:[bt,t,Br].join(Be),topology:[bt,t,Ad].join(Be),weightSpecs:[bt,t,Dd].join(Be),weightData:[bt,t,Pd].join(Be),modelMetadata:[bt,t,Od].join(Be)}}function Ur(t){for(const e of Object.values(t))window.localStorage.removeItem(e)}function _d(t){const e=t.split(Be);if(e.length<3)throw new Error(`Invalid key format: ${t}`);return e.slice(1,e.length-1).join(Be)}function Ld(t){return t.startsWith(at.URL_SCHEME)?t.slice(at.URL_SCHEME.length):t}class at{constructor(e){if(!$().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,e==null||!e)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=Mr(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(e.modelTopology),s=JSON.stringify(e.weightSpecs),o=kn(e);try{this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,Id(e.weightData));const r={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature!=null?e.signature:void 0,userDefinedMetadata:e.userDefinedMetadata!=null?e.userDefinedMetadata:void 0,modelInitializer:e.modelInitializer!=null?e.modelInitializer:void 0,trainingConfig:e.trainingConfig!=null?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(r)),{modelArtifactsInfo:o}}catch{throw Ur(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${o.modelTopologyBytes}, weightSpecsBytes=${o.weightSpecsBytes}, weightDataBytes=${o.weightDataBytes}.`)}}}async load(){const e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=s;const o=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(o==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=o;const r=this.LS.getItem(this.keys.modelMetadata);if(r!=null){const a=JSON.parse(r);n.format=a.format,n.generatedBy=a.generatedBy,n.convertedBy=a.convertedBy,a.signature!=null&&(n.signature=a.signature),a.userDefinedMetadata!=null&&(n.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(n.modelInitializer=a.modelInitializer),a.trainingConfig!=null&&(n.trainingConfig=a.trainingConfig)}const i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=Ed(i),n}}at.URL_SCHEME="localstorage://";const Vr=t=>$().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(at.URL_SCHEME)?Bd(t.slice(at.URL_SCHEME.length)):null;X.registerSaveRouter(Vr);X.registerLoadRouter(Vr);function Bd(t){return new at(t)}class Md{constructor(){k($().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),k(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const e={},n=bt+Be,s=Be+Br;for(let o=0;o<this.LS.length;++o){const r=this.LS.key(o);if(r.startsWith(n)&&r.endsWith(s)){const i=_d(r);e[i]=JSON.parse(this.LS.getItem(r))}}return e}async removeModel(e){e=Ld(e);const n=Mr(e);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${e}'`);const s=JSON.parse(this.LS.getItem(n.info));return Ur(n),s}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bo="://";class Ge{constructor(){this.managers={}}static getInstance(){return Ge.instance==null&&(Ge.instance=new Ge),Ge.instance}static registerManager(e,n){k(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(bo)&&(e=e.slice(0,e.indexOf(bo))),k(e.length>0,()=>"scheme must not be an empty string.");const s=Ge.getInstance();k(s.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),s.managers[e]=n}static getManager(e){const n=this.getInstance().managers[e];if(n==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return n}static getSchemes(){return Object.keys(this.getInstance().managers)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ud{fetch(e,n){return fetch(e,n)}now(){return performance.now()}encode(e,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,n){return new TextDecoder(n).decode(e)}}if($().get("IS_BROWSER")){$().setPlatform("browser",new Ud);try{Ge.registerManager(at.URL_SCHEME,new Md)}catch{}try{Ge.registerManager(it.URL_SCHEME,new Fd)}catch{}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vd={importFetch:()=>require("node-fetch")};let zn;class Wd{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(e,n){return $().global.fetch!=null?$().global.fetch(e,n):(zn==null&&(zn=Vd.importFetch()),zn(e,n))}now(){const e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(e)}decode(e,n){return e.length===0?"":new this.util.TextDecoder(n).decode(e)}}$().get("IS_NODE")&&!$().get("IS_BROWSER")&&$().setPlatform("node",new Wd);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K(t,e="float32",n){return e=e||"float32",rr(t),new as(t,e,n)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gd(t,e){const n=ee(t,"x","cast");if(!Xa(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&n.dtype!=="string"||e!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:n},o={dtype:e};return V.runKernel(Rs,s,o)}const Wr=pe({cast_:Gd});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zd(t){const n={x:ee(t,"x","clone","string_or_numeric")};return V.runKernel(Ts,n)}const Hd=pe({clone_:zd});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xd(t,e=!1){console.log(t.toString(e))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Fr();const jd={buffer:K,cast:Wr,clone:Hd,print:Xd};dd(jd);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qd="model",Kd=".json",Yd=".weights.bin";function wo(t){return new Promise(e=>setTimeout(e)).then(t)}class ct{constructor(e){if(!$().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(ct.URL_SCHEME)&&(e=e.slice(ct.URL_SCHEME.length)),(e==null||e.length===0)&&(e=qd),this.modelJsonFileName=e+Kd,this.weightDataFileName=e+Yd}async save(e){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=window.URL.createObjectURL(new Blob([e.weightData],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const s=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],o=Or(e,s),r=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=r,await wo(()=>i.dispatchEvent(new MouseEvent("click"))),e.weightData!=null){const a=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;a.download=this.weightDataFileName,a.href=n,await wo(()=>a.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:kn(e)}}}}ct.URL_SCHEME="downloads://";const Qd=t=>$().getBool("IS_BROWSER")&&!Array.isArray(t)&&t.startsWith(ct.URL_SCHEME)?Zd(t.slice(ct.URL_SCHEME.length)):null;X.registerSaveRouter(Qd);function Zd(t="model"){return new ct(t)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $o(t,e,n,s){i(t),n=n==null?0:n,s=s==null?1:s,a(n,s);let o=0;const r=c=>(c.then(l=>{const u=n+ ++o/t.length*(s-n);return e(u),l}),c);function i(c){k(c!=null&&Array.isArray(c)&&c.length>0,()=>"promises must be a none empty array")}function a(c,l){k(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${c}`),k(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),k(l>=c,()=>`startFraction must be no more than endFraction, but got startFraction ${c} and endFraction ${l}`)}return Promise.all(t.map(r))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function Jd(t,e){e==null&&(e={});const n=e.fetchFunc==null?$().platform.fetch:e.fetchFunc,s=t.map(d=>n(d,e.requestInit,{isBinary:!0})),o=0,r=.5,a=(e.onProgress==null?await Promise.all(s):await $o(s,e.onProgress,o,r)).map(d=>d.arrayBuffer()),c=.5,l=1;return e.onProgress==null?await Promise.all(a):await $o(a,e.onProgress,c,l)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const eh="application/octet-stream",th="application/json";class Ds{constructor(e,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.onProgress=n.onProgress,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(k(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=$().platform.fetch,k(e!=null&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&k(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{}}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],o=Or(e,s);n.body.append("model.json",new Blob([JSON.stringify(o)],{type:th}),"model.json"),e.weightData!=null&&n.body.append("model.weights.bin",new Blob([e.weightData],{type:eh}),"model.weights.bin");const r=await this.fetch(this.path,n);if(r.ok)return{modelArtifactsInfo:kn(e),responses:[r]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${r.status}.`)}async load(){const e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw new Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await e.json()}catch{let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}const s=n.modelTopology,o=n.weightsManifest;if(s==null&&o==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return Td(n,r=>this.loadWeights(r))}async loadWeights(e){const n=Array.isArray(this.path)?this.path[1]:this.path,[s,o]=nh(n),r=this.weightPathPrefix||s,i=[];for(const u of e)i.push(...u.weights);const a=[],c=[];for(const u of e)for(const d of u.paths)this.weightUrlConverter!=null?c.push(this.weightUrlConverter(d)):a.push(r+d+o);this.weightUrlConverter&&a.push(...await Promise.all(c));const l=await Jd(a,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[i,Rd(l)]}}Ds.URL_SCHEME_REGEX=/^https?:\/\//;function nh(t){const e=t.lastIndexOf("/"),n=t.lastIndexOf("?"),s=t.substring(0,e),o=n>e?t.substring(n):"";return[s+"/",o]}function vo(t){return t.match(Ds.URL_SCHEME_REGEX)!=null}const Gr=(t,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let n=!0;if(Array.isArray(t)?n=t.every(s=>vo(s)):n=vo(t),n)return sh(t,e)}return null};X.registerSaveRouter(Gr);X.registerLoadRouter(Gr);function sh(t,e){return new Ds(t,e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mt(){return V}function oh(t,e){return V.tidy(t,e)}function rh(t,e,n=1){return V.registerBackend(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $n(t,e){const n=t.length,s=[];for(let o=0;o<n;o++){const r=n-1-o,i=t[r]||1;(e[e.length-1-o]||1)>1&&i===1&&s.unshift(r)}return s}function zr(t,e){const n=[];for(let s=0;s<e.length;s++){const o=t[t.length-s-1],r=e.length-s-1,i=e[r];(o==null||o===1&&i>1)&&n.unshift(r)}return n}function se(t,e){const n=[],s=Math.max(t.length,e.length);for(let o=0;o<s;o++){let r=t[t.length-o-1];r==null&&(r=1);let i=e[e.length-o-1];if(i==null&&(i=1),r===1)n.unshift(i);else if(i===1)n.unshift(r);else if(r!==i){const a=`Operands could not be broadcast together with shapes ${t} and ${e}.`;throw Error(a)}else n.unshift(r)}return n}function Hr(t,e){const n=t.shape.length,s=e.shape.length;if(n<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if(e.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.shape[s-1]>n)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[s-1]} vs. ${n}`);if(E(t.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${t.shape}.`);const o=e.shape,r=o[o.length-1];let i=1;for(let d=0;d<o.length-1;++d)i*=o[d];const a=t.shape,c=o.slice();c.pop();let l=1;for(let d=r;d<n;++d)l*=a[d],c.push(a[d]);const u=[...Q(t.shape).map(d=>d/l),1].slice(0,r);return[c,i,l,u]}function Xr(t,e,n){const s=e.rank>1?e.shape[e.rank-1]:1,o=e.rank>1?e.rank-1:1,r=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${e.shape}, shape: ${t}, sliceDim: ${s}, and batchDim: ${o}.`;if(n.rank<o)throw new Error(r+` update.rank < ${o}. `);if(t.length<s+(n.rank-o))throw new Error(r+` Output shape length < ${s+(n.rank-o)}`);if(n.rank!==o+t.length-s)throw new Error(r+` update.rank != ${o+t.length-s}`);for(let i=0;i<o;++i)if(n.shape[i]!==e.shape[i])throw new Error(r+` updates.shape[${i}] (${n.shape[i]}) != indices.shape[${i}] (${e.shape[i]}).`);for(let i=0;i<n.rank-o;++i)if(n.shape[i+o]!==t[i+s])throw new Error(r+` updates.shape[${i+o}] (${n.shape[i+o]}) != shape[${i+o}] (${t[i+o]})`)}function ih(t,e,n){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(e.size===0)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(t.size===0)throw new Error(`Updates specified for empty output. updates shape: ${t.shape}`)}Xr(n,e,t)}function Ps(t,e,n){const s=e.shape.length,o=s>1?e.shape[s-1]:1,r=n.length;let i=1;for(let d=o;d<r;++d)i*=n[d];const a=o<1?1:o,c=E(e.shape)/a,l=[...Q(n.slice(0,o)),1],u=E(n);return{sliceRank:o,numUpdates:c,sliceSize:i,strides:l,outputSize:u}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gs=-2,ah=-1;function jr(t,e,n){const s=t.shape.length;k(s===e.length,()=>`Error in slice${s}D: Length of begin ${e} must match the rank of the array (${s}).`),k(s===n.length,()=>`Error in slice${s}D: Length of size ${n} must match the rank of the array (${s}).`);for(let o=0;o<s;++o)k(e[o]+n[o]<=t.shape[o],()=>`Error in slice${s}D: begin[${o}] + size[${o}] (${e[o]+n[o]}) would overflow input.shape[${o}] (${t.shape[o]})`)}function ch(t){const e=[];let n=0;for(;t>0;)t&1&&e.push(n),t/=2,n++;return e}function qr(t,e,n){const s=[];for(let o=0;o<t.length;o++)s[o]=Math.ceil((e[o]-t[o])/n[o]);return s}function Kr(t,e,n,s){const o=[...t];for(let r=o.length;r<s.length;r++)o.push(1);for(let r=0;r<n;r++)r===0?o[e]=1:(o.splice(e,0,1),o.pop());return o}function Yr(t,e,n){return n<=t?n:n-(e-1)}function Qr(t,e){const n=[];for(let s=0;s<t;s++)n.push(e+s);return n}function lh(t,e,n,s,o,r,i,a,c){const l=t.length;let u=new Array(l),d=new Array(l),h=new Array(l);if(e.length&&n>0){const f=e[0],p=n+1;u=Zr(i,f,p,s,t),d=Jr(a,f,p,o,t),h=Kr(r,f,p,t)}else for(let f=0;f<l;f++)u[f]=ti(i,s,r,t,f,c),d[f]=ni(a,o,r,t,f,c),h[f]=ei(r,f,c);return{begin:u,end:d,strides:h}}function Zr(t,e,n,s,o){const r=[...o],i=Qr(n,e);for(let a=0;a<r.length;a++)if(i.indexOf(a)>-1)r[a]=0;else{const c=Yr(e,n,a);let l=s[c];t&1<<c&&(l=0),r[a]=l}return r}function Jr(t,e,n,s,o){const r=[...o],i=Qr(n,e);for(let a=0;a<r.length;a++)if(i.indexOf(a)>-1)r[a]=Number.MAX_SAFE_INTEGER;else{const c=Yr(e,n,a);let l=s[c];t&1<<c&&(l=Number.MAX_SAFE_INTEGER),r[a]=l}for(let a=0;a<r.length;a++){const c=o[a];r[a]<0&&(r[a]+=c),r[a]=xn(0,r[a],o[a])}return r}function ei(t,e,n){let s=t[e];return(n&1<<e||s==null)&&(s=1),s}function ti(t,e,n,s,o,r){let i=e[o];const a=n[o]||1;(t&1<<o||r&1<<o||i==null)&&(a>0?i=Number.MIN_SAFE_INTEGER:i=Number.MAX_SAFE_INTEGER);const c=s[o];return i<0&&(i+=c),i=xn(0,i,c-1),i}function ni(t,e,n,s,o,r){let i=e[o];const a=n[o]||1;(t&1<<o||r&1<<o||i==null)&&(a>0?i=Number.MAX_SAFE_INTEGER:i=Number.MIN_SAFE_INTEGER);const c=s[o];return i<0&&(i+=c),a>0?i=xn(0,i,c):i=xn(-1,i,c-1),i}function Os(t,e,n){let s=n.length;for(let o=0;o<n.length;o++)if(n[o]>1){s=o;break}for(let o=s+1;o<n.length;o++)if(e[o]>0||n[o]!==t[o])return!1;return!0}function _s(t,e){let n=t.length>0?t[t.length-1]:1;for(let s=0;s<t.length-1;s++)n+=t[s]*e[s];return n}function si(t,e,n){let s;const o=t.shape.length;typeof e=="number"?s=[e,...new Array(o-1).fill(0)]:e.length<o?s=e.concat(new Array(o-e.length).fill(0)):s=e.slice(),s.forEach(i=>{k(i!==-1,()=>"slice() does not support negative begin indexing.")});let r;return n==null?r=new Array(o).fill(-1):typeof n=="number"?r=[n,...new Array(o-1).fill(-1)]:n.length<o?r=n.concat(new Array(o-n.length).fill(-1)):r=n,r=r.map((i,a)=>i>=0?i:(k(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),t.shape[a]-s[a])),[s,r]}function oi(t,e,n,s,o,r,i,a,c){let l;if(s==null?(l=new Array(e.length),l.fill(1)):l=s,i!=null&&(i&i-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let u=!1;const d={dims:l.length,numAddAxisAfterEllipsis:0,begin:e.slice(),end:n.slice(),strides:l.slice(),beginMask:o,endMask:r,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:c};for(let b=0;b<d.dims;b++)u&&(1<<b&a)!==0&&d.numAddAxisAfterEllipsis++,1<<b&i&&(u=!0);u||(d.ellipsisMask|=1<<d.dims,d.dims++);const h={dims:t.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};uh(d,h);let f=!0,p=!0,m=!0;const g=[],x=[];for(let b=0;b<t.length;++b){if(h.strides[b]===0)throw Error(`strides[${b}] must be non-zero`);const w=!!(h.shrinkAxisMask&1<<b),v=t[b];if(v===-1){g.push(w?1:-1);continue}const I=[h.beginMask&1<<b,h.endMask&1<<b],S=[h.strides[b]>0?0:-1,h.strides[b]>0?v:v-1];if(w&&h.strides[b]<=0)throw Error("only stride 1 allowed on non-range indexing.");m=m&&h.strides[b]===1;const R=!!(h.beginMask&1<<b&&h.endMask&1<<b);if(h.beginValid&&h.endValid){if(w){const _=h.begin[b]<0?v+h.begin[b]:h.begin[b];if(h.begin[b]=_,h.end[b]=h.begin[b]+1,_<0||_>=v)throw Error(`slice index ${h.begin[b]} of dimension ${b} out of bounds.`)}else h.begin[b]=yo(h.begin[b],0,h.strides[b],v,I,S),h.end[b]=yo(h.end[b],1,h.strides[b],v,I,S);const P=h.strides[b]===1&&h.begin[b]===0&&h.end[b]===v;f=f&&P,p=p&&(b===0&&h.strides[b]===1||P)}else f=f&&h.strides[b]===1&&R,p=p&&(b===0&&h.strides[b]===1||R);let A,D=!1;if(h.beginValid&&h.endValid?(A=h.end[b]-h.begin[b],D=!0):w?(A=1,D=!0):R&&v>=0&&(h.strides[b]<0?A=-v:A=v,D=!0),D){let P;A===0||A<0!=h.strides[b]<0?P=0:P=Math.trunc(A/h.strides[b])+(A%h.strides[b]!==0?1:0),g.push(P)}else g.push(-1)}for(let b=0;b<h.finalShapeGatherIndices.length;++b){const w=h.finalShapeGatherIndices[b];w>=0?x.push(g[w]):w===gs&&x.push(1)}return{finalShapeSparse:x.filter((b,w)=>h.finalShapeGatherIndices[w]!==gs),finalShape:x,isIdentity:f,sliceDim0:p,isSimpleSlice:m,begin:h.begin,end:h.end,strides:h.strides}}function uh(t,e){e.beginMask=0,e.endMask=0,e.shrinkAxisMask=0;let n=0;e.beginValid=t.begin!=null,e.endValid=t.end!=null,e.begin=new Array(e.dims),e.end=new Array(e.dims),e.strides=new Array(e.dims),e.finalShapeGatherIndices=[],e.finalShapeGatherIndicesSparse=[],e.inputShapeGatherIndicesSparse=new Array(e.dims);for(let s=0;s<t.dims;s++)if(1<<s&t.ellipsisMask){const o=Math.min(e.dims-(t.dims-s)+1+t.numAddAxisAfterEllipsis,e.dims);for(;n<o;n++)e.begin[n]=0,e.end[n]=0,e.strides[n]=1,e.beginMask|=1<<n,e.endMask|=1<<n,e.finalShapeGatherIndices.push(n),e.finalShapeGatherIndicesSparse.push(-1),e.inputShapeGatherIndicesSparse[n]=s}else if(1<<s&t.newAxisMask)e.finalShapeGatherIndices.push(gs),e.finalShapeGatherIndicesSparse.push(-1);else{if(n===e.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${e.dims} dims, ${e.begin.length}.`);t.begin!=null&&(e.begin[n]=t.begin[s]),t.end!=null&&(e.end[n]=t.end[s]),e.strides[n]=t.strides[s],t.beginMask&1<<s&&(e.beginMask|=1<<n),t.endMask&1<<s&&(e.endMask|=1<<n),t.shrinkAxisMask&1<<s?(e.finalShapeGatherIndices.push(ah),e.finalShapeGatherIndicesSparse.push(-1),e.shrinkAxisMask|=1<<n):(e.finalShapeGatherIndices.push(n),e.finalShapeGatherIndicesSparse.push(s)),e.inputShapeGatherIndicesSparse[n]=s,n++}}function yo(t,e,n,s,o,r){if(o[e])return n>0?r[e]:r[e+1&1];{const i=t<0?s+t:t;return i<r[0]?r[0]:i>r[1]?r[1]:i}}const dh=Object.freeze(Object.defineProperty({__proto__:null,assertParamsValid:jr,maskToAxes:ch,computeOutShape:qr,stridesWithElidedDims:Kr,getNormalizedAxes:lh,startIndicesWithElidedDims:Zr,stopIndicesWithElidedDims:Jr,stridesForAxis:ei,startForAxis:ti,stopForAxis:ni,isSliceContinous:Os,computeFlatOffset:_s,parseSliceParams:si,sliceInfo:oi},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hh(t,e){let n=ee(t,"a","mul"),s=ee(e,"b","mul");[n,s]=pd(n,s);const o={a:n,b:s};return V.runKernel(pr,o)}const fh=pe({mul_:hh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ri(t,e,n,s,o="NHWC",r){const i=t[3],a=[...e,i],c=Pt(o);return De(t,a,n,r,s,null,null,c)}function At(t,e,n,s,o,r,i="channelsLast"){const[a,c]=vn(e);let l;if(i==="channelsLast")l=[a,c,t[3],t[3]];else if(i==="channelsFirst")l=[a,c,t[1],t[1]];else throw new Error(`Unknown dataFormat ${i}`);return De(t,l,n,s,o,r,!1,i)}function Qt(t,e,n,s,o,r,i="NDHWC"){const[a,c,l]=xs(e);let u,d;if(i==="NDHWC")d="channelsLast",u=[a,c,l,t[4],t[4]];else if(i==="NCDHW")d="channelsFirst",u=[a,c,l,t[1],t[1]];else throw new Error(`Unknown dataFormat ${i}`);return Zt(t,u,n,s,o,!1,d,r)}function De(t,e,n,s,o,r,i=!1,a="channelsLast"){let[c,l,u,d]=[-1,-1,-1,-1];if(a==="channelsLast")[c,l,u,d]=t;else if(a==="channelsFirst")[c,d,l,u]=t;else throw new Error(`Unknown dataFormat ${a}`);const[h,f,,p]=e,[m,g]=vn(n),[x,C]=vn(s),b=yt(h,x),w=yt(f,C),{padInfo:v,outHeight:I,outWidth:S}=gh(o,l,u,m,g,b,w,r,a),R=i?p*d:p;let A;return a==="channelsFirst"?A=[c,R,I,S]:a==="channelsLast"&&(A=[c,I,S,R]),{batchSize:c,dataFormat:a,inHeight:l,inWidth:u,inChannels:d,outHeight:I,outWidth:S,outChannels:R,padInfo:v,strideHeight:m,strideWidth:g,filterHeight:h,filterWidth:f,effectiveFilterHeight:b,effectiveFilterWidth:w,dilationHeight:x,dilationWidth:C,inShape:t,outShape:A,filterShape:e}}function Zt(t,e,n,s,o,r=!1,i="channelsLast",a){let[c,l,u,d,h]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[c,l,u,d,h]=t;else if(i==="channelsFirst")[c,h,l,u,d]=t;else throw new Error(`Unknown dataFormat ${i}`);const[f,p,m,,g]=e,[x,C,b]=xs(n),[w,v,I]=xs(s),S=yt(f,w),R=yt(p,v),A=yt(m,I),{padInfo:D,outDepth:P,outHeight:_,outWidth:z}=xh(o,l,u,d,x,C,b,S,R,A,a),H=r?g*h:g;let re;return i==="channelsFirst"?re=[c,H,P,_,z]:i==="channelsLast"&&(re=[c,P,_,z,H]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:u,inWidth:d,inChannels:h,outDepth:P,outHeight:_,outWidth:z,outChannels:H,padInfo:D,strideDepth:x,strideHeight:C,strideWidth:b,filterDepth:f,filterHeight:p,filterWidth:m,effectiveFilterDepth:S,effectiveFilterHeight:R,effectiveFilterWidth:A,dilationDepth:w,dilationHeight:v,dilationWidth:I,inShape:t,outShape:re,filterShape:e}}function ph(t,e,n,s,o){s==null&&(s=Ls(t,e,n));const r=t[0],i=t[1],a=rt((r-e+2*s)/n+1,o),c=rt((i-e+2*s)/n+1,o);return[a,c]}function mh(t,e,n,s,o,r){o==null&&(o=Ls(t,e,s));const i=t[0],a=t[1],c=t[2],l=rt((i-e+2*o)/s+1,r),u=rt((a-e+2*o)/s+1,r),d=rt((c-e+2*o)/s+1,r);return[l,u,d,n]}function Ls(t,e,n,s=1){const o=yt(e,s);return Math.floor((t[0]*(n-1)-n+o)/2)}function vn(t){return typeof t=="number"?[t,t,t]:t.length===2?[t[0],t[1],1]:t}function xs(t){return typeof t=="number"?[t,t,t]:t}function yt(t,e){return e<=1?t:t+(t-1)*(e-1)}function gh(t,e,n,s,o,r,i,a,c){let l,u,d;if(typeof t=="number"){l={top:t,bottom:t,left:t,right:t,type:t===0?"VALID":"NUMBER"};const f=ph([e,n],r,s,t,a);u=f[0],d=f[1]}else if(t==="same"){u=Math.ceil(e/s),d=Math.ceil(n/o);const h=Math.max(0,(u-1)*s+r-e),f=Math.max(0,(d-1)*o+i-n),p=Math.floor(h/2),m=h-p,g=Math.floor(f/2),x=f-g;l={top:p,bottom:m,left:g,right:x,type:"SAME"}}else if(t==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},u=Math.ceil((e-r+1)/s),d=Math.ceil((n-i+1)/o);else if(typeof t=="object"){const h=c==="channelsLast"?t[1][0]:t[2][0],f=c==="channelsLast"?t[1][1]:t[2][1],p=c==="channelsLast"?t[2][0]:t[3][0],m=c==="channelsLast"?t[2][1]:t[3][1];l={top:h,bottom:f,left:p,right:m,type:h===0&&f===0&&p===0&&m===0?"VALID":"EXPLICIT"},u=rt((e-r+h+f)/s+1,a),d=rt((n-i+p+m)/o+1,a)}else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:l,outHeight:u,outWidth:d}}function xh(t,e,n,s,o,r,i,a,c,l,u){let d,h,f,p;if(typeof t=="number"){d={top:t,bottom:t,left:t,right:t,front:t,back:t,type:t===0?"VALID":"NUMBER"};const g=mh([e,n,s,1],a,1,o,t,u);h=g[0],f=g[1],p=g[2]}else if(t==="same"){h=Math.ceil(e/o),f=Math.ceil(n/r),p=Math.ceil(s/i);const m=(h-1)*o+a-e,g=(f-1)*r+c-n,x=(p-1)*i+l-s,C=Math.floor(m/2),b=m-C,w=Math.floor(g/2),v=g-w,I=Math.floor(x/2),S=x-I;d={top:w,bottom:v,left:I,right:S,front:C,back:b,type:"SAME"}}else if(t==="valid")d={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},h=Math.ceil((e-a+1)/o),f=Math.ceil((n-c+1)/r),p=Math.ceil((s-l+1)/i);else throw Error(`Unknown padding parameter: ${t}`);return{padInfo:d,outDepth:h,outHeight:f,outWidth:p}}function rt(t,e){if(!e)return Math.trunc(t);switch(e){case"round":return Math.round(t);case"ceil":return Math.ceil(t);case"floor":return Math.floor(t);default:throw new Error(`Unknown roundingMode ${e}`)}}function Cs(t){const[e,n,s]=vn(t);return e===1&&n===1&&s===1}function Dt(t,e){return Cs(t)||Cs(e)}function Pt(t){if(t==="NHWC")return"channelsLast";if(t==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${t}`)}function Ch(t,e,n){if(n!=null){if(typeof e=="string")throw Error(`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);if(typeof e=="number")k(Cn(e),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${e}.`);else if(typeof e=="object")e.forEach(s=>{s.forEach(o=>{k(Cn(o),()=>`Error in ${t}: pad must be an integer when using dimRoundingMode ${n} but got pad ${o}.`)})});else throw Error(`Error in ${t}: Unknown padding parameter: ${e}`)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bh(t,e){const s={x:ee(t,"x","reshape","string_or_numeric")},o={shape:e};return V.runKernel(xr,s,o)}const wh=pe({reshape_:bh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $h(t){const n={x:ee(t,"x","sigmoid","float32")};return V.runKernel(br,n)}const vh=pe({sigmoid_:$h});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yh(t){const n={x:ee(t,"x","elu","float32")};return V.runKernel(hr,n)}const Sh=pe({elu_:yh});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bs(t,e){for(let n=0;n<t.length;++n)if(t[t.length-n-1]!==e-1-n)return!1;return!0}function ii(t,e,n){const s=t.length+e.length,o=[];let r=0,i=0;for(let a=0;a<s;a++)n.indexOf(a)===-1?o.push(t[r++]):o.push(e[i++]);return o}function Le(t,e){const n=[],s=t.length;for(let r=0;r<s;r++)e.indexOf(r)===-1&&n.push(t[r]);const o=e.map(r=>t[r]);return[n,o]}function Ue(t,e){const n=e.map(s=>1);return ii(t,n,e)}function Pe(t,e,n){k(Bs(e,n),()=>`${t} supports only inner-most axes for now. Got axes ${e} and rank-${n} input.`)}function Se(t,e){if(Bs(t,e))return null;const n=[];for(let s=0;s<e;++s)t.indexOf(s)===-1&&n.push(s);return t.forEach(s=>n.push(s)),n}function Ms(t){return t.map((e,n)=>[n,e]).sort((e,n)=>e[1]-n[1]).map(e=>e[0])}function Ie(t,e){const n=[];for(let s=e-t;s<e;++s)n.push(s);return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ih(t,e){if((Oe(t)&&e!=="string"||Array.isArray(t))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&Oe(t)&&!(t instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Sd(t,[],[],e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Eh(t,e=null,n=!1){let s=ee(t,"x","sum");s.dtype==="bool"&&(s=Wr(s,"int32"));const o={x:s},r={axis:e,keepDims:n};return V.runKernel(wr,o,r)}const Rh=pe({sum_:Eh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Th(t,e=.2){const s={x:ee(t,"x","leakyRelu")},o={alpha:e};return V.runKernel(fr,s,o)}const kh=pe({leakyRelu_:Th});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bs(t,e="float32"){if(e==="complex64"){const s=bs(t,"float32"),o=bs(t,"float32");return yd(s,o)}const n=je(E(t),e);return V.makeTensor(n,t,e)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nh(t,e){const n=ee(t,"x","prelu"),s=ee(e,"alpha","prelu"),o={x:n,alpha:s};return V.runKernel(mr,o)}const Fh=pe({prelu_:Nh});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ah(t){const n={x:ee(t,"x","relu")};return V.runKernel(gr,n)}const Dh=pe({relu_:Ah});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ph(t){const n={x:ee(t,"x","relu6")};return V.runKernel(Cr,n)}const Oh=pe({relu6_:Ph});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _h(t,e=0){const s={x:ee(t,"x","step")},o={alpha:e};return V.runKernel($r,s,o)}const Lh=pe({step_:_h});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bh(t,e){const n=[];for(let r=0;r<e.length;r++)e[r]&&n.push(r);const s=K(t,"int32"),o=K([n.length,t.length],"int32");for(let r=0;r<n.length;r++){const i=s.indexToLoc(n[r]),a=r*t.length;o.values.set(i,a)}return o.toTensor()}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mh(t,e,n){if(n==null||n==="linear")return t;if(n==="relu")return fh(t,Lh(e));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function Uh(t,e){let n=e;const s=zr(t.shape,e.shape);return s.length>0&&(n=Rh(n,s)),wh(n,t.shape)}function Vh(t,e,n,s){if(e==="linear")return t;if(e==="relu")return Dh(t);if(e==="elu")return Sh(t);if(e==="relu6")return Oh(t);if(e==="prelu")return Fh(t,n);if(e==="leakyrelu")return kh(t,s);if(e==="sigmoid")return vh(t);throw new Error(`Unknown fused activation ${e}.`)}const Wh=(t,e)=>!(t>0)||e==="linear";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gh(t,e,n){const s=zh(t,e,n),o=s<0?-(s+1):s;t.splice(o,0,e)}function zh(t,e,n){return Xh(t,e,n||Hh)}function Hh(t,e){return t>e?1:t<e?-1:0}function Xh(t,e,n){let s=0,o=t.length,r=0,i=!1;for(;s<o;){r=s+(o-s>>>1);const a=n(e,t[r]);a>0?s=r+1:(o=r,i=!a)}return i?s:-s-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jh(t,e,n,s,o){return Us(t,e,n,s,o,0)}function qh(t,e,n,s,o,r){return Us(t,e,n,s,o,0,!1,r,!0)}function Kh(t,e,n,s,o,r){return Us(t,e,n,s,o,r,!0)}function Us(t,e,n,s,o,r,i=!1,a=!1,c=!1){const l=[];for(let g=0;g<e.length;g++)e[g]>o&&l.push({score:e[g],boxIndex:g,suppressBeginIndex:0});l.sort(So);const u=r>0?-.5/r:0,d=[],h=[];for(;d.length<n&&l.length>0;){const g=l.pop(),{score:x,boxIndex:C,suppressBeginIndex:b}=g;if(x<o)break;let w=!1;for(let v=d.length-1;v>=b;--v){const I=Yh(t,C,d[v]);if(I>=s){w=!0;break}if(g.score=g.score*Qh(s,u,I),g.score<=o)break}g.suppressBeginIndex=d.length,w||(g.score===x?(d.push(C),h.push(g.score)):g.score>o&&Gh(l,g,So))}const f=d.length,p=n-f;a&&p>0&&(d.push(...new Array(p).fill(0)),h.push(...new Array(p).fill(0)));const m={selectedIndices:d};return i&&(m.selectedScores=h),c&&(m.validOutputs=f),m}function Yh(t,e,n){const s=t.subarray(e*4,e*4+4),o=t.subarray(n*4,n*4+4),r=Math.min(s[0],s[2]),i=Math.min(s[1],s[3]),a=Math.max(s[0],s[2]),c=Math.max(s[1],s[3]),l=Math.min(o[0],o[2]),u=Math.min(o[1],o[3]),d=Math.max(o[0],o[2]),h=Math.max(o[1],o[3]),f=(a-r)*(c-i),p=(d-l)*(h-u);if(f<=0||p<=0)return 0;const m=Math.max(r,l),g=Math.max(i,u),x=Math.min(a,d),C=Math.min(c,h),b=Math.max(x-m,0)*Math.max(C-g,0);return b/(f+p-b)}function Qh(t,e,n){const s=Math.exp(e*n*n);return n<=t?s:0}function So(t,e){return t.score-e.score||t.score===e.score&&e.boxIndex-t.boxIndex}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zh=(()=>typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:t=>t())();function Jh(){return new Promise(t=>Zh(()=>t()))}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ai(t,e){const n=t[0].length;t.forEach((o,r)=>{k(o.length===n,()=>`Error in concat${n}D: rank of tensors[${r}] must be the same as the rank of the rest (${n})`)}),k(e>=0&&e<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);const s=t[0];t.forEach((o,r)=>{for(let i=0;i<n;i++)k(i===e||o[i]===s[i],()=>`Error in concat${n}D: Shape of tensors[${r}] (${o}) does not match the shape of the rest (${s}) along the non-concatenated axis ${r}.`)})}function lt(t,e){const n=t[0].slice();for(let s=1;s<t.length;s++)n[e]+=t[s][e];return n}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vs=30;function Nn(t){return t<=Vs?t:ns(t,Math.floor(Math.sqrt(t)))}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ci(t,e,n){const s=n*(typeof t=="number"?t:t[0]),o=e*(typeof t=="number"?t:t[1]);return[s,o]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ws(t,e,n,s=!0){let o=[];if(s)o=o.concat(e.slice(0)),o.push(t[0]/n),o=o.concat(t.slice(1));else{o=o.concat(t[0]);const r=e.length;for(let i=0;i<r;++i)o=o.concat([t[i+1]/e[i],e[i]]);o=o.concat(t.slice(r+1))}return o}function Gs(t,e,n=!0){const s=[];if(n){s.push(e);for(let o=e+1;o<t;++o)o<=2*e?(s.push(o),s.push(o-(e+1))):s.push(o)}else{const o=[],r=[];for(let i=1;i<t;++i)i>=e*2+1||i%2===1?r.push(i):o.push(i);s.push(...o),s.push(0),s.push(...r)}return s}function zs(t,e,n,s=!0){const o=[];s?o.push(t[0]/n):o.push(t[0]*n);for(let r=1;r<t.length;++r)r<=e.length?s?o.push(e[r-1]*t[r]):o.push(t[r]/e[r-1]):o.push(t[r]);return o}function li(t,e){const n=[0];for(let s=0;s<e;++s)n.push(t[s][0]);return n}function ui(t,e,n){const s=t.slice(0,1);for(let o=0;o<n;++o)s.push(t[o+1]-e[o][0]-e[o][1]);return s}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const di=1.7580993408473768,hi=1.0507009873554805;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fi=.3275911,pi=.254829592,mi=-.284496736,gi=1.421413741,xi=-1.453152027,Ci=1.061405429;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ws(t,e){if(t.length!==e.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${t.length}, imag: ${e.length}.`);const n=new Float32Array(t.length*2);for(let s=0;s<n.length;s+=2)n[s]=t[s/2],n[s+1]=e[s/2];return n}function ef(t){const e=new Float32Array(t.length/2),n=new Float32Array(t.length/2);for(let s=0;s<t.length;s+=2)e[s/2]=t[s],n[s/2]=t[s+1];return{real:e,imag:n}}function tf(t){const e=Math.ceil(t.length/4),n=new Float32Array(e),s=new Float32Array(e);for(let o=0;o<t.length;o+=4)n[Math.floor(o/4)]=t[o],s[Math.floor(o/4)]=t[o+1];return{real:n,imag:s}}function nf(t){const e=Math.floor(t.length/4),n=new Float32Array(e),s=new Float32Array(e);for(let o=2;o<t.length;o+=4)n[Math.floor(o/4)]=t[o],s[Math.floor(o/4)]=t[o+1];return{real:n,imag:s}}function sf(t,e){const n=t[e*2],s=t[e*2+1];return{real:n,imag:s}}function of(t,e,n,s){t[s*2]=e,t[s*2+1]=n}function rf(t,e){const n=new Float32Array(t/2),s=new Float32Array(t/2);for(let o=0;o<Math.ceil(t/2);o++){const r=(e?2:-2)*Math.PI*(o/t);n[o]=Math.cos(r),s[o]=Math.sin(r)}return{real:n,imag:s}}function af(t,e,n){const s=(n?2:-2)*Math.PI*(t/e),o=Math.cos(s),r=Math.sin(s);return{real:o,imag:r}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hn="->",cf=/->/g,Io=",",Eo="...";function bi(t,e){t=t.replace(/\s/g,"");const n=(t.length-t.replace(cf,"").length)/Hn.length;if(n<1)throw new Error("Equations without an arrow are not supported.");if(n>1)throw new Error(`Equation must contain exactly one arrow ("${Hn}").`);const[s,o]=t.split(Hn);k(s.indexOf(Eo)===-1,()=>`The ellipsis notation ("${Eo}") is not supported yet.`);const r=s.split(Io),i=r.length;if(e!==i)throw new Error(`Expected ${i} input tensors, received ${e}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const a=[];for(let h=0;h<o.length;++h){const f=o[h];if(!r.some(p=>p.indexOf(f)!==-1))throw new Error(`Output subscripts contain the label ${f} not present in the input subscripts.`);a.indexOf(f)===-1&&a.push(f)}for(let h=0;h<s.length;++h){const f=s[h];a.indexOf(f)===-1&&f!==Io&&a.push(f)}const c=new Array(r.length);for(let h=0;h<i;++h){if(new Set(r[h].split("")).size!==r[h].length)throw new Error(`Found duplicate axes in input component ${r[h]}. Support for duplicate axes in input is not implemented yet.`);c[h]=[];for(let f=0;f<r[h].length;++f)c[h].push(a.indexOf(r[h][f]))}const l=a.length,u=o.length,d=[];for(let h=u;h<l;++h)d.push(h);return{allDims:a,summedDims:d,idDims:c}}function wi(t,e){let n=new Array(t);n.fill(-1);for(let o=0;o<e.length;++o)n[e[o]]=o;const s=[];for(let o=0;o<t;++o)n[o]===-1&&s.push(o);return n=n.filter(o=>o!==-1),{permutationIndices:n,expandDims:s}}function $i(t,e,n){const s=new Array(t);for(let o=0;o<n.length;++o){const r=n[o].shape;for(let i=0;i<e[o].length;++i)s[e[o][i]]===void 0?s[e[o][i]]=r[i]:k(s[e[o][i]]===r[i],()=>`Expected dimension ${s[e[o][i]]} at axis ${i} of input shaped ${JSON.stringify(r)}, but got dimension ${r[i]}`)}}function vi(t,e){const n=t,s=[];let o=0;t.length===0&&n.push(-1),o=t.length+1;for(let i=0;i<o;++i)s.push([]);const r=[];for(let i=0;i<n.length;++i){const a=n[i],c=lf(e,a);for(const l of c)r.indexOf(l)===-1&&(s[i].push(l),r.push(l))}return{path:n,steps:s}}function yi(t){return t.every((e,n)=>e===n)}function lf(t,e){const n=[];for(let s=0;s<t.length;++s)(t[s].length===0||t[s].indexOf(e)!==-1||e===-1)&&n.push(s);return n}function Si(t,e,n=0){let s=[];if(typeof e=="number")k(t.shape[n]%e===0,()=>"Number of splits must evenly divide the axis."),s=new Array(e).fill(t.shape[n]/e);else{const o=e.reduce((i,a)=>(a===-1&&(i+=1),i),0);k(o<=1,()=>"There should be only one negative value in split array.");const r=e.indexOf(-1);if(r!==-1){const i=e.reduce((a,c)=>c>0?a+c:a);e[r]=t.shape[n]-i}k(t.shape[n]===e.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),s=e}return s}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ii(t){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${t}`}function Ei(t,e){return`indices(${t}, 0) is invalid: ${e} < 0`}function Ri(t,e,n){return`indices(${t}, 0) is invalid: ${e} >= ${n}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ti(t,e){return`only one output dimension may be -1, not both ${t} and ${e}`}function ki(t,e){return`size ${t} must be non-negative, not ${e}`}function Ni(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function Fi(t,e){const n=E(t),s=E(e);return`Input to reshape is a SparseTensor with ${n}
  dense values, but the requested shape requires a multiple of ${s}. inputShape=${t} outputShape= ${e}`}function Ai(t,e){const n=E(t),s=E(e);return`Input to reshape is a tensor with ${n} dense values, but the requested shape has ${s}. inputShape=${t} outputShape=${e}`}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $s(){return"segment ids must be >= 0"}function Di(){return"segment ids are not increasing"}function Pi(t,e){return`Segment id ${t} out of range [0, ${e}), possibly because segmentIds input is not sorted.`}function Oi(t,e,n){return`Bad: indices[${t}] == ${e} out of range [0, ${n})`}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _i(t,e){let n=!1,s;for(t<=Vs?(s=t,n=!0):s=ns(t,Math.floor(Math.sqrt(t)));!n;)s>e||s===t?n=!0:s=ns(t,s+1);return s}function Li(t,e,n){const s=[],o=t.length;for(let r=0;r<o;r++)r!==e?s.push(t[r]):s.push(n);return s}function Bi(t,e,n,s){const o=e.shape.length,r=t.shape.length;if(s!==0&&(s<-o||s>o))throw new Error(`Expect batchDims in the range of [-${o}, ${o}], but got ${s}`);if(s<0&&(s+=o),s>r)throw new Error(`batchDims (${s}) must be less than rank(x) (
    ${r}).`);if(n<s)throw new Error(`batchDims (${s}) must be less than or equal to axis (${n}).`);for(let d=0;d<s;++d)if(t.shape[d]!==e.shape[d])throw new Error(`x.shape[${d}]: ${t.shape[d]} should be equal to indices.shape[${d}]: ${e.shape[d]}.`);const i=t.shape[n],a=[];let c=1,l=1,u=1;for(let d=0;d<s;++d)a.push(t.shape[d]),c*=t.shape[d];for(let d=s;d<n;d++)a.push(t.shape[d]),l*=t.shape[d];for(let d=s;d<o;d++)a.push(e.shape[d]);for(let d=n+1;d<r;d++)a.push(t.shape[d]),u*=t.shape[d];return{batchSize:c,sliceSize:u,outerSize:l,dimSize:i,outputShape:a}}const uf=Object.freeze(Object.defineProperty({__proto__:null,segOpComputeOptimalWindowSize:_i,computeOutShape:Li,collectGatherOpShapeInfo:Bi},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jt(t){try{return t.map(e=>Et(e))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function Mi(t){return t.map(e=>ot(e))}const df=Object.freeze(Object.defineProperty({__proto__:null,slice_util:dh,segment_util:uf,fromUint8ToStringArray:jt,fromStringArrayToUint8:Mi,upcastType:_e,axesAreInnerMostDims:Bs,combineLocations:ii,computeOutAndReduceShapes:Le,expandShapeToKeepDim:Ue,assertAxesAreInnerMostDims:Pe,getAxesPermutation:Se,getUndoAxesPermutation:Ms,getInnerMostAxes:Ie,getBroadcastDims:$n,getReductionAxes:zr,assertAndGetBroadcastShape:se,assertParamsConsistent:ai,computeOutShape:lt,computeDilation2DInfo:ri,computePool2DInfo:At,computePool3DInfo:Qt,computeConv2DInfo:De,computeConv3DInfo:Zt,computeDefaultPad:Ls,tupleValuesAreOne:Cs,eitherStridesOrDilationsAreOne:Dt,convertConv2DDataFormat:Pt,checkPadOnDimRoundingMode:Ch,getFusedDyActivation:Mh,getFusedBiasGradient:Uh,applyActivation:Vh,shouldFuse:Wh,PARALLELIZE_THRESHOLD:Vs,computeOptimalWindowSize:Nn,getImageCenter:ci,getReshaped:Ws,getPermuted:Gs,getReshapedPermuted:zs,getSliceBeginCoords:li,getSliceSize:ui,prepareAndValidate:Hr,validateUpdateShape:Xr,validateInput:ih,calculateShapes:Ps,SELU_SCALEALPHA:di,SELU_SCALE:hi,ERF_P:fi,ERF_A1:pi,ERF_A2:mi,ERF_A3:gi,ERF_A4:xi,ERF_A5:Ci,warn:Ne,log:Xu,mergeRealAndImagArrays:ws,splitRealAndImagArrays:ef,complexWithEvenIndex:tf,complexWithOddIndex:nf,getComplexWithIndex:sf,assignToTypedArray:of,exponents:rf,exponent:af,decodeEinsumEquation:bi,getEinsumPermutation:wi,checkEinsumDimSizes:$i,getEinsumComputePath:vi,isIdentityPermutation:yi,prepareSplitSize:Si,getSparseFillEmptyRowsIndicesDenseShapeMismatch:Ii,getSparseFillEmptyRowsNegativeIndexErrorMessage:Ei,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:Ri,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:Ti,getSparseReshapeNegativeOutputDimErrorMessage:ki,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:Ni,getSparseReshapeInputOutputMultipleErrorMessage:Fi,getSparseReshapeInputOutputMismatchErrorMessage:Ai,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:$s,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:Di,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:Pi,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:Oi},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const et={},Xn={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function hf(t,e){et[t]=e}function Fe(t,e){if(!(t in et)||e!=null){const s=pf(t,e);if(s!==null)et[t]=s;else return console.log("Could not get context for WebGL version",t),null}const n=et[t];return n==null||n.isContextLost()?(delete et[t],Fe(t)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),et[t])}function ff(t){if(typeof OffscreenCanvas<"u"&&t===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function pf(t,e){if(t!==1&&t!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");const n=e==null?ff(t):e;return n.addEventListener("webglcontextlost",s=>{s.preventDefault(),delete et[t]},!1),t===1?n.getContext("webgl",Xn)||n.getContext("experimental-webgl",Xn):n.getContext("webgl2",Xn)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var qt;(function(t){t[t.DENSE=0]="DENSE",t[t.SHARED_BATCH=1]="SHARED_BATCH"})(qt||(qt={}));var fe;(function(t){t[t.RENDER=0]="RENDER",t[t.UPLOAD=1]="UPLOAD",t[t.PIXELS=2]="PIXELS",t[t.DOWNLOAD=3]="DOWNLOAD"})(fe||(fe={}));var j;(function(t){t[t.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",t[t.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",t[t.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",t[t.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",t[t.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(j||(j={}));function Jt(t,e){return[e,t]}function mf(t,e){return t*e}function ln(t){const e=E(t),n=Math.ceil(e/4);return es(n)}function Ot(t,e){return[Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(t/2))]}function gf(t,e){const[n,s]=Ot(t,e);return n*s*4}function Hs(t,e){const n=t;let s,o,r,i,a,c,l,u,d,h;return $().getNumber("WEBGL_VERSION")===2?(s=n.R32F,o=n.R16F,r=n.RGBA16F,i=n.RGBA32F,a=n.RED,l=4,u=1,d=n.HALF_FLOAT,h=n.FLOAT,c=n.RGBA8):(s=t.RGBA,o=t.RGBA,r=t.RGBA,i=n.RGBA,a=t.RGBA,l=4,u=4,d=e!=null?e.HALF_FLOAT_OES:null,h=t.FLOAT,c=t.RGBA),{internalFormatFloat:s,internalFormatHalfFloat:o,internalFormatPackedHalfFloat:r,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:c,downloadUnpackNumChannels:l,defaultNumChannels:u,textureTypeHalfFloat:d,textureTypeFloat:h}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N(t,e){const n=e();return $().getBool("DEBUG")&&xf(t),n}function xf(t){const e=t.getError();if(e!==t.NO_ERROR)throw new Error("WebGL Error: "+$f(t,e))}const Cf=596e-10,bf=65504;function wf(t){return!!($().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||t===0||Cf<Math.abs(t)&&Math.abs(t)<bf)}function $f(t,e){switch(e){case t.NO_ERROR:return"NO_ERROR";case t.INVALID_ENUM:return"INVALID_ENUM";case t.INVALID_VALUE:return"INVALID_VALUE";case t.INVALID_OPERATION:return"INVALID_OPERATION";case t.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case t.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case t.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${e}`}}function un(t,e){return Ve(t,()=>t.getExtension(e),'Extension "'+e+'" not supported on this browser.')}function vf(t,e){const n=Ve(t,()=>t.createShader(t.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(N(t,()=>t.shaderSource(n,e)),N(t,()=>t.compileShader(n)),t.getShaderParameter(n,t.COMPILE_STATUS)===!1)throw console.log(t.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function yf(t,e){const n=Ve(t,()=>t.createShader(t.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(N(t,()=>t.shaderSource(n,e)),N(t,()=>t.compileShader(n)),$().get("ENGINE_COMPILE_ONLY"))return n;if(t.getShaderParameter(n,t.COMPILE_STATUS)===!1)throw Ui(e,t.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}const Sf=/ERROR: [0-9]+:([0-9]+):/g;function Ui(t,e){const n=Sf.exec(e);if(n==null){console.log(`Couldn't parse line number in error: ${e}`),console.log(t);return}const s=+n[1],o=t.split(`
`),r=o.length.toString().length+2,i=o.map((d,h)=>vt((h+1).toString(),r)+d);let a=0;for(let d=0;d<i.length;d++)a=Math.max(i[d].length,a);const c=i.slice(0,s-1),l=i.slice(s-1,s),u=i.slice(s);console.log(c.join(`
`)),console.log(e.split(`
`)[0]),console.log(`%c ${vt(l[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(u.join(`
`))}function If(t){return Ve(t,()=>t.createProgram(),"Unable to create WebGLProgram.")}function Ef(t,e){if(N(t,()=>t.linkProgram(e)),!$().get("ENGINE_COMPILE_ONLY")&&t.getProgramParameter(e,t.LINK_STATUS)===!1)throw console.log(t.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function jn(t,e){if(N(t,()=>t.validateProgram(e)),t.getProgramParameter(e,t.VALIDATE_STATUS)===!1)throw console.log(t.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function Rf(t,e){const n=Ve(t,()=>t.createBuffer(),"Unable to create WebGLBuffer");return N(t,()=>t.bindBuffer(t.ARRAY_BUFFER,n)),N(t,()=>t.bufferData(t.ARRAY_BUFFER,e,t.STATIC_DRAW)),n}function Tf(t,e){const n=Ve(t,()=>t.createBuffer(),"Unable to create WebGLBuffer");return N(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n)),N(t,()=>t.bufferData(t.ELEMENT_ARRAY_BUFFER,e,t.STATIC_DRAW)),n}function kf(t){return Ve(t,()=>t.createTexture(),"Unable to create WebGLTexture.")}function Nf(t,e){const n=$().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t<=0||e<=0){const s=`[${t}x${e}]`;throw new Error("Requested texture size "+s+" is invalid.")}if(t>n||e>n){const s=`[${t}x${e}]`,o=`[${n}x${n}]`;throw new Error("Requested texture size "+s+" greater than WebGL maximum on this browser / GPU "+o+".")}}function Ff(t){return Ve(t,()=>t.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function Ro(t,e,n,s,o,r,i){const a=t.getAttribLocation(e,n);return a===-1?!1:(N(t,()=>t.bindBuffer(t.ARRAY_BUFFER,s)),N(t,()=>t.vertexAttribPointer(a,o,t.FLOAT,!1,r,i)),N(t,()=>t.enableVertexAttribArray(a)),!0)}function Af(t,e,n){Lf(t,n),N(t,()=>t.activeTexture(t.TEXTURE0+n)),N(t,()=>t.bindTexture(t.TEXTURE_2D,e))}function Df(t,e,n){return Ve(t,()=>t.getUniformLocation(e,n),'uniform "'+n+'" not present in program.')}function Pf(t,e,n){return t.getUniformLocation(e,n)}function Of(t,e,n,s){N(t,()=>Af(t,e,s)),N(t,()=>t.uniform1i(n,s))}function qn(t,e,n){N(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,n)),N(t,()=>t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0))}function To(t,e){N(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,e)),N(t,()=>t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,null,0))}function dn(t){const e=t.checkFramebufferStatus(t.FRAMEBUFFER);if(e!==t.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+_f(t,e))}function _f(t,e){switch(e){case t.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case t.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case t.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case t.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${e}`}}function Ve(t,e,n){const s=N(t,()=>e());if(s==null)throw new Error(n);return s}function Lf(t,e){const n=t.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,s=e+t.TEXTURE0;if(s<t.TEXTURE0||s>n){const o=`[gl.TEXTURE0, gl.TEXTURE${n}]`;throw new Error(`textureUnit must be in ${o}.`)}}function Tt(t,e=2){return E(t.slice(0,t.length-e))}function kt(t){if(t.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[t.length>1?t[t.length-2]:1,t[t.length-1]]}function Kn(t){let e=[1,1,1];return t.length===0||t.length===1&&t[0]===1||(e=[Tt(t),...kt(t)]),e}function Bf(t,e=!1){let n=$().getNumber("WEBGL_MAX_TEXTURE_SIZE");e&&(n=n*2,t=t.map((o,r)=>r>=t.length-2?nr(t[r]):t[r]),t.length===1&&(t=[2,t[0]])),t.length!==2&&(t=ut(t).newShape);let s=E(t);if(t.length<=1&&s<=n)return[1,s];if(t.length===2&&t[0]<=n&&t[1]<=n)return t;if(t.length===3&&t[0]*t[1]<=n&&t[2]<=n)return[t[0]*t[1],t[2]];if(t.length===3&&t[0]<=n&&t[1]*t[2]<=n)return[t[0],t[1]*t[2]];if(t.length===4&&t[0]*t[1]*t[2]<=n&&t[3]<=n)return[t[0]*t[1]*t[2],t[3]];if(t.length===4&&t[0]<=n&&t[1]*t[2]*t[3]<=n)return[t[0],t[1]*t[2]*t[3]];if(e){const o=Tt(t);let r=2,i=2;return t.length&&([r,i]=kt(t)),s=o*(r/2)*(i/2),es(s).map(a=>a*2)}return es(s)}function hn(t){return t%2===0}function yn(t,e){if(t=t.slice(-2),e=e.slice(-2),q(t,e)||!t.length||!e.length||t[0]===0||t[1]===0||e[0]===0||e[1]===0)return!0;if(t.length!==e.length){const n=t.slice(-1)[0],s=e.slice(-1)[0];if(n===s||hn(n)&&hn(s)&&(t[0]===1||e[0]===1))return!0}return t[1]===e[1]&&hn(t[0])&&hn(e[0])}let Yn,Qn;function Mf(t){if(Yn==null){const e=Fe(t);Yn=e.getParameter(e.MAX_TEXTURE_SIZE)}return Yn}function Uf(t){if(Qn==null){const e=Fe(t);Qn=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Qn)}function Vf(t){if(t===0)return 0;let e;const n=Fe(t);return ve(n,"EXT_disjoint_timer_query_webgl2")&&t===2?e=2:ve(n,"EXT_disjoint_timer_query")?e=1:e=0,e}function ve(t,e){return t.getExtension(e)!=null}function ko(t){try{if(Fe(t)!=null)return!0}catch(e){return console.log("Error when getting WebGL context: ",e),!1}return!1}function Wf(t){if(t===0)return!1;const e=Fe(t);if(t===1){if(!ve(e,"OES_texture_float"))return!1}else if(!ve(e,"EXT_color_buffer_float"))return!1;return vs(e)}function Gf(t){if(t===0)return!1;const e=Fe(t);if(t===1){if(!ve(e,"OES_texture_float")||!ve(e,"WEBGL_color_buffer_float"))return!1}else{if(ve(e,"EXT_color_buffer_float"))return vs(e);const s="EXT_color_buffer_half_float";if(ve(e,s)){const o=e.getExtension(s);return zf(e,o)}return!1}return vs(e)}function vs(t){const e=Hs(t),n=t.createTexture();t.bindTexture(t.TEXTURE_2D,n);const s=1,o=1;t.texImage2D(t.TEXTURE_2D,0,e.internalFormatFloat,s,o,0,e.textureFormatFloat,e.textureTypeFloat,null);const r=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,r),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0);const i=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(n),t.deleteFramebuffer(r),i}function zf(t,e){const n=Hs(t,e),s=t.createTexture();t.bindTexture(t.TEXTURE_2D,s);const o=1,r=1;t.texImage2D(t.TEXTURE_2D,0,n.internalFormatHalfFloat,o,r,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);const i=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,i),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,s,0);const a=t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE;return t.bindTexture(t.TEXTURE_2D,null),t.bindFramebuffer(t.FRAMEBUFFER,null),t.deleteTexture(s),t.deleteFramebuffer(i),a}function Hf(t){return t!==2?!1:Fe(t).fenceSync!=null}function en(t,e){Array.isArray(t)||(t=[t]),t.forEach(n=>{n!=null&&k(n.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the WebGL backend.`)})}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const F=$();F.registerFlag("HAS_WEBGL",()=>F.getNumber("WEBGL_VERSION")>0);F.registerFlag("WEBGL_VERSION",()=>ko(2)?2:ko(1)?1:0);F.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);F.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>F.get("WEBGL_VERSION")===2);F.registerFlag("WEBGL_CPU_FORWARD",()=>!0);F.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);F.registerFlag("WEBGL_PACK",()=>F.getBool("HAS_WEBGL"));F.registerFlag("WEBGL_PACK_NORMALIZATION",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_PACK_CLIP",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_PACK_REDUCE",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_LAZILY_UNPACK",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_CONV_IM2COL",()=>F.getBool("WEBGL_PACK"));F.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>Mf(F.getNumber("WEBGL_VERSION")));F.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>Uf(F.getNumber("WEBGL_VERSION")));F.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{const t=F.getNumber("WEBGL_VERSION");return t===0?0:Vf(t)});F.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>F.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!Ar());F.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>Wf(F.getNumber("WEBGL_VERSION")));F.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>F.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:F.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));F.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>Gf(F.getNumber("WEBGL_VERSION")));F.registerFlag("WEBGL_FENCE_API_ENABLED",()=>Hf(F.getNumber("WEBGL_VERSION")));F.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>F.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);F.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,t=>{if(t<0&&t!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${t}.`)});F.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>Ar()?1:-1,t=>{if(t<0&&t!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${t}.`)});F.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);F.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);F.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);F.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ne(){let t,e,n,s,o,r,i,a,c,l;return $().getNumber("WEBGL_VERSION")===2?(t="#version 300 es",e="in",n="out",s="in",o="texture",r="outputColor",i="out vec4 outputColor;",a=`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,c="",l=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(t="",e="attribute",n="varying",s="varying",o="texture2D",r="gl_FragColor",i="",a=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,c=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,l=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:t,attribute:e,varyingVs:n,varyingFs:s,texture2D:o,output:r,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:c,defineRound:l}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ht(t,e,n="index"){const s=Q(e);return s.map((o,r)=>{const i=`int ${t[r]} = ${n} / ${o}`,a=r===s.length-1?`int ${t[r+1]} = ${n} - ${t[r]} * ${o}`:`index -= ${t[r]} * ${o}`;return`${i}; ${a};`}).join("")}function Fn(t,e,n="index"){const s=Q(e);return s.map((o,r)=>{const i=`int ${t[r]} = ${n} / outShapeStrides[${r}]`,a=r===s.length-1?`int ${t[r+1]} = ${n} - ${t[r]} * outShapeStrides[${r}]`:`index -= ${t[r]} * outShapeStrides[${r}]`;return`${i}; ${a};`}).join("")}function Xf(t,e){const n=t.length,s=t.map(r=>`${e}[${r}]`),o=new Array(n-1);o[n-2]=s[n-1];for(let r=n-3;r>=0;--r)o[r]=`(${o[r+1]} * ${s[r+1]})`;return o}function jf(t,e,n="index"){const s=t.map((r,i)=>i),o=Xf(s,e);return o.map((r,i)=>{const a=`int ${t[i]} = ${n} / ${o[i]}`,c=i===o.length-1?`int ${t[i+1]} = ${n} - ${t[i]} * ${o[i]}`:`index -= ${t[i]} * ${o[i]}`;return`${a}; ${c};`}).join("")}function Xs(t){const e=Q(t).map(n=>n.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${e[0]} + coords.y * ${e[1]} + coords.z;
  }
`}function js(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}const Vi=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const{getBroadcastDims:Wi}=df;function qf(t,e,n){const s=[];if(t.forEach(f=>{const p=E(f.shapeInfo.logicalShape);if(f.shapeInfo.isUniform?s.push(`uniform float ${f.name}${p>1?`[${p}]`:""};`):(s.push(`uniform sampler2D ${f.name};`),s.push(`uniform int offset${f.name};`)),n.enableShapeUniforms){const{uniformShape:m}=qs(n.packedInputs,f.shapeInfo.logicalShape,f.shapeInfo.texShape);switch(m.length){case 1:s.push(`uniform int ${f.name}Shape;`);break;case 2:s.push(`uniform ivec2 ${f.name}Shape;`);break;case 3:s.push(`uniform ivec3 ${f.name}Shape;`);break;case 4:s.push(`uniform ivec4 ${f.name}Shape;`);break}s.push(`uniform ivec2 ${f.name}TexShape;`)}}),n.enableShapeUniforms){switch(e.logicalShape.length){case 1:s.push("uniform int outShape;");break;case 2:s.push("uniform ivec2 outShape;"),s.push("uniform int outShapeStrides;");break;case 3:s.push("uniform ivec3 outShape;"),s.push("uniform ivec2 outShapeStrides;");break;case 4:s.push("uniform ivec4 outShape;"),s.push("uniform ivec3 outShapeStrides;");break}s.push("uniform ivec2 outTexShape;")}n.customUniforms&&n.customUniforms.forEach(f=>{s.push(`uniform ${f.type} ${f.name}${f.arrayIndex?`[${f.arrayIndex}]`:""};`)});const o=s.join(`
`),r=t.map(f=>Kf(f,e,n.packedInputs,n.enableShapeUniforms)).join(`
`),i=e.texShape,a=ne(),c=Zf(a);let l,u,d=tp(a);return e.isPacked?(l=Yf(e.logicalShape,i,n.enableShapeUniforms),u=ep(a)):(l=Qf(e.logicalShape,i,n.enableShapeUniforms),u=Jf(a)),n.packedInputs&&(d+=rp),[d,c,u,o,l,r,n.userCode].join(`
`)}function _t(t,e=!1){const n=t.shapeInfo.logicalShape;switch(n.length){case 0:return xp(t,e);case 1:return bp(t,e);case 2:return $p(t,e);case 3:return yp(t,e);case 4:return Ip(t,e);case 5:return Ep(t);case 6:return Rp(t);default:throw new Error(`${n.length}-D input sampling is not yet supported`)}}function Gi(t,e){switch(t.shapeInfo.logicalShape.length){case 0:return gp(t);case 1:return Cp(t,e);case 2:return wp(t,e);case 3:return vp(t,e);default:return Sp(t,e)}}function Kf(t,e,n=!1,s){let o="";n?o+=Gi(t,s):o+=_t(t,s);const r=t.shapeInfo.logicalShape,i=e.logicalShape;return r.length<=i.length&&(n?o+=Tp(t,e):o+=kp(t,e)),o}function Yf(t,e,n){switch(t.length){case 0:return zi();case 1:return ip(t,e,n);case 2:return pp(t,e,n);case 3:return cp(t,e,n);default:return up(t,e,n)}}function Qf(t,e,n){switch(t.length){case 0:return zi();case 1:return ap(t,e,n);case 2:return mp(t,e,n);case 3:return lp(t,e,n);case 4:return dp(t,e,n);case 5:return hp(t,e);case 6:return fp(t,e);default:throw new Error(`${t.length}-D output sampling is not yet supported`)}}function Zf(t){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${t.texture2D}(textureSampler, uv).r;
    }
  `}function Jf(t){return`
    void setOutput(float val) {
      ${t.output} = vec4(val, 0, 0, 0);
    }
  `}function ep(t){return`
    void setOutput(vec4 val) {
      ${t.output} = val;
    }
  `}function tp(t){return`${t.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${t.varyingFs} vec2 resultUV;
    ${t.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${t.defineSpecialNaN}
    ${t.defineSpecialInf}
    ${t.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${np}
    ${sp}
    ${op}
  `}const np=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,sp=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,op=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,rp=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function zi(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function ip(t,e,n){const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];return s[0]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${s[1]}.0);
      }
    `:s[1]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${s[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      return 2 * (resTexRC.x * ${s[1]} + resTexRC.y);
    }
  `}function ap(t,e,n){return e[0]===1?n?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${e[1]}.0);
      }
    `:e[1]===1?n?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${e[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      return resTexRC.x * ${e[1]} + resTexRC.y;
    }
  `}function cp(t,e,n){if(n)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],o=Math.ceil(t[2]/2),r=o*Math.ceil(t[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      int b = index / ${r};
      index -= b * ${r};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec3(b, r, c);
    }
  `}function lp(t,e,n){if(n)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${Fn(["r","c","d"],t)}
    return ivec3(r, c, d);
  }
`;const s=ht(["r","c","d"],t);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${s}
      return ivec3(r, c, d);
    }
  `}function up(t,e,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],o=Math.ceil(t[t.length-1]/2),r=o*Math.ceil(t[t.length-2]/2);let i=r,a="",c="b, r, c";for(let l=2;l<t.length-1;l++)i*=t[t.length-l-1],a=`
      int b${l} = index / ${i};
      index -= b${l} * ${i};
    `+a,c=`b${l}, `+c;return`
    ivec${t.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));
      int index = resTexRC.x * ${s[1]} + resTexRC.y;

      ${a}

      int b = index / ${r};
      index -= b * ${r};

      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec${t.length}(${c});
    }
  `}function dp(t,e,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${Fn(["r","c","d","d2"],t)}
      return ivec4(r, c, d, d2);
    }
  `;const s=ht(["r","c","d","d2"],t);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${s}
      return ivec4(r, c, d, d2);
    }
  `}function hp(t,e){const n=ht(["r","c","d","d2","d3"],t);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${e[0]},
                             ${e[1]}));

      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${n}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function fp(t,e){const n=ht(["r","c","d","d2","d3","d4"],t);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${n}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function pp(t,e,n){const s=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(q(t,e))return n?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${s[0]}, ${s[1]}));
      }
    `;const o=Math.ceil(t[1]/2);return n?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${s[0]}, ${s[1]}));

      int index = resTexRC.x * ${s[1]} + resTexRC.y;
      int r = 2 * (index / ${o});
      int c = imod(index, ${o}) * 2;

      return ivec2(r, c);
    }
  `}function mp(t,e,n){return q(t,e)?n?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${e[0]}, ${e[1]}));
      }
    `:t[1]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:t[0]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:n?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      int r = index / ${t[1]};
      int c = index - r * ${t[1]};
      return ivec2(r, c);
    }
  `}function ft(t){return`offset${t}`}function gp(t){const e=t.name,n="get"+e.charAt(0).toUpperCase()+e.slice(1),s=ne();return`
    vec4 ${n}() {
      return ${s.texture2D}(${e}, halfCR);
    }
  `}function xp(t,e){const n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1);if(t.shapeInfo.isUniform)return`float ${s}() {return ${n};}`;const[o,r]=t.shapeInfo.texShape;if(o===1&&r===1)return`
      float ${s}() {
        return sampleTexture(${n}, halfCR);
      }
    `;const i=ft(n);if(e)return`
    float ${s}() {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], ${i});
      return sampleTexture(${n}, uv);
    }
  `;const[a,c]=t.shapeInfo.texShape;return`
    float ${s}() {
      vec2 uv = uvFromFlat(${a}, ${c}, ${i});
      return sampleTexture(${n}, uv);
    }
  `}function Cp(t,e){const n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),o=t.shapeInfo.texShape,r=ne();if(e)return`
    vec4 ${s}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${r.texture2D}(${n}, uv);
    }
  `;const i=[Math.ceil(o[0]/2),Math.ceil(o[1]/2)];return`
    vec4 ${s}(int index) {
      vec2 uv = packedUVfrom1D(
        ${i[0]}, ${i[1]}, index);
      return ${r.texture2D}(${n}, uv);
    }
  `}function bp(t,e){const n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1);if(t.shapeInfo.isUniform)return`
      float ${s}(int index) {
        ${Lt(t)}
      }
    `;const o=t.shapeInfo.texShape,r=o[0],i=o[1];if(i===1&&r===1)return`
      float ${s}(int index) {
        return sampleTexture(${n}, halfCR);
      }
    `;const a=ft(n);return i===1?e?`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / float(${n}TexShape[0]));
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / ${r}.0);
        return sampleTexture(${n}, uv);
      }
    `:r===1?e?`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / float(${n}TexShape[1]), 0.5);
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${s}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / ${i}.0, 0.5);
        return sampleTexture(${n}, uv);
      }
    `:e?`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${a});
      return sampleTexture(${n}, uv);
    }
  `:`
    float ${s}(int index) {
      vec2 uv = uvFromFlat(${r}, ${i}, index + ${a});
      return sampleTexture(${n}, uv);
    }
  `}function wp(t,e){const n=t.shapeInfo.logicalShape,s=t.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=t.shapeInfo.texShape,i=r[0],a=r[1],c=ne();if(r!=null&&q(n,r))return e?`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);

        return ${c.texture2D}(${s}, uv);
      }
    `:`
      vec4 ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}.0, ${i}.0);

        return ${c.texture2D}(${s}, uv);
      }
    `;if(e)return`
    vec4 ${o}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${c.texture2D}(${s}, uv);
    }
  `;const l=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)],u=Math.ceil(n[1]/2);return`
    vec4 ${o}(int row, int col) {
      vec2 uv = packedUVfrom2D(${u}, ${l[0]}, ${l[1]}, row, col);
      return ${c.texture2D}(${s}, uv);
    }
  `}function $p(t,e){const n=t.shapeInfo.logicalShape,s=t.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=t.shapeInfo.texShape;if(r!=null&&q(n,r)){if(e)return`
      float ${o}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `;const h=r[0],f=r[1];return`
    float ${o}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${f}.0, ${h}.0);
      return sampleTexture(${s}, uv);
    }
  `}const{newShape:i,keptDims:a}=ut(n),c=i;if(c.length<n.length){const h=Bt(t,c),f=["row","col"];return`
      ${_t(h,e)}
      float ${o}(int row, int col) {
        return ${o}(${Mt(f,a)});
      }
    `}if(t.shapeInfo.isUniform)return`
      float ${o}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${n[1]}, 1)));
        ${Lt(t)}
      }
    `;const l=r[0],u=r[1],d=ft(s);return u===1?e?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${s}TexShape[0]));
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${l}.0);
      return sampleTexture(${s}, uv);
    }
  `:l===1?e?`
      float ${o}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${s}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${s}TexShape[1]), 0.5);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${s}, uv);
    }
  `:e?`
      float ${o}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s}Shape[1] + col + ${d};
        vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
        return sampleTexture(${s}, uv);
      }
    `:`
  float ${o}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${n[1]} + col + ${d};
    vec2 uv = uvFromFlat(${l}, ${u}, index);
    return sampleTexture(${s}, uv);
  }
`}function vp(t,e){const n=t.shapeInfo.logicalShape,s=t.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=t.shapeInfo.texShape,i=[Math.ceil(r[0]/2),Math.ceil(r[1]/2)];if(n[0]===1){const h=n.slice(1),f=[1,2],p=Bt(t,h),m=["b","row","col"];return`
        ${Gi(p,e)}
        vec4 ${o}(int b, int row, int col) {
          return ${o}(${Mt(m,f)});
        }
      `}const a=ne();if(e)return`
    vec4 ${o}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${s}TexShape[0]) / 2.0), ceil(float(${s}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${s}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${s}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `;const c=i[0],l=i[1],u=Math.ceil(n[2]/2),d=u*Math.ceil(n[1]/2);return`
    vec4 ${o}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${c}, ${l}, ${d}, ${u}, b, row, col);
      return ${a.texture2D}(${s}, uv);
    }
  `}function yp(t,e){const n=t.shapeInfo.logicalShape,s=t.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n[1]*n[2],i=n[2],{newShape:a,keptDims:c}=ut(n),l=a;if(l.length<n.length){const m=Bt(t,l),g=["row","col","depth"];return`
        ${_t(m,e)}
        float ${o}(int row, int col, int depth) {
          return ${o}(${Mt(g,c)});
        }
      `}if(t.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${r}, ${i}, 1)));
        ${Lt(t)}
      }
    `;const u=t.shapeInfo.texShape,d=u[0],h=u[1],f=t.shapeInfo.flatOffset;if(h===r&&f==null)return e?`
      float ${o}(int row, int col, int depth) {
        int stride1 = ${s}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
        float ${o}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${i}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${h}.0, ${d}.0);
          return sampleTexture(${s}, uv);
        }
      `;if(h===i&&f==null)return e?`
      float ${o}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${s}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
    float ${o}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${n[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${h}.0, ${d}.0);
      return sampleTexture(${s}, uv);
    }
  `;const p=ft(s);return e?`
    float ${o}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${s}Shape[1] * ${s}Shape[2];
      int stride1 = ${s}Shape[2];
      int index = row * ${r} + col * ${i} + depth + ${p};
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index);
      return sampleTexture(${s}, uv);
    }
    `:`
      float ${o}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${r} + col * ${i} + depth + ${p};
        vec2 uv = uvFromFlat(${d}, ${h}, index);
        return sampleTexture(${s}, uv);
      }
  `}function Sp(t,e){const n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),o=ne();if(e)return`
    vec4 ${s}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${n}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${n}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${n}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${o.texture2D}(${n}, uv);
    }
  `;const r=t.shapeInfo.logicalShape,i=r.length,a=t.shapeInfo.texShape,c=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],l=c[0],u=c[1],d=Math.ceil(r[i-1]/2);let h=d*Math.ceil(r[i-2]/2),f="int b, int row, int col",p=`b * ${h} + (row / 2) * ${d} + (col / 2)`;for(let m=2;m<i-1;m++)f=`int b${m}, `+f,h*=r[i-m-1],p=`b${m} * ${h} + `+p;return`
    vec4 ${s}(${f}) {
      int index = ${p};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${l});
      return ${o.texture2D}(${n}, uv);
    }
  `}function Ip(t,e){const n=t.shapeInfo.logicalShape,s=t.name,o="get"+s.charAt(0).toUpperCase()+s.slice(1),r=n[3],i=n[2]*r,a=n[1]*i,{newShape:c,keptDims:l}=ut(n);if(c.length<n.length){const C=Bt(t,c),b=["row","col","depth","depth2"];return`
      ${_t(C,e)}
      float ${o}(int row, int col, int depth, int depth2) {
        return ${o}(${Mt(b,l)});
      }
    `}if(t.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${r}, 1)));
        ${Lt(t)}
      }
    `;const u=t.shapeInfo.flatOffset,d=t.shapeInfo.texShape,h=d[0],f=d[1],p=`int stride2 = ${s}Shape[3];`,m=`int stride1 = ${s}Shape[2] * stride2;`,g=`int stride0 = ${s}Shape[1] * stride1;`;if(f===a&&u==null)return e?`
      float ${o}(int row, int col, int depth, int depth2) {
        ${p}
        ${m}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${i}, ${r}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${h}.0);
        return sampleTexture(${s}, uv);
      }
    `;if(f===r&&u==null)return e?`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${s}Shape[1] * ${s}Shape[2], ${s}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${s}TexShape[1], ${s}TexShape[0]);
        return sampleTexture(${s}, uv);
      }
    `:`
      float ${o}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${n[1]*n[2]}, ${n[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${h}.0);
        return sampleTexture(${s}, uv);
      }
    `;const x=ft(s);return e?`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${p}
      ${m}
      ${g}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${s}TexShape[0], ${s}TexShape[1], index + ${x});
      return sampleTexture(${s}, uv);
    }
  `:`
    float ${o}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} +
          depth * ${r} + depth2;
      vec2 uv = uvFromFlat(${h}, ${f}, index + ${x});
      return sampleTexture(${s}, uv);
    }
  `}function Ep(t){const e=t.shapeInfo.logicalShape,n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),o=e[4],r=e[3]*o,i=e[2]*r,a=e[1]*i,{newShape:c,keptDims:l}=ut(e);if(c.length<e.length){const m=Bt(t,c),g=["row","col","depth","depth2","depth3"];return`
      ${_t(m)}
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        return ${s}(${Mt(g,l)});
      }
    `}if(t.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${r}, ${o})) +
          depth3;
        ${Lt(t)}
      }
    `;const u=t.shapeInfo.flatOffset,d=t.shapeInfo.texShape,h=d[0],f=d[1];if(f===a&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${r}, ${o}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${h}.0);
        return sampleTexture(${n}, uv);
      }
    `;if(f===o&&u==null)return`
      float ${s}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]},
               ${e[2]*e[3]}, ${e[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${h}.0);
        return sampleTexture(${n}, uv);
      }
    `;const p=ft(n);return`
    float ${s}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${r} +
          depth2 * ${o} + depth3 + ${p};
      vec2 uv = uvFromFlat(${h}, ${f}, index);
      return sampleTexture(${n}, uv);
    }
  `}function Rp(t){const e=t.shapeInfo.logicalShape,n=t.name,s="get"+n.charAt(0).toUpperCase()+n.slice(1),{newShape:o,keptDims:r}=ut(e);if(o.length<e.length){const g=Bt(t,o),x=["row","col","depth","depth2","depth3","depth4"];return`
      ${_t(g)}
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${s}(${Mt(x,r)});
      }
    `}const i=e[5],a=e[4]*i,c=e[3]*a,l=e[2]*c,u=e[1]*l;if(t.shapeInfo.isUniform)return`
      float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${l}, ${c}, ${a})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${Lt(t)}
      }
    `;const d=t.shapeInfo.flatOffset,h=t.shapeInfo.texShape,f=h[0],p=h[1];if(p===u&&d==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${l}, ${c}, ${a}, ${i})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `;if(p===i&&d==null)return`
      float ${s}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]*e[4]},
               ${e[2]*e[3]*e[4]},
               ${e[3]*e[4]},
               ${e[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `;const m=ft(n);return`
    float ${s}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${l} + depth * ${c} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${m};
      vec2 uv = uvFromFlat(${f}, ${p}, index);
      return sampleTexture(${n}, uv);
    }
  `}function Lt(t){const e=t.name,n=E(t.shapeInfo.logicalShape);return n<2?`return ${e};`:`
    for (int i = 0; i < ${n}; i++) {
      if (i == index) {
        return ${e}[i];
      }
    }
  `}function Tp(t,e){const n=t.name,s=n.charAt(0).toUpperCase()+n.slice(1),o="get"+s+"AtOutCoords",r=t.shapeInfo.logicalShape.length,i=e.logicalShape.length,a=Wi(t.shapeInfo.logicalShape,e.logicalShape),c=L(i),l=i-r;let u;const d=["x","y","z","w","u","v"];r===0?u="":i<2&&a.length>=1?u="coords = 0;":u=a.map(C=>`coords.${d[C+l]} = 0;`).join(`
`);let h="";i<2&&r>0?h="coords":h=t.shapeInfo.logicalShape.map((C,b)=>`coords.${d[b+l]}`).join(", ");let f="return outputValue;";const m=E(t.shapeInfo.logicalShape)===1,x=E(e.logicalShape)===1;if(r===1&&!m&&!x)f=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(m&&!x)i===1?f=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:f=`
        return vec4(outputValue.x);
      `;else if(a.length){const C=r-2,b=r-1;a.indexOf(C)>-1&&a.indexOf(b)>-1?f="return vec4(outputValue.x);":a.indexOf(C)>-1?f="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":a.indexOf(b)>-1&&(f="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${o}() {
      ${c} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${s}(${h});
      ${f}
    }
  `}function kp(t,e){const n=t.name,s=n.charAt(0).toUpperCase()+n.slice(1),o="get"+s+"AtOutCoords",r=e.texShape,i=t.shapeInfo.texShape,a=t.shapeInfo.logicalShape.length,c=e.logicalShape.length;if(!t.shapeInfo.isUniform&&a===c&&t.shapeInfo.flatOffset==null&&q(i,r))return`
      float ${o}() {
        return sampleTexture(${n}, resultUV);
      }
    `;const l=L(c),u=Wi(t.shapeInfo.logicalShape,e.logicalShape),d=c-a;let h;const f=["x","y","z","w","u","v"];a===0?h="":c<2&&u.length>=1?h="coords = 0;":h=u.map(m=>`coords.${f[m+d]} = 0;`).join(`
`);let p="";return c<2&&a>0?p="coords":p=t.shapeInfo.logicalShape.map((m,g)=>`coords.${f[g+d]}`).join(", "),`
    float ${o}() {
      ${l} coords = getOutputCoords();
      ${h}
      return get${s}(${p});
    }
  `}function L(t){if(t<=1)return"int";if(t===2)return"ivec2";if(t===3)return"ivec3";if(t===4)return"ivec4";if(t===5)return"ivec5";if(t===6)return"ivec6";throw Error(`GPU for rank ${t} is not yet supported`)}function qs(t,e,n){const{newShape:s,keptDims:o}=ut(e),r=e.length,i=t&&r===3&&e[0]===1,a=i?e.slice(1):s,c=!t&&r>1&&!q(e,n)&&s.length<r||i;return{useSqueezeShape:c,uniformShape:c?a:e,keptDims:o}}function Bt(t,e){const n=JSON.parse(JSON.stringify(t));return n.shapeInfo.logicalShape=e,n}function Mt(t,e){return e.map(n=>t[n]).join(", ")}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Np(t,e,n,s){const o=n.map((u,d)=>{const h={logicalShape:u.shape,texShape:u.isUniform?null:u.texData.texShape,isUniform:u.isUniform,isPacked:u.isUniform?!1:u.texData.isPacked,flatOffset:null};return u.texData!=null&&u.texData.slice!=null&&u.texData.slice.flatOffset>0&&(h.flatOffset=u.texData.slice.flatOffset),{name:e.variableNames[d],shapeInfo:h}}),r=o.map(u=>u.shapeInfo),i={logicalShape:s.shape,texShape:s.texData.texShape,isUniform:!1,isPacked:s.texData.isPacked,flatOffset:null},a=qf(o,i,e),c=yf(t.gl,a),l=t.createProgram(c);return $().get("ENGINE_COMPILE_ONLY")?{program:e,fragmentShader:c,source:a,webGLProgram:l,inShapeInfos:r,outShapeInfo:i,uniformLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,inShapesLocations:null,inTexShapesLocations:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:Object.assign({program:e,fragmentShader:c,source:a,webGLProgram:l,inShapeInfos:r,outShapeInfo:i},Hi(t,e,l))}function Hi(t,e,n){const s={},o={},r={},i=[];let a,c,l,u=null,d=null;d=t.getUniformLocation(n,"NAN",!1),$().getNumber("WEBGL_VERSION")===1&&(u=t.getUniformLocation(n,"INFINITY",!1));const h=!1;for(let f=0;f<e.variableNames.length;f++){const p=e.variableNames[f];s[p]=t.getUniformLocation(n,p,h),s[`offset${p}`]=t.getUniformLocation(n,`offset${p}`,h),e.enableShapeUniforms&&(o[`${p}Shape`]=t.getUniformLocation(n,`${p}Shape`,h),r[`${p}TexShape`]=t.getUniformLocation(n,`${p}TexShape`,h))}return e.enableShapeUniforms&&(a=t.getUniformLocation(n,"outShape",h),l=t.getUniformLocation(n,"outShapeStrides",h),c=t.getUniformLocation(n,"outTexShape",h)),e.customUniforms&&e.customUniforms.forEach((f,p)=>{i[p]=t.getUniformLocation(n,f.name,h)}),{uniformLocations:s,customUniformLocations:i,infLoc:u,nanLoc:d,inShapesLocations:o,inTexShapesLocations:r,outShapeLocation:a,outShapeStridesLocation:l,outTexShapeLocation:c}}function No(t,e){if(t.length!==e.length)throw Error(`Binary was compiled with ${t.length} inputs, but was executed with ${e.length} inputs`);t.forEach((n,s)=>{const o=n.logicalShape,r=e[s],i=r.shape;if(!q(o,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${o} and ${i} must match`);if(n.isUniform&&r.isUniform)return;const a=n.texShape,c=r.isUniform?null:r.texData.texShape;if(!q(a,c))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${c} must match`)})}function Fp(t,e,n,s,o){e.program.enableShapeUniforms||(No(e.inShapeInfos,n),No([e.outShapeInfo],[s]));const r=s.texData.texture,i=s.texData.texShape;s.texData.isPacked?t.setOutputPackedMatrixTexture(r.texture,i[0],i[1]):t.setOutputMatrixTexture(r.texture,i[0],i[1]),t.setProgram(e.webGLProgram),$().getNumber("WEBGL_VERSION")===1&&e.infLoc!==null&&t.gl.uniform1f(e.infLoc,1/0),e.nanLoc!==null&&t.gl.uniform1f(e.nanLoc,NaN),n.forEach((c,l)=>{const u=e.program.variableNames[l],d=e.uniformLocations[u],h=e.uniformLocations[`offset${u}`],f=e.inShapesLocations[`${u}Shape`],p=e.inTexShapesLocations[`${u}TexShape`];if(f){const{uniformShape:m}=qs(e.program.packedInputs,c.shape,c.texData.texShape);switch(m.length){case 1:t.gl.uniform1iv(f,new Int32Array(m));break;case 2:t.gl.uniform2iv(f,new Int32Array(m));break;case 3:t.gl.uniform3iv(f,new Int32Array(m));break;case 4:t.gl.uniform4iv(f,new Int32Array(m));break}}if(p&&t.gl.uniform2i(p,c.texData.texShape[0],c.texData.texShape[1]),d!=null){if(c.isUniform){if(E(c.shape)<2)t.gl.uniform1f(d,c.uniformValues[0]);else{let m=c.uniformValues;m instanceof Float32Array||(m=new Float32Array(m)),t.gl.uniform1fv(d,m)}return}c.texData.slice!=null&&h!=null&&t.gl.uniform1i(h,c.texData.slice.flatOffset),t.setInputMatrixTexture(c.texData.texture.texture,d,l)}});const a=e.outShapeLocation;if(a)switch(s.shape.length){case 1:t.gl.uniform1iv(a,new Int32Array(s.shape));break;case 2:t.gl.uniform2iv(a,new Int32Array(s.shape));break;case 3:t.gl.uniform3iv(a,new Int32Array(s.shape));break;case 4:t.gl.uniform4iv(a,new Int32Array(s.shape));break}if(e.outShapeStridesLocation){const c=Q(s.shape);switch(s.shape.length){case 2:t.gl.uniform1iv(e.outShapeStridesLocation,new Int32Array(c));break;case 3:t.gl.uniform2iv(e.outShapeStridesLocation,new Int32Array(c));break;case 4:t.gl.uniform3iv(e.outShapeStridesLocation,new Int32Array(c));break}}e.outTexShapeLocation&&t.gl.uniform2i(e.outTexShapeLocation,s.texData.texShape[0],s.texData.texShape[1]),e.program.customUniforms&&o&&e.program.customUniforms.forEach((c,l)=>{const u=e.customUniformLocations[l],d=o[l];if(c.type==="float")t.gl.uniform1fv(u,d);else if(c.type==="vec2")t.gl.uniform2fv(u,d);else if(c.type==="vec3")t.gl.uniform3fv(u,d);else if(c.type==="vec4")t.gl.uniform4fv(u,d);else if(c.type==="int")t.gl.uniform1iv(u,d);else if(c.type==="ivec2")t.gl.uniform2iv(u,d);else if(c.type==="ivec3")t.gl.uniform3iv(u,d);else if(c.type==="ivec4")t.gl.uniform4iv(u,d);else throw Error(`uniform type ${c.type} is not supported yet.`)}),t.executeProgram()}function Ap(t,e,n){let s="";e.concat(n).forEach(i=>{const a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(t.enableShapeUniforms&&!i.isUniform){const c=i.texData.texShape,{useSqueezeShape:l,uniformShape:u,keptDims:d}=qs(t.packedInputs,i.shape,c);let h="",f="",p="";if(u.length===1&&t.packedInputs){const v=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)];h=`${v[0]>1}_${v[1]>1}`}else if(u.length===2&&!t.packedInputs)f=`${u[0]>1}_${u[1]>1}`;else if(u.length>2&&!t.packedInputs){const v=Q(u);p=`${v[0]===c[1]}_${v[v.length-1]===c[1]}`}const m=i.shape.length,g=u.length===2&&q(i.shape,c),x=E(i.shape)===1,C=$n(i.shape,n.shape),b=!t.packedInputs&&m===n.shape.length&&q(c,n.texData.texShape),w=t.packedInputs||u.length>2?"":`${c[0]>1}_${c[1]>1}`;s+=`${m}_${b}_${l?d:""}_${u.length}_${x}_${C}_${g}_${h}_${f}_${p}_${w}_${a}`}else{const c=i.isUniform?"uniform":i.texData.texShape;s+=`${i.shape}_${c}_${a}`}});const o=t.userCode;let r=t.constructor.name;return r+="_"+s+"_"+o+`${$().getNumber("WEBGL_VERSION")}`,r}function oe(t){return $().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&t<=4}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Dp{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=qt.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=ne();this.outputShape=e,this.enableShapeUniforms=oe(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Fn(["r","c","d"],e):ht(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${n.output} = result;
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Pp{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=qt.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];const n=ne();this.outputShape=e,this.enableShapeUniforms=oe(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?Fn(["r","c","d"],e):ht(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${n.output} = result;
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Op{constructor(e){this.variableNames=["A"],this.outTexUsage=fe.DOWNLOAD;const n=ne();this.outputShape=e,this.userCode=`
      ${Vi}

      void main() {
        float x = getAAtOutCoords();
        ${n.output} = encode_float(x);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _p{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=fe.DOWNLOAD;const n=ne();this.outputShape=e,this.userCode=`
      ${Vi}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${n.output} = encode_float(x);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Lp{constructor(e,n=!1){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=ne();this.outputShape=e,this.enableShapeUniforms=oe(this.outputShape.length);let o="result";n&&(o="floor(result * 255. + 0.5)"),this.userCode=`
      ${this.enableShapeUniforms?js():Xs(e)}

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);

        int r = flatIndex / texShape[1];
        int c = imod(flatIndex, texShape[1]);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
        vec4 values = ${s.texture2D}(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        ${s.output} = vec4(${o}, 0., 0., 0.);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Bp{constructor(e,n=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];const s=ne();this.outputShape=e,this.enableShapeUniforms=oe(this.outputShape.length);let o="",r="result";n&&(r="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){const c=i*2+a;o+=`
          localCoords = coords;
          if(localCoords[2] + ${a} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {
          localCoords[2] += ${a};
          if (localCoords[1] + ${i} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {
            localCoords[1] += ${i};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${s.texture2D}(A, uv);

            if (offset == 0) {
              result[${c}] = values[0];
            } else if (offset == 1) {
              result[${c}] = values[1];
            } else if (offset == 2) {
              result[${c}] = values[2];
            } else {
              result[${c}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?js():Xs(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${o}

          ${s.output} = ${r};
        }
    `}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mp(t){const e=ne(),n=`${e.version}
    precision highp float;
    ${e.attribute} vec3 clipSpacePos;
    ${e.attribute} vec2 uv;
    ${e.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return vf(t,n)}function Up(t){const e=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return Rf(t,e)}function Vp(t){const e=new Uint16Array([0,1,2,2,1,3]);return Tf(t,e)}function tn(t,e,n,s,o,r){Nf(e,n);const i=kf(t),a=t.TEXTURE_2D;return N(t,()=>t.bindTexture(a,i)),N(t,()=>t.texParameteri(a,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE)),N(t,()=>t.texParameteri(a,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)),N(t,()=>t.texParameteri(a,t.TEXTURE_MIN_FILTER,t.NEAREST)),N(t,()=>t.texParameteri(a,t.TEXTURE_MAG_FILTER,t.NEAREST)),$().getNumber("WEBGL_VERSION")===1?N(t,()=>t.texImage2D(a,0,s,e,n,0,o,r,null)):N(t,()=>t.texStorage2D(a,1,s,e,n)),N(t,()=>t.bindTexture(t.TEXTURE_2D,null)),{texture:i,texShape:[n,e]}}function Xi(t){return t.internalFormatFloat}function Wp(t,e,n,s){const[o,r]=Jt(e,n);return tn(t,o,r,Xi(s),s.textureFormatFloat,t.FLOAT)}function ji(t){return t.internalFormatHalfFloat}function Gp(t,e,n,s){const[o,r]=Jt(e,n);return tn(t,o,r,ji(s),s.textureFormatFloat,s.textureTypeHalfFloat)}function qi(t){return t.downloadTextureFormat}function zp(t,e,n,s){const[o,r]=Jt(e,n);return tn(t,o,r,qi(s),t.RGBA,t.UNSIGNED_BYTE)}function Ki(t){return t.internalFormatPackedFloat}function Hp(t,e,n,s){const[o,r]=Ot(e,n);return tn(t,o,r,Ki(s),t.RGBA,t.FLOAT)}function Yi(t){return t.internalFormatPackedHalfFloat}function Xp(t,e,n,s){const[o,r]=Ot(e,n);return tn(t,o,r,Yi(s),t.RGBA,s.textureTypeHalfFloat)}function jp(t,e,n){return N(t,()=>t.bindBuffer(t.ARRAY_BUFFER,n)),Ro(t,e,"clipSpacePos",n,3,20,0)&&Ro(t,e,"uv",n,2,20,12)}function qp(t,e,n,s,o,r){N(t,()=>t.bindTexture(t.TEXTURE_2D,e));let i,a,c;o instanceof Uint8Array?(i=new Uint8Array(n*s*4),a=t.UNSIGNED_BYTE,c=t.RGBA):(i=new Float32Array(n*s*4),a=t.FLOAT,c=r.internalFormatPackedFloat),i.set(o),$().getNumber("WEBGL_VERSION")===2?N(t,()=>t.texSubImage2D(t.TEXTURE_2D,0,0,0,n,s,t.RGBA,a,i)):N(t,()=>t.texImage2D(t.TEXTURE_2D,0,c,n,s,0,t.RGBA,a,i)),N(t,()=>t.bindTexture(t.TEXTURE_2D,null))}function Kp(t,e,n){N(t,()=>t.bindTexture(t.TEXTURE_2D,e)),n.data instanceof Uint8Array?$().getNumber("WEBGL_VERSION")===2?N(t,()=>t.texSubImage2D(t.TEXTURE_2D,0,0,0,n.width,n.height,t.RGBA,t.UNSIGNED_BYTE,n.data)):N(t,()=>t.texImage2D(t.TEXTURE_2D,0,t.RGBA,n.width,n.height,0,t.RGBA,t.UNSIGNED_BYTE,n.data)):$().getNumber("WEBGL_VERSION")===2?N(t,()=>t.texSubImage2D(t.TEXTURE_2D,0,0,0,t.RGBA,t.UNSIGNED_BYTE,n)):N(t,()=>t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n)),N(t,()=>t.bindTexture(t.TEXTURE_2D,null))}function Yp(t,e,n,s){const o=t.createBuffer();N(t,()=>t.bindBuffer(t.PIXEL_PACK_BUFFER,o));const a=4*4*e*n;return N(t,()=>t.bufferData(t.PIXEL_PACK_BUFFER,a,t.STREAM_READ)),N(t,()=>t.readPixels(0,0,n,e,t.RGBA,t.FLOAT,0)),N(t,()=>t.bindBuffer(t.PIXEL_PACK_BUFFER,null)),o}function Qp(t,e,n){const s=t,o=new Float32Array(n);return s.bindBuffer(s.PIXEL_PACK_BUFFER,e),s.getBufferSubData(s.PIXEL_PACK_BUFFER,0,o),s.bindBuffer(s.PIXEL_PACK_BUFFER,null),o}function Zp(t,e,n,s){const[o,r]=Jt(e,n),i=4,a=new Uint8Array(mf(e*n,i));return N(t,()=>t.readPixels(0,0,o,r,s.downloadTextureFormat,t.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function Jp(t,e,n,s,o,r,i,a){const c=t,l=new Float32Array(gf(r,i));return c.bindBuffer(c.PIXEL_PACK_BUFFER,e),c.getBufferSubData(c.PIXEL_PACK_BUFFER,0,l),c.bindBuffer(c.PIXEL_PACK_BUFFER,null),l}function em(t,e,n){const s=new Float32Array(e*n*4);return N(t,()=>t.readPixels(0,0,n,e,t.RGBA,t.FLOAT,s)),s}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Zn{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];const n=$().getNumber("WEBGL_VERSION");e!=null?(this.gl=e,hf(n,e)):this.gl=Fe(n);let s="WEBGL_color_buffer_float";const o="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),$().getNumber("WEBGL_VERSION")===1){const r="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=un(this.gl,r),ve(this.gl,i))this.textureHalfFloatExtension=un(this.gl,i);else if($().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(s),ve(this.gl,o))this.colorBufferHalfFloatExtension=un(this.gl,o);else if($().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(s="EXT_color_buffer_float",ve(this.gl,s))this.colorBufferFloatExtension=this.gl.getExtension(s);else if(ve(this.gl,o))this.colorBufferHalfFloatExtension=this.gl.getExtension(o);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=Up(this.gl),this.indexBuffer=Vp(this.gl),this.framebuffer=Ff(this.gl),this.textureConfig=Hs(this.gl,this.textureHalfFloatExtension)}get debug(){return $().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");const e=this.gl;N(e,()=>e.finish()),N(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),N(e,()=>e.deleteFramebuffer(this.framebuffer)),N(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),N(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),N(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,n){return this.throwIfDisposed(),Wp(this.gl,e,n,this.textureConfig)}createFloat16MatrixTexture(e,n){return this.throwIfDisposed(),Gp(this.gl,e,n,this.textureConfig)}createUnsignedBytesMatrixTexture(e,n){return this.throwIfDisposed(),zp(this.gl,e,n,this.textureConfig)}uploadPixelDataToTexture(e,n){this.throwIfDisposed(),Kp(this.gl,e,n)}uploadDenseMatrixToTexture(e,n,s,o){this.throwIfDisposed(),qp(this.gl,e,n,s,o,this.textureConfig)}createFloat16PackedMatrixTexture(e,n){return this.throwIfDisposed(),Xp(this.gl,e,n,this.textureConfig)}createPackedMatrixTexture(e,n){return this.throwIfDisposed(),Hp(this.gl,e,n,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(To(this.gl,this.framebuffer),this.outputTexture=null),N(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,n,s){return this.downloadMatrixDriver(e,()=>Zp(this.gl,n,s,this.textureConfig))}downloadPackedMatrixFromBuffer(e,n,s,o,r,i){return Jp(this.gl,e,n,s,o,r,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,n){return Qp(this.gl,e,n)}createBufferFromTexture(e,n,s){this.bindTextureToFrameBuffer(e);const o=Yp(this.gl,n,s,this.textureConfig);return this.unbindTextureToFrameBuffer(),o}createAndWaitForFence(){const e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let n,s;if($().getBool("WEBGL_FENCE_API_ENABLED")){const o=e,r=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),s=()=>{const i=o.clientWaitSync(r,0,0);return i===o.ALREADY_SIGNALED||i===o.CONDITION_SATISFIED},n=r}else $().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(n=this.beginQuery(),this.endQuery(),s=()=>this.isQueryAvailable(n,$().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):s=()=>!0;return{query:n,isFencePassed:s}}downloadMatrixFromPackedTexture(e,n,s){return this.downloadMatrixDriver(e,()=>em(this.gl,n,s))}createProgram(e){this.throwIfDisposed();const n=this.gl;this.vertexShader==null&&(this.vertexShader=Mp(n));const s=If(n);return N(n,()=>n.attachShader(s,this.vertexShader)),N(n,()=>n.attachShader(s,e)),Ef(n,s),this.debug&&jn(n,s),this.vertexAttrsAreBound||(this.setProgram(s),this.vertexAttrsAreBound=jp(n,this.program,this.vertexBuffer)),s}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&N(this.gl,()=>this.gl.deleteProgram(e))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&jn(this.gl,this.program),N(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,n,s=!0){return this.throwIfDisposed(),s?Df(this.gl,e,n):Pf(this.gl,e,n)}getAttributeLocation(e,n){return this.throwIfDisposed(),N(this.gl,()=>this.gl.getAttribLocation(e,n))}getUniformLocationNoThrow(e,n){return this.throwIfDisposed(),this.gl.getUniformLocation(e,n)}setInputMatrixTexture(e,n,s){this.throwIfDisposed(),this.throwIfNoProgram(),Of(this.gl,e,n,s)}setOutputMatrixTexture(e,n,s){this.setOutputMatrixTextureDriver(e,s,n)}setOutputPackedMatrixTexture(e,n,s){this.throwIfDisposed();const[o,r]=Ot(n,s);this.setOutputMatrixTextureDriver(e,o,r)}setOutputMatrixWriteRegion(e,n,s,o){this.setOutputMatrixWriteRegionDriver(s,e,o,n)}setOutputPackedMatrixWriteRegion(e,n,s,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&jn(this.gl,this.program),dn(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();const e=this.gl;this.debug&&this.debugValidate(),N(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),N(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=un(this.gl,$().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if($().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),r=s.createQuery();return s.beginQuery(o.TIME_ELAPSED_EXT,r),r}const e=this.getQueryTimerExtensionWebGL1(),n=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,n),n}endQuery(){if($().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){const n=this.gl,s=this.getQueryTimerExtensionWebGL2();n.endQuery(s.TIME_ELAPSED_EXT);return}const e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await eo(()=>this.disposed||this.isQueryAvailable(e,$().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(e,$().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(e,n){if(n===0)return null;if(n===2){const s=this.gl;return s.getQueryParameter(e,s.QUERY_RESULT)/1e6}else{const s=this.getQueryTimerExtensionWebGL1();return s.getQueryObjectEXT(e,s.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,n){if(n===0)return!0;if(n===2){const s=this.gl,o=this.getQueryTimerExtensionWebGL2(),r=s.getQueryParameter(e,s.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),r&&!this.disjoint}else{const s=this.getQueryTimerExtensionWebGL1(),o=s.getQueryObjectEXT(e,s.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(s.GPU_DISJOINT_EXT)),o&&!this.disjoint}}pollFence(e){return new Promise(n=>{this.addItemToPoll(()=>e.isFencePassed(),()=>n())})}pollItems(){const e=tm(this.itemsToPoll.map(n=>n.isDoneFn));for(let n=0;n<=e;++n){const{resolveFn:s}=this.itemsToPoll[n];s()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,n){this.itemsToPoll.push({isDoneFn:e,resolveFn:n}),!(this.itemsToPoll.length>1)&&eo(()=>(this.pollItems(),this.itemsToPoll.length===0))}bindTextureToFrameBuffer(e){this.throwIfDisposed(),qn(this.gl,e,this.framebuffer),this.debug&&dn(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(qn(this.gl,this.outputTexture,this.framebuffer),this.debug&&dn(this.gl)):To(this.gl,this.framebuffer)}downloadMatrixDriver(e,n){this.bindTextureToFrameBuffer(e);const s=n();return this.unbindTextureToFrameBuffer(),s}setOutputMatrixTextureDriver(e,n,s){this.throwIfDisposed();const o=this.gl;qn(o,e,this.framebuffer),this.debug&&dn(o),this.outputTexture=e,N(o,()=>o.viewport(0,0,n,s)),N(o,()=>o.scissor(0,0,n,s))}setOutputMatrixWriteRegionDriver(e,n,s,o){this.throwIfDisposed(),N(this.gl,()=>this.gl.scissor(e,n,s,o))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}}function tm(t){let e=0;for(;e<t.length&&t[e]();++e);return e-1}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nm(t){const e=new Float32Array(t.length);for(let n=0;n<t.length;++n)e[n]=Math.abs(t[n]);return e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ee(t){return(e,n,s,o,r)=>{const i=se(e,n),a=i.length,c=Q(i),l=E(i),u=Xe(r,l),d=e.length,h=n.length,f=Q(e),p=Q(n),m=$n(e,i),g=$n(n,i);if(m.length+g.length===0)for(let x=0;x<u.length;++x)u[x]=t(s[x%s.length],o[x%o.length]);else for(let x=0;x<u.length;++x){const C=ir(x,a,c),b=C.slice(-d);m.forEach(S=>b[S]=0);const w=ss(b,d,f),v=C.slice(-h);g.forEach(S=>v[S]=0);const I=ss(v,h,p);u[x]=t(s[w],o[I])}return[u,i]}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sm=Ee((t,e)=>t+e);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function om(t,e,n,s,o){const r=E(s),i=je(o,n);for(let a=0;a<t.length;a++){const c=t[a];if(c<0)throw new Error("Input x must be non-negative!");c>=o||(r>0?i[c]+=e[a]:i[c]+=1)}return i}function rm(t,e,n,s=!1){const o=t.shape[0],r=t.shape[1],i=K([o,n],e.dtype);for(let a=0;a<o;a++)for(let c=0;c<r;c++){const l=t.get(a,c);if(l<0)throw new Error("Input x must be non-negative!");l>=n||(s?i.set(1,a,l):e.size>0?i.set(i.get(a,l)+e.get(a,c),a,l):i.set(i.get(a,l)+1,a,l))}return i}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qe(t){return(e,n,s)=>{const o=Xe(n,e.length);for(let r=0;r<e.length;++r)o[r]=t(e[r],s);return o}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const im=qe(t=>Math.ceil(t));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function am(t,e,n,s){const o=Ce(n,E(e));if(s&&n!=="string"){let r=0;t.forEach(i=>{const a=E(i.shape);o.set(i.vals,r),r+=a})}else{let r=0;t.forEach(i=>{const a=n==="string"?jt(i.vals):i.vals;let c=0;for(let l=0;l<i.shape[0];++l){const u=l*e[1]+r;for(let d=0;d<i.shape[1];++d)o[u+d]=a[c++]}r+=i.shape[1]})}return o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cm=Ee((t,e)=>t===e?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const lm=qe(t=>Math.exp(t));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const um=qe(t=>Math.expm1(t));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dm=qe(t=>Math.floor(t));/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hm(t,e,n,s,o,r,i,a,c){const l=K([s,r],n);for(let u=0;u<s;u++){const d=[];let h=0;for(let f=0;f<o;f++){const p=t[u*o+f];h+=p*i[f],d.push(p)}if(h<0||h>=c/r)throw new Error(`Invalid indices: ${d} does not index into ${a}`);for(let f=0;f<r;f++)l.values[u*r+f]=e.get(...e.indexToLoc(h*r+f))}return l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fm(t,e,n){const s=K(n,t.dtype);for(let o=0;o<s.size;++o){const i=s.indexToLoc(o).slice(),a=i[0],c=i[2],l=e.locToIndex([a,c]);i[2]=e.values[l];const u=t.locToIndex(i);0<=u&&u<t.values.length&&(s.values[o]=t.values[u])}return s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pm=Ee((t,e)=>t>e?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mm=Ee((t,e)=>t>=e?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gm=Ee((t,e)=>t<e?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xm=Ee((t,e)=>t<=e?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cm(t,e,n){const s=(e-t)/(n-1),o=je(n,"float32");o[0]=t;for(let r=1;r<o.length;r++)o[r]=o[r-1]+s;return o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const bm=qe(t=>Math.log(t));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wm(t,e,n,s){const o=Xe(s,E(n));for(let r=0;r<o.length;++r){const i=r*e;let a=t[i];for(let c=0;c<e;++c){const l=t[i+c];(Number.isNaN(l)||l>a)&&(a=l)}o[r]=a}return o}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $m=Ee((t,e)=>Math.max(t,e));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vm=Ee((t,e)=>Math.min(t,e));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qi=Ee((t,e)=>t*e);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ym(t,e,n){const s=Ft(-1,n);return Qi([],e,s,t,n)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sm=Ee((t,e)=>t!==e?1:0);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Im(t,e,n,s,o){const r=e.length,i=E(e),a=Q(e),c=Q(o),l=Xe(n,E(o));for(let u=0;u<i;++u){const d=ir(u,r,a),h=new Array(d.length);for(let p=0;p<h.length;p++)h[p]=d[s[p]];const f=ss(h,r,c);l[f]=t[u]}return l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Em(t,e,n,s){const[o,r]=Le(t,s),i=_e(e,"int32"),a=je(E(o),i),c=E(r);for(let l=0;l<a.length;++l){const u=l*c;let d=1;for(let h=0;h<c;++h)d*=n[u+h];a[l]=d}return{outVals:a,outShape:o,outDtype:i}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rm(t,e,n,s){const o=t===e,r=t<e&&n<0,i=e<t&&n>1;if(o||r||i)return je(0,s);const a=Math.abs(Math.ceil((e-t)/n)),c=je(a,s);e<t&&n===1&&(n=-1),c[0]=t;for(let l=1;l<c.length;l++)c[l]=c[l-1]+n;return c}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tm=qe(t=>1/Math.sqrt(t));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function km(t,e,n,s,o,r,i,a,c,l){const u=[s/o,o],d=t.values,h=e.values;if(s===0)return K(n,e.dtype);const f=K(u,e.dtype);typeof c=="string"||typeof c=="number"?f.values.fill(c):typeof c=="boolean"&&f.values.fill(+c);for(let p=0;p<r;p++){const m=[];let g=0;for(let x=0;x<i;x++){const C=d[p*i+x];m.push(C),g+=C*a[x]}if(g<0||g>=s/o)throw new Error(`Invalid indices: ${m} does not index into ${n}`);for(let x=0;x<o;x++)l?f.values[g*o+x]+=h[p*o+x]:f.values[g*o+x]=e.rank===0?h[0]:h[p*o+x]}return f}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nm=qe(t=>1/(1+Math.exp(-t)));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fm(t,e,n,s,o){const r=Os(s,e,n),i=E(n),a=Q(s);if(r){const d=_s(e,a);return o==="string"?t.slice(d,d+i):t.subarray(d,d+i)}const c=o==="string"?jt(t):t,l=K(s,o,c),u=K(n,o);for(let d=0;d<u.size;++d){const h=u.indexToLoc(d),f=h.map((p,m)=>p+e[m]);u.set(l.get(...f),...h)}return o==="string"?Mi(u.values):u.values}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Am(t,e,n,s,o,r,i){const a=e[0],c=r[0],l=new Array(c),u=new Array(a),d=e[1];if(c===0){if(a!==0)throw new Error(Ii(a));const g=Ce(n,0),x=Ce(o,0);return[g,[0,d],x,l,u]}let h=!0,f=0;const p=new Array(c).fill(0);for(let g=0;g<a;++g){const x=t[g*d];if(x<0)throw new Error(Ei(g,x));if(x>=c)throw new Error(Ri(g,x,c));++p[x],h=h&&x>=f,f=x}let m=!0;for(let g=0;g<c;++g){const x=p[g]===0;l[g]=x,m=m&&!x,p[g]=Math.max(p[g],1),g>0&&(p[g]+=p[g-1])}if(m&&h){const g=t,x=s;for(let C=0;C<a;++C)u[C]=C;return[g,[a,d],x,l,u]}else{const g=p[c-1],x=Ce(n,g*d),C=Ce(o,g),b=new Array(c).fill(0);for(let w=0;w<a;++w){const v=t[w*d],I=b[v],S=(v===0?0:p[v-1])+I;b[v]++;for(let R=0;R<d;++R)x[S*d+R]=t[w*d+R];C[S]=s[w],u[w]=S}for(let w=0;w<c;++w)if(b[w]===0){const I=w===0?0:p[w-1];x[I*d+0]=w;for(let S=1;S<d;++S)x[I*d+S]=0;C[I]=i}return[x,[g,d],C,l,u]}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dm(t,e,n,s,o){const r=E(s),i=e[0],a=o.length,c=[];let l=1,u=-1;for(let g=0;g<a;++g){const x=o[g];if(x===-1){if(u!==-1)throw new Error(Ti(u,g));u=g,c.push(1)}else{if(x<0)throw new Error(ki(g,x));l*=x,c.push(x)}}if(u!==-1){if(l<=0)throw new Error(Ni());const g=Math.trunc(r/l);if(l*g!==r)throw new Error(Fi(s,c));c[u]=g}if(E(c)!==r)throw new Error(Ai(s,c));const h=s.length,f=[];if(h>0){f[h-1]=1;for(let g=h-2;g>=0;--g)f[g]=f[g+1]*s[g+1]}const p=[];if(a>0){p[a-1]=1;for(let g=a-2;g>=0;--g)p[g]=p[g+1]*c[g+1]}const m=Ce(n,i*a);for(let g=0;g<i;++g){let x=0;for(let C=0;C<h;++C)x+=t[g*h+C]*f[C];for(let C=0;C<a;++C)m[g*a+C]=Math.trunc(x/p[C]),x%=p[C]}return[m,[i,a],c]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pm(t,e,n,s,o,r=!1,i=0){const a=s.length,c=[e[0],t.length/e[0]],l=c[1],d=a>0?o[a-1]+1:0;if(d<0)throw new Error($s());const h=e.slice();h[0]=d;const f=h.reduce((b,w)=>b*w,1),p=Ce(n,f);if(a===0)return d>0&&p.fill(i),[p,h];if(d<=0)throw new Error($s());let m=0,g=1,x=0,C=o[m];for(;;){let b=0;if(g<a){if(b=o[g],C===b){++g;continue}if(C>=b)throw new Error(Di())}if(C<0||C>=d)throw new Error(Pi(C,d));C>x&&p.fill(i,x*l,C*l);for(let w=m;w<g;++w){const v=s[w];if(v<0||v>=c[0])throw new Error(Oi(w,s[w],c[0]));for(let I=0;I<l;I++)p[C*l+I]+=t[v*l+I]}if(r)for(let w=0;w<l;w++)p[C*l+w]/=g-m;if(m=g,++g,x=C+1,C=b,g>a)break}return x<d&&p.fill(i,x*l,d*l),[p,h]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Om=qe(t=>Math.sqrt(t));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _m=Ee((t,e)=>{const n=t-e;return n*n});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lm(t,e,n,s){const o=K(t,e.dtype);for(let r=0;r<o.size;r++){const i=o.indexToLoc(r),a=new Array(i.length);for(let c=0;c<a.length;c++)a[c]=i[c]*n[c]+s[c];o.set(e.get(...a),...i)}return o}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Bm{constructor(e,n,s,o,r,i){this.separator=ot(e),this.nGramWidths=n,this.leftPad=ot(s),this.rightPad=ot(o),this.padWidth=r,this.preserveShort=i}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,n){const s=this.getPadWidth(n);return Math.max(0,e+2*s-n+1)}createNGrams(e,n,s,o,r,i){for(let a=0;a<r;++a){const c=this.getPadWidth(i),l=Math.max(0,c-a),u=Math.max(0,c-(r-(a+1))),d=i-(l+u),h=n+(l>0?0:a-c);let f=0;f+=l*this.leftPad.length;for(let C=0;C<d;++C)f+=e[h+C].length;f+=u*this.rightPad.length,f+=(l+u+d-1)*this.separator.length,s[o+a]=new Uint8Array(f);const m=s[o+a];let g=0;const x=C=>C.forEach(b=>m[g++]=b);for(let C=0;C<l;++C)x(this.leftPad),x(this.separator);for(let C=0;C<d-1;++C)x(e[h+C]),x(this.separator);if(d>0){x(e[h+d-1]);for(let C=0;C<u;++C)x(this.separator),x(this.rightPad)}else{for(let C=0;C<u-1;++C)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(e,n){const s=e.length,o=n.length;if(o>0){let c=n[0];if(c!==0)throw new Error(`First split value must be 0, got ${c}`);for(let l=1;l<o;++l){let u=n[l]>=c;if(u=u&&n[l]<=s,!u)throw new Error(`Invalid split value ${n[l]}, must be in [${c}, ${s}]`);c=n[l]}if(c!==s)throw new Error(`Last split value must be data size. Expected ${s}, got ${c}`)}const r=o-1,i=Ce("int32",o);if(s===0||o===0){const c=new Array(s);for(let l=0;l<=r;++l)i[l]=0;return[c,i]}i[0]=0;for(let c=1;c<=r;++c){const l=n[c]-n[c-1];let u=0;this.nGramWidths.forEach(d=>{u+=this.getNumNGrams(l,d)}),this.preserveShort&&l>0&&u===0&&(u=1),i[c]=i[c-1]+u}const a=new Array(i[r]);for(let c=0;c<r;++c){const l=n[c];let u=i[c];if(this.nGramWidths.forEach(d=>{const h=n[c+1]-n[c],f=this.getNumNGrams(h,d);this.createNGrams(e,l,a,u,f,d),u+=f}),this.preserveShort&&u===i[c]){const d=n[c+1]-n[c];if(d===0)continue;const h=d+2*this.padWidth,f=1;this.createNGrams(e,l,a,u,f,h)}}return[a,i]}}function Mm(t,e,n,s,o,r,i,a){return new Bm(n,s,o,r,i,a).compute(t,e)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Um(t,e,n,s){if(!t.length)return;if(e.length===0){for(let r=0;r<t.length;++r)s.push(t.subarray(r,r+1));return}if(e.length===1){const r=e[0];let i=t.indexOf(r);for(;i!==-1;){const a=t.subarray(0,i);(!n||a.length!==0)&&s.push(a),t=t.subarray(i+1),i=t.indexOf(r)}(!n||t.length!==0)&&s.push(t);return}let o=0;for(let r=0;r<t.length+1;r++)if(r===t.length||e.indexOf(t[r])!==-1){const i=t.subarray(o,r);(!n||i.length!==0)&&s.push(i),o=r+1}}function Vm(t,e,n){const s=t.length,o=[];let r=0,i=0;const a=new Array(s);for(let h=0;h<s;++h){const f=o.length;Um(t[h],e,n,o);const p=o.length-f;a[h]=p,r+=p,i=Math.max(i,p)}const c=Ce("int32",r*2),l=new Array(r),u=[s,i];let d=0;for(let h=0;h<s;++h)for(let f=0;f<a[h];++f)c[d*2]=h,c[d*2+1]=f,l[d]=o[d],++d;return[c,l,u]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wm(t,e){const n=Ce("int32",t.length);for(let s=0;s<t.length;++s)n[s]=td(t[s]).modulo(e).getLowBitsUnsigned();return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gm=Ee((t,e)=>t-e);/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zm(t,e){const n=new Array(t.rank);for(let o=0;o<n.length;o++)n[o]=t.shape[o]*e[o];const s=K(n,t.dtype);for(let o=0;o<s.values.length;++o){const r=s.indexToLoc(o),i=new Array(t.rank);for(let c=0;c<i.length;c++)i[c]=r[c]%t.shape[c];const a=t.locToIndex(i);s.values[o]=t.values[a]}return s}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xt=(t,e)=>{const n=e.value-t.value;return n===0?t.index-e.index:n};function Zi(t,e,n=0,s=t.length-1){for(;s>n;){if(s-n>600){const a=s-n+1,c=e-n+1,l=Math.log(a),u=.5*Math.exp(2*l/3),d=.5*Math.sqrt(l*u*(a-u)/a)*Math.sign(c-a/2),h=Math.max(n,Math.floor(e-c*u/a+d)),f=Math.min(s,Math.floor(e+(a-c)*u/a+d));Zi(t,e,h,f)}const o=t[e];let r=n,i=s;for(Wt(t,n,e),Xt(t[s],o)>0&&Wt(t,n,s);r<i;){for(Wt(t,r,i),r++,i--;Xt(t[r],o)<0;)r=r+1;for(;Xt(t[i],o)>0;)i=i-1}Xt(t[n],o)===0?Wt(t,n,i):(i=i+1,Wt(t,i,s)),i<=e&&(n=i+1),e<=i&&(s=i-1)}}function Hm(t,e,n,s,o){const r=e[e.length-1],[i,a]=[t.length/r,r],c=Xe(n,i*s),l=Xe("int32",i*s);for(let d=0;d<i;d++){const h=d*a,f=t.subarray(h,h+a);let p=new Array(f.length);f.forEach((C,b)=>p[b]={value:C,index:b}),s<p.length&&(Zi(p,s),p=p.slice(0,s)),o&&p.sort(Xt);const m=d*s,g=c.subarray(m,m+s),x=l.subarray(m,m+s);for(let C=0;C<s;C++)g[C]=p[C].value,x[C]=p[C].index}const u=e.slice();return u[u.length-1]=s,[K(u,n,c),K(u,"int32",l)]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xm(t,e,n,s){const o=te(e,n)[0],r=[1,n[0],1];for(let p=0;p<o;p++)r[0]*=n[p];r[1]=n[o];for(let p=o+1;p<n.length;p++)r[2]*=n[p];const i={},a=new Int32Array(n[o]),c=new as(r,s,t),l=[],u=r[0]===1&&r[2]===1;for(let p=0;p<n[o];p++){let m;if(u)m=t[p].toString();else{const g=[];for(let x=0;x<r[0];x++)for(let C=0;C<r[2];C++)g.push(c.get(x,p,C));m=g.join(",")}if(i[m]!==void 0)a[p]=i[m];else{const g=Object.keys(i).length;i[m]=g,a[p]=g,l.push(p)}}const d=r.slice();d[1]=Object.keys(i).length;const h=new as(d,s);l.forEach((p,m)=>{for(let g=0;g<r[0];g++)for(let x=0;x<r[2];x++)h.set(c.get(g,p,x),g,m,x)});const f=n.slice();return f[o]=d[1],{outputValues:h.values,outputShape:f,indices:a}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jm=Object.freeze(Object.defineProperty({__proto__:null,simpleAbsImpl:nm,addImpl:sm,bincountImpl:om,bincountReduceImpl:rm,ceilImpl:im,concatImpl:am,equalImpl:cm,expImpl:lm,expm1Impl:um,floorImpl:dm,gatherNdImpl:hm,gatherV2Impl:fm,greaterImpl:pm,greaterEqualImpl:mm,lessImpl:gm,lessEqualImpl:xm,linSpaceImpl:Cm,logImpl:bm,maxImpl:wm,maximumImpl:$m,minimumImpl:vm,multiplyImpl:Qi,negImpl:ym,notEqualImpl:Sm,prodImpl:Em,rangeImpl:Rm,rsqrtImpl:Tm,scatterImpl:km,sigmoidImpl:Nm,sliceImpl:Fm,sparseFillEmptyRowsImpl:Am,sparseReshapeImpl:Dm,sparseSegmentReductionImpl:Pm,sqrtImpl:Om,squaredDifferenceImpl:_m,stridedSliceImpl:Lm,stringNGramsImpl:Mm,stringSplitImpl:Vm,stringToHashBucketFastImpl:Wm,subImpl:Gm,tileImpl:zm,topKImpl:Hm,transposeImpl:Im,uniqueImpl:Xm},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const{addImpl:qm,bincountImpl:Ji,bincountReduceImpl:Km,ceilImpl:Ym,concatImpl:Qm,equalImpl:Zm,expImpl:Jm,expm1Impl:eg,floorImpl:tg,gatherNdImpl:ng,gatherV2Impl:sg,greaterImpl:og,greaterEqualImpl:rg,lessImpl:ig,lessEqualImpl:ag,linSpaceImpl:cg,logImpl:lg,maxImpl:ug,maximumImpl:dg,minimumImpl:hg,multiplyImpl:fg,negImpl:pg,notEqualImpl:mg,prodImpl:gg,rangeImpl:xg,rsqrtImpl:Cg,scatterImpl:bg,sigmoidImpl:wg,simpleAbsImpl:ea,sliceImpl:$g,sparseFillEmptyRowsImpl:vg,sparseReshapeImpl:yg,sparseSegmentReductionImpl:ta,sqrtImpl:Sg,stridedSliceImpl:Ig,stringNGramsImpl:Eg,stringSplitImpl:Rg,stringToHashBucketFastImpl:Tg,subImpl:kg,tileImpl:Ng,topKImpl:Fg,transposeImpl:Ks,uniqueImpl:Ag}=jm;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function na(t,e){return["x","y","z","w","u","v"].slice(0,e).map(n=>`${t}.${n}`)}function J(t,e){return e===1?[t]:na(t,e)}function Dg(t,e){if(t===1)return"rc";let n="";for(let s=0;s<t;s++)n+=e[s],s<t-1&&(n+=",");return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Pg{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=oe(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{const n=J("rc",this.rank),s=L(this.rank),o=this.getOutOfBoundsCondition(n),r=this.getSetup(n),i=this.getOutput(n);this.userCode=`
        void main() {
          ${s} rc = getOutputCoords();

          if(${o}) {
            setOutput(vec4(0));
          } else {
            ${r}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(e){const n=[];for(let s=0;s<=1;s++)for(let o=0;o<=1;o++){let r=`${s===0?"r":"rp1"}, ${o===0?"c":"cp1"}`;for(let i=2;i<this.rank;i++)r=`${e[e.length-1-i]},`+r;n.push(r)}return n}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let n="";for(let s=this.rank-2;s<this.rank;s++)n+=`${e[s]} >= ${this.enableShapeUniforms?`outShape[${s}]`:this.outputShape[s]}`,s<this.rank-1&&(n+="||");return n}getSetup(e){if(this.rank===1)return"";const n=e.slice(-2),s=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],o=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${n[0]};
      int c = ${n[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${s};
      bool rEdge = rp1 >= ${o};
    `}getOutput(e){const n=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${n[0]}),
            cEdge ? 0. : getA(${n[1]}),
            rEdge ? 0. : getA(${n[2]}),
            rEdge || cEdge ? 0. : getA(${n[3]})`}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class sa{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=oe(this.outputShape.length);let s="";for(let o=0;o<4;o++){let r="thisRC = rc;";o%2===1&&(r+="thisRC.z += 1;"),o>1&&(r+="thisRC.y += 1;"),s+=`
        ${r}
        ${o>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${o}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${o>0?"}":""}
      `}this.userCode=`
      ${Og(n,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?js():Xs(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};

        ${s}

        setOutput(result);
      }
    `}}function Og(t,e){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${e?jf(["r","c","d"],"inputShape"):ht(["r","c","d"],t)}
      return ivec3(r, c, d);
    }
  `}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _g{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}acquireTexture(e,n,s){const o=Ao(n,s),r=Do(e,o,s);r in this.freeTextures||(this.freeTextures[r]=[]),r in this.usedTextures||(this.usedTextures[r]=[]);const i=Fo(e,o,this.gpgpu.gl,this.gpgpu.textureConfig,s);if(this.freeTextures[r].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();const c=this.freeTextures[r].shift();return this.usedTextures[r].push(c),c}let a;return o===j.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):o===j.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):o===j.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):o===j.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):o===j.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[r].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(e,n,s,o){if(this.freeTextures==null)return;const r=Ao(s,o),i=Do(n,r,o);i in this.freeTextures||(this.freeTextures[i]=[]);const a=Fo(n,r,this.gpgpu.gl,this.gpgpu.textureConfig,o),c=$().get("WEBGL_DELETE_TEXTURE_THRESHOLD");c!==-1&&this._numBytesAllocated>c?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(e),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;const l=this.usedTextures[i],u=l.indexOf(e);if(u<0)throw new Error("Cannot release a texture that was never provided by this texture manager");l.splice(u,1),this.log()}log(){if(!this.logEnabled)return;const e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);const n=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*n)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(const e in this.freeTextures)this.freeTextures[e].forEach(n=>{this.gpgpu.deleteMatrixTexture(n.texture)});for(const e in this.usedTextures)this.usedTextures[e].forEach(n=>{this.gpgpu.deleteMatrixTexture(n.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}function Lg(t,e){const n=t;if(e===n.R32F)return 4;if(e===n.R16F)return 2;if(e===n.RGBA32F)return 16;if(e===t.RGBA)return 16;if(e===n.RGBA16F)return 8;if(e===n.RGBA8)return 4;throw new Error(`Unknown internal format ${e}`)}function Fo(t,e,n,s,o){const r=Bg(e,s);let i;if(o){const[c,l]=Ot(t[0],t[1]);i=c*l}else{const[c,l]=Jt(t[0],t[1]);i=c*l}const a=Lg(n,r);return i*a}function Bg(t,e){switch(t){case j.PACKED_2X2_FLOAT32:return Ki(e);case j.PACKED_2X2_FLOAT16:return Yi(e);case j.UNPACKED_FLOAT32:return Xi(e);case j.UNPACKED_FLOAT16:return ji(e);case j.PACKED_4X1_UNSIGNED_BYTE:return qi(e);default:throw new Error(`Unknown physical texture type ${t}`)}}function Mg(t){return $().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?t?j.PACKED_2X2_FLOAT32:j.UNPACKED_FLOAT32:t?j.PACKED_2X2_FLOAT16:j.UNPACKED_FLOAT16}function Ao(t,e){if(t===fe.UPLOAD)return j.PACKED_2X2_FLOAT32;if(t===fe.RENDER||t==null)return Mg(e);if(t===fe.DOWNLOAD||t===fe.PIXELS)return j.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${t}`)}function Do(t,e,n){return`${t[0]}_${t[1]}_${e}_${n}`}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Me{constructor(e,n){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=oe(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${n}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}}const Re="if (isnan(x)) return x;",Ug="return x;",Po="return abs(x);",Vg="return (x >= 0.0) ? x : (exp(x) - 1.0);",Wg=Re+`
  return (x < 0.0) ? 0.0 : x;
`,Gg=Re+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,gt="return x;",zg="return 1.0 / (1.0 + exp(-1.0 * x));";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hg="return x;",Xg=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,jg=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,qg=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Kg="return 1.0 / (1.0 + exp(-1.0 * x));";class st{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=oe(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${n}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Yg{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=oe(this.outputShape.length);const n=e.length,s=J("rc",n),o=L(n),r=Dg(n,s),i=s.slice(-2),a=n<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${o} rc = getOutputCoords();
        vec4 packedInput = getA(${r});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qg=Bh,Zg=1e-7,Jg=1e-4,fn={};function ex(t){return t in fn||(fn[t]={}),fn[t]}const tx=$().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),nx=600;function sx(){return $().global.screen==null?1024:$().global.screen.height*$().global.screen.width*window.devicePixelRatio*nx/1024/1024}class An extends tr{constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!$().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let n;if(e!=null){if(e instanceof Zn)n=e;else{const s=Fe($().getNumber("WEBGL_VERSION"),e);n=new Zn(s)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{const s=Fe($().getNumber("WEBGL_VERSION"));n=new Zn(s),this.binaryCache=ex($().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=n,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new _g(this.gpgpu),this.numMBBeforeWarning=sx(),this.texData=new Wa(this,mt())}nextDataId(){return An.nextDataId++}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}write(e,n,s){if(($().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||$().getBool("DEBUG"))&&this.checkNumericalProblems(e),s==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const o={id:this.nextDataId()};return this.texData.set(o,{shape:n,dtype:s,values:e,usage:fe.UPLOAD,refCount:1}),o}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){const n=this.texData.get(e);n.refCount++}decRef(e){if(this.texData.has(e)){const n=this.texData.get(e);n.refCount--}}move(e,n,s,o,r){if($().getBool("DEBUG")&&this.checkNumericalProblems(n),o==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:s,dtype:o,values:n,usage:fe.UPLOAD,refCount:r})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){const n=this.texData.get(e),{values:s,dtype:o,complexTensorInfos:r,slice:i,shape:a,isPacked:c}=n;if(i!=null){let h;c?h=new st(a,gt):h=new Me(a,gt);const f=this.runWebGLProgram(h,[{dataId:e,shape:a,dtype:o}],o),p=this.readSync(f.dataId);return this.disposeIntermediateTensorInfo(f),p}if(s!=null)return this.convertAndCacheOnCPU(e);if(o==="string")return s;const l=this.activeTimers!=null;let u;l&&(u=Te());let d;if(o==="complex64"){const h=this.readSync(r.real.dataId),f=this.readSync(r.imag.dataId);d=ws(h,f)}else d=this.getValuesFromTexture(e);return l&&(this.downloadWaitMs+=Te()-u),this.convertAndCacheOnCPU(e,d)}async read(e){if(this.pendingRead.has(e)){const p=this.pendingRead.get(e);return new Promise(m=>p.push(m))}const n=this.texData.get(e),{values:s,shape:o,slice:r,dtype:i,complexTensorInfos:a,isPacked:c}=n;if(r!=null){let p;c?p=new st(o,gt):p=new Me(o,gt);const m=this.runWebGLProgram(p,[{dataId:e,shape:o,dtype:i}],i),g=this.read(m.dataId);return this.disposeIntermediateTensorInfo(m),g}if(s!=null)return this.convertAndCacheOnCPU(e);if($().getBool("DEBUG")&&!$().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&$().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let l=null,u;if(i!=="complex64"&&$().get("WEBGL_BUFFER_SUPPORTED")){u=this.decode(e);const p=this.texData.get(u.dataId);l=this.gpgpu.createBufferFromTexture(p.texture.texture,...ln(o))}this.pendingRead.set(e,[]),i!=="complex64"&&await this.gpgpu.createAndWaitForFence();let d;if(i==="complex64"){const p=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),m=p[0],g=p[1];d=ws(m,g)}else if(l==null)d=this.getValuesFromTexture(e);else{const p=E(o);d=this.gpgpu.downloadFloat32MatrixFromBuffer(l,p)}if(u!=null&&this.disposeIntermediateTensorInfo(u),l!=null){const p=this.gpgpu.gl;N(p,()=>p.deleteBuffer(l))}const h=this.convertAndCacheOnCPU(e,d),f=this.pendingRead.get(e);return this.pendingRead.delete(e),f.forEach(p=>p(h)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&mt().removeDataId(e,this),this.pendingDeletes--),h}readToGPU(e,n={}){const s=this.texData.get(e),{values:o,shape:r,slice:i,dtype:a,isPacked:c,texture:l}=s;if(a==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let f;c?f=new st(r,gt):f=new Me(r,gt);const p=this.runWebGLProgram(f,[{dataId:e,shape:r,dtype:a}],a),m=this.readToGPU(p,n);return this.disposeIntermediateTensorInfo(p),m}if(l==null)throw o!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const u=this.decode(e,n.customTexShape),d=mt().makeTensorFromTensorInfo(u),h=this.texData.get(u.dataId);return Object.assign({tensorRef:d},h.texture)}bufferSync(e){const n=this.readSync(e.dataId);if(e.dtype==="string")try{const s=n.map(o=>Et(o));return K(e.shape,e.dtype,s)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return K(e.shape,e.dtype,n)}checkNumericalProblems(e){if(e!=null)for(let n=0;n<e.length;n++){const s=e[n];if(!wf(s))throw $().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${s} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${s} cannot be represented on this device.`)}}getValuesFromTexture(e){const{shape:n,dtype:s,isPacked:o}=this.texData.get(e),r=E(n);if($().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){const h=this.decode(e),f=this.texData.get(h.dataId),p=this.gpgpu.downloadMatrixFromPackedTexture(f.texture.texture,...ln(n)).subarray(0,r);return this.disposeIntermediateTensorInfo(h),p}const i=$().getBool("WEBGL_PACK")&&o===!0,a=i?Kn(n):n,c=i?new _p(a):new Op(a),l=this.runWebGLProgram(c,[{shape:a,dtype:s,dataId:e}],"float32"),u=this.texData.get(l.dataId),d=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(u.texture.texture,u.texShape[0],u.texShape[1]).subarray(0,r);return this.disposeIntermediateTensorInfo(l),d}timerAvailable(){return $().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(e){const n=this.activeTimers,s=[];let o=!1;this.programTimersStack==null?(this.programTimersStack=s,o=!0):this.activeTimers.push(s),this.activeTimers=s,e();const r=St(this.activeTimers.map(c=>c.query)).filter(c=>c!=null),i=St(this.activeTimers.map(c=>c.name)).filter(c=>c!=null);this.activeTimers=n,o&&(this.programTimersStack=null);const a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if($().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){const c=await Promise.all(r);a.kernelMs=Ga(c),a.getExtraProfileInfo=()=>c.map((l,u)=>({name:i[u],ms:l})).map(l=>`${l.name}: ${l.ms}`).join(", ")}else a.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,a})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return $().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Te(),endMs:null}}endTimer(e){return $().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=Te(),e)}async getQueryTime(e){if($().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(e);const n=e;return n.endMs-n.startMs}disposeData(e,n=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(n?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!n&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);const{complexTensorInfos:s}=this.texData.get(e);return s!=null&&(this.disposeData(s.real.dataId,n),this.disposeData(s.imag.dataId,n)),this.texData.delete(e),!0}releaseGPUData(e){const{texture:n,dtype:s,texShape:o,usage:r,isPacked:i,slice:a}=this.texData.get(e),c=a&&a.origDataId||e,l=this.dataRefCount.get(c);l>1?this.dataRefCount.set(c,l-1):(this.dataRefCount.delete(c),n!=null&&(this.numBytesInGPU-=this.computeBytes(o,s),this.textureManager.releaseTexture(n,o,r,i)));const u=this.texData.get(e);u.texture=null,u.texShape=null,u.isPacked=!1,u.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,n=tx){return $().getBool("WEBGL_CPU_FORWARD")&&e.every(s=>this.texData.get(s.dataId).texture==null&&E(s.shape)<n)}getGPGPUContext(){return this.gpgpu}where(e){Ne("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");const n=e.dataSync();return Qg(e.shape,n)}packedUnaryOp(e,n,s){const o=new st(e.shape,n),r=this.compileAndRun(o,[e],s);return mt().makeTensorFromTensorInfo(r)}abs(e){if(this.shouldExecuteOnCPU([e])&&e.dtype!=="complex64"){const o=ea(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,o)}if($().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Po,e.dtype);const n=new Me(e.shape,Po),s=this.compileAndRun(n,[e]);return mt().makeTensorFromTensorInfo(s)}makeTensorInfo(e,n,s){let o;if(n==="string"&&s!=null&&s.length>0&&En(s[0])){const r=s.map(i=>ot(i));o=this.write(r,e,n)}else o=this.write(s,e,n);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:n}}makeOutput(e,n,s){return mt().makeTensorFromTensorInfo(this.makeTensorInfo(e,n,s),this)}unpackTensor(e){const n=new Yg(e.shape);return this.runWebGLProgram(n,[e],e.dtype)}packTensor(e){const n=new Pg(e.shape),s=!0;return this.runWebGLProgram(n,[e],e.dtype,null,s)}packedReshape(e,n){const s=[Tt(e.shape),...kt(e.shape)],o={dtype:e.dtype,shape:s,dataId:e.dataId},r=[Tt(n),...kt(n)],i=new sa(r,s),a=!0,c=[s],l=this.runWebGLProgram(i,[o],e.dtype,c,a);return{dataId:l.dataId,shape:n,dtype:l.dtype}}decode(e,n){const s=this.texData.get(e),{isPacked:o,shape:r,dtype:i}=s;if(n!=null){const h=E(r),f=n[0]*n[1]*4;k(h<=f,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}const a=Kn(r);let c;o?c=new Pp(a):c=new Dp(a);const l=!0,u=[n!=null?n:ln(a)],d=this.runWebGLProgram(c,[{shape:a,dtype:i,dataId:e}],i,u,l,n);return{dtype:i,shape:r,dataId:d.dataId}}runWebGLProgram(e,n,s,o,r=!1,i){const a=this.makeTensorInfo(e.outputShape,s),c=this.texData.get(a.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===qt.DENSE){const x=i!=null?i:ln(e.outputShape);c.texShape=x.map(C=>C*2)}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),E(a.shape)===0)return c.values=Xe(a.dtype,0),a;const l=[],u=n.map(x=>{if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let C=this.texData.get(x.dataId);if(C.texture==null){if(!e.packedInputs&&E(x.shape)<=$().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:C.values};e.packedInputs&&(C.isPacked=!0,C.shape=x.shape)}if(this.uploadToGPU(x.dataId),!!C.isPacked!=!!e.packedInputs)x=C.isPacked?this.unpackTensor(x):this.packTensor(x),l.push(x),C=this.texData.get(x.dataId);else if(C.isPacked&&!yn(C.shape,x.shape)){const b=x,w=x.shape;x.shape=C.shape,x=this.packedReshape(x,w),l.push(x),C=this.texData.get(x.dataId),b.shape=w}return{shape:x.shape,texData:C,isUniform:!1}});this.uploadToGPU(a.dataId);const d={shape:a.shape,texData:c,isUniform:!1},h=Ap(e,u,d),f=this.getAndSaveBinary(h,()=>Np(this.gpgpu,e,u,d)),p=this.activeTimers!=null;let m;p&&(m=this.startTimer()),$().get("ENGINE_COMPILE_ONLY")||Fp(this.gpgpu,f,u,d,o),l.forEach(x=>this.disposeIntermediateTensorInfo(x)),p&&(m=this.endTimer(m),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(m)}));const g=$().get("WEBGL_FLUSH_THRESHOLD");if(g>0){const x=Te();x-this.lastGlFlushTime>g&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=x)}if(!$().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&r===!1){const x=this.unpackTensor(a);return this.disposeIntermediateTensorInfo(a),x}return a}compileAndRun(e,n,s,o,r=!1){return s=s||n[0].dtype,this.runWebGLProgram(e,n,s,o,r)}getAndSaveBinary(e,n){return e in this.binaryCache||(this.binaryCache[e]=n()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||($().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(n=>{this.gpgpu.deleteProgram(this.binaryCache[n].webGLProgram),delete this.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=oh(()=>{if(!$().get("WEBGL_RENDER_FLOAT32_ENABLED")){const e=$().getBool("DEBUG");$().set("DEBUG",!1);const n=this.abs(Ih(1e-8)).dataSync()[0];if($().set("DEBUG",e),n>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?Zg:Jg}uploadToGPU(e){const n=this.texData.get(e),{shape:s,dtype:o,values:r,texture:i,usage:a,isPacked:c}=n;if(i!=null)return;const l=this.activeTimers!=null;let u;l&&(u=Te());let d=n.texShape;if(d==null&&(d=Bf(s,c),n.texShape=d),r!=null){const h=Kn(s);let f,p=d[1],m=d[0];const g=r instanceof Uint8Array||r instanceof Uint8ClampedArray;(c||!g)&&([p,m]=Ot(d[0],d[1])),c?f=new Bp(h,g):f=new Lp(h,g);const x=g?[m,p]:d,C=this.makeTensorInfo(x,o),b=this.texData.get(C.dataId);g?b.usage=fe.PIXELS:b.usage=fe.UPLOAD,b.texShape=x,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(C.dataId),p,m,r);const w=[[m,p]],v=!0,I=this.runWebGLProgram(f,[C],o,w,v),S=this.texData.get(I.dataId);n.texShape=S.texShape,n.isPacked=S.isPacked,n.usage=S.usage,$().get("ENGINE_COMPILE_ONLY")?this.disposeData(I.dataId):(n.texture=S.texture,n.values=null,this.texData.delete(I.dataId)),this.disposeIntermediateTensorInfo(C),l&&(this.uploadWaitMs+=Te()-u)}else{const h=this.acquireTexture(d,a,o,c);n.texture=h}}convertAndCacheOnCPU(e,n){const s=this.texData.get(e),{dtype:o}=s;return this.releaseGPUData(e),n!=null&&(s.values=ox(n,o)),s.values}acquireTexture(e,n,s,o){if(this.numBytesInGPU+=this.computeBytes(e,s),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){const r=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${r} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,n,o)}computeBytes(e,n){return e[0]*e[1]*ts(n)}checkCompileCompletion(){for(const[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){const e=[];if(this.gpgpu.parallelCompilationExtension){for(const[,n]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(n));return Promise.all(e)}else{for(const[,n]of Object.entries(this.binaryCache)){const s=new Promise(o=>{try{this.checkCompletion_(n),o(!0)}catch(r){throw r}});e.push(s)}return Promise.all(e)}}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await Jh(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(Ui(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(const[,e]of Object.entries(this.binaryCache)){const{uniformLocations:n,customUniformLocations:s,infLoc:o,nanLoc:r,inShapesLocations:i,inTexShapesLocations:a,outShapeLocation:c,outShapeStridesLocation:l,outTexShapeLocation:u}=Hi(this.gpgpu,e.program,e.webGLProgram);e.uniformLocations=n,e.customUniformLocations=s,e.infLoc=o,e.nanLoc=r,e.inShapesLocations=i,e.inTexShapesLocations=a,e.outShapeLocation=c,e.outShapeStridesLocation=l,e.outTexShapeLocation=u}}}An.nextDataId=0;function ox(t,e){if(e==="float32"||e==="complex64")return t;if(e==="int32"||e==="bool"){const n=e==="int32"?new Int32Array(t.length):new Uint8Array(t.length);for(let s=0;s<n.length;++s)n[s]=Math.round(t[s]);return n}else throw new Error(`Unknown dtype ${e}`)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */Dr()&&rh("webgl",()=>new An,2);/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oa=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;class Nt{constructor(e,n,s){this.variableNames=["A","B"],this.outputShape=se(n,s),this.enableShapeUniforms=oe(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dn=`
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;
`;class nn{constructor(e,n,s,o=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=se(n,s);const r=this.outputShape.length;this.enableShapeUniforms=oe(r);let i="";if(o)if(r===0||E(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${L(r)} coords = getOutputCoords();
        `,r===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{const c=J("coords",r);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${c[r-2]} + 1) >= outShape[${r} - 2];
            bool nextColOutOfBounds =
              (${c[r-1]} + 1) >= outShape[${r} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${c[r-2]} + 1) >= ${this.outputShape[r-2]};
            bool nextColOutOfBounds =
              (${c[r-1]} + 1) >= ${this.outputShape[r-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${i}

        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ue(t){const{inputs:e,backend:n}=t,{x:s}=e;return n.incRef(s.dataId),{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}const rx={kernelName:Ts,backendName:"webgl",kernelFunc:ue};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ke(t){const{inputs:e,backend:n}=t,{real:s,imag:o}=e,r=n.makeTensorInfo(s.shape,"complex64"),i=n.texData.get(r.dataId),a=ue({inputs:{x:s},backend:n}),c=ue({inputs:{x:o},backend:n});return i.complexTensorInfos={real:a,imag:c},r}const ix={kernelName:dr,backendName:"webgl",kernelFunc:Ke};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ra="return (a < 0.) ? b * a : a;",ia=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function ax(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{alpha:r}=s,i=n.makeTensorInfo([],"float32",Ft(r,"float32")),a=$().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new nn(ia,o.shape,i.shape):new Nt(ra,o.shape,i.shape),c=n.runWebGLProgram(a,[o,i],"float32");return n.disposeIntermediateTensorInfo(i),c}const cx={kernelName:fr,backendName:"webgl",kernelFunc:ax};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const aa="return (a < 0.) ? b * a : a;",ca=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function lx(t){const{inputs:e,backend:n}=t,{x:s,alpha:o}=e,r=$().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new nn(ca,s.shape,o.shape):new Nt(aa,s.shape,o.shape);return n.runWebGLProgram(r,[s,o],"float32")}const ux={kernelName:mr,backendName:"webgl",kernelFunc:lx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ut="if (isnan(x)) return x;",dx=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`,hx=`
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;
`;function O({opSnippet:t,packedOpSnippet:e,cpuKernelImpl:n,dtype:s}){return({inputs:o,backend:r})=>{const{x:i}=o,a=r,c=s||i.dtype;if(a.shouldExecuteOnCPU([i])&&n!=null){const d=a.texData.get(i.dataId),h=n(d.values,c);return a.makeTensorInfo(i.shape,c,h)}const l=$().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&e!=null;let u;return l?u=new st(i.shape,e):u=new Me(i.shape,t),a.runWebGLProgram(u,[i],c)}}function Y({opSnippet:t,packedOpSnippet:e,checkOutOfBounds:n=!1,supportsComplex:s=!1,cpuKernelImpl:o,dtype:r}){return({inputs:i,backend:a})=>{const{a:c,b:l}=i,u=a;if(s&&c.dtype==="complex64"){const p=u.texData.get(c.dataId),m=u.texData.get(l.dataId),[g,x]=[[p.complexTensorInfos.real,m.complexTensorInfos.real],[p.complexTensorInfos.imag,m.complexTensorInfos.imag]].map(b=>{const[w,v]=b,I={dataId:w.dataId,dtype:w.dtype,shape:c.shape},S={dataId:v.dataId,dtype:v.dtype,shape:l.shape},R=new Nt(t,c.shape,l.shape);return u.runWebGLProgram(R,[I,S],_e(w.dtype,v.dtype))}),C=Ke({inputs:{real:g,imag:x},backend:u});return u.disposeIntermediateTensorInfo(g),u.disposeIntermediateTensorInfo(x),C}const d=r||_e(c.dtype,l.dtype);if((c.dtype==="string"||l.dtype==="string"||u.shouldExecuteOnCPU([c,l]))&&o!=null){const p=u.texData.get(c.dataId).values,m=u.texData.get(l.dataId).values,g=c.dtype==="string"?jt(p):p,x=c.dtype==="string"?jt(m):m,[C,b]=o(c.shape,l.shape,g,x,d),w=u.makeTensorInfo(b,d),v=u.texData.get(w.dataId);return v.values=C,w}const h=$().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&e!=null;let f;return h?f=new nn(e,c.shape,l.shape,n):f=new Nt(t,c.shape,l.shape),u.runWebGLProgram(f,[c,l],d)}}function Pn(t,e=!1){if(t==="linear")return e?Hg:Ug;if(t==="relu")return e?jg:Wg;if(t==="elu")return e?Xg:Vg;if(t==="relu6")return e?qg:Gg;if(t==="prelu")return e?ca:aa;if(t==="leakyrelu")return e?ia:ra;if(t==="sigmoid")return e?Kg:zg;throw new Error(`Activation ${t} has not been implemented for the WebGL backend.`)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class la{constructor(e,n,s,o=!1,r=!1,i=!1,a=null,c=!1,l=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=s,this.enableShapeUniforms=oe(this.outputShape.length);const u=o?e[1]:e[2],d=Math.ceil(u/2),h=o?"i * 2, rc.y":"rc.y, i * 2",f=r?"rc.z, i * 2":"i * 2, rc.z",p=o?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],m=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"];let g="",x="";a&&(c?g=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:l?g=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:g=`vec4 activation(vec4 x) {
          ${a}
        }`,x="result = activation(result);");const C=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),c&&this.variableNames.push("preluActivationWeights"),l&&this.variableNames.push("leakyreluAlpha");let b="rc.x",w="rc.x";e[0]<n[0]?b=`int(min(float(rc.x), ${e[0]-1}.))`:n[0]<e[0]&&(w=`int(min(float(rc.x), ${n[0]-1}.))`),this.userCode=`
      ${g}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${d}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < ${d}; i++) {
          int batchA = ${b};
          int batchB = ${w};
          vec4 a = getMatrixA(batchA, ${h});
          vec4 b = getMatrixB(batchB, ${f});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${p[0]} * ${m[0]});
          result += (${p[1]} * ${m[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${C}

        ${x}

        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Oo={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"};class _o{constructor(e,n,s){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=se(n,s),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lo="return a * b;";function Ys(t){const{inputs:e,backend:n}=t,{a:s,b:o}=e,r=_e(s.dtype,o.dtype);if(s.dtype==="complex64"){const a=n.texData.get(s.dataId),c=n.texData.get(o.dataId),l=new _o(Oo.REAL,s.shape,o.shape),u=new _o(Oo.IMAG,s.shape,o.shape),d=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:s.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:s.shape},{dataId:c.complexTensorInfos.real.dataId,dtype:c.complexTensorInfos.real.dtype,shape:o.shape},{dataId:c.complexTensorInfos.imag.dataId,dtype:c.complexTensorInfos.imag.dtype,shape:o.shape}],h=n.runWebGLProgram(l,d,"float32"),f=n.runWebGLProgram(u,d,"float32"),p=Ke({inputs:{real:h,imag:f},backend:n});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),p}if(n.shouldExecuteOnCPU([s,o])){const a=n.texData.get(s.dataId),c=n.texData.get(o.dataId),[l,u]=fg(s.shape,o.shape,a.values,c.values,r),d=n.makeTensorInfo(u,r),h=n.texData.get(d.dataId);return h.values=l,d}let i;return $().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new nn(Lo,s.shape,o.shape):i=new Nt(Lo,s.shape,o.shape),n.runWebGLProgram(i,[s,o],r)}const fx={kernelName:pr,backendName:"webgl",kernelFunc:Ys};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function px(t,e,n){const s=[Tt(t.shape),...kt(t.shape)],o={dtype:t.dtype,shape:s,dataId:t.dataId},r=[Tt(e),...kt(e)],i=new sa(r,s),a=!0,c=[s],l=n.runWebGLProgram(i,[o],t.dtype,c,a);return{dataId:l.dataId,shape:e,dtype:l.dtype}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function T(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{shape:r}=s,i=n,a=E(o.shape),c=za(r,a),l=E(c);k(a===l,()=>`The new shape (${c}) has ${l} elements and the old shape (${o.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);const u=i.texData.get(o.dataId);return u.isPacked&&!yn(o.shape,c)&&!(u.texture!==null&&yn(u.shape,c))?px(o,c,i):(i.incRef(o.dataId),{dataId:o.dataId,shape:c,dtype:o.dtype})}const mx={kernelName:xr,backendName:"webgl",kernelFunc:T};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Bo{constructor(e,n){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:r,outSize:i}=e;this.outputShape=[o,i];const a=Math.floor(s/4)*4,c=s%4;let l="sumValue += dot(values, ones);";if(n!=null){const d=1/n;l=`sumValue += dot(values * ${Cn(d)?d.toPrecision(2):d}, ones);`}let u="";r%s>0&&(u=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        float sumValue = 0.0;

        for (int i = 0; i < ${a}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${l}
        }

        int inIdx = inOffset + ${a};
        if (${c===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${l}
        } else if (${c===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${l}
        } else if (${c===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${l}
        }
        setOutput(sumValue);
      }
    `}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class gx{constructor(e,n){this.variableNames=["x"];const{windowSize:s,batchSize:o,inSize:r,outSize:i}=e;this.outputShape=[o,i];let a="0.0",c="";n==="prod"?a="1.0":n==="min"?(a="1.0 / 1e-20",c="min"):n==="max"&&(a="-1.0 / 1e-20",c="max");let l=`${n}(${n}(${n}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;n==="sum"?l="sumValue":n==="prod"?l="prodValue":n==="all"?l="allValue":n==="any"&&(l="anyValue");const u=Math.floor(s/4)*4,d=s%4;let h=`
      if (${n==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${n==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${c}(values, minMaxValue);
        if (${n==="min"} || ${n==="max"}) {
          minMaxValue = ${c}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,f="vec4";n==="all"?(a="1.0",h=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):n==="any"&&(a="0.0",h=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");let p="";r%s>0&&(p=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${a};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${s};

        vec4 minMaxValue = vec4(${a});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${h}
        }

        int inIdx = inOffset + ${u};
        if (${d===1}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${h}
        } else if (${d===2}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${h}
        } else if (${d===3}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${h}
        }
        setOutput(${l});
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xx(t){const e=[];for(;e.length===0||e[e.length-1].outSize!==1;){const n=e.length?e[e.length-1].outSize:t[1],s=Nn(n);e.push({inSize:n,windowSize:s,outSize:Math.ceil(n/s)})}return e}function pt(t,e,n,s){const o=xx(t.shape);let r=t;for(let i=0;i<o.length;i++){const{inSize:a,windowSize:c,outSize:l}=o[i];let u,d;n==="mean"?u=i===0?new Bo({windowSize:c,inSize:a,batchSize:t.shape[0],outSize:l},a):new Bo({windowSize:c,inSize:a,batchSize:t.shape[0],outSize:l}):u=new gx({windowSize:c,inSize:a,batchSize:t.shape[0],outSize:l},n),d=r,r=s.runWebGLProgram(u,[r],e),d.dataId!==t.dataId&&s.disposeIntermediateTensorInfo(d)}return r}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Cx{constructor(e,n){this.variableNames=["A"];const s=new Array(e.length);for(let i=0;i<s.length;i++)s[i]=e[n[i]];this.outputShape=s,this.rank=s.length;const o=L(this.rank),r=bx(n);this.userCode=`
    void main() {
      ${o} resRC = getOutputCoords();
      setOutput(getA(${r}));
    }
    `}}function bx(t){const e=t.length;if(e>6)throw Error(`Transpose for rank ${e} is not yet supported`);const n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],s=new Array(e);for(let o=0;o<t.length;o++)s[t[o]]=n[o];return s.join()}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class wx{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;const s=new Array(e.length);for(let u=0;u<s.length;u++)s[u]=e[n[u]];if(this.outputShape=s,this.rank=s.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);const o=L(this.rank),r=na("rc",this.rank),i=new Array(this.rank);for(let u=0;u<n.length;u++)i[n[u]]=r[u];const a=`vec2(${i.slice(-2).join()})`,c=`++${r[this.rank-1]} < ${s[this.rank-1]}`,l=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
    void main() {
      ${o} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${l};
      if(${c}) {
        result[1] = ${l};
      }
      --${r[this.rank-1]};
      if(++${r[this.rank-2]} < ${s[this.rank-2]}) {
        result[2] = ${l};
        if(${c}) {
          result[3] = ${l};
        }
      }
      setOutput(result);
    }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function On(t,e,n){const s=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new wx(t.shape,e):new Cx(t.shape,e);return n.runWebGLProgram(s,[t],t.dtype)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $x(t,e,n,s){const o=e,r=t.shape.length,i=te(o,t.shape);let a=i;const c=Se(a,r),l=c!=null;let u=t;l&&(u=On(t,c,s),a=Ie(a.length,r)),Pe("sum",a,r);const[d,h]=Le(u.shape,a);let f=d;n&&(f=Ue(d,i));const p=E(h),g=E(t.shape)/p,x=T({inputs:{x:u},attrs:{shape:[g,p]},backend:s}),C=Fs(t.dtype),b=pt(x,C,"sum",s),w=T({inputs:{x:b},attrs:{shape:f},backend:s});return s.disposeIntermediateTensorInfo(x),s.disposeIntermediateTensorInfo(b),l&&s.disposeIntermediateTensorInfo(u),w}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _n(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r,keepDims:i}=s;return $x(o,r,i,n)}const vx={kernelName:wr,backendName:"webgl",kernelFunc:_n};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{perm:r}=s,i=n,a=o.shape.length,c=new Array(a);for(let u=0;u<c.length;u++)c[u]=o.shape[r[u]];let l;if(i.shouldExecuteOnCPU([o])){const d=i.texData.get(o.dataId).values,h=Ks(d,o.shape,o.dtype,r,c);l=i.makeTensorInfo(c,o.dtype);const f=i.texData.get(l.dataId);f.values=h}else l=On(o,r,i);return l}const yx={kernelName:_u,backendName:"webgl",kernelFunc:W};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ua=1e3;function Sn({a:t,b:e,transposeA:n,transposeB:s,backend:o,bias:r=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:c=null}){const l=t.shape.length,u=e.shape.length,d=n?t.shape[l-2]:t.shape[l-1],h=s?e.shape[u-1]:e.shape[u-2],f=n?t.shape[l-1]:t.shape[l-2],p=s?e.shape[u-2]:e.shape[u-1],m=t.shape.slice(0,-2),g=e.shape.slice(0,-2),x=E(m),C=E(g),w=se(t.shape.slice(0,-2),e.shape.slice(0,-2)).concat([f,p]);k(d===h,()=>`Error in matMul: inner shapes (${d}) and (${h}) of Tensors with shapes ${t.shape} and ${e.shape} and transposeA=${n} and transposeB=${s} must match.`);const v=n?[x,d,f]:[x,f,d],I=s?[C,p,h]:[C,h,p],S=T({inputs:{x:t},backend:o,attrs:{shape:v}}),R=T({inputs:{x:e},backend:o,attrs:{shape:I}}),A=[S,R],D=Math.max(x,C),P=n?S.shape[1]:S.shape[2],_=r!=null,z=i!=null,H=c==="leakyrelu",re=c!=null?Pn(c,!0):null,ie=_||z||H||re!=null;let me;if((f===1||p===1)&&P>ua&&ie===!1){let ge=S,We=R;n&&(ge=W({inputs:{x:S},backend:o,attrs:{perm:[0,2,1]}}),A.push(ge)),s&&(We=W({inputs:{x:R},backend:o,attrs:{perm:[0,2,1]}}),A.push(We));const ae=p!==1,rn=p===1;let Bn=ge;ae&&(Bn=T({inputs:{x:ge},backend:o,attrs:{shape:[D,P,1]}}),A.push(Bn));const La=p===1?2:1;let Mn=We;rn&&(Mn=T({inputs:{x:We},backend:o,attrs:{shape:[D,1,P]}}),A.push(Mn));const Zs=Ys({inputs:{a:Bn,b:Mn},backend:o});me=_n({inputs:{x:Zs},backend:o,attrs:{axis:La,keepDims:!0}}),A.push(Zs)}else{const ge=_e(t.dtype,e.dtype),We=new la(v,I,[D,f,p],n,s,_,re,z,H),ae=[S,R];if(r!=null&&ae.push(r),z&&ae.push(i),H){const rn=o.makeTensorInfo([],"float32",Ft(a,"float32"));ae.push(rn),A.push(rn)}me=o.runWebGLProgram(We,ae,ge)}const Ye=T({inputs:{x:me},backend:o,attrs:{shape:w}});A.push(me);for(const ge of A)o.disposeIntermediateTensorInfo(ge);return Ye}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sx(t){const{inputs:e,backend:n,attrs:s}=t,{a:o,b:r,bias:i,preluActivationWeights:a}=e,{transposeA:c,transposeB:l,activation:u,leakyreluAlpha:d}=s;return Sn({a:o,b:r,transposeA:c,transposeB:l,backend:n,bias:i,preluActivationWeights:a,leakyreluAlpha:d,activation:u})}const Ix={kernelName:Gu,backendName:"webgl",kernelFunc:Sx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mo="return abs(x);";function Ex(t){const{inputs:e,backend:n}=t,{x:s}=e;if(n.shouldExecuteOnCPU([s])&&s.dtype!=="complex64"){const r=n.texData.get(s.dataId),i=ea(r.values);return n.makeTensorInfo(s.shape,s.dtype,i)}let o;return $().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new st(s.shape,Mo):o=new Me(s.shape,Mo),n.runWebGLProgram(o,[s],s.dtype)}const Rx={kernelName:oc,backendName:"webgl",kernelFunc:Ex};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tx=Re+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,kx=O({opSnippet:Tx}),Nx={kernelName:rc,backendName:"webgl",kernelFunc:kx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fx=Re+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,Ax=O({opSnippet:Fx}),Dx={kernelName:ic,backendName:"webgl",kernelFunc:Ax};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Uo="return a + b;",Px=Y({opSnippet:Uo,packedOpSnippet:Uo,supportsComplex:!0,cpuKernelImpl:qm}),Ox={kernelName:ur,backendName:"webgl",kernelFunc:Px};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _x{constructor(e,n){this.outputShape=[],this.outputShape=e,this.variableNames=n.map((r,i)=>`T${i}`);const s=[];this.variableNames.forEach(r=>{s.push(`float v${r} = get${r}AtOutCoords();`)});const o=this.variableNames.map(r=>`v${r}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        float result = ${o};
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Lx{constructor(e,n){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=n.map((r,i)=>`T${i}`);const s=[];this.variableNames.forEach(r=>{s.push(`vec4 v${r} = get${r}AtOutCoords();`)});const o=this.variableNames.map(r=>`v${r}`).join(" + ");this.userCode=`
      void main() {
        ${s.join(`
        `)}

        vec4 result = ${o};
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gn(t){const{inputs:e,backend:n}=t,s=e;if(s.length===1)return ue({inputs:{x:s[0]},backend:n});if(s.length>$().get("WEBGL_MAX_TEXTURES_IN_SHADER")){const c=Math.floor(s.length/2),l=gn({inputs:s.slice(0,c),backend:n}),u=gn({inputs:s.slice(c),backend:n});return gn({inputs:[l,u],backend:n})}const o=s.map(c=>c.dtype).reduce((c,l)=>_e(c,l)),r=s.map(c=>c.shape),a=$().getBool("WEBGL_PACK")?new Lx(s[0].shape,r):new _x(s[0].shape,r);return n.runWebGLProgram(a,s,o)}const Bx={kernelName:ac,backendName:"webgl",kernelFunc:gn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mx(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r,keepDims:i}=s,a=o.shape.length,c=te(r,o.shape);let l=c;const u=Se(l,a);let d=o;u!=null&&(d=W({inputs:{x:o},backend:n,attrs:{perm:u}}),l=Ie(l.length,a)),Pe("all",l,a);const[h,f]=Le(d.shape,l),p=E(f),m=T({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}}),g=pt(m,m.dtype,"all",n);let x;if(i){const C=Ue(h,c);x=T({inputs:{x:g},backend:n,attrs:{shape:C}})}else x=T({inputs:{x:g},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),x}const Ux={kernelName:cc,backendName:"webgl",kernelFunc:Mx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vx(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r,keepDims:i}=s,a=o.shape.length,c=te(r,o.shape);let l=c;const u=Se(l,a);let d=o;u!=null&&(d=W({inputs:{x:o},backend:n,attrs:{perm:u}}),l=Ie(l.length,a)),Pe("any",l,a);const[h,f]=Le(d.shape,l),p=E(f),m=T({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}}),g=pt(m,m.dtype,"any",n);let x;if(i){const C=Ue(h,c);x=T({inputs:{x:g},backend:n,attrs:{shape:C}})}else x=T({inputs:{x:g},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),x}const Wx={kernelName:lc,backendName:"webgl",kernelFunc:Vx};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Gx{constructor(e,n,s){this.variableNames=["A"];const{windowSize:o,batchSize:r,outSize:i}=e;s||this.variableNames.push("bestIndicesA"),this.outputShape=[r,i];const a=n==="max"?">":"<",c=s?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${o}; i++) {
          int inIdx = ${c};
          float candidate = getA(batch, inIdx);
          if (candidate ${a} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class zx{constructor(e,n,s,o){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,k(e.length>2,()=>`Packed arg${s.charAt(0).toUpperCase()+s.slice(1)} supports only inputs with rank above 2.`);const r=e[e.length-1],i=Math.ceil(r/n);this.outputShape=e.slice(0,-1),i>1&&this.outputShape.push(i),o||this.variableNames.push("bestIndicesA");const a=this.outputShape,c=a.length,l=L(c),u=J("coords",c);let d,h;if(i===1){h=c+1;const R=L(h);d=`
        ${R} sourceLocR = ${R}(${u.join()}, 0);
        ++${u[c-1]};
        ${R} sourceLocG = ${R}(${u.join()}, 0);
        ++${u[c-2]};
        ${R} sourceLocA = ${R}(${u.join()}, 0);
        --${u[c-1]};
        ${R} sourceLocB = ${R}(${u.join()}, 0);
        --${u[c-2]};`}else h=c,d=`
        ${l} sourceLocR = coords;
        ++${u[c-1]};
        ${l} sourceLocG = coords;
        ++${u[c-2]};
        ${l} sourceLocA = coords;
        --${u[c-1]};
        ${l} sourceLocB = coords;
        --${u[c-2]};`;const f=["x","y","z","w","u","v"].slice(0,h),p="."+f[h-1],m=f.map(R=>"int "+R),g=J("sourceLocR",h-1).concat("inIdx.r"),x=J("sourceLocG",h-1).concat("inIdx.g"),C=J("sourceLocB",h-1).concat("inIdx.b"),b=J("sourceLocA",h-1).concat("inIdx.a"),w=s==="max"?"greaterThan":"lessThan",v=o?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${C.join()}),
                             getBestIndicesAChannel(${b.join()})));`,I=`vec4(
            getAChannel(${g.join()}),
            hasNextCol ? getAChannel(${x.join()}) : 0.,
            hasNextRow ? getAChannel(${C.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${b.join()}) : 0.)`,S=o?"":`
      float getBestIndicesAChannel(${m.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${m.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${S}
      void main() {
        ${l} coords = getOutputCoords();
        bool hasNextCol = ${u[c-1]} < ${a[c-1]-1};
        bool hasNextRow = ${u[c-2]} < ${a[c-2]-1};
        ${d}
        ivec4 srcIdx = ivec4(sourceLocR${p}, sourceLocG${p},
          sourceLocB${p}, sourceLocA${p}) * ${n};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${I};

        for (int i = 0; i < ${n}; i++) {
          inIdx = srcIdx;
          ${v}
          vec4 candidate = ${I};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${w}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function da(t,e,n,s=null){let o=e.shape[0],r=e.shape[1];s!=null&&(o=s.shape[0],r=s.shape[1]);const i=Nn(r),a={windowSize:i,inSize:r,batchSize:o,outSize:Math.ceil(r/i)},c=new Gx(a,n,s==null),l=[e];s!=null&&l.push(s);const u=t.runWebGLProgram(c,l,"int32");if(u.shape[1]===1)return u;const d=da(t,e,n,u);return t.disposeIntermediateTensorInfo(u),d}function ha(t,e,n,s=null){const o=s!=null?s.shape:e.shape,r=o[o.length-1],i=Nn(r),a=new zx(o,i,n,s==null),c=s==null?[e]:[e,s],l=t.runWebGLProgram(a,c,"int32");if(l.shape.length===e.shape.length){const u=ha(t,e,n,l);return t.disposeIntermediateTensorInfo(l),u}return l}function fa(t,e,n,s){const o=[n];if(Pe("arg"+s.charAt(0).toUpperCase()+s.slice(1),o,e.shape.length),!$().getBool("WEBGL_PACK_REDUCE")||e.shape.length<=2){const r=[],i=t.texData.get(e.dataId),a=i!==null&&i.isPacked;let c=e;a&&(c=t.unpackTensor(e),r.push(c));const[l,u]=Le(c.shape,o),d=E(u),h=T({inputs:{x:c},backend:t,attrs:{shape:[-1,d]}});r.push(h);const f=da(t,h,s);r.push(f);const p=T({inputs:{x:f},backend:t,attrs:{shape:l}});return r.forEach(m=>t.disposeIntermediateTensorInfo(m)),p}return ha(t,e,s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hx(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r}=s;let i=te(r,o.shape);const a=Se(i,o.shape.length);let c=o;const l=[];a!=null&&(c=W({inputs:{x:o},backend:n,attrs:{perm:a}}),l.push(c),i=Ie(i.length,c.shape.length)),Pe("argMax",[i[0]],c.shape.length);const u=fa(n,c,i[0],"max");return l.forEach(d=>n.disposeIntermediateTensorInfo(d)),u}const Xx={kernelName:uc,backendName:"webgl",kernelFunc:Hx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jx(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r}=s;let i=te(r,o.shape);const a=Se(i,o.shape.length);let c=o;const l=[];a!=null&&(c=W({inputs:{x:o},backend:n,attrs:{perm:a}}),l.push(c),i=Ie(i.length,c.shape.length)),Pe("argMin",[i[0]],c.shape.length);const u=fa(n,c,i[0],"min");return l.forEach(d=>n.disposeIntermediateTensorInfo(d)),u}const qx={kernelName:dc,backendName:"webgl",kernelFunc:jx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kx=Re+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Yx=O({opSnippet:Kx}),Qx={kernelName:hc,backendName:"webgl",kernelFunc:Yx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zx=Re+"return log(x + sqrt(x * x + 1.0));",Jx=O({opSnippet:Zx}),e0={kernelName:fc,backendName:"webgl",kernelFunc:Jx};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const t0=Re+`
  return atan(x);
`,n0=O({opSnippet:t0}),s0={kernelName:pc,backendName:"webgl",kernelFunc:n0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const o0=dx+`
  return atan(a, b);
`,r0=`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  `+hx+`
  return result;
`,i0=Y({opSnippet:o0,packedOpSnippet:r0}),a0={kernelName:gc,backendName:"webgl",kernelFunc:i0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const c0=Re+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,l0=O({opSnippet:c0}),u0={kernelName:mc,backendName:"webgl",kernelFunc:l0};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Kt{constructor(e,n,s,o=!1,r=!1){if(this.variableNames=["x"],n==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=e.filterWidth,a=e.strideHeight,c=e.strideWidth,l=e.dilationHeight,u=e.dilationWidth,d=e.effectiveFilterHeight,h=e.effectiveFilterWidth,f=e.padInfo.top,p=e.padInfo.left;this.outputShape=e.outShape;const m=n==="avg",g=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,x=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`;let C="0.0";if(m||(C="-1.0 / 1e-20"),s){const R=">=";this.userCode=`
        const ivec2 strides = ivec2(${a}, ${c});
        const ivec2 pads = ivec2(${f}, ${p});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${d};
              wR += ${l}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${h};
                wC += ${u}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value ${R} currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${o?r?g:x:`wR * ${h} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const b="max";let w=`${n}(${n}(${n}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;n==="avg"&&(w="avgValue / count");const v=Math.floor(i/4)*4,I=i%4,S=`
      if (${m}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${b}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${c});
      const ivec2 pads = ivec2(${f}, ${p});
      const float initializationValue = ${C};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${C});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${d};
            wR += ${l}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${v}; wC += 4) {
            int xC = xCCorner + wC * ${u};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              getValue(batch, xR, xC + 3 * ${u}, d)
            );

            ${S}
          }

          int xC = xCCorner + ${v};
          if (${I===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${S}
          } else if (${I===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              initializationValue,
              initializationValue
            );

            ${S}
          } else if (${I===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${u}, d),
              getValue(batch, xR, xC + 2 * ${u}, d),
              initializationValue
            );

            ${S}
          }
        }
        setOutput(${w});
      }
    `}}class Qs{constructor(e,n,s,o=!1,r=!1){if(this.variableNames=["x"],n==="avg"&&s)throw new Error("Cannot compute positions for average pool.");const i=e.filterWidth,a=e.strideDepth,c=e.strideHeight,l=e.strideWidth,u=e.dilationDepth,d=e.dilationHeight,h=e.dilationWidth,f=e.effectiveFilterDepth,p=e.effectiveFilterHeight,m=e.effectiveFilterWidth,g=e.padInfo.front,x=e.padInfo.top,C=e.padInfo.left;this.outputShape=e.outShape;const b=n==="avg";let w="0.0";if(b||(w="-1.0 / 1e-20"),s){const D=">=";this.userCode=`
        const ivec3 strides =
            ivec3(${a}, ${c}, ${l});
        const ivec3 pads = ivec3(${g}, ${x}, ${C});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${f};
              wD += ${u}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${p};
                wR += ${d}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${m};
                  wC += ${h}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value ${D} currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${o?r?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${p} * ${m} +
                      wR * ${m} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}const v="max";let I=`${n}(${n}(${n}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;n==="avg"&&(I="avgValue / count");const S=Math.floor(i/4)*4,R=i%4,A=`
      if (${b}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${v}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${a}, ${c}, ${l});
      const ivec3 pads = ivec3(${g}, ${x}, ${C});
      const float initializationValue = ${w};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${w});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${f};
            wD += ${u}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${p};
            wR += ${d}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${S}; wC += 4) {
              int xC = xCCorner + wC * ${h};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                getValue(batch, xD, xR, xC + 2 * ${h}, ch),
                getValue(batch, xD, xR, xC + 3 * ${h}, ch)
              );

              ${A}
            }

            int xC = xCCorner + ${S};
            if (${R===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${A}
            } else if (${R===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                initializationValue,
                initializationValue
              );

              ${A}
            } else if (${R===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${h}, ch),
                getValue(batch, xD, xR, xC + 2 * ${h}, ch),
                initializationValue
              );

              ${A}
            }
          }
          setOutput(${I});
        }
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d0(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e;en(o,"avgPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:c}=s,l=1;k(Dt(i,l),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${l}'`);const u=At(o.shape,r,i,l,a,c);if(u.filterWidth===1&&u.filterHeight===1&&q(u.inShape,u.outShape))return ue({inputs:{x:o},backend:n});const d=new Kt(u,"avg",!1);return n.runWebGLProgram(d,[o],"float32")}const h0={kernelName:xc,backendName:"webgl",kernelFunc:d0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f0(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{filterSize:r,strides:i,pad:a,dimRoundingMode:c,dataFormat:l}=s,u=[1,1,1],d=Qt(o.shape,r,i,u,a,c,l),h=new Qs(d,"avg",!1);return n.runWebGLProgram(h,[o],"float32")}const p0={kernelName:bc,backendName:"webgl",kernelFunc:f0};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class m0{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const n=e.filterHeight,s=e.filterWidth,o=e.strideHeight,r=e.strideWidth,i=e.dilationHeight,a=e.dilationWidth,c=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=c-1-e.padInfo.top,d=l-1-e.padInfo.left,h=1/(n*s);this.userCode=`
      const ivec2 pads = ivec2(${u}, ${d});
      const float avgMultiplier = float(${h});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${c};
            wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${l};
            wC+= ${a}) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}}class g0{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;const n=e.filterDepth,s=e.filterHeight,o=e.filterWidth,r=e.strideDepth,i=e.strideHeight,a=e.strideWidth,c=e.dilationDepth,l=e.dilationHeight,u=e.dilationWidth,d=e.effectiveFilterDepth,h=e.effectiveFilterHeight,f=e.effectiveFilterWidth,p=d-1-e.padInfo.front,m=h-1-e.padInfo.top,g=f-1-e.padInfo.left,x=1/(n*s*o);this.userCode=`
      const ivec3 pads = ivec3(${p}, ${m}, ${g});
      const float avgMultiplier = float(${x});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${d};
            wD += ${c}) {
          float dyD = float(dyDCorner + wD) / ${r}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${h};
              wR += ${l}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${f};
                wC += ${u}) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function x0(t){const{inputs:e,backend:n,attrs:s}=t,{dy:o,input:r}=e,i=r,{filterSize:a,strides:c,pad:l,dimRoundingMode:u}=s,d=[1,1,1],h=Qt(i.shape,a,c,d,l,u),f=new g0(h);return n.runWebGLProgram(f,[o],i.dtype)}const C0={kernelName:wc,backendName:"webgl",kernelFunc:x0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function b0(t){const{inputs:e,backend:n,attrs:s}=t,{dy:o,input:r}=e,i=r;en([o,r],"avgPoolGrad");const{filterSize:a,strides:c,pad:l}=s,u=At(i.shape,a,c,1,l),d=new m0(u);return n.runWebGLProgram(d,[o],i.dtype)}const w0={kernelName:Cc,backendName:"webgl",kernelFunc:b0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $0(t){const{inputs:e,backend:n,attrs:s}=t,{a:o,b:r}=e,{transposeA:i,transposeB:a}=s;return Sn({a:o,b:r,transposeA:i,transposeB:a,backend:n})}const v0={kernelName:$c,backendName:"webgl",kernelFunc:$0};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class y0{constructor(e,n,s,o,r,i){this.outputShape=[],this.variableNames=["x","mean","variance"],se(e,n),se(e,s);let a="0.0";o!=null&&(se(e,o),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let c="1.0";r!=null&&(se(e,r),this.variableNames.push("scale"),c="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${c};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class S0{constructor(e,n,s,o,r,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],se(e,n),se(e,s);let a="vec4(0.0)";o!=null&&(se(e,o),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let c="vec4(1.0)";r!=null&&(se(e,r),this.variableNames.push("scale"),c="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${c};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const I0=({inputs:t,backend:e,attrs:n})=>{const{x:s,mean:o,variance:r,offset:i,scale:a}=t;k(o.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),k(i==null||o.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),k(a==null||o.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:c}=n;c==null&&(c=.001);const l=[s,o,r];let u=null;i!=null&&(u=i.shape,l.push(i));let d=null;a!=null&&(d=a.shape,l.push(a));const h=$().getBool("WEBGL_PACK_NORMALIZATION")?new S0(s.shape,o.shape,r.shape,u,d,c):new y0(s.shape,o.shape,r.shape,u,d,c);return e.runWebGLProgram(h,l,l[0].dtype)},E0={kernelName:il,backendName:"webgl",kernelFunc:I0};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class R0{constructor(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;const n=L(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const s=T0(this.rank);let o;const r=e.map((i,a)=>`sourceLoc.${ys[a]} = start[${a}] + coords.${ys[a]};`);o=`
        ${n} sourceLoc;
        ${n} coords = getOutputCoords();
        ${r.join(`
`)}
      `,this.userCode=`
      void main() {
        ${o}
        setOutput(getSource(${s}));
      }
    `}}const ys=["x","y","z","w","u","v"];function T0(t){if(t===1)return"sourceLoc";if(t<=6)return ys.slice(0,t).map(e=>"sourceLoc."+e).join(",");throw Error(`Slicing for rank ${t} is not yet supported`)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class k0{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];const n=L(this.rank),s=J("coords",this.rank),o=J("sourceLoc",this.rank),r=this.rank===1?"sourceLoc":`vec2(${o.slice(-2).join()})`,i=`getChannel(getSource(${o.join()}), ${r})`,a=`
      result.x = ${i};
      if (++${s[this.rank-1]} < ${e[this.rank-1]}) {
        ++${o[this.rank-1]};
        result.y = ${i};
        --${o[this.rank-1]};
      }
    `,c=this.rank===1?"":`
      --${s[this.rank-1]};
      if (++${s[this.rank-2]} < ${e[this.rank-2]}) {
        ++${o[this.rank-2]};
        result.z = ${i};
        if (++${s[this.rank-1]} < ${e[this.rank-1]}) {
          ++${o[this.rank-1]};
          result.w = ${i};
        }
      }
    `,l=this.rank<=4?`sourceLoc = coords +
            ${n}(${e.map((u,d)=>`start[${d}]`).join()});`:e.map((u,d)=>`${o[d]} = ${s[d]} + start[${d}];`).join(`
`);this.userCode=`
      void main() {
        ${n} coords = getOutputCoords();
        ${n} sourceLoc;
        ${l}
        vec4 result = vec4(0.);
        ${a}
        ${c}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function N0(t,e,n,s){const o=s.texData.get(t.dataId),r=s.makeTensorInfo(n,t.dtype),i=s.texData.get(r.dataId);Object.assign(i,o),i.refCount=1,i.shape=n,i.dtype=t.dtype;let a=_s(e,Q(t.shape));o.slice&&(a+=o.slice.flatOffset),i.slice={flatOffset:a,origDataId:o.slice&&o.slice.origDataId||t.dataId};const c=s.dataRefCount.get(i.slice.origDataId)||1;return s.dataRefCount.set(i.slice.origDataId,c+1),r}function Vt(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{begin:r,size:i}=s,[a,c]=si(o,r,i);if(jr(o,a,c),E(c)===0)return n.makeTensorInfo(c,o.dtype,[]);if(n.shouldExecuteOnCPU([o])||o.dtype==="string"){const d=n.texData.get(o.dataId),h=$g(d.values,a,c,o.shape,o.dtype);return n.makeTensorInfo(c,o.dtype,h)}const{isPacked:l}=n.texData.get(o.dataId),u=Os(o.shape,a,c);if(l||!u){const d=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new k0(c):new R0(c),h=[a];return n.runWebGLProgram(d,[o],o.dtype,h)}return n.uploadToGPU(o.dataId),N0(o,a,c,n)}const F0={kernelName:uu,backendName:"webgl",kernelFunc:Vt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const A0=t=>{const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{blockShape:r,crops:i}=s;k(o.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");const a=r.reduce((C,b)=>C*b),c=Ws(o.shape,r,a),l=Gs(c.length,r.length),u=zs(o.shape,r,a),d=li(i,r.length),h=ui(u,i,r.length),f=[],p=T({inputs:{x:o},backend:n,attrs:{shape:c}}),m=W({inputs:{x:p},backend:n,attrs:{perm:l}}),g=T({inputs:{x:m},backend:n,attrs:{shape:u}}),x=Vt({inputs:{x:g},backend:n,attrs:{begin:d,size:h}});return f.push(p),f.push(m),f.push(g),f.forEach(C=>n.disposeIntermediateTensorInfo(C)),x},D0={kernelName:vc,backendName:"webgl",kernelFunc:A0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function P0(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,weights:r}=e,{size:i}=s,a=n.readSync(o.dataId),c=n.readSync(r.dataId),l=Ji(a,c,r.dtype,r.shape,i);return n.makeTensorInfo([i],r.dtype,l)}const O0={kernelName:yc,backendName:"webgl",kernelFunc:P0};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _0(t){const{inputs:e,backend:n}=t,{s0:s,s1:o}=e,r=n.readSync(s.dataId),i=n.readSync(o.dataId),a=se(Array.from(r),Array.from(i));return n.makeTensorInfo([a.length],"int32",Int32Array.from(a))}const L0={kernelName:Sc,backendName:"webgl",kernelFunc:_0};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const B0="return float(a != b);",pa=Y({opSnippet:B0,cpuKernelImpl:mg,dtype:"bool"}),M0={kernelName:Ul,backendName:"webgl",kernelFunc:pa};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sn(t){const{inputs:e,backend:n}=t,{input:s}=e,o=n.texData.get(s.dataId);return ue({inputs:{x:o.complexTensorInfos.real},backend:n})}const U0={kernelName:Ql,backendName:"webgl",kernelFunc:sn};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const V0="return float(int(x));";function W0(t,e){const n=new Me(t.shape,V0),s=e.runWebGLProgram(n,[t],"int32");return{dataId:s.dataId,shape:s.shape,dtype:s.dtype}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ss(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{dtype:r}=s;if(r==="complex64"){if(o.dtype==="complex64")return ue({inputs:{x:o},backend:n});const i=bs(o.shape),a=Ss({inputs:{x:o},backend:n,attrs:{dtype:"float32"}}),c=Ke({inputs:{real:a,imag:i},backend:n});return i.dispose(),n.disposeIntermediateTensorInfo(a),c}if(o.dtype==="complex64"){const i=sn({inputs:{input:o},backend:n}),a=Ss({inputs:{x:i},backend:n,attrs:{dtype:r}});return n.disposeIntermediateTensorInfo(i),a}if(!ja(o.dtype,r)){const i=ue({inputs:{x:o},backend:n});return{dataId:i.dataId,shape:i.shape,dtype:r}}if(r==="int32")return W0(o,n);if(r==="bool"){const i=n.makeTensorInfo([],"bool",Xe("bool",1)),c=pa({inputs:{a:o,b:i},backend:n});return n.disposeIntermediateTensorInfo(i),c}throw new Error(`Error in Cast: failed to cast ${o.dtype} to ${r}`)}const G0={kernelName:Rs,backendName:"webgl",kernelFunc:Ss};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vo="return ceil(x);",z0=O({opSnippet:Vo,packedOpSnippet:Vo,cpuKernelImpl:Ym}),H0={kernelName:Ic,backendName:"webgl",kernelFunc:z0};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class X0{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class j0{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q0(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{clipValueMin:r,clipValueMax:i}=s;let a;$().getBool("WEBGL_PACK_CLIP")?a=new j0(o.shape):a=new X0(o.shape);const c=[[r],[i]];return n.runWebGLProgram(a,[o],o.dtype,c)}const K0={kernelName:Ec,backendName:"webgl",kernelFunc:q0};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Y0{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wo(t,e){return{dataId:e.dataId,dtype:e.dtype,shape:t.shape}}function Q0(t){const{inputs:e,backend:n}=t,{x:s}=e,o=n.texData.get(s.dataId),r=new Y0(s.shape),i=[Wo(s,o.complexTensorInfos.real),Wo(s,o.complexTensorInfos.imag)];return n.runWebGLProgram(r,i,i[0].dtype)}const Z0={kernelName:Rc,backendName:"webgl",kernelFunc:Q0};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class J0{constructor(e){this.outputShape=[],this.outputShape=lt(e,1),this.variableNames=e.map((i,a)=>`T${a}`);const n=new Array(e.length-1);n[0]=e[0][1];for(let i=1;i<n.length;i++)n[i]=n[i-1]+e[i][1];const s=[`if (yC < ${n[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<n.length;i++){const a=n[i-1];s.push(`else if (yC < ${n[i]}) setOutput(getT${i}(yR, yC-${a}));`)}const o=n.length,r=n[n.length-1];s.push(`else setOutput(getT${o}(yR, yC-${r}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${s.join(`
        `)}
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class eC{constructor(e,n){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=lt(e,n);const s=this.outputShape,o=s.length,r=L(o),i=J("coords",o),a=["x","y","z","w","u","v"].slice(0,o);this.variableNames=e.map((m,g)=>`T${g}`);const c=new Array(e.length-1);c[0]=e[0][n];for(let m=1;m<c.length;m++)c[m]=c[m-1]+e[m][n];const l=a[n],u=a.slice(-2),d=a.join();let h=`if (${l} < ${c[0]}) {
        return getChannel(
            getT0(${d}), vec2(${u.join()}));
        }`;for(let m=1;m<c.length;m++){const g=c[m-1];h+=`
        if (${l} < ${c[m]}  && ${l} >= ${c[m-1]}) {
          return getChannel(
            getT${m}(${pn(a,l,g)}),
            vec2(${pn(u,l,g)}));
        }`}const f=c.length,p=c[c.length-1];h+=`
        return getChannel(
          getT${f}(${pn(a,l,p)}),
          vec2(${pn(u,l,p)}));`,this.userCode=`
      float getValue(${a.map(m=>"int "+m)}) {
        ${h}
      }

      void main() {
        ${r} coords = getOutputCoords();
        vec4 result = vec4(getValue(${i}), 0., 0., 0.);

        ${i[o-1]} = ${i[o-1]} + 1;
        if (${i[o-1]} < ${s[o-1]}) {
          result.g = getValue(${i});
        }

        ${i[o-2]} = ${i[o-2]} + 1;
        if (${i[o-2]} < ${s[o-2]}) {
          result.a = getValue(${i});
        }

        ${i[o-1]} = ${i[o-1]} - 1;
        if (${i[o-2]} < ${s[o-2]} &&
            ${i[o-1]} < ${s[o-1]}) {
          result.b = getValue(${i});
        }
        setOutput(result);
      }
    `}}function pn(t,e,n){const s=t.indexOf(e);return t.map((r,i)=>i===s?`${r} - ${n}`:r).join()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ln(t){const{inputs:e,backend:n}=t,{input:s}=e,o=n.texData.get(s.dataId);return ue({inputs:{x:o.complexTensorInfos.imag},backend:n})}const tC={kernelName:hl,backendName:"webgl",kernelFunc:Ln};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wt(t,e,n){const s=t[0].dtype;if(s==="complex64"){const u=t.map(m=>sn({inputs:{input:m},backend:n})),d=t.map(m=>Ln({inputs:{input:m},backend:n})),h=wt(u,e,n),f=wt(d,e,n),p=Ke({inputs:{real:h,imag:f},backend:n});return u.forEach(m=>n.disposeIntermediateTensorInfo(m)),d.forEach(m=>n.disposeIntermediateTensorInfo(m)),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),p}let o=n.shouldExecuteOnCPU(t);if(s==="string"&&(o=!0),o){const u=t.map(x=>{const C=E(x.shape.slice(e));return T({inputs:{x},backend:n,attrs:{shape:[-1,C]}})}),d=u.map(x=>({vals:n.readSync(x.dataId),shape:x.shape})),h=lt(u.map(x=>x.shape),1),f=u[0].shape[0]===1,p=Qm(d,h,s,f),m=lt(t.map(x=>x.shape),e),g=n.makeTensorInfo(m,s,p);return u.forEach(x=>n.disposeIntermediateTensorInfo(x)),g}if(t.length>$().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){const u=Math.floor(t.length/2),d=wt(t.slice(0,u),e,n),h=wt(t.slice(u),e,n),f=wt([d,h],e,n);return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(h),f}if($().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&t[0].shape.length>1){const u=new eC(t.map(d=>d.shape),e);return n.runWebGLProgram(u,t,s)}const{tensors2D:r,outShape:i}=nC(t,e,n),a=new J0(r.map(u=>u.shape)),c=n.runWebGLProgram(a,r,s);r.forEach(u=>n.disposeIntermediateTensorInfo(u));const l=T({inputs:{x:c},attrs:{shape:i},backend:n});return n.disposeIntermediateTensorInfo(c),l}function nC(t,e,n){const s=lt(t.map(r=>r.shape),e);return{tensors2D:t.map(r=>T({inputs:{x:r},attrs:{shape:[-1,E(r.shape.slice(e))]},backend:n})),outShape:s}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ma(t){const{inputs:e,backend:n,attrs:s}=t,{axis:o}=s,r=te(o,e[0].shape)[0],i=lt(e.map(l=>l.shape),r);if(E(i)===0)return n.makeTensorInfo(i,e[0].dtype,[]);const a=e.filter(l=>E(l.shape)>0);if(a.length===1)return ue({inputs:{x:a[0]},backend:n});const c=a.map(l=>l.shape);return ai(c,r),wt(a,r,n)}const sC={kernelName:Tc,backendName:"webgl",kernelFunc:ma};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ga{constructor(e,n=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;const i=e.padInfo.top,a=e.padInfo.left,c=e.strideHeight,l=e.strideWidth,u=e.dilationHeight,d=e.dilationWidth,h=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,m=e.inChannels%4,g=e.dataFormat==="channelsLast",x=g?1:2,C=g?2:3,b=g?3:1;let w="",v="";s&&(o?w=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?w=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:w=`
          float activation(float x) {
            ${s}
          }
        `,v="result = activation(result);");const I=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${w}

      const ivec2 strides = ivec2(${c}, ${l});
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${b}];

        ivec2 xRCCorner =
            ivec2(coords[${x}], coords[${C}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${h}; wR++) {
          int xR = xRCorner + wR * ${u};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${f}; wC++) {
            int xC = xCCorner + wC * ${d};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${p}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${g}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${m===1}) {

              if (${g}) {
                dotProd +=
                    getX(batch, xR, xC, ${p}) *
                    getW(wR, wC, ${p}, d2);
              } else {
                dotProd +=
                    getX(batch, ${p}, xR, xC) *
                    getW(wR, wC, ${p}, d2);
              }

            } else if (${m===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2)
              );

              if (${g}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${m===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2),
                getW(wR, wC, ${p} + 2, d2)
              );

              if (${g}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1),
                  getX(batch, xR, xC, ${p} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC),
                  getX(batch, ${p} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${I}
        ${v}
        setOutput(result);
      }
    `}}class oC{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const n=e.padInfo.front,s=e.padInfo.top,o=e.padInfo.left,r=e.strideDepth,i=e.strideHeight,a=e.strideWidth,c=e.dilationDepth,l=e.dilationHeight,u=e.dilationWidth,d=e.filterDepth,h=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,m=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${r}, ${i}, ${a});
      const ivec3 pads = ivec3(${n}, ${s}, ${o});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${d}; wF++) {
          int xF = xFCorner + wF * ${c};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${h}; wR++) {
            int xR = xRCorner + wR * ${l};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f}; wC++) {
              int xC = xCCorner + wC * ${u};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${p}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${m===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${p}) *
                  getW(wF, wR, wC, ${p}, d2);
              } else if (${m===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${m===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1),
                  getX(batch, xF, xR, xC, ${p} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2),
                  getW(wF, wR, wC, ${p} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class rC{constructor(e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=oe(this.outputShape.length);const{dataFormat:s}=n,o=ne(),r=s==="channelsLast",i=r?0:1,a=r?1:2,c=this.enableShapeUniforms?"if(blockIndex < outShape[1] && pos < outShape[0]) {":`if(blockIndex < ${e[1]} && pos < ${e[0]}) {`;let l="";for(let u=0;u<=1;u++)for(let d=0;d<=1;d++)l+=`
          blockIndex = rc.y + ${d};
          pos = rc.x + ${u};

          ${c}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${i}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${a}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${r}) {
                  innerDims = vec2(d1, ch);
                  result[${u*2+d}] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${u*2+d}] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${l}

        ${o.output} = result;
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xa({x:t,filter:e,convInfo:n,backend:s,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:i=0,activation:a=null}){const c=t.shape,l=s.texData.get(t.dataId),u=n.inChannels,d=c[0]*c[1]*c[2],h=n.outChannels,f=n.dataFormat==="channelsLast",p=!1,m=!1;let g;const x=[];if(r!=null&&!f&&r.shape.length===3){const w=W({inputs:{x:r},backend:s,attrs:{perm:[1,2,0]}});x.push(w),r=w}if(!((d===1||h===1)&&u>ua)&&l.isPacked&&f&&l.texture!=null&&c[2]%2!==0&&q(l.shape.slice(-3),c.slice(-3))){const w=c[0]*c[1]*(c[2]+1),v={dataId:t.dataId,shape:[1,w,n.inChannels],dtype:t.dtype},I=l.shape;l.shape=l.shape.slice(),l.shape[l.shape.length-2]++,k(yn(l.shape,v.shape),()=>`packed reshape ${l.shape} to ${v.shape} isn't free`);const S=T({inputs:{x:e},backend:s,attrs:{shape:[1,n.inChannels,n.outChannels]}});x.push(S);const R=Sn({a:v,b:S,backend:s,transposeA:p,transposeB:m,bias:o,activation:a,preluActivationWeights:r,leakyreluAlpha:i}),A=s.texData.get(R.dataId);k(A.isPacked,()=>"batchMatMul result is expected to be packed"),l.shape=I,A.shape=n.outShape,g=ue({inputs:{x:R},backend:s}),g.shape=n.outShape,x.push(R)}else{const w=f?t:W({inputs:{x:t},backend:s,attrs:{perm:[0,2,3,1]}}),v=w.shape,I=v[0]*v[1]*v[2],S=T({inputs:{x:w},backend:s,attrs:{shape:[1,I,n.inChannels]}}),R=T({inputs:{x:e},backend:s,attrs:{shape:[1,n.inChannels,n.outChannels]}}),A=Sn({a:S,b:R,transposeA:p,transposeB:m,backend:s,bias:o,activation:a,preluActivationWeights:r,leakyreluAlpha:i}),D=[n.batchSize,n.outHeight,n.outWidth,n.outChannels],P=T({inputs:{x:A},backend:s,attrs:{shape:D}});g=f?P:W({inputs:{x:P},backend:s,attrs:{perm:[0,3,1,2]}}),f||(x.push(w),x.push(P)),x.push(S),x.push(R),x.push(A)}for(const w of x)s.disposeIntermediateTensorInfo(w);return g}function Ca({x:t,filter:e,convInfo:n,backend:s,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:i=0,activation:a=null}){const{filterWidth:c,filterHeight:l,inChannels:u,outWidth:d,outHeight:h,dataFormat:f}=n,p=f==="channelsLast",m=c*l*u,g=h*d,x=[m,g],C=!0,b=!1,w=[];if(r!=null&&!p&&r.shape.length===3){const ae=W({inputs:{x:r},backend:s,attrs:{perm:[1,2,0]}});w.push(ae),r=ae}const v=T({inputs:{x:t},backend:s,attrs:{shape:t.shape.slice(1)}}),I=T({inputs:{x:e},backend:s,attrs:{shape:[1,m,E(e.shape)/m]}});w.push(v),w.push(I);const S=new rC(x,n),R=[v.shape,[n.padInfo.top,n.padInfo.left],[n.strideHeight,n.strideWidth],[n.dilationHeight,n.dilationWidth],[n.inChannels],[n.filterWidth*n.inChannels],[n.outWidth]],A=s.runWebGLProgram(S,[v],"float32",R),D=T({inputs:{x:A},backend:s,attrs:{shape:[1,x[0],x[1]]}});w.push(A),w.push(D);const P=o!=null,_=r!=null,z=a==="leakyrelu",H=a?Pn(a,!0):null,re=new la(D.shape,I.shape,[1,g,n.outChannels],C,b,P,H,_,z),ie=[D,I];if(o&&ie.push(o),_&&ie.push(r),z){const ae=s.makeTensorInfo([],"float32",Ft(i,"float32"));ie.push(ae),w.push(ae)}const me=s.runWebGLProgram(re,ie,"float32"),Ye=[1,h,d,n.outChannels],ge=T({inputs:{x:me},backend:s,attrs:{shape:Ye}}),We=p?ge:W({inputs:{x:ge},backend:s,attrs:{perm:[0,3,1,2]}});p||w.push(ge),w.push(me);for(const ae of w)s.disposeIntermediateTensorInfo(ae);return We}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iC(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,filter:r}=e,{strides:i,pad:a,dataFormat:c,dilations:l,dimRoundingMode:u}=s,d=Pt(c),h=De(o.shape,r.shape,i,l,a,u,!1,d);let f;if(h.filterHeight===1&&h.filterWidth===1&&h.dilationHeight===1&&h.dilationWidth===1&&h.strideHeight===1&&h.strideWidth===1&&(h.padInfo.type==="SAME"||h.padInfo.type==="VALID"))f=xa({x:o,filter:r,convInfo:h,backend:n});else if($().getBool("WEBGL_CONV_IM2COL")&&o.shape[0]===1)f=Ca({x:o,filter:r,convInfo:h,backend:n});else{const m=new ga(h);f=n.runWebGLProgram(m,[o,r],"float32")}const p=T({inputs:{x:f},backend:n,attrs:{shape:h.outShape}});return n.disposeIntermediateTensorInfo(f),p}const aC={kernelName:kc,backendName:"webgl",kernelFunc:iC};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class cC{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const n=e.strideHeight,s=e.strideWidth,o=e.padInfo.top,r=e.padInfo.left,i=e.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${n} - ${o};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${r};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              if (${i}) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class lC{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const n=e.filterHeight,s=e.filterWidth,o=e.strideHeight,r=e.strideWidth,i=e.dataFormat==="channelsLast",a=n-1-e.padInfo.top,c=s-1-e.padInfo.left,l=i?1:2,u=i?2:3,d=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${c});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${d}];

        ivec2 dyCorner = ivec2(coords[${l}], coords[${u}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${n}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${n} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${i}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}}class uC{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const n=e.strideDepth,s=e.strideHeight,o=e.strideWidth,r=e.padInfo.front,i=e.padInfo.top,a=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${n} - ${r};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${s} - ${i};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${o} - ${a};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class dC{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const n=e.filterDepth,s=e.filterHeight,o=e.filterWidth,r=e.strideDepth,i=e.strideHeight,a=e.strideWidth,c=n-1-e.padInfo.front,l=s-1-e.padInfo.top,u=o-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${c}, ${l}, ${u});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${n}; wF++) {
          float dyF = float(dyFCorner + wF) / ${r}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${n} - 1 - wF;

          for (int wR = 0; wR < ${s}; wR++) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${s} - 1 - wR;

            for (int wC = 0; wC < ${o}; wC++) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${o} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hC(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,dy:r}=e,{strides:i,pad:a,dataFormat:c,dimRoundingMode:l,filterShape:u}=s,d=Pt(c),h=De(o.shape,u,i,1,a,l,!1,d),f=new cC(h);return n.runWebGLProgram(f,[o,r],"float32")}const fC={kernelName:Nc,backendName:"webgl",kernelFunc:hC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pC(t){const{inputs:e,backend:n,attrs:s}=t,{dy:o,filter:r}=e,{inputShape:i,strides:a,pad:c,dataFormat:l,dimRoundingMode:u}=s,d=Pt(l),h=De(i,r.shape,a,1,c,u,!1,d),f=new lC(h);return n.runWebGLProgram(f,[o,r],"float32")}const mC={kernelName:Fc,backendName:"webgl",kernelFunc:pC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gC(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,filter:r}=e,{strides:i,pad:a,dilations:c}=s,l=Zt(o.shape,r.shape,i,c,a),u=new oC(l);return n.runWebGLProgram(u,[o,r],"float32")}const xC={kernelName:Ac,backendName:"webgl",kernelFunc:gC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function CC(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,dy:r}=e,{strides:i,pad:a,filterShape:c}=s,l=Zt(o.shape,c,i,1,a),u=new uC(l);return n.runWebGLProgram(u,[o,r],"float32")}const bC={kernelName:Dc,backendName:"webgl",kernelFunc:CC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wC(t){const{inputs:e,backend:n,attrs:s}=t,{dy:o,filter:r}=e,{pad:i,strides:a,inputShape:c}=s,l=Zt(c,r.shape,a,1,i),u=new dC(l);return n.runWebGLProgram(u,[o,r],"float32")}const $C={kernelName:Pc,backendName:"webgl",kernelFunc:wC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vC=Ut+`
  return cos(x);
`,yC=O({opSnippet:vC}),SC={kernelName:Oc,backendName:"webgl",kernelFunc:yC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const IC=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,EC=O({opSnippet:IC}),RC={kernelName:_c,backendName:"webgl",kernelFunc:EC};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class TC{constructor(e,n,s,o,r){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];const[i,a,c,l]=e,[u]=n,[d,h]=s;this.outputShape=[u,d,h,l];const f=o==="bilinear"?1:0,[p,m]=[`${a-1}.0`,`${c-1}.0`],[g,x,C]=d>1?[`${(a-1)/(d-1)}`,"(y2-y1) * height_ratio",`y1*${p} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${p}`],[b,w,v]=h>1?[`${(c-1)/(h-1)}`,"(x2-x1) * width_ratio",`x1*${m} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${m}`];this.userCode=`
      const float height_ratio = float(${g});
      const float width_ratio = float(${b});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${i}) {
          return;
        }

        float height_scale = ${x};
        float width_scale = ${w};

        float in_y = ${C};
        if( in_y < 0.0 || in_y > ${p} ) {
          setOutput(float(${r}));
          return;
        }
        float in_x = ${v};
        if( in_x < 0.0 || in_x > ${m} ) {
          setOutput(float(${r}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${f} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kC=t=>{const{inputs:e,backend:n,attrs:s}=t,{image:o,boxes:r,boxInd:i}=e,{cropSize:a,method:c,extrapolationValue:l}=s,u=new TC(o.shape,r.shape,a,c,l);return n.runWebGLProgram(u,[o,r,i],"float32")},NC={kernelName:Mc,backendName:"webgl",kernelFunc:kC};var Yt;(function(t){t.Prod="*",t.Sum="+"})(Yt||(Yt={}));class Go{constructor(e,n,s,o){this.op=e,this.outputShape=n,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];const r=this.outputShape.length,i=this.op===Yt.Prod?"1.0":"0.0",a=s?i:`getX(${zo(r,"coords",this.op)})`,c=this.outputShape[this.outputShape.length-1];let l="",u="";s?(l=o?`end != ${c-1}`:"end != 0",u=o?"end + 1":"end - 1"):(l=o?`end + pow2 < ${c}`:"end >= pow2",u=o?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${L(r)} coords = getOutputCoords();
        int end = ${Ho(r,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${l}) {
          int idx = ${u};
          ${Ho(r,"coords",this.op)} = idx;
          val ${this.op}= getX(${zo(r,"coords",this.op)});
        }
        setOutput(val);
      }
    `}}function zo(t,e,n){if(t===1)return`${e}`;if(t===2)return`${e}.x, ${e}.y`;if(t===3)return`${e}.x, ${e}.y, ${e}.z`;if(t===4)return`${e}.x, ${e}.y, ${e}.z, ${e}.w`;throw new Error(`Cumulative ${n} for rank ${t} is not yet supported`)}function Ho(t,e,n){if(t===1)return`${e}`;if(t===2)return`${e}.y`;if(t===3)return`${e}.z`;if(t===4)return`${e}.w`;throw new Error(`Cumulative ${n} for rank ${t} is not yet supported`)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ba(t,e,n,s,o,r){const i=e.shape.length,a=Se([s],i);let c=e;a!=null&&(c=W({inputs:{x:e},backend:n,attrs:{perm:a}}));const l=Ie(1,i)[0];if(l!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${e.shape.length-1} but got axis=${s}`);const u=c.shape[l];let d=ue({inputs:{x:c},backend:n});for(let h=0;h<=Math.ceil(Math.log2(u))-1;h++){const f=new Go(t,c.shape,!1,r),p=[[h]],m=d;d=n.runWebGLProgram(f,[d],d.dtype,p),n.disposeIntermediateTensorInfo(m)}if(o){const h=new Go(t,c.shape,o,r),f=d;d=n.runWebGLProgram(h,[d],d.dtype),n.disposeIntermediateTensorInfo(f)}if(a!=null){const h=Ms(a),f=W({inputs:{x:d},backend:n,attrs:{perm:h}});return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(c),f}return d}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function FC(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r,exclusive:i,reverse:a}=s;return ba(Yt.Prod,o,n,r,i,a)}const AC={kernelName:Lc,backendName:"webgl",kernelFunc:FC};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function DC(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r,exclusive:i,reverse:a}=s;return ba(Yt.Sum,o,n,r,i,a)}const PC={kernelName:Bc,backendName:"webgl",kernelFunc:DC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function OC(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,weights:r}=e,{size:i,binaryOutput:a}=s;if(o.shape.length===1){const c=n.readSync(o.dataId),l=n.readSync(r.dataId),u=Ji(c,l,r.dtype,r.shape,i);return n.makeTensorInfo([i],r.dtype,u)}else if(o.shape.length===2){const c=n.bufferSync(o),l=n.bufferSync(r),u=Km(c,l,i,a);return n.makeTensorInfo(u.shape,r.dtype,u.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${o.shape.length}.`)}const _C={kernelName:Uc,backendName:"webgl",kernelFunc:OC};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class LC{constructor(e,n,s){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=n,this.dataFormat=s,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${n};
      int offset_h = imod(h, ${n});
      int in_w = w / ${n};
      int offset_w = imod(w, ${n});
      int offset_d = (offset_h * ${n} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function BC(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{blockSize:r,dataFormat:i}=s,a=o.shape[0],c=i==="NHWC"?o.shape[1]:o.shape[2],l=i==="NHWC"?o.shape[2]:o.shape[3],u=i==="NHWC"?o.shape[3]:o.shape[1],d=c*r,h=l*r,f=u/(r*r),p=i==="NHWC"?[a,d,h,f]:[a,f,d,h],m=new LC(p,r,i);return n.runWebGLProgram(m,[o],o.dtype)}const MC={kernelName:Vc,backendName:"webgl",kernelFunc:BC};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class wa{constructor(e,n=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=oe(this.outputShape.length);const i=e.filterHeight,a=e.filterWidth,c=e.outChannels/e.inChannels;let l="",u="";s&&(o?l=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?l=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:l=`
          float activation(float x) {
            ${s}
          }
        `,u="result = activation(result);");const d=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${l}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${c};
        int q = d2 - d1 * ${c};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${i}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${a}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${d}
        ${u}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $a{constructor(e,n=!1,s=null,o=!1,r=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=oe(this.outputShape.length);const i=e.outChannels/e.inChannels,a=e.padInfo.left,c=e.strideWidth,l=e.dilationWidth,u=e.filterHeight,d=e.filterWidth,h=d;let f=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let x=0;x<d;x++)f+=`
          vec4 xTexelC${x*2};
          int xTexelC${x*2}Ready;
          vec4 xTexelC${x*2+1};
          int xTexelC${x*2+1}Ready;
          vec4 xC${x};`;f+=`
    for (int r = 0; r < ${u}; r++) {
      `;for(let x=0;x<d;x++)f+=`
          xTexelC${x*2} = vec4(0.0);
          xTexelC${x*2}Ready = 0;
          xTexelC${x*2+1} = vec4(0.0);
          xTexelC${x*2+1}Ready = 0;
          xC${x} = vec4(0.0);`;f+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let x=0;x<(h+1)/2;x++){const C=x*2;if(f+=`
          xC = xCCorner + ${C*l};
          `,c===1){if(C<d&&(a%2===1?(f+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${C}Ready == 0) {
                  xTexelC${C} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${C}.zw = vec2(0.0);
                  }
                  xTexelC${C}Ready = 1;
                }
              `,l===1&&C>0?f+=`
                xC${C} = vec4(xTexelC${C-2}.zw, xTexelC${C}.xy);
                `:f+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${C} = vec4(previous.zw, xTexelC${C}.xy);
                  } else {
                    xC${C} = vec4(0.0, 0.0, xTexelC${C}.xy);
                  }
                  `):f+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${C}Ready == 0) {
                  xTexelC${C} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${C}.zw = vec2(0.0);
                  }
                  xTexelC${C}Ready = 1;
                }

                xC${C} = xTexelC${C};
                `,C+1<d)){const b=a%2===0?nr(l):l;l%2===0&&a%2===1||l%2!==0&&a%2!==1?(f+=`
                  xCOffset = xC + imod(pads[1], 2) + ${b};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${C+1}Ready == 0) {
                    xTexelC${C+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${C+1}.zw = vec2(0.0);
                    }
                    xTexelC${C+1}Ready = 1;
                  }
                  `,l>1&&(f+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${C}Ready == 0) {
                      xTexelC${C} = getX(batch, xR, xCOffset, d1);
                      xTexelC${C}Ready = 1;
                    }
                    `),f+=`
                  xC${C+1} = vec4(xTexelC${C}.zw, xTexelC${C+1}.xy);
                  `):b===1?f+=`
                    xC${C+1} = xTexelC${C};
                    `:f+=`
                    xCOffset = xC + ${b};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${C+1}Ready == 0) {
                      xTexelC${C+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${C+1}.zw = vec2(0.0);
                      }
                      xTexelC${C+1}Ready = 1;
                    }

                    xC${C+1} = xTexelC${C+1};
                    `}}else C<d&&(a%2===1?(f+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${C}Ready == 0) {
                  xTexelC${C} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${C}.zw = vec2(0.0);
                  }
                  xTexelC${C}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${C+1}Ready == 0) {
                  xTexelC${C+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${C+1}.zw = vec2(0.0);
                  }
                  xTexelC${C+1}Ready = 1;
                }

                xC${C} = vec4(xTexelC${C}.zw, xTexelC${C+1}.zw);
              `,C+1<d&&(f+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${C+1} = vec4(xTexelC${C+1}.xy, final.xy);
                `)):(f+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${C}Ready == 0) {
                  xTexelC${C} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${C}.zw = vec2(0.0);
                  }
                  xTexelC${C}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${C+1}Ready == 0) {
                  xTexelC${C+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${C+1}.zw = vec2(0.);
                  }
                  xTexelC${C+1}Ready = 1;
                }

                xC${C} = vec4(
                  xTexelC${C}.xy, xTexelC${C+1}.xy);
              `,C+1<d&&(f+=`
                  xC${C+1} = vec4(xTexelC${C}.zw, xTexelC${C+1}.zw);
                `)));C<d&&(f+=`
            wTexel = getW(r, ${C}, d1, q);
            dotProd += xC${C} * vec4(wTexel.xz, wTexel.xz);
          `,C+1<d&&(f+=`
              wTexel = getW(r, ${C+1}, d1, q);
              dotProd += xC${C+1} * vec4(wTexel.xz, wTexel.xz);
            `))}f+=`
    }
  `,f+=`
      }
    `;let p="",m="";s&&(o?p=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${s}
        }`:r?p=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${s}
        }`:p=`vec4 activation(vec4 x) {
          ${s}
        }`,m="result = activation(result);");const g=n?"result += getBiasAtOutCoords();":"";n&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),r&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${p}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${f}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${g}
        ${m}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function UC(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,filter:r}=e,{strides:i,pad:a,dilations:c,dimRoundingMode:l}=s;let u=c;u==null&&(u=[1,1]),k(Dt(i,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);const d=De(o.shape,r.shape,i,u,a,l,!0);let h;$().getBool("WEBGL_PACK_DEPTHWISECONV")&&d.strideWidth<=2&&d.outChannels/d.inChannels===1?h=new $a(d):h=new wa(d);const f=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];return n.runWebGLProgram(h,[o,r],"float32",f)}const VC={kernelName:Wc,backendName:"webgl",kernelFunc:UC};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class WC{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;const n=e.strideHeight,s=e.strideWidth,o=e.padInfo.top,r=e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${i} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${n} - ${o};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${s} - ${r};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}}class GC{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;const n=e.filterHeight,s=e.filterWidth,o=e.strideHeight,r=e.strideWidth,i=n-1-e.padInfo.top,a=s-1-e.padInfo.left,c=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${n}; wR++) {
          float dyR = float(dyRCorner + wR) / ${o}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${n} - 1 - wR;

          for (int wC = 0; wC < ${s}; wC++) {
            float dyC = float(dyCCorner + wC) / ${r}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${s} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${c}; dm++) {
              int d2 = d1 * ${c} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zC(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,dy:r}=e,{strides:i,dilations:a,pad:c,dimRoundingMode:l,filterShape:u}=s,d=De(o.shape,u,i,a,c,l,!0),h=new WC(d);return n.runWebGLProgram(h,[o,r],"float32")}const HC={kernelName:Gc,backendName:"webgl",kernelFunc:zC};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function XC(t){const{inputs:e,backend:n,attrs:s}=t,{dy:o,filter:r}=e,{strides:i,dilations:a,pad:c,dimRoundingMode:l,inputShape:u}=s,d=De(u,r.shape,i,a,c,l,!0),h=new GC(d);return n.runWebGLProgram(h,[o,r],"float32")}const jC={kernelName:zc,backendName:"webgl",kernelFunc:XC};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class qC{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function KC(t){const{inputs:e,backend:n}=t,{x:s}=e,o=[...s.shape,...s.shape],r=E(s.shape),i=T({inputs:{x:s},backend:n,attrs:{shape:[r]}}),a=new qC(r),c=n.runWebGLProgram(a,[i],i.dtype),l=T({inputs:{x:c},backend:n,attrs:{shape:o}});return n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(c),l}const YC={kernelName:Hc,backendName:"webgl",kernelFunc:KC};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class QC{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;const{inHeight:n,inWidth:s,padInfo:o,strideHeight:r,strideWidth:i,filterHeight:a,filterWidth:c,dilationHeight:l,dilationWidth:u}=e,{top:d,left:h}=o;this.userCode=`
      const ivec2 strides = ivec2(${r}, ${i});
      const ivec2 pads = ivec2(${d}, ${h});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${a}; h++) {
          int hIn = hBeg + h * ${l};

          if (hIn >= 0 && hIn < ${n}) {
            for (int w = 0; w < ${c}; w++) {
              int wIn = wBeg + w * ${u};

              if (wIn >= 0 && wIn < ${s}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ZC(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,filter:r}=e,{strides:i,pad:a,dilations:c}=s,l=ri(o.shape,r.shape,i,a,"NHWC",c);let u;const d=new QC(l);u=n.runWebGLProgram(d,[o,r],"float32");const h=T({inputs:{x:u},backend:n,attrs:{shape:l.outShape}});return n.disposeIntermediateTensorInfo(u),h}const JC={kernelName:Xc,backendName:"webgl",kernelFunc:ZC};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eb(t){const{inputs:e,backend:n,attrs:s}=t,{equation:o}=s,r=e,{allDims:i,summedDims:a,idDims:c}=bi(o,r.length);$i(i.length,c,r);const{path:l,steps:u}=vi(a,c),d=u.length;let h=null,f=i.length;const p=[];for(let m=0;m<d;++m){for(const g of u[m]){const{permutationIndices:x,expandDims:C}=wi(f,c[g]);let b;yi(x)?b=r[g]:(b=W({inputs:{x:r[g]},backend:n,attrs:{perm:x}}),p.push(b));const w=b.shape.slice();for(let v=0;v<C.length;++v)w.splice(C[v],0,1);q(b.shape,w)||(b=T({inputs:{x:b},backend:n,attrs:{shape:w}}),p.push(b)),h===null?h=b:(h=Ys({inputs:{a:b,b:h},backend:n}),p.push(h))}m<d-1&&(l[m]>=0&&(h=_n({inputs:{x:h},backend:n,attrs:{axis:l[m]-(i.length-f),keepDims:!1}}),p.push(h)),f--)}for(const m of p)m!==h&&n.disposeIntermediateTensorInfo(m);return h}const tb={kernelName:qc,backendName:"webgl",kernelFunc:eb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nb="return (x >= 0.0) ? x : (exp(x) - 1.0);",sb=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,ob=O({opSnippet:nb,packedOpSnippet:sb}),rb={kernelName:hr,backendName:"webgl",kernelFunc:ob};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ib="return (b >= 1.0) ? a : a * (b + 1.0);",ab=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,cb=t=>{const{inputs:e,backend:n}=t,{dy:s,y:o}=e,r=$().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new nn(ab,s.shape,o.shape):new Nt(ib,s.shape,o.shape);return n.runWebGLProgram(r,[s,o],s.dtype)},lb={kernelName:Kc,backendName:"webgl",kernelFunc:cb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ub=`
  return vec4(equal(a, b));
`,db="return float(a == b);",hb=Y({opSnippet:db,packedOpSnippet:ub,dtype:"bool",cpuKernelImpl:Zm}),fb={kernelName:Qc,backendName:"webgl",kernelFunc:hb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pb=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${fi};
  float a1 = ${pi};
  float a2 = ${mi};
  float a3 = ${gi};
  float a4 = ${xi};
  float a5 = ${Ci};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,mb=O({opSnippet:pb}),gb={kernelName:Yc,backendName:"webgl",kernelFunc:mb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xb=Ut+`
  return exp(x);
`,Cb=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,va=O({opSnippet:xb,packedOpSnippet:Cb,cpuKernelImpl:Jm,dtype:"float32"}),bb={kernelName:Zc,backendName:"webgl",kernelFunc:va};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Is(t){const{inputs:e,attrs:n,backend:s}=t,{dim:o}=n,{input:r}=e,i=r.shape.length,a=r.shape.slice();let c=o;return o<0&&(k(-(i+1)<=o,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),c=i+o+1),a.splice(c,0,1),T({inputs:{x:r},backend:s,attrs:{shape:a}})}const wb={kernelName:Jc,backendName:"webgl",kernelFunc:Is};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xo="return exp(x) - 1.0;",$b=O({opSnippet:Xo,packedOpSnippet:Xo,cpuKernelImpl:eg}),vb={kernelName:el,backendName:"webgl",kernelFunc:$b};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class jo{constructor(e,n,s){this.variableNames=["real","imag"];const o=n[1];this.outputShape=n;const r=s?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=s?`${o}.0`:"1.0";let a;if(e==="real")a="return real * expR - imag * expI;";else if(e==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${r};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${a}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${o});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${o}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${i};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ya(t,e,n){const s=n.texData.get(t.dataId),o=E(t.shape),r=t.shape[t.shape.length-1],i=o/r,a=T({inputs:{x:t},backend:n,attrs:{shape:[i,r]}}),c=a.shape,l=new jo("real",c,e),u=new jo("imag",c,e),d=[{dataId:s.complexTensorInfos.real.dataId,dtype:s.complexTensorInfos.real.dtype,shape:c},{dataId:s.complexTensorInfos.imag.dataId,dtype:s.complexTensorInfos.imag.dtype,shape:c}],h=n.runWebGLProgram(l,d,"float32"),f=n.runWebGLProgram(u,d,"float32"),p=Ke({inputs:{real:h,imag:f},backend:n});n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f);const m=T({inputs:{x:p},backend:n,attrs:{shape:t.shape}});return n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(p),m}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yb(t){const{inputs:e,backend:n}=t,{input:s}=e;return ya(s,!1,n)}const Sb={kernelName:tl,backendName:"webgl",kernelFunc:yb};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ib{constructor(e,n){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function on(t){const{backend:e,attrs:n}=t,{shape:s,value:o}=n;let{dtype:r}=n;if(r=r||Rn(o),r==="string"){const i=Ce(r,E(s));return i.fill(o),e.makeTensorInfo(s,r,i)}else{const i=new Ib(s,o),a=[[o]];return e.runWebGLProgram(i,[],r,a)}}const Eb={kernelName:nl,backendName:"webgl",kernelFunc:on};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Rb{constructor(e){this.variableNames=["Image"],this.outputShape=[];const n=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${n} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${n}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tb={kernelName:sl,backendName:"webgl",kernelFunc:({inputs:t,backend:e})=>{const{image:n}=t,s=e,o=new Rb(n.shape);return s.runWebGLProgram(o,[n],n.dtype)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qo="return floor(x);",kb=O({opSnippet:qo,packedOpSnippet:qo,cpuKernelImpl:tg}),Nb={kernelName:ol,backendName:"webgl",kernelFunc:kb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fb=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,Ab=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,Db=Y({opSnippet:Fb,packedOpSnippet:Ab,dtype:"int32"}),Pb={kernelName:rl,backendName:"webgl",kernelFunc:Db};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ob{constructor(e){this.variableNames=["A"];const n=ne(),[s,o]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${o}.0, ${s}.0);

        vec4 values = ${n.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _b{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;const n=ne(),[s,o]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${o}.0, ${s}.0);
            vec4 values = ${n.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${n.output} = result;
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lb={kernelName:Vu,backendName:"webgl",kernelFunc:Bb};let xt;function Bb(t){const{inputs:e,backend:n,attrs:s}=t;let{pixels:o}=e;const{numChannels:r}=s,i=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,a=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,[c,l]=i?[o.videoWidth,o.videoHeight]:[o.width,o.height],u=[l,c],d=[l,c,r];(a||i)&&(xt==null&&(xt=document.createElement("canvas").getContext("2d")),xt.canvas.width=c,xt.canvas.height=l,xt.drawImage(o,0,0,c,l),o=xt.canvas);const h=n.makeTensorInfo(u,"int32");n.texData.get(h.dataId).usage=fe.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(h.dataId),o);const f=$().getBool("WEBGL_PACK")?new _b(d):new Ob(d),p=n.runWebGLProgram(f,[h],"int32");return n.disposeData(h.dataId),p}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mb(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,filter:r,bias:i,preluActivationWeights:a}=e,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:h,activation:f,leakyreluAlpha:p}=s,m=Pt(u),g=De(o.shape,r.shape,c,d,l,h,!1,m);let x;const C=[];if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type==="SAME"||g.padInfo.type==="VALID"))x=xa({x:o,filter:r,convInfo:g,backend:n,bias:i,activation:f,preluActivationWeights:a,leakyreluAlpha:p});else if($().getBool("WEBGL_CONV_IM2COL")&&o.shape[0]===1)x=Ca({x:o,filter:r,convInfo:g,backend:n,bias:i,activation:f,preluActivationWeights:a,leakyreluAlpha:p});else{const w=i!=null,v=a!=null,I=f==="leakyrelu",S=f?Pn(f,!1):null,R=new ga(g,w,S,v,I),A=[o,r],D=(P,_)=>{if(_==="NCHW"&&P.shape.length===1&&P.shape[0]!==1){const z=T({inputs:{x:P},backend:n,attrs:{shape:[P.shape[0],1,1]}});return C.push(z),z}return P};if(w&&A.push(D(i,u)),v&&A.push(D(a,u)),I){const P=n.makeTensorInfo([],"float32",Ft(p,"float32"));A.push(P),C.push(P)}x=n.runWebGLProgram(R,A,"float32")}const b=T({inputs:{x},backend:n,attrs:{shape:g.outShape}});return C.push(x),C.forEach(w=>n.disposeIntermediateTensorInfo(w)),b}const Ub={kernelName:zu,backendName:"webgl",kernelFunc:Mb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vb(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,filter:r,bias:i,preluActivationWeights:a}=e,{strides:c,pad:l,dilations:u,dimRoundingMode:d,activation:h,leakyreluAlpha:f}=s,p=[];let m=u;m==null&&(m=[1,1]),k(Dt(c,m),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${c} and dilations '${m}'`);const g=De(o.shape,r.shape,c,m,l,d,!0),x=$().getBool("WEBGL_PACK_DEPTHWISECONV")&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,C=h?Pn(h,x):null,b=[o,r],w=i!=null,v=a!=null,I=h==="leakyrelu";if(w&&b.push(i),v&&b.push(a),I){const D=n.makeTensorInfo([],"float32",Ft(f,"float32"));b.push(D),p.push(D)}let S;x?S=new $a(g,w,C,v,I):S=new wa(g,w,C,v,I);const R=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],A=n.runWebGLProgram(S,b,"float32",R);return p.forEach(D=>n.disposeIntermediateTensorInfo(D)),A}const Wb={kernelName:Hu,backendName:"webgl",kernelFunc:Vb};class Gb{constructor(e,n,s){this.sliceDim=e,this.strides=n,this.variableNames=["x","indices"],this.outputShape=s;const o=L(n.length),r=L(s.length),i=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        ${o} strides = ${o}(${this.strides});
         void main() {
          ${r} coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < ${this.sliceDim}; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * ${i};
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zb(t){const{inputs:e,backend:n}=t,{params:s,indices:o}=e,r=o.shape,i=r[r.length-1],a=E(s.shape),[c,l,u,d]=Hr(s,o),h=T({inputs:{x:o},backend:n,attrs:{shape:[l,i]}}),f=T({inputs:{x:s},backend:n,attrs:{shape:[E(s.shape)/u,u]}});if(n.shouldExecuteOnCPU([s,o])||s.dtype==="string"){const x=n.readSync(o.dataId),C=n.bufferSync(s),b=ng(x,C,s.dtype,l,i,u,d,s.shape,a);return n.makeTensorInfo(c,s.dtype,b.values)}const p=new Gb(i,d,[l,u]),m=n.runWebGLProgram(p,[f,h],f.dtype),g=T({inputs:{x:m},backend:n,attrs:{shape:c}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(m),g}const Hb={kernelName:cl,backendName:"webgl",kernelFunc:zb};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xb{constructor(e,n){this.variableNames=["A","indices"],this.outputShape=n,this.rank=n.length;const s=L(this.rank),o=jb(e);this.userCode=`
      void main() {
        ${s} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${o}));
      }
    `}}function jb(t,e){const n=["resRC.x","resRC.y","resRC.z","resRC.w"],s=[];for(let o=0;o<t.length;o++)o===2?s.push("index"):s.push(`${n[o]}`);return s.join()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sa(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,indices:r}=e,{axis:i,batchDims:a}=s,c=te(i,o.shape)[0];if($().get("DEBUG")){const C=n.readSync(r.dataId),b=o.shape[c];for(let w=0;w<C.length;++w){const v=C[w];k(v<=b-1&&v>=0,()=>`GatherV2: the index value ${v} is not in [0, ${b-1}]`)}}const l=Bi(o,r,c,a),u=E(r.shape),d=[],h=T({inputs:{x:o},backend:n,attrs:{shape:[l.batchSize,l.outerSize,l.dimSize,l.sliceSize]}}),f=T({inputs:{x:r},backend:n,attrs:{shape:[l.batchSize,u/l.batchSize]}});d.push(h),d.push(f);const p=[l.batchSize,l.outerSize,u/l.batchSize,l.sliceSize];if(n.shouldExecuteOnCPU([o,r])||o.dtype==="string"){const C=n.bufferSync(f),b=n.bufferSync(h),w=sg(b,C,p);return d.forEach(v=>n.disposeIntermediateTensorInfo(v)),n.makeTensorInfo(l.outputShape,w.dtype,w.values)}const m=new Xb(h.shape,p),g=n.runWebGLProgram(m,[h,f],h.dtype);d.push(g);const x=T({inputs:{x:g},backend:n,attrs:{shape:l.outputShape}});return d.forEach(C=>n.disposeIntermediateTensorInfo(C)),x}const qb={kernelName:al,backendName:"webgl",kernelFunc:Sa};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kb="return float(a > b);",Yb=`
  return vec4(greaterThan(a, b));
`,Qb=Y({opSnippet:Kb,packedOpSnippet:Yb,cpuKernelImpl:og,dtype:"bool"}),Zb={kernelName:ll,backendName:"webgl",kernelFunc:Qb};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jb="return float(a >= b);",ew=`
  return vec4(greaterThanEqual(a, b));
`,tw=Y({opSnippet:Jb,packedOpSnippet:ew,dtype:"bool",cpuKernelImpl:rg}),nw={kernelName:ul,backendName:"webgl",kernelFunc:tw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sw(t){const{inputs:e,backend:n}=t,{input:s}=e;return ya(s,!0,n)}const ow={kernelName:dl,backendName:"webgl",kernelFunc:sw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rw="return float(!isnan(x) && !isinf(x));",iw=O({opSnippet:rw,dtype:"bool"}),aw={kernelName:fl,backendName:"webgl",kernelFunc:iw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cw="return float(isinf(x));",lw=O({opSnippet:cw,dtype:"bool"}),uw={kernelName:pl,backendName:"webgl",kernelFunc:lw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dw="return float(isnan(x));",hw=O({opSnippet:dw,dtype:"bool"}),fw={kernelName:ml,backendName:"webgl",kernelFunc:hw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pw="return float(a < b);",mw=`
  return vec4(lessThan(a, b));
`,gw=Y({opSnippet:pw,packedOpSnippet:mw,cpuKernelImpl:ig,dtype:"bool"}),xw={kernelName:gl,backendName:"webgl",kernelFunc:gw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cw="return float(a <= b);",bw=`
  return vec4(lessThanEqual(a, b));
`,ww=Y({opSnippet:Cw,packedOpSnippet:bw,cpuKernelImpl:ag,dtype:"bool"}),$w={kernelName:xl,backendName:"webgl",kernelFunc:ww};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vw(t){const{backend:e,attrs:n}=t,{start:s,stop:o,num:r}=n,i=cg(s,o,r);return e.makeTensorInfo([i.length],"float32",i)}const yw={kernelName:Cl,backendName:"webgl",kernelFunc:vw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sw=Ut+`
  return x < 0.0 ? 0./0. : log(x);
`,Iw=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,Ew=O({opSnippet:Sw,packedOpSnippet:Iw,cpuKernelImpl:lg}),Rw={kernelName:bl,backendName:"webgl",kernelFunc:Ew};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tw=Ut+`
  return log(1.0 + x);
`,kw=O({opSnippet:Tw}),Nw={kernelName:wl,backendName:"webgl",kernelFunc:kw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fw="return float(a >= 1.0 && b >= 1.0);",Aw=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,Dw=Y({opSnippet:Fw,packedOpSnippet:Aw,dtype:"bool"}),Pw={kernelName:$l,backendName:"webgl",kernelFunc:Dw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ow="return float(!(x >= 1.0));",_w=O({opSnippet:Ow}),Lw={kernelName:vl,backendName:"webgl",kernelFunc:_w};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bw="return float(a >= 1.0 || b >= 1.0);",Mw=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,Uw=Y({opSnippet:Bw,packedOpSnippet:Mw,dtype:"bool"}),Vw={kernelName:yl,backendName:"webgl",kernelFunc:Uw};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ww{constructor(e,n,s,o,r){this.variableNames=["x"],this.outputShape=[];const i=n,a=e[3]-1;this.outputShape=e;let c;const l=`float(${s}) + float(${o}) * sum`;r===.5?c=`inversesqrt(${l})`:r===1?c=`1.0/(${l})`:c=`exp(log(${l}) * float(-${r}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${i}; j <= ${i}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${a}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${c};
        setOutput(val);
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Gw{constructor(e,n,s,o,r){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;const i=n,a=e[3]-1;this.outputShape=e;let c;const l=`float(${s}) + float(${o}) * sum`;r===.5?c=`inversesqrt(${l})`:r===1?c=`1.0/(${l})`:c=`exp(log(${l}) * float(-${r}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${i};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${i}; j <= ${i}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${a}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${c};
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zw=t=>{const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{depthRadius:r,bias:i,alpha:a,beta:c}=s,l=$().getBool("WEBGL_PACK_NORMALIZATION")?new Gw(o.shape,r,i,a,c):new Ww(o.shape,r,i,a,c);return n.runWebGLProgram(l,[o],o.dtype)},Hw={kernelName:Sl,backendName:"webgl",kernelFunc:zw};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xw{constructor(e,n,s,o,r){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=n,this.bias=s,this.alpha=o,this.beta=r,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${n})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${n} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${o}) * norm + float(${s});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${o})
                * float(${r})
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${r});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jw=t=>{const{inputs:e,backend:n,attrs:s}=t,{x:o,y:r,dy:i}=e,{depthRadius:a,bias:c,alpha:l,beta:u}=s,d=new Xw(o.shape,a,c,l,u);return n.runWebGLProgram(d,[o,r,i],o.dtype)},qw={kernelName:Il,backendName:"webgl",kernelFunc:jw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kw(t,e,n,s){const o=E(e),i=E(t.shape)/o,a=T({inputs:{x:t},attrs:{shape:[i,o]},backend:s}),c=pt(a,t.dtype,"max",s),l=T({inputs:{x:c},attrs:{shape:n},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(c),l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ia(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{reductionIndices:r,keepDims:i}=s,a=o.shape.length,c=te(r,o.shape);let l=c;const u=Se(l,a),d=u!=null,h=n.shouldExecuteOnCPU([o]);let f=o;if(d){if(h){const b=n.texData.get(f.dataId).values,w=new Array(a);for(let S=0;S<w.length;S++)w[S]=o.shape[u[S]];const v=Ks(b,o.shape,o.dtype,u,w);f=n.makeTensorInfo(w,o.dtype);const I=n.texData.get(f.dataId);I.values=v}else f=On(o,u,n);l=Ie(l.length,a)}Pe("max",l,a);const[p,m]=Le(f.shape,l);let g=p;i&&(g=Ue(p,c));let x;if(h){const b=n.texData.get(f.dataId).values,w=ug(b,E(m),g,o.dtype);x=n.makeTensorInfo(g,o.dtype);const v=n.texData.get(x.dataId);v.values=w}else x=Kw(f,m,g,n);return d&&n.disposeIntermediateTensorInfo(f),x}const Yw={kernelName:El,backendName:"webgl",kernelFunc:Ia};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qw=oa+`
  return max(a, b);
`,Zw=`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  `+Dn+`
  return result;
`,Jw=Y({opSnippet:Qw,packedOpSnippet:Zw,cpuKernelImpl:dg}),e1={kernelName:Rl,backendName:"webgl",kernelFunc:Jw};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t1(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e;en(o,"maxPool");const{filterSize:r,strides:i,pad:a,dimRoundingMode:c}=s,l=1;k(Dt(i,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${l}'`);const u=At(o.shape,r,i,l,a,c);if(u.filterWidth===1&&u.filterHeight===1&&q(u.inShape,u.outShape))return ue({inputs:{x:o},backend:n});const d=new Kt(u,"max",!1);return n.runWebGLProgram(d,[o],o.dtype)}const n1={kernelName:Tl,backendName:"webgl",kernelFunc:t1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s1(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{filterSize:r,strides:i,pad:a,dataFormat:c,dimRoundingMode:l}=s,u=[1,1,1],d=Qt(o.shape,r,i,u,a,l,c),h=new Qs(d,"max",!1);return n.runWebGLProgram(h,[o],o.dtype)}const o1={kernelName:Nl,backendName:"webgl",kernelFunc:s1};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class r1{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const n=e.strideHeight,s=e.strideWidth,o=e.dilationHeight,r=e.effectiveFilterHeight,i=e.effectiveFilterWidth,a=r-1-e.padInfo.top,c=i-1-e.padInfo.left,l=r*i-1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${c});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${r};
          wR += ${o}) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${i}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${l} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${i} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}}class i1{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;const n=e.strideDepth,s=e.strideHeight,o=e.strideWidth,r=e.dilationDepth,i=e.dilationHeight,a=e.dilationWidth,c=e.effectiveFilterDepth,l=e.effectiveFilterHeight,u=e.effectiveFilterWidth,d=c-1-e.padInfo.front,h=l-1-e.padInfo.top,f=u-1-e.padInfo.left,p=c*l*u-1;this.userCode=`
      const ivec3 pads = ivec3(${d}, ${h}, ${f});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${c};
           wD += ${r}) {
          float dyD = float(dyDCorner + wD) / ${n}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${l};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${s}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${u};
                wC += ${a}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${p} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${l} * ${u} +
                  wR * ${u} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function a1(t){const{inputs:e,backend:n,attrs:s}=t,{dy:o,input:r}=e,i=r,{filterSize:a,strides:c,pad:l,dimRoundingMode:u}=s,d=[1,1,1],h=Qt(i.shape,a,c,d,l,u),f=new Qs(h,"max",!0),p=n.runWebGLProgram(f,[i],i.dtype),m=new i1(h),g=n.runWebGLProgram(m,[o,p],i.dtype);return n.disposeIntermediateTensorInfo(p),g}const c1={kernelName:Fl,backendName:"webgl",kernelFunc:a1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function l1(t){const{inputs:e,backend:n,attrs:s}=t,{dy:o,input:r,output:i}=e,a=r;en([r,i],"maxPoolGrad");const{filterSize:c,strides:l,pad:u,dimRoundingMode:d}=s,h=At(a.shape,c,l,1,u,d),f=!0,p=new Kt(h,"max",f),m=n.runWebGLProgram(p,[a],a.dtype),g=new r1(h),x=n.runWebGLProgram(g,[o,m],a.dtype);return n.disposeIntermediateTensorInfo(m),x}const u1={kernelName:kl,backendName:"webgl",kernelFunc:l1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function d1(t,e,n,s){let o=new Kt(n,"max",!1);const r=s.runWebGLProgram(o,[t],"float32");o=new Kt(n,"max",!0,!0,e);const i=s.runWebGLProgram(o,[t],"float32");return[r,i]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const h1={kernelName:Al,backendName:"webgl",kernelFunc:({inputs:t,attrs:e,backend:n})=>{const{x:s}=t,{filterSize:o,strides:r,pad:i,includeBatchInIndex:a}=e,c=n;k(s.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${s.shape.length}.`);const l=[1,1];k(Dt(r,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${r} and dilations '${l}'`);const u=At(s.shape,o,r,l,i),[d,h]=d1(s,a,u,c);return[d,h]}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function f1(t,e,n,s){const o=E(e),i=E(t.shape)/o,a=T({inputs:{x:t},attrs:{shape:[i,o]},backend:s}),c=pt(a,"float32","mean",s),l=T({inputs:{x:c},attrs:{shape:n},backend:s});return s.disposeIntermediateTensorInfo(a),s.disposeIntermediateTensorInfo(c),l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const p1={kernelName:Dl,backendName:"webgl",kernelFunc:({inputs:t,attrs:e,backend:n})=>{const{x:s}=t,{keepDims:o,axis:r}=e,i=n,a=s.shape.length,c=te(r,s.shape);let l=c;const u=Se(l,a),d=u!=null,h=i.shouldExecuteOnCPU([s]),f=[];let p=s;if(d){if(h){const w=i.texData.get(p.dataId).values,v=new Array(a);for(let R=0;R<v.length;R++)v[R]=s.shape[u[R]];const I=Ks(w,s.shape,s.dtype,u,v);p=i.makeTensorInfo(v,s.dtype);const S=i.texData.get(p.dataId);S.values=I}else p=On(s,u,i);f.push(p),l=Ie(l.length,a)}Pe("sum",l,a);const[m,g]=Le(p.shape,l);let x=m;o&&(x=Ue(m,c));const C=f1(p,g,x,i);for(const b of f)i.disposeIntermediateTensorInfo(b);return C}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function m1(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r,keepDims:i}=s,a=o.shape.length,c=te(r,o.shape);let l=c;const u=Se(l,a);let d=o;u!=null&&(d=W({inputs:{x:o},backend:n,attrs:{perm:u}}),l=Ie(l.length,o.shape.length)),Pe("min",l,a);const[h,f]=Le(d.shape,l),p=E(f),m=T({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}}),g=pt(m,m.dtype,"min",n);let x;if(i){const C=Ue(h,c);x=T({inputs:{x:g},backend:n,attrs:{shape:C}})}else x=T({inputs:{x:g},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),x}const g1={kernelName:Pl,backendName:"webgl",kernelFunc:m1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const x1=oa+`
  return min(a, b);
`,C1=`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  `+Dn+`
  return result;
`,b1=Y({opSnippet:x1,packedOpSnippet:C1,cpuKernelImpl:hg}),w1={kernelName:Ol,backendName:"webgl",kernelFunc:b1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $1{constructor(e,n,s){this.variableNames=["x"],this.outputShape=n.map((u,d)=>u[0]+e[d]+u[1]);const o=e.length,r=L(o),i=n.map(u=>u[0]).join(","),a=n.map((u,d)=>u[0]+e[d]).join(","),c=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o),l=s==="reflect"?0:1;if(o===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${l};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${l};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${r} start = ${r}(${i});
      ${r} end = ${r}(${a});

      void main() {
        ${r} outC = getOutputCoords();
        for (int i = 0; i < ${o}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${l};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${l};
          }
        }
        ${r} coords = outC - start;
        setOutput(getX(${c}));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class v1{constructor(e,n,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n.map((p,m)=>p[0]+e[m]+p[1]);const o=e.length,r=L(o),i=n.map(p=>p[0]).join(","),a=n.map((p,m)=>p[0]+e[m]).join(","),c=J("rc",o),l=J("source",o),u=`${c[o-1]} < ${this.outputShape[o-1]}`,d=o===1?"source":`vec2(${l.slice(-2).join()})`,h=s==="reflect"?0:1;let f="";if(o===1){const p=`
        ${r} source = rc;
        if (source < start) {
          source = start * 2 - source - ${h};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${h};
        }
        source -= start;
      `;f=`
        ${r} rc = outputLoc;
        ${p}
        result[0] = getChannel(getX(${l.join()}), ${d});
        ${c[o-1]} += 1;
        if(${u}) {
          ${p}
          result[1] = getChannel(getX(${l.join()}), ${d});
        }
      `}else{const p=`
        ${r} source = rc;
        ${r} lt = ${r}(lessThan(source, start));
        ${r} gte = ${r}(greaterThanEqual(source, end));
        ${r} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${h}) +
                gte * ((end - 1) * 2 - source + ${h});
        source -= start;
      `;f=`
        ${r} rc = outputLoc;
        ${p}
        result[0] = getChannel(getX(${l.join()}), ${d});
        ${c[o-1]} += 1;
        if(${u}) {
          ${p}
          result[1] = getChannel(getX(${l.join()}), ${d});
        }
        rc = outputLoc;
        ${c[o-2]} += 1;
        if(${c[o-2]} < ${this.outputShape[o-2]}) {
          ${p}
          result[2] = getChannel(getX(${l.join()}), ${d});
          ${c[o-1]} += 1;
          if(${u}) {
            ${p}
            result[3] = getChannel(getX(${l.join()}), ${d});
          }
        }
      `}this.userCode=`
      const ${r} start = ${r}(${i});
      const ${r} end = ${r}(${a});

      void main() {
        ${r} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const y1=({inputs:t,backend:e,attrs:n})=>{const{x:s}=t,{paddings:o,mode:r}=n,i=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new v1(s.shape,o,r):new $1(s.shape,o,r);return e.runWebGLProgram(i,[s],s.dtype)},S1={kernelName:_l,backendName:"webgl",kernelFunc:y1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const I1=`if (b == 0.0) return NAN;
  return mod(a, b);`,E1=`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  `+Dn+`
  return result;
`,R1=Y({opSnippet:I1,packedOpSnippet:E1}),T1={kernelName:Ll,backendName:"webgl",kernelFunc:R1};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class k1{constructor(e,n,s){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,s],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${n-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${n-1}));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const N1=`
if (a == b) {
  return 1.0;
};
return a / b;`,F1=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,Ea=Y({opSnippet:N1,packedOpSnippet:F1,checkOutOfBounds:!0}),A1={kernelName:jc,backendName:"webgl",kernelFunc:Ea};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ko="return a - b;",Ra=Y({opSnippet:Ko,packedOpSnippet:Ko,supportsComplex:!0,cpuKernelImpl:kg}),D1={kernelName:Nu,backendName:"webgl",kernelFunc:Ra};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ta(t){const{inputs:e,backend:n,attrs:s}=t,{logits:o}=e,{dim:r}=s,i=te([r],o.shape),a=Ia({inputs:{x:o},backend:n,attrs:{reductionIndices:i,keepDims:!1}}),c=Ue(a.shape,i),l=T({inputs:{x:a},backend:n,attrs:{shape:c}}),u=Ra({inputs:{a:o,b:l},backend:n}),d=va({inputs:{x:u},backend:n}),h=_n({inputs:{x:d},backend:n,attrs:{axis:i,keepDims:!1}}),f=T({inputs:{x:h},backend:n,attrs:{shape:c}}),p=Ea({inputs:{a:d,b:f},backend:n});return n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(f),p}const P1={kernelName:Cu,backendName:"webgl",kernelFunc:Ta};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function O1(t){const{inputs:e,backend:n,attrs:s}=t,{logits:o}=e,{numSamples:r,seed:i,normalized:a}=s,c=a?o:Ta({inputs:{logits:o},backend:n,attrs:{dim:o.shape.length-1}}),l=c.shape[0],u=c.shape[1],d=new k1(l,u,r),h=[[i]],f=n.runWebGLProgram(d,[c],"int32",h);return a||n.disposeIntermediateTensorInfo(c),f}const _1={kernelName:Bl,backendName:"webgl",kernelFunc:O1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const L1=Re+`
  return -x;
`,B1=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function M1(t){const{inputs:e,backend:n}=t,{x:s}=e;if(n.shouldExecuteOnCPU([s])){const r=n.texData.get(s.dataId),[i,a]=pg(r.values,s.shape,s.dtype);return n.makeTensorInfo(a,s.dtype,i)}let o;return $().getBool("WEBGL_PACK_UNARY_OPERATIONS")?o=new st(s.shape,B1):o=new Me(s.shape,L1),n.runWebGLProgram(o,[s],s.dtype)}const U1={kernelName:Ml,backendName:"webgl",kernelFunc:M1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const V1=jh;function W1(t){Ne("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:n,attrs:s}=t,{boxes:o,scores:r}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:c}=s,l=n.readSync(o.dataId),u=n.readSync(r.dataId),{selectedIndices:d}=V1(l,u,i,a,c);return n.makeTensorInfo([d.length],"int32",new Int32Array(d))}const G1={kernelName:Vl,backendName:"webgl",kernelFunc:W1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const z1=qh;function H1(t){Ne("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:n,attrs:s}=t,{boxes:o,scores:r}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:c,padToMaxOutputSize:l}=s,u=n.readSync(o.dataId),d=n.readSync(r.dataId),{selectedIndices:h,validOutputs:f}=z1(u,d,i,a,c,l);return[n.makeTensorInfo([h.length],"int32",new Int32Array(h)),n.makeTensorInfo([],"int32",new Int32Array([f]))]}const X1={kernelName:Wl,backendName:"webgl",kernelFunc:H1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const j1=Kh;function q1(t){Ne("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:e,backend:n,attrs:s}=t,{boxes:o,scores:r}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:c,softNmsSigma:l}=s,u=n.readSync(o.dataId),d=n.readSync(r.dataId),h=i,f=a,p=c,m=l,{selectedIndices:g,selectedScores:x}=j1(u,d,h,f,p,m);return[n.makeTensorInfo([g.length],"int32",new Int32Array(g)),n.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const K1={kernelName:Gl,backendName:"webgl",kernelFunc:q1};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Y1{constructor(e,n,s,o){this.variableNames=["indices"],this.outputShape=[e,n],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${o}), float(${s}),
                      float(index == coords.y)));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Q1=t=>{const{inputs:e,backend:n,attrs:s}=t,{indices:o}=e,{depth:r,onValue:i,offValue:a}=s,c=E(o.shape),l=new Y1(c,r,i,a),u=T({inputs:{x:o},backend:n,attrs:{shape:[c]}}),d=n.runWebGLProgram(l,[u],o.dtype);n.disposeIntermediateTensorInfo(u);const h=[...o.shape,r],f=T({inputs:{x:d},backend:n,attrs:{shape:h}});return n.disposeIntermediateTensorInfo(d),f},Z1={kernelName:Hl,backendName:"webgl",kernelFunc:Q1};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function In(t){const{inputs:e,backend:n}=t,{x:s}=e;if(s.dtype==="complex64"){const o=sn({inputs:{input:s},backend:n}),r=In({inputs:{x:o},backend:n}),i=Ln({inputs:{input:s},backend:n}),a=In({inputs:{x:i},backend:n}),c=Ke({inputs:{real:r,imag:a},backend:n});return n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),c}else return on({attrs:{shape:s.shape,dtype:s.dtype,value:s.dtype==="string"?"":0},backend:n})}const J1={kernelName:Uu,backendName:"webgl",kernelFunc:In};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ka(t){const{inputs:e,backend:n}=t,{x:s}=e;if(s.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(s.dtype==="complex64"){const o=sn({inputs:{input:s},backend:n}),r=ka({inputs:{x:o},backend:n}),i=Ln({inputs:{input:s},backend:n}),a=In({inputs:{x:i},backend:n}),c=Ke({inputs:{real:r,imag:a},backend:n});return n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),c}else return on({attrs:{shape:s.shape,dtype:s.dtype,value:1},backend:n})}const e$={kernelName:zl,backendName:"webgl",kernelFunc:ka};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function t$(t){const{inputs:e,backend:n,attrs:s}=t,{axis:o}=s;if(e.length===1)return Is({inputs:{input:e[0]},backend:n,attrs:{dim:o}});const r=e[0].shape,i=e[0].dtype;e.forEach(u=>{sr(r,u.shape,"All tensors passed to stack must have matching shapes"),k(i===u.dtype,()=>"All tensors passed to stack must have matching dtypes")});const a=[],c=e.map(u=>{const d=Is({inputs:{input:u},backend:n,attrs:{dim:o}});return a.push(d),d}),l=ma({inputs:c,backend:n,attrs:{axis:o}});return a.forEach(u=>n.disposeIntermediateTensorInfo(u)),l}const n$={kernelName:Xl,backendName:"webgl",kernelFunc:t$};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class s${constructor(e,n,s){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=n.map((l,u)=>l[0]+e[u]+l[1]);const o=e.length,r=L(o),i=n.map(l=>l[0]).join(","),a=n.map((l,u)=>l[0]+e[u]).join(","),c=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,o);if(o===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${r} start = ${r}(${i});
      ${r} end = ${r}(${a});

      void main() {
        ${r} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${r} coords = outC - start;
          setOutput(getX(${c}));
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class o${constructor(e,n,s){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=n.map((m,g)=>m[0]+e[g]+m[1]);const o=e.length,r=L(o),i=n.map(m=>m[0]).join(","),a=n.map((m,g)=>m[0]+e[g]).join(","),c=J("rc",o),l=J("source",o),u=`${c[o-1]} < ${this.outputShape[o-1]}`,d=o===1?"source":`vec2(${l.slice(-2).join()})`,h=[`${r} rc = outputLoc;`,`${c[o-1]} += 1;
       if(${u}) {
      `,o===1?"":`}
       rc = outputLoc;
       ${c[o-2]} += 1;
       if(${c[o-2]} < ${this.outputShape[o-2]}) {`,o===1?"":`  ${c[o-1]} += 1;
         if(${u}) {`],f=o===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))";let p="";for(let m=0,g=o===1?2:4;m<g;m++)p+=`
        ${h[m]}
        if (${f}) {
          result[${m}] = float(value);
        } else {
          ${r} source = rc - start;
          result[${m}] = getChannel(getX(${l.join()}), ${d});
        }
      `;p+=o===1?"} ":"}}",this.userCode=`
      const ${r} start = ${r}(${i});
      const ${r} end = ${r}(${a});

      void main() {
        ${r} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Na=t=>{const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{paddings:r,constantValue:i}=s;if(E(o.shape)===0){const l=r.map((u,d)=>u[0]+o.shape[d]+u[1]);return on({backend:n,attrs:{shape:l,value:i,dtype:o.dtype}})}const a=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new o$(o.shape,r,i):new s$(o.shape,r,i),c=[[i]];return n.runWebGLProgram(a,[o],o.dtype,c)},r$={kernelName:jl,backendName:"webgl",kernelFunc:Na};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const i$=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,a$=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  `+Dn+`
  return result;
`,c$=Y({opSnippet:i$,packedOpSnippet:a$}),l$={kernelName:ql,backendName:"webgl",kernelFunc:c$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function u$(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{axis:r,keepDims:i}=s,a=o.shape.length,c=[],l=te(r,o.shape);let u=l;const d=Se(u,a);let h=o;d!=null&&(h=W({inputs:{x:o},backend:n,attrs:{perm:d}}),u=Ie(u.length,a),c.push(h)),Pe("prod",u,a);let f;if(n.shouldExecuteOnCPU([h])){const p=n.texData.get(h.dataId).values,{outVals:m,outShape:g,outDtype:x}=gg(h.shape,h.dtype,p,u);f=n.makeTensorInfo(g,x,m)}else{const[p,m]=Le(h.shape,u),g=E(m),x=T({inputs:{x:h},backend:n,attrs:{shape:[-1,g]}}),C=Fs(o.dtype),b=pt(x,C,"prod",n);f=T({inputs:{x:b},backend:n,attrs:{shape:p}}),c.push(x),c.push(b)}if(i){c.push(f);const p=Ue(f.shape,l);f=T({inputs:{x:f},backend:n,attrs:{shape:p}})}return c.forEach(p=>n.disposeIntermediateTensorInfo(p)),f}const d$={kernelName:Kl,backendName:"webgl",kernelFunc:u$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fa=t=>{const{backend:e,attrs:n}=t,{start:s,stop:o,step:r,dtype:i}=n,a=xg(s,o,r,i);return e.makeTensorInfo([a.length],i,a)},h$={kernelName:Yl,backendName:"webgl",kernelFunc:Fa};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const f$="return 1.0 / x;",p$=O({opSnippet:f$}),m$={kernelName:Zl,backendName:"webgl",kernelFunc:p$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const g$=Re+`
  return (x < 0.0) ? 0.0 : x;
`,x$=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,C$=O({opSnippet:g$,packedOpSnippet:x$}),b$={kernelName:gr,backendName:"webgl",kernelFunc:C$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const w$=Re+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,$$=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,v$=O({opSnippet:w$,packedOpSnippet:$$}),y$={kernelName:Cr,backendName:"webgl",kernelFunc:v$};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class S${constructor(e,n,s,o,r){this.variableNames=["A"],this.outputShape=[];const[i,a,c,l]=e;this.outputShape=[i,n,s,l];const u=[o&&n>1?a-1:a,o&&s>1?c-1:c],d=[o&&n>1?n-1:n,o&&s>1?s-1:s];let h;r?h="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":h="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/d[0]},
          ${u[1]/d[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${c}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${h};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class I${constructor(e,n,s,o,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,c,l]=e;this.outputShape=[i,n,s,l];const u=[o&&n>1?a-1:a,o&&s>1?c-1:c],d=[o&&n>1?n-1:n,o&&s>1?s-1:s];let h;r?h="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":h="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/d[0]},
          ${u[1]/d[1]},
          ${u[1]/d[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${c}.0,
                                     ${c}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${h};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${s-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function E$(t){const{inputs:e,backend:n,attrs:s}=t,{images:o}=e,{alignCorners:r,halfPixelCenters:i,size:a}=s,[c,l]=a,u=$().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new I$(o.shape,c,l,r,i):new S$(o.shape,c,l,r,i);return n.runWebGLProgram(u,[o],"float32")}const R$={kernelName:tu,backendName:"webgl",kernelFunc:E$};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class T${constructor(e,n,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n;const[,o,r]=n,[,i,a]=e,c=[s&&i>1?o-1:o,s&&a>1?r-1:r],l=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=c[0]/l[0],d=c[1]/l[1],h=1/u,f=1/d,p=Math.ceil(h)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${d});

        const float invHeightScale = float(${h});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${o-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${r-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function k$(t){const{inputs:e,backend:n,attrs:s}=t,{images:o,dy:r}=e,{alignCorners:i}=s,a=new T$(r.shape,o.shape,i);return n.runWebGLProgram(a,[r],r.dtype)}const N$={kernelName:nu,backendName:"webgl",kernelFunc:k$};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class F${constructor(e,n,s,o,r){this.variableNames=["A"],this.outputShape=[];const[i,a,c,l]=e;this.outputShape=[i,n,s,l];const u=[o&&n>1?a-1:a,o&&s>1?c-1:c],d=[o&&n>1?n-1:n,o&&s>1?s-1:s],h=o?"0.5":"0.0";let f;r?f="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":f="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${u[0]/d[0]},
          ${u[1]/d[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${c}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${h})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class A${constructor(e,n,s,o,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];const[i,a,c,l]=e;this.outputShape=[i,n,s,l];const u=[o&&n>1?a-1:a,o&&s>1?c-1:c],d=[o&&n>1?n-1:n,o&&s>1?s-1:s],h=o?"0.5":"0.0";let f;r?f="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":f="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${u[0]/d[0]},
          ${u[1]/d[1]},
          ${u[1]/d[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${c}.0,
                                     ${c}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${h})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${s-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function D$(t){const{inputs:e,backend:n,attrs:s}=t,{images:o}=e,{alignCorners:r,halfPixelCenters:i,size:a}=s,[c,l]=a,u=$().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new A$(o.shape,c,l,r,i):new F$(o.shape,c,l,r,i);return n.runWebGLProgram(u,[o],o.dtype)}const P$={kernelName:Jl,backendName:"webgl",kernelFunc:D$};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class O${constructor(e,n,s){this.variableNames=["dy"],this.outputShape=[],this.outputShape=n;const[,o,r]=n,[,i,a]=e,c=[s&&i>1?o-1:o,s&&a>1?r-1:r],l=[s&&i>1?i-1:i,s&&a>1?a-1:a],u=c[0]/l[0],d=c[1]/l[1],h=1/u,f=1/d,p=Math.ceil(h)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${u});
        const float widthScale = float(${d});

        const float invHeightScale = float(${h});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float sourceFracRow =
              float(${c[0]}) *
                (float(dyR) / float(${l[0]}));

            float sourceFracCol =
                float(${c[1]}) *
                  (float(dyC) / float(${l[1]}));

            int sourceNearestRow = int(min(
                float(int(${o}) - 1),
                ${s} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${r}) - 1),
                ${s} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _$(t){const{inputs:e,backend:n,attrs:s}=t,{images:o,dy:r}=e,{alignCorners:i}=s,a=new O$(r.shape,o.shape,i);return n.runWebGLProgram(a,[r],r.dtype)}const L$={kernelName:eu,backendName:"webgl",kernelFunc:_$};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class B${constructor(e,n){this.variableNames=["x"];const s=e.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);if(this.outputShape=e,s===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}const o=a=>n.indexOf(a)!==-1&&e[a]!==1?`${e[a]} - coords[${a}] - 1`:`coords[${a}]`,r=e.map((a,c)=>o(c)).join(","),i=L(s);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${r}));
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class M${constructor(e,n){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;const s=e.length;if(s>4)throw new Error(`WebGL backend: Reverse of rank-${s} tensor is not yet supported`);this.outputShape=e;const o=J("rc",s),r=`${o[s-1]} + 1 < ${this.outputShape[s-1]}`,i=`${o[s-2]} + 1 < ${this.outputShape[s-2]}`,a=L(s);s===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${r}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${a} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${c(o.slice())};
          if(${r}){
            result.g = ${l(o.slice())};
          }
          if(${i}) {
            result.b = ${u(o.slice())};
            if(${r}) {
              result.a = ${d(o.slice())};
            }
          }
          setOutput(result);
        }
    `;function c(p){return h(p)}function l(p){return p[s-1]="("+p[s-1]+" + 1)",h(p)}function u(p){return p[s-2]="("+p[s-2]+" + 1)",h(p)}function d(p){return p[s-1]="("+p[s-1]+" + 1)",p[s-2]="("+p[s-2]+" + 1)",h(p)}function h(p){const m=e.map((C,b)=>f(b,p)),g=m.join(","),x=m.slice(-2).join(",");return`getChannel(getX(${g}), vec2(${x}))`}function f(p,m){return n.indexOf(p)!==-1&&e[p]!==1?`${e[p]} - ${m[p]} - 1`:`${m[p]}`}}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function U$(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{dims:r}=s,i=o.shape.length,a=te(r,o.shape);if(i===0)return ue({inputs:{x:o},backend:n});const c=$().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new M$(o.shape,a):new B$(o.shape,a);return n.runWebGLProgram(c,[o],o.dtype)}const V$={kernelName:su,backendName:"webgl",kernelFunc:U$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class W${constructor(e,n){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];const s=e[1],o=e[2];this.outputShape=e;let r="";typeof n=="number"?r=`float outputValue = ${n.toFixed(2)};`:r=`
        vec3 fill = vec3(${n.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${r}
          if(coordX >= 0 && coordX < ${o} && coordY >= 0 && coordY < ${s}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const G$={kernelName:Wu,backendName:"webgl",kernelFunc:({inputs:t,attrs:e,backend:n})=>{const{image:s}=t,{radians:o,fillValue:r,center:i}=e,a=n,c=new W$(s.shape,r),[l,u]=ci(i,s.shape[1],s.shape[2]),d=[[l,u,Math.sin(o),Math.cos(o)]];return a.runWebGLProgram(c,[s],s.dtype,d)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const z$=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,H$=O({opSnippet:z$}),X$={kernelName:ou,backendName:"webgl",kernelFunc:H$};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const j$="return inversesqrt(x);",q$=O({opSnippet:j$,cpuKernelImpl:Cg}),K$={kernelName:ru,backendName:"webgl",kernelFunc:q$};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Aa{constructor(e,n,s,o,r,i,a=!0){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;const c=L(r.length),l=L(i.length);let u="";s===1?u="i":s===2&&(u="i, j");const d=`getIndices(${u})`;let h="";o===1?h="i":o===2&&(h="i, coords[1]");const f=`getUpdates(${h})`,p=n>1?"strides[j]":"strides";this.userCode=`
        ${c} strides = ${c}(${r});

        void main() {
          ${l} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${n}; j++) {
              int index = round(${d});
              flattenedIndex += index * ${p};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${f};
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Y$(t){const{inputs:e,backend:n,attrs:s}=t,{indices:o,updates:r}=e,{shape:i}=s,{sliceRank:a,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=Ps(r,o,i),h=[d/l,l];if(d===0)return n.makeTensorInfo(i,o.dtype);const f=T({inputs:{x:o},backend:n,attrs:{shape:[c,a]}}),p=T({inputs:{x:r},backend:n,attrs:{shape:[c,l]}}),m=n.makeTensorInfo([],"float32",new Float32Array([0])),g=new Aa(c,a,f.shape.length,p.shape.length,u,h),x=n.runWebGLProgram(g,[p,f,m],p.dtype),C=T({inputs:{x},backend:n,attrs:{shape:i}});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(x),n.disposeIntermediateTensorInfo(m),C}const Q$={kernelName:iu,backendName:"webgl",kernelFunc:Y$};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Z${constructor(e,n,s,o){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,s];const r="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(n+1))}; ++i) { if (left >= right) break;`,a=$().getNumber("WEBGL_VERSION")===2?r:i,c=o==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${c} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function J$(t){const{inputs:e,backend:n,attrs:s}=t,{sortedSequence:o,values:r}=e,{side:i}=s,a=new Z$(o.shape[0],o.shape[1],r.shape[1],i),c=[[o.shape[1]]];return n.runWebGLProgram(a,[o,r],"int32",c)}const ev={kernelName:au,backendName:"webgl",kernelFunc:J$};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class tv{constructor(e,n,s){this.variableNames=["c","a","b"],this.outputShape=n;let o,r;if(s>4)throw Error(`Where for rank ${s} is not yet supported`);if(s===1)r="resRC",o="resRC";else{const a=["resRC.x","resRC.y","resRC.z","resRC.w"],c=[],l=[];for(let u=0;u<n.length;u++)l.push(`${a[u]}`),u<e&&c.push(`${a[u]}`);o=c.join(),r=l.join()}const i=L(s);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${o});
        if (cVal >= 1.0) {
          setOutput(getA(${r}));
        } else {
          setOutput(getB(${r}));
        }
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nv(t){const{inputs:e,backend:n}=t,{condition:s,t:o,e:r}=e,i=new tv(s.shape.length,o.shape,o.shape.length);return n.runWebGLProgram(i,[s,o,r],_e(o.dtype,r.dtype))}const sv={kernelName:cu,backendName:"webgl",kernelFunc:nv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ov=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${di};
  float scale = ${hi};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,rv=O({opSnippet:ov}),iv={kernelName:lu,backendName:"webgl",kernelFunc:rv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const av=Ut+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,cv=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,lv=O({opSnippet:av,packedOpSnippet:cv,cpuKernelImpl:wg}),uv={kernelName:br,backendName:"webgl",kernelFunc:lv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dv=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,hv=O({opSnippet:dv}),fv={kernelName:fu,backendName:"webgl",kernelFunc:hv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pv=Ut+`
  return sin(x);
`,mv=O({opSnippet:pv}),gv={kernelName:du,backendName:"webgl",kernelFunc:mv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xv=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,Cv=O({opSnippet:xv}),bv={kernelName:hu,backendName:"webgl",kernelFunc:Cv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wv=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,$v=O({opSnippet:wv}),vv={kernelName:pu,backendName:"webgl",kernelFunc:$v};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yv=t=>{const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{blockShape:r,paddings:i}=s;k(o.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");const a=r.reduce((x,C)=>x*C),c=[[0,0]];c.push(...i);for(let x=1+r.length;x<o.shape.length;++x)c.push([0,0]);const l=[],u=Na({inputs:{x:o},backend:n,attrs:{paddings:c,constantValue:0}}),d=Ws(u.shape,r,a,!1),h=Gs(d.length,r.length,!1),f=zs(u.shape,r,a,!1),p=T({inputs:{x:u},backend:n,attrs:{shape:d}}),m=W({inputs:{x:p},backend:n,attrs:{perm:h}}),g=T({inputs:{x:m},backend:n,attrs:{shape:f}});return l.push(u),l.push(p),l.push(m),l.forEach(x=>n.disposeIntermediateTensorInfo(x)),g},Sv={kernelName:gu,backendName:"webgl",kernelFunc:yv};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iv(t){const{inputs:e,backend:n}=t,{indices:s,values:o,denseShape:r,defaultValue:i}=e;if(r.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${r.shape}`);if(s.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${s.shape}`);if(o.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${o.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const a=n.readSync(s.dataId),c=n.readSync(o.dataId),l=n.readSync(r.dataId),u=n.readSync(i.dataId)[0],[d,h,f,p,m]=vg(a,s.shape,s.dtype,c,o.dtype,l,u);return[n.makeTensorInfo(h,s.dtype,d),n.makeTensorInfo([h[0]],o.dtype,f),n.makeTensorInfo([p.length],"bool",new Uint8Array(p.map(g=>Number(g)))),n.makeTensorInfo([m.length],s.dtype,new Int32Array(m))]}const Ev={kernelName:bu,backendName:"webgl",kernelFunc:Iv};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rv(t){const{inputs:e,backend:n}=t,{inputIndices:s,inputShape:o,newShape:r}=e;if(s.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${s.shape}`);if(o.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${o.shape}`);if(r.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${r.shape}`);const i=Array.from(n.readSync(o.dataId)),a=n.readSync(s.dataId),c=Array.from(n.readSync(r.dataId)),[l,u,d]=yg(a,s.shape,s.dtype,i,c);return[n.makeTensorInfo(u,s.dtype,l),n.makeTensorInfo([d.length],r.dtype,new Int32Array(d))]}const Tv={kernelName:wu,backendName:"webgl",kernelFunc:Rv};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kv(t){const{inputs:e,backend:n}=t,{data:s,indices:o,segmentIds:r}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${r.shape}`);const i=n.readSync(s.dataId),a=n.readSync(o.dataId),c=n.readSync(r.dataId),[l,u]=ta(i,s.shape,s.dtype,a,c,!0);return n.makeTensorInfo(u,s.dtype,l)}const Nv={kernelName:$u,backendName:"webgl",kernelFunc:kv};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fv(t){const{inputs:e,backend:n}=t,{data:s,indices:o,segmentIds:r}=e;if(s.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(o.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${o.shape}`);if(r.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${r.shape}`);const i=n.readSync(s.dataId),a=n.readSync(o.dataId),c=n.readSync(r.dataId),[l,u]=ta(i,s.shape,s.dtype,a,c);return n.makeTensorInfo(u,s.dtype,l)}const Av={kernelName:vu,backendName:"webgl",kernelFunc:Fv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dv(t){const{inputs:e,backend:n,attrs:s}=t,{sparseIndices:o,sparseValues:r,defaultValue:i}=e,{outputShape:a}=s,{sliceRank:c,numUpdates:l,sliceSize:u,strides:d,outputSize:h}=Ps(r,o,a),f=!1;if(r.dtype==="string"){const x=n.bufferSync(o),C=n.bufferSync(r),b=Et(n.readSync(i.dataId)[0]),w=bg(x,C,a,h,u,l,c,d,b,f);return n.makeTensorInfo(a,w.dtype,w.values)}const p=new Aa(l,c,o.shape.length,r.shape.length,d,[h,1],f),m=n.runWebGLProgram(p,[r,o,i],r.dtype),g=T({inputs:{x:m},backend:n,attrs:{shape:a}});return n.disposeIntermediateTensorInfo(m),g}const Pv={kernelName:yu,backendName:"webgl",kernelFunc:Dv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ov(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{numOrSizeSplits:r,axis:i}=s,a=te(i,o.shape)[0],c=Si(o,r,a),l=o.shape.length,u=new Array(l).fill(0),d=o.shape.slice();return c.map(h=>{const f=[...d];f[a]=h;const p=Vt({inputs:{x:o},backend:n,attrs:{begin:u,size:f}});return u[a]+=h,p})}const _v={kernelName:xu,backendName:"webgl",kernelFunc:Ov};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yo="return sqrt(x);",Lv=O({opSnippet:Yo,packedOpSnippet:Yo,cpuKernelImpl:Sg}),Bv={kernelName:mu,backendName:"webgl",kernelFunc:Lv};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mv="return x * x;",Uv=O({opSnippet:Mv}),Vv={kernelName:Iu,backendName:"webgl",kernelFunc:Uv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Qo="return (a - b) * (a - b);",Wv=Y({opSnippet:Qo,packedOpSnippet:Qo}),Gv={kernelName:Su,backendName:"webgl",kernelFunc:Wv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zv({inputs:t,attrs:e,backend:n}){const{x:s}=t,o=Re+`
    return x > 0.0 ? 1.0 : float(${e.alpha});
  `,r=new Me(s.shape,o);return n.runWebGLProgram(r,[s],s.dtype)}const Hv={kernelName:$r,backendName:"webgl",kernelFunc:zv};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xv{constructor(e,n,s){this.variableNames=["x"],this.outputShape=s;const o=s.length,r=L(s.length),i=L(s.length);let a="";if(o===1)a="coords * strides + begin";else{let c=0;a=s.map((l,u)=>(c++,s.length===1?`coords * strides[${u}] + begin[${u}]`:`coords[${c-1}] * strides[${u}] + begin[${u}]`)).join(",")}this.userCode=`
      ${r} begin = ${r}(${e});
      ${r} strides = ${r}(${n});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jv(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{begin:r,end:i,strides:a,beginMask:c,endMask:l,ellipsisMask:u,newAxisMask:d,shrinkAxisMask:h}=s,{finalShapeSparse:f,finalShape:p,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:C,end:b,strides:w}=oi(o.shape,r,i,a,c,l,u,d,h);let v;if(m)v=T({inputs:{x:o},backend:n,attrs:{shape:p}});else if(g||x){k(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const S=qr(C,b,w),R=Vt({inputs:{x:o},backend:n,attrs:{begin:C,size:S}});v=T({inputs:{x:R},backend:n,attrs:{shape:p}}),n.disposeIntermediateTensorInfo(R)}else if(n.shouldExecuteOnCPU([o])){const R=n.readSync(o.dataId),A=K(o.shape,o.dtype,R),D=Ig(f,A,w,C);v=n.makeTensorInfo(p,o.dtype,D.values)}else{const R=new Xv(C,w,f);v=n.runWebGLProgram(R,[o],o.dtype)}const I=T({inputs:{x:v},backend:n,attrs:{shape:p}});return n.disposeIntermediateTensorInfo(v),I}const qv={kernelName:Eu,backendName:"webgl",kernelFunc:jv};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kv(t){const{inputs:e,backend:n,attrs:s}=t,{separator:o,nGramWidths:r,leftPad:i,rightPad:a,padWidth:c,preserveShortSequences:l}=s,{data:u,dataSplits:d}=e,h=n.readSync(u.dataId),f=n.readSync(d.dataId),[p,m]=Eg(h,f,o,r,i,a,c,l);return[n.makeTensorInfo([p.length],"string",p),n.makeTensorInfo(d.shape,"int32",m)]}const Yv={kernelName:Ru,backendName:"webgl",kernelFunc:Kv};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qv(t){const{inputs:e,backend:n,attrs:s}=t,{skipEmpty:o}=s,{input:r,delimiter:i}=e;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(r.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${r.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const a=n.readSync(r.dataId),c=n.readSync(i.dataId)[0],[l,u,d]=Rg(a,c,o),h=u.length;return[n.makeTensorInfo([h,2],"int32",l),n.makeTensorInfo([h],"string",u),n.makeTensorInfo([2],"int32",new Int32Array(d))]}const Zv={kernelName:Tu,backendName:"webgl",kernelFunc:Qv};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jv(t){const{inputs:e,backend:n,attrs:s}=t,{numBuckets:o}=s,{input:r}=e;if(r.dtype!=="string")throw new Error("Input must be of datatype string");if(o<=0)throw new Error("Number of buckets must be at least 1");const i=n.readSync(r.dataId),a=Tg(i,o);return n.makeTensorInfo(r.shape,"int32",a)}const ey={kernelName:ku,backendName:"webgl",kernelFunc:Jv};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ty="return tan(x);",ny=O({opSnippet:ty}),sy={kernelName:Fu,backendName:"webgl",kernelFunc:ny};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const oy=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,ry=O({opSnippet:oy}),iy={kernelName:Au,backendName:"webgl",kernelFunc:ry};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ay{constructor(e,n){this.variableNames=["A"];const s=new Array(e.length);for(let i=0;i<s.length;i++)s[i]=e[i]*n[i];this.outputShape=s,this.rank=s.length;const o=L(this.rank),r=cy(e);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        setOutput(getA(${r}));
      }
    `}}function cy(t){const e=t.length;if(e>5)throw Error(`Tile for rank ${e} is not yet supported`);if(e===1)return`imod(resRC, ${t[0]})`;const n=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],s=[];for(let o=0;o<t.length;o++)s.push(`imod(${n[o]}, ${t[o]})`);return s.join()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Da(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{reps:r}=s;if(o.dtype==="string"||o.shape.length>5){const c=n.readSync(o.dataId),l=o.dtype==="string"?c.map(h=>Et(h)):c,u=K(o.shape,o.dtype,l),d=Ng(u,r);return n.makeTensorInfo(d.shape,d.dtype,d.values)}const i=new ay(o.shape,r);return n.runWebGLProgram(i,[o],o.dtype)}const ly={kernelName:Du,backendName:"webgl",kernelFunc:Da};class uy{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}}class dy{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qe(t,e){e!==null&&t.disposeIntermediateTensorInfo(e)}function Zo(t){let e=1;for(;e<t;)e*=2;return e}function hy(t){const{inputs:e,backend:n,attrs:s}=t,{x:o}=e,{k:r,sorted:i}=s,a=$().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),c=$().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),l=o.shape,u=l[l.length-1];if(n.shouldExecuteOnCPU([o])||u<a||r>c){const D=n.readSync(o.dataId),[P,_]=Fg(D,l,o.dtype,r,i);return[n.makeTensorInfo(P.shape,P.dtype,P.values),n.makeTensorInfo(_.shape,_.dtype,_.values)]}if(r===0)return l[l.length-1]=0,[n.makeTensorInfo(l,o.dtype,[]),n.makeTensorInfo(l,"int32",[])];if(u===1)return[o,on({attrs:{shape:l,dtype:"int32",value:0},backend:n})];const d=n.texData.get(o.dataId),h=d!==null&&d.isPacked,f=h?n.unpackTensor(o):o,m=E(l)/u,g=T({inputs:{x:f},attrs:{shape:[m,u]},backend:n});h&&Qe(n,f);const x=Zo(r),C=Zo(u);let b=null;const w=()=>b===null?[g,g]:[g,b],v=(D,P,_)=>{const z=w(),H=new uy(_),ie=[[u],[b===null?1:0],[Number.NEGATIVE_INFINITY],[D],[P]],me=b;b=n.runWebGLProgram(H,z,"int32",ie),Qe(n,me)};for(let D=1;D<x;D*=2){const P=D*2;for(let _=D;_>=1;_/=2)v(P,_,[m,C])}for(let D=C;D>x;D/=2){const P=w(),_=new dy([m,D/2]),H=[[u],[b===null?1:0],[x]],re=b;b=n.runWebGLProgram(_,P,"int32",H),Qe(n,re);const ie=x/2,me=ie*2;for(let Ye=ie;Ye>=1;Ye/=2)v(me,Ye,b.shape)}let I=b;b=Vt({inputs:{x:b},backend:n,attrs:{begin:0,size:[m,r]}}),Qe(n,I);let S=Sa({inputs:{x:g,indices:b},backend:n,attrs:{axis:1,batchDims:1}});Qe(n,g);const R=l.slice(0,-1);R.push(r),I=b,b=T({inputs:{x:b},attrs:{shape:R},backend:n}),Qe(n,I);const A=S;return S=T({inputs:{x:S},attrs:{shape:R},backend:n}),Qe(n,A),[S,b]}const fy={kernelName:Pu,backendName:"webgl",kernelFunc:hy};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class py{constructor(e,n,s,o,r,i){this.variableNames=["Image","Transforms"],this.outputShape=i;const a=s==="nearest"?1:2;let c;switch(o){case"constant":c=1;break;case"reflect":c=2;break;case"wrap":c=3;break;case"nearest":c=4;break;default:c=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${c} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${c} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${c} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${n}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${r});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${r});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${n}));
                float mapY = mapCoord(inY, float(${e}));

                if (${a} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function my(t){const{inputs:e,backend:n,attrs:s}=t,{image:o,transforms:r}=e,{interpolation:i,fillMode:a,fillValue:c,outputShape:l}=s,[u,d,h,f]=o.shape,[p,m]=l!=null?l:[d,h],g=[u,p,m,f],x=new py(d,h,i,a,c,g);return n.runWebGLProgram(x,[o,r],"float32")}const gy={kernelName:Ou,backendName:"webgl",kernelFunc:my};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xy(t){const{inputs:e,attrs:n,backend:s}=t,{axis:o}=n,{x:r}=e;en(r,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");const i=s.readSync(r.dataId),{outputValues:a,outputShape:c,indices:l}=Ag(i,o,r.shape,r.dtype);return[s.makeTensorInfo(c,r.dtype,a),s.makeTensorInfo([l.length],"int32",l)]}const Cy={kernelName:Lu,backendName:"webgl",kernelFunc:xy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function by(t){const{inputs:e,backend:n,attrs:s}=t,{value:o}=e;let{axis:r}=s;r<0&&(r+=o.shape.length);const i=o,a=i.shape.length,c=o.shape[r],l=new Array(a-1);let u=0;for(let m=0;m<a;m++)m!==r&&(l[u++]=i.shape[m]);const d=[],h=new Array(a).fill(0),f=i.shape.slice();f[r]=1;const p=new Array(c);for(let m=0;m<p.length;m++){h[r]=m;const g=Vt({inputs:{x:i},backend:n,attrs:{begin:h,size:f}}),x=T({inputs:{x:g},backend:n,attrs:{shape:l}});p[m]=x,d.push(g)}return d.forEach(m=>n.disposeIntermediateTensorInfo(m)),p}const wy={kernelName:Bu,backendName:"webgl",kernelFunc:by};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $y{constructor(e,n){this.variableNames=["x","segmentIds"];const s=e.windowSize,o=e.batchSize,r=e.inSize,i=e.numSegments,a=i*Math.ceil(r/s);this.outputShape=[o,a];const c="0.0",l="sumValue",u=Math.floor(s/4)*4,d=s%4,h=`
        sumValue += dot(values, segFilter);
    `;let f="";r%s>0&&(f=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return initializationValue;
        }
      `);let p="";r%s>0&&(p=`
        if (inIdx < 0 || inIdx >= ${r}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${c};

      float getValue(int batch, int inIdx) {
        ${f}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${p}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${i})) * float(${s}));
        int currentSeg = int(mod(float(outIdx), float(${i})));

        float sumValue = 0.0;

        for (int i = 0; i < ${u}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${h}
        }

        int inIdx = inOffset + ${u};
        if (${d===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${h}
        } else if (${d===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${h}
        } else if (${d===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${h}
        }
        setOutput(${l});
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vy(t){const{inputs:e,backend:n,attrs:s}=t,{x:o,segmentIds:r}=e,{numSegments:i}=s,a=o.shape.length,c=[];let l=0;const u=Se([l],a);let d=o;u!=null&&(d=W({inputs:{x:o},backend:n,attrs:{perm:u}}),c.push(d),l=Ie(1,a)[0]);const h=Li(d.shape,l,i),f=E([d.shape[l]]),p=T({inputs:{x:d},backend:n,attrs:{shape:[-1,f]}});c.push(p);const m=Fs(o.dtype),g=(w,v,I,S,R)=>{const A=w.shape[0],D=w.shape[1],P=_i(D,R),_={windowSize:P,inSize:D,batchSize:A,numSegments:R},z=new $y(_,v),H=n.compileAndRun(z,[w,I],S);if(c.push(H),H.shape[1]===R)return H;const re=Fa({backend:n,attrs:{start:0,stop:R,step:1,dtype:"float32"}}),ie=Da({inputs:{x:re},backend:n,attrs:{reps:[D/P]}});return c.push(re),c.push(ie),g(H,v,ie,S,R)},x=g(p,"unsortedSegmentSum",r,m,i),C=T({inputs:{x},backend:n,attrs:{shape:h}});let b=C;if(u!=null){c.push(C);const w=Ms(u);b=W({inputs:{x:b},backend:n,attrs:{perm:w}})}return c.forEach(w=>n.disposeIntermediateTensorInfo(w)),b}const yy={kernelName:Mu,backendName:"webgl",kernelFunc:vy};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Sy=[Ix,Rx,Nx,Dx,Ox,Bx,Ux,Wx,Xx,qx,Qx,e0,s0,a0,u0,h0,p0,C0,w0,v0,E0,D0,O0,L0,G0,H0,K0,ix,Z0,sC,aC,fC,mC,xC,bC,$C,SC,RC,NC,AC,PC,_C,MC,VC,HC,jC,YC,JC,tb,rb,lb,fb,gb,bb,wb,vb,Sb,Eb,Tb,Nb,Pb,Lb,Ub,Wb,Hb,qb,Zb,nw,rx,ow,tC,aw,uw,fw,cx,xw,$w,yw,Rw,Nw,Pw,Lw,Vw,Hw,qw,Yw,e1,n1,o1,c1,u1,h1,p1,g1,w1,S1,T1,_1,fx,U1,G1,X1,K1,M0,Z1,e$,n$,r$,l$,ux,d$,h$,U0,A1,m$,b$,y$,mx,R$,N$,P$,L$,V$,G$,X$,K$,Q$,ev,sv,iv,uv,fv,gv,bv,F0,P1,vv,Sv,Ev,Tv,Nv,Av,Pv,_v,Bv,Vv,Gv,Hv,qv,Yv,Zv,ey,D1,vx,sy,iy,ly,fy,gy,yx,Cy,wy,yy,J1];for(const t of Sy)qu(t);const Jn=window.bodySegmentation,Jo=window.faceDetection;class Pa{constructor(){this.listening=!1,this.current=0,this.timestamp=0}listen(e,n,s){if(this.listening)throw"already listened.";this.listening=!0;const o=this;return i(),r(),{stop:()=>{this.listening=!1,this.current=0,this.timestamp=0,s==null||s(0)}};async function r(){if(!o.listening)return;const a=await o.detect(e);await n(a),o.current++,requestAnimationFrame(r)}function i(){if(!o.listening)return;const a=performance.now();if(a-o.timestamp>1e3){const c=o.current;o.current=0,o.timestamp=a,s==null||s(c)}requestAnimationFrame(i)}}destroy(){this.listening=!1,this.current=0,this.timestamp=0}}class Oa extends Pa{constructor(e){super(),this.detector=e}async detect(e){return this.detector.estimateFaces(e)}static async init(e){const n=Jo.SupportedModels.MediaPipeFaceDetector,s=await Jo.createDetector(n,{runtime:e,maxFaces:10,solutionPath:e==="mediapipe"?"https://cdn.jsdelivr.net/npm/@mediapipe/face_detection":void 0});return new Oa(s)}}class _a extends Pa{constructor(e){super(),this.detector=e}async detect(e){return this.detector.segmentPeople(e).then(n=>n[0])}static async init(e){const n=Jn.SupportedModels.MediaPipeSelfieSegmentation,s=await Jn.createSegmenter(n,{runtime:e,solutionPath:e==="mediapipe"?"https://cdn.jsdelivr.net/npm/@mediapipe/selfie_segmentation":void 0});return new _a(s)}static toImageData(e){return Jn.toBinaryMask(e,{r:0,g:0,b:0,a:0},{r:255,g:255,b:255,a:255})}}export{_a as B,Ry as C,Oa as F,Ey as r};
