"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3132],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78379:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return s},toc:function(){return m},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],u={title:"Deployment"},l=void 0,c={unversionedId:"modules/tubemq/tubemq-manager/quick_start",id:"modules/tubemq/tubemq-manager/quick_start",title:"Deployment",description:"All deploying files at inlong-tubemq-manager directory.",source:"@site/docs/modules/tubemq/tubemq-manager/quick_start.md",sourceDirName:"modules/tubemq/tubemq-manager",slug:"/modules/tubemq/tubemq-manager/quick_start",permalink:"/docs/next/modules/tubemq/tubemq-manager/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/tubemq/tubemq-manager/quick_start.md",tags:[],version:"current",frontMatter:{title:"Deployment"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/next/modules/tubemq/tubemq-manager/overview"},next:{title:"client partition assign",permalink:"/docs/next/modules/tubemq/client_partition_assign_introduction"}},s={},m=[{value:"Configuration",id:"configuration",level:2},{value:"Start",id:"start",level:2},{value:"Register TubeMQ cluster",id:"register-tubemq-cluster",level:2}],p={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All deploying files at ",(0,i.kt)("inlineCode",{parentName:"p"},"inlong-tubemq-manager")," directory."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create ",(0,i.kt)("inlineCode",{parentName:"li"},"tubemanager")," and account in MySQL."),(0,i.kt)("li",{parentName:"ul"},"Add mysql information in conf/application.properties:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"# mysql configuration for manager\nspring.datasource.url=jdbc:mysql://mysql_ip:mysql_port/tubemanager\nspring.datasource.username=mysql_username\nspring.datasource.password=mysql_password\n")),(0,i.kt)("h2",{id:"start"},"Start"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ bin/start-manager.sh \n")),(0,i.kt)("h2",{id:"register-tubemq-cluster"},"Register TubeMQ cluster"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"vim bin/init-tube-cluster.sh\n")),(0,i.kt)("p",null,"replace the parameters below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"TUBE_MANAGER_IP=  \nTUBE_MANAGER_PORT=   \nTUBE_MASTER_IP=   \nTUBE_MASTER_PORT=\nTUBE_MASTER_WEB_PORT=\nTUBE_MASTER_TOKEN=\n")),(0,i.kt)("p",null,"then run\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sh bin/init-tube-cluster.sh\n")),(0,i.kt)("p",null,"this will create a cluster with id = 1, note that this operation should not be executed repeatedly."))}d.isMDXComponent=!0}}]);