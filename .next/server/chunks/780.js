exports.id=780,exports.ids=[780],exports.modules={80495:(e,t,r)=>{Promise.resolve().then(r.bind(r,42612)),Promise.resolve().then(r.bind(r,67138)),Promise.resolve().then(r.bind(r,35689)),Promise.resolve().then(r.bind(r,48517)),Promise.resolve().then(r.bind(r,59272)),Promise.resolve().then(r.t.bind(r,92481,23)),Promise.resolve().then(r.t.bind(r,79404,23)),Promise.resolve().then(r.t.bind(r,44064,23))},98533:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},92293:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,79404,23))},35303:()=>{},42612:(e,t,r)=>{"use strict";r.d(t,{default:()=>b});var s=r(10326),a=r(8860),l=r(35175),i=r(29226),o=r(69119),d=r(37509);let n=(0,o.LC)({reducerPath:"sliderApi",baseQuery:(0,d.ni)({baseUrl:"https://server.kinsust.org/api/v1/sliders",credentials:"include"}),tagTypes:["Sliders"],endpoints:()=>({})});var c=r(72144),h=r(50169),u=r(7747),m=r(94742),f=r(68063);let x=()=>(0,a.xC)({reducer:{[i.G.reducerPath]:i.G.reducer,[n.reducerPath]:n.reducer,[c.P.reducerPath]:c.P.reducer,[h.h.reducerPath]:h.h.reducer,[u.f.reducerPath]:u.f.reducer,[m.T.reducerPath]:m.T.reducer,[f.f.reducerPath]:f.f.reducer},middleware:e=>e().concat(i.G.middleware,n.middleware,c.P.middleware,h.h.middleware,u.f.middleware,m.T.middleware,f.f.middleware),devTools:!1});(0,l.KV)(x,{debug:!0});var p=r(17577),g=r(25842);function b({children:e}){let t=(0,p.useRef)();return t.current||(t.current=x()),s.jsx(g.zt,{store:t.current,children:e})}},67138:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var s=r(10326),a=r(14831);function l({children:e}){return s.jsx(a.f,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:e})}},59272:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var s=r(10326),a=r(29394);function l(){return s.jsx(a.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})}r(45996)},35689:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var s=r(10326),a=r(51497),l=r(8276),i=r(17577),o=r(29394);function d(){let e=(0,i.useRef)(null),[t]=(0,a.N)(),r=async e=>{e.preventDefault();let{email:r}=Object.fromEntries(new FormData(e.target).entries());if(!r)return o.Am.error("Email is required!");if(!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(r))return o.Am.error("Invalid Email Address");let s=await t({email:r});s?.data?.success?(o.Am.success("Subscribed Successfully!"),e.target.reset()):s?.error?.status===400&&o.Am.error(s.error.data.error.message)};return(0,s.jsxs)("form",{className:"flex gap-2",onSubmit:r,ref:e,children:[s.jsx("input",{type:"text",name:"email",placeholder:"example@gmail.com ",className:"py-3   rounded-md w-full px-3 bg-[#fff] border dark:bg-[#392f5778]    dark:border-sky-500/50 dark:focus:ring-sky-500/50 dark:focus:outline-none dark:focus:ring-2 "}),s.jsx(l.E.input,{transition:{duration:.5,type:"spring",stiffness:260,damping:20},type:"submit",value:"Subscribe",className:"bg-[#d3e4f5] hover:bg-[#c4def9] text-[#007fff] font-bold dark:bg-[#1e4976] dark:hover:bg-[#1b3d62]  py-2 px-3 rounded-md dark:text-white cursor-pointer"})]})}},48517:(e,t,r)=>{"use strict";r.d(t,{default:()=>x});var s=r(10326),a=r(35047),l=r(17577);let i=()=>{let[e,t]=(0,l.useState)(!1),r=(0,l.useRef)(null),s=e=>{r.current&&!r.current.contains(e.target)&&t(!1)};return(0,l.useEffect)(()=>(document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}),[]),{isOpen:e,toggleMenu:()=>{t(!e)},dropDownRef:r}};var o=r(90434);r(36961);var d=r(46226);let n=[{href:"/",label:"Home"},{label:"About US",child:[{href:"/our-history",label:"Our History"},{href:"/executive-committee",label:"Executive Committee"},{href:"/advisors",label:"Advisors"},{href:"/faq",label:"FAQ"}]},{label:"Wings",child:[{href:"/kin-school",label:"KIN School"},{href:"/blood-donation",label:"Blood Donation"},{href:"/social-awareness",label:"Social Awareness"},{href:"/charity&aid",label:"Charity & Aid"},{href:"/winter-cloth-distribution",label:"Winter Cloth Distribution"}]},{href:"/posts",label:"Blog"},{href:"/programs",label:"Programs"},{href:"/profile",label:"Profile",access:"private"},{href:" ",label:"Sign Out",access:"private"},{href:"/login",label:"Login",access:"public"}];var c=r(14831);let h=function(){let[e,t]=(0,l.useState)(!1),{setTheme:r,theme:a}=(0,c.F)();return e?(0,s.jsxs)("button",{"aria-hidden":"true",className:"relative focus:outline-none transition-all duration-700 delay-500",onClick:()=>{"light"===a?r("dark"):r("light")},children:[s.jsx("div",{className:"w-12 h-6 transition-all duration-300 rounded-full outline-none bg-slate-600 dark:bg-slate-400 dark:bg-primary-lighter"}),(0,s.jsxs)("div",{className:"absolute top-0 left-0 inline-flex items-center justify-center w-6 h-6 transition-all duration-500  scale-110 rounded-full shadow-sm",children:[s.jsx("svg",{className:" w-32 hidden  dark:translate-x-6 dark:block p-[4px] rounded-full  bg-[#155e75] text-[#cffafe]  transition-transform ease-linear duration-500  ",xmlns:"http://www.w3.org/2000/svg",fill:"none",id:"theme-toggle-light-icon",viewBox:"0 0 24 24",onClick:()=>r("light"),stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"})}),s.jsx("svg",{className:" w-32  dark:hidden block p-[3px] stroke-white rounded-full bg-[#44935d] text-primary-dark transition-all ease-linear duration-500  ",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",id:"theme-toggle-dark-icon",stroke:"currentColor",onClick:()=>{r("light")},children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})})]})]}):null};var u=r(63182),m=r(29394),f=r(66562);function x(){let e=(0,a.useRouter)(),t=(0,a.usePathname)(),{data:r,refetch:c,currentData:x,isError:p,isSuccess:g}=(0,u.Tr)(),[b]=(0,u.SE)(),[v,w]=(0,l.useState)(r?.data||null),{isOpen:k,toggleMenu:j,dropDownRef:y}=i(),[N,C]=(0,l.useState)("relative"),P=async()=>{let t=await b();t?.data?.success?(e.push("/login"),f.Z.remove("accessToken"),w(null),m.Am.success("Successfully Logout.")):t?.error?.status===400&&m.Am.error(t.error.data.error.message)},S=(0,l.useRef)(null);return s.jsx("nav",{className:`  top-0  bg-[#fafafaf0] dark:bg-[#0f1829] shadow-md     border  dark:border-[#1b2341] dark:border-b dark:border-t-0 dark:border-l-0 dark:border-r-0 ${N}  `,style:{zIndex:"100"},children:(0,s.jsxs)("div",{className:" navbar  px-4 py-0 xl:w-[1200px] m-auto ",children:[(0,s.jsxs)("div",{className:"navbar-start  w-fit grow lg:grow-0 ",ref:y,children:[s.jsx("button",{className:"p-2 text-[#374246] dark:text-white bg-[#5a7b862c] cursor-pointer dark:bg-[#9f98b720] rounded-md lg:hidden",onClick:()=>{j(!k)},children:s.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 20 20","aria-hidden":"true",className:"text-[22px] ",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),s.jsx("div",{className:"dropdown",children:k&&s.jsx("ul",{tabIndex:0,className:"top-[33px] -left-[54px] p-2 shadow  rounded-b-md w-60 absolute dark:bg-[#0f0826f7] space-y-[1px] bg-[#f1f5f9] lg:hidden",ref:S,style:{zIndex:"300"},children:n.map((e,r)=>s.jsx(l.Fragment,{children:e?.child?(0,s.jsxs)("li",{className:"text-[#334155]  active:bg-transparent",children:[s.jsx("label",{htmlFor:`menu-toggle-${r}`,className:"flex justify-between w-full cursor-pointer",children:(0,s.jsxs)("span",{className:" w-full h-full custom-style-menu-a new-menu flex justify-between py-[6px] px-[10px]",children:[e.label,(0,s.jsxs)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",className:"text-xl",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{fill:"none",d:"M0 0h24v24H0V0z"}),s.jsx("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})]})]})}),s.jsx("input",{type:"checkbox",id:`menu-toggle-${r}`,className:"hidden"}),s.jsx("ul",{className:`space-y-[2px] shadow-md mt-1 vertical-child-${r} bg-white dark:bg-[#1f273476] z-50  rounded-md`,children:e?.child?.map((e,r)=>s.jsx("li",{className:"rounded-[4px]",onClick:()=>{j(!k)},children:s.jsx(o.default,{href:e.href,className:`${t===e.href?"active":""} custom-style-menu-a`,children:e.label})},r))})]}):(0,s.jsxs)(s.Fragment,{children:["private"===e.access&&v&&s.jsx("li",{onClick:()=>{j(!k)},children:s.jsx(o.default,{href:e?.href?e.href:" ",className:`${t===e.href?"active":""} custom-style-menu-a`,onClick:e?.href===" "&&P,children:e.label})}),!v&&e?.access==="public"&&s.jsx("li",{onClick:()=>{j(!k)},children:s.jsx(o.default,{href:e.href,className:`${t===e.href?"active":""} custom-style-menu-a`,children:e.label})}),!e?.access&&s.jsx("li",{onClick:()=>{j(!k)},children:s.jsx(o.default,{href:e.href,className:`${t===("/"===e.href?"/":e.href)?"active":""} custom-style-menu-a`,children:e.label})})]})},r))})}),(0,s.jsxs)(o.default,{className:" h-full  md:mx-0 w-full",href:"/",children:[s.jsx(d.default,{src:"/images/logo/logo_black.webp",alt:"",className:"h-16 dark:hidden block mx-auto w-auto",width:100,height:52,placeholder:"blur",blurDataURL:"/images/blur/blur.webp",loading:"lazy"}),s.jsx(d.default,{src:"/images/logo/logo_white.webp",alt:"",className:"h-16 dark:block hidden mx-auto w-auto",width:100,height:52,placeholder:"blur",blurDataURL:"/images/blur/blur.webp",loading:"lazy"})]})]}),s.jsx("div",{className:"navbar-center hidden lg:flex p-0 grow ",children:s.jsx("ul",{className:"menu menu-horizontal p-0 menu-compact space-x-2 mx-auto",children:n?.map((e,r)=>s.jsx(l.Fragment,{children:e?.child?s.jsxs("li",{children:[s.jsxs("span",{className:"custom-style-menu-a",children:[e?.label,s.jsxs("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",className:"text-xl",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{fill:"none",d:"M0 0h24v24H0V0z"}),s.jsx("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"})]})]}),s.jsx("ul",{className:"py-0 shadow-md  top-[35px] dark:bg-[#0f0826] dark:text-zinc-100    bg-[#f1f5f9] text-[#000]  drop-child-1",style:{zIndex:"100"},children:e?.child?.map((e,r)=>s.jsx("li",{children:s.jsx(o.default,{href:e.href,className:`${t===e.href?"active":""} custom-style-menu-a`,children:e.label})},r))})]}):"private"===e.access&&v?s.jsx("li",{children:s.jsx(o.default,{href:e?.href?e.href:" ",className:`${t===e?.href+"/"?"active":""} custom-style-menu-a`,onClick:e?.href===" "&&P,children:e.label})}):(v||"public"!==e.access)&&e.access?" ":s.jsx("li",{children:s.jsx(o.default,{href:e?.href,className:`${t===(e?.href==="/"?"/":e?.href)?"active":""} custom-style-menu-a`,children:e.label})})},r))})}),s.jsx(h,{})]})})}},68063:(e,t,r)=>{"use strict";r.d(t,{f:()=>l});var s=r(69119),a=r(37509);let l=(0,s.LC)({reducerPath:"advisorApi",baseQuery:(0,a.ni)({baseUrl:"https://server.kinsust.org/api/v1/advisors",credentials:"include"}),tagTypes:["Advisors"],endpoints:()=>({})})},63182:(e,t,r)=>{"use strict";r.d(t,{EW:()=>o,FZ:()=>i,JK:()=>s,SE:()=>l,Tr:()=>d,UE:()=>u,Wf:()=>c,Zz:()=>a,oU:()=>h,x8:()=>f,x_:()=>n});let{useAccountActivationMutation:s,useAuthLoginMutation:a,useAuthLogoutMutation:l,useAuthRegisterMutation:i,useFindAccountMutation:o,useLoggedInUserQuery:d,usePasswordResetMutation:n,usePasswordResetCodeSendMutation:c,useResendActivationCodeMutation:h,useUpdateUserDataMutation:u,useUpdateUserPasswordMutation:m,useUpdateUserPhotoMutation:f}=r(29226).G.injectEndpoints({endpoints:e=>({authRegister:e.mutation({query:e=>({url:"/auth/register",method:"POST",body:e})}),loggedInUser:e.query({query:()=>({url:"/auth/me",method:"GET"}),providesTags:["User"]}),authLogin:e.mutation({query:e=>({url:"/auth/login",method:"POST",body:e}),providesTags:["User"]}),authLogout:e.mutation({query:()=>({url:"/auth/logout",method:"POST",body:{}}),invalidatesTags:["User"]}),resendActivationCode:e.mutation({query:e=>({url:"/auth/resend-active-code",method:"POST",body:e})}),accountActivation:e.mutation({query:e=>({url:"/auth/activate",method:"POST",body:e})}),findAccount:e.mutation({query:e=>({url:"/users/forgot-password",method:"POST",body:e})}),passwordResetCodeSend:e.mutation({query:e=>({url:"/users/resend-password-reset-code",method:"POST",body:e})}),passwordReset:e.mutation({query:e=>({url:"/users/reset-password",method:"POST",body:e})}),updateUserData:e.mutation({query:e=>({url:`/users/${e.id}`,method:"PATCH",body:e}),invalidatesTags:["User"]}),updateUserPassword:e.mutation({query:e=>({url:"/auth/users/password-update",method:"PATCH",body:e})}),updateUserPhoto:e.mutation({query:e=>({url:`/users/${e.get("userId")}`,method:"PATCH",body:e}),invalidatesTags:["User"]})})})},29226:(e,t,r)=>{"use strict";r.d(t,{G:()=>l});var s=r(69119),a=r(37509);let l=(0,s.LC)({reducerPath:"authApi",baseQuery:(0,a.ni)({baseUrl:"https://server.kinsust.org/api/v1",credentials:"include"}),tagTypes:["Auth","User"],endpoints:()=>({})})},7747:(e,t,r)=>{"use strict";r.d(t,{f:()=>l});var s=r(69119),a=r(37509);let l=(0,s.LC)({reducerPath:"ecApi",baseQuery:(0,a.ni)({baseUrl:"https://server.kinsust.org/api/v1/ec",credentials:"include"}),tagTypes:["ECS"],endpoints:()=>({})})},50169:(e,t,r)=>{"use strict";r.d(t,{h:()=>l});var s=r(69119),a=r(37509);let l=(0,s.LC)({reducerPath:"postApi",baseQuery:(0,a.ni)({baseUrl:"https://server.kinsust.org/api/v1/posts",credentials:"include"}),tagTypes:["Posts","Post"],endpoints:()=>({})})},72144:(e,t,r)=>{"use strict";r.d(t,{P:()=>l});var s=r(69119),a=r(37509);let l=(0,s.LC)({reducerPath:"programApi",baseQuery:(0,a.ni)({baseUrl:"https://server.kinsust.org/api/v1/programs",credentials:"include"}),tagTypes:["Programs"],endpoints:()=>({})})},51497:(e,t,r)=>{"use strict";r.d(t,{N:()=>s});let{useAddSubsciberMutation:s}=r(94742).T.injectEndpoints({endpoints:e=>({addSubsciber:e.mutation({query:e=>({url:"/",method:"POST",body:e})})})})},94742:(e,t,r)=>{"use strict";r.d(t,{T:()=>l});var s=r(69119),a=r(37509);let l=(0,s.LC)({reducerPath:"subscriberApi",baseQuery:(0,a.ni)({baseUrl:"https://server.kinsust.org/api/v1/subscribers",credentials:"include"}),tagTypes:["Subscribers"],endpoints:()=>({})})},58098:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>U,metadata:()=>A});var s=r(19510),a=r(98401),l=r.n(a);r(67272),r(75376);var i=r(57371),o=r(17710),d=r(68570);let n=(0,d.createProxy)(String.raw`C:\Users\Asus\Desktop\kin\main\components\shared\footer\Subscribe.js`),{__esModule:c,$$typeof:h}=n;n.default;let u=(0,d.createProxy)(String.raw`C:\Users\Asus\Desktop\kin\main\components\shared\footer\Subscribe.js#default`);function m(){return s.jsx(s.Fragment,{children:(0,s.jsxs)("footer",{className:"-z-[100] bg-[#f9fbfc]  dark:bg-[#0f1829] border-t  dark:border-[#211d4c] ",children:[(0,s.jsxs)("section",{className:"-z-[100] text-base xl:w-[1200px]    mx-auto footer pt-10 pb-12  px-3  m-auto  items-start justify-center md:justify-between ",children:[(0,s.jsxs)("div",{className:" mx-auto justify-items-center md:justify-items-start text-center md:text-left ",children:[s.jsx("span",{className:"",children:(0,s.jsxs)(i.default,{href:"/",className:"cursor-pointer ",children:[s.jsx(o.default,{src:"/images/logo/logo_white.webp",alt:"KIN logo",className:"h-[52px] hidden dark:block w-auto ",width:150,height:60,placeholder:"blur",blurDataURL:"/images/blur/blur.webp",loading:"lazy"}),s.jsx(o.default,{src:"/images/logo/logo_black.webp",alt:"KIN logo",className:"  w-fit dark:hidden  h-[52px]",width:150,height:60,placeholder:"blur",blurDataURL:"/images/blur/blur.webp",loading:"lazy"})]})}),s.jsx("p",{className:" font-['Hind_Siliguri']  -mt-2 text-[#3e5060] dark:text-[#b2bac2]",children:"আত্মার কাছে দায়বদ্ধতায় হাতে রাখি হাত"}),(0,s.jsxs)("div",{className:"text-[#3e5060] dark:text-[#b2bac2]",children:[s.jsx("p",{className:"pb-[6px] pt-3 font-semibold",children:"Enter Your Email address:"}),s.jsx(u,{})]})]}),(0,s.jsxs)("div",{className:" py-8 md:py-0 text-[#3e5060] dark:text-[#b2bac2] flex flex-col  gap-2  items-center md:items-start mx-auto contact-section ",children:[s.jsx("h2",{className:"pb-3 text-[#000102] dark:text-[#ffffff] font-bold  ",children:"CONTACT"}),(0,s.jsxs)("a",{href:"tel:+8801975467878",className:"hover:text-[#f54747]  dark:hover:text-[#2bd399] fill-white hover:fill-[#f54747] stroke-black hover:stroke-[0px]  stroke-[2px] dark:hover:fill-[#2bd399]  ",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",className:"w-6  h-6 inline-block ml-1 mr-2 p-[3px]   ",x:"0",y:"0",viewBox:"0 0 32 32",children:s.jsx("g",{children:s.jsx("path",{d:"M30.035 22.6c-.082-.065-6.035-4.356-7.669-4.048-.78.138-1.226.67-2.121 1.735-.144.172-.49.584-.759.877a12.517 12.517 0 0 1-1.651-.672 13.7 13.7 0 0 1-6.321-6.321 12.458 12.458 0 0 1-.672-1.651c.294-.27.706-.616.882-.764 1.06-.89 1.593-1.336 1.731-2.118.283-1.62-4.005-7.614-4.05-7.668A2.289 2.289 0 0 0 7.7 1C5.962 1 1 7.437 1 8.521c0 .063.091 6.467 7.988 14.5C17.013 30.909 23.416 31 23.479 31 24.564 31 31 26.038 31 24.3a2.283 2.283 0 0 0-.965-1.7z",opacity:"1","data-original":"#000000"})})}),"+8801975-467878"]}),(0,s.jsxs)("a",{href:"tel:+8801615467878",className:" flex items-center gap-2 ml-1 hover:text-[#f54747] dark:hover:text-[#2bd399] fill-white hover:fill-[#ff0000] dark:hover:fill-[#2bd399] dark:stroke-none",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"512",height:"512",x:"0",y:"0",className:"w-6  h-6 inline-block ml-1 p-[1px] ",viewBox:"0 0 511.021 511.021",children:(0,s.jsxs)("g",{children:[(0,s.jsxs)("linearGradient",{id:"a",x1:"402.453",x2:"402.453",y1:"11.981",y2:"294.117",gradientUnits:"userSpaceOnUse",children:[s.jsx("stop",{offset:"0",stopColor:"#ff0000"}),s.jsx("stop",{offset:"1",stopColor:"#ff0000"})]}),(0,s.jsxs)("linearGradient",{id:"b",x1:"255.511",x2:"255.511",y1:".038",y2:"510.983",gradientUnits:"userSpaceOnUse",children:[s.jsx("stop",{offset:"0",stopColor:"#ff0000"}),s.jsx("stop",{offset:"1"})]}),s.jsx("path",{d:"M119.792 391.191c89.821 89.821 164.738 160.531 254.558 70.711l21.213-21.213c11.716-11.716 11.716-30.711 0-42.426l-56.569-56.569c-11.716-11.716-30.711-11.716-42.426 0l-21.213 21.213c-31.414 31.413-49.733 33.346-65.389 22.962-13.539-8.98-75.873-71.314-84.853-84.853-10.383-15.656-8.451-33.975 22.962-65.388l21.213-21.213c11.716-11.716 11.716-30.711 0-42.426l-56.569-56.569c-11.716-11.716-30.711-11.716-42.426 0L49.08 136.633c-89.82 89.82-19.109 164.738 70.712 254.558z",opacity:"1"}),s.jsx("path",{fill:"url(#a)",className:"blood-svg",d:"M503.521 193.049c0 55.818-45.25 101.068-101.068 101.068s-101.068-45.25-101.068-101.068S402.453 11.981 402.453 11.981s101.068 125.25 101.068 181.068z",opacity:"1"}),s.jsx("path",{fill:"#ffffff",d:"M453.517 176.066h-34.979v-34.979h-32.17v34.979h-34.979v32.17h34.979v34.979h32.17v-34.979h34.979z",opacity:"1"}),s.jsx("path",{fill:"url(#b)",className:"blood-svg",d:"M344.299 336.391c-14.624-14.622-38.412-14.62-53.034 0l-21.213 21.213c-31.236 31.237-45.346 29.043-55.94 22.016-12.554-8.327-74.422-70.194-82.748-82.748-7.026-10.594-9.222-24.703 22.015-55.939l21.213-21.213c14.622-14.622 14.622-38.412 0-53.034l-56.568-56.568c-14.621-14.621-38.412-14.621-53.033 0l-21.213 21.213c-22.804 22.805-36.378 45.289-41.5 68.74-4.713 21.584-2.129 43.435 7.901 66.801 17.636 41.087 55.995 81.311 104.31 129.625s88.538 86.674 129.624 104.309c15.846 6.802 30.993 10.18 45.834 10.18a98.037 98.037 0 0 0 20.966-2.278c23.451-5.121 45.937-18.695 68.741-41.5l21.213-21.213c14.621-14.621 14.621-38.412 0-53.033zM75.598 120.724c4.386-4.387 10.148-6.58 15.91-6.58s11.523 2.193 15.91 6.58l56.568 56.568a22.348 22.348 0 0 1 6.59 15.909 22.353 22.353 0 0 1-6.59 15.91l-15.91 15.91-88.388-88.388zM250.029 487.02c-38.631-16.582-77.775-53.974-124.934-101.133-47.159-47.158-84.55-86.302-101.132-124.934-17.311-40.331-9.301-76.595 25.219-113.613l88.373 88.373c-26.16 27.934-31.899 49.534-18.692 69.448 9.397 14.17 72.787 77.559 86.957 86.957 19.912 13.209 41.512 7.47 69.447-18.689l88.373 88.373c-37.017 34.519-73.278 42.53-113.611 25.218zm140.231-51.634-15.911 15.911-88.388-88.388 15.911-15.911c8.772-8.774 23.049-8.772 31.819 0l56.568 56.568c8.774 8.773 8.774 23.046.001 31.82zM408.29 7.271 402.453.038l-5.837 7.233c-4.194 5.198-102.731 127.975-102.731 185.777 0 59.865 48.703 108.568 108.568 108.568s108.568-48.703 108.568-108.568c0-57.802-98.537-180.578-102.731-185.777zm-5.837 279.346c-51.594 0-93.568-41.975-93.568-93.568 0-21.335 17.023-58.417 49.23-107.238 17.625-26.717 35.433-50.235 44.338-61.704 8.905 11.469 26.713 34.987 44.338 61.704 32.207 48.821 49.23 85.903 49.23 107.238 0 51.594-41.974 93.568-93.568 93.568zm23.585-153.03h-47.17v34.979H343.89v47.17h34.979v34.979h47.17v-34.979h34.979v-47.17h-34.979v-34.979zm19.979 49.979v17.17h-34.979v34.979h-17.17v-34.979H358.89v-17.17h34.979v-34.979h17.17v34.979z",opacity:"1"})]})}),s.jsx("span",{className:"-ml-1",children:"+8801615-467878"})]}),(0,s.jsxs)("a",{className:"hover:text-[#f54747] dark:hover:text-[#2bd399]",href:"mailto: kinsust03@gmail.com",children:[(0,s.jsxs)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",className:"w-6  h-6 inline-block ml-1 mr-2 p-[3px]",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{fill:"none",d:"M0 0h24v24H0V0z"}),s.jsx("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"})]}),"kinsust03@gmail.com"]}),(0,s.jsxs)("a",{href:"https://goo.gl/maps/x35EyojkSbMZY3rh7",target:"_blank",rel:"noReferrer",className:" hover:text-[#f54747] dark:hover:text-[#2bd399]    flex items-center ",children:[(0,s.jsxs)("svg",{stroke:"currentColor",fill:"none",strokeWidth:"2",viewBox:"0 0 24 24","aria-hidden":"true",className:"w-6  h-6 inline-block ml-1 mr-2 p-[3px]",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]}),"Shahjalal University of Science & Technology, Sylhet-3114, Bangladesh"]})]}),(0,s.jsxs)("div",{className:" text-[#3e5060] dark:text-[#b2bac2]  flex flex-col gap-[6px] items-center md:items-start mx-auto explore-section",children:[s.jsx("h2",{className:"pb-3 text-black dark:text-white  font-bold  ",children:"EXPLORE"}),s.jsx(i.default,{className:"hover:text-[#f54747] dark:hover:text-[#2bd399] ",href:"/our-history",children:"Our History"}),s.jsx(i.default,{className:"hover:text-[#f54747] dark:hover:text-[#2bd399] ",href:"/programs",children:"Campaigns"}),s.jsx(i.default,{className:"hover:text-[#f54747] dark:hover:text-[#2bd399] ",href:"/executive-committee",children:"Executive Committee"}),s.jsx(i.default,{href:"/faq",className:"hover:text-[#f54747] dark:hover:text-[#2bd399] ",children:"FAQ"})]})]}),s.jsx("div",{className:" xl:w-[1200px] mx-auto  ",children:s.jsx("hr",{className:"h-[1px] border-none bg-[#bfbebe50] dark:bg-[#211d4c]"})}),(0,s.jsxs)("div",{className:"-z-[100] grid md:grid-cols-2 md:justify-items-between xl:w-[1200px] py-8 px-4  mx-auto text-[#3e5060] items-center dark:text-[#b2bac2]",children:[(0,s.jsxs)("p",{className:" md:order-1 order-2 dark:text-[#e2e8f0]   text-center md:text-left",children:["Copyright \xa9 2023"," ",s.jsx("span",{className:"text-red-600 font-['Arial_black'] dark:text-red-600",children:"KIN"})," ",", A Voluntary Organization of SUST"]}),(0,s.jsxs)("div",{className:"social-icons order-1 md:order-2 flex pb-4 md:pb-0 gap-4  md:justify-end mx-auto md:mx-0 ",children:[s.jsx("a",{href:"https://www.linkedin.com/company/kin-a-voluntary-organisation-of-sust/",target:"_blank",className:"text-[#0077b5] bg-[#eaebf0] dark:bg-[#6267d21e]  hover:shadow-[0_1px_10px_0_#223db7] flex items-center h-12 rounded-full w-12  justify-center ",rel:"noreferrer",children:s.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",version:"1.1",viewBox:"0 0 16 16",className:"fill-[#435562] hover:fill-[#223db7] dark:hover:fill-[#22b755] text-md dark:fill-white  ",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM6 13h-2v-7h2v7zM5 5c-0.553 0-1-0.447-1-1s0.447-1 1-1c0.553 0 1 0.447 1 1s-0.447 1-1 1zM13 13h-2v-4c0-0.553-0.447-1-1-1s-1 0.447-1 1v4h-2v-7h2v1.241c0.412-0.566 1.044-1.241 1.75-1.241 1.244 0 2.25 1.119 2.25 2.5v4.5z"})})}),s.jsx("a",{href:"https://www.youtube.com/@kinsust3885",target:"_blank",rel:"noreferrer",className:"text-[#0077b5] bg-[#eaebf0]  dark:bg-[#6267d21e]  flex items-center h-12 rounded-full w-12  justify-center ",children:s.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",className:"fill-[#435562] dark:hover:fill-[#22b755] text-md dark:fill-white ",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M508.6 148.8c0-45-33.1-81.2-74-81.2C379.2 65 322.7 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.6-.1 220.2 0 255.8c-.1 35.6 1 71.2 3.4 106.9 0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8 60.8.2 120.3-1 178.6-3.8 40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107 .2-35.6-.9-71.2-3.3-106.9zM207 353.9V157.4l145 98.2-145 98.3z"})})}),s.jsx("a",{href:"//www.facebook.com/KINSUST",rel:"noreferrer",target:"_blank",className:"  text-[#0077b5] bg-[#eaebf0] dark:bg-[#6267d21e]  flex items-center h-12 rounded-full w-12  justify-center ",children:s.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",className:"fill-[#435562] dark:hover:fill-[#22b755] text-md dark:fill-white ",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{fillRule:"evenodd",d:"M9.94474914,22 L9.94474914,13.1657526 L7,13.1657526 L7,9.48481614 L9.94474914,9.48481614 L9.94474914,6.54006699 C9.94474914,3.49740494 11.8713513,2 14.5856738,2 C15.8857805,2 17.0033128,2.09717672 17.3287076,2.13987558 L17.3287076,5.32020466 L15.4462767,5.32094085 C13.9702212,5.32094085 13.6256856,6.02252733 13.6256856,7.05171716 L13.6256856,9.48481614 L17.306622,9.48481614 L16.5704347,13.1657526 L13.6256856,13.1657526 L13.6845806,22"})})}),s.jsx("a",{href:"//www.instagram.com/kin_sust/",rel:"noreferrer",target:"_blank",className:" text-[#0077b5]  bg-[#eaebf0] dark:bg-[#6267d21e]  flex items-center h-12 rounded-full w-12  justify-center ",children:s.jsx("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 448 512",className:"fill-[#435562] dark:hover:fill-[#22b755] text-md dark:fill-white ",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})})})]})]})]})})}let f=(0,d.createProxy)(String.raw`C:\Users\Asus\Desktop\kin\main\app\StoreProvider.js`),{__esModule:x,$$typeof:p}=f;f.default;let g=(0,d.createProxy)(String.raw`C:\Users\Asus\Desktop\kin\main\app\StoreProvider.js#default`),b=(0,d.createProxy)(String.raw`C:\Users\Asus\Desktop\kin\main\components\shared\header\Header.js`),{__esModule:v,$$typeof:w}=b;b.default;let k=(0,d.createProxy)(String.raw`C:\Users\Asus\Desktop\kin\main\components\shared\header\Header.js#default`),j=(0,d.createProxy)(String.raw`C:\Users\Asus\Desktop\kin\main\app\ThemeProvider.js`),{__esModule:y,$$typeof:N}=j;j.default;let C=(0,d.createProxy)(String.raw`C:\Users\Asus\Desktop\kin\main\app\ThemeProvider.js#default`),P=(0,d.createProxy)(String.raw`C:\Users\Asus\Desktop\kin\main\components\Toastify.js`),{__esModule:S,$$typeof:z}=P;P.default;let L=(0,d.createProxy)(String.raw`C:\Users\Asus\Desktop\kin\main\components\Toastify.js#default`);var T=r(9720);let A={metadataBase:new URL("https://kinsust.org"),title:"Home",description:`KIN, initiated by SUST students in 2003 with the motto "আত্মার কাছে দায়বদ্ধতায় হাতে রাখি হাত," is committed to uplifting the community. Through KIN School, blood donation, charity, warmth, and awareness initiatives, we aim to create a brighter tomorrow.`,keywords:"kinsust, kin ,kin school,kin blood donation, sust",url:"https://kinsust.org",image:"/images/logo.webp",type:"website",siteName:"KIN,A Voluntary Organization",locale:"bn_BD",facebook:{pages:"192895057402251",appID:"1438139603344595"},images:[{url:"/images/logo.webp",width:800,height:600,alt:"KIN Logo"},{url:"/images/logo.webp",width:900,height:800,alt:"KIN Logo"},{url:"/images/logo.webp"}],twitter:{title:"KIN,A Voluntary Organization",description:`KIN, initiated by SUST students in 2003 with the motto "আত্মার কাছে দায়বদ্ধতায় হাতে রাখি হাত," is committed to uplifting the community. Through KIN School, blood donation, charity, warmth, and awareness initiatives, we aim to create a brighter tomorrow.`,images:{url:"/images/logo.webp",alt:"KIN Logo"}},openGraph:{title:"KIN,A Voluntary Organization",description:`KIN, initiated by SUST students in 2003 with the motto "আত্মার কাছে দায়বদ্ধতায় হাতে রাখি হাত," is committed to uplifting the community. Through KIN School, blood donation, charity, warmth, and awareness initiatives, we aim to create a brighter tomorrow.`,url:"https://kinbd.org",type:"website",siteName:"KIN,A Voluntary Organization",locale:"bn_BD",images:[{url:"/images/logo.webp",width:800,height:600,alt:"KIN Logo"},{url:"/images/logo.webp",width:900,height:800,alt:"KIN Logo"},{url:"/images/logo.webp"}]}};function U({children:e}){return(0,s.jsxs)("html",{lang:"en",children:[(0,s.jsxs)("head",{children:[s.jsx(T.default,{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-JWPF6NH2QT"}),s.jsx(T.default,{id:"google-analytics",children:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JWPF6NH2QT')
            `})]}),s.jsx("body",{className:l().className,children:s.jsx(C,{children:(0,s.jsxs)(g,{children:[s.jsx(k,{}),s.jsx("main",{children:e}),s.jsx(m,{}),s.jsx(L,{})]})})})]})}},89204:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(19510),a=r(35315);function l(){return s.jsx("div",{className:"top-0 left-0 z-[10] h-screen w-full mx-auto flex justify-center bg-white dark:bg-[#0f0826]  absolute items-center",children:s.jsx("div",{className:"text-center",children:s.jsx(a.Z,{color:"#36d7b7",height:40,loading:!0,margin:3,radius:3,width:5})})})}},41888:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(19510),a=r(57371);function l(){return s.jsx("div",{className:"h-screen w-full flex justify-center items-center theme-dark bg-[#fff] text-black  text-center ",children:(0,s.jsxs)("div",{children:[s.jsx("h1",{className:"text-[6rem] mb-[10px]",children:"404"}),s.jsx("p",{className:"font-[1.5rem]",children:"This page could not be found."}),s.jsx("div",{className:"py-4",children:s.jsx(a.default,{href:"/",className:"py-2 px-3 rounded-md border  inline-block  hover:bg-black/5 dark:hover:bg-white/10  ",children:"Return Home"})})]})})}},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(66621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},75376:()=>{},67272:()=>{},36961:()=>{}};