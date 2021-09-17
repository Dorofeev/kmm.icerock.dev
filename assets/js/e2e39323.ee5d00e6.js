"use strict";(self.webpackChunkkmm_icerock_dev=self.webpackChunkkmm_icerock_dev||[]).push([[8748],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),k=r,d=m["".concat(u,".").concat(k)]||m[k]||s[k]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35925:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i={},o="coroutines",u={unversionedId:"libraries/kotlinx/coroutines",id:"libraries/kotlinx/coroutines",isDocsHomePage:!1,title:"coroutines",description:"\u0414\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0439 \u043b\u043e\u0433\u0438\u043a\u0438 \u0438 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u0442\u043e\u043a\u0438 \u043d\u0430 \u043d\u0430\u0448\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445",source:"@site/learning/libraries/kotlinx/coroutines.md",sourceDirName:"libraries/kotlinx",slug:"/libraries/kotlinx/coroutines",permalink:"/learning/libraries/kotlinx/coroutines",editUrl:"https://github.com/icerockdev/kmm.icerock.dev/tree/docusaurus/learning/libraries/kotlinx/coroutines.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CocoaPods",permalink:"/learning/ios/pods"},next:{title:"date-time",permalink:"/learning/libraries/kotlinx/date-time"}},p=[{value:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b",id:"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b",children:[{value:"Beginner",id:"beginner",children:[]},{value:"Intermediate",id:"intermediate",children:[]},{value:"Advanced",id:"advanced",children:[]}]},{value:"Highlights",id:"highlights",children:[{value:"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e",id:"\u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0435-\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e",children:[]},{value:"CoroutineScope",id:"coroutinescope",children:[]},{value:"CoroutineContext",id:"coroutinecontext",children:[]},{value:"Dispatcher",id:"dispatcher",children:[]},{value:"\u041c\u0435\u0445\u0430\u043d\u0438\u043a\u0430 delay",id:"\u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0430-delay",children:[]}]},{value:"Check Yourself",id:"check-yourself",children:[]}],c={toc:p};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"coroutines"},"coroutines"),(0,l.kt)("p",null,"\u0414\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0439 \u043b\u043e\u0433\u0438\u043a\u0438 \u0438 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u0442\u043e\u043a\u0438 \u043d\u0430 \u043d\u0430\u0448\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445\n\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Kotlin/kotlinx.coroutines"},"kotlinx.coroutines")," \u0432\u0435\u0440\u0441\u0438\u0438 native-mt."),(0,l.kt)("h2",{id:"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"},"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"),(0,l.kt)("h3",{id:"beginner"},"Beginner"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,l.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/coroutines-basics.html"},"KotlinLang Docs - Coroutines guide"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"suspend \u0444\u0443\u043d\u043a\u0446\u0438\u0438"),(0,l.kt)("li",{parentName:"ul"},"scope builder'\u044b - runBlocking, coroutineScope"),(0,l.kt)("li",{parentName:"ul"},"Structured Concurrency"),(0,l.kt)("li",{parentName:"ul"},"\u041b\u0435\u0433\u043a\u043e\u0432\u0435\u0441\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u0440\u0443\u0442\u0438\u043d"))),(0,l.kt)("li",{parentName:"ul"},"\ud83c\udfa6 ",(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=t0AERgx0lrY"},"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u041d\u043e\u0437\u0438\u043a. \u041a\u043e\u0435-\u0447\u0442\u043e \u043e \u043a\u043e\u0440\u0443\u0442\u0438\u043d\u0430\u0445"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u041d\u0430\u0433\u043b\u044f\u0434\u043d\u043e\u0435 \u043f\u043e\u044f\u0441\u043d\u0435\u043d\u0438\u0435 \u0447\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0438 \u0447\u0435\u043c \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u043e\u0433\u043e"),(0,l.kt)("li",{parentName:"ul"},"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0442\u0435\u0440\u043c\u0438\u043d\u044b \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043a\u043e\u0440\u0443\u0442\u0438\u043d"),(0,l.kt)("li",{parentName:"ul"},"\u041a\u0430\u043a\u0438\u0435 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043e\u0448\u0438\u0431\u043a\u0438 \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u044e\u0442 \u043d\u043e\u0432\u0438\u0447\u043a\u0438"),(0,l.kt)("li",{parentName:"ul"},"\u041a\u0430\u043a\u0438\u0435 \u0445\u0438\u0442\u0440\u043e\u0441\u0442\u0438 \u043c\u043e\u0436\u043d\u043e \u0434\u0435\u043b\u0430\u0442\u044c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043a\u043e\u0440\u0443\u0442\u0438\u043d\u044b"))),(0,l.kt)("li",{parentName:"ul"},"\ud83c\udfa6 ",(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=AAFi_C40BOM"},"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u041d\u043e\u0437\u0438\u043a. \u041a\u043e\u0435-\u0447\u0442\u043e \u043e \u043a\u043e\u0440\u0443\u0442\u0438\u043d\u0430\u0445. Flow, Scope"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Flow, Channel"),(0,l.kt)("li",{parentName:"ul"},"CoroutineScopes"))),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,l.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/coroutines-guide.html"},"kotlinlang docs - Coroutines guide"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"..."))),(0,l.kt)("li",{parentName:"ul"},"\ud83c\udfa6 ",(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=cHERit7LNGM"},"RedMadRobot - Coroutines. \u0425\u0430\u043e\u0442\u0438\u0447\u043d\u043e\u0435 \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435. \u0427\u0430\u0441\u0442\u044c 1"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Inject Dispatchers,"),(0,l.kt)("li",{parentName:"ul"},"Dispatcher,"),(0,l.kt)("li",{parentName:"ul"},"withContext,"),(0,l.kt)("li",{parentName:"ul"},"NonCancellable,"),(0,l.kt)("li",{parentName:"ul"},"viewModelScope \u0438 \u0434\u0440\u0443\u0433\u0438\u0435,"),(0,l.kt)("li",{parentName:"ul"},"\u0414\u0435\u043b\u0430\u0439 suspend \u0444\u0443\u043d\u043a\u0446\u0438\u0438 main-safe,"),(0,l.kt)("li",{parentName:"ul"},"ViewModel \u0434\u043e\u043b\u0436\u043d\u0430 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043a\u043e\u0440\u0443\u0442\u0438\u043d\u044b,"),(0,l.kt)("li",{parentName:"ul"},"StateFlow \u0438 SharedFlow,"),(0,l.kt)("li",{parentName:"ul"},"\u041d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0439 \u043c\u0443\u0442\u0430\u0431\u0435\u043b\u044c\u043d\u044b\u0435 \u0442\u0438\u043f\u044b,"),(0,l.kt)("li",{parentName:"ul"},"\u041a\u0430\u043a \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u0432\u043e view,"),(0,l.kt)("li",{parentName:"ul"},"Data \u0438 Domain \u0441\u043b\u043e\u0438 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442 suspend \u0438 Flow,"),(0,l.kt)("li",{parentName:"ul"},"C\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u0440\u0443\u0442\u0438\u043d \u0432 Data \u0438 Domain \u0441\u043b\u043e\u044f\u0445"))),(0,l.kt)("li",{parentName:"ul"},"\ud83c\udfa6 ",(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=6Apj_v9ZkBs"},"RedMadRobot - Coroutines. \u0425\u0430\u043e\u0442\u0438\u0447\u043d\u043e\u0435 \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435. \u0427\u0430\u0441\u0442\u044c 2"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u041a\u0430\u043a \u0436\u0435 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043a\u043e\u0440\u0443\u0442\u0438\u043d\u044b \u0432 Data \u0438 Domain \u0441\u043b\u043e\u044f\u0445"),(0,l.kt)("li",{parentName:"ul"},"coroutineScope \u0438 supervisorScope"),(0,l.kt)("li",{parentName:"ul"},"Job"),(0,l.kt)("li",{parentName:"ul"},"Deferred \u0438 async/await"),(0,l.kt)("li",{parentName:"ul"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0441\u043a\u043e\u0443\u043f\u0430"),(0,l.kt)("li",{parentName:"ul"},"\u041a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u0441\u043a\u043e\u0443\u043f"),(0,l.kt)("li",{parentName:"ul"},"\u0418\u0437\u0431\u0435\u0433\u0430\u0439 GlobalScope"),(0,l.kt)("li",{parentName:"ul"},"CoroutineScope"),(0,l.kt)("li",{parentName:"ul"},"CoroutineContext"),(0,l.kt)("li",{parentName:"ul"},"CoroutineScope vs CoroutineContext"),(0,l.kt)("li",{parentName:"ul"},"\u0414\u0435\u043b\u0430\u0439 \u0441\u0432\u043e\u0438 \u043a\u043e\u0440\u0443\u0442\u0438\u043d\u044b cancellable"),(0,l.kt)("li",{parentName:"ul"},"\u041f\u043e\u043c\u043d\u0438 \u043f\u0440\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f "))),(0,l.kt)("li",{parentName:"ul"},"\ud83c\udfa6 ",(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=7JSHSqAhErw"},"RedMadRobot - Coroutines. \u0425\u0430\u043e\u0442\u0438\u0447\u043d\u043e\u0435 \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435. \u0427\u0430\u0441\u0442\u044c 3"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u0414\u043b\u044f \u0447\u0435\u0433\u043e \u0431\u044b\u043b \u043d\u0443\u0436\u0435\u043d SingleLiveEvent \ud83d\udcdf"),(0,l.kt)("li",{parentName:"ul"},"\u041a\u0430\u043a \u0435\u0433\u043e \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c \u0431\u0435\u0437 LiveData \ud83d\udd2b"),(0,l.kt)("li",{parentName:"ul"},"Channel (\u043a\u0430\u0436\u0435\u0442\u0441\u044f \u044d\u0442\u043e \u0441\u043f\u043e\u0439\u043b\u0435\u0440 \ud83d\ude06)"),(0,l.kt)("li",{parentName:"ul"},"\u041e \u0442\u0440\u0430\u0442\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 \u0432 \u0431\u0435\u043a\u0433\u0440\u0430\u0443\u043d\u0434\u0435 \ud83d\udd26"),(0,l.kt)("li",{parentName:"ul"},"buffer, conflate, flowOn, shareIn"),(0,l.kt)("li",{parentName:"ul"},"WhileSubscribed"),(0,l.kt)("li",{parentName:"ul"},"\u041a\u0430\u043a \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e \u0441\u043b\u0443\u0448\u0430\u0442\u044c Flow \u0438\u0437 UI \u2705"),(0,l.kt)("li",{parentName:"ul"},"\u0418 \u043d\u0435 \u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441\u044b \ud83d\udee0"),(0,l.kt)("li",{parentName:"ul"},"Lifecycle.repeatOnLifecycle"),(0,l.kt)("li",{parentName:"ul"},"Flow.flowWithLifecycle")))),(0,l.kt)("h3",{id:"intermediate"},"Intermediate"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud83c\udfa6 ",(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=tYcqn48SMT8"},"KotlinConf 2019: Asynchronous Data Streams with Kotlin Flow by Roman Elizarov")),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Kotlin/kotlinx.coroutines/blob/master/ui/coroutines-guide-ui.md"},"Guide to UI programming with coroutines")),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,l.kt)("a",{parentName:"li",href:"https://habr.com/ru/company/alfa/blog/336228/"},"\u041a\u043e\u0440\u0443\u0442\u0438\u043d\u044b \u0432 Kotlin (\u0433\u0430\u0439\u0434)")),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,l.kt)("a",{parentName:"li",href:"https://developer.android.com/kotlin/coroutines/coroutines-best-practices"},"Best practices for coroutines")),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/Kotlin/kotlinx.coroutines/blob/native-mt/kotlin-native-sharing.md"},"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f native-mt \u0432\u0435\u0440\u0441\u0438\u0438 \u0434\u043b\u044f iOS \u0442\u0430\u0440\u0433\u0435\u0442\u0430"),"."),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,l.kt)("a",{parentName:"li",href:"https://elizarov.medium.com/structured-concurrency-722d765aa952"},"Roman Elizarov - Structured Concurrency")),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,l.kt)("a",{parentName:"li",href:"https://proandroiddev.com/structured-concurrency-in-action-97c749a8f755?gi=85a83dfe8ceb"},"Structured Concurrency in action! (using Kotlin coroutines)")),(0,l.kt)("li",{parentName:"ul"},"\ud83c\udfa6 ",(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Mj5P47F6nJg"},"Roman Elizarov \u2014 Structured concurrency"))),(0,l.kt)("h3",{id:"advanced"},"Advanced"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud83c\udfa6 ",(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ffIVVWHpups"},"\u0410\u043d\u0434\u0440\u0435\u0439 \u0411\u0440\u0435\u0441\u043b\u0430\u0432 \u2014 \u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e, \u043d\u043e \u043f\u043e\u043d\u044f\u0442\u043d\u043e. \u0421\u043e\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0432 Kotlin"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u041d\u0435\u043c\u043d\u043e\u0433\u043e \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0435\u0435, \u043d\u043e \u043f\u0440\u043e \u0432\u043d\u0443\u0442\u0440\u044f\u043d\u043a\u0443 \u043d\u0430\u0433\u043b\u044f\u0434\u043d\u043e \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e."))),(0,l.kt)("li",{parentName:"ul"},"\ud83c\udfa6 ",(0,l.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=b4mBmi1QNF0"},"\u041a\u043e\u0440\u0443\u0442\u0438\u043d\u044b \u0432 Kotlin \u2014 \u0420\u043e\u043c\u0430\u043d \u0415\u043b\u0438\u0437\u0430\u0440\u043e\u0432, JetBrains")),(0,l.kt)("li",{parentName:"ul"},"\ud83d\udcc4 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/JetBrains/kotlin/blob/document-coroutines-codegen/compiler/backend/src/org/jetbrains/kotlin/codegen/coroutines/coroutines-codegen.md#state-machine"},"Coroutines Codegen"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0438\u0439 \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440 \u0441 suspend \u043a\u043e\u0434\u043e\u043c \u0438 \u0447\u0442\u043e \u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435")))),(0,l.kt)("h2",{id:"highlights"},"Highlights"),(0,l.kt)("h3",{id:"\u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0435-\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e"},"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u041c\u044b \u043d\u0435 \u0441\u0442\u0440\u0435\u043c\u0438\u043c\u0441\u044f \u0437\u0434\u0435\u0441\u044c \u0434\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u043e\u0435 \u043e\u0431\u044a\u044f\u0441\u043d\u0435\u043d\u0438\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0441\u043e\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043f\u043e\u0434 \u043a\u0430\u043f\u043e\u0442\u043e\u043c, \u043d\u043e \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u044b\u0439 \u0441\u043c\u044b\u0441\u043b \u0442\u043e\u0433\u043e, \u0447\u0442\u043e \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442, \u043e\u0447\u0435\u043d\u044c \u0432\u0430\u0436\u0435\u043d."),(0,l.kt)("p",{parentName:"blockquote"},"\u0421\u043e\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438 (\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043e\u0442 \u044f\u0437\u044b\u043a\u043e\u0432\u043e\u0439 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043c\u0430\u0448\u0438\u043d\u044b, \u0441\u0440\u0435\u0434\u044b \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f, \u0438\u043b\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f), \u0430 \u043f\u0440\u0438\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u0434\u0430. \u0412 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0435, \u043a\u0430\u0436\u0434\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u0440\u0438\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 (\u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f, \u043d\u043e \u043c\u044b \u043d\u0435 \u0431\u0443\u0434\u0435\u043c \u0432\u0434\u0430\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u044d\u0442\u0438 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u0437\u0434\u0435\u0441\u044c) \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0439 \u0430\u0432\u0442\u043e\u043c\u0430\u0442, \u0433\u0434\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u043f\u0440\u0438\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u0432\u044b\u0437\u043e\u0432\u0430\u043c. \u041f\u0440\u044f\u043c\u043e \u043f\u0435\u0440\u0435\u0434 \u043f\u0440\u0438\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u043e\u0439 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f \u0432 \u043f\u043e\u043b\u0435 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440\u043e\u043c \u043a\u043b\u0430\u0441\u0441\u0430 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0441\u043e\u043f\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c\u0438 \u0438 \u0442. \u0434. \u041f\u0440\u0438 \u0432\u043e\u0437\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0441\u043e\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0438 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u044e\u0442\u0441\u044f, \u0438 \u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0439 \u0430\u0432\u0442\u043e\u043c\u0430\u0442 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0435\u0442 \u0441\u0432\u043e\u044e \u0440\u0430\u0431\u043e\u0442\u0443."),(0,l.kt)("p",{parentName:"blockquote"},"\u041f\u0440\u0438\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u0443\u044e \u0441\u043e\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u043e\u0431\u044a\u0435\u043a\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0445\u0440\u0430\u043d\u0438\u0442 \u0435\u0451 \u043f\u0440\u0438\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435. \u0422\u0438\u043f\u043e\u043c \u0442\u0430\u043a\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f Continuation, \u0430 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u0434\u0430, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u043e\u0435 \u0437\u0434\u0435\u0441\u044c, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443 Continuation-passing style. \u0421\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e, \u043f\u0440\u0438\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0442 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0442\u0438\u043f\u0430 Continuation (\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u043e\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435) \u043f\u043e\u0434 \u043a\u0430\u043f\u043e\u0442\u043e\u043c."),(0,l.kt)("p",{parentName:"blockquote"},"\u0411\u043e\u043b\u0435\u0435 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u043e \u043e \u0442\u043e\u043c, \u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0441\u043e\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b, \u043c\u043e\u0436\u043d\u043e \u0443\u0437\u043d\u0430\u0442\u044c \u0432 \u044d\u0442\u043e\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u043d\u043e\u043c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0435. \u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f async / await \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u044f\u0437\u044b\u043a\u0430\u0445 (\u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a C# \u0438\u043b\u0438 ECMAScript 2016) \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b \u0438 \u0437\u0434\u0435\u0441\u044c, \u0445\u043e\u0442\u044f \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438\u0445 \u044f\u0437\u044b\u043a\u043e\u0432\u044b\u0445 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0439 \u043c\u043e\u0433\u0443\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u043e\u0442 \u0441\u043e\u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c Kotlin.")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.ru/docs/reference/coroutines.html"},"Source"),"."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438:"),(0,l.kt)("p",null,"\u0418\u0441\u0445\u043e\u0434\u043d\u0438\u043a:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"dummy() // suspend\nprintln(1)\ndummy() // suspend\nprintln(2)\n")),(0,l.kt)("p",null,"\u041f\u0440\u0438 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442\u0441\u044f \u0432:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val $result: Any? = null\nwhen (this.label) {\n    0 -> {\n        this.label = 1\n        $result = dummy(this)\n        if ($result == COROUTINE_SUSPENDED) return COROUTINE_SUSPENDED\n        goto 1\n    }\n    1 -> {\n        println(1)\n        this.label = 2\n        $result = dummy(this)\n        if ($result == COROUTINE_SUSPENDED) return COROUTINE_SUSPENDED\n        goto 2\n    }\n    2 -> {\n        println(2)\n        return Unit\n    }\n    else -> {\n        throw IllegalStateException(\"call to 'resume' before 'invoke' with coroutine\")\n    }\n}\n")),(0,l.kt)("p",null,"\u0411\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0432 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/JetBrains/kotlin/blob/document-coroutines-codegen/compiler/backend/src/org/jetbrains/kotlin/codegen/coroutines/coroutines-codegen.md#state-machine"},"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0435")),(0,l.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c ",(0,l.kt)("a",{parentName:"p",href:"https://manuelvivo.dev/suspend-modifier"},"\u0441\u0442\u0430\u0442\u044c\u044e \u0438\u043b\u0438 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0438\u0434\u0435\u043e"),"."),(0,l.kt)("h3",{id:"coroutinescope"},"CoroutineScope"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-scope/index.html"},"CoroutineScope"),"\n\u0437\u0430\u0434\u0430\u0435\u0442 \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043a\u043e\u0440\u0443\u0442\u0438\u043d\u044b. \u0418\u043c\u0435\u043d\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u043a\u043e\u0443\u043f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0432\u0441\u0435\u0445 \u043e\u0442\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445\n\u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u043a \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u043e\u043c\u0443 \u0446\u0438\u043a\u043b\u0443."),(0,l.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0443 \u043a\u0430\u0436\u0434\u043e\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"ViewModel")," \u0435\u0441\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"viewModelScope")," - \u044d\u0442\u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"CoroutineScope"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438\n\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"ViewModel")," \u0438 \u043e\u0442\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u0432\u044b\u0437\u043e\u0432\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"onCleared"),". "),(0,l.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0443\u044e \u0442\u0435\u0441\u0442\u043e\u0432\u0443\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"ViewModel"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'class TestViewModel: ViewModel() {\n  init {\n    viewModelScope.launch {\n      delay(10000)\n      println("work done!")\n    }\n  }\n}\n')),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043c\u044b \u0437\u0430\u0439\u0434\u0435\u043c \u043d\u0430 \u044d\u043a\u0440\u0430\u043d, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0439 \u044d\u0442\u0443 ",(0,l.kt)("inlineCode",{parentName:"p"},"ViewModel"),", \u0438 \u0441\u0440\u0430\u0437\u0443 \u0443\u0439\u0434\u0435\u043c (\u043d\u0435 \u0434\u043e\u0436\u0438\u0434\u0430\u044f\u0441\u044c 10 \u0441\u0435\u043a\u0443\u043d\u0434), \u0442\u043e\n\u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e \u0432 \u043b\u043e\u0433. \u0410 \u0435\u0441\u043b\u0438 \u043f\u043e\u0434\u043e\u0436\u0434\u0435\u043c 10 \u0441\u0435\u043a\u0443\u043d\u0434 - \u0431\u0443\u0434\u0435\u0442. \u042d\u0442\u043e \u043a\u0430\u043a \u0440\u0430\u0437 \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043f\u0440\u0438\n\u0432\u044b\u0437\u043e\u0432\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"onCleared")," \u043e\u0442\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"CoroutineScope"),", \u0430 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u043d\u0438\u043c \u0438 \u0432\u0441\u0435 \u0435\u0433\u043e \u043a\u043e\u0440\u0443\u0442\u0438\u043d\u044b. \u0410 \u0432\u044b\u0437\u043e\u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"onCleared"),"\n\u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043f\u0440\u0438 \u043e\u043a\u043e\u043d\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u043c \u0443\u0445\u043e\u0434\u0435 \u0441 \u044d\u043a\u0440\u0430\u043d\u0430 (\u043f\u0440\u044f\u043c\u043e \u043f\u0435\u0440\u0435\u0434 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"ViewModel"),")."),(0,l.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u0432\u0430\u0436\u043d\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c \u0447\u0442\u043e \u0441\u043a\u043e\u0443\u043f \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u043c (\u043b\u044e\u0431\u043e\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f).\n\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u043a\u043e\u0443\u043f\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0431\u0438\u043b\u0434\u0435\u0440 ",(0,l.kt)("inlineCode",{parentName:"p"},"coroutineScope"),". \u041f\u0440\u0438 \u043e\u0442\u043c\u0435\u043d\u0435 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u0441\u043a\u043e\u0443\u043f\u0430\n\u043e\u0442\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u0438 \u0432\u0441\u0435 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435."),(0,l.kt)("p",null,"\u0412\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0439 \u0441\u043a\u043e\u0443\u043f \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0433\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u0441\u043b\u0443\u0447\u0430\u044f\u0445, \u043a\u043e\u0433\u0434\u0430 \u0432\u0430\u043c \u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u043a\u043b\u0430\u0441\u0441 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"CoroutineScope"),",\n\u043d\u043e \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u0437\u0432\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0438\u0437 \u0431\u0438\u043b\u0434\u0435\u0440\u043e\u0432 (",(0,l.kt)("inlineCode",{parentName:"p"},"launch"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"async"),")."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"suspend fun doSomeParallelWork() {\n    coroutineScope {\n        val task1 = async { callFirstRequest() }\n        val task2 = async { callSecondRequest() }\n        awaitAll(task1, task2)\n    }\n}\n")),(0,l.kt)("p",null,"\u0412\u0441\u0435 \u043a\u043e\u0440\u0443\u0442\u0438\u043d\u044b \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0442 \u043a\u0430\u043a\u043e\u043c\u0443 \u043b\u0438\u0431\u043e \u0441\u043a\u043e\u0443\u043f\u0443. \u0421\u043a\u043e\u0443\u043f \u043b\u0438\u0431\u043e \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e\n(\u0432\u044b\u0437\u043e\u0432\u043e\u043c ",(0,l.kt)("inlineCode",{parentName:"p"},"CoroutineScope"),"), \u043b\u0438\u0431\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"GlobalScope"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0435\u043d\u043d\u043e\u0433\u043e\n\u0446\u0438\u043a\u043b\u0430 - \u0436\u0438\u0432\u0435\u0442 \u0432\u0441\u0435 \u0432\u0440\u0435\u043c\u044f \u0436\u0438\u0437\u043d\u0438 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e \u0431\u0435\u0437\n\u0442\u0432\u0435\u0440\u0434\u043e\u0439 \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0447\u0442\u043e \u044d\u0442\u043e \u0432\u0435\u0440\u043d\u043e.   "),(0,l.kt)("h3",{id:"coroutinecontext"},"CoroutineContext"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("h3",{id:"dispatcher"},"Dispatcher"),(0,l.kt)("p",null,"TODO"),(0,l.kt)("h3",{id:"\u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0430-delay"},"\u041c\u0435\u0445\u0430\u043d\u0438\u043a\u0430 delay"),(0,l.kt)("p",null,"\u041f\u043e \u043d\u0430\u0447\u0430\u043b\u0443 ",(0,l.kt)("inlineCode",{parentName:"p"},"delay")," \u0432\u0441\u0435 \u0438\u043d\u0442\u0435\u0440\u043f\u0440\u0435\u0442\u0438\u0440\u0443\u044e\u0442 \u043a\u0430\u043a ",(0,l.kt)("inlineCode",{parentName:"p"},"Thread.sleep")," \u0438 \u0441\u0447\u0438\u0442\u0430\u044e\u0442 \u0447\u0442\u043e \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u043e\u0442\u043e\u043a \u0431\u0443\u0434\u0435\u0442 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\n\u043d\u0430 N \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434.\n\u041d\u043e ",(0,l.kt)("a",{parentName:"p",href:"https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/delay.html"},"\u044d\u0442\u043e \u043d\u0435 \u0442\u0430\u043a"),"\n. \u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0431\u043b\u043e\u043a \u043a\u043e\u0434\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'suspend fun startTimer() {\n    println("show message at start")\n    delay(1000)\n    println("show message after second")\n}\n')),(0,l.kt)("p",null,"\u041f\u0440\u0438 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d (\u0435\u0441\u043b\u0438 \u0441\u0438\u043b\u044c\u043d\u043e \u0443\u043f\u0440\u043e\u0441\u0442\u0438\u0442\u044c) \u0432 \u043d\u0435\u0447\u0442\u043e \u043f\u043e\u0445\u043e\u0436\u0435\u0435 \u043d\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun startTimer() {\n    println("show message at start")\n    delayCallback(1000) {\n        println("show message after second")\n    }\n}\n')),(0,l.kt)("p",null,"\u0422\u043e \u0435\u0441\u0442\u044c \u0432\u043c\u0435\u0441\u0442\u043e \u0432\u044b\u0437\u043e\u0432\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"sleep")," \u043d\u0430 \u0432\u0435\u0441\u044c \u043f\u043e\u0442\u043e\u043a, \u0432\u0441\u044f \u0440\u0430\u0431\u043e\u0442\u0430 \u043f\u043e\u0441\u043b\u0435 suspend-point (",(0,l.kt)("inlineCode",{parentName:"p"},"delay"),' \u044d\u0442\u043e suspend\n\u0444\u0443\u043d\u043a\u0446\u0438\u044f), \u0431\u0443\u0434\u0435\u0442 "\u0437\u0430\u0432\u0435\u0440\u043d\u0443\u0442\u0430 \u0432 callback", \u0437\u0430\u043a\u0438\u043d\u0443\u0442\u0430 \u0432 \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043f\u043e\u0442\u043e\u043a\u0430 (\u0447\u0435\u0440\u0435\u0437 Dispatcher\n\u043a\u043e\u0440\u0443\u0442\u0438\u043d) \u0438 \u0434\u0430\u043d\u043d\u044b\u0439 \u043a\u0430\u043b\u0431\u0435\u043a \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u043a\u0443\u043d\u0434\u0443 (\u043a\u043e\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0435\u043d \u0438\u0437 \u043e\u0447\u0435\u0440\u0435\u0434\u0438 \u0434\u0438\u0441\u043f\u0430\u0442\u0447\u0435\u0440\u043e\u043c).'),(0,l.kt)("p",null,"\u0412\u044b\u0432\u043e\u0434 - \u0432\u044b\u0437\u043e\u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"delay")," \u043d\u0435 \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0443 \u043f\u043e\u0442\u043e\u043a\u0430."),(0,l.kt)("h2",{id:"check-yourself"},"Check Yourself"),(0,l.kt)("p",null,"TODO"))}s.isMDXComponent=!0}}]);