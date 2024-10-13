(()=>{var e={};e.id=11,e.ids=[11],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},57147:e=>{"use strict";e.exports=require("fs")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},72773:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>l.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d}),s(77395),s(71531),s(15548),s(58098),s(89204),s(41888);var r=s(23191),a=s(88716),i=s(37922),l=s.n(i),n=s(95231),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);s.d(t,o);let d=["",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,77395)),"C:\\Users\\Asus\\Desktop\\kin\\main\\app\\register\\page.js"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,71531)),"C:\\Users\\Asus\\Desktop\\kin\\main\\app\\register\\layout.js"],loading:[()=>Promise.resolve().then(s.bind(s,15548)),"C:\\Users\\Asus\\Desktop\\kin\\main\\app\\register\\loading.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,58098)),"C:\\Users\\Asus\\Desktop\\kin\\main\\app\\layout.js"],loading:[()=>Promise.resolve().then(s.bind(s,89204)),"C:\\Users\\Asus\\Desktop\\kin\\main\\app\\loading.js"],"not-found":[()=>Promise.resolve().then(s.bind(s,41888)),"C:\\Users\\Asus\\Desktop\\kin\\main\\app\\not-found.js"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\Asus\\Desktop\\kin\\main\\app\\register\\page.js"],p="/register/page",m={require:s,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/register/page",pathname:"/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},71219:(e,t,s)=>{Promise.resolve().then(s.bind(s,10473))},10473:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var r=s(10326),a=s(17325),i=s(63182),l=s(90434),n=s(35047),o=s(17577),d=s(29394);let c=function(){let[e,t]=(0,o.useState)(!1),[s,c]=(0,o.useState)(!1),[p,{isLoading:m}]=(0,i.FZ)(),[u,x]=(0,o.useState)({name:"",email:"",password:"",con_password:"",gender:""}),h=e=>{x(t=>({...t,[e.target.name]:e.target.value}))},g=(0,n.useRouter)(),f=async e=>{e.preventDefault();let{name:t,email:s,password:r,gender:a,con_password:i}=u;if(!s||!r||!t||!a||!i)return d.Am.error("All field are required!");if(r.length<6)return d.Am.error("Password can be at least 6 characters.");if(r!==i)return d.Am.error("Password not match.");let l=await p({name:t,email:s,password:r,gender:a});l?.data?.success?(g.push("/verify?email="+u.email),d.Am.success(l?.data?.message)):d.Am.error(l?.error?.data?.error?.message)};return r.jsx("section",{className:"bg-[#fff] py-24 dark:bg-[#0b192a]    dark:text-white px-4 ",children:(0,r.jsxs)("div",{className:"dark:bg-[#161737] dark:border-[#22174bcf] max-w-[450px] bg-[#f0f0f7] mx-auto  py-5 px-4 sm:px-8 rounded-md border text-left ",children:[r.jsx("h2",{className:"text-center text-2xl pt-1 pb-4 font-bold dark:text-white text-zinc-700 ",children:"Sign Up"}),(0,r.jsxs)("form",{onSubmit:f,children:[(0,r.jsxs)("div",{className:"relative mb-8",children:[r.jsx("input",{type:"text",id:"name",className:"form-input peer",value:u.name,onChange:h,placeholder:" ",name:"name"}),r.jsx("label",{htmlFor:"name",className:"form-label cursor-text",children:"Enter Your Full Name"})]}),(0,r.jsxs)("div",{className:"relative mb-8",children:[r.jsx("input",{type:"text",id:"email",className:"form-input peer",value:u.email,onChange:h,placeholder:" ",name:"email"}),r.jsx("label",{htmlFor:"email",className:"form-label cursor-text",children:"Enter Your Email Address"})]}),(0,r.jsxs)("div",{className:"relative mb-8",children:[r.jsx("input",{type:s?"text":"password",name:"password",value:u.password,onChange:h,id:"password",className:"form-input peer",placeholder:" "}),r.jsx("label",{htmlFor:"password",className:"form-label cursor-text",children:"Type Your Password"}),r.jsx("span",{className:"cursor-pointer absolute top-[14px] right-5",onClick:()=>{s?c(!1):c(!0)},children:u.password&&(s?(0,r.jsxs)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",className:"text-[20px] dark:text-white text-violet-600",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("defs",{children:r.jsx("clipPath",{children:r.jsx("path",{fill:"none",d:"M124-288l388-672 388 672H124z",clipRule:"evenodd"})})}),r.jsx("path",{d:"M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"}),r.jsx("path",{d:"M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"})]}):r.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",className:"text-[20px]  text-violet-600",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"})}))})]}),(0,r.jsxs)("div",{className:"relative mb-8",children:[r.jsx("input",{type:e?"text":"password",name:"con_password",value:u.con_password,onChange:h,id:"con_password",className:"form-input peer",placeholder:" "}),r.jsx("label",{htmlFor:"con_password",className:"form-label cursor-text",children:"Confirm Your Password"}),r.jsx("span",{className:"cursor-pointer absolute top-[14px] right-5",onClick:()=>{e?t(!1):t(!0)},children:u.con_password&&(e?(0,r.jsxs)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",className:"text-[20px] dark:text-white text-violet-600",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("defs",{children:r.jsx("clipPath",{children:r.jsx("path",{fill:"none",d:"M124-288l388-672 388 672H124z",clipRule:"evenodd"})})}),r.jsx("path",{d:"M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"}),r.jsx("path",{d:"M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"})]}):r.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",className:"text-[20px]  text-violet-600",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"})}))})]}),(0,r.jsxs)("div",{className:"relative mb-8",children:[r.jsx("div",{className:"form-input peer",children:(0,r.jsxs)("span",{className:"flex justify-between gap-4",children:[(0,r.jsxs)("label",{className:"dark:border-zinc-600 border-zinc-300 cursor-pointer flex-1 border py-2 text-center rounded-sm",children:[r.jsx("input",{type:"radio",onChange:h,value:"male",name:"gender"})," ","\xa0 \xa0 ",r.jsx("span",{className:"text-[17px]",children:"Male"})]}),(0,r.jsxs)("label",{className:"dark:border-zinc-600 border-zinc-300 cursor-pointer flex-1 border py-2 text-center rounded-sm",children:[r.jsx("input",{onChange:h,value:"female",type:"radio",name:"gender"})," ","\xa0 \xa0 ",r.jsx("span",{className:"text-[17px]",children:"Female"})]})]})}),r.jsx("label",{className:"form-label",children:"Select Gender"})]}),(0,r.jsxs)("div",{className:"mt-4 flex justify-center mb-6  text-zinc-500 dark:text-zinc-300",children:["Already have a Account? Please"," ",(0,r.jsxs)(l.default,{href:"/login",className:"z-10 text-blue-600 font-semibold dark:text-blue-600 hover:text-violet-600 px-2 ",children:[" ","LOGIN"]})]}),r.jsx("div",{className:"mb-6 flex",children:r.jsx("button",{type:"submit",className:"z-10 border-none h-11 flex justify-center items-center  rounded-md text-[17px] font-semibold  w-full dark:bg-violet-600 text-white bg-violet-500 hover:bg-violet-600 dark:hover:bg-violet-700 cursor-pointer",children:m?r.jsx(a.Z,{}):"SIGN UP"})})]})]})})}},17325:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});var r=s(10326);function a(){return r.jsx("span",{className:"h-6 w-6 rounded-full border-[3px] animate-spin border-dashed border-slate-300 dark:border-slate-200"})}},71531:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i,metadata:()=>a});var r=s(19510);let a={metadataBase:new URL("https://kinsust.org"),title:"Register",description:"Register description",openGraph:{title:"Register",description:"KIN School Description",url:"https://kinsust.org/register",type:"website",siteName:"KIN,A Voluntary Organization",locale:"bn_BD",images:[{url:"/images/wings/blood.jpg",width:800,height:600,alt:"KIN Blood Image"},{url:"/images/wings/blood.jpg",width:900,height:800,alt:"KIN Blood Image"},{url:"/images/wings/blood.jpg"}]},twitter:{title:"KIN School",description:" School Description",images:{url:"/images/wings/blood.jpg",alt:"KIN School "}}};function i({children:e}){return r.jsx("div",{children:e})}},15548:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(19510),a=s(35315);function i(){return r.jsx("div",{className:"top-0 left-0 z-[10] h-screen w-full mx-auto flex justify-center bg-white dark:bg-[#0f0826] overflow-hidden absolute items-center",children:r.jsx("div",{className:"text-center",children:r.jsx(a.Z,{color:"#36d7b7",height:40,loading:!0,margin:3,radius:3,width:5})})})}},77395:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>l,__esModule:()=>i,default:()=>n});var r=s(68570);let a=(0,r.createProxy)(String.raw`C:\Users\Asus\Desktop\kin\main\app\register\page.js`),{__esModule:i,$$typeof:l}=a;a.default;let n=(0,r.createProxy)(String.raw`C:\Users\Asus\Desktop\kin\main\app\register\page.js#default`)}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,245,780],()=>s(72773));module.exports=r})();