(()=>{var e={};e.id=418,e.ids=[418],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},57147:e=>{"use strict";e.exports=require("fs")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},25302:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c}),r(80722),r(85089),r(57793),r(58098),r(89204),r(41888);var i=r(23191),s=r(88716),n=r(37922),a=r.n(n),o=r(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=["",{children:["(about_us)",{children:["executive-committee",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,80722)),"C:\\Users\\Asus\\Desktop\\kin\\main\\app\\(about_us)\\executive-committee\\page.js"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,85089)),"C:\\Users\\Asus\\Desktop\\kin\\main\\app\\(about_us)\\executive-committee\\layout.js"]}]},{loading:[()=>Promise.resolve().then(r.bind(r,57793)),"C:\\Users\\Asus\\Desktop\\kin\\main\\app\\(about_us)\\loading.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,58098)),"C:\\Users\\Asus\\Desktop\\kin\\main\\app\\layout.js"],loading:[()=>Promise.resolve().then(r.bind(r,89204)),"C:\\Users\\Asus\\Desktop\\kin\\main\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(r.bind(r,41888)),"C:\\Users\\Asus\\Desktop\\kin\\main\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\Asus\\Desktop\\kin\\main\\app\\(about_us)\\executive-committee\\page.js"],u="/(about_us)/executive-committee/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new i.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/(about_us)/executive-committee/page",pathname:"/executive-committee",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},96708:(e,t,r)=>{Promise.resolve().then(r.bind(r,80260))},80260:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var i=r(10326),s=r(17577),n=r(54025),a=r(46226),o=r(90434),l=r(8276);function c({member:e,index:t}){let r="https://server.kinsust.org",c=(0,s.useRef)(),d=(0,n.Y)(c,{once:!0});return i.jsx(l.E.div,{initial:{opacity:0,x:-150,scale:0},animate:d?{opacity:1,y:0,x:0,scale:1}:{},transition:{duration:.1,type:"spring",stiffness:260,damping:20,delay:.08*t},ref:c,className:"h-full mx-auto max-w-[310px]",children:(0,i.jsxs)("div",{className:"hover:shadow-md  flex flex-col mx-auto rounded-md transition-all duration-200  hover:scale-[1.02] h-full ",children:[(0,i.jsxs)("div",{className:"h-full  dark:bg-sky-300/5 bg-[#efeff13c] dark:border-none border full   rounded-t-md pt-5 pb-2 ",onContextMenu:e=>e.preventDefault(),children:[i.jsx("p",{className:"px-2 text-center text-[22px]  pb-3 font-semibold text-[#3289cb] dark:text-[#87cf92] font-[poppins]",children:e?.ECMember?.designation}),i.jsx("figure",{className:"px-3 select-none",id:"fig",children:i.jsx(a.default,{src:`${r}/public/images/users/${e?.user_photo}`,width:240,height:230,alt:e?.name,placeholder:"blur",blurDataURL:`${r}/public/images/users/${e?.user_photo}`,loading:"lazy",className:" duration-200 w-[240px]  h-[230px] mx-auto object-cover  rounded-xl  "})}),(0,i.jsxs)("div",{className:"px-4 grid items-center my-3",children:[i.jsx("h2",{className:" my-1 text-2xl font-bold text-[#22174b] dark:text-[#e9ecef] hover:text-[#fc535a]",children:e?.name}),e?.department&&(0,i.jsxs)("p",{className:"text-xl dark:text-[#b6bfcb]  text-[#3f3f5d] font-semibold",children:[e?.department," ",e?.session&&"("+e?.session+")"]})]})]}),(0,i.jsxs)("div",{className:"mt-[2px] flex items-center justify-between px-4 bg-[#efeff1] dark:bg-sky-300/5 py-2 rounded-b-md",children:[e?.fb_url&&i.jsx(o.default,{href:e?.fb_url,target:"_blank",className:"z-10 dark:fill-white fill-[#373131] bg-[#b4bac8] dark:bg-[#000]  rounded-md hover:scale-150 linkParent",children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"linkIcon",children:i.jsx("path",{d:"M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"})})}),e?.linkedIn_url&&i.jsx(o.default,{className:"dark:fill-white dark:bg-[#000]  fill-[#443c3c] bg-[#b4bac8] z-10 rounded-md hover:scale-150 linkParent",target:"_blank",href:e?.linkedIn_url,children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"linkIcon",children:[i.jsx("circle",{cx:"4.983",cy:"5.009",r:"2.188"}),i.jsx("path",{d:"M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"})]})}),e?.email&&i.jsx("a",{className:"z-10 dark:bg-[#000] fill-[#443c3c] dark:fill-white bg-[#b4bac8] rounded-md hover:scale-150 linkParent",target:"_blank",rel:"noreferrer",href:`mailto: ${e?.email}`,children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"linkIcon",children:i.jsx("path",{d:"M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"})})}),e?.mobile&&(0,i.jsxs)("a",{className:"z-10 dark:bg-[#000]  fill-[#443c3c] dark:fill-white bg-[#b4bac8] rounded-md hover:scale-150 linkParent",href:`tel:${e?.mobile}`,children:[" ",(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"linkIcon",children:[i.jsx("path",{d:"M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"}),i.jsx("path",{d:"M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"})]})]})]})]})})}let{useAllEcQuery:d,useGetEcByIdQuery:u}=r(7747).f.injectEndpoints({endpoints:e=>({allEc:e.query({query:()=>({url:"/",method:"GET"})}),getEcById:e.query({query:e=>({url:`/${e}`,method:"GET"})})})});var m=r(70574);function p(){let{data:{data:e=[]}={},isLoading:t}=d(),[r,n]=(0,s.useState)(null),{data:{data:a}={}}=u(e[e?.length-1]?.id),[o,l]=(0,s.useState)(null),p=t=>{n(e.find(e=>e.id===Number(t)))};return t?i.jsx(m.Z,{}):e.length>0&&o&&r?i.jsx("section",{className:"  theme-dark bg-[#fff] md:text-[20px] text-18px  py-5 text-black   h-full",children:(0,i.jsxs)("div",{className:"   mx-auto xl:w-[1200px] lg:px-12 md:px-28 px-4",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("h1",{className:" text-center md:mt-5 mt-3 mb-5 text-[#000000] dark:text-[#fc535a] xl:text-6xl lg:text-4xl  sm:text-3xl text-2xl font-bold",children:[r?.name?.split("th")[0],"th Executive Committee of KIN"]}),(0,i.jsxs)("div",{children:[i.jsx("span",{className:" font-bold mr-4",children:"Executive Committee :"}),i.jsx("select",{name:"ec",className:"py-2 px-3  bg-violet-600 text-white  rounded-md",onChange:e=>{p(e.target.value)},defaultValue:r.id,children:e?.map((e,t)=>i.jsx("option",{value:e?.id,children:e?.name},t))})]})]}),i.jsx("div",{className:" grid  lg:grid-cols-3  mb-5 md:mt-16 mt-8 sm:grid-cols-2 mx-auto px-5 gap-10",children:r&&[...r?.members].sort((e,t)=>e.index-t.index).map((e,t)=>i.jsx("div",{children:i.jsx(c,{member:e,index:.5*t})},t))})]})}):i.jsx("section",{className:" min-h-screen  theme-dark bg-[#fff] md:text-[20px] text-18px  py-10 text-black ",children:i.jsx("div",{className:"   mx-auto xl:w-[1200px] lg:px-12 md:px-28 px-4",children:i.jsx("h1",{className:" text-center md:mt-5 mt-3 mb-5 text-[#fc535a] xl:text-4xl lg:text-3xl  sm:text-2xl text-xl font-bold",children:"Couldn't find any Executive Commitee Data"})})})}},70574:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var i=r(10326),s=r(17577),n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function a(e){var t=function(e){if("number"==typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var i=(e.match(/[^0-9]*$/)||"").toString();return n[i]?{value:t,unit:i}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}(e);return"".concat(t.value).concat(t.unit)}var o=function(){return(o=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)0>t.indexOf(i[s])&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(r[i[s]]=e[i[s]]);return r},c=function(e,t,r){var i="react-spinners-".concat(e,"-").concat(r);if("undefined"==typeof window||!window.document)return i;var s=document.createElement("style");document.head.appendChild(s);var n=s.sheet,a="\n    @keyframes ".concat(i," {\n      ").concat(t,"\n    }\n  ");return n&&n.insertRule(a,0),i}("ScaleLoader","0% {transform: scaley(1.0)} 50% {transform: scaley(0.4)} 100% {transform: scaley(1.0)}","scale");let d=function(e){var t=e.loading,r=e.color,i=void 0===r?"#000000":r,n=e.speedMultiplier,d=void 0===n?1:n,u=e.cssOverride,m=e.height,p=void 0===m?35:m,x=e.width,h=void 0===x?4:x,f=e.radius,v=void 0===f?2:f,g=e.margin,b=void 0===g?2:g,w=l(e,["loading","color","speedMultiplier","cssOverride","height","width","radius","margin"]),y=o({display:"inherit"},void 0===u?{}:u),j=function(e){return{backgroundColor:i,width:a(h),height:a(p),margin:a(b),borderRadius:a(v),display:"inline-block",animation:"".concat(c," ").concat(1/d,"s ").concat(.1*e,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return void 0===t||t?s.createElement("span",o({style:y},w),s.createElement("span",{style:j(1)}),s.createElement("span",{style:j(2)}),s.createElement("span",{style:j(3)}),s.createElement("span",{style:j(4)}),s.createElement("span",{style:j(5)})):null};function u(){return i.jsx("div",{className:"top-0 left-0 z-[10] h-screen w-full mx-auto flex justify-center bg-white dark:bg-[#0f0826] overflow-hidden absolute items-center",children:i.jsx("div",{className:"text-center",children:i.jsx(d,{color:"#36d7b7",height:40,loading:!0,margin:3,radius:3,width:5})})})}},85089:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>n});var i=r(19510);let s="https://server.kinsust.org",n={metadataBase:new URL(s),title:"KIN Executive Committee",description:"Get to know the KIN Executive Committee: Guiding our community service efforts with passion and purpose. Meet our committed team!",openGraph:{title:"KIN Executive Committee",description:"Get to know the KIN Executive Committee: Guiding our community service efforts with passion and purpose. Meet our committed team!",url:`${s}/executive-committee`,type:"website",siteName:"KIN,A Voluntary Organization",locale:"bn_BD",images:[{url:"/icon/icon.jpg",width:800,height:600,alt:"KIN Blood Image"},{url:"/icon/icon.jpg",width:900,height:800,alt:"KIN Blood Image"},{url:"/icon/icon.jpg"}]},twitter:{title:"KIN Executive Committee",description:" Get to know the KIN Executive Committee: Guiding our community service efforts with passion and purpose. Meet our committed team!",images:{url:"/icon/icon.jpg",alt:"KIN Executive Committee "}}};function a({children:e}){return i.jsx("div",{children:e})}},80722:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>n,default:()=>o});var i=r(68570);let s=(0,i.createProxy)(String.raw`C:\Users\Asus\Desktop\kin\main\app\(about_us)\executive-committee\page.js`),{__esModule:n,$$typeof:a}=s;s.default;let o=(0,i.createProxy)(String.raw`C:\Users\Asus\Desktop\kin\main\app\(about_us)\executive-committee\page.js#default`)},57793:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var i=r(19510),s=r(35315);function n(){return i.jsx("div",{className:"top-0 left-0 z-[10] h-screen w-full mx-auto flex justify-center bg-white dark:bg-[#0f0826] overflow-hidden absolute items-center",children:i.jsx("div",{className:"text-center",children:i.jsx(s.Z,{color:"#36d7b7",height:40,loading:!0,margin:3,radius:3,width:5})})})}},9138:(e,t,r)=>{"use strict";r.d(t,{I:()=>s});var i=r(24673);function s(e,t,r){var s;if("string"==typeof e){let n=document;t&&((0,i.k)(!!t.current,"Scope provided, but no element detected."),n=t.current),r?(null!==(s=r[e])&&void 0!==s||(r[e]=n.querySelectorAll(e)),e=r[e]):e=n.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}},54025:(e,t,r)=>{"use strict";r.d(t,{Y:()=>a});var i=r(17577),s=r(9138);let n={some:0,all:1};function a(e,{root:t,margin:r,amount:a,once:o=!1}={}){let[l,c]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{if(!e.current||o&&l)return;let i={root:t&&t.current||void 0,margin:r,amount:a};return function(e,t,{root:r,margin:i,amount:a="some"}={}){let o=(0,s.I)(e),l=new WeakMap,c=new IntersectionObserver(e=>{e.forEach(e=>{let r=l.get(e.target);if(!!r!==e.isIntersecting){if(e.isIntersecting){let r=t(e);"function"==typeof r?l.set(e.target,r):c.unobserve(e.target)}else r&&(r(e),l.delete(e.target))}})},{root:r,rootMargin:i,threshold:"number"==typeof a?a:n[a]});return o.forEach(e=>c.observe(e)),()=>c.disconnect()}(e.current,()=>(c(!0),o?void 0:()=>c(!1)),i)},[t,e,r,o,a]),l}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[948,245,780],()=>r(25302));module.exports=i})();