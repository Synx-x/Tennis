(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[767],{6764:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bookings-crud/edit",function(){return t(5742)}])},2250:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(5893),o=(t(7294),t(5548));function s(e){var n=e.href,t=e.iconSrc,s=e.children,i=(0,o.lastRightPart)(n,"/");return t?(0,r.jsxs)("a",{href:n,className:"mr-3 text-gray-500 hover:text-gray-600 text-decoration-none",children:[(0,r.jsx)("img",{src:t,className:"w-5 h-5 inline-flex text-purple-800 mr-1",alt:"file icon"}),i]}):(0,r.jsxs)("a",{href:n,className:"mr-3 text-gray-400 hover:text-gray-500 text-decoration-none",children:[s," ",i]})}},3047:function(e,n,t){"use strict";t.d(n,{xG:function(){return s},p6:function(){return i},pm:function(){return a},qg:function(){return c},JJ:function(){return u}});var r=t(5548),o=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),s=function(e){return e?o.format(e):""},i=function(e){return e?(0,r.toDateFmt)(e):""},a=function(e){return(0,r.dateFmt)(e).replace(/\//g,"-")};function c(e){return e?(Object.keys(e).forEach((function(n){var t=e[n];"string"==typeof t&&t.startsWith("/Date")&&(e[n]=a((0,r.toDate)(t)))})),e):{}}var u=function(e){var n=[];for(var t in e)n.push([t,e[t]]);return n}},5742:function(e,n,t){"use strict";t.r(n);var r=t(4051),o=t.n(r),s=t(5893),i=t(7294),a=t(1954),c=t(3475),u=t(2250),l=t(9285),d=t(4321),m=t(3047);function f(e,n,t,r,o,s,i){try{var a=e[s](i),c=a.value}catch(u){return void t(u)}a.done?n(c):Promise.resolve(c).then(r,o)}function h(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var s=e.apply(n,t);function i(e){f(s,r,o,i,a,"next",e)}function a(e){f(s,r,o,i,a,"throw",e)}i(void 0)}))}}n.default=function(e){var n=e.className,t=e.id,r=e.onDone,f=(0,l.qD)(),p=(0,l.m8)(),x=(0,i.useState)(new d.mA),v=x[0],g=x[1];(0,i.useEffect)((function(){h(o().mark((function e(){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.api(new d.lK({id:t}));case 2:(n=e.sent).succeeded&&g(new d.mA((0,m.qg)(null===(r=n.response)||void 0===r?void 0:r.results[0])));case 4:case"end":return e.stop()}}),e)})))()}),[t]);var j=function(){var e=h(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,p.api(v);case 3:e.sent.succeeded&&r();case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=h(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.apiVoid(new d.xo({id:t}));case 2:e.sent.succeeded&&r();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(e){return function(n){e(v,n.target.value),g(new d.mA(v))}};return(0,s.jsx)(l.GS.Provider,{value:p,children:(0,s.jsx)("form",{onSubmit:j,className:n,children:(0,s.jsxs)("div",{className:"shadow overflow-hidden sm:rounded-md bg-white",children:[(0,s.jsxs)("div",{className:"relative px-4 py-5 bg-white sm:p-6",children:[(0,s.jsx)(c.PZ,{onClose:r}),(0,s.jsxs)("fieldset",{children:[(0,s.jsx)("legend",{className:"text-base font-medium text-gray-900 text-center mb-4",children:"Edit Booking"}),(0,s.jsx)(c.Xg,{except:"name,roomType,roomNumber,bookingStartDate,bookingEndDate,cost,notes",className:"mb-4"}),(0,s.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[(0,s.jsx)("div",{className:"col-span-6 sm:col-span-3",children:(0,s.jsx)(c.oi,{id:"name",required:!0,placeholder:"Name for this booking",defaultValue:v.name,onChange:N((function(e,n){return e.name=n}))})}),(0,s.jsx)("div",{className:"col-span-6 sm:col-span-3",children:(0,s.jsx)(c.lq,{id:"roomType",options:f.enumOptions("RoomType"),value:v.roomType,onChange:N((function(e,n){return e.roomType=n}))})}),(0,s.jsx)("div",{className:"col-span-6 sm:col-span-3",children:(0,s.jsx)(c.oi,{type:"number",id:"roomNumber",min:"0",required:!0,defaultValue:v.roomNumber,onChange:N((function(e,n){return e.roomNumber=Number(n)}))})}),(0,s.jsx)("div",{className:"col-span-6 sm:col-span-3",children:(0,s.jsx)(c.oi,{type:"number",id:"cost",min:"0",required:!0,defaultValue:v.cost,onChange:N((function(e,n){return e.cost=Number(n)}))})}),(0,s.jsx)("div",{className:"col-span-6 sm:col-span-3",children:(0,s.jsx)(c.oi,{type:"date",id:"bookingStartDate",required:!0,defaultValue:v.bookingStartDate,onChange:N((function(e,n){return e.bookingStartDate=n}))})}),(0,s.jsx)("div",{className:"col-span-6 sm:col-span-3",children:(0,s.jsx)(c.oi,{type:"date",id:"bookingEndDate",defaultValue:v.bookingEndDate,onChange:N((function(e,n){return e.bookingEndDate=n}))})}),(0,s.jsx)("div",{className:"col-span-6",children:(0,s.jsx)(c.Fz,{id:"notes",placeholder:"Notes about this booking",style:{height:"6rem"},defaultValue:v.notes,onChange:N((function(e,n){return e.notes=n}))})})]})]})]}),(0,s.jsx)("div",{className:"mt-4 px-4 py-3 bg-gray-50 text-right sm:px-6",children:(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("div",{children:(0,s.jsx)(c.TX,{onDelete:b,children:"Delete"})}),(0,s.jsx)(u.Z,{href:"https://github.com/NetCoreTemplates/nextjs/blob/main/ui/pages/bookings-crud/edit.tsx",children:(0,s.jsx)(a.JO,{icon:"logos:vue",className:"w-5 h-5 inline"})}),(0,s.jsx)("div",{children:(0,s.jsx)(c.KM,{children:"Update Booking"})})]})})]})})})}}},function(e){e.O(0,[606,129,475,774,888,179],(function(){return n=6764,e(e.s=n);var n}));var n=e.O();_N_E=n}]);