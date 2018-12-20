(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{191:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("Router and Nav are the key skeleton for organizing a management system.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("First let us know what configuration items are provided config route.")]),t._v(" "),t._m(3),e("br"),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("p",[e("strong",[t._v("asyncRouterMap:")]),t._v(" represents pages that require dynamic judgment permissions and are dynamically added through "),e("code",[t._v("addRouters")]),t._v(". The details will be introduced on the "),e("router-link",{attrs:{to:"./permission.html"}},[t._v("permission")]),t._v(".")],1),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("All routing pages here use the "),e("code",[t._v("router lazy loading")]),t._v(", as described in "),e("router-link",{attrs:{to:"/guide/advanced/lazy-loading.html"}},[t._v("document")])],1),t._v(" "),e("p",[t._v("If you want to know more about browserHistory and hashHistory, please refer to "),e("router-link",{attrs:{to:"./deploy.html"}},[t._v("Build & Deploy")]),t._v(".")],1)]),t._v(" "),e("p",[t._v("The other configurations are no different from the "),e("a",{attrs:{href:"https://router.vuejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-router"),e("OutboundLink")],1),t._v(" official, so check the documentation for yourself.")]),t._v(" "),e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("There is one thing to be careful about is that the 404 page must be the last to load, if it is declared in constantRouterMap. Later declared pages will be blocked to 404, see the details of the problem: "),e("a",{attrs:{href:"https://github.com/vuejs/vue-router/issues/1176",target:"_blank",rel:"noopener noreferrer"}},[t._v("addRoutes when you've got a wildcard route for 404s does not work"),e("OutboundLink")],1)])]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),e("p",[t._v("Also introduced in the front, the sidebar is generated dynamically by reading the route and combined with the permission judge, but also need to support the infinite nesting of routes, so here is also used to the recursive components.")]),t._v(" "),e("blockquote",[e("p",[t._v("Code: "),e("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/tree/master/src/views/layout/components/Sidebar",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/views/layout/components/Sidebar"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("This also modify many default sidebar styles of "),e("code",[t._v("element-ui")]),t._v(". All css can be found in "),e("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/styles/sidebar.scss",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/styles/sidebar.scss"),e("OutboundLink")],1),t._v(" and can be modified to suit your needs.")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),e("p",[t._v("Before using the development model of spa(single page application), each time the user clicks the sidebar will request this page again, the user gradually developed the habit of clicking the current route in the sidebar to refresh the view. But now the spa is not the same, the user clicks the currently highlighted route and does not refresh the view, because the vue-router will intercept your routing, it determines your url does not change, so it will not trigger any hook or view changes."),e("a",{attrs:{href:"https://github.com/vuejs/vue-router/issues/296",target:"_blank",rel:"noopener noreferrer"}},[t._v("Related issue"),e("OutboundLink")],1),t._v(", the community has also heated discussions on the issue.")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),e("p",[t._v("You can know from the previous issue that there are many other options. In my company project, the solution adopted is to determine whether the currently clicked menu route is consistent with the current route. However, when it is consistent, it will jump to a dedicated Redirect page, which will redirect the route to Go to the page, this will have a refresh effect.")]),t._v(" "),e("br"),t._v(" "),t._m(21),t._v(" "),e("p",[t._v("This project also packages a breadcrumb navigation, which is also dynamically generated by the watch $route change. It is the same with the menu, you can also config it in the routing. You can also add some custom attributes to your business needs in route.meta attr.")]),t._v(" "),t._m(22),t._v(" "),e("blockquote",[e("p",[t._v("Corresponding code: "),e("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/Breadcrumb/index.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/components/Breadcrumb"),e("OutboundLink")],1)])]),t._v(" "),t._m(23),t._v(" "),e("p",[t._v("Previous versions of scroll were handled with css")]),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("Code")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/views/layout/components/Sidebar/index.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/components/Sidebar"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"sidebar-external-link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sidebar-external-link","aria-hidden":"true"}},[t._v("#")]),t._v(" Sidebar external-link "),e("Badge",{attrs:{text:"v3.8.2+"}})],1),t._v(" "),t._m(27),t._v(" "),e("p",[t._v("E.g.")]),t._v(" "),t._m(28)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"router-and-nav"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router-and-nav","aria-hidden":"true"}},[this._v("#")]),this._v(" Router and Nav")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This project router and nav are bound together, so you only have to configure the route under "),s("code",[this._v("@/router/index.js")]),this._v(" and the sidebar nav will be dynamically generated automatically. This greatly reduces the workload of manually editing the sidebar nav. Of course, so you need to follow many conventions in configuring the route.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config","aria-hidden":"true"}},[this._v("#")]),this._v(" Config")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if set to true, lt will not appear in sidebar nav.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// e.g. login or 401 page or as some editing pages /edit/1 (Default: false)")]),t._v("\nhidden"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this route cannot be clicked in breadcrumb navigation when noredirect is set")]),t._v("\nredirect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" noredirect\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// when you route a children below the declaration of more than one route,")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// it will automatically become a nested mode - such as the component page")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// when there is only one, the child route will be displayed as the root route")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if you want to display your root route")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// regardless of the number of children declarations under the route")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// you can set alwaysShow: true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// so that it will ignore the previously defined rules and always show the root route")]),t._v("\nalwaysShow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set router name. It must be set，in order to avoid problems with <keep-alive>.")]),t._v("\nname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'router-name'")]),t._v("\n\nmeta"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// required roles to navigate to this route. Support multiple permissions stacking.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if not set means it doesn't need any permission.")]),t._v("\n  roles"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'editor'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the title of the route to show in various components (e.g. sidebar, breadcrumbs).")]),t._v("\n  title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// svg icon class")]),t._v("\n  icon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'svg-name'")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// when set true, the route will not be cached by <keep-alive>. Default false")]),t._v("\n  noCache"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Example：")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/permission'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Layout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  redirect"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/permission/index'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hidden"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  alwaysShow"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" roles"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'editor'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// you can set roles in root nav")]),t._v("\n  children"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("_import")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'permission/index'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'permission'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    meta"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'permission'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      icon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lock'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      roles"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'admin'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'editor'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or you can only set roles in sub nav")]),t._v("\n      noCache"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"router"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#router","aria-hidden":"true"}},[this._v("#")]),this._v(" Router")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("There are two types of routes here , "),s("code",[this._v("constantRouterMap")]),this._v(" and "),s("code",[this._v("asyncRouterMap")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("constantRouterMap:")]),this._v(" represents routes that do not require dynamic access, such as login page, 404, general page, and so on.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"sidebar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sidebar","aria-hidden":"true"}},[this._v("#")]),this._v(" Sidebar")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The project sidebar is mainly based on the "),s("code",[this._v("el-menu")]),this._v(" of element-ui.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("Here need to pay attention")]),this._v(". The general sidebar has two forms, "),s("code",[this._v("submenu")]),this._v(" and"),s("code",[this._v("el-menu-item")]),this._v(". One is a nested submenu, the other is a direct link. As shown below:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://wpimg.wallstcn.com/e94739d6-d701-45c8-8c6e-0f4bb10c3b46.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The sidebar has already helped you to make a judgment. When you route a children below the declaration of more than >1 routes, it will automatically become a nested mode. If the sub-route is exactly equal to one, the sub-route is displayed as a root route in the sidebar by default. If you do not want to, you can disable this feature by setting "),s("code",[this._v("alwaysShow: true")]),this._v(" in the root route. Such as:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// no submenu, because children.length===1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/icon'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Layout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'svg-icons/index'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'icons'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    meta"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'icons'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" icon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'icon'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// has submenu, because children.length>=1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/components'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Layout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'component-demo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'components'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    icon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'component'")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  children"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tinymce'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'components-demo/tinymce'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tinymce-demo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meta"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tinymce'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'components-demo/markdown'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-demo'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meta"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"click-the-sidebar-to-refresh-the-current-route"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#click-the-sidebar-to-refresh-the-current-route","aria-hidden":"true"}},[this._v("#")]),this._v(" Click the sidebar to refresh the current route")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://wpimg.wallstcn.com/5d0b0391-ea6a-45f2-943e-aff5dbe74d12.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("yyx990803")]),this._v("also said that he wanted to add a way to brighten the view, but later he changed his mind again/(ㄒ o ㄒ)/~~ But demand is here, what should we do? He said it would not trigger anything without changing the current URL, so can I force the trigger? The hack is simple. By changing the url query to trigger the view changes。We listen to each link's click event on the sidebar, each click will push a different query for the router to ensure that the view is refreshed.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("clickLink")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Ensure that each click, query is not the same")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//to ensure that refresh the view")]),t._v("\n      t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("ps: Don't forget to add a unique "),s("code",[this._v("key")]),this._v(" to "),s("code",[this._v("router-view")]),this._v(", such as "),s("code",[this._v('<router-view :key="$route.path"></router-view>')]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("But there's also a drawback the ugly "),s("code",[this._v("query")]),this._v(" suffix behind url, such as "),s("code",[this._v("xxx.com/article/list?t=1496832345025")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"breadcrumb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumb","aria-hidden":"true"}},[this._v("#")]),this._v(" Breadcrumb")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://wpimg.wallstcn.com/4c60b3fc-febd-4e22-9150-724dcbd25a8e.gif",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"sidebar-scroll-problem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sidebar-scroll-problem","aria-hidden":"true"}},[this._v("#")]),this._v(" Sidebar scroll problem")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow-y")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" scroll"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(";\n\n::-webkit-scrollbar")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("But hack by css has some problems, in Firefox or other lower versions of the browser will be less beautiful.\nSecond, in the case of sidebar collapses, limited to "),s("code",[this._v("menu")]),this._v(" of"),s("code",[this._v("element-ui")]),this._v(", can not be handled in this way.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("So the current version uses "),s("code",[this._v("el-scrollbar")]),this._v(" to handle the sidebar scrolling problem.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("You can also configure an external-link in the sidebar. As long as you fill in the legal url path in "),s("code",[this._v("path")]),this._v(", you will be able to open this page when you click on the sidebar.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"external-link"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"component"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Layout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"children"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://github.com/PanJiaChen/vue-element-admin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"meta"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"externalLink"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"icon"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"link"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);a.options.__file="router-and-nav.md";s.default=a.exports}}]);