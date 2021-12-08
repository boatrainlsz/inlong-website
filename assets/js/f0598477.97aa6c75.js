"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3915],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),p=o,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1931:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={title:"Console Introduction"},s=void 0,u={unversionedId:"modules/tubemq/console_introduction",id:"modules/tubemq/console_introduction",isDocsHomePage:!1,title:"Console Introduction",description:"1 Control console relationship",source:"@site/docs/modules/tubemq/console_introduction.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/console_introduction",permalink:"/docs/next/modules/tubemq/console_introduction",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/modules/tubemq/console_introduction.md",tags:[],version:"current",frontMatter:{title:"Console Introduction"},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/next/modules/tubemq/configure_introduction"},next:{title:"Error Code",permalink:"/docs/next/modules/tubemq/error_code"}},c=[{value:"1 Control console relationship",id:"1-control-console-relationship",children:[]},{value:"2 Introduction to each part of the TubeMQ console",id:"2-introduction-to-each-part-of-the-tubemq-console",children:[{value:"2.1 Consumption Query",id:"21-consumption-query",children:[]},{value:"2.2 Cluster Management",id:"22-cluster-management",children:[]},{value:"2.3 Configuration Management",id:"23-configuration-management",children:[]}]},{value:"3 Operations and precautions involved in the TubeMQ control console",id:"3-operations-and-precautions-involved-in-the-tubemq-control-console",children:[]},{value:"4 Operation precautions after changing Topic metadata:",id:"4-operation-precautions-after-changing-topic-metadata",children:[{value:"4.1 How to configure Topic:",id:"41-how-to-configure-topic",children:[]},{value:"4.2 Precautions for Topic Change:",id:"42-precautions-for-topic-change",children:[]},{value:"4.3 Dealing with the deletion of Topic:",id:"43-dealing-with-the-deletion-of-topic",children:[]}]}],d={toc:c};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-control-console-relationship"},"1 Control console relationship"),(0,r.kt)("p",null,'The TubeMQ console is a simple operation tool for managing the TubeMQ cluster, including the Master, Broker in the cluster, and Topic metadata deployed on the Broker and other operational data and operations related to the TubeMQ system. It should be noted that the functions provided by the TubeMQ front desk currently provided do not cover the scope of functions provided by TubeMQ. You can refer to "TubeMQ HTTP Access Interface Definition.xls" to define your own management and control front desk that meets your business needs. The access address of the TubeMQ control console is http://portal:webport'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1102).Z})),(0,r.kt)("p",null,"Among them, the portal parameter is the IP address of any Master or backup Master in the cluster, and the webport parameter is the web port of the configured Master."),(0,r.kt)("h2",{id:"2-introduction-to-each-part-of-the-tubemq-console"},"2 Introduction to each part of the TubeMQ console"),(0,r.kt)("p",null,"The console has 3 parts: consumption query, configuration management, and cluster management; configuration management is divided into two parts: Broker configuration and Topic configuration. We first introduce simple consumption query and cluster management and then introduce complex configuration management."),(0,r.kt)("h3",{id:"21-consumption-query"},"2.1 Consumption Query"),(0,r.kt)("p",null,"Click the consumption query, we will see the following list information, which is the registered consumer group information in the current TubeMQ cluster, including the specific consumer group name, the topic of consumption, and the summary information about the total number of consumer partitions in the group, as follows :"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5208).Z})),(0,r.kt)("p",null,"Click on the page and you can see the consumer members in the selected consumer group, and the Broker and Partition information of the corresponding consumer, as shown in the following figure:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1682).Z})),(0,r.kt)("p",null,"This page can be used for us to query, enter the topic or consumer group name, you can quickly confirm which consumer groups in the system are consuming topics, and what the consumption goals of each consumer group are."),(0,r.kt)("h3",{id:"22-cluster-management"},"2.2 Cluster Management"),(0,r.kt)("p",null,'Cluster management mainly manages the HA of the Master. On this page, we can see the current master\'s various nodes and node status. At the same time, we can change the active and standby status of the nodes through the "switch" operation:'),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9600).Z})),(0,r.kt)("h3",{id:"23-configuration-management"},"2.3 Configuration Management"),(0,r.kt)("p",null,"The configuration management page includes not only the management of Broker and Topic metadata but also the online release and offline operations of Broker and Topic. It has two meanings. For example, the Broker list displays the configured Broker metadata in the current cluster. , Including Broker record information that is in draft, online, and offline state:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1814).Z})),(0,r.kt)("p",null,"From the page information, we can also see that in addition to Broker\u2019s record information, there is also Broker\u2019s management information in the cluster, including whether it is online, whether it is in command processing, whether it is readable, whether it is writable, and whether the configuration is done Change, whether the changed configuration information has been loaded."),(0,r.kt)("p",null,'Click the Add button, and the pop-up box will be as follows. This indicates the metadata information of the broker to be added, including BrokerID, BrokerIP, BrokerPort, and the default configuration information of the Topic deployed in the Broker. For details of the related fields, see "TubeMQ HTTP API definition.xls ":\n',(0,r.kt)("img",{src:n(3059).Z})),(0,r.kt)("p",null,"All TubeMQ console change operations will require the input of the operation authorization code, which is defined by the operation and maintenance through the confModAuthToken field of the master configuration file master.ini: if you know the password of this cluster, you can proceed For this operation, for example, if you are an administrator, you are an authorized person, or you can log in to the master machine to get the password, you are considered to be authorized to operate this function."),(0,r.kt)("h2",{id:"3-operations-and-precautions-involved-in-the-tubemq-control-console"},"3 Operations and precautions involved in the TubeMQ control console"),(0,r.kt)("p",null,"As mentioned above, the TubeMQ control console operates the Tube MQ cluster. The suite is responsible for the management of TubeMQ cluster nodes such as Master and Broker, including automatic deployment and installation. Therefore, the following points need to be paid attention to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"When the TubeMQ cluster is expanded or reduced, the Broker nodes must be added, online, offline, and deleted on the TubeMQ console before the corresponding Broker nodes can be added or deleted in the physical environment"),":")),(0,r.kt)("p",null,"The TubeMQ cluster manages the Broker in accordance with the state machine. As shown in the figure above, it involves ","[draft, online, read-only, write-only, offline]"," and other states. When the record increase has not yet taken effect, it is in the draft state; after confirming to go online, it is in the online state; the node to delete, first change from the online state to the offline state, and then clear the node records saved in the system through the delete operation. The states of the draft, online, and offline are to distinguish the status where each Broker node is, and the Master only distributes the brokers in the online state to the corresponding producers and consumers; read-only and write-only are the sub-states of Broker in the online state, which means that only the data on the Broker can be read or written; the relevant state and operation are shown on the page details. Add a record then you can understand the relationship."),(0,r.kt)("p",null,"After adding these records to the TubeMQ console, we can deploy and start the Broker node. At this time, the page of the Tube cluster environment will display the running status of the node. If it is in the unregistered state, as shown in the figure below, it means that the node registration has failed. Check the log on the corresponding broker node to confirm the reason. At present, this part is very mature, the error message will prompt the complete information, and you can directly deal with the problem according to the prompt."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5139).Z})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Topic metadata information needs to be added and deleted through the topic_list page:"))),(0,r.kt)("p",null,"As shown in the figure below, if the business finds that the topic that it consumes is not on the TubeMQ console, it needs to operate directly on the TubeMQ console:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1332).Z})),(0,r.kt)("p",null,"When we add a topic through the topic_list page in the above figure, the following box will pop up:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4616).Z})),(0,r.kt)("p",null,"After clicking Confirm, there will be a list of Brokers that choose to deploy the added Topic, and confirm the operation after selecting the deployment scope:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1370).Z})),(0,r.kt)("p",null,"After completing the operation of adding a topic, we also need to reload the Broker that has made configuration changes, as shown in the following figure:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(300).Z})),(0,r.kt)("p",null,"The topic can only be used externally after the reload is completed. We will find that the following configuration changes have changed status after the restart is completed:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6059).Z})),(0,r.kt)("p",null,"Now, we can produce and consume the topic."),(0,r.kt)("h2",{id:"4-operation-precautions-after-changing-topic-metadata"},"4 Operation precautions after changing Topic metadata:"),(0,r.kt)("h3",{id:"41-how-to-configure-topic"},"4.1 How to configure Topic:"),(0,r.kt)("p",null,"After you click on any topic in the Topic list, the following box will pop up, which contains the related metadata information of the topic, which determines how many partitions the topic has set on the Broker, the current read and write states, and the frequency of data flashing. Information such as data aging cycle and time:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5995).Z})),(0,r.kt)("p",null,"This information is directly defined by the system administrator after setting the default values. Generally, it will not change. If the business has special needs, such as increasing the parallelism of consumption and increasing the partition or want to reduce the frequency of flashing, how to operate? As shown in the figure below, the meaning and function of the fields on each page are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"must"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topicName"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"the topic name"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"brokerId"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"the id of the broker, its default value is 0. If brokerId is not zero, it ignores brokerIp field"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deleteWhen"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"the default deleting time of the topic data. The format should like cronjob form ",(0,r.kt)("inlineCode",{parentName:"td"},"0 0 6, 18 * * ?")),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deletePolicy"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},'the default policy for deleting, the default policy is "delete, 168"'),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"numPartitions"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"the default partition number of a default topic on the broker. Default 1"),(0,r.kt)("td",{parentName:"tr",align:null},"Int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unflushThreshold"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"the maximum message number which allows in memory. It has to be flushed to disk if the number exceed this value. Default 1000"),(0,r.kt)("td",{parentName:"tr",align:null},"Int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"numTopicStores"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"the number of data block and partition group allowed to create, default 1. If it is larger than 1, the partition number and topic number should be mapping with this value"),(0,r.kt)("td",{parentName:"tr",align:null},"Int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unflushInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"the maximum interval for unflush, default 1000ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"memCacheMsgCntInK"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"the max cached message package, default is 10, the unit is K"),(0,r.kt)("td",{parentName:"tr",align:null},"Int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"memCacheMsgSizeInMB"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"the max cache message size in MB, default 3"),(0,r.kt)("td",{parentName:"tr",align:null},"Int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"memCacheFlushIntvl"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"the max unflush interval in ms, default 20000"),(0,r.kt)("td",{parentName:"tr",align:null},"Int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"brokerTLSPort"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"the port of TLS of the broker, it has no default value"),(0,r.kt)("td",{parentName:"tr",align:null},"Int")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acceptPublish"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the broker accept publish, default true"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"acceptSubscribe"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the broker accept subscribe, default true"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createUser"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"the create user"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"createDate"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"the create date in format ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyyMMddHHmmss")),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"confModAuthToken"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"the authorized key for configuration update"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("p",null,'For the detail please see "Tube MQ HTTP API Definition.xls", which has a very clear definition. You can make changes through the ',(0,r.kt)("strong",{parentName:"p"},"Modify")," button in the upper right corner of the page, and after confirming, the following box will pop up:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4977).Z})),(0,r.kt)("p",null,"Its steps are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a. Select the set of Broker nodes that participate in the modification of Topic metadata;"),(0,r.kt)("li",{parentName:"ul"},"b. Provide the authorization information code for the modification operation.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," Special Notice: You need to note that after entering the authorization code to modify, the data change will not take effect until it is refreshed. At the same time, the effective Broker must be operated on a proportional basis. ")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8441).Z})),(0,r.kt)("h3",{id:"42-precautions-for-topic-change"},"4.2 Precautions for Topic Change:"),(0,r.kt)("p",null,"As shown above, after choosing to change Topic metadata, the previously selected Broker collection will display a yes prompt on ",(0,r.kt)("strong",{parentName:"p"},"Configuration Has Been Changed"),". We also need to reload and refresh the changes, select the Broker set, and then select the refresh operation, which can be batch or single, but it must be noted that the operation should be carried out in batches, and the current Broker running status of the previous batch of operations is running After that, the next batch of configuration refresh operations can be entered; if a node is in the online state but does not enter the running state for a long time (the default maximum is 2 minutes), you need to stop the refresh and check the cause of the problem before continuing the operation."),(0,r.kt)("p",null,"The reason for the batch operation is that when our system changes, the designated Broker will stop reading and writing. If all Brokers are reloaded in a unified manner, it is obvious that the entire cluster will have unreadable or unwritable services, and the access must be abnormal."),(0,r.kt)("h3",{id:"43-dealing-with-the-deletion-of-topic"},"4.3 Dealing with the deletion of Topic:"),(0,r.kt)("p",null,"The deletion on the page is a soft delete process. If you want to completely delete the topic, you need to perform a hard delete operation through the API interface (to avoid business misoperation)."),(0,r.kt)("p",null,"To this end, After completing the above content, the Topic metadata is changed."),(0,r.kt)("hr",null),(0,r.kt)("a",{href:"#top"},"Back to top"))}h.isMDXComponent=!0},1102:function(e,t,n){t.Z=n.p+"assets/images/1568169770714-c0328b62f45fa086761c52c104cbba04.png"},5208:function(e,t,n){t.Z=n.p+"assets/images/1568169796122-57881414283ad76316254e805f11a840.png"},1682:function(e,t,n){t.Z=n.p+"assets/images/1568169806810-cb98c00a0701401ef74ae42c5ca47edc.png"},9600:function(e,t,n){t.Z=n.p+"assets/images/1568169823675-8852b480363f81a7c84ed3ae446580f3.png"},1814:function(e,t,n){t.Z=n.p+"assets/images/1568169839931-cd2bd2e45b9f25b70282201fb4a5aa8b.png"},3059:function(e,t,n){t.Z=n.p+"assets/images/1568169851085-fe7e76e2556cf265c33a02706e43e2c2.png"},5139:function(e,t,n){t.Z=n.p+"assets/images/1568169863402-1bce9fa995efc504740b2bdc67f679e0.png"},1332:function(e,t,n){t.Z=n.p+"assets/images/1568169879529-86ca1d1d11f15bd27cc9e3b877341f1e.png"},4616:function(e,t,n){t.Z=n.p+"assets/images/1568169889594-b1d8a04b6c015fb80405211e4d000717.png"},1370:function(e,t,n){t.Z=n.p+"assets/images/1568169900634-1366b487f294c1e95ce4e124de0f0b55.png"},300:function(e,t,n){t.Z=n.p+"assets/images/1568169908522-36453a049165ea2ce80f872a7f6e1097.png"},6059:function(e,t,n){t.Z=n.p+"assets/images/1568169916091-eef87de4f1387429953f5b49199a8179.png"},5995:function(e,t,n){t.Z=n.p+"assets/images/1568169925657-b418daea25bfa78b9967a7774e2da48a.png"},4977:function(e,t,n){t.Z=n.p+"assets/images/1568169946683-6514871728e8ecf3d61eca0a90dda320.png"},8441:function(e,t,n){t.Z=n.p+"assets/images/1568169954746-edc526c4b75627888f885f4180b67fac.png"}}]);