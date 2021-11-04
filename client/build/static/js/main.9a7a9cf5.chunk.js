(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{79:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),r=n(59),i=n.n(r),s=(n(79),n(4)),o=n(11),l=n(8),d=n(68),u=n(101),j=n(103),b=n(100),p=n(67),h=n(7);function O(e,t){return 1===t?e:e+"s"}function m(e,t,n){return new Promise((function(c,a){var r,i,s,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(a){switch(r=o.result,i=r.transaction(e,"readwrite"),s=i.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":s.put(n),c(n);break;case"get":var l=s.getAll();l.onsuccess=function(){c(l.result)};break;case"delete":s.delete(n._id);break;default:console.log("No valid method")}i.oncomplete=function(){r.close()}}}))}var f=n(69),x=n(28),g="UPDATE_PRODUCTS",v="ADD_TO_CART",y="ADD_MULTIPLE_TO_CART",w="REMOVE_FROM_CART",_="UPDATE_CART_QUANTITY",k="TOGGLE_CART",N="UPDATE_CATEGORIES",C="UPDATE_CURRENT_CATEGORY",S=function(e,t){switch(t.type){case g:return Object(s.a)(Object(s.a)({},e),{},{products:Object(x.a)(t.products)});case v:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(x.a)(e.cart),[t.product])});case y:return Object(s.a)(Object(s.a)({},e),{},{cart:[].concat(Object(x.a)(e.cart),Object(x.a)(t.products))});case _:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case w:var n=e.cart.filter((function(e){return e._id!==t._id}));return Object(s.a)(Object(s.a)({},e),{},{cartOpen:n.length>0,cart:n});case"CLEAR_CART":return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!1,cart:[]});case k:return Object(s.a)(Object(s.a)({},e),{},{cartOpen:!e.cartOpen});case N:return Object(s.a)(Object(s.a)({},e),{},{categories:Object(x.a)(t.categories)});case C:return Object(s.a)(Object(s.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var T=n(1),E=["value"],A=Object(c.createContext)(),$=A.Provider,I=function(e){e.value;var t,n=Object(f.a)(e,E),a=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(c.useReducer)(S,t)),r=Object(h.a)(a,2),i=r[0],o=r[1];return Object(T.jsx)($,Object(s.a)({value:[i,o]},n))},D=function(){return Object(c.useContext)(A)};var P,Q,R,F,U,L=function(e){var t=D(),n=Object(h.a)(t,2),c=n[0],a=n[1],r=e.image,i=e.name,l=e._id,d=e.price,u=e.quantity,j=c.cart;return Object(T.jsxs)("div",{className:"card px-1 py-1",children:[Object(T.jsxs)(o.b,{to:"/products/".concat(l),children:[Object(T.jsx)("img",{alt:i,src:"/images/".concat(r)}),Object(T.jsx)("p",{children:i})]}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{children:[u," ",O("item",u)," in stock"]}),Object(T.jsxs)("span",{children:["$",d]})]}),Object(T.jsx)("button",{onClick:function(){var t=j.find((function(e){return e._id===l}));t?(a({type:_,_id:l,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),m("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(a({type:v,product:Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})}),m("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})},q=n(94),W=n(23),B=n(102),G=Object(B.a)(P||(P=Object(W.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),Y=Object(B.a)(Q||(Q=Object(W.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),M=(Object(B.a)(R||(R=Object(W.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(B.a)(F||(F=Object(W.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),H=Object(B.a)(U||(U=Object(W.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),J=n.p+"static/media/spinner.689d9a07.gif";var z=function(){var e=D(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=n.currentCategory,i=Object(q.a)(G),s=i.loading,o=i.data;return Object(c.useEffect)((function(){o?(a({type:g,products:o.products}),o.products.forEach((function(e){m("products","put",e)}))):s||m("products","get").then((function(e){a({type:g,products:e})}))}),[o,s,a]),Object(T.jsxs)("div",{className:"my-2",children:[Object(T.jsx)("h2",{children:"Our Products:"}),n.products.length?Object(T.jsx)("div",{className:"flex-row",children:(r?n.products.filter((function(e){return e.category._id===r})):n.products).map((function(e){return Object(T.jsx)(L,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(T.jsx)("h3",{children:"You haven't added any products yet!"}),s?Object(T.jsx)("img",{src:J,alt:"loading"}):null]})};var V=function(){var e=D(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=n.categories,i=Object(q.a)(M),s=i.loading,o=i.data;return Object(c.useEffect)((function(){o?(a({type:N,categories:o.categories}),o.categories.forEach((function(e){m("categories","put",e)}))):s||m("categories","get").then((function(e){a({type:N,categories:e})}))}),[o,s,a]),Object(T.jsxs)("div",{children:[Object(T.jsx)("h2",{children:"Choose a Category:"}),r.map((function(e){return Object(T.jsx)("button",{onClick:function(){var t;t=e._id,a({type:C,currentCategory:t})},children:e.name},e._id)}))]})},K=n(16),X=n.n(K),Z=n(27),ee=n(63),te=n(95),ne=function(e){var t=e.item,n=D(),c=Object(h.a)(n,2)[1];return Object(T.jsxs)("div",{className:"flex-row",children:[Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{children:[t.name,", $",t.price]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("span",{children:"Qty:"}),Object(T.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(c({type:w,_id:t._id}),m("cart","delete",Object(s.a)({},t))):(c({type:_,_id:t._id,purchaseQuantity:parseInt(n)}),m("cart","put",Object(s.a)(Object(s.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),Object(T.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){c({type:w,_id:e._id}),m("cart","delete",Object(s.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})},ce=n(64),ae=n(65),re=n(51),ie=n.n(re),se=new(function(){function e(){Object(ce.a)(this,e)}return Object(ae.a)(e,[{key:"getProfile",value:function(){return ie()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return ie()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),oe=(n(89),Object(ee.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),le=function(){var e=D(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(te.a)(Y),i=Object(h.a)(r,2),s=i[0],o=i[1].data;function l(){a({type:k})}return Object(c.useEffect)((function(){o&&oe.then((function(e){e.redirectToCheckout({sessionId:o.checkout.session})}))}),[o]),Object(c.useEffect)((function(){function e(){return(e=Object(Z.a)(X.a.mark((function e(){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("cart","get");case 2:t=e.sent,a({type:y,products:Object(x.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.cart.length||function(){e.apply(this,arguments)}()}),[n.cart.length,a]),n.cartOpen?Object(T.jsxs)("div",{className:"cart",children:[Object(T.jsx)("div",{className:"close",onClick:l,children:"[close]"}),Object(T.jsx)("h2",{children:"Shopping Cart"}),n.cart.length?Object(T.jsxs)("div",{children:[n.cart.map((function(e){return Object(T.jsx)(ne,{item:e},e._id)})),Object(T.jsxs)("div",{className:"flex-row space-between",children:[Object(T.jsxs)("strong",{children:["Total: $",function(){var e=0;return n.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),se.loggedIn()?Object(T.jsx)("button",{onClick:function(){var e=[];n.cart.forEach((function(t){for(var n=0;n<t.purchaseQuantity;n++)e.push(t._id)})),s({variables:{products:e}})},children:"Checkout"}):Object(T.jsx)("span",{children:"(log in to check out)"})]})]}):Object(T.jsxs)("h3",{children:[Object(T.jsx)("span",{role:"img","aria-label":"shocked",children:"\ud83d\ude31"}),"You haven't added anything to your cart yet!"]})]}):Object(T.jsx)("div",{className:"cart-closed",onClick:l,children:Object(T.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},de=function(){return Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)(V,{}),Object(T.jsx)(z,{}),Object(T.jsx)(le,{})]})};var ue=function(){var e=D(),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(l.f)().id,i=Object(c.useState)({}),d=Object(h.a)(i,2),u=d[0],j=d[1],b=Object(q.a)(G),p=b.loading,O=b.data,f=n.products,x=n.cart;return Object(c.useEffect)((function(){f.length?j(f.find((function(e){return e._id===r}))):O?(a({type:g,products:O.products}),O.products.forEach((function(e){m("products","put",e)}))):p||m("products","get").then((function(e){a({type:g,products:e})}))}),[f,O,p,a,r]),Object(T.jsxs)(T.Fragment,{children:[u&&x?Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),Object(T.jsx)("h2",{children:u.name}),Object(T.jsx)("p",{children:u.description}),Object(T.jsxs)("p",{children:[Object(T.jsx)("strong",{children:"Price:"}),"$",u.price," ",Object(T.jsx)("button",{onClick:function(){var e=x.find((function(e){return e._id===r}));e?(a({type:_,_id:r,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),m("cart","put",Object(s.a)(Object(s.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(a({type:v,product:Object(s.a)(Object(s.a)({},u),{},{purchaseQuantity:1})}),m("cart","put",Object(s.a)(Object(s.a)({},u),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(T.jsx)("button",{disabled:!x.find((function(e){return e._id===u._id})),onClick:function(){a({type:w,_id:u._id}),m("cart","delete",Object(s.a)({},u))},children:"Remove from Cart"})]}),Object(T.jsx)("img",{src:"/images/".concat(u.image),alt:u.name})]}):null,p?Object(T.jsx)("img",{src:J,alt:"loading"}):null,Object(T.jsx)(le,{})]})};var je,be,pe,he=function(e){var t=e.children;return Object(T.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},Oe=function(){return Object(T.jsx)("div",{children:Object(T.jsxs)(he,{children:[Object(T.jsx)("h1",{children:"404 Page Not Found"}),Object(T.jsx)("h1",{children:Object(T.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},me=n(33),fe=n(105),xe=Object(B.a)(je||(je=Object(W.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),ge=Object(B.a)(be||(be=Object(W.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),ve=Object(B.a)(pe||(pe=Object(W.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var ye=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(h.a)(t,2),a=n[0],r=n[1],i=Object(fe.a)(xe),l=Object(h.a)(i,2),d=l[0],u=l[1].error,j=function(){var e=Object(Z.a)(X.a.mark((function e(t){var n,c;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:a.email,password:a.password}});case 4:n=e.sent,c=n.data.login.token,se.login(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.name,c=t.value;r(Object(s.a)(Object(s.a)({},a),{},Object(me.a)({},n,c)))};return Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(o.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(T.jsx)("h2",{children:"Login"}),Object(T.jsxs)("form",{onSubmit:j,children:[Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(T.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:b})]}),Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(T.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:b})]}),u?Object(T.jsx)("div",{children:Object(T.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(T.jsx)("div",{className:"flex-row flex-end",children:Object(T.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var we=function(e){var t=Object(c.useState)({email:"",password:""}),n=Object(h.a)(t,2),a=n[0],r=n[1],i=Object(fe.a)(ve),l=Object(h.a)(i,1)[0],d=function(){var e=Object(Z.a)(X.a.mark((function e(t){var n,c;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName}});case 3:n=e.sent,c=n.data.addUser.token,se.login(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e){var t=e.target,n=t.name,c=t.value;r(Object(s.a)(Object(s.a)({},a),{},Object(me.a)({},n,c)))};return Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(o.b,{to:"/login",children:"\u2190 Go to Login"}),Object(T.jsx)("h2",{children:"Signup"}),Object(T.jsxs)("form",{onSubmit:d,children:[Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(T.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:u})]}),Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(T.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:u})]}),Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(T.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:u})]}),Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(T.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:u})]}),Object(T.jsx)("div",{className:"flex-row flex-end",children:Object(T.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var _e=function(){return Object(T.jsxs)("header",{className:"flex-row px-1",children:[Object(T.jsx)("h1",{children:Object(T.jsxs)(o.b,{to:"/",children:[Object(T.jsx)("span",{role:"img","aria-label":"shopping bag",children:"\ud83d\udecd\ufe0f"}),"-Shop-Shop"]})}),Object(T.jsx)("nav",{children:se.loggedIn()?Object(T.jsxs)("ul",{className:"flex-row",children:[Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)(o.b,{to:"/orderHistory",children:"Order History"})}),Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)("a",{href:"/",onClick:function(){return se.logout()},children:"Logout"})})]}):Object(T.jsxs)("ul",{className:"flex-row",children:[Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)(o.b,{to:"/signup",children:"Signup"})}),Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)(o.b,{to:"/login",children:"Login"})})]})})]})};var ke=function(){var e=Object(fe.a)(ge),t=Object(h.a)(e,1)[0];return Object(c.useEffect)((function(){function e(){return(e=Object(Z.a)(X.a.mark((function e(){var n,c,a,r;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("cart","get");case 2:if(n=e.sent,!(c=n.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:c}});case 7:a=e.sent,r=a.data,r.addOrder.products.forEach((function(e){m("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(T.jsx)("div",{children:Object(T.jsxs)(he,{children:[Object(T.jsx)("h1",{children:"Success!"}),Object(T.jsx)("h2",{children:"Thank you for your purchase!"}),Object(T.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var Ne=function(){var e,t=Object(q.a)(H).data;return t&&(e=t.user),Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(T.jsxs)("div",{className:"my-2",children:[Object(T.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(T.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var n=e._id,c=e.image,a=e.name,r=e.price;return Object(T.jsxs)("div",{className:"card px-1 py-1",children:[Object(T.jsxs)(o.b,{to:"/products/".concat(n),children:[Object(T.jsx)("img",{alt:a,src:"/images/".concat(c)}),Object(T.jsx)("p",{children:a})]}),Object(T.jsx)("div",{children:Object(T.jsxs)("span",{children:["$",r]})})]},t)}))})]},e._id)}))]}):null]})})},Ce=Object(d.a)({uri:"/graphql"}),Se=Object(p.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(s.a)(Object(s.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),Te=new u.a({link:Se.concat(Ce),cache:new j.a});var Ee=function(){return Object(T.jsx)(b.a,{client:Te,children:Object(T.jsx)(o.a,{children:Object(T.jsx)("div",{children:Object(T.jsxs)(I,{children:[Object(T.jsx)(_e,{}),Object(T.jsxs)(l.c,{children:[Object(T.jsx)(l.a,{exact:!0,path:"/",component:de}),Object(T.jsx)(l.a,{exact:!0,path:"/login",component:ye}),Object(T.jsx)(l.a,{exact:!0,path:"/signup",component:we}),Object(T.jsx)(l.a,{exact:!0,path:"/success",component:ke}),Object(T.jsx)(l.a,{exact:!0,path:"/orderHistory",component:Ne}),Object(T.jsx)(l.a,{exact:!0,path:"/products/:id",component:ue}),Object(T.jsx)(l.a,{component:Oe})]})]})})})})},Ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $e(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(Ee,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ae?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$e(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):$e(t,e)}))}}()}},[[90,1,2]]]);
//# sourceMappingURL=main.9a7a9cf5.chunk.js.map