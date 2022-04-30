(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64],{6373:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bookings-crud/create",function(){return t(8068)}])},1978:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),o=(t(7294),t(5548));function s(e){var n=e.href,t=e.iconSrc,s=e.children,a=(0,o.lastRightPart)(n,"/");return t?(0,r.jsxs)("a",{href:n,className:"mr-3 text-gray-500 hover:text-gray-600 text-decoration-none",children:[(0,r.jsx)("img",{src:t,className:"w-5 h-5 inline-flex text-purple-800 mr-1",alt:"file icon"}),a]}):(0,r.jsxs)("a",{href:n,className:"mr-3 text-gray-400 hover:text-gray-500 text-decoration-none",children:[s," ",a]})}},2461:function(e,n,t){"use strict";t.d(n,{xG:function(){return s},p6:function(){return a},pm:function(){return i},qg:function(){return c}});var r=t(5548),o=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),s=function(e){return e?o.format(e):""},a=function(e){return e?(0,r.toDateFmt)(e):""},i=function(e){return(0,r.dateFmt)(e).replace(/\//g,"-")};function c(e){return e?(Object.keys(e).forEach((function(n){var t=e[n];"string"==typeof t&&t.startsWith("/Date")&&(e[n]=i((0,r.toDate)(t)))})),e):{}}},8068:function(e,n,t){"use strict";t.r(n);var r=t(5666),o=t.n(r),s=t(5893),a=t(7294),i=t(1954),c=t(4272),u=t(1978),l=t(3047),d=t(7008),m=t(2461);function f(e,n,t,r,o,s,a){try{var i=e[s](a),c=i.value}catch(u){return void t(u)}i.done?n(c):Promise.resolve(c).then(r,o)}n.default=function(e){var n,t=e.className,r=e.onDone,h=(0,l.qD)(),p=(0,l.m8)(),x=(0,a.useState)(new d.bk({roomType:d.nW.Single,roomNumber:0,cost:0,bookingStartDate:(0,m.pm)(new Date)})),g=x[0],b=x[1],v=(n=o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,p.api(g);case 3:e.sent.succeeded&&r();case 5:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var s=n.apply(e,t);function a(e){f(s,r,o,a,i,"next",e)}function i(e){f(s,r,o,a,i,"throw",e)}a(void 0)}))}),N=function(e){return function(n){e(g,n.target.value),b(new d.bk(g))}};return(0,s.jsx)(l.GS.Provider,{value:p,children:(0,s.jsx)("form",{onSubmit:v,className:t,children:(0,s.jsxs)("div",{className:"shadow overflow-hidden sm:rounded-md bg-white",children:[(0,s.jsxs)("div",{className:"relative px-4 py-5 bg-white sm:p-6",children:[(0,s.jsx)(c.PZ,{onClose:r}),(0,s.jsxs)("fieldset",{children:[(0,s.jsx)("legend",{className:"text-base font-medium text-gray-900 text-center mb-4",children:"New Booking"}),(0,s.jsx)(c.Xg,{except:"name,roomType,roomNumber,bookingStartDate,bookingEndDate,cost,notes",className:"mb-4"}),(0,s.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[(0,s.jsx)("div",{className:"col-span-6 sm:col-span-3",children:(0,s.jsx)(c.oi,{id:"name",required:!0,placeholder:"Name for this booking",defaultValue:g.name,onChange:N((function(e,n){return e.name=n}))})}),(0,s.jsx)("div",{className:"col-span-6 sm:col-span-3",children:(0,s.jsx)(c.lq,{id:"roomType",options:h.enumOptions("RoomType"),defaultValue:g.roomType,onChange:N((function(e,n){return e.roomType=n}))})}),(0,s.jsx)("div",{className:"col-span-6 sm:col-span-3",children:(0,s.jsx)(c.oi,{type:"number",id:"roomNumber",min:"0",required:!0,defaultValue:g.roomNumber,onChange:N((function(e,n){return e.roomNumber=Number(n)}))})}),(0,s.jsx)("div",{className:"col-span-6 sm:col-span-3",children:(0,s.jsx)(c.oi,{type:"number",id:"cost",min:"0",required:!0,defaultValue:g.cost,onChange:N((function(e,n){return e.cost=Number(n)}))})}),(0,s.jsx)("div",{className:"col-span-6 sm:col-span-3",children:(0,s.jsx)(c.oi,{type:"date",id:"bookingStartDate",required:!0,defaultValue:g.bookingStartDate,onChange:N((function(e,n){return e.bookingStartDate=n}))})}),(0,s.jsx)("div",{className:"col-span-6 sm:col-span-3",children:(0,s.jsx)(c.oi,{type:"date",id:"bookingEndDate",defaultValue:g.bookingEndDate,onChange:N((function(e,n){return e.bookingEndDate=n}))})}),(0,s.jsx)("div",{className:"col-span-6",children:(0,s.jsx)(c.Fz,{id:"notes",placeholder:"Notes about this booking",style:{height:"6rem"},defaultValue:g.notes,onChange:N((function(e,n){return e.notes=n}))})})]})]})]}),(0,s.jsx)("div",{className:"mt-4 px-4 py-3 bg-gray-50 text-right sm:px-6",children:(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)(u.Z,{href:"https://github.com/NetCoreTemplates/nextjs/blob/main/ui/pages/bookings-crud/create.tsx",children:(0,s.jsx)(i.JO,{icon:"logos:vue",className:"w-5 h-5 inline"})}),(0,s.jsx)("div",{children:(0,s.jsx)(c.KM,{children:"Create Booking"})})]})})]})})})}}},function(e){e.O(0,[80,398,774,888,179],(function(){return n=6373,e(e.s=n);var n}));var n=e.O();_N_E=n}]);