(this.webpackJsonpmerkezvericom=this.webpackJsonpmerkezvericom||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var i=a(1),r=a.n(i),s=a(15),n=a.n(s),c=(a(22),a(23),a.p+"static/media/logo_without_slogan.62426980.svg"),l=a(0);var o=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("header",{className:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow",children:[Object(l.jsx)("a",{className:"navbar-brand col-md-3 col-lg-2 me-0 px-3",href:"/",children:Object(l.jsx)("img",{src:c,className:"image",alt:"Logo"})}),Object(l.jsx)("button",{className:"navbar-toggler position-absolute d-md-none collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("ul",{className:"navbar-nav px-3 d-none d-md-block",children:Object(l.jsx)("li",{className:"nav-item text-nowrap",children:Object(l.jsxs)("a",{className:"nav-link",href:"https://twitter.com/merkezveri",target:"_blank",rel:"noreferrer",children:[Object(l.jsx)("i",{className:"fab fa-twitter navbar-icon"})," @merkezveri"]})})})]})})},d=a(17),m=a(8),b=a(14);var j=function(e){return Object(l.jsx)(r.a.Fragment,{children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsxs)(m.c,{className:"nav-link",to:"/data/".concat(e.item.id),children:[Object(l.jsx)("i",{className:"far fa-file-alt me-1"}),e.item.name]})},b())})},u=a(14);var h=function(e){var t=u();return Object(l.jsxs)("div",{children:[Object(l.jsx)("a",{className:"sidebar-a","data-bs-toggle":"collapse",href:"#"+t,role:"button","aria-expanded":"false","aria-controls":"collapseExample",children:Object(l.jsxs)("h6",{className:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted",children:[Object(l.jsx)("span",{children:e.category}),Object(l.jsx)("i",{className:"fas fa-caret-down"})]})}),Object(l.jsx)("div",{className:"collapse",id:t,children:Object(l.jsx)("ul",{className:"nav flex-column bg-light mb-2",children:e.filteredItems.map((function(e){return Object(l.jsx)(j,{item:e})}))},u())})]})},p=[{name:"Gayri Safi Yurti\xe7i Has\u0131la (\xc7eyrek)",category:"\xdcretim \u0130statistikleri",id:10002,flourish_id:5394932},{name:"Gayri Safi Yurti\xe7i Has\u0131la (Y\u0131ll\u0131k)",category:"\xdcretim \u0130statistikleri",id:10002,flourish_id:5394932},{name:"Sanayi \xdcretim Endeksi",category:"\xdcretim \u0130statistikleri",id:10005,flourish_id:5395427},{name:"\u0130malat Sanayi Kapasite Kullan\u0131m Oranlar\u0131",category:"\xdcretim \u0130statistikleri",id:10006,flourish_id:5395479}];var f=function(){var e=Object(d.a)(new Set(p.map((function(e){return e.category}))));return Object(l.jsx)("nav",{id:"sidebarMenu",className:"col-md-3 col-lg-2 d-md-block sidebar collapse ",children:Object(l.jsx)("div",{className:"position-sticky pt-3",children:e.map((function(e){var t=p.filter((function(t){return t.category===e}));return Object(l.jsx)(h,{category:e,filteredItems:t})}))})})};function x(e){var t="<iframe src='https://flo.uri.sh/visualisation/"+e.flourish_id+"/embed' title='Interactive or visual content' frameborder='0' scrolling='no' style='width:100%;height:100%;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/"+e.flourish_id+"/?utm_source=embed&utm_campaign=visualisation/"+e.flourish_id+"' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>";return Object(l.jsx)("div",{className:"Iframe",dangerouslySetInnerHTML:{__html:t||""}})}var g=function(e){console.log("Bu",e.category);var t="https://twitter.com/intent/tweet?url="+window.location.href+"&text="+encodeURI(e.item.name)+"&via=merkezveri";return Object(l.jsx)(r.a.Fragment,{children:Object(l.jsxs)("main",{className:"col-md-9 ms-sm-auto col-lg-10 px-md-4",children:[Object(l.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"h2mt-4",children:e.item.name}),Object(l.jsxs)("p",{className:"fw-light fst-italic",children:["- ",e.item.category]})]}),Object(l.jsx)("div",{children:Object(l.jsxs)("a",{className:"btn btn-sm btn-primary",href:t,target:"_blank",rel:"noreferrer",role:"button",children:[Object(l.jsx)("i",{className:"fab fa-twitter navbar-icon"})," Twitter ile payla\u015f!"]})})]}),Object(l.jsx)(x,{flourish_id:e.item.flourish_id})]})})},v=a(2);var O=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(m.b,{children:[Object(l.jsx)(v.a,{path:"/",component:o}),Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(v.a,{path:"/",component:f}),Object(l.jsx)(v.a,{exact:!0,path:"/",render:function(){return Object(l.jsx)(g,{item:p[0]})}}),Object(l.jsx)(v.a,{path:"/data/:id",render:function(e){var t=p.find((function(t){return t.id.toString()===e.match.params.id}));return Object(l.jsx)(g,{item:t})}})]})})]})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,i=t.getFID,r=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),i(e),r(e),s(e),n(e)}))};n.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(m.a,{children:Object(l.jsx)(O,{})})}),document.getElementById("root")),w()}},[[34,1,2]]]);
//# sourceMappingURL=main.2a9b758f.chunk.js.map