(this.webpackJsonpmynews=this.webpackJsonpmynews||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),s=a.n(r),o=a(1),i=a.n(o),l=a(3),u=a(2);var m=function(e){var t=e.onChangeCategory,a=e.onChangeCounty,r=e.country,s=Object(n.useState)(""),o=Object(u.a)(s,2),i=o[0],l=o[1];return c.a.createElement("nav",{className:"nav-list"},c.a.createElement("h1",{className:"nav-title"},"My News"),c.a.createElement("div",{className:"nav-items"},c.a.createElement("div",{className:"nav-item-county"},c.a.createElement("h3",{className:"nav-item-title"},"\u570b\u5bb6"),c.a.createElement("div",{className:"county-list"},c.a.createElement("input",{type:"button",className:"tw"===r?"active":"",value:"Taiwan",onClick:function(){return a("tw")}}),c.a.createElement("input",{type:"button",value:"USA",className:"us"===r?"active":"",onClick:function(){return a("us")}}))),c.a.createElement("div",{className:"nav-item-category"},c.a.createElement("h3",{className:"nav-item-title"},"\u985e\u5225"),c.a.createElement("div",{className:"category-list"},["business","entertainment","general","health","science","sports","technology"].map((function(e,a){return c.a.createElement("button",{key:a,className:i===e?"active":"",onClick:function(){l(e),t(e)}},e)}))))))};var p=function(e){var t=e.setKeyword,a=e.handleSearchKeyWord;return c.a.createElement("form",{className:"searchbox",onSubmit:function(e){return a(e)}},c.a.createElement("div",{className:"searchbox-search"},c.a.createElement("input",{id:"searchbox-input",className:"searchbox-input",type:"text",onChange:function(e){return t(e.target.value)},required:!0}),c.a.createElement("label",{htmlFor:"searchbox-input",className:"searchbox-input-label"},c.a.createElement("span",{className:"searchbox-input-label-name"},"\u95dc\u9375\u5b57"))),c.a.createElement("input",{className:"searchbox-btn",type:"button",value:"\u641c\u5c0b",onClick:a}))};var f=function(e){var t=e.news;return c.a.createElement("ul",{className:"news-list"},t.map((function(e,t){var a={backgroundImage:"url(".concat(e.urlToImage,")"),backgroundPosition:"center",backgroundSize:"cover"};return c.a.createElement("li",{className:"news-self",key:t},c.a.createElement("h3",{className:"news-title"},"    ",e.title),c.a.createElement("div",{className:"news-image",style:a}),c.a.createElement("p",{className:"news-author"},e.author,"  ",e.publishedAt),c.a.createElement("p",{className:"news-content"},e.description," ",c.a.createElement("a",{href:e.url,target:"_blank"},"More...")))})))};a(12);var h=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)([]),o=Object(u.a)(s,2),h=o[0],v=o[1],b=Object(n.useState)("tw"),d=Object(u.a)(b,2),y=d[0],w=d[1];Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://newsapi.org/v2/top-headlines?country=".concat(y,"&apiKey=9feb9ff5c6cf4b2d9597ba6479ce77b1"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,v(a.articles);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[y]);var E=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(t),a="https://newsapi.org/v2/top-headlines?country=".concat(t,"&apiKey=9feb9ff5c6cf4b2d9597ba6479ce77b1"),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,v(c.articles);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://newsapi.org/v2/top-headlines?country=".concat(y,"&category=").concat(t,"&apiKey=9feb9ff5c6cf4b2d9597ba6479ce77b1"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,v(c.articles);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n="https://newsapi.org/v2/top-headlines?country=".concat(y,"&q=").concat(a,"&apiKey=9feb9ff5c6cf4b2d9597ba6479ce77b1"),console.log(n),e.next=5,fetch(n);case 5:return c=e.sent,e.next=8,c.json();case 8:r=e.sent,console.log(r),v(r.articles);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement(m,{onChangeCategory:g,onChangeCounty:E,country:y}),c.a.createElement(p,{setKeyword:r,handleSearchKeyWord:N}),c.a.createElement(f,{news:h}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.606a35a1.chunk.js.map