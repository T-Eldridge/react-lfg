(this["webpackJsonpreact-lfg"]=this["webpackJsonpreact-lfg"]||[]).push([[0],{113:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(0),s=a.n(r),c=a(11),o=a.n(c),i=(a(90),a(20)),u=a(21),l=a(24),d=a(23),j=a(33),h=a(78),b=a(8),p=a(22),m=a(143),f=a(155),O=a(156),v=a(158),g=a(159),x=a(147),y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={userName:"",userPassword:"",redirect:!1,open:!1},e.toggleDialog=function(){return e.setState({open:!e.state.open})},e.handleTextChange=function(t){var a=Object(j.a)({},e.state);a[t.target.name]=t.target.value,e.setState(a)},e.login=function(t){t.preventDefault(),e.props.setUser(e.state.userName),console.log("im a person",e.props.userName,"stuff",e.state.userName)},e.createAccount=function(t){var a={userName:e.state.userName,userPassword:e.state.userPassword};t.preventDefault(),e.props.addUser(a),e.props.userName},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(){this.props.userName&&(document.cookie="loggedIn=true;max-age=600*1000",this.setState({redirect:!0}))}},{key:"render",value:function(){return this.state.redirect?Object(n.jsx)(b.a,{to:"/dashboard"}):Object(n.jsx)("div",{children:Object(n.jsxs)(m.a,{maxWidth:"sm",children:[Object(n.jsx)("h3",{children:"Please Enter Login Information"}),Object(n.jsxs)("form",{className:"login-form",onSubmit:this.login,children:[Object(n.jsx)(f.a,{required:!0,onChange:this.handleTextChange,value:this.state.userName,name:"userName",label:"Username",type:"text"}),Object(n.jsx)(f.a,{required:!0,onChange:this.handleTextChange,value:this.state.userPassword,name:"userPassword",label:"Password",type:"password"}),!this.props.userName&&Object(n.jsx)(O.a,{type:"submit",className:"login-button",variant:"contained",color:"secondary",children:"Login"}),Object(n.jsx)("br",{}),Object(n.jsx)(O.a,{variant:"contained",className:"add-user",onClick:this.toggleDialog,children:"Sign Up!"})]}),Object(n.jsx)("div",{children:Object(n.jsxs)(v.a,{open:this.state.open,onClose:this.toggleDialog,children:[Object(n.jsx)(g.a,{children:"Join The Dork Side!"}),Object(n.jsx)(x.a,{children:Object(n.jsxs)("form",{onSubmit:this.createAccount,style:{display:"flex",flexDirection:"column",width:"350px"},children:[Object(n.jsx)(f.a,{id:"userName",placeholder:"Desired Username",value:this.state.userName,onChange:this.handleTextChange,name:"userName",label:"Username",type:"text",required:!0}),Object(n.jsx)(f.a,{id:"userPassword",placeholder:"Password",value:this.state.userPassword,onChange:this.handleTextChange,name:"userPassword",label:"Password",type:"password",required:!0}),Object(n.jsx)("br",{}),Object(n.jsx)(O.a,{onClick:this.login,variant:"contained",color:"secondary",type:"submit",children:"Submit!"})]})})]})})]})})}}]),a}(r.Component),N=function(e){return{type:"USER",value:e}},w=function(e){return{type:"ADD_USER",value:e}},F=function(e){return{type:"SET_FAV",value:e}},C=function(e){return{type:"ADD_FAVORITE",value:e}},D=Object(p.b)((function(e){return{userName:e.userName,userPassword:e.userPassword}}),(function(e){return{addUser:function(t){return e((a=t,function(e){fetch("/auth/signup",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json().then((function(t){e(w(t))}))})).catch((function(e){return{type:"error",value:e}}))}));var a},setUser:function(t){return e(N(t))}}}))(y),S=a(76),P=a.n(S),G=a(45),k=a(63),T=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={results:[],input:"",gameID:null},e.onChange=function(t){e.setState({input:t.target.value})},e.getGames=function(t){t.preventDefault(),k("https://api.rawg.io/api/games?api_key=291d0c162cac4826b13adeca8fb3dcfe&search="+e.state.input).then((function(t){var a=t.data.results;e.setState({results:Object(G.a)(a)}),console.log(a)}))},e.handleAddFav=function(t){e.setState({gameID:t.target.id}),console.log("gameID",e.state.gameID);var a=e.props.favGameObj,n=t.currentTarget.id,r=e.props.favorites.find((function(e){return e.gameID==n})),s=e.state.results.find((function(e){return e.id==n}));a.username=e.props.userName,a.gameID=s.id,a.gameName=s.name,e.props.setFavGameObj(a),k.post("/favorites",a),!r&&e.props.addFav(a)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return console.log("searchform props",this.props.userName),Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:this.getGames,children:[Object(n.jsx)("input",{onChange:this.onChange}),Object(n.jsx)("button",{type:"submit",children:"Find Game"}),this.state.results.map((function(t){return Object(n.jsxs)("p",{children:[" ",Object(n.jsx)("h2",{children:t.name}),e.props.userName&&Object(n.jsx)(O.a,{id:t.id,onClick:e.handleAddFav,color:"secondary",variant:"contained",children:"Favorite"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("img",{src:t.background_image,alt:"game art",width:"250",height:"250"}),Object(n.jsxs)("h4",{children:["Game Rating: ",t.rating]}),Object(n.jsxs)("h4",{children:["Date Released: ",t.released]})]})]})}))]})})}}]),a}(r.Component),A=Object(p.b)((function(e){return{userName:e.userName,userPassword:e.userPassword,favorites:e.favorites,favGameObj:e.favGameObj}}),(function(e){return{setFavGameObj:function(t){return e(F(t))},addFav:function(t){return e(C(t))}}}))(T),I=a(148),U=a(149),E=a(150),R=a(151),L=a(152),_=a(63),V=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={favorites:[]},e.handleSubmit=function(t){var a=Object(j.a)({},e.state);a[t.target.id]=t.target.value,e.setState(a)},e.getFavs=function(){_("/favorites/".concat(e.props.userName)).then((function(t){var a=t.data;e.setState({favorites:a}),console.log("res",t),console.log("res.data",t.data),console.log("res.data.results",t.data.results),console.log("these are favs",a),console.log("fav state",e.state.favorites)}))},e}return Object(u.a)(a,[{key:"render",value:function(){return console.log("dashboard props",this.props.userName),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{children:[Object(n.jsxs)(I.a,{children:[Object(n.jsx)(U.a,{children:Object(n.jsx)(E.a,{children:Object(n.jsxs)(R.a,{align:"center",size:"small",variant:"head",children:[" ",Object(n.jsxs)("h2",{children:[this.props.userName,"'s Favorite Games: "]})]})})}),Object(n.jsx)(L.a,{children:this.state.favorites.map((function(e){return Object(n.jsx)("h2",{children:e.gameName})}))})]}),Object(n.jsx)(O.a,{onClick:this.getFavs,variant:"contained",color:"secondary",children:"My Favorites"}),Object(n.jsx)(T,{userName:this.props.userName,setFavGameObj:this.props.setFavGameObj,favorites:this.props.favorites,addFav:this.props.addFav,favGameObj:this.props.favGameObj})]})})}}]),a}(r.Component),q=Object(p.b)((function(e){return{userName:e.userName,favorites:e.favorites,favGameObj:e.favGameObj}}),(function(e){return{setFavGameObj:function(t){return e(F(t))},addFav:function(t){return e(C(t))}}}))(V),J=function(e){var t=e.component,a=Object(h.a)(e,["component"]);return Object(n.jsx)(b.b,Object(j.a)(Object(j.a)({},a),{},{render:function(e){return P.a.parse(document.cookie).loggedIn?Object(n.jsx)(t,Object(j.a)({},e)):Object(n.jsx)(b.a,{to:"/login"})}}))},M=function(){return Object(n.jsxs)(b.d,{children:[Object(n.jsx)(J,{path:"/dashboard",component:q}),Object(n.jsx)(b.b,{path:"/login",component:D}),Object(n.jsx)(b.b,{path:"/searchform",component:A}),Object(n.jsx)(b.b,{path:"/",component:A})]})},B=a(41),W=(a(113),a(38)),z=Object(W.c)({favGameObj:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FAV":return Object.assign({},e,t.value);default:return e}},userName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER":case"LOGOUT":return t.value;default:return e}},userPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PASSWORD":return t.value;default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FAVORITE":return[].concat(Object(G.a)(e),[t.value]);case"REMOVE_FAVORITE":var a=Object(G.a)(e);return a.splice(t.value,1),a;default:return e}}}),H=a(77),K=Object(W.d)(z,{userName:"",userPassword:"",favorites:[],favGameObj:{username:"",gameID:null,gameName:""}},Object(W.a)(H.a)),Q=a(153),X=a(154),Y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(Q.a,{className:"nav-image",position:"static",children:[Object(n.jsx)(X.a,{children:Object(n.jsx)("h1",{children:"Looking For Games"})}),Object(n.jsxs)("div",{align:"center",children:[Object(n.jsx)(O.a,{variant:"contained",color:"secondary",children:Object(n.jsx)(B.b,{to:"/searchform",children:"Home"})}),this.props.userName?Object(n.jsxs)(O.a,{variant:"contained",color:"secondary",onClick:function(){return e.props.setUser("")},children:[" ",Object(n.jsx)(B.b,{to:"/searchform",children:"Logout"})]}):Object(n.jsx)(O.a,{variant:"contained",color:"secondary",children:Object(n.jsx)(B.b,{to:"/login",children:"Login"})})]})]})}}]),a}(r.Component),Z=Object(p.b)((function(e){return{favorites:e.favorites,userName:e.userName,userPassword:e.userPassword}}),(function(e){return{setUser:function(t){return e(N(t))}}}))(Y),$=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)(p.a,{store:K,children:Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(B.a,{children:[Object(n.jsx)(Z,{}),Object(n.jsx)(M,{})]})})})}}]),a}(r.Component),ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,161)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)($,{})}),document.getElementById("root")),ee()},90:function(e,t,a){}},[[114,1,2]]]);
//# sourceMappingURL=main.cba99bab.chunk.js.map