(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{6415:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return r(3599)}])},772:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var s=r(5893),t=r(1664),a=r(1954);function i(e){var n=e.className,r=e.name,i=e.href,o=e.current;null==o&&(o=!0);var l=i?(0,s.jsx)(t.default,{href:i,children:(0,s.jsx)("a",{className:"ml-1 sm:ml-4 text-2xl text-gray-500 hover:text-gray-700","aria-current":o?"page":void 0,children:r})}):(0,s.jsx)("span",{className:"ml-1 sm:ml-4 text-3xl text-gray-700","aria-current":o?"page":void 0,children:r});return(0,s.jsx)("nav",{className:["flex",n].join(" "),"aria-label":"Breadcrumb",children:(0,s.jsxs)("ol",{role:"list",className:"flex items-center sm:space-x-4",children:[(0,s.jsx)("li",{children:(0,s.jsx)("div",{children:(0,s.jsx)(t.default,{href:"/",children:(0,s.jsxs)("a",{className:"text-gray-600 hover:text-gray-700",children:[(0,s.jsx)(a.JO,{icon:"mdi:home",className:"flex-shrink-0 h-8 w-8","aria-hidden":"true"}),(0,s.jsx)("span",{className:"sr-only",children:"Home"})]})})})}),(0,s.jsx)("li",{children:(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(a.JO,{icon:"mdi:chevron-right",className:"flex-shrink-0 h-8 w-8 text-gray-400","aria-hidden":"true"}),l]})})]})})}},3447:function(e,n,r){"use strict";var s=r(5893),t=(r(7294),r(2752)),a=r.n(t);n.Z=function(){return(0,s.jsxs)("div",{className:a().footerContainer,children:[(0,s.jsxs)("div",{className:a().footerInfo,children:[(0,s.jsx)("h2",{children:"Discovering Your True Potential"}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, nulla velit corrupti iusto itaque dolore dolorem sapiente earum fugit sed temporibus atque harum voluptates tenetur."})]}),(0,s.jsxs)("footer",{className:a().footerMain,children:[(0,s.jsx)("a",{children:"Logo"}),(0,s.jsx)("p",{children:"\xa9 2022 Stephen Cross. All Rights Reserved. "}),(0,s.jsxs)("menu",{children:[(0,s.jsx)("li",{children:"Facebook"}),(0,s.jsx)("li",{children:"Whatsapp"}),(0,s.jsx)("li",{children:"Twitter"})]})]})]})}},1225:function(e,n,r){"use strict";var s=r(5893),t=r(9008),a=r(8713),i=r(3447),o=r(7404),l=r(772),c=r(4184),u=r.n(c);n.Z=function(e){var n=e.title,r=e.className,c=e.children;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{}),(0,s.jsx)(t.default,{children:(0,s.jsx)("title",{children:n})}),(0,s.jsx)(a.Z,{}),(0,s.jsx)("div",{className:"min-h-screen",children:(0,s.jsx)("main",{children:(0,s.jsxs)("div",{className:u()("container mx-auto px-5",r),children:[(0,s.jsx)(l.Z,{className:"my-8",name:n}),c]})})}),(0,s.jsx)(i.Z,{})]})}},7404:function(e,n,r){"use strict";var s=r(5893),t=r(9008),a=r(8038);n.Z=function(){return(0,s.jsxs)(t.default,{children:[(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,s.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,s.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,s.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,s.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,s.jsx)("meta",{name:"theme-color",content:"#000"}),(0,s.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,s.jsx)("meta",{name:"description",content:"A statically generated blog example using Next.js and ".concat(a.yf,".")}),(0,s.jsx)("meta",{property:"og:image",content:a.vC})]})}},8713:function(e,n,r){"use strict";r.d(n,{Z:function(){return l}});var s=r(5893),t=r(1664),a=r(1163),i=r(2761),o=r(3475);function l(){var e,n=[{type:"Button",href:"/hosting",name:"$0.40 /mo"},{href:"/posts",name:"Blog"},{href:"/todomvc",name:"Todos"},{href:"/bookings-crud",name:"Bookings"},{href:"/features",name:"Features"}],r=(0,i.Z)(),l=r.auth,c=r.attrs,u=r.signout,d=(0,a.useRouter)();l?(e=n).push.apply(e,[{href:"/profile",name:"Profile"},{href:"/admin",name:"Admin",show:"role:Admin"},{type:"Button",onClick:function(e){return u("/")},name:"Sign Out"}]):(n.push({type:"Button",href:"/signin",name:"Sign In"}),n.push({type:"PrimaryButton",href:"/signup",name:"Register"}));var f=n.filter((function(e){return(!e.show||-1!==c.indexOf(e.show))&&!(e.hide&&c.indexOf(e.hide)>=0)}));return(0,s.jsx)("header",{className:"border-b border-gray-200 pr-3",children:(0,s.jsxs)("div",{className:"flex flex-wrap items-center",children:[(0,s.jsx)("div",{className:"flex-shrink flex-grow-0",children:(0,s.jsx)(t.default,{href:"/",children:(0,s.jsx)("div",{className:"p-4 cursor-pointer",children:(0,s.jsx)("img",{className:"w-8 h-8",src:"/assets/img/logo.svg",alt:"MyApp logo"})})})}),(0,s.jsx)("div",{className:"flex flex-grow flex-shrink flex-nowrap justify-end items-center",children:(0,s.jsx)("nav",{className:"relative flex flex-grow",children:(0,s.jsx)("ul",{className:"flex flex-wrap items-center justify-end w-full m-0",children:f.map((function(e){return(0,s.jsx)("li",{className:"relative flex flex-wrap just-fu-start m-0",children:"Button"===e.type?(0,s.jsx)(o.kq,{className:"m-2",href:e.href,onClick:e.onClick,children:e.name}):"PrimaryButton"==e.type?(0,s.jsx)(o.KM,{className:"m-2",href:e.href,onClick:e.onClick,children:e.name}):(0,s.jsx)(t.default,{href:e.href,children:(0,s.jsx)("a",{className:"flex items-center justify-start mw-full p-4 hover:text-success".concat(d.asPath===e.href?" text-success":""),children:e.name})})},e.name)}))})})})]})})}},8038:function(e,n,r){"use strict";r.d(n,{yf:function(){return s},vC:function(){return t}});var s="Markdown",t="https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"},3599:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return h}});var s=r(4051),t=r.n(s),a=r(5893),i=r(7294),o=r(1163),l=r(5548),c=r(1225),u=r(3475),d=r(9285),f=r(4321),m=r(2761);function x(e,n,r,s,t,a,i){try{var o=e[a](i),l=o.value}catch(c){return void r(c)}o.done?n(l):Promise.resolve(l).then(s,t)}function h(){var e=(0,d.m8)(),n=(0,i.useState)(),r=n[0],s=n[1],h=(0,i.useState)(),p=h[0],j=h[1],g=(0,i.useState)(),v=g[0],N=g[1],w=(0,m.Z)(),y=w.signedIn,k=w.revalidate,b=(0,o.useRouter)();if((0,i.useEffect)((function(){y&&o.default.replace((0,u.sX)()||"/")}),[y]),y)return(0,a.jsx)(u.FS,{});var P=function(){var n,r=(n=t().mark((function n(r){var s,a,i,o,c,u;return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),s=(0,l.serializeToObject)(r.currentTarget),a=s.displayName,i=s.userName,o=s.password,c=s.confirmPassword,u=s.autoLogin,o===c){n.next=5;break}return e.setError({fieldName:"confirmPassword",message:"Passwords do not match"}),n.abrupt("return");case 5:return n.next=7,e.api(new f.aX({displayName:a,email:i,password:o,confirmPassword:c,autoLogin:u}));case 7:if(!n.sent.succeeded){n.next=13;break}return n.next=11,k();case 11:return n.next=13,b.push("/signin");case 13:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(s,t){var a=n.apply(e,r);function i(e){x(a,s,t,i,o,"next",e)}function o(e){x(a,s,t,i,o,"throw",e)}i(void 0)}))});return function(e){return r.apply(this,arguments)}}(),_=function(e){return function(n){return e(n.target.value)}};return(0,a.jsxs)(c.Z,{title:"Sign Up",children:[(0,a.jsx)(d.GS.Provider,{value:e,children:(0,a.jsx)("form",{onSubmit:P,className:"max-w-prose",children:(0,a.jsxs)("div",{className:"shadow overflow-hidden sm:rounded-md",children:[(0,a.jsx)(u.Xg,{except:"displayName,userName,password,confirmPassword"}),(0,a.jsx)("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:(0,a.jsxs)("div",{className:"flex flex-col gap-y-4",children:[(0,a.jsx)(u.oi,{id:"displayName",help:"Your first and last name",value:r,onChange:_(s)}),(0,a.jsx)(u.oi,{id:"userName",value:p,onChange:_(j)}),(0,a.jsx)(u.oi,{id:"password",type:"password",help:"6 characters or more",value:v,onChange:_(N)}),(0,a.jsx)(u.oi,{id:"confirmPassword",type:"password",defaultValue:v}),(0,a.jsx)(u.XZ,{id:"autoLogin"})]})}),(0,a.jsx)("div",{className:"pt-5 px-4 py-3 bg-gray-50 text-right sm:px-6",children:(0,a.jsxs)("div",{className:"flex justify-end",children:[(0,a.jsx)(u.bz,{className:"flex-1"}),(0,a.jsx)(u.KM,{className:"ml-3",children:"Sign Up"})]})})]})})}),(0,a.jsxs)("div",{className:"flex mt-8 ml-8",children:[(0,a.jsx)("h3",{className:"mr-4 leading-8 text-gray-500",children:"Quick Links"}),(0,a.jsx)("span",{className:"relative z-0 inline-flex shadow-sm rounded-md",children:(0,a.jsx)("button",{type:"button",onClick:function(e){return function(e){var n=(0,l.leftPart)(e,"@"),r=(0,l.rightPart)((0,l.leftPart)(e,"."),"@");s((0,l.toPascalCase)(n)+" "+(0,l.toPascalCase)(r)),j(e),N("p@55wOrd")}("new@user.com")},className:"-ml-px relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",children:"new@user.com"})})]})]})}},2752:function(e){e.exports={footerContainer:"Footer_footerContainer__wzlrI",footerInfo:"Footer_footerInfo__XTht0",footerMain:"Footer_footerMain__aa2vg"}},9008:function(e,n,r){e.exports=r(3121)}},function(e){e.O(0,[80,475,774,888,179],(function(){return n=6415,e(e.s=n);var n}));var n=e.O();_N_E=n}]);