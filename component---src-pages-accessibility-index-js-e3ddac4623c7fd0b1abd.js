(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{233:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return l});var n=a(0),r=a.n(n),i=(a(22),a(243)),c=a(250),o=a.n(c);var s=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.markdownRemark;return r.a.createElement(i.a,{links:o.a,path:e.frontmatter.path,docOnGithub:e.frontmatter.id+".md",title:e.frontmatter.title,description:e.frontmatter.description},r.a.createElement("h1",null,e.frontmatter.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}))},n}(r.a.Component);t.default=s;var l="376863893"},243:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(107),c=a.n(i),o=a(22),s=a.n(o),l=a(58),u=a.n(l),m=(a(17),a(46)),p=a.n(m);a(223);var h=function(e){var t=p()("sidebar__title",{"sidebar__title--active":e.isSectionActive});return r.a.createElement("div",{className:"sidebar__section"},r.a.createElement("h3",{className:t,onClick:e.onSectionTitleClick},e.title),r.a.createElement(d,Object.assign({},e,{title:e.title})))},d=function(e){var t=p()("sidebar__items",{"sidebar__items--active":e.isSectionActive});return r.a.createElement("ul",{className:t},e.items.map(function(t,a){return r.a.createElement(v,{node:t,children:t.items,key:a,isChildActive:e.activeChild===t.items})}))},v=function e(t){var a=null;t.children&&(a=t.children.map(function(t,a){return r.a.createElement(e,{key:a,node:t,children:t.items})}));var n=t.node,i=p()("sidebar__sub-items",{"sidebar__sub-items--active":t.isChildActive});return r.a.createElement("li",{className:"sidebar__item",key:n.title},n.path?r.a.createElement(s.a,{to:n.path,activeClassName:"sidebar__link--active",className:"sidebar__link"},n.title):r.a.createElement("span",{className:"sidebar__link--disabled"},n.title),a?r.a.createElement("ul",{className:i},a):null)},f=function(e){var t,a;function n(t,a){var n;return(n=e.call(this,t,a)||this).state={activeSection:t.activeSection,activeChild:t.activeChild},n}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.toggleSection=function(e){var t=this;return function(a,n){a.preventDefault(),t.setState({activeSection:t.state.activeSection===e?null:e})}},i.render=function(){var e=this;return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"sidebar__wrapper"},r.a.createElement("div",{className:"sidebar__body"},this.props.links.map(function(t,a){return r.a.createElement(h,Object.assign({key:a},t,{title:t.title,onSectionTitleClick:e.toggleSection(t),isSectionActive:e.state.activeSection===t,activeChild:e.state.activeChild}))}))))},n}(r.a.Component);a(245),a(224);var _=function(e){var t=[];return e.items.map(function(e){t.push(r.a.createElement(b,Object.assign({key:e.title},e),e.title)),e.hasOwnProperty("items")&&e.items.map(function(e){t.push(r.a.createElement(b,Object.assign({key:e.title},e),"   ",e.title))})}),r.a.createElement("optgroup",{label:e.title},t)},b=function(e){return r.a.createElement("option",{value:e.path},e.children)},E=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={currentPath:t.currentPath},a.handleChange=a.handleChange.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.handleChange=function(e){this.setState({currentPath:e.target.value});var t=window.location.href=Object(o.withPrefix)(e.target.value);return"undefined"!=typeof window?t:"/"},i.render=function(){var e=this.props.links;return r.a.createElement("select",{className:"article-select",onChange:this.handleChange,value:this.state.currentPath},e.map(function(e,t){return r.a.createElement(_,Object.assign({key:t},e,{title:e.title}))}))},n}(r.a.Component),w=a(244),y=a.n(w);a(225);var k=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.slug=function(e){return(new y.a).slug(e)},i.render=function(){var e=this,t=this.props.headings;return r.a.createElement("div",{className:"toc"},r.a.createElement("div",{className:"toc-wrapper"},r.a.createElement("div",{className:"sidebar__body"},r.a.createElement("div",{className:"sidebar__section"},t&&t.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"sidebar__title sidebar__title--active"},"On this page"),r.a.createElement("ul",{className:"sidebar__items sidebar__items--active"},t.map(function(t){return r.a.createElement("li",{key:t.value,className:"sidebar__item"},r.a.createElement("a",{href:"#"+e.slug(t.value)},t.value))})))))))},n}(r.a.Component);a(226);var g=function(e,t){var a;return t.forEach(function(t){t.items.some(function(t){t.items&&(t.items.some(function(t){return e===Object(o.withPrefix)(t.path)})||e===Object(o.withPrefix)(t.path))&&(a=t.items)})}),a},N=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={voted:!1},a.handleVote=a.handleVote.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.handleVote=function(e){var t=this;return function(a){a.preventDefault(),t.setState({voted:!0}),window.ga&&window.ga("send","event","votes",e,window.location.pathname)}},i.render=function(){var e,t,a,n=this.props,i=n.links,s=n.path,l=n.title,m=(n.children,n.description),p=n.headings,h="undefined"!=typeof window?window.location.pathname:Object(o.withPrefix)(s);return r.a.createElement("div",{className:"article"},r.a.createElement(c.a,{title:l+" | "+u.a.siteMetadata.title,meta:[m?{name:"description",content:m}:{}]}),r.a.createElement(f,{activeSection:(e=h,t=i,t.forEach(function(t){t.items.some(function(t){return e===Object(o.withPrefix)(t.path)||t.items&&t.items.some(function(t){return e===Object(o.withPrefix)(t.path)})})&&(a=t)}),a),activeChild:g(h,i),links:i}),r.a.createElement("article",{className:"article__inner"},r.a.createElement(E,{links:i,currentPath:h}),this.props.children,this.props.docOnGithub?r.a.createElement("div",{className:"footer__inner"},r.a.createElement("div",{className:"footer-row"},r.a.createElement("div",{className:"footer-column footer-column--left"},r.a.createElement("div",{className:"footer-column-block"},r.a.createElement("a",{href:"https://github.com/Hacker0x01/docs.hackerone.com/blob/master/docs/"+this.props.docOnGithub},"Edit this page on GitHub"))),r.a.createElement("div",{className:"footer-column footer-column--center"},r.a.createElement("div",{className:"footer-column-block"},this.state.voted?r.a.createElement("span",null,"Thanks for your feedback!"):r.a.createElement("span",null,"Was this article helpful?"," ",r.a.createElement("a",{href:"",onClick:this.handleVote("up"),className:"upvote upvote--up"},"👍")," ",r.a.createElement("a",{href:"",onClick:this.handleVote("down"),className:"upvote upvote--down"},"👎")))),r.a.createElement("div",{className:"footer-column footer-column--right"},r.a.createElement("div",{className:"footer-column-block"},r.a.createElement("a",{href:"https://www.hackerone.com",target:"_blank"},"Back to HackerOne"))))):null),r.a.createElement(k,{headings:p}))},n}(r.a.Component);t.a=N},250:function(e,t){e.exports=[{title:"Accessibility",items:[{title:"VPAT",path:"/accessibility/vpat.html"}]}]}}]);
//# sourceMappingURL=component---src-pages-accessibility-index-js-e3ddac4623c7fd0b1abd.js.map