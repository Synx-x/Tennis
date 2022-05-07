(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{6415:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return s(3599)}])},772:function(e,n,s){"use strict";s.d(n,{Z:function(){return i}});var r=s(5893),a=s(1664),t=s(1954);function i(e){var n=e.className,s=e.name,i=e.href,l=e.current;null==l&&(l=!0);var c=i?(0,r.jsx)(a.default,{href:i,children:(0,r.jsx)("a",{className:"ml-1 sm:ml-4 text-2xl text-gray-500 hover:text-gray-700","aria-current":l?"page":void 0,children:s})}):(0,r.jsx)("span",{className:"ml-1 sm:ml-4 text-3xl text-gray-700","aria-current":l?"page":void 0,children:s});return(0,r.jsx)("nav",{className:["flex",n].join(" "),"aria-label":"Breadcrumb",children:(0,r.jsxs)("ol",{role:"list",className:"flex items-center sm:space-x-4",children:[(0,r.jsx)("li",{children:(0,r.jsx)("div",{children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsxs)("a",{className:"text-gray-600 hover:text-gray-700",children:[(0,r.jsx)(t.JO,{icon:"mdi:home",className:"flex-shrink-0 h-8 w-8","aria-hidden":"true"}),(0,r.jsx)("span",{className:"sr-only",children:"Home"})]})})})}),(0,r.jsx)("li",{children:(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)(t.JO,{icon:"mdi:chevron-right",className:"flex-shrink-0 h-8 w-8 text-gray-400","aria-hidden":"true"}),c]})})]})})}},1225:function(e,n,s){"use strict";var r=s(5893),a=s(9008),t=s(8713),i=s(7404),l=s(772),c=s(4184),o=s.n(c);n.Z=function(e){var n=e.title,s=e.className,c=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:n})}),(0,r.jsx)(t.Z,{}),(0,r.jsx)("div",{className:"min-h-screen",children:(0,r.jsx)("main",{children:(0,r.jsxs)("div",{className:o()("container mx-auto px-5",s),children:[(0,r.jsx)(l.Z,{className:"my-8",name:n}),c]})})})]})}},7404:function(e,n,s){"use strict";var r=s(5893),a=s(9008),t=s(8038);n.Z=function(){return(0,r.jsxs)(a.default,{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,r.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,r.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:"A statically generated blog example using Next.js and ".concat(t.yf,".")}),(0,r.jsx)("meta",{property:"og:image",content:t.vC})]})}},8713:function(e,n,s){"use strict";s.d(n,{Z:function(){return c}});var r=s(5893),a=s(1664),t=s(1163),i=s(2761),l=s(3475);function c(){var e,n=[{type:"Button",href:"/hosting",name:"$0.40 /mo"},{href:"/posts",name:"Blog"},{href:"/todomvc",name:"Todos"},{href:"/bookings-crud",name:"Bookings"},{href:"/features",name:"Features"}],s=(0,i.Z)(),c=s.auth,o=s.attrs,u=s.signout,m=(0,t.useRouter)();c?(e=n).push.apply(e,[{href:"/profile",name:"Profile"},{href:"/admin",name:"Admin",show:"role:Admin"},{type:"Button",onClick:function(e){return u("/")},name:"Sign Out"}]):(n.push({type:"Button",href:"/signin",name:"Sign In"}),n.push({type:"PrimaryButton",href:"/signup",name:"Register"}));var d=n.filter((function(e){return(!e.show||-1!==o.indexOf(e.show))&&!(e.hide&&o.indexOf(e.hide)>=0)}));return(0,r.jsx)("header",{className:"border-b border-gray-200 pr-3",children:(0,r.jsxs)("div",{className:"flex flex-wrap items-center",children:[(0,r.jsx)("div",{className:"flex-shrink flex-grow-0",children:(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("div",{className:"p-4 cursor-pointer",children:(0,r.jsx)("img",{className:"w-8 h-8",src:"/assets/img/logo.svg",alt:"MyApp logo"})})})}),(0,r.jsx)("div",{className:"flex flex-grow flex-shrink flex-nowrap justify-end items-center",children:(0,r.jsx)("nav",{className:"relative flex flex-grow",children:(0,r.jsx)("ul",{className:"flex flex-wrap items-center justify-end w-full m-0",children:d.map((function(e){return(0,r.jsx)("li",{className:"relative flex flex-wrap just-fu-start m-0",children:"Button"===e.type?(0,r.jsx)(l.kq,{className:"m-2",href:e.href,onClick:e.onClick,children:e.name}):"PrimaryButton"==e.type?(0,r.jsx)(l.KM,{className:"m-2",href:e.href,onClick:e.onClick,children:e.name}):(0,r.jsx)(a.default,{href:e.href,children:(0,r.jsx)("a",{className:"flex items-center justify-start mw-full p-4 hover:text-success".concat(m.asPath===e.href?" text-success":""),children:e.name})})},e.name)}))})})})]})})}},8038:function(e,n,s){"use strict";s.d(n,{yf:function(){return r},vC:function(){return a}});var r="Markdown",a="https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"},3599:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return h}});var r=s(4051),a=s.n(r),t=s(5893),i=s(7294),l=s(1163),c=s(5548),o=s(1225),u=s(3475),m=s(9285),d=s(4321),f=s(2761);function x(e,n,s,r,a,t,i){try{var l=e[t](i),c=l.value}catch(o){return void s(o)}l.done?n(c):Promise.resolve(c).then(r,a)}function h(){var e=(0,m.m8)(),n=(0,i.useState)(),s=n[0],r=n[1],h=(0,i.useState)(),p=h[0],g=h[1],j=(0,i.useState)(),v=j[0],N=j[1],w=(0,f.Z)(),y=w.signedIn,k=w.revalidate,b=(0,l.useRouter)();if((0,i.useEffect)((function(){y&&l.default.replace((0,u.sX)()||"/")}),[y]),y)return(0,t.jsx)(u.FS,{});var P=function(){var n,s=(n=a().mark((function n(s){var r,t,i,l,o,u;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s.preventDefault(),r=(0,c.serializeToObject)(s.currentTarget),t=r.displayName,i=r.userName,l=r.password,o=r.confirmPassword,u=r.autoLogin,l===o){n.next=5;break}return e.setError({fieldName:"confirmPassword",message:"Passwords do not match"}),n.abrupt("return");case 5:return n.next=7,e.api(new d.aX({displayName:t,email:i,password:l,confirmPassword:o,autoLogin:u}));case 7:if(!n.sent.succeeded){n.next=13;break}return n.next=11,k();case 11:return n.next=13,b.push("/signin");case 13:case"end":return n.stop()}}),n)})),function(){var e=this,s=arguments;return new Promise((function(r,a){var t=n.apply(e,s);function i(e){x(t,r,a,i,l,"next",e)}function l(e){x(t,r,a,i,l,"throw",e)}i(void 0)}))});return function(e){return s.apply(this,arguments)}}(),C=function(e){return function(n){return e(n.target.value)}};return(0,t.jsxs)(o.Z,{title:"Sign Up",children:[(0,t.jsx)(m.GS.Provider,{value:e,children:(0,t.jsx)("form",{onSubmit:P,className:"max-w-prose",children:(0,t.jsxs)("div",{className:"shadow overflow-hidden sm:rounded-md",children:[(0,t.jsx)(u.Xg,{except:"displayName,userName,password,confirmPassword"}),(0,t.jsx)("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:(0,t.jsxs)("div",{className:"flex flex-col gap-y-4",children:[(0,t.jsx)(u.oi,{id:"displayName",help:"Your first and last name",value:s,onChange:C(r)}),(0,t.jsx)(u.oi,{id:"userName",value:p,onChange:C(g)}),(0,t.jsx)(u.oi,{id:"password",type:"password",help:"6 characters or more",value:v,onChange:C(N)}),(0,t.jsx)(u.oi,{id:"confirmPassword",type:"password",defaultValue:v}),(0,t.jsx)(u.XZ,{id:"autoLogin"})]})}),(0,t.jsx)("div",{className:"pt-5 px-4 py-3 bg-gray-50 text-right sm:px-6",children:(0,t.jsxs)("div",{className:"flex justify-end",children:[(0,t.jsx)(u.bz,{className:"flex-1"}),(0,t.jsx)(u.KM,{className:"ml-3",children:"Sign Up"})]})})]})})}),(0,t.jsxs)("div",{className:"flex mt-8 ml-8",children:[(0,t.jsx)("h3",{className:"mr-4 leading-8 text-gray-500",children:"Quick Links"}),(0,t.jsx)("span",{className:"relative z-0 inline-flex shadow-sm rounded-md",children:(0,t.jsx)("button",{type:"button",onClick:function(e){return function(e){var n=(0,c.leftPart)(e,"@"),s=(0,c.rightPart)((0,c.leftPart)(e,"."),"@");r((0,c.toPascalCase)(n)+" "+(0,c.toPascalCase)(s)),g(e),N("p@55wOrd")}("new@user.com")},className:"-ml-px relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",children:"new@user.com"})})]})]})}},9008:function(e,n,s){e.exports=s(3121)}},function(e){e.O(0,[80,475,774,888,179],(function(){return n=6415,e(e.s=n);var n}));var n=e.O();_N_E=n}]);