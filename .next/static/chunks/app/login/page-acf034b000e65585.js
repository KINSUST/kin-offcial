(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2626],{5966:function(e,t,r){Promise.resolve().then(r.bind(r,2595))},2595:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(7437),o=r(7138),s=r(2265);function a(){let[e,t]=(0,s.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("span",{className:"bg-[#506bc2cf]  rounded-[5px_0px_0px_5px] h-11 px-4 flex items-center",children:(0,n.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 448 512",className:" text-white",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"})})}),(0,n.jsx)("input",{placeholder:"Type Your Password",name:"password",className:"rounded-[0px_5px_5px_0px] dark:bg-[#150d36] h-11 px-3 bg-white border text-[17px] text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-600 focus:outline-none  w-full max-full  z-10",type:e?"text":"password"})]}),(0,n.jsx)("span",{className:"z-10 cursor-pointer absolute top-3 right-5",onClick:()=>{e?t(!1):t(!0)},children:e?(0,n.jsxs)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",className:"text-[20px] dark:text-white text-violet-600",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("defs",{children:(0,n.jsx)("clipPath",{children:(0,n.jsx)("path",{fill:"none",d:"M124-288l388-672 388 672H124z",clipRule:"evenodd"})})}),(0,n.jsx)("path",{d:"M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"}),(0,n.jsx)("path",{d:"M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"})]}):(0,n.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",height:"1em",width:"1em",className:"text-[20px] dark:text-white text-violet-600",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z"})})})]})}var i=r(4380),u=r(3580),d=r(6463),c=r(1940),l=r(7392);function x(){let[e,{isLoading:t}]=(0,i.Zz)(),[r]=(0,i.oU)(),[x,h]=(0,s.useState)(""),[m,p]=(0,s.useState)(!0),f=(0,d.useRouter)(),v=async t=>{var r,n,o,s,a,i,d;t.preventDefault();let c=new FormData(t.target),x={email:c.get("email"),password:c.get("password")},h=await e(x);(null==h?void 0:null===(r=h.data)||void 0===r?void 0:r.success)?(u.Am.success("Login Successfully!"),l.Z.set("accessToken",null==h?void 0:null===(s=h.data)||void 0===s?void 0:s.data.accessToken,{expires:365}),f.push("/profile")):(null==h?void 0:null===(o=h.error)||void 0===o?void 0:null===(n=o.data)||void 0===n?void 0:n.success)||((null===(d=h.error)||void 0===d?void 0:null===(i=d.data)||void 0===i?void 0:null===(a=i.error)||void 0===a?void 0:a.message)==="Please active your account."&&p(!1),u.Am.error(h.error.data.error.message))},b=async()=>{var e,t,n;let o=await r({email:x});(null==o?void 0:null===(e=o.data)||void 0===e?void 0:e.success)?(f.push("/verify?email="+x),u.Am.success("Login Successfully!")):(null==o?void 0:null===(n=o.error)||void 0===n?void 0:null===(t=n.data)||void 0===t?void 0:t.success)||u.Am.error(o.error.data.error.message)};return(0,n.jsx)("section",{className:"py-24 bg-[#fff] px-4 dark:bg-[#0b192a]    dark:text-[#fff] ",children:(0,n.jsxs)("div",{className:"bg-[#f0f0f7] max-w-[450px] mx-auto border py-5 sm:px-8 px-4 rounded-md   dark:bg-[#161737] dark:border-[#6f5dbd29]  text-left",children:[(0,n.jsx)("h2",{className:"text-center text-2xl pt-1 pb-4 font-bold dark:text-white text-zinc-700",children:"Login"}),(0,n.jsxs)("form",{onSubmit:v,className:"dark:text-[#fff] z-10",children:[(0,n.jsxs)("div",{className:"my-4 flex items-center",children:[(0,n.jsx)("span",{className:"bg-[#506bc2cf] rounded-[5px_0px_0px_5px] h-11 px-4 flex items-center",children:(0,n.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",className:"text-white",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{d:"M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"})})}),(0,n.jsx)("input",{placeholder:"Type Your Email Address",className:" z-10 rounded-[0px_5px_5px_0px] dark:bg-[#150d36] h-11 px-3 bg-white border text-[17px] text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-600 focus:outline-none  w-full max-full ",type:"email",value:x,onChange:e=>h(e.target.value),name:"email"})]}),(0,n.jsx)("div",{className:"mb-4 relative",children:(0,n.jsx)(a,{})}),(0,n.jsxs)("div",{className:"my-5 z-10",children:[(0,n.jsxs)("div",{className:"text-sm flex justify-between",children:[(0,n.jsx)(o.default,{className:"z-10 block text-[17px] text-red-400 hover:text-red-600 dark:text-red-400",href:"/find-account",children:"Forgot Password?"}),(0,n.jsx)(o.default,{href:"/register",className:"z-10  text-blue-600 px-2 text-[17px] hover:text-violet-600",children:"Sign Up"})]}),!m&&(0,n.jsxs)("div",{className:"mt-4 flex justify-center mb-6  text-zinc-500 dark:text-zinc-300",children:["Active your account ? \xa0",(0,n.jsx)("button",{onClick:b,className:"z-10 text-blue-600 font-semibold dark:text-blue-600 hover:text-violet-600 px-2 ",type:"button",children:"Click Here"})]})]}),(0,n.jsx)("div",{className:" flex",children:(0,n.jsx)("button",{className:"z-10 h-11 flex justify-center items-center  rounded-md text-semibold font-semibold cursor-pointer bg-violet-500 hover:bg-violet-600 text-white border-none dark:bg-violet-600 dark:hover:bg-blue-600  w-full max-full    text-[17px]",type:"submit",children:t?(0,n.jsx)(c.Z,{}):" LOGIN"})})]})]})})}},1940:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(7437);function o(){return(0,n.jsx)("span",{className:"h-6 w-6 rounded-full border-[3px] animate-spin border-dashed border-slate-300 dark:border-slate-200"})}},4380:function(e,t,r){"use strict";r.d(t,{EW:function(){return i},FZ:function(){return a},JK:function(){return n},SE:function(){return s},Tr:function(){return u},UE:function(){return x},Wf:function(){return c},Zz:function(){return o},oU:function(){return l},x8:function(){return m},x_:function(){return d}});let{useAccountActivationMutation:n,useAuthLoginMutation:o,useAuthLogoutMutation:s,useAuthRegisterMutation:a,useFindAccountMutation:i,useLoggedInUserQuery:u,usePasswordResetMutation:d,usePasswordResetCodeSendMutation:c,useResendActivationCodeMutation:l,useUpdateUserDataMutation:x,useUpdateUserPasswordMutation:h,useUpdateUserPhotoMutation:m}=r(8619).G.injectEndpoints({endpoints:e=>({authRegister:e.mutation({query:e=>({url:"/auth/register",method:"POST",body:e})}),loggedInUser:e.query({query:()=>({url:"/auth/me",method:"GET"}),providesTags:["User"]}),authLogin:e.mutation({query:e=>({url:"/auth/login",method:"POST",body:e}),providesTags:["User"]}),authLogout:e.mutation({query:()=>({url:"/auth/logout",method:"POST",body:{}}),invalidatesTags:["User"]}),resendActivationCode:e.mutation({query:e=>({url:"/auth/resend-active-code",method:"POST",body:e})}),accountActivation:e.mutation({query:e=>({url:"/auth/activate",method:"POST",body:e})}),findAccount:e.mutation({query:e=>({url:"/users/forgot-password",method:"POST",body:e})}),passwordResetCodeSend:e.mutation({query:e=>({url:"/users/resend-password-reset-code",method:"POST",body:e})}),passwordReset:e.mutation({query:e=>({url:"/users/reset-password",method:"POST",body:e})}),updateUserData:e.mutation({query:e=>({url:"/users/".concat(e.id),method:"PATCH",body:e}),invalidatesTags:["User"]}),updateUserPassword:e.mutation({query:e=>({url:"/auth/users/password-update",method:"PATCH",body:e})}),updateUserPhoto:e.mutation({query:e=>({url:"/users/".concat(e.get("userId")),method:"PATCH",body:e}),invalidatesTags:["User"]})})})},8619:function(e,t,r){"use strict";r.d(t,{G:function(){return s}});var n=r(8507),o=r(6074);let s=(0,n.LC)({reducerPath:"authApi",baseQuery:(0,o.ni)({baseUrl:"".concat("https://server.kinsust.org","/api/v1"),credentials:"include"}),tagTypes:["Auth","User"],endpoints:()=>({})})},7138:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var n=r(231),o=r.n(n)},6463:function(e,t,r){"use strict";var n=r(1169);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},291:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(9920)._(r(2265)).default.createContext(null)},7392:function(e,t,r){"use strict";/*! js-cookie v3.0.5 | MIT */function n(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}r.d(t,{Z:function(){return o}});var o=function e(t,r){function o(e,o,s){if("undefined"!=typeof document){"number"==typeof(s=n({},r,s)).expires&&(s.expires=new Date(Date.now()+864e5*s.expires)),s.expires&&(s.expires=s.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var i in s)s[i]&&(a+="; "+i,!0!==s[i]&&(a+="="+s[i].split(";")[0]));return document.cookie=e+"="+t.write(o,e)+a}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],n={},o=0;o<r.length;o++){var s=r[o].split("="),a=s.slice(1).join("=");try{var i=decodeURIComponent(s[0]);if(n[i]=t.read(a,i),e===i)break}catch(e){}}return e?n[e]:n}},remove:function(e,t){o(e,"",n({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,n({},this.attributes,t))},withConverter:function(t){return e(n({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},function(e){e.O(0,[8507,231,3580,2971,7023,1744],function(){return e(e.s=5966)}),_N_E=e.O()}]);