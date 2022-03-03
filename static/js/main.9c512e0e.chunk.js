(this["webpackJsonpweather-app-or"]=this["webpackJsonpweather-app-or"]||[]).push([[0],{111:function(e,t,n){e.exports={navlinks:"styles_navlinks__JEwNa"}},133:function(e,t,n){},134:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(38),i=n.n(r),s=(n(133),n(13)),o=(n(134),n(52)),u=n(17),l=n(112),d=n(86),j=n.n(d),h=n(109),b=n(110),x=n(87),f=n.n(x),O=n(2),m=function(){var e=Object(c.useContext)(Y),t=e.isDarkMode,n=e.toggleMode,a=Object(O.jsxs)("div",{className:f.a.modeDiv,children:[t?Object(O.jsx)(h.a,{size:20}):Object(O.jsx)(b.a,{size:20}),t?Object(O.jsx)("span",{children:"Change to light mode"}):Object(O.jsx)("span",{children:"Change to dark mode"})]});return Object(O.jsx)("button",{className:f.a.modeButton,onClick:n,children:a})},p=n(111),v=n.n(p),y=function(){return Object(O.jsxs)("div",{className:v.a.navlinks,children:[Object(O.jsxs)("ul",{children:[Object(O.jsx)(o.b,{to:"/Or-Arbel-21-02-22/",children:Object(O.jsx)("li",{children:"Home"})}),Object(O.jsx)(o.b,{to:"/favorites/",children:Object(O.jsx)("li",{children:"Favorites"})})]}),Object(O.jsx)(m,{})]})};var g=function(){return Object(O.jsxs)("nav",{className:j.a.nav,children:[Object(O.jsxs)("div",{className:j.a.logo,children:[Object(O.jsx)(l.a,{size:20}),Object(O.jsx)("span",{children:"Weather"})]}),Object(O.jsx)(y,{})]})},w=n(90),k=n(46),N=n.n(k),C=n(62),T=n(58),D=n.n(T),W=n(92),F=n(217),M=n(216),S=n(221),A=n(220),_=n(219),z=n(224),E=n(222),I=n(223),L=n(225),K=n(70),J=n.n(K),U=n(45),V=n(56),B=Object(V.b)({name:"favorites",initialState:[],reducers:{add:function(e,t){e.push(t.payload)},remove:function(e,t){var n=e.findIndex((function(e){return e.id===t.payload.id}));e.splice(n,1)}}}),P=B.actions,q=P.add,H=P.remove,R=B.reducer,Z=Object(V.b)({name:"city",initialState:{},reducers:{setCity:function(e,t){e.cityName=t.payload.cityName,e.country=t.payload.country,e.id=t.payload.id}}}),$=Z.actions.setCity,G=Z.reducer;var Q=function(){var e=Object(c.useContext)(Y).isDarkMode,t=Object(U.c)((function(e){return e.favorites})),n=Object(U.c)((function(e){return e.city})),a=Object(U.b)(),r=Object(c.useState)(!1),i=Object(s.a)(r,2),o=i[0],u=i[1],l=Object(c.useState)("celsius"),d=Object(s.a)(l,2),j=d[0],h=d[1],b=Object(c.useState)([]),x=Object(s.a)(b,2),f=x[0],m=x[1],p=Object(c.useState)({}),v=Object(s.a)(p,2),y=v[0],g=v[1],k=Object(c.useState)([]),T=Object(s.a)(k,2),K=T[0],V=T[1],B=function(){var e=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat("yxpKoLngs6WEUwvOflWDpJSk6Wd4IAlT","&q=32.109333,34.855499")).then((function(e){a($({cityName:e.data.AdministrativeArea.LocalizedName,country:e.data.Country.LocalizedName,id:e.data.Key}))})).catch((function(e){console.warn(e)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){n.id||B()}),[]),Object(c.useEffect)((function(){(function(){var e=Object(C.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.id){e.next=5;break}return e.next=3,R(n.id);case 3:return e.next=5,P(n.id);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]);var P=function(){var e=Object(C.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:D.a.get("http://dataservice.accuweather.com/currentconditions/v1/".concat(t,"?apikey=").concat("yxpKoLngs6WEUwvOflWDpJSk6Wd4IAlT")).then((function(e){return e.data[0]})).then((function(e){g({celsius:Math.round(e.Temperature.Metric.Value),fahrenheit:Math.round(e.Temperature.Imperial.Value),text:e.WeatherText})})).catch((function(e){console.warn(e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(C.a)(N.a.mark((function e(t){var n,c,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],c="",a=null!==K&&void 0!==K?K:[],e.next=5,D.a.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(t,"?apikey=").concat("yxpKoLngs6WEUwvOflWDpJSk6Wd4IAlT","&metric=true")).then((function(e){return e.data.DailyForecasts})).then((function(e){for(var t=0;t<e.length;t++)c=n[new Date(e[t].Date).getDay()],void 0===a[t]&&(a[t]={day:c}),a[t].minTempCelsius=Math.round(e[t].Temperature.Minimum.Value),a[t].maxTempCelsius=Math.round(e[t].Temperature.Maximum.Value)})).catch((function(e){console.warn(e)}));case 5:return e.next=7,D.a.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(t,"?apikey=").concat("yxpKoLngs6WEUwvOflWDpJSk6Wd4IAlT","&metric=false")).then((function(e){return e.data.DailyForecasts})).then((function(e){for(var t=0;t<e.length;t++)c=n[new Date(e[t].Date).getDay()],a[t].minTempFahrenheit=Math.round(e[t].Temperature.Minimum.Value),a[t].maxTempFahrenheit=Math.round(e[t].Temperature.Maximum.Value)})).catch((function(e){console.warn(e)}));case 7:V(a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){for(var e=0;e<t.length;e++)if(t[e].id===n.id)return!0;return!1},G=function(e,t){var n;/^[a-zA-Z\s]*$/.test(t)?(n=t,D.a.get("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat("yxpKoLngs6WEUwvOflWDpJSk6Wd4IAlT","&q=").concat(n)).then((function(e){return e.data})).then((function(e){if(e){var t=[];e.forEach((function(e){t.push({cityName:e.LocalizedName,country:e.Country.LocalizedName,id:e.Key,key:e.Key})})),m(t)}})).catch((function(e){console.warn(e)}))):u(!0)},Q=function(e,t){"clickaway"!==t&&u(!1)};return Object(O.jsx)(J.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"search-box",children:[Object(O.jsx)(M.a,{disablePortal:!0,id:"cities-search-box",onInputChange:function(e,t){return G(0,t)},onChange:function(e,t){null!==t&&a($(t))},options:f,getOptionLabel:function(e){return e.cityName},sx:{width:300},renderInput:function(e){return Object(O.jsx)(F.a,Object(w.a)(Object(w.a)({},e),{},{label:"Search City"}))}}),Object(O.jsx)(S.a,{open:o,autoHideDuration:6e3,onClose:Q,children:Object(O.jsx)(A.a,{onClose:Q,severity:"error",sx:{width:"100%"},children:"Please use English characters only."})})]}),Object(O.jsxs)("div",{className:e?"weather-box dark-weather-box":"weather-box",children:[Object(O.jsxs)("div",{className:"weather-box-city",children:[n.id&&y.celsius?Object(O.jsxs)(O.Fragment,{children:[n.cityName,", ",n.country]}):Object(O.jsx)("div",{}),Object(O.jsxs)("button",{onClick:function(){var e;e=Z(),a(!0===e?H(n):q({cityName:n.cityName,country:n.country,id:n.id,celsius:y.celsius,fahrenheit:y.fahrenheit}))},children:[Z()?Object(O.jsx)(W.b,{size:20}):Object(O.jsx)(W.a,{size:20}),Object(O.jsx)("span",{children:Z()?"Remove from favorites":"Add to favorites"})]})]}),Object(O.jsx)("div",{className:"temperature",children:n.id&&y.celsius?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"celsius"===j?y.celsius+"\xb0C":y.fahrenheit+"\xb0F"}),Object(O.jsx)("h3",{children:y.text})]}):Object(O.jsx)(L.a,{})}),Object(O.jsx)(I.a,{children:Object(O.jsxs)(z.a,{row:!0,"aria-labelledby":"radio-buttons-group",value:j,name:"radio-buttons-group",onChange:function(e){return h(e.target.value)},children:[Object(O.jsx)(E.a,{value:"celsius",control:Object(O.jsx)(_.a,{}),label:"Celsius"}),Object(O.jsx)(E.a,{value:"fahrenheit",control:Object(O.jsx)(_.a,{}),label:"Fahrenheit"})]})}),Object(O.jsx)("div",{className:"futureData",children:K.map((function(e,t){return Object(O.jsx)("div",{className:"futureWeather-box",children:Object(O.jsxs)("p",{children:[e.day,Object(O.jsx)("br",{}),"celsius"===j&&e.minTempCelsius&&Object(O.jsxs)(O.Fragment,{children:[e.minTempCelsius,"\xb0C / ",e.maxTempCelsius,"\xb0C"]}),"fahrenheit"===j&&e.minTempFahrenheit&&Object(O.jsxs)(O.Fragment,{children:[e.minTempFahrenheit,"\xb0F / ",e.maxTempFahrenheit,"\xb0F"]})]})},t)}))}),Object(O.jsx)("p",{children:"\u2600 Wherever you go, no matter what the weather, always bring your own sunshine. \u2600"})]})]})})};var X=function(){var e=Object(c.useContext)(Y).isDarkMode,t=Object(U.c)((function(e){return e.favorites})),n=Object(U.b)();return Object(O.jsx)(J.a,{top:!0,cascade:!0,children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:e?"darkTitle":"lightTitle",children:"Favorite cities"}),t.length>0?t.map((function(e,t){return Object(O.jsxs)("div",{className:"favorite-container",children:[Object(O.jsx)("button",{className:"removeBtn",onClick:function(){return n(H(e))},children:"Remove"}),Object(O.jsxs)(o.b,{to:"/",className:"favorite-div",onClick:function(){return function(e){n($({cityName:e.cityName,country:e.country,id:e.id}))}(e)},children:[Object(O.jsxs)("div",{children:[e.cityName,", ",e.country]}),Object(O.jsxs)("div",{style:{color:"white"},children:[e.celsius," \xb0C | ",e.fahrenheit," \xb0F"]})]})]},t)})):Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("p",{style:{color:e?"white":"black"},children:[Object(O.jsx)("span",{style:{fontWeight:"bold"},children:"No favorites yet."}),Object(O.jsx)("br",{}),"Keep track of the cities you're interested in by clicking 'Add to favorites'"]})})]})})},Y=Object(c.createContext)();var ee=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(O.jsx)(Y.Provider,{value:{isDarkMode:n,toggleMode:function(){a((function(e){return!e}))}},children:Object(O.jsx)(o.a,{children:Object(O.jsxs)("div",{className:n?"darkApp":"app",children:[Object(O.jsx)(g,{}),Object(O.jsxs)(u.d,{children:[Object(O.jsx)(u.b,{exact:!0,path:"/Or-Arbel-21-02-22/",component:function(){return Object(O.jsx)(Q,{})}}),Object(O.jsx)(u.b,{exact:!0,path:"/favorites/",component:function(){return Object(O.jsx)(X,{})}}),Object(O.jsx)(u.a,{to:"/Or-Arbel-21-02-22/"})]})]})})})},te=Object(V.a)({reducer:{favorites:R,city:G}});i.a.render(Object(O.jsx)(U.a,{store:te,children:Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(ee,{})})}),document.getElementById("root"))},86:function(e,t,n){e.exports={nav:"styles_nav__2AghU",logo:"styles_logo__5iaj4"}},87:function(e,t,n){e.exports={modeButton:"styles_modeButton__15I55",modeDiv:"styles_modeDiv__nzAtT"}}},[[164,1,2]]]);
//# sourceMappingURL=main.9c512e0e.chunk.js.map