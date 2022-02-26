"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7466],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),g=p(n),c=r,m=g["".concat(o,".").concat(c)]||g[c]||u[c]||l;return n?a.createElement(m,i(i({ref:e},d),{},{components:n})):a.createElement(m,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=g;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},49711:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},assets:function(){return d},toc:function(){return u},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],s={title:"TubeMQ\u7f16\u8bd1\u3001\u90e8\u7f72\u53ca\u7b80\u5355\u4f7f\u7528"},o=void 0,p={unversionedId:"modules/tubemq/deployment",id:"version-0.11.0/modules/tubemq/deployment",title:"TubeMQ\u7f16\u8bd1\u3001\u90e8\u7f72\u53ca\u7b80\u5355\u4f7f\u7528",description:"1 \u5de5\u7a0b\u7f16\u8bd1\u6253\u5305\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/modules/tubemq/deployment.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/deployment",permalink:"/zh-CN/docs/0.11.0/modules/tubemq/deployment",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.11.0/modules/tubemq/deployment.md",tags:[],version:"0.11.0",frontMatter:{title:"TubeMQ\u7f16\u8bd1\u3001\u90e8\u7f72\u53ca\u7b80\u5355\u4f7f\u7528"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"\u6d88\u8d39\u8005\u793a\u4f8b",permalink:"/zh-CN/docs/0.11.0/modules/tubemq/consumer_example"},next:{title:"\u9519\u8bef\u7801\u5b9a\u4e49",permalink:"/zh-CN/docs/0.11.0/modules/tubemq/error_code"}},d={},u=[{value:"1 \u5de5\u7a0b\u7f16\u8bd1\u6253\u5305\uff1a",id:"1-\u5de5\u7a0b\u7f16\u8bd1\u6253\u5305",level:2},{value:"2 \u90e8\u7f72\u670d\u52a1\u7aef\uff1a",id:"2-\u90e8\u7f72\u670d\u52a1\u7aef",level:2},{value:"3 \u914d\u7f6e\u7cfb\u7edf\uff1a",id:"3-\u914d\u7f6e\u7cfb\u7edf",level:2},{value:"4 \u8fd0\u884c\u8282\u70b9",id:"4-\u8fd0\u884c\u8282\u70b9",level:2},{value:"4.1 \u542f\u52a8Master\uff1a",id:"41-\u542f\u52a8master",level:3},{value:"4.2 \u542f\u52a8Broker\uff1a",id:"42-\u542f\u52a8broker",level:3},{value:"5 \u6570\u636e\u751f\u4ea7\u548c\u6d88\u8d39",id:"5-\u6570\u636e\u751f\u4ea7\u548c\u6d88\u8d39",level:2},{value:"5.1 \u914d\u7f6e\u53ca\u751f\u6548Topic\uff1a",id:"51-\u914d\u7f6e\u53ca\u751f\u6548topic",level:3},{value:"5.2 \u6570\u636e\u751f\u4ea7\u548c\u6d88\u8d39\uff1a",id:"52-\u6570\u636e\u751f\u4ea7\u548c\u6d88\u8d39",level:3}],g={toc:u};function c(t){var e=t.components,s=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},g,s,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1-\u5de5\u7a0b\u7f16\u8bd1\u6253\u5305"},"1 \u5de5\u7a0b\u7f16\u8bd1\u6253\u5305\uff1a"),(0,l.kt)("p",null,"\u8fdb\u5165\u5de5\u7a0b\u6839\u76ee\u5f55,\u6267\u884c\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mvn clean package -Dmaven.test.skip\n")),(0,l.kt)("p",null,"\u4f8b\u5982\u5c06TubeMQ\u6e90\u7801\u5305\u653e\u5728E\u76d8\u6839\u76ee\u5f55\uff0c\u6309\u7167\u5982\u4e0b\u65b9\u5f0f\u6267\u884c\u4e0a\u8ff0\u547d\u4ee4\uff0c\u5f53\u5404\u4e2a\u5b50\u76ee\u5f55\u90fd\u7f16\u8bd1\u6210\u529f\u65f6\u5de5\u7a0b\u7f16\u8bd1\u5b8c\u6210\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(24800).Z,width:"735",height:"360"})),(0,l.kt)("p",null,"\u5927\u5bb6\u4e5f\u53ef\u4ee5\u8fdb\u5165\u5404\u4e2a\u5b50\u76ee\u5f55\u8fdb\u884c\u5355\u72ec\u7f16\u8bd1\uff0c\u7f16\u8bd1\u8fc7\u7a0b\u4e0e\u666e\u901a\u7684\u5de5\u7a0b\u7f16\u8bd1\u5904\u7406\u8fc7\u7a0b\u4e00\u81f4\u3002"),(0,l.kt)("h2",{id:"2-\u90e8\u7f72\u670d\u52a1\u7aef"},"2 \u90e8\u7f72\u670d\u52a1\u7aef\uff1a"),(0,l.kt)("p",null,"\u5982\u4e0a\u4f8b\u5b50\uff0c\u8fdb\u5165..\\InLong\\inlong-tubemq\\tubemq-server\\target\u76ee\u5f55\uff0c\u670d\u52a1\u4fa7\u7684\u76f8\u5173\u5185\u5bb9\u5982\u4e0b\uff0c\u5176\u4e2dapache-inlong-tubemq-server-0.9.0-incubating-SNAPSHOT-bin.tar.gz\u4e3a\u5b8c\u6574\u7684\u670d\u52a1\u7aef\u5b89\u88c5\u5305\uff0c\u91cc\u9762\u5305\u62ec\u6267\u884c\u811a\u672c\uff0c\u914d\u7f6e\u6587\u4ef6\uff0c\u4f9d\u8d56\u5305\uff0c\u4ee5\u53ca\u524d\u7aef\u7684\u6e90\u7801\uff1bapache-inlong-tubemq-server-0.9.0-incubating-SNAPSHOT.jar\u4e3a\u670d\u52a1\u7aef\u5904\u7406\u903b\u8f91\u5305\uff0c\u5305\u542b\u4e8e\u5b8c\u6574\u5de5\u7a0b\u5b89\u88c5\u5305\u7684lib\u91cc\uff0c\u5355\u72ec\u63d0\u51fa\u662f\u8003\u8651\u5230\u65e5\u5e38\u53d8\u66f4\u5347\u7ea7\u65f6\u6539\u52a8\u70b9\u591a\u5728\u670d\u52a1\u5668\u5904\u7406\u903b\u8f91\u4e0a\uff0c\u5347\u7ea7\u7684\u65f6\u5019\u53ea\u9700\u8981\u5355\u72ec\u66ff\u6362\u8be5jar\u5305\u5373\u53ef\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(55839).Z,width:"1390",height:"411"})),(0,l.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u662f\u5168\u65b0\u5b89\u88c5\uff0c\u5c06\u4e0a\u8ff0\u5b8c\u6574\u7684\u5de5\u7a0b\u5b89\u88c5\u5305\u90e8\u7f72\u5230\u5f85\u5b89\u88c5\u673a\u5668\u4e0a\uff0c\u6211\u4eec\u8fd9\u91cc\u662f\u653e\u7f6e\u5728/data/inlong\u76ee\u5f55\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(130).Z,width:"900",height:"222"})),(0,l.kt)("h2",{id:"3-\u914d\u7f6e\u7cfb\u7edf"},"3 \u914d\u7f6e\u7cfb\u7edf\uff1a"),(0,l.kt)("p",null,"\u670d\u52a1\u5305\u91cc\u6253\u5305\u4e863\u79cd\u89d2\u8272\uff1aMaster\u3001Broker\u3001Tools\uff0c\u4e1a\u52a1\u4f7f\u7528\u65f6\u53ef\u4ee5\u5c06Master\u548cBroker\u653e\u7f6e\u5728\u4e00\u8d77\uff0c\u4e5f\u53ef\u4ee5\u5355\u72ec\u5206\u5f00\u4e0d\u540c\u673a\u5668\u653e\u7f6e\uff0c\u4f9d\u7167\u4e1a\u52a1\u5bf9\u673a\u5668\u7684\u89c4\u5212\u8fdb\u884c\u5904\u7406\u3002\u6211\u4eec\u901a\u8fc7\u5982\u4e0b3\u53f0\u673a\u5668\u642d\u5efa\u4e00\u4e2a\u5b8c\u6574\u7684\u67092\u53f0Master\u7684\u751f\u4ea7\u3001\u6d88\u8d39\u73af\u5883\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u673a\u5668"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6240\u5c5e\u89d2\u8272"),(0,l.kt)("th",{parentName:"tr",align:null},"TCP\u7aef\u53e3"),(0,l.kt)("th",{parentName:"tr",align:null},"TLS\u7aef\u53e3"),(0,l.kt)("th",{parentName:"tr",align:null},"WEB\u7aef\u53e3"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9.23.27.24"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Master")),(0,l.kt)("td",{parentName:"tr",align:null},"8099"),(0,l.kt)("td",{parentName:"tr",align:null},"8199"),(0,l.kt)("td",{parentName:"tr",align:null},"8080"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5143\u6570\u636e\u5b58\u50a8\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"/stage/meta_data"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Broker"),(0,l.kt)("td",{parentName:"tr",align:null},"8123"),(0,l.kt)("td",{parentName:"tr",align:null},"8124"),(0,l.kt)("td",{parentName:"tr",align:null},"8081"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u50a8\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"/stage/msg_data"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"ZooKeeper"),(0,l.kt)("td",{parentName:"tr",align:null},"2181"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Offset\u50a8\u5b58\u5728\u6839\u76ee\u5f55",(0,l.kt)("inlineCode",{parentName:"td"},"/tubemq"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9.23.28.24"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Master")),(0,l.kt)("td",{parentName:"tr",align:null},"8099"),(0,l.kt)("td",{parentName:"tr",align:null},"8199"),(0,l.kt)("td",{parentName:"tr",align:null},"8080"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5143\u6570\u636e\u5b58\u50a8\u5728 ",(0,l.kt)("inlineCode",{parentName:"td"},"/stage/meta_data"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Broker"),(0,l.kt)("td",{parentName:"tr",align:null},"8123"),(0,l.kt)("td",{parentName:"tr",align:null},"8124"),(0,l.kt)("td",{parentName:"tr",align:null},"8081"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u50a8\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"td"},"/stage/msg_data"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9.23.27.160"),(0,l.kt)("td",{parentName:"tr",align:null},"Producer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Consumer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"|\n\u90e8\u7f72Master\u65f6\u9700\u8981\u6ce8\u610f\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u90e8\u7f72Master\u7684\u673a\u5668\uff0cMaster\u96c6\u7fa4\u53ef\u4ee5\u90e8\u7f721\u53f0\u30012\u53f0\u6216\u80053\u53f0\uff1a\u5982\u679c\u8981\u4fdd\u8bc1\u9ad8\u53ef\u9760\u5efa\u8bae3\u53f0\uff08\u4efb\u610f\u574f1\u53f0Master\u5bf9\u5916\u4ecd\u7136\u53ef\u8bfb\u5199\u914d\u7f6e\u53ca\u63a5\u5165\u65b0\u7684\u751f\u4ea7\u6216\u8005\u6d88\u8d39\uff09\uff0c\u5982\u679c\u53ea\u9700\u8981\u4fdd\u8bc1\u4e00\u822c\u60c5\u51b52\u53f0\uff08\u4efb\u610f\u574f1\u53f0Master\u5bf9\u5916\u4ecd\u7136\u53ef\u8bfb\u914d\u7f6e\u53ca\u5df2\u63a5\u5165\u7684\u751f\u4ea7\u548c\u6d88\u8d39\u4e0d\u53d7\u5f71\u54cd\uff09\uff0c\u6700\u4f4e1\u53f0\uff08\u574f1\u53f0Master\u5bf9\u5916\u914d\u7f6e\u4e0d\u53ef\u8bfb\u5199\u53ca\u5df2\u63a5\u5165\u7684\u751f\u4ea7\u548c\u6d88\u8d39\u4e0d\u53d7\u5f71\u54cd\uff09\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u5b8c\u6210Master\u7684\u89c4\u5212\u540e\uff0c\u5bf9\u4e8e\u914d\u7f6eMaster\u7684\u673a\u5668\uff0c\u9700\u8981\u5c06Master\u6240\u5728\u673a\u5668\u52a0\u5165\u65f6\u95f4\u540c\u6b65\uff0c\u540c\u65f6Master\u5404\u4e2a\u673a\u5668\u7684IP\u8981\u5728\u5404\u4e2aMaster\u673a\u5668\u7684/etc/hosts\u914d\u7f6e\u91cc\u8fdb\u884c\u8bbe\u7f6e\uff0c\u5982\uff1a")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(78916).Z,width:"383",height:"73"})),(0,l.kt)("p",null,"\u4ee59.23.27.24\u548c9.23.28.24\u4e3a\u4f8b\uff0c\u6211\u4eec\u90e8\u7f72\u4e86Master\u548cBroker\u4e24\u79cd\u89d2\u8272\uff0c\u9700\u8981\u5728/conf/master.ini\uff0c/resources/velocity.properties\uff0c/conf/broker.ini\u91cc\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e\uff0c\u9996\u5148\u662f9.23.27.24\u7684\u914d\u7f6e\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(24077).Z,width:"1294",height:"1000"})),(0,l.kt)("p",null,"\u7136\u540e\u662f\u914d\u7f6e9.23.28.24\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(53231).Z,width:"1356",height:"999"})),(0,l.kt)("p",null,"\u8981\u6ce8\u610f\u7684\u662f\u53f3\u4e0a\u89d2\u7684\u914d\u7f6e\u4e3aMaster\u7684Web\u524d\u53f0\u914d\u7f6e\u4fe1\u606f\uff0c\u9700\u8981\u6839\u636eMaster\u7684\u5b89\u88c5\u8def\u5f84\u4fee\u6539/resources/velocity.properties\u91cc\u7684file.resource.loader.path\u4fe1\u606f\u3002"),(0,l.kt)("h2",{id:"4-\u8fd0\u884c\u8282\u70b9"},"4 \u8fd0\u884c\u8282\u70b9"),(0,l.kt)("h3",{id:"41-\u542f\u52a8master"},"4.1 \u542f\u52a8Master\uff1a"),(0,l.kt)("p",null,"\u5b8c\u6210\u5982\u4e0a\u914d\u7f6e\u8bbe\u7f6e\u540e\uff0c\u9996\u5148\u8fdb\u5165\u4e3b\u5907Master\u6240\u5728\u7684TubeMQ\u73af\u5883\u7684bin\u76ee\u5f55\uff0c\u8fdb\u884c\u670d\u52a1\u542f\u52a8\u64cd\u4f5c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(34520).Z,width:"1000",height:"182"})),(0,l.kt)("p",null,"\u6211\u4eec\u9996\u5148\u542f\u52a89.23.27.24\uff0c\u7136\u540e\u542f\u52a89.23.28.24\u4e0a\u7684Master\uff0c\u5982\u4e0b\u6253\u5370\u53ef\u4ee5\u8868\u793a\u4e3b\u5907Master\u90fd\u5df2\u542f\u52a8\u6210\u529f\u5e76\u5f00\u542f\u4e86\u5bf9\u5916\u670d\u52a1\u7aef\u53e3\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(36303).Z,width:"1556",height:"385"})),(0,l.kt)("p",null,"\u8bbf\u95eeMaster\u7684\u7ba1\u63a7\u53f0(",(0,l.kt)("a",{parentName:"p",href:"http://9.23.27.24:8080"},"http://9.23.27.24:8080")," )\uff0c\u70b9\u51fb\u9875\u9762\u53ef\u4ee5\u67e5\u770b\u5230\u5982\u4e0b\u96c6\u7fa4\u4fe1\u606f\uff0c\u5219\u8868\u793amaster\u5df2\u6210\u529f\u542f\u52a8\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(60315).Z,width:"1874",height:"390"})),(0,l.kt)("h3",{id:"42-\u542f\u52a8broker"},"4.2 \u542f\u52a8Broker\uff1a"),(0,l.kt)("p",null,"\u542f\u52a8Broker\u548c\u542f\u52a8master\u6709\u4e9b\u5dee\u522b\uff1aMaster\u8d1f\u8d23\u7ba1\u7406\u6574\u4e2aTubeMQ\u96c6\u7fa4\uff0c\u5305\u62ecBroker\u8282\u70b9\u8fd0\u884c\u7ba1\u7406\u4ee5\u53ca\u8282\u70b9\u4e0a\u90e8\u7f72\u7684Topic\u914d\u7f6e\u7ba1\u7406\uff0c\u8fd8\u6709\u751f\u4ea7\u548c\u6d88\u8d39\u7ba1\u7406\u7b49\uff0c\u56e0\u6b64\uff0c\u5b9e\u4f53\u7684Broker\u542f\u52a8\u524d\uff0c\u9996\u5148\u8981\u5728Master\u4e0a\u914d\u7f6eBroker\u5143\u6570\u636e\uff0c\u589e\u52a0Broker\u76f8\u5173\u7684\u7ba1\u7406\u4fe1\u606f\uff0c\u5982\u4e0b\u56fe\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(63039).Z,width:"1901",height:"834"})),(0,l.kt)("p",null,"\u70b9\u51fb\u786e\u8ba4\u540e\u5f62\u6210\u4e00\u4e2a\u8349\u7a3f\u7684Broker\u8bb0\u5f55\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(95560).Z,width:"1893",height:"424"})),(0,l.kt)("p",null,"\u6211\u4eec\u5bf9\u8be5broker\u8282\u70b9\u8fdb\u884c\u542f\u52a8\u64cd\u4f5c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(64366).Z,width:"1160",height:"203"})),(0,l.kt)("p",null,"\u7ed3\u679c\u53d1\u73b0\u62a5\u9519\u4fe1\u606f\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(75130).Z,width:"1920",height:"233"})),(0,l.kt)("p",null,"\u56e0\u4e3a\u8be5broker\u76ee\u524d\u8fd8\u5904\u5728\u8349\u7a3f\u72b6\u6001Broker\u4fe1\u606f\u6ca1\u6709\u6b63\u5f0f\u751f\u6548\uff0c\u6211\u4eec\u56de\u5230Master\u7ba1\u63a7\u53f0\u8fdb\u884c\u4e0a\u7ebf\u751f\u6548\u64cd\u4f5c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(37510).Z,width:"1887",height:"767"})),(0,l.kt)("p",null,"Master\u4e0a\u6240\u6709\u7684\u53d8\u66f4\u64cd\u4f5c\u5728\u70b9\u51fb\u786e\u8ba4\u7684\u65f6\u5019\uff0c\u90fd\u4f1a\u5f39\u51fa\u5982\u4e0a\u8f93\u5165\u6846\uff0c\u8981\u6c42\u8f93\u5165\u64cd\u4f5c\u6388\u6743\u7801\u3002\u8be5\u4fe1\u606f\u7531\u8fd0\u7ef4\u901a\u8fc7Master\u7684\u914d\u7f6e\u6587\u4ef6master.ini\u7684confModAuthToken\u5b57\u6bb5\u8fdb\u884c\u5b9a\u4e49\uff1a\u5982\u679c\u4f60\u77e5\u9053\u8fd9\u4e2a\u96c6\u7fa4\u7684\u5bc6\u7801\uff0c\u4f60\u5c31\u53ef\u4ee5\u8fdb\u884c\u8be5\u9879\u64cd\u4f5c\uff0c\u6bd4\u5982\u4f60\u662f\u7ba1\u7406\u5458\uff0c\u4f60\u662f\u6388\u6743\u4eba\u5458\uff0c\u6216\u8005\u4f60\u80fd\u767b\u9646\u8fd9\u4e2amaster\u7684\u673a\u5668\u62ff\u5230\u8fd9\u4e2a\u5bc6\u7801\uff0c\u90fd\u8ba4\u4e3a\u4f60\u662f\u6709\u6743\u64cd\u4f5c\u8be5\u9879\u529f\u80fd\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(32653).Z,width:"1913",height:"432"})),(0,l.kt)("p",null,"\u7136\u540e\u6211\u4eec\u518d\u91cd\u542fBroker\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(56559).Z,width:"1166",height:"92"})),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(49741).Z,width:"1919",height:"314"})),(0,l.kt)("p",null,"\u67e5\u770bMaster\u7ba1\u63a7\u53f0\uff0cbroker\u5df2\u7ecf\u6ce8\u518c\u6210\u529f\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(78572).Z,width:"1915",height:"435"})),(0,l.kt)("h2",{id:"5-\u6570\u636e\u751f\u4ea7\u548c\u6d88\u8d39"},"5 \u6570\u636e\u751f\u4ea7\u548c\u6d88\u8d39"),(0,l.kt)("h3",{id:"51-\u914d\u7f6e\u53ca\u751f\u6548topic"},"5.1 \u914d\u7f6e\u53ca\u751f\u6548Topic\uff1a"),(0,l.kt)("p",null,"\u914d\u7f6eTopic\u548c\u914d\u7f6eBroker\u4fe1\u606f\u7c7b\u4f3c\uff0c\u90fd\u9700\u8981\u5148\u5728Master\u4e0a\u65b0\u589e\u5143\u6570\u636e\u4fe1\u606f\uff0c\u7136\u540e\u624d\u80fd\u5f00\u59cb\u4f7f\u7528\uff0c\u8981\u4e0d\u751f\u4ea7\u548c\u6d88\u8d39\u65f6\u5019\u4f1a\u62a5topic\u4e0d\u5b58\u5728\u9519\u8bef\uff0c\u5982\u6211\u4eec\u7528\u5b89\u88c5\u5305\u91cc\u7684example\u5bf9\u4e0d\u5b58\u5728\u7684Topic\u540dtest\u8fdb\u884c\u751f\u4ea7\uff1a\n",(0,l.kt)("img",{loading:"lazy",src:n(877).Z,width:"1716",height:"254"})),(0,l.kt)("p",null,"Demo\u5b9e\u4f8b\u4f1a\u62a5\u5982\u4e0b\u9519\u8bef\u4fe1\u606f\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(97035).Z,width:"1920",height:"534"})),(0,l.kt)("p",null,"\u6211\u4eec\u5728Master\u7ba1\u63a7\u53f0\u7684Topic\u5217\u8868\u4e0a\u52a0\u5165\u8be5Topic\u5148\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(40109).Z,width:"1910",height:"764"})),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(51031).Z,width:"1918",height:"762"})),(0,l.kt)("p",null,"\u70b9\u51fb\u786e\u8ba4\u540e\u4f1a\u6709\u4e00\u4e2a\u9009\u62e9\u90e8\u7f72\u8be5\u65b0\u589eTopic\u7684Broker\u5217\u8868\uff0c\u9009\u62e9\u90e8\u7f72\u8303\u56f4\u540e\u8fdb\u884c\u786e\u8ba4\u64cd\u4f5c\uff1b\u5728\u5b8c\u6210\u65b0\u589eTopic\u7684\u64cd\u4f5c\u540e\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5bf9\u521a\u8fdb\u884c\u53d8\u66f4\u7684\u914d\u7f6e\u5bf9Broker\u8fdb\u884c\u91cd\u8f7d\u64cd\u4f5c\uff0c\u5982\u4e0b\u56fe\u793a\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(87227).Z,width:"1910",height:"439"})),(0,l.kt)("p",null,"\u91cd\u8f7d\u5b8c\u6210\u540eTopic\u624d\u80fd\u5bf9\u5916\u4f7f\u7528\uff0c\u6211\u4eec\u4f1a\u53d1\u73b0\u5982\u4e0b\u914d\u7f6e\u53d8\u66f4\u90e8\u5206\u5728\u91cd\u542f\u5b8c\u6210\u540e\u5df2\u6539\u53d8\u72b6\u6001\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(66330).Z,width:"1909",height:"446"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5927\u5bb6\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a")," \u6211\u4eec\u5728\u91cd\u8f7d\u7684\u65f6\u5019\uff0c\u8981\u5bf9\u5f85\u91cd\u8f7d\u7684Broker\u96c6\u5408\u5206\u6279\u6b21\u8fdb\u884c\u3002\u6211\u4eec\u7684\u91cd\u8f7d\u901a\u8fc7\u72b6\u6001\u673a\u8fdb\u884c\u63a7\u5236\uff0c\u4f1a\u5148\u8fdb\u884c\u4e0d\u53ef\u8bfb\u5199\u2014\u3009\u53ea\u8bfb\u64cd\u4f5c\u2014\u3009\u53ef\u8bfb\u5199\u2014\u3009\u4e0a\u7ebf\u8fd0\u884c\u5404\u4e2a\u5b50\u72b6\u6001\u5904\u7406\uff0c\u5982\u679c\u6240\u6709\u5f85\u91cd\u542fBroker\u5168\u91cf\u91cd\u8f7d\uff0c\u4f1a\u4f7f\u5f97\u5df2\u5728\u7ebf\u5bf9\u5916\u670d\u52a1\u7684Topic\u5bf9\u5916\u51fa\u73b0\u77ed\u6682\u7684\u4e0d\u53ef\u8bfb\u5199\u72b6\u51b5\uff0c\u4f7f\u5f97\u751f\u4ea7\u3001\u6d88\u8d39\uff0c\u7279\u522b\u662f\u751f\u4ea7\u53d1\u9001\u5931\u8d25\u3002"),(0,l.kt)("h3",{id:"52-\u6570\u636e\u751f\u4ea7\u548c\u6d88\u8d39"},"5.2 \u6570\u636e\u751f\u4ea7\u548c\u6d88\u8d39\uff1a"),(0,l.kt)("p",null,"\u5728\u5b89\u88c5\u5305\u91cc\uff0c\u6211\u4eec\u6253\u5305\u4e86example\u7684\u6d4b\u8bd5Demo\uff0c\u4e1a\u52a1\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528tubemq-client-0.9.0-incubating-SNAPSHOT.jar\u5c01\u88c5\u81ea\u5df1\u7684\u751f\u4ea7\u548c\u6d88\u8d39\u903b\u8f91\uff0c\u603b\u7684\u5f62\u5f0f\u662f\u7c7b\u4f3c\uff0c\u6211\u4eec\u5148\u6267\u884c\u751f\u4ea7\u8005\u7684Demo\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230Broker\u4e0a\u5df2\u5f00\u59cb\u6709\u6570\u636e\u63a5\u6536\uff1a\n",(0,l.kt)("img",{loading:"lazy",src:n(3510).Z,width:"1897",height:"298"})),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(12117).Z,width:"1911",height:"227"})),(0,l.kt)("p",null,"\u6211\u4eec\u518d\u6267\u884c\u6d88\u8d39Demo\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u770b\u5230\u6d88\u8d39\u4e5f\u6b63\u5e38\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(59621).Z,width:"1899",height:"506"})),(0,l.kt)("p",null,"\u5728Broker\u7684\u751f\u4ea7\u548c\u6d88\u8d39\u6307\u6807\u65e5\u5fd7\u91cc\uff0c\u76f8\u5173\u6570\u636e\u5df2\u7ecf\u5b58\u5728\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",src:n(9056).Z,width:"1070",height:"119"})),(0,l.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u5df2\u7ecf\u5b8c\u6210\u4e86TubeMQ\u7684\u7f16\u8bd1\uff0c\u90e8\u7f72\uff0c\u7cfb\u7edf\u914d\u7f6e\uff0c\u542f\u52a8\uff0c\u751f\u4ea7\u548c\u6d88\u8d39\u3002\u5982\u679c\u9700\u8981\u4e86\u89e3\u66f4\u6df1\u5165\u7684\u5185\u5bb9\uff0c\u5c31\u9700\u8981\u67e5\u770b\u300aTubeMQ HTTP API\u300b\u91cc\u7684\u76f8\u5173\u5185\u5bb9\uff0c\u8fdb\u884c\u76f8\u5e94\u7684\u914d\u7f6e\u8bbe\u7f6e\u3002"),(0,l.kt)("hr",null),(0,l.kt)("a",{href:"#top"},"Back to top"))}c.isMDXComponent=!0},78916:function(t,e){e.Z="data:image/png;base64,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"},63039:function(t,e,n){e.Z=n.p+"assets/images/sys_broker_configure-f62da13b910e11d5328022df4ac8fb6e.png"},32653:function(t,e,n){e.Z=n.p+"assets/images/sys_broker_deploy-960e5250a271407d6a3349d22d115af8.png"},78572:function(t,e,n){e.Z=n.p+"assets/images/sys_broker_finished-3de5f5aad97de3ab60f1611bb20d1f2e.png"},95560:function(t,e,n){e.Z=n.p+"assets/images/sys_broker_online-9be62d1c8e9f7a8a61524d769b519347.png"},37510:function(t,e,n){e.Z=n.p+"assets/images/sys_broker_online_2-3d2c5998549dc0784fa8a07aa99c7cac.png"},56559:function(t,e,n){e.Z=n.p+"assets/images/sys_broker_restart_1-7b3c7b14b5b18aad16fa56c4b7da6c02.png"},49741:function(t,e,n){e.Z=n.p+"assets/images/sys_broker_restart_2-ad631cc9ef637ac91414ba85da1fea93.png"},64366:function(t,e,n){e.Z=n.p+"assets/images/sys_broker_start-74cd9a7c21b8c8657ce1c1e919e07f34.png"},75130:function(t,e,n){e.Z=n.p+"assets/images/sys_broker_start_error-f695b99ce0e63cc2b085904dbf131bcf.png"},24800:function(t,e,n){e.Z=n.p+"assets/images/sys_compile-afba3f1e66e6fa5e81c08fd43f68b969.png"},24077:function(t,e,n){e.Z=n.p+"assets/images/sys_configure_1-65cb9392e6e3fa695ff13c6a68deea0d.png"},53231:function(t,e,n){e.Z=n.p+"assets/images/sys_configure_2-b56851b99b004de0c52bf1d0024ef9e1.png"},60315:function(t,e,n){e.Z=n.p+"assets/images/sys_master_console-212b1466ca4c17167f7a827d09284aad.png"},34520:function(t,e,n){e.Z=n.p+"assets/images/sys_master_start-e7bf249361e4767f3f467e8a4a2462dc.png"},36303:function(t,e,n){e.Z=n.p+"assets/images/sys_master_startted-b64dba208789754a593b936333ee8d71.png"},9056:function(t,e,n){e.Z=n.p+"assets/images/sys_node_log-6ef2d911b495fcb6b0914dd5da97a5cc.png"},12117:function(t,e,n){e.Z=n.p+"assets/images/sys_node_status-54e011781d6923d34c617772f48971ca.png"},59621:function(t,e,n){e.Z=n.p+"assets/images/sys_node_status_2-054bb83ab9ddc187c604df5a02d98895.png"},55839:function(t,e,n){e.Z=n.p+"assets/images/sys_package-f2fd18c8fe2cce7e853b89707ef246de.png"},130:function(t,e,n){e.Z=n.p+"assets/images/sys_package_list-3d28301118d002b3d22b2ae39c42ca50.png"},40109:function(t,e,n){e.Z=n.p+"assets/images/sys_topic_create-c26d3b45de85af6958d80b7fc24cd9c2.png"},87227:function(t,e,n){e.Z=n.p+"assets/images/sys_topic_deploy-ddee2f69406173a224014533966c552a.png"},97035:function(t,e,n){e.Z=n.p+"assets/images/sys_topic_error-e7a5c0a4c7ac34391b11b5dc373c7a3e.png"},66330:function(t,e,n){e.Z=n.p+"assets/images/sys_topic_finished-d6523140132196743830d225307d4577.png"},51031:function(t,e,n){e.Z=n.p+"assets/images/sys_topic_select-eb84fec5a5d04b9266d3e6857843f858.png"},877:function(t,e,n){e.Z=n.p+"assets/images/test_sendmessage-2c9547aa3b283f8f96fe3f7f77a84c2d.png"},3510:function(t,e,n){e.Z=n.p+"assets/images/test_sendmessage_2-aca82f8640f949e0e144b6501995de43.png"}}]);