"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[22],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return d}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),p=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=p(e.components);return t.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return r?t.createElement(g,o(o({ref:n},s),{},{components:r})):t.createElement(g,o({ref:n},s))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42521:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return s},toc:function(){return c},default:function(){return d}});var t=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={title:"\u5b89\u88c5\u90e8\u7f72"},u=void 0,p={unversionedId:"modules/manager/quick_start",id:"version-0.12.0/modules/manager/quick_start",title:"\u5b89\u88c5\u90e8\u7f72",description:"\u73af\u5883\u51c6\u5907",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.12.0/modules/manager/quick_start.md",sourceDirName:"modules/manager",slug:"/modules/manager/quick_start",permalink:"/zh-CN/docs/0.12.0/modules/manager/quick_start",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.12.0/modules/manager/quick_start.md",tags:[],version:"0.12.0",frontMatter:{title:"\u5b89\u88c5\u90e8\u7f72"},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"\u603b\u89c8",permalink:"/zh-CN/docs/0.12.0/modules/manager/overview"},next:{title:"\u6982\u89c8",permalink:"/zh-CN/docs/0.12.0/modules/website/overview"}},s={},c=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",level:2},{value:"\u90e8\u7f72manager",id:"\u90e8\u7f72manager",level:2},{value:"\u4fee\u6539\u914d\u7f6e",id:"\u4fee\u6539\u914d\u7f6e",level:3},{value:"\u542f\u52a8\u670d\u52a1",id:"\u542f\u52a8\u670d\u52a1",level:3}],m={toc:c};function d(e){var n=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5b89\u88c5\u5e76\u542f\u52a8 MySQL 5.7+")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521d\u59cb\u5316\u6570\u636e\u5e93\n",(0,l.kt)("inlineCode",{parentName:"p"},"inlong-manager-web")," \u76ee\u5f55\u4e0b\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"sql/apache_inlong_manager.sql"),"\u6587\u4ef6\uff0c\u901a\u8fc7\u4e0b\u8ff0\u547d\u4ee4\u52a0\u8f7d\u6b64\u6587\u4ef6\uff0c\u5b8c\u6210\u8868\u7ed3\u6784\u53ca\u57fa\u7840\u6570\u636e\u7684\u521d\u59cb\u5316\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u901a\u8fc7\u7528\u6237\u540d\u548c\u5bc6\u7801\uff0c\u521b\u5efaDB\u548c\u8868\uff1a\nmysql -uDB_USER -pDB_PASSWD < sql/apache_inlong_manager.sql\n")))),(0,l.kt)("h2",{id:"\u90e8\u7f72manager"},"\u90e8\u7f72manager"),(0,l.kt)("p",null,"manager-web \u662f\u4e0e\u524d\u7aef\u9875\u9762\u4ea4\u4e92\u7684\u540e\u53f0\u670d\u52a1\u3002"),(0,l.kt)("h3",{id:"\u4fee\u6539\u914d\u7f6e"},"\u4fee\u6539\u914d\u7f6e"),(0,l.kt)("p",null,"\u524d\u5f80 ",(0,l.kt)("inlineCode",{parentName:"p"},"inlong-manager-web")," \u76ee\u5f55\uff0c\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/application.properties")," \u6587\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"# manager-web \u670d\u52a1\u7684\u7aef\u53e3\u53f7\nserver.port=8083\n\n# \u9ed8\u8ba4\u4f7f\u7528\u7684\u914d\u7f6e\u6587\u4ef6\u4e3a dev\nspring.profiles.active=dev\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u6307\u5b9a\u4e86 dev \u914d\u7f6e\uff0c\u63a5\u4e0b\u6765\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/application-dev.properties")," \u6587\u4ef6\uff1a"),(0,l.kt)("p",null,"1) \u4fee\u6539\u6570\u636e\u5e93 URL\u3001\u7528\u6237\u540d\u548c\u5bc6\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"spring.datasource.jdbc-url=jdbc:mysql://127.0.0.1:3306/apache_inlong_manager?useSSL=false&allowPublicKeyRetrieval=true&characterEncoding=UTF-8&nullCatalogMeansCurrent=true&serverTimezone=GMT%2b8\nspring.datasource.username=DB_USER\nspring.datasource.password=DB_PASSWD\n")),(0,l.kt)("p",null,"2) \u914d\u7f6e\u6d88\u606f\u961f\u5217\u670d\u52a1\uff0c\u53ef\u4ee5\u4f7f\u7528InLong TubeMQ \u6216\u8005 Apache Pulsar\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u82e5\u4f7f\u7528TubeMQ\uff0c\u914d\u7f6eTubeMQ \u96c6\u7fa4\u4fe1\u606f",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"# TubeMQ \u96c6\u7fa4\u7684 Manager \u5730\u5740\uff0c\u7528\u6765\u521b\u5efa Topic\ncluster.tube.manager=http://127.0.0.1:8081\n# \u7528\u6765\u7ba1\u7406 TubeMQ \u7684 Broker\ncluster.tube.master=127.0.0.1:8000,127.0.0.1:8010\n# TubeMQ \u96c6\u7fa4\u7684 ID\ncluster.tube.clusterId=1\n"))),(0,l.kt)("li",{parentName:"ul"},"\u82e5\u4f7f\u7528Pulsar\uff0c\u914d\u7f6ePulsar \u96c6\u7fa4\u4fe1\u606f",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"# Pulsar admin URL\npulsar.adminUrl=http://127.0.0.1:8080,127.0.0.2:8080,127.0.0.3:8080\n# Pulsar broker address\npulsar.serviceUrl=pulsar://127.0.0.1:6650,127.0.0.1:6650,127.0.0.1:6650\n# Default tenant of Pulsar\npulsar.defaultTenant=public\n")))),(0,l.kt)("p",null,"3) \u914d\u7f6eZooKeeper \u96c6\u7fa4\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-properties"},"# ZK \u96c6\u7fa4\uff0c\u7528\u6765\u63a8\u9001 Sort \u7684\u914d\u7f6e\ncluster.zk.url=127.0.0.1:2181\ncluster.zk.root=inlong_hive\n# \u5e94\u7528\u540d\u79f0\uff0c\u5373InLong Sort \u7684 cluster-id \u53c2\u6570\nsort.appName=inlong_app\n")),(0,l.kt)("h3",{id:"\u542f\u52a8\u670d\u52a1"},"\u542f\u52a8\u670d\u52a1"),(0,l.kt)("p",null,"\u8fdb\u5165\u89e3\u538b\u540e\u7684\u76ee\u5f55\uff0c\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"sh bin/startup.sh")," \u542f\u52a8\u670d\u52a1\uff0c\u67e5\u770b\u65e5\u5fd7 ",(0,l.kt)("inlineCode",{parentName:"p"},"tailf log/manager-web.log"),"\uff0c\u82e5\u51fa\u73b0\u7c7b\u4f3c\u4e0b\u9762\u7684\u65e5\u5fd7\uff0c\u8bf4\u660e\u670d\u52a1\u542f\u52a8\u6210\u529f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Started InLongWebApplication in 6.795 seconds (JVM running for 7.565)\n")))}d.isMDXComponent=!0}}]);