(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{2339:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return r(2472)}])},772:function(e,n,r){"use strict";r.d(n,{Z:function(){return a}});var s=r(5893),t=r(1664),i=r(1954);function a(e){var n=e.className,r=e.name,a=e.href,o=e.current;null==o&&(o=!0);var c=a?(0,s.jsx)(t.default,{href:a,children:(0,s.jsx)("a",{className:"ml-1 sm:ml-4 text-2xl text-gray-500 hover:text-gray-700","aria-current":o?"page":void 0,children:r})}):(0,s.jsx)("span",{className:"ml-1 sm:ml-4 text-3xl text-gray-700","aria-current":o?"page":void 0,children:r});return(0,s.jsx)("nav",{className:["flex",n].join(" "),"aria-label":"Breadcrumb",children:(0,s.jsxs)("ol",{role:"list",className:"flex items-center sm:space-x-4",children:[(0,s.jsx)("li",{children:(0,s.jsx)("div",{children:(0,s.jsx)(t.default,{href:"/",children:(0,s.jsxs)("a",{className:"text-gray-600 hover:text-gray-700",children:[(0,s.jsx)(i.JO,{icon:"mdi:home",className:"flex-shrink-0 h-8 w-8","aria-hidden":"true"}),(0,s.jsx)("span",{className:"sr-only",children:"Home"})]})})})}),(0,s.jsx)("li",{children:(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(i.JO,{icon:"mdi:chevron-right",className:"flex-shrink-0 h-8 w-8 text-gray-400","aria-hidden":"true"}),c]})})]})})}},3447:function(e,n,r){"use strict";var s=r(5893),t=(r(7294),r(2752)),i=r.n(t);n.Z=function(){return(0,s.jsxs)("div",{className:i().footerContainer,children:[(0,s.jsxs)("div",{className:i().footerInfo,children:[(0,s.jsx)("h2",{children:"Discovering Your True Potential"}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, nulla velit corrupti iusto itaque dolore dolorem sapiente earum fugit sed temporibus atque harum voluptates tenetur."})]}),(0,s.jsxs)("footer",{className:i().footerMain,children:[(0,s.jsx)("a",{children:"Logo"}),(0,s.jsx)("p",{children:"\xa9 2022 Stephen Cross. All Rights Reserved. "}),(0,s.jsxs)("menu",{children:[(0,s.jsx)("li",{children:"Facebook"}),(0,s.jsx)("li",{children:"Whatsapp"}),(0,s.jsx)("li",{children:"Twitter"})]})]})]})}},1225:function(e,n,r){"use strict";var s=r(5893),t=r(9008),i=r(8713),a=r(3447),o=r(7404),c=r(772),l=r(4184),u=r.n(l);n.Z=function(e){var n=e.title,r=e.className,l=e.children;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{}),(0,s.jsx)(t.default,{children:(0,s.jsx)("title",{children:n})}),(0,s.jsx)(i.Z,{}),(0,s.jsx)("div",{className:"min-h-screen",children:(0,s.jsx)("main",{children:(0,s.jsxs)("div",{className:u()("container mx-auto px-5",r),children:[(0,s.jsx)(c.Z,{className:"my-8",name:n}),l]})})}),(0,s.jsx)(a.Z,{})]})}},7404:function(e,n,r){"use strict";var s=r(5893),t=r(9008),i=r(8038);n.Z=function(){return(0,s.jsxs)(t.default,{children:[(0,s.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/favicon/apple-touch-icon.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"}),(0,s.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"}),(0,s.jsx)("link",{rel:"manifest",href:"/favicon/site.webmanifest"}),(0,s.jsx)("link",{rel:"mask-icon",href:"/favicon/safari-pinned-tab.svg",color:"#000000"}),(0,s.jsx)("link",{rel:"shortcut icon",href:"/favicon/favicon.ico"}),(0,s.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,s.jsx)("meta",{name:"msapplication-config",content:"/favicon/browserconfig.xml"}),(0,s.jsx)("meta",{name:"theme-color",content:"#000"}),(0,s.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,s.jsx)("meta",{name:"description",content:"A statically generated blog example using Next.js and ".concat(i.yf,".")}),(0,s.jsx)("meta",{property:"og:image",content:i.vC})]})}},8713:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var s=r(5893),t=r(1664),i=r(1163),a=r(2761),o=r(3475);function c(){var e,n=[{type:"Button",href:"/hosting",name:"$0.40 /mo"},{href:"/posts",name:"Blog"},{href:"/todomvc",name:"Todos"},{href:"/bookings-crud",name:"Bookings"},{href:"/features",name:"Features"}],r=(0,a.Z)(),c=r.auth,l=r.attrs,u=r.signout,m=(0,i.useRouter)();c?(e=n).push.apply(e,[{href:"/profile",name:"Profile"},{href:"/admin",name:"Admin",show:"role:Admin"},{type:"Button",onClick:function(e){return u("/")},name:"Sign Out"}]):(n.push({type:"Button",href:"/signin",name:"Sign In"}),n.push({type:"PrimaryButton",href:"/signup",name:"Register"}));var d=n.filter((function(e){return(!e.show||-1!==l.indexOf(e.show))&&!(e.hide&&l.indexOf(e.hide)>=0)}));return(0,s.jsx)("header",{className:"border-b border-gray-200 pr-3",children:(0,s.jsxs)("div",{className:"flex flex-wrap items-center",children:[(0,s.jsx)("div",{className:"flex-shrink flex-grow-0",children:(0,s.jsx)(t.default,{href:"/",children:(0,s.jsx)("div",{className:"p-4 cursor-pointer",children:(0,s.jsx)("img",{className:"w-8 h-8",src:"/assets/img/logo.svg",alt:"MyApp logo"})})})}),(0,s.jsx)("div",{className:"flex flex-grow flex-shrink flex-nowrap justify-end items-center",children:(0,s.jsx)("nav",{className:"relative flex flex-grow",children:(0,s.jsx)("ul",{className:"flex flex-wrap items-center justify-end w-full m-0",children:d.map((function(e){return(0,s.jsx)("li",{className:"relative flex flex-wrap just-fu-start m-0",children:"Button"===e.type?(0,s.jsx)(o.kq,{className:"m-2",href:e.href,onClick:e.onClick,children:e.name}):"PrimaryButton"==e.type?(0,s.jsx)(o.KM,{className:"m-2",href:e.href,onClick:e.onClick,children:e.name}):(0,s.jsx)(t.default,{href:e.href,children:(0,s.jsx)("a",{className:"flex items-center justify-start mw-full p-4 hover:text-success".concat(m.asPath===e.href?" text-success":""),children:e.name})})},e.name)}))})})})]})})}},8038:function(e,n,r){"use strict";r.d(n,{yf:function(){return s},vC:function(){return t}});var s="Markdown",t="https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg"},2472:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return h}});var s=r(4051),t=r.n(s),i=r(5893),a=r(5548),o=r(7294),c=r(1163),l=r(1225),u=r(3475),m=r(9285),d=r(4321),f=r(2761);function x(e,n,r,s,t,i,a){try{var o=e[i](a),c=o.value}catch(l){return void r(l)}o.done?n(c):Promise.resolve(c).then(s,t)}function h(){var e=(0,m.m8)(),n=(0,o.useState)(),r=n[0],s=n[1],h=(0,o.useState)(),p=h[0],g=h[1],j=function(e){s(e),g("p@55wOrd")},v=(0,f.Z)(),y=v.signedIn,N=v.revalidate;if((0,o.useEffect)((function(){y&&c.default.replace((0,u.sX)()||"/")}),[y]),y)return(0,i.jsx)(u.FS,{});var b=function(){var n,r=(n=t().mark((function n(r){var s,i,o,c;return t().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),s=(0,a.serializeToObject)(r.currentTarget),i=s.userName,o=s.password,c=s.rememberMe,n.next=4,e.api(new d.ee({provider:"credentials",userName:i,password:o,rememberMe:c}));case 4:if(!n.sent.succeeded){n.next=8;break}return n.next=8,N();case 8:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(s,t){var i=n.apply(e,r);function a(e){x(i,s,t,a,o,"next",e)}function o(e){x(i,s,t,a,o,"throw",e)}a(void 0)}))});return function(e){return r.apply(this,arguments)}}(),w=function(e){return function(n){return e(n.target.value)}};return(0,i.jsxs)(l.Z,{title:"Sign In",children:[(0,i.jsx)(m.GS.Provider,{value:e,children:(0,i.jsx)("form",{className:"max-w-prose",onSubmit:b,children:(0,i.jsxs)("div",{className:"shadow overflow-hidden sm:rounded-md",children:[(0,i.jsx)(u.Xg,{except:"userName,password"}),(0,i.jsx)("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:(0,i.jsxs)("div",{className:"flex flex-col gap-y-4",children:[(0,i.jsx)(u.oi,{id:"userName",help:"Email you signed up with",value:r,onChange:w(s)}),(0,i.jsx)(u.oi,{id:"password",type:"password",help:"6 characters or more",value:p,onChange:w(g)}),(0,i.jsx)(u.XZ,{id:"rememberMe"})]})}),(0,i.jsx)("div",{className:"pt-5 px-4 py-3 bg-gray-50 text-right sm:px-6",children:(0,i.jsxs)("div",{className:"flex justify-end",children:[(0,i.jsx)(u.bz,{className:"flex-1"}),(0,i.jsx)(u.kq,{href:"/signup",children:"Register New User"}),(0,i.jsx)(u.KM,{className:"ml-3",children:"Login"})]})})]})})}),(0,i.jsxs)("div",{className:"flex mt-8",children:[(0,i.jsx)("h3",{className:"hidden xs:block mr-4 leading-8 text-gray-500",children:"Quick Links"}),(0,i.jsxs)("span",{className:"relative z-0 inline-flex shadow-sm rounded-md",children:[(0,i.jsx)("button",{type:"button",onClick:function(e){return j("admin@email.com")},className:"relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",children:"admin@email.com"}),(0,i.jsx)("button",{type:"button",onClick:function(e){return j("manager@email.com")},className:"-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",children:"manager@email.com"}),(0,i.jsx)("button",{type:"button",onClick:function(e){return j("employee@email.com")},className:"-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",children:"employee@email.com"}),(0,i.jsx)("button",{type:"button",onClick:function(e){return j("new@user.com")},className:"-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",children:"new@user.com"})]})]})]})}},2752:function(e){e.exports={footerContainer:"Footer_footerContainer__wzlrI",footerInfo:"Footer_footerInfo__XTht0",footerMain:"Footer_footerMain__aa2vg"}},9008:function(e,n,r){e.exports=r(3121)}},function(e){e.O(0,[80,475,774,888,179],(function(){return n=2339,e(e.s=n);var n}));var n=e.O();_N_E=n}]);