(this.webpackJsonpoh_fe_test=this.webpackJsonpoh_fe_test||[]).push([[0],{84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(27),c=n.n(i),o=(n(84),n(85),n(86),n(146)),s=n(134),d=n(39),u=n(15),m=(n(87),n(7)),l=n(5),j=n(17),h=n(65),b=n(22),p=Object(h.a)({baseQuery:Object(b.d)({baseUrl:"https://kmin2684.github.io/mock-api/oh_fe_test/"}),tagTypes:[],endpoints:function(e){return{getCommunities:e.query({query:function(e){return"communities.json"}}),getHomes:e.query({query:function(e){return"homes.json"}})}}}),f=p.useGetCommunitiesQuery,O=p.useGetHomesQuery,x=Object(l.d)({name:"data",initialState:{dataOrganized:[],searchKey:"",homesModal:{display:!1,communityId:"",communityName:""}},reducers:{replaceDataOrganized:function(e,t){e.dataOrganized=t.payload},replaceSearchKey:function(e,t){e.searchKey=t.payload.trim()},replaceHomesModal:function(e,t){e.homesModal=t.payload}}}),g=x.actions,y=x.reducer,v=function(e){var t;return Object(l.a)(Object(d.a)({reducer:(t={},Object(m.a)(t,p.reducerPath,p.reducer),Object(m.a)(t,"data",y),t),middleware:function(e){return e().concat(p.middleware)}},e))}(),w=function(){return Object(j.d)()},C=j.e,N=n.p+"static/media/No_image_available.1edd6fd3.svg",k=n(140),U=n(144),I=n(143),S=n(142),M=n(131),_=n(136),A=n(135),H=n(2);function F(e){var t=w(),n=a.a.useState({loading:!0}),r=Object(u.a)(n,2),i=r[0],c=r[1],o=e.community.avgPrice,m=e.community.imgUrl,l=e.community.name,j=e.community.id;return Object(H.jsx)(s.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:e.hidden?"hidden Community":"Community",children:Object(H.jsxs)(k.a,{children:[i.loading&&Object(H.jsx)(A.a,{variant:"rectangular",height:200,animation:"wave"}),Object(H.jsx)(S.a,{component:"img",height:"200",src:m,onError:function(e){e.currentTarget.src=N,e.currentTarget.style.objectFit="contain"},onLoad:function(){return c((function(e){return Object(d.a)(Object(d.a)({},e),{},{loading:!1})}))},style:{display:i.loading?"none":"block"}}),Object(H.jsxs)(I.a,{children:[Object(H.jsx)(_.a,{gutterBottom:!0,variant:"h5",component:"div",children:l}),Object(H.jsx)(_.a,{variant:"body2",color:"text.secondary",children:"N/A"===o?" no home data available":"Average price: ".concat(o)})]}),Object(H.jsx)(U.a,{children:Object(H.jsx)(M.a,{disabled:"N/A"===o,size:"small",onClick:function(){return t(g.replaceHomesModal({display:!0,communityName:l,communityId:j}))},children:"view homes"})})]})})}function K(){var e=f(""),t=O("");return e.error?Object(H.jsxs)(H.Fragment,{children:["status"in e.error&&Object(H.jsx)("h1",{children:e.error.status}),Object(H.jsx)("h3",{children:"An error occurred while retrieving community data from the server"})]}):t.error?Object(H.jsxs)(H.Fragment,{children:["status"in t.error&&Object(H.jsx)("h1",{children:t.error.status}),Object(H.jsx)("h3",{children:"An error occurred while retrieving home data from the server"})]}):null}n(95);var L=n(145);function W(){return Object(H.jsx)("div",{className:"Spinner",children:Object(H.jsx)(L.a,{size:"5rem"})})}var z=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}),B=function(e,t){var n=t.filter((function(t){return t.communityId===e}));if(0===n.length)return"N/A";var r=n.map((function(e){return e.price})).reduce((function(e,t){return e+t}),0)/n.length;return z.format(r)};function P(e,t){var n=e.name.toUpperCase(),r=t.name.toUpperCase();return n<r?-1:n>r?1:0}function q(){var e=f(""),t=O(""),n=C((function(e){return e.data.searchKey}));return Object(H.jsx)("div",{className:"Communities",children:Object(H.jsx)(o.a,{maxWidth:"lg",children:e.error||t.error?Object(H.jsx)(K,{}):e.isLoading||t.isLoading?Object(H.jsx)(W,{}):e.data&&t.data?Object(H.jsx)(s.a,{container:!0,columns:{xs:12,sm:12,md:12,lg:12},justifyContent:"flex-start",children:e.data.map((function(e){return{id:e.id,name:e.name,imgUrl:e.imgUrl,avgPrice:B(e.id,t.data)}})).sort(P).map((function(e){return Object(H.jsx)(F,{community:e,hidden:!e.name.toUpperCase().includes(n.toUpperCase())},e.name)}))}):"no community data is available"})})}n(96);var G=n(130),T=n(141);function D(e){return Object(H.jsx)(s.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(H.jsx)(k.a,{style:{margin:"0.5rem"},children:Object(H.jsxs)(I.a,{children:[Object(H.jsxs)(_.a,{gutterBottom:!0,variant:"h5",component:"div",children:["Home ",e.index+1]}),Object(H.jsxs)(_.a,{variant:"body2",color:"text.secondary",children:["Price: ",z.format(e.home.price)]}),Object(H.jsxs)(_.a,{variant:"body2",color:"text.secondary",children:["Type: ",e.home.type]})]})})})}function Q(){var e,t=O("").data,n=C((function(e){return e.data.homesModal})),r=w();return Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)(G.a,{className:"Homes",open:n.display,onClose:function(){r(g.replaceHomesModal({display:!1,communityId:"",communityName:""}))},maxWidth:"lg",fullWidth:!0,children:[Object(H.jsxs)(T.a,{className:"title",children:[" ",n.communityName]}),Object(H.jsx)(s.a,{container:!0,columns:{xs:12,sm:12,md:12,lg:12},justifyContent:"flex-start",children:null===t||void 0===t||null===(e=t.filter((function(e){return e.communityId===n.communityId})))||void 0===e?void 0:e.map((function(e,t){return Object(H.jsx)(D,{home:e,index:t},"home-".concat(t))}))})]})})}var E=n(8),J=n(124),R=n(138),$=n(137),V=n(139),X=n(132),Y=Object(E.a)("div")((function(e){var t=e.theme;return Object(m.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(J.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(J.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),Z=Object(E.a)(X.a)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(m.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function ee(){var e=C((function(e){return e.data.searchKey})),t=w();return Object(H.jsx)($.a,{sx:{flexGrow:1},children:Object(H.jsx)(R.a,{position:"static",children:Object(H.jsxs)(V.a,{children:[Object(H.jsx)(_.a,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}},children:"openhouse.ai"}),Object(H.jsx)(Y,{children:Object(H.jsx)(Z,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"},onChange:function(e){t(g.replaceSearchKey(e.target.value.trim()))},value:e})})]})})})}var te=function(){return Object(H.jsxs)("div",{className:"App",children:[Object(H.jsx)(ee,{}),Object(H.jsx)(q,{}),Object(H.jsx)(Q,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(H.jsx)(a.a.StrictMode,{children:Object(H.jsx)(j.a,{store:v,children:Object(H.jsx)(te,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[97,1,2]]]);
//# sourceMappingURL=main.5b497434.chunk.js.map