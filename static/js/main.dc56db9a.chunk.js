(this.webpackJsonpsearchform=this.webpackJsonpsearchform||[]).push([[0],{13:function(t,e,s){t.exports={searchBar:"SearchBar_searchBar__1Q3g3",form:"SearchBar_form__2JDnY",inputSearch:"SearchBar_inputSearch__33p1_"}},19:function(t,e,s){t.exports={postsList:"Posts_postsList__LCipn","posts-item":"Posts_posts-item__fDp4x","posts-item__title":"Posts_posts-item__title__CrXsK","posts-item__text":"Posts_posts-item__text__1e8DB","posts-item__author":"Posts_posts-item__author__fhKhS"}},37:function(t,e,s){},38:function(t,e,s){},64:function(t,e,s){"use strict";s.r(e);var n=s(1),r=s(0),a=s.n(r),c=s(8),o=s.n(c),i=(s(37),s(38),s(4)),u=s(18),p=s.n(u),l=s(29),h=s(6),f=s(3),j=s(30),m=s.n(j),_=function(t){return m.a.get("https://jsonplaceholder.typicode.com/"+t).then((function(t){return t}))},b={getPosts:function(){return _("posts/")},getUsers:function(){return _("users/")}},d="Posts/app/INITIALIZED_SUCCESS",O="Posts/app/SET_POSTS",x="Posts/app/SET_USERS",I={initialized:!1,users:null,posts:null},v=function(t){return{type:O,posts:t}},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(f.a)(Object(f.a)({},t),{},{initialized:!0});case O:return Object(f.a)(Object(f.a)({},t),{},{posts:Object(h.a)(e.posts)});case x:return Object(f.a)(Object(f.a)({},t),{},{users:Object(h.a)(e.users)});default:return t}},S=s(9),P=s(10),y=s(12),N=s(11),T=s(19),L=s.n(T),C=s(7),E=s.n(C),w=function(t){return Object(n.jsxs)("li",{className:E.a.postsItem,children:[Object(n.jsx)("h3",{className:E.a.postsItemTitle,children:t.title}),Object(n.jsx)("p",{className:E.a.postsItemText,children:t.text}),Object(n.jsx)("span",{className:E.a.postsItemAuthor,children:t.userName})]})},B=s(13),A=s.n(B),U=s.p+"static/media/search.745e2790.svg",z=function(t){Object(y.a)(s,t);var e=Object(N.a)(s);function s(){var t;Object(S.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={currentInputValue:""},t.changeText=function(e){t.setState({currentInputValue:e.target.value}),t.props.filterUsers(e.target.value)},t}return Object(P.a)(s,[{key:"render",value:function(){return Object(n.jsx)("section",{className:A.a.searchBar,children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("form",{onSubmit:function(t){t.preventDefault()},action:"",className:A.a.form,children:Object(n.jsx)("input",{style:{backgroundImage:"url(".concat(U,")")},onInput:this.changeText,value:this.currentInputValue,type:"text",className:A.a.inputSearch,placeholder:"Filter by author..."})})})})}}]),s}(a.a.Component),k=function(t){Object(y.a)(s,t);var e=Object(N.a)(s);function s(){var t;Object(S.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={postList:t.props.posts},t.filterUsers=function(e){var s=[];""!==e?t.props.users.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})).forEach((function(e){t.props.posts.forEach((function(t){t.userId===e.id&&s.push(t)}))})):""===e&&(s=t.props.posts);t.setState({postList:Object(h.a)(s)})},t}return Object(P.a)(s,[{key:"render",value:function(){var t=this,e=[];return this.state.postList.forEach((function(s){t.props.users.forEach((function(t){t.id===s.userId&&e.push(Object(n.jsx)(w,{title:s.title,text:s.body,userName:t.name},s.id))}))})),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(z,{filterUsers:this.filterUsers}),Object(n.jsx)("section",{className:L.a.posts,children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("ul",{className:L.a.postsList,children:e})})})]})}}]),s}(a.a.Component),D=Object(i.b)((function(t){return{users:t.app.users,posts:t.app.posts}}),{setPosts:v})(k),F=Object(i.b)((function(t){return{isInitialize:t.app.initialized}}),{initializeApp:function(){return function(){var t=Object(l.a)(p.a.mark((function t(e){var s,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.getPosts();case 2:return s=t.sent,e(v(s.data)),t.next=6,b.getUsers();case 6:n=t.sent,e((r=n.data,{type:x,users:r})),Promise.all([s,n]).then(e({type:d}));case 9:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(t){return t.initializeApp(),t.isInitialize?Object(n.jsx)(D,{}):null})),J=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,65)).then((function(e){var s=e.getCLS,n=e.getFID,r=e.getFCP,a=e.getLCP,c=e.getTTFB;s(t),n(t),r(t),a(t),c(t)}))},V=s(5),K=s(31),Q=Object(V.c)({app:g}),R=Object(V.d)(Q,Object(V.a)(K.a));o.a.render(Object(n.jsx)(i.a,{store:R,children:Object(n.jsx)(F,{})}),document.getElementById("root")),J()},7:function(t,e,s){t.exports={postsItem:"Post_postsItem__2y1r0",postsItemTitle:"Post_postsItemTitle__18N-r",postsItemText:"Post_postsItemText__2hmge",postsItemAuthor:"Post_postsItemAuthor__3aiN2"}}},[[64,1,2]]]);
//# sourceMappingURL=main.dc56db9a.chunk.js.map