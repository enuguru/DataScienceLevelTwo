
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"31",
  
  "macros":[{
      "function":"__v",
      "vtp_name":"gtm.errorLineNumber",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],"?",["escape",["macro",0],8,16],":\"Unknown Line\"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.errorUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",2],8,16],"?",["escape",["macro",2],8,16],":\"Unknown Error URL\"})();"]
    },{
      "function":"__e"
    },{
      "function":"__c",
      "vtp_value":"auto"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":["macro",6],
      "vtp_name":"fullUrl"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",7],8,16],";return a=a.replace(\"https:\/\/\"+",["escape",["macro",8],8,16],",\"\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"hitTimeOffset"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",10],8,16],",c=",["escape",["macro",11],8,16],",b=",["escape",["macro",12],8,16],";return(\"Time\"===a||\"Error\"===a)\u0026\u0026\"Time Engaged\"===c\u0026\u00260\u003C=b?b:0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",10],8,16],",b=",["escape",["macro",11],8,16],";return\"Time\"!==a\u0026\u0026\"Error\"!==a||\"Time Engaged\"!==b?null:\"beacon\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"title"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"euTrafficFlag"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"documentId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"templateName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"authorId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"templateId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"lastEditingAuthorId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"lastEditingUserId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"primaryTaxonomyIds"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"primaryTaxonomyNames"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"revenueGroup"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"recircDocIdsFooter"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"internalSessionId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"internalRequestId"
    },{
      "function":"__cid"
    },{
      "function":"__ctv"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"country"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"envData.client.usStateCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"viewType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"breakpointName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-commerce.20"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-commerce.21"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-commerce.22"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-commerce.23"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-commerce.24"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-commerce.25"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-commerce.26"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-commerce.27"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-commerce.28"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-commerce.29"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"envData.mantle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"envData.commerce"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"envData.environment.environment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"envData.environment.application"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"envData.environment.dataCenter"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"envData.server.version"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"envData.server.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"envData.client.deviceType"
    },{
      "function":"__j",
      "vtp_name":"navigator.userAgent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"envData.client.serverUA"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"experienceType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"experienceTypeName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={};document.getElementsByTagName(\"meta\");a.robots=document.querySelector('meta[name\\x3d\"robots\"]').content;a[\"fb:app_id\"]=document.querySelector('meta[property\\x3d\"fb:app_id\"]').content;return JSON.stringify(a)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",16],8,16],"||\"Direct\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.50"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.51"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.52"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.53"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.54"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.55"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.56"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.57"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.58"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.59"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.60"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.61"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.62"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.63"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.64"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.65"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.66"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.67"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.68"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.69"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.70"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.71"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.72"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.73"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.74"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.75"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.76"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.77"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.78"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor.79"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",8],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^www.investopedia.com$","value","UA-6319545-2"],["map","key","^www.thespruceeats.com$","value","UA-40872762-25"],["map","key","^www.simplyrecipes.com$","value","UA-10921550-1"],["map","key","^www.thespruce.com$","value","UA-90730390-2"],["map","key","^www.lifewire.com$","value","UA-44417706-3"],["map","key","^www.verywellhealth.com$","value","UA-44412006-2"],["map","key","^www.thebalance.com$","value","UA-44410308-2"],["map","key","^www.thoughtco.com$","value","UA-90728947-2"],["map","key","^www.thebalancecareers.com$","value","UA-40872762-28"],["map","key","^www.verywellfamily.com$","value","UA-40872762-24"],["map","key","^www.byrdie.com$","value","UA-41887917-1"],["map","key","^www.verywellmind.com$","value","UA-40872762-23"],["map","key","^www.thesprucecrafts.com$","value","UA-40872762-27"],["map","key","^www.thesprucepets.com$","value","UA-40872762-26"],["map","key","^www.verywellfit.com$","value","UA-40872762-22"],["map","key","^www.thebalancesmb.com$","value","UA-40872762-30"],["map","key","^www.treehugger.com$","value","UA-1096487-1"],["map","key","^www.liveabout.com$","value","UA-40872762-20"],["map","key","^www.aboutespanol.com$","value","UA-40872762-21"],["map","key","^www.tripsavvy.com$","value","UA-40872762-17"],["map","key","^www.liquor.com$","value","UA-11551319-1"],["map","key","^www.mydomaine.com$","value","UA-40536603-1"],["map","key","^www.learnreligions.com$","value","UA-40872762-35"],["map","key","^www.brides.com$","value","UA-8293713-5"],["map","key","^www.thebalanceeveryday.com$","value","UA-40872762-29"],["map","key",".*.","value","UA-49158591-34"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":["macro",5],
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",5]],["map","fieldName","page","value",["macro",9]],["map","fieldName","\u0026qt","value",["macro",13]],["map","fieldName","transport","value",["macro",14]],["map","fieldName","title","value",["macro",15]],["map","fieldName","forceSSL","value","true"],["map","fieldName","allowLinker","value","true"],["map","fieldName","\u0026dr","value",["macro",16]],["map","fieldName","anonymizeIp","value",["macro",17]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",18]],["map","index","2","dimension",["macro",19]],["map","index","3","dimension",["macro",20]],["map","index","4","dimension",["macro",21]],["map","index","5","dimension",["macro",22]],["map","index","6","dimension",["macro",23]],["map","index","7","dimension",["macro",24]],["map","index","8","dimension",["macro",25]],["map","index","9","dimension",["macro",26]],["map","index","10","dimension",["macro",27]],["map","index","11","dimension",["macro",28]],["map","index","12","dimension",["macro",29]],["map","index","13","dimension",["macro",30]],["map","index","14","dimension",["macro",31]],["map","index","15","dimension",["macro",32]],["map","index","16","dimension",["macro",17]],["map","index","17","dimension",["macro",33]],["map","index","18","dimension",["macro",34]],["map","index","19","dimension",["macro",35]],["map","index","20","dimension",["macro",36]],["map","index","21","dimension",["macro",37]],["map","index","22","dimension",["macro",38]],["map","index","23","dimension",["macro",39]],["map","index","24","dimension",["macro",40]],["map","index","25","dimension",["macro",41]],["map","index","26","dimension",["macro",42]],["map","index","27","dimension",["macro",43]],["map","index","28","dimension",["macro",44]],["map","index","29","dimension",["macro",45]],["map","index","30","dimension",["macro",46]],["map","index","31","dimension",["macro",47]],["map","index","32","dimension",["macro",48]],["map","index","33","dimension",["macro",49]],["map","index","34","dimension",["macro",50]],["map","index","35","dimension",["macro",51]],["map","index","36","dimension",["macro",52]],["map","index","41","dimension",["macro",53]],["map","index","42","dimension",["macro",54]],["map","index","43","dimension",["macro",55]],["map","index","44","dimension",["macro",56]],["map","index","45","dimension",["macro",57]],["map","index","46","dimension",["macro",58]],["map","index","48","dimension",["macro",59]],["map","index","50","dimension",["macro",60]],["map","index","51","dimension",["macro",61]],["map","index","52","dimension",["macro",62]],["map","index","53","dimension",["macro",63]],["map","index","54","dimension",["macro",64]],["map","index","55","dimension",["macro",65]],["map","index","56","dimension",["macro",66]],["map","index","57","dimension",["macro",67]],["map","index","58","dimension",["macro",68]],["map","index","59","dimension",["macro",69]],["map","index","60","dimension",["macro",70]],["map","index","61","dimension",["macro",71]],["map","index","62","dimension",["macro",72]],["map","index","63","dimension",["macro",73]],["map","index","64","dimension",["macro",74]],["map","index","65","dimension",["macro",75]],["map","index","66","dimension",["macro",76]],["map","index","67","dimension",["macro",77]],["map","index","68","dimension",["macro",78]],["map","index","69","dimension",["macro",79]],["map","index","70","dimension",["macro",80]],["map","index","71","dimension",["macro",81]],["map","index","72","dimension",["macro",82]],["map","index","73","dimension",["macro",83]],["map","index","74","dimension",["macro",84]],["map","index","75","dimension",["macro",85]],["map","index","76","dimension",["macro",86]],["map","index","77","dimension",["macro",87]],["map","index","78","dimension",["macro",88]],["map","index","79","dimension",["macro",89]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",90],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.errorMessage",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",92],8,16],"?",["escape",["macro",92],8,16],":\"Unknown\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"excludeFromComscore"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.elements.q.value"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-proctor"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",101],8,16],";return JSON.stringify(a)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"abTests-commerce"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",103],8,16],";return JSON.stringify(a)})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_customUrlSource":["macro",7],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",8],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","investopedia.com","value","07df195520ad2f003782e57760c8b0b1"],["map","key","liquor.com","value","c6781000a3c3da199eb0e2e15437e61a"],["map","key",".*","value","8ae929af5ef7a9d7fee584d8f47d5bf1"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.attributes.data-source.value"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.attributes.data-component.value"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){a=a||0===a?a.toString():\"\";a=a.replace(\/([a-z])([A-Z])\/g,\"$1 $2\");a=a.replace(\/([A-Z])([a-z])\/g,\" $1$2\");a=a.replace(\/ +\/g,\" \");y=a.charAt(0).toUpperCase()+a.slice(1);return y.trim()}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b){filteredKeys=[];for(var a in b)b[a]\u0026\u0026filteredKeys.push(a);arrayToJoin=[];for(a in filteredKeys)arrayToJoin.push(filteredKeys[a]+\": \"+b[filteredKeys[a]]);return arrayToJoin.join(\" | \")}})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.attributes.data-type.value"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkText"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkContainerId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nativeAdTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nativeAdCampaignID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkTargetURL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataHref"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataPinUrl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementsByTagName(\"html\")[0].id;return a.substr(0,a.indexOf(\"_\"))})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",49],
      "vtp_map":["list",["map","key","finance","value","555"],["map","key","lifestyle-food","value","559"],["map","key","simplyrecipes","value","5462"],["map","key","lifestyle","value","557"],["map","key","tech","value","552"],["map","key","health","value","563"],["map","key","money","value","553"],["map","key","reference","value","561"],["map","key","money-careers","value","554"],["map","key","health-family","value","564"],["map","key","beauty","value","2026"],["map","key","health-mind","value","566"],["map","key","lifestyle-crafts","value","558"],["map","key","lifestyle-pets","value","560"],["map","key","health-fitness","value","565"],["map","key","money-business","value","556"],["map","key","reference-green","value","3961"],["map","key","reference-fashion","value","382"],["map","key","reference-espanol","value","490"],["map","key","travel","value","562"],["map","key","liquor","value","3656"],["map","key","beauty-design","value","2027"],["map","key","reference-religion","value","2251"],["map","key","beauty-weddings","value","3144"],["map","key","money-hacks","value","2252"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"alreadyTrackedImpressions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataDocId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"dataOrdinal"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_defaultPages":["list"],
      "vtp_customUrlSource":["macro",7],
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"linkTargetType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageHeight"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageWidth"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"pageviewType"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",70],8,16],";return!!a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",71],8,16],";return!!a})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"JavaScript Error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",93],
      "vtp_eventLabel":["template","Line ",["macro",1]," ",["macro",3]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":2
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",91],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":4
    },{
      "function":"__csm",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_clientId":"6036459",
      "tag_id":8
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",95],
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",96],
      "vtp_eventCategory":["macro",10],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",11],
      "vtp_eventLabel":["macro",97],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":10
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",96],
      "vtp_eventCategory":["macro",10],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",11],
      "vtp_eventLabel":["macro",97],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":12
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",96],
      "vtp_eventCategory":["macro",10],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":["macro",11],
      "vtp_eventLabel":["macro",97],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":147
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventValue":["macro",96],
      "vtp_eventCategory":"Navigation",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"Internal Search",
      "vtp_eventLabel":["macro",100],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":157
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"AB Tests",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"Map Vertical Proctor Data",
      "vtp_eventLabel":["macro",102],
      "vtp_dimension":["list",["map","index","50","dimension",["macro",60]],["map","index","51","dimension",["macro",61]],["map","index","52","dimension",["macro",62]],["map","index","53","dimension",["macro",63]],["map","index","54","dimension",["macro",64]],["map","index","55","dimension",["macro",65]],["map","index","56","dimension",["macro",66]],["map","index","57","dimension",["macro",67]],["map","index","58","dimension",["macro",68]],["map","index","59","dimension",["macro",69]],["map","index","60","dimension",["macro",70]],["map","index","61","dimension",["macro",71]],["map","index","62","dimension",["macro",72]],["map","index","63","dimension",["macro",73]],["map","index","64","dimension",["macro",74]],["map","index","65","dimension",["macro",75]],["map","index","66","dimension",["macro",76]],["map","index","67","dimension",["macro",77]],["map","index","68","dimension",["macro",78]],["map","index","69","dimension",["macro",79]],["map","index","70","dimension",["macro",80]],["map","index","71","dimension",["macro",81]],["map","index","72","dimension",["macro",82]],["map","index","73","dimension",["macro",83]],["map","index","74","dimension",["macro",84]],["map","index","75","dimension",["macro",85]],["map","index","76","dimension",["macro",86]],["map","index","77","dimension",["macro",87]],["map","index","78","dimension",["macro",88]],["map","index","79","dimension",["macro",89]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":224
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"AB Tests",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",91],
      "vtp_eventAction":"Map Commerce Proctor Data",
      "vtp_eventLabel":["macro",104],
      "vtp_dimension":["list",["map","index","20","dimension",["macro",36]],["map","index","21","dimension",["macro",37]],["map","index","22","dimension",["macro",38]],["map","index","23","dimension",["macro",39]],["map","index","24","dimension",["macro",40]],["map","index","25","dimension",["macro",41]],["map","index","26","dimension",["macro",42]],["map","index","27","dimension",["macro",43]],["map","index","28","dimension",["macro",44]],["map","index","29","dimension",["macro",45]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":227
    },{
      "function":"__jel",
      "tag_id":228
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"13527222_150",
      "tag_id":229
    },{
      "function":"__fsl",
      "vtp_waitForTags":"",
      "vtp_checkValidation":"",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"13527222_156",
      "tag_id":230
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript data-gtmsrc=\"https:\/\/ak.sail-horizon.com\/spm\/spm.v1.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003ESailthru.init({customerId:",["escape",["macro",106],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":132
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];\n(function(e,a){function p(b){for(var c=0;c\u003Cb.length;c++)e.addEventListener?e.addEventListener(b[c],f):e.attachEvent\u0026\u0026e.attachEvent(\"on\"+b[c],f);window.onbeforeunload=function(){a.events.push(\"pageunload\");k()}}function f(b){b=b.type;var c=Date.now();a.start\u0026\u0026(a.firstTime=c,a.start=!1);a.events[a.events.length-1]!==b\u0026\u0026a.events.push(b);a.lastTime=c}function l(){return{start:!0,firstTime:0,lastTime:0,events:[]}}function k(){if(0\u003Ca.events.length)if(gapMilliseconds=a.firstTime-g.lastTime,engagedTime=gapMilliseconds\u003C\nh?a.lastTime-g.lastTime:a.lastTime-a.firstTime,events=a.events.join(\", \"),0\u003CengagedTime\u0026\u0026engagedTime\u003C=2*h){var b=events,c=engagedTime;var d=Date.now();d-=a.lastTime;m(\"timeEngaged\",b,c,n+\" Second Interval\",d)}else 1\u003EengagedTime||(b=events,c=engagedTime,d=Date.now(),d-=a.lastTime,m(\"timeEngagedError\",b,c,n+\" Second Interval\",d));g=a;a=l()}function q(){a=l();p(r);f({type:\"pageload\"});setInterval(function(){k()},h)}function m(a,c,d,e,h){c=window.dataLayer||[];var b=\"transmitNonInteractiveEvent\";if(\"timeEngaged\"==\na){var f=\"Time\";var g=\"Time Engaged\";var k=e;var l=\"\"}else\"timeEngagedError\"==a\u0026\u0026(f=\"Error\",g=\"Time Engaged\",k=e,d=l=\"\");c.push({event:b,eventCategory:f,eventAction:g,eventLabel:k,eventValue:l,millisecondsEngaged:d,hitTimeOffset:h})}var h=3E4,n=Math.round(h\/1E3),r=[\"mouseover\",\"touchstart\",\"keydown\"],g={lastTime:0};q()})(window.document);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":137
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cleanVarName=",["escape",["macro",109],8,16],",cleanJoin=",["escape",["macro",110],8,16],";\nif(\"topicMap\"==",["escape",["macro",111],8,16],"){var action=",["escape",["macro",112],8,16],";action.match(\/zoom.+\/)?dataLayer.push({event:\"transmitInteractiveEvent\",eventCategory:\"Navigation\",eventAction:\"Topic Map\",eventLabel:\"Zoom\"}):dataLayer.push({event:\"transmitInteractiveEvent\",eventCategory:\"Navigation\",eventAction:\"Topic Map\",eventLabel:cleanVarName(action)})}else if(\"gtm.linkClick\"==",["escape",["macro",111],8,16],"){var filter=",["escape",["macro",113],8,16],",source=",["escape",["macro",107],8,16],";action=",["escape",["macro",108],8,16],";-1\u003Csource.indexOf(\"Map\")\u0026\u0026\n-1\u003Caction.indexOf(\"Filter\")\u0026\u0026dataLayer.push({event:\"transmitInteractiveEvent\",eventCategory:\"Navigation\",eventAction:\"Topic Map\",eventLabel:action})};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":152
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(g){function h(){var a=document.createEvent(\"Event\");a.initEvent(\"click-sent\",!0,!0);document.body.dispatchEvent(a)}var d=",["escape",["macro",114],8,16],",a=",["escape",["macro",115],8,16],",e=",["escape",["macro",116],8,16],",b=",["escape",["macro",117],8,16],",c=b.indexOf(\"_\");b=-1!=c?b.substr(0,c):b;if(\"native-ad\"==b)b=\"Advertisement\",d=d?d:a?a:\"No Text or ID\",a=",["escape",["macro",118],8,16],",e=",["escape",["macro",119],8,16],",a=a?e?a+\" (Native Ad Campaign ID: \"+e+\")\":a+\" (Native Ad Campaign ID: Unknown)\":e?\"Unknown (Native Ad Campaign ID: \"+e+\")\":\"Unidentified Campaign\";\nelse{c=",["escape",["macro",120],8,16],"||",["escape",["macro",121],8,16],";var f=",["escape",["macro",122],8,16],";c\u0026\u0026\"#\"!=c||!f||(c=f);b=b?b+\" Click\":\"Link Click (No Tracked Container)\";a=a?a:d?d:e?e:\"No Text or ID\";d=c?c:\"No Target URL\"}g.push({event:\"transmitInteractiveEvent\",eventCategory:b,eventAction:a,eventLabel:d,eventValue:\"\",nonInteraction:!1,eventCallback:h})})(window.dataLayer||[]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":160
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript id=\"ze-snippet\" data-gtmsrc=\"https:\/\/static.zdassets.com\/ekr\/snippet.js?key=4d641c7d-8352-4188-8492-72f6f4c6a0a6\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":180
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar googletag=window.googletag||{};googletag.cmd=googletag.cmd||[];\n(function(){function e(){var a=0,b=0,c=1E-4,h=",["escape",["macro",101],8,16],";window.RProfiler.addInfo(\"tracepoint\",\"rid\",",["escape",["macro",29],8,16],");window.RProfiler.addInfo(\"tracepoint\",\"sid\",",["escape",["macro",28],8,16],");window.RProfiler.addInfo(\"pageGroup\",",["escape",["macro",123],8,16],");window.debug.log(\"rawABTestInfo\",h);Object.keys(h).forEach(function(d){if(-1===d.indexOf(\"99\")){window.debug.log(\"RUM Variation tracking: \"+d+\"\\x3d\"+h[d]);var k=h[d].split(\" | \");window.RProfiler.addInfo(\"tracepoint\",\"ab_\"+k[0].toLowerCase(),\nd+\" (\"+k[2]+\")\")}});googletag.cmd.push(function(){googletag.pubads().addEventListener(\"slotRenderEnded\",function(d){a++;window.debug.log(\"ad: slot rendered \"+d.slot.getSlotElementId())});googletag.pubads().addEventListener(\"impressionViewable\",function(d){b++;window.debug.log(\"ad: slot viewable \"+d.slot.getSlotElementId())})});var g=new PerformanceObserver(function(d){d.getEntries().forEach(function(k){window.debug.log(\"layoutShift\",k);k.hadRecentInput||(c+=k.value)})});g.observe({type:\"layout-shift\",\nbuffered:!0});window.addEventListener(\"beforeunload\",function(d){window.RProfiler.addInfo(\"indicator\",\"adsrendered\",a);window.RProfiler.addInfo(\"indicator\",\"adsviewable\",b);window.RProfiler.addInfo(\"indicator\",\"cls\",parseFloat(parseFloat(c).toFixed(4)));window.RProfiler.addInfo(\"conversion\",b,a);window.debug.log(\"slots rendered: \"+a);window.debug.log(\"slots viewable: \"+b);window.debug.log(\"cls\",parseFloat(parseFloat(c).toFixed(4)))})}window.RProfiler?e():window.addEventListener(\"GlimpseLoaded\",e)})();\nvar WindowEvent,VisibilityType;(function(e){e.Load=\"load\";e.BeforeUnload=\"beforeunload\";e.Abort=\"abort\";e.Error=\"error\";e.Unload=\"unload\"})(WindowEvent||(WindowEvent={}));(function(e){e[e.Focus=0]=\"Focus\";e[e.Blur=1]=\"Blur\"})(VisibilityType||(VisibilityType={}));\nvar AjaxTiming=function(){function e(a,b,c,h){var g=this;this.getPerformanceTimings=function(d){g.connect=d.connectEnd-d.connectStart;g.dns=d.domainLookupEnd-d.domainLookupStart;g.duration=d.duration;g.load=d.responseEnd-d.responseStart;g.wait=d.responseStart-d.requestStart;g.start=d.startTime;g.redirect=d.redirectEnd-d.redirectStart;d.secureConnectionStart\u0026\u0026(g.ssl=d.connectEnd-d.secureConnectionStart)};this.url=a;this.method=b;this.isAsync=c;this.open=h}return e}(),ProfilerJsError=function(){function e(a,\nb,c){this.count=0;this.message=a;this.url=b;this.lineNumber=c}return e.createText=function(a,b,c){return[a,b,c].join(\":\")},e.prototype.getText=function(){return e.createText(this.message,this.url,this.lineNumber)},e}(),ProfilerEventManager=function(){function e(){this.events=[];this.hasAttachEvent=!!window.attachEvent}return e.prototype.add=function(a,b,c){this.events.push({type:a,target:b,func:c});this.hasAttachEvent?b.attachEvent(\"on\"+a,c):b.addEventListener(a,c,!1)},e.prototype.remove=function(a,\nb,c){this.hasAttachEvent?b.detachEvent(a,c):b.removeEventListener(a,c,!1);a=this.events.indexOf({type:a,target:b,func:c});1!==a\u0026\u0026this.events.splice(a,1)},e.prototype.clear=function(){for(var a,b=0,c=this.events;b\u003Cc.length;b++)a=c[b],this.remove(a.type,a.target,a.func);this.events=[]},e}(),RProfiler=function(){function e(){function a(f){f=f.target||f.srcElement;return 3==f.nodeType\u0026\u0026(f=f.parentNode),h(\"N\/A\",f.src||f.URL,-1),!1}var b=this,c;this.restUrl=\"g.3gl.net\/jp\/\"+",["escape",["macro",124],8,16],"+\"\/v3.3.0\/M\";\nthis.startTime=(new Date).getTime();this.eventsTimingHandler=new EventsTimingHandler;this.inputDelay=new InputDelayHandler;this.version=\"v3.3.0\";this.info={};this.hasInsight=!1;this.data={start:this.startTime,jsCount:0,jsErrors:[],loadTime:-1,loadFired:\"complete\"==window.document.readyState,ajax:[]};this.eventManager=new ProfilerEventManager;this.startAjaxCapture=function(){var f=XMLHttpRequest.prototype,l=f.open,n=f.send,q=[],r={},D=b.data.ajax,E=25,t=\"object\"==typeof performance\u0026\u0026\"function\"==typeof window.performance.now\u0026\u0026\n\"function\"==typeof window.performance.getEntriesByType;t\u0026\u0026\"function\"==typeof window.performance.setResourceTimingBufferSize\u0026\u0026window.performance.setResourceTimingBufferSize(300);var y=function(){return t?window.performance.now():(new Date).getTime()};f.open=function(u,m,v,z,G){void 0===v\u0026\u0026(v=!0);this.rpIndex=q.length;q.push(new AjaxTiming(m,u,v,y()));l.call(this,u,m,v,z,G)};f.send=function(u){var m=this,v=this.onreadystatechange,z;(this.onreadystatechange=function(G){var p=q[m.rpIndex];if(p){var A=\nm.readyState;switch(A){case 1:p.connectionEstablished=y();break;case 2:p.requestReceived=y();break;case 3:p.processingTime=y();break;case 4:p.complete=y();A=!(!m.response||null==m.response||void 0==m.response);switch(m.responseType){case \"text\":case \"\":\"string\"==typeof m.responseText\u0026\u0026(p.responseSize=m.responseText.length);break;case \"json\":A\u0026\u0026\"function\"==typeof m.response.toString\u0026\u0026(p.responseSize=m.response.toString().length);break;case \"arraybuffer\":A\u0026\u0026\"number\"==typeof m.response.byteLength\u0026\u0026(p.responseSize=\nm.response.byteLength);break;case \"blob\":A\u0026\u0026\"number\"==typeof m.response.size\u0026\u0026(p.responseSize=m.response.size)}(function(B){setTimeout(function(){var w,F;if(t){var C=B.url,x=[];var H=performance.getEntriesByType(\"resource\");for(w=0;w\u003CH.length;w++){var I=H[w];I.name==C\u0026\u0026x.push(I)}if(D.push(B),0!=x.length)if(r[C]||(r[C]=[]),1==x.length)B.getPerformanceTimings(x[0]),r[C].push(0);else{w=r[C];for(F in x)if(-1==w.indexOf(F)){B.getPerformanceTimings(x[F]);w.push(F);return}B.getPerformanceTimings(x[0])}}},\nE)})(p,D)}\"function\"==typeof v\u0026\u0026v.call(m,G)}},z=q[this.rpIndex],z)\u0026\u0026(u\u0026\u0026!isNaN(u.length)\u0026\u0026(z.sendSize=u.length),z.send=y(),n.call(this,u))}};this.recordPageLoad=function(){b.data.loadTime=(new Date).getTime();b.data.loadFired=!0};this.addError=function(f,l,n){var q,r;b.data.jsCount++;var D=ProfilerJsError.createText(f,l,n);var E=b.data.jsErrors;var t=0;for(q=E;t\u003Cq.length;t++)if(r=q[t],r.getText()==D){r.count++;return}E.push(new ProfilerJsError(f,l,n))};this.addInfo=function(f,l,n){if(!b.isNullOrEmpty(f)){if(b.isNullOrEmpty(n))b.info[f]=\nl;else{if(b.isNullOrEmpty(l))return;b.isNullOrEmpty(b.info[f])\u0026\u0026(b.info[f]={});b.info[f][l]=n}b.hasInsight=!0}};this.clearInfo=function(){b.info={};b.hasInsight=!1};this.clearErrors=function(){b.data.jsCount=0;b.data.jsErrors=[]};this.clearAjax=function(){b.data.ajax=[]};this.getInfo=function(){return b.hasInsight?b.info:null};this.getEventTimingHandler=function(){return b.eventsTimingHandler};this.getInputDelay=function(){return b.inputDelay};this.eventManager.add(WindowEvent.Load,window,this.recordPageLoad);\nvar h=this.addError;this.startAjaxCapture();window.opera?this.eventManager.add(WindowEvent.Error,document,a):\"onerror\"in window\u0026\u0026(c=window.onerror,window.onerror=function(f,l,n){return(h(f,l,n),c)?c(f,l,n):!1});!window.__cpCdnPath||(this.restUrl=window.__cpCdnPath.trim());var g=window.location.protocol;var d=document.createElement(\"iframe\");d.src=\"about:blank\";var k=d.style;k.position=\"absolute\";k.top=\"-10000px\";k.left=\"-1000px\";d.addEventListener(\"load\",function(f){f=f.currentTarget;var l,n;f\u0026\u0026f.contentDocument\u0026\u0026\n(l=f.contentDocument,n=l.createElement(\"script\"),n.type=\"text\/javascript\",n.src=g+\"\/\/\"+b.restUrl,l.body.appendChild(n))});k=document.getElementsByTagName(\"script\")[0];k.parentNode.insertBefore(d,k)}return e.prototype.isNullOrEmpty=function(a){return void 0===a||null===a?!0:\"string\"==typeof a?0==a.trim().length:!1},e.prototype.dispatchCustomEvent=function(a){(function(b){function c(h,g){g=g||{bubbles:!1,cancelable:!1,detail:void 0};var d=document.createEvent(\"CustomEvent\");return d.initCustomEvent(h,\ng.bubbles,g.cancelable,g.detail),d}if(\"function\"==typeof b.CustomEvent)return!1;c.prototype=Event.prototype;b.CustomEvent=c})(window);a=new CustomEvent(a);window.dispatchEvent(a)},e}(),InputDelayHandler=function(){function e(){var a=this;this.delay=this.startTime=this.firstInputTimeStamp=this.firstInputDelay=0;this.profileManager=new ProfilerEventManager;this.eventTypes=[\"click\",\"mousedown\",\"keydown\",\"touchstart\",\"pointerdown\"];this.addEventListeners=function(){a.eventTypes.forEach(function(b){a.profileManager.add(b,\ndocument,a.onInput)})};this.now=function(){return(new Date).getTime()};this.removeEventListeners=function(){a.eventTypes.forEach(function(b){a.profileManager.remove(b,document,a.onInput)})};this.onInput=function(b){var c,h,g;b.cancelable\u0026\u0026(c=1E12\u003Cb.timeStamp,a.firstInputTimeStamp=a.now(),h=c||!window.performance,g=h?a.firstInputTimeStamp:window.performance.now(),a.delay=g-b.timeStamp,\"pointerdown\"==b.type?a.onPointerDown():(a.removeEventListeners(),a.updateFirstInputDelay()))};this.onPointerUp=function(){a.removeEventListeners();\na.updateFirstInputDelay()};this.onPointerCancel=function(){a.removePointerEventListeners()};this.removePointerEventListeners=function(){a.profileManager.remove(\"pointerup\",document,a.onPointerUp);a.profileManager.remove(\"pointercancel\",document,a.onPointerCancel)};this.updateFirstInputDelay=function(){0\u003C=a.delay\u0026\u0026a.delay\u003Ca.firstInputTimeStamp-a.startTime\u0026\u0026(a.firstInputDelay=Math.round(a.delay))};this.startSoftNavigationCapture=function(){a.resetSoftNavigationCapture()};this.resetSoftNavigationCapture=\nfunction(){a.resetFirstInputDelay();a.addEventListeners()};this.resetFirstInputDelay=function(){a.delay=0;a.firstInputDelay=0;a.startTime=0;a.firstInputTimeStamp=0};this.startTime=this.now();this.addEventListeners()}return e.prototype.onPointerDown=function(){this.profileManager.add(\"pointerup\",document,this.onPointerUp);this.profileManager.add(\"pointercancel\",document,this.onPointerCancel)},e.prototype.getFirstInputDelay=function(){return this.firstInputDelay},e}(),EventsTimingHandler=function(){function e(){var a=\nthis;this.hiddenStrings=[\"hidden\",\"msHidden\",\"webkitHidden\",\"mozHidden\"];this.visibilityStrings=[\"visibilitychange\",\"msvisibilitychange\",\"webkitvisibilitychange\",\"mozvisibilitychange\"];this.captureSoftNavigation=!1;this.hidden=\"hidden\";this.visibilityChange=\"visibilitychange\";this.visibilityEvents=[];this.eventManager=new ProfilerEventManager;this.engagementTimeIntervalMs=1E3;this.lastEventTimeStamp=this.firstEngagementTime=this.engagementTime=0;this.timeoutId=void 0;this.startTime=(new Date).getTime();\nthis.now=function(){return(new Date).getTime()};this.startVisibilityCapture=function(){a.initializeVisibilityProperties();document.addEventListener(a.visibilityChange,a.captureFocusEvent,!1)};this.initializeVisibilityProperties=function(){for(var b=a.hiddenStrings,c=0,h=0;h\u003Cb.length;h++)\"undefined\"!=typeof document[b[h]]\u0026\u0026(c=h);a.visibilityChange=a.visibilityStrings[c];a.hidden=a.hiddenStrings[c]};this.captureFocusEvent=function(){a.updateVisibilityChangeTime();document[a.hidden]||a.captureEngagementTime()};\nthis.updateVisibilityChangeTime=function(){document[a.hidden]?a.captureVisibilityEvent(VisibilityType.Blur):a.captureVisibilityEvent(VisibilityType.Focus)};this.onBlur=function(){a.captureVisibilityEvent(VisibilityType.Blur)};this.onFocus=function(){a.captureVisibilityEvent(VisibilityType.Focus)};this.captureVisibilityEvent=function(b){a.visibilityEvents.push({type:b,time:a.now()})};this.captureEngagementTime=function(b){if(void 0===b\u0026\u0026(b=!0),a.lastEventTimeStamp){var c=a.now()-a.lastEventTimeStamp;\n(a.lastEventTimeStamp=a.now(),b\u0026\u00260===a.firstEngagementTime\u0026\u0026(a.firstEngagementTime=a.now()),0\u003Cc\u0026\u0026c\u003Ca.engagementTimeIntervalMs)?(clearTimeout(a.timeoutId),a.engagementTime+=c):a.startTimer()}else a.engagementTime=a.engagementTimeIntervalMs,a.lastEventTimeStamp=a.now()};this.captureMouseMove=function(){a.captureEngagementTime(!1)};this.startTimer=function(){a.timeoutId=setTimeout(function(){a.engagementTime+=a.engagementTimeIntervalMs},a.engagementTimeIntervalMs)};this.getFocusAwayTime=function(){var b=\na.visibilityEvents,c=-1,h;if(0===b.length)return 0;for(var g=c,d=0,k=c,f=0;d\u003Cb.length;){b[d].type===VisibilityType.Blur\u0026\u0026g===c\u0026\u0026(g=d);var l=k===c\u0026\u0026g!==c;b[d].type===VisibilityType.Focus\u0026\u0026l\u0026\u0026(k=d);(l=g!==c\u0026\u0026k!==c)\u0026\u0026(h=b[k].time-b[g].time,0\u003Ch\u0026\u0026(f+=h),g=c,k=c);d+=1}return g===b.length-1\u0026\u0026(f+=a.now()-b[g].time),f};this.getEngagementTime=function(){return a.engagementTime};this.getStartTime=function(){return a.startTime};this.getFirstEngagementTime=function(){return a.firstEngagementTime};this.startSoftNavigationCapture=\nfunction(){a.captureSoftNavigation=!0};this.resetSoftNavigationCapture=function(){a.resetEngagementMetrics();a.visibilityEvents=[]};this.resetEngagementMetrics=function(){a.engagementTime=0;a.lastEventTimeStamp=a.now();a.firstEngagementTime=0};this.clear=function(){a.eventManager.clear()};this.captureEngagementTime(!1);this.eventManager.add(\"scroll\",document,this.captureEngagementTime);this.eventManager.add(\"resize\",window,this.captureEngagementTime);this.eventManager.add(\"mouseup\",document,this.captureEngagementTime);\nthis.eventManager.add(\"keyup\",document,this.captureEngagementTime);this.eventManager.add(\"mousemove\",document,this.captureMouseMove);this.eventManager.add(\"focus\",window,this.onFocus);this.eventManager.add(\"blur\",window,this.onBlur);this.eventManager.add(\"focus\",document,this.onFocus);this.eventManager.add(\"blur\",document,this.onBlur)}return e}(),profiler=new RProfiler;window.RProfiler=profiler;window.WindowEvent=WindowEvent;profiler.dispatchCustomEvent(\"GlimpseLoaded\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":186
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction browserReportListener(){window.addEventListener(\"message\",function(a){var c=\"https:\/\/\"+window.location.hostname;if(a.origin!==c\u0026\u0026\"string\"===typeof a.data)try{var b=JSON.parse(a.data);\"BrowserReport\"===b.type\u0026\u0026(a=b,dataLayer.push({event:\"transmitNonInteractiveEvent\",eventCategory:\"Reporting API\",eventAction:JSON.stringify(a.report),eventLabel:a.ad_id+\"|\"+a.advertiser_id+\"|\"+a.campaign_id+\"|\"+a.creative_id}))}catch(d){}},!1)}browserReportListener();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":198
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"Unknown Line"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"Unknown Error URL"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.pageError"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"unifiedPageview"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"readyForThirdPartyTracking"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",94],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"analyticsEvent"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"videoEvent"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"transmitNonInteractiveEvent"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"transmitInteractiveEvent"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"mntlDynamicTooltip"
    },{
      "function":"_re",
      "arg0":["macro",98],
      "arg1":".*.\\\/search([\\\/]*)$"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_re",
      "arg0":["macro",99],
      "arg1":"(^$|((^|,)13527222_156($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"ab-proctor"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"ab-commerce"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",105],
      "arg1":"state\\=PREVIEW"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"topicMap"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"70"
    },{
      "function":"_cn",
      "arg0":["macro",107],
      "arg1":"Map"
    },{
      "function":"_cn",
      "arg0":["macro",108],
      "arg1":"Filter"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",99],
      "arg1":"(^$|((^|,)13527222_150($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"linkClick"
    },{
      "function":"_re",
      "arg0":["macro",53],
      "arg1":"^pc$|^desktop$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"investopedia.com"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"prod"
    },{
      "function":"_cn",
      "arg0":["macro",105],
      "arg1":"bypassProdOnly=true"
    }],
  "rules":[
    [["if",2],["unless",0,1],["add",0]],
    [["if",3],["add",1,18]],
    [["if",4],["add",2,12]],
    [["if",7],["add",3]],
    [["if",8],["add",3]],
    [["if",9],["add",4]],
    [["if",10],["add",5]],
    [["if",11],["add",5]],
    [["if",12,13,14],["add",6]],
    [["if",15],["add",7]],
    [["if",16],["add",8]],
    [["if",17],["add",9,10,11]],
    [["if",20],["add",13]],
    [["if",21],["add",14]],
    [["if",22,23,24,25,26],["add",14]],
    [["if",27],["add",15]],
    [["if",4,28,29],["add",16]],
    [["if",4,30],["add",17]],
    [["if",4,31],["unless",30],["add",17]],
    [["if",4,5],["block",2,12,16]],
    [["if",4,6],["block",2]],
    [["if",18,19],["block",12]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ca=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ba(a)}},da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ka={a:!0},na={};try{na.__proto__=ka;ha=na.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var oa=fa,pa=function(a,b){a.prototype=da(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ti=b.prototype},qa=this||self,ta=function(a){if(a&&a!=qa)return ra(a.document);null===sa&&(sa=ra(qa.document));return sa},ua=/^[\w+/_-]+[=]{0,2}$/,sa=null,ra=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&ua.test(c))return c}return""},va=function(a){return a};var xa={},za=function(a,b){xa[a]=xa[a]||[];xa[a][b]=!0},Aa=function(a){for(var b=[],c=xa[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Ba=function(){},Da=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},Ga=function(a){return"number"==typeof a&&!isNaN(a)},Ha=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&za("TAGGING",4):za("TAGGING",5);return b},Ia=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ja=function(a,b){if(a&&Ha(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ka=function(a,b){if(!Ga(a)||!Ga(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Na=function(a,b){for(var c=new La,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Oa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Qa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Sa=
function(a){return Math.round(Number(a))||0},Wa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Xa=function(a){var b=[];if(Ha(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ya=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Za=function(){return(new Date).getTime()},La=function(){this.prefix="gtm.";this.values={}};La.prototype.set=function(a,b){this.values[this.prefix+a]=b};La.prototype.get=function(a){return this.values[this.prefix+a]};
var $a=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},cb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},db=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},fb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},hb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},ib=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},jb=function(a){var b=
[];Oa(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var kb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,lb=function(a){if(null==a)return String(a);var b=kb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},nb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ob=function(a){if(!a||"object"!=lb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!nb(a,"constructor")&&!nb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||nb(a,b)},m=function(a,b){var c=b||("array"==lb(a)?[]:{}),d;for(d in a)if(nb(a,d)){var e=a[d];"array"==lb(e)?("array"!=lb(c[d])&&(c[d]=[]),c[d]=m(e,c[d])):ob(e)?(ob(c[d])||(c[d]={}),c[d]=m(e,c[d])):c[d]=e}return c};var pb=function(a){if(void 0===a||Ha(a)||ob(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var qb=function(){var a=function(b){return{toString:function(){return b}}};return{Pf:a("consent"),Qf:a("consent_always_fire"),ce:a("convert_case_to"),de:a("convert_false_to"),ee:a("convert_null_to"),fe:a("convert_true_to"),he:a("convert_undefined_to"),wi:a("debug_mode_metadata"),Na:a("function"),Dg:a("instance_name"),Fg:a("live_only"),Gg:a("malware_disabled"),Hg:a("metadata"),zi:a("original_activity_id"),Ai:a("original_vendor_template_id"),Jg:a("once_per_event"),Xe:a("once_per_load"),af:a("setup_tags"),
bf:a("tag_id"),cf:a("teardown_tags")}}();
var rb=[],sb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},tb=function(a){return sb[a]},ub=/[\x00\x22\x26\x27\x3c\x3e]/g;var Bb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Cb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Db=function(a){return Cb[a]};
rb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Bb,Db)+"'"}};var Mb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Nb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Ob=function(a){return Nb[a]};rb[16]=function(a){return a};var Qb;
var Rb=[],Sb=[],Tb=[],Ub=[],Vb=[],Wb={},Xb,Yb,Zb,$b=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Wb[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.hf&&b.hf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===qb.Qf.toString()&&a[f]){}return void 0!==d?d(e):Qb(c,e,b)},bc=function(a,b,c){c=
c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=ac(a[e],b,c));return d},ac=function(a,b,c){if(Ha(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(ac(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=Rb[f];if(!h||b.Cd(h))return;c[f]=!0;try{var k=bc(h,b,c);k.vtp_gtmEventId=b.id;d=$b(k,b);Zb&&(d=Zb.jh(d,k))}catch(y){b.yf&&b.yf(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[ac(a[l],b,c)]=ac(a[l+
1],b,c);return d;case "template":d=[];for(var p=!1,q=1;q<a.length;q++){var n=ac(a[q],b,c);Yb&&(p=p||n===Yb.ic);d.push(n)}return Yb&&p?Yb.mh(d):d.join("");case "escape":d=ac(a[1],b,c);if(Yb&&Ha(a[1])&&"macro"===a[1][0]&&Yb.Ih(a))return Yb.Yh(d);d=String(d);for(var u=2;u<a.length;u++)rb[a[u]]&&(d=rb[a[u]](d));return d;case "tag":var t=a[1];if(!Ub[t])throw Error("Unable to resolve tag reference "+t+".");return d={qf:a[2],index:t};case "zb":var r={arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];
var v=ec(r,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},ec=function(a,b,c){try{return Xb(bc(a,b,c))}catch(d){JSON.stringify(a)}return 2};var fc=null,ic=function(a){function b(n){for(var u=0;u<n.length;u++)d[n[u]]=!0}var c=[],d=[];fc=gc(a);for(var e=0;e<Sb.length;e++){var f=Sb[e],h=hc(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var p=[],q=0;q<Ub.length;q++)c[q]&&!d[q]&&(p[q]=!0);return p},hc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=fc(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=fc(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},gc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=ec(Tb[c],a));return b[c]}};var jc={jh:function(a,b){b[qb.ce]&&"string"===typeof a&&(a=1==b[qb.ce]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(qb.ee)&&null===a&&(a=b[qb.ee]);b.hasOwnProperty(qb.he)&&void 0===a&&(a=b[qb.he]);b.hasOwnProperty(qb.fe)&&!0===a&&(a=b[qb.fe]);b.hasOwnProperty(qb.de)&&!1===a&&(a=b[qb.de]);return a}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var C={Ab:"_ee",od:"_syn",Di:"_uei",hd:"_eu",Bi:"_pci",Wc:"event_callback",$b:"event_timeout",Z:"gtag.config",ya:"gtag.get",la:"purchase",Ya:"refund",Ka:"begin_checkout",Wa:"add_to_cart",Xa:"remove_from_cart",Yf:"view_cart",me:"add_to_wishlist",xa:"view_item",ke:"view_promotion",je:"select_promotion",Rc:"select_item",Xb:"view_item_list",ie:"add_payment_info",Xf:"add_shipping_info",Ba:"value_key",Aa:"value_callback",ia:"allow_ad_personalization_signals",dd:"restricted_data_processing",qb:"allow_google_signals",
ja:"cookie_expires",tb:"cookie_update",xb:"session_duration",na:"user_properties",Da:"transport_url",M:"ads_data_redaction",Le:"user_data",ac:"first_party_collection",B:"ad_storage",J:"analytics_storage",ae:"region",be:"wait_for_update"};C.Oe=[C.la,C.Ya,C.Ka,C.Wa,C.Xa,C.Yf,C.me,C.xa,C.ke,C.je,C.Xb,C.Rc,C.ie,C.Xf];C.Ne=[C.ia,C.qb,C.tb];C.Pe=[C.ja,C.$b,C.xb];var F=function(a){za("GTM",a)};var Hc=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Ic=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Jc,Mc=function(){if(void 0===Jc){var a=null,b=qa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:va,createScript:va,createScriptURL:va})}catch(c){qa.console&&qa.console.error(c.message)}Jc=a}else Jc=a}return Jc};var Oc=function(a,b){this.m=b===Nc?a:""};Oc.prototype.toString=function(){return this.m+""};var Nc={};var Pc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Qc;a:{var Rc=qa.navigator;if(Rc){var Sc=Rc.userAgent;if(Sc){Qc=Sc;break a}}Qc=""}var Tc=function(a){return-1!=Qc.indexOf(a)};var Vc=function(a,b,c){this.m=c===Uc?a:""};Vc.prototype.toString=function(){return this.m.toString()};var Wc=function(a){return a instanceof Vc&&a.constructor===Vc?a.m:"type_error:SafeHtml"},Uc={},Xc=new Vc(qa.trustedTypes&&qa.trustedTypes.emptyHTML||"",0,Uc);var Yc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Wc(Xc);return!c.parentElement}),Zc=function(a,b){if(Yc())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Wc(b)};var $c=function(a){var b=Mc(),c=b?b.createHTML(a):a;return new Vc(c,null,Uc)};var G=window,H=document,ad=navigator,bd=H.currentScript&&H.currentScript.src,cd=function(a,b){var c=G[a];G[a]=void 0===c?b:c;return G[a]},fd=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},gd=function(a,b,c){var d=H.createElement("script");d.type="text/javascript";d.async=!0;var e,f=Mc(),h=f?f.createScriptURL(a):a;e=new Oc(h,Nc);d.src=e instanceof Oc&&e.constructor===Oc?e.m:"type_error:TrustedResourceUrl";
var k=ta(d.ownerDocument&&d.ownerDocument.defaultView);k&&d.setAttribute("nonce",k);fd(d,b);c&&(d.onerror=c);var l=ta();l&&d.setAttribute("nonce",l);var p=H.getElementsByTagName("script")[0]||H.body||H.head;p.parentNode.insertBefore(d,p);return d},hd=function(){if(bd){var a=bd.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},id=function(a,b){var c=H.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";
var d=H.body&&H.body.lastChild||H.body||H.head;d.parentNode.insertBefore(c,d);fd(c,b);void 0!==a&&(c.src=a);return c},jd=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},kd=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},ld=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},J=function(a){G.setTimeout(a,
0)},md=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},nd=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},od=function(a){var b=H.createElement("div"),c=$c("A<div>"+a+"</div>");Zc(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},pd=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=
a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},qd=function(a){ad.sendBeacon&&ad.sendBeacon(a)||jd(a)},rd=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var sd={},td=function(){return void 0==sd.gtag_cs_api?!1:sd.gtag_cs_api};var ud=[];function vd(){var a=cd("google_tag_data",{});a.ics||(a.ics={entries:{},set:wd,update:xd,addListener:yd,notifyListeners:zd,active:!1,usedDefault:!1});return a.ics}
function wd(a,b,c,d,e,f){var h=vd();h.active=!0;h.usedDefault=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},p=l.region,q=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||q===e||(q===d?p!==e:!q&&!p)){var n=!!(f&&0<f&&void 0===l.update),u={region:q,initial:"granted"===b,update:l.update,quiet:n};if(""!==d||!1!==l.initial)k[a]=u;n&&G.setTimeout(function(){k[a]===u&&u.quiet&&(u.quiet=!1,Ad(a),zd(),za("TAGGING",2))},f)}}}
function xd(a,b){var c=vd();c.active=!0;if(void 0!=b){var d=Bd(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=Bd(a);f.quiet?(f.quiet=!1,Ad(a)):h!==d&&Ad(a)}}function yd(a,b){ud.push({kf:a,vh:b})}function Ad(a){for(var b=0;b<ud.length;++b){var c=ud[b];Ha(c.kf)&&-1!==c.kf.indexOf(a)&&(c.Cf=!0)}}function zd(a){for(var b=0;b<ud.length;++b){var c=ud[b];if(c.Cf){c.Cf=!1;try{c.vh({jf:a})}catch(d){}}}}
var Bd=function(a){var b=vd().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Cd=function(a){return(vd().entries[a]||{}).initial},Dd=function(a){return!(vd().entries[a]||{}).quiet},Ed=function(){return td()?vd().active:!1},Fd=function(){return vd().usedDefault},Gd=function(a,b){vd().addListener(a,b)},Hd=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Dd(b[e]))return!0;return!1}if(c()){var d=!1;Gd(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Id=function(a,
b){if(!1===Bd(b)){var c=!1;Gd([b],function(d){!c&&Bd(b)&&(a(d),c=!0)})}};function Jd(a){for(var b=[],c=0;c<Kd.length;c++){var d=a(Kd[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Kd=[C.B,C.J],Ld=function(a){var b=a[C.ae];b&&F(40);var c=a[C.be];c&&F(41);for(var d=Ha(b)?b:[b],e=0;e<d.length;++e)for(var f in a)if(a.hasOwnProperty(f)&&f!==C.ae&&f!==C.be)if(-1<Ia(Kd,f)){var h=f,k=a[f],l=d[e];vd().set(h,k,l,"IN","IN-KA",c)}else{}},Md=function(a,b){for(var c in a)if(a.hasOwnProperty(c))if(-1<
Ia(Kd,c)){var d=c,e=a[c];vd().update(d,e)}else{}vd().notifyListeners(b)},Nd=function(a){var b=Bd(a);return void 0!=b?b:!0},Od=function(){return"G1"+Jd(Bd)},Pd=function(a,b){Hd(a,b)};var Rd=function(a){return Qd?H.querySelectorAll(a):null},Sd=function(a,b){if(!Qd)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!H.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Td=!1;if(H.querySelectorAll)try{var Ud=H.querySelectorAll(":root");Ud&&1==Ud.length&&Ud[0]==H.documentElement&&(Td=!0)}catch(a){}var Qd=Td;var Vd=function(a){if(H.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!G.getComputedStyle)return!0;var c=G.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=G.getComputedStyle(d,
null))}return!1};var ge=/:[0-9]+$/,he=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},ke=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ie(a.protocol)||ie(G.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:G.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||G.location.hostname).replace(ge,"").toLowerCase());return je(a,b,c,d,e)},je=function(a,b,c,d,e){var f,h=ie(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=le(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(ge,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||za("TAGGING",
1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ia(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=he(f,e,void 0));break;case "extension":var p=a.pathname.split(".");f=1<p.length?p[p.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ie=function(a){return a?a.replace(":","").toLowerCase():""},le=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},me=function(a){var b=H.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||za("TAGGING",1),c="/"+c);var d=b.hostname.replace(ge,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},ne=function(a){function b(p){var q=p.split("=")[0];return 0>d.indexOf(q)?p:q+"=0"}function c(p){return p.split("&").map(b).filter(function(q){return void 0!=q}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),
e=me(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var l=""+f+h+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var oe=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),pe=new RegExp(/support|noreply/i),qe=["SCRIPT","IMG","SVG","PATH","BR"],re=["BR"];function se(a){var b;if(a===H.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var h=0;h<f.childElementCount;h++)if(f.children[h]===a){e=h+1;break a}e=-1}else e=1}d=se(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
var ve=function(){var a=!0;var b=a,c;var d=[],e=H.body;if(e){for(var f=e.querySelectorAll("*"),h=0;h<f.length&&1E4>h;h++){var k=f[h];if(!(0<=qe.indexOf(k.tagName.toUpperCase()))){for(var l=!1,p=0;p<k.childElementCount&&1E4>p;p++)if(!(0<=re.indexOf(k.children[p].tagName.toUpperCase()))){l=!0;break}l||d.push(k)}}c={elements:d,status:1E4<f.length?"2":"1"}}else c=
{elements:d,status:"4"};for(var q=c,n=q.elements,u=[],t=0;t<n.length;t++){var r=n[t],v=r.textContent;r.value&&(v=r.value);if(v){var w=v.match(oe);if(w){var y=w[0],x;if(G.location){var A=je(G.location,"host",!0);x=0<=y.toLowerCase().indexOf(A)}else x=!1;x||u.push({element:r,Pc:y})}}}var z;for(var B=[],D=10<u.length?"3":q.status,E=0;E<u.length&&
10>E;E++){var I=u[E].element,M=u[E].Pc,N=!1;B.push({Pc:M,querySelector:se(I),tagName:I.tagName,isVisible:!Vd(I),type:1,Cc:!!N})}return{elements:B,status:D}};var Je={},L=null,Ke=Math.random();Je.D="GTM-5P3SZGS";Je.nc="2h0";Je.yi="";Je.Rf="ChAIgNXigQYQlPmthZ3g49xyEiQAZBHMTHZfZbTfN2bUjJHHKoiTRV8daXzoB3MujlDEyt6BfOUaApCn";var Le={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Me={__paused:!0,__tg:!0},Ne;for(Ne in Le)Le.hasOwnProperty(Ne)&&(Me[Ne]=!0);var Oe="www.googletagmanager.com/gtm.js";
var Pe=Oe,Qe=Wa(""),Re=null,Se=null,Te="//www.googletagmanager.com/a?id="+Je.D+"&cv=31",Ue={},Ve={},We=function(){var a=L.sequence||1;L.sequence=a+1;return a};var Xe={},Ye=new La,Ze={},$e={},cf={name:"dataLayer",set:function(a,b){m(ib(a,b),Ze);af()},get:function(a){return bf(a,2)},reset:function(){Ye=new La;Ze={};af()}},bf=function(a,b){return 2!=b?Ye.get(a):df(a)},df=function(a){var b,c=a.split(".");b=b||[];for(var d=Ze,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Ia(b,d))return}return d},ef=function(a,b){$e.hasOwnProperty(a)||(Ye.set(a,b),m(ib(a,b),Ze),af())},af=function(a){Oa($e,function(b,c){Ye.set(b,c);m(ib(b,
void 0),Ze);m(ib(b,c),Ze);a&&delete $e[b]})},ff=function(a,b,c){Xe[a]=Xe[a]||{};var d=1!==c?df(b):Ye.get(b);"array"===lb(d)||"object"===lb(d)?Xe[a][b]=m(d):Xe[a][b]=d},gf=function(a,b){if(Xe[a])return Xe[a][b]},hf=function(a,b){Xe[a]&&delete Xe[a][b]};var lf={},mf=function(a,b){if(G._gtmexpgrp&&G._gtmexpgrp.hasOwnProperty(a))return G._gtmexpgrp[a];void 0===lf[a]&&(lf[a]=Math.floor(Math.random()*b));return lf[a]};var nf=function(a){var b=1,c,d,e;if(a)for(b=0,d=a.length-1;0<=d;d--)e=a.charCodeAt(d),b=(b<<6&268435455)+e+(e<<14),c=b&266338304,b=0!=c?b^c>>21:b;return b};function qf(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var sf=function(a,b,c,d){return rf(d)?qf(a,String(b||document.cookie),c):[]},vf=function(a,b,c,d,e){if(rf(e)){var f=tf(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=uf(f,function(h){return h.xc},b);if(1===f.length)return f[0].id;f=uf(f,function(h){return h.Ob},c);return f[0]?f[0].id:void 0}}};function wf(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=sf(b,f,!1,d).indexOf(c)}
var Af=function(a,b,c){function d(t,r,v){if(null==v)return delete h[r],t;h[r]=v;return t+"; "+r+"="+v}function e(t,r){if(null==r)return delete h[r],t;h[r]=!0;return t+"; "+r}if(!rf(c.va))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=xf(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Mi);f=d(f,"samesite",
c.Qi);c.Ri&&(f=e(f,"secure"));var l=c.domain;if("auto"===l){for(var p=yf(),q=0;q<p.length;++q){var n="none"!==p[q]?p[q]:void 0,u=d(f,"domain",n);u=e(u,c.flags);if(!zf(n,c.path)&&wf(u,a,b,c.va))return 0}return 1}l&&"none"!==l&&(f=d(f,"domain",l));f=e(f,c.flags);return zf(l,c.path)?1:wf(f,a,b,c.va)?0:1},Bf=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Af(a,b,c)};
function uf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function tf(a,b,c){for(var d=[],e=sf(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),xc:1*l[0]||1,Ob:1*l[1]||1}))}}return d}
var xf=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Cf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Df=/(^|\.)doubleclick\.net$/i,zf=function(a,b){return Df.test(document.location.hostname)||"/"===b&&Cf.test(a)},yf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Df.test(e)||Cf.test(e)||a.push("none");
return a},rf=function(a){if(!td()||!a||!Ed())return!0;if(!Dd(a))return!1;var b=Bd(a);return null==b?!0:!!b};var Ef=function(){for(var a=ad.userAgent+(H.cookie||"")+(H.referrer||""),b=a.length,c=G.history.length;0<c;)a+=c--^b++;return[Math.round(2147483647*Math.random())^nf(a)&2147483647,Math.round(Za()/1E3)].join(".")},Hf=function(a,b,c,d,e){var f=Ff(b);return vf(a,f,Gf(c),d,e)},If=function(a,b,c,d){var e=""+Ff(c),f=Gf(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Ff=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Gf=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&
(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Jf(a,b,c){var d,e=a.Nb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Za())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Kf=["1"],Lf={},Of=function(a){var b=Mf(a.prefix),c=Lf[b];c&&Nf(b,c,a)},Qf=function(a){var b=Mf(a.prefix);if(!Lf[b]&&!Pf(b,a.path,a.domain)){var c=Ef();if(0===Nf(b,c,a)){var d=cd("google_tag_data",{});d._gcl_au?za("GTM",57):d._gcl_au=c}Pf(b,a.path,a.domain)}};function Nf(a,b,c){var d=If(b,"1",c.domain,c.path),e=Jf(c);e.va="ad_storage";return Bf(a,d,e)}function Pf(a,b,c){var d=Hf(a,b,c,Kf,"ad_storage");d&&(Lf[a]=d);return d}function Mf(a){return(a||"_gcl")+"_au"};function Rf(){for(var a=Sf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Tf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Sf,Uf;
function Vf(a){function b(l){for(;d<a.length;){var p=a.charAt(d++),q=Uf[p];if(null!=q)return q;if(!/^[\s\xa0]*$/.test(p))throw Error("Unknown base64 encoding at char: "+p);}return l}Sf=Sf||Tf();Uf=Uf||Rf();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Wf;var $f=function(){var a=Xf,b=Yf,c=Zf(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){kd(H,"mousedown",d);kd(H,"keyup",d);kd(H,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},ag=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Zf().decorators.push(f)},bg=function(a,b,c){for(var d=Zf().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,p=a,q=!!h.sameHost;if(l&&(q||p!==H.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof RegExp){if(l[n].test(p)){k=!0;break a}}else if(0<=p.indexOf(l[n])||q&&0<=l[n].indexOf(p)){k=!0;break a}k=!1}if(k){var u=h.placement;void 0==u&&(u=h.fragment?2:1);u===b&&db(e,h.callback())}}return e},Zf=function(){var a=cd("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var cg=/(.*?)\*(.*?)\*(.*)/,dg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,eg=/^(?:www\.|m\.|amp\.)+/,fg=/([^?#]+)(\?[^#]*)?(#.*)?/;function gg(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var ig=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,h,k=String(d);Sf=Sf||Tf();Uf=Uf||Rf();for(var l=[],p=0;p<k.length;p+=3){var q=p+1<k.length,n=p+2<k.length,u=k.charCodeAt(p),t=q?k.charCodeAt(p+1):0,r=n?k.charCodeAt(p+2):0,v=u>>2,w=(u&3)<<4|t>>4,y=(t&15)<<2|r>>6,x=r&63;n||(x=64,q||(y=64));l.push(Sf[v],Sf[w],Sf[y],Sf[x])}h=l.join("");f.call(e,h)}}var A=b.join("*");return["1",hg(A),
A].join("*")},hg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Wf)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Wf=d;for(var l=4294967295,p=0;p<c.length;p++)l=l>>>8^Wf[(l^c.charCodeAt(p))&255];return((l^-1)>>>0).toString(36)},kg=function(){return function(a){var b=me(G.location.href),
c=b.search.replace("?",""),d=he(c,"_gl",!0)||"";a.query=jg(d)||{};var e=ke(b,"fragment").match(gg("_gl"));a.fragment=jg(e&&e[3]||"")||{}}},lg=function(a){var b=kg(),c=Zf();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(db(d,e.query),a&&db(d,e.fragment));return d},jg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=cg.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var p=h[2],q=0;q<
b;++q)if(p===hg(k,q)){l=!0;break a}l=!1}if(l){for(var n={},u=k?k.split("*"):[],t=0;t<u.length;t+=2)n[u[t]]=Vf(u[t+1]);return n}}}}catch(r){}};function mg(a,b,c,d){function e(q){var n=q,u=gg(a).exec(n),t=n;if(u){var r=u[2],v=u[4];t=u[1];v&&(t=t+r+v)}q=t;var w=q.charAt(q.length-1);q&&"&"!==w&&(q+="&");return q+p}d=void 0===d?!1:d;var f=fg.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",p=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function ng(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=bg(b,1,c),e=bg(b,2,c),f=bg(b,3,c);if(fb(d)){var h=ig(d);c?og("_gl",h,a):pg("_gl",h,a,!1)}if(!c&&fb(e)){var k=ig(e);pg("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var p=l,q=f[l],n=a;if(n.tagName){if("a"===n.tagName.toLowerCase()){pg(p,q,n,void 0);break a}if("form"===n.tagName.toLowerCase()){og(p,q,n);break a}}"string"==typeof n&&mg(p,q,n,void 0)}}
function pg(a,b,c,d){if(c.href){var e=mg(a,b,c.href,void 0===d?!1:d);Pc.test(e)&&(c.href=e)}}
function og(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=H.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var p=mg(a,b,c.action);Pc.test(p)&&(c.action=p)}}}
var Xf=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||ng(e,e.hostname)}}catch(h){}},Yf=function(a){try{if(a.action){var b=ke(me(a.action),"host");ng(a,b)}}catch(c){}},qg=function(a,b,c,d){$f();ag(a,b,"fragment"===c?2:1,!!d,!1)},rg=function(a,b){$f();ag(a,[je(G.location,"host",!0)],b,!0,!0)},sg=function(){var a=H.location.hostname,b=dg.exec(H.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(eg,""),l=e.replace(eg,""),p;if(!(p=k===l)){var q="."+l;p=k.substring(k.length-q.length,k.length)===q}return p},tg=function(a,b){return!1===a?!1:a||b||sg()};var ug=/^\w+$/,vg=/^[\w-]+$/,wg=/^~?[\w-]+$/,xg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},yg=function(){if(!td()||!Ed())return!0;var a=Bd("ad_storage");return null==a?!0:!!a},zg=function(a,b){Dd("ad_storage")?yg()?a():Id(a,"ad_storage"):b?za("TAGGING",3):Hd(function(){zg(a,!0)},["ad_storage"])},Bg=function(a){return Ag(a).map(function(b){return b.Ia})},Ag=function(a){var b=[];if(!H.cookie)return b;var c=sf(a,H.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{lb:d.lb},e++){d.lb=Cg(c[e]);var f=Dg(c[e]);if(d.lb&&f){var h=Ja(b,function(k){return function(l){return l.Ia===k.lb}}(d));h&&h.timestamp<f?h.timestamp=f:h||b.push({Ia:d.lb,timestamp:f})}}return Eg(b)};function Fg(a){return a&&"string"==typeof a&&a.match(ug)?a:"_gcl"}
var Hg=function(){var a=me(G.location.href),b=ke(a,"query",!1,void 0,"gclid"),c=ke(a,"query",!1,void 0,"gclsrc"),d=ke(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||he(e,"gclid",void 0);c=c||he(e,"gclsrc",void 0)}return Gg(b,c,d)},Gg=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(vg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":e(a,
"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Ig=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b;case "gp":return"gp"===b}return!1},Kg=function(a){var b=Hg();zg(function(){Jg(b,a)})};
function Jg(a,b,c){function d(l,p){var q=Lg(l,e);q&&Bf(q,p,f)}b=b||{};var e=Fg(b.prefix);c=c||Za();var f=Jf(b,c,!0);f.va="ad_storage";var h=Math.round(c/1E3),k=function(l){return["GCL",h,l].join(".")};a.aw&&(!0===b.Wi?d("aw",k("~"+a.aw[0])):d("aw",k(a.aw[0])));a.dc&&d("dc",k(a.dc[0]));a.gf&&d("gf",k(a.gf[0]));a.ha&&d("ha",k(a.ha[0]));a.gp&&d("gp",k(a.gp[0]))}
var Mg=function(a,b){var c=lg(!0);zg(function(){for(var d=Fg(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==xg[f]){var h=Lg(f,d),k=c[h];if(k){var l=Math.min(Dg(k),Za()),p;b:{for(var q=l,n=sf(h,H.cookie,void 0,"ad_storage"),u=0;u<n.length;++u)if(Dg(n[u])>q){p=!0;break b}p=!1}if(!p){var t=Jf(b,l,!0);t.va="ad_storage";Bf(h,k,t)}}}}Jg(Gg(c.gclid,c.gclsrc),b)})},Lg=function(a,b){var c=xg[a];if(void 0!==c)return b+c},Dg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Cg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Ng=function(a,b,c,d,e){if(Ha(b)){var f=Fg(e),h=function(){for(var k={},l=0;l<a.length;++l){var p=Lg(a[l],f);if(p){var q=sf(p,H.cookie,void 0,"ad_storage");q.length&&(k[p]=q.sort()[q.length-1])}}return k};zg(function(){qg(h,b,c,d)})}},Eg=function(a){return a.filter(function(b){return wg.test(b.Ia)})},Og=function(a,b){for(var c=Fg(b.prefix),d={},e=0;e<a.length;e++)xg[a[e]]&&(d[a[e]]=xg[a[e]]);zg(function(){Oa(d,function(f,h){var k=sf(c+h,H.cookie,void 0,"ad_storage");if(k.length){var l=k[0],p=Dg(l),
q={};q[f]=[Cg(l)];Jg(q,b,p)}})})};function Pg(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Qg=function(){function a(e,f,h){h&&(e[f]=h)}var b=["aw","dc"];if(Ed()){var c=Hg();if(Pg(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);rg(function(){return d},3);rg(function(){var e={};return e._up="1",e},1)}}},Rg=function(){var a;if(yg()){for(var b=[],c=H.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Vd:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].Vd]||(h[b[k].Vd]=[]),h[b[k].Vd].push({timestamp:l[1],Ia:l[2]}))}a=h}else a={};return a};var Sg=/^\d+\.fls\.doubleclick\.net$/,Tg=!1;function Ug(a,b){Dd(C.B)?Nd(C.B)?a():Id(a,C.B):b?F(42):Pd(function(){Ug(a,!0)},[C.B])}function Vg(a){var b=me(G.location.href),c=ke(b,"host",!1);if(c&&c.match(Sg)){var d=ke(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Wg(a,b,c){if("aw"==a||"dc"==a){var d=Vg("gcl"+a);if(d)return d.split(".")}var e=Fg(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Nd(C.B)&&c,h;h=Hg()[a]||[];if(0<h.length)return f?["0"]:h}var k=Lg(a,e);return k?Bg(k):[]}
var Xg=function(a){var b=Vg("gac");if(b)return!Nd(C.B)&&a?"0":decodeURIComponent(b);var c=Rg(),d=[];Oa(c,function(e,f){f=Eg(f);for(var h=[],k=0;k<f.length;k++)h.push(f[k].Ia);h.length&&d.push(e+":"+h.join(","))});return d.join(";")},Zg=function(a,b){if(Tg)Yg(a,b,"dc");else{var c=Hg().dc||[];Ug(function(){Qf(b);var d=Lf[Mf(b.prefix)],e=!1;if(d&&0<c.length){var f=L.joined_au=L.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+
d;qd(l);e=f[h]=!0}}null==a&&(a=e);a&&d&&Of(b)})}},Yg=function(a,b,c){var d=Hg(),e=[],f=d.gclid,h=d.dclid,k=d.gclsrc||"aw";!f||"aw.ds"!==k&&"aw"!==k&&"ds"!==k||c&&!Ig(k,c)||e.push({Ia:f,vf:k});!h||c&&"dc"!==c||e.push({Ia:h,vf:"ds"});Ug(function(){Qf(b);var l=Lf[Mf(b.prefix)],p=!1;if(l&&0<e.length)for(var q=L.joined_auid=L.joined_auid||{},n=0;n<e.length;n++){var u=e[n],t=u.Ia,r=u.vf,v=(b.prefix||"_gcl")+"."+r+"."+t;if(!q[v]){var w="https://adservice.google.com/pagead/regclk";w=w+"?gclid="+t+"&auid="+l+"&gclsrc="+r;qd(w);
p=q[v]=!0}}null==a&&(a=p);a&&l&&Of(b)})};var $g=/[A-Z]+/,ah=/\s/,bh=function(a){if(g(a)&&(a=Ya(a),!ah.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if($g.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],F:d}}}}},dh=function(a){for(var b={},c=0;c<a.length;++c){var d=bh(a[c]);d&&(b[d.id]=d)}ch(b);var e=[];Oa(b,function(f,h){e.push(h)});return e};
function ch(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.F[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var eh=function(){var a=!1;return a};var gh=function(a,b,c,d){return(2===fh()||d||"http:"!=G.location.protocol?a:b)+c},fh=function(){var a=hd(),b;if(1===a)a:{var c=Pe;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=H.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var uh=function(a){return Nd(C.B)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=ne(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},vh=function(){var a;if(!(a=Qe)){var b;if(!0===G._gtmdgs)b=!0;else{var c=ad&&ad.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Sa("1");return mf(1,100)<d?mf(2,2):-1},wh=function(a){var b;
if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var xh=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),yh={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},zh={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Ah="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ch=function(a){var b=bf("gtm.allowlist")||bf("gtm.whitelist");b&&F(9);var c=b&&hb(Xa(b),yh),d=bf("gtm.blocklist")||bf("gtm.blacklist");d||(d=bf("tagTypeBlacklist"))&&
F(3);d?F(8):d=[];Bh()&&(d=Xa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ia(Xa(d),"google")&&F(2);var e=d&&hb(Xa(d),zh),f={};return function(h){var k=h&&h[qb.Na];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Ve[k]||[],p=a(k,l);if(b){var q;if(q=p)a:{if(0>Ia(c,k))if(l&&0<l.length)for(var n=0;n<l.length;n++){if(0>
Ia(c,l[n])){F(11);q=!1;break a}}else{q=!1;break a}q=!0}p=q}var u=!1;if(d){var t=0<=Ia(e,k);if(t)u=t;else{var r=Na(e,l||[]);r&&F(10);u=r}}var v=!p||u;v||!(0<=Ia(l,"sandboxedScripts"))||c&&-1!==Ia(c,"sandboxedScripts")||(v=Na(e,Ah));return f[k]=v}},Bh=function(){return xh.test(G.location&&G.location.hostname)};var Dh={active:!0,isAllowed:function(){return!0}},Eh=function(a){var b=L.zones;return b?b.checkState(Je.D,a):Dh},Fh=function(a){var b=L.zones;!b&&a&&(b=L.zones=a());return b};var Gh=function(){},Hh=function(){};var Ih=!1,Nh=0,Oh=[];function Ph(a){if(!Ih){var b=H.createEventObject,c="complete"==H.readyState,d="interactive"==H.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Ih=!0;for(var e=0;e<Oh.length;e++)J(Oh[e])}Oh.push=function(){for(var f=0;f<arguments.length;f++)J(arguments[f]);return 0}}}function Qh(){if(!Ih&&140>Nh){Nh++;try{H.documentElement.doScroll("left"),Ph()}catch(a){G.setTimeout(Qh,50)}}}var Rh=function(a){Ih?a():Oh.push(a)};var Th=function(a,b){this.m=!1;this.H=[];this.T={tags:[]};this.Y=!1;this.o=this.C=0;Sh(this,a,b)},Uh=function(a,b,c,d){if(Me.hasOwnProperty(b)||"__zone"===b)return-1;var e={};ob(d)&&(e=m(d,e));e.id=c;e.status="timeout";return a.T.tags.push(e)-1},Vh=function(a,b,c,d){var e=a.T.tags[b];e&&(e.status=c,e.executionTime=d)},Wh=function(a){if(!a.m){for(var b=a.H,c=0;c<b.length;c++)b[c]();a.m=!0;a.H.length=0}},Sh=function(a,b,c){Da(b)&&Xh(a,b);c&&G.setTimeout(function(){return Wh(a)},Number(c))},Xh=function(a,
b){var c=cb(function(){return J(function(){b(Je.D,a.T)})});a.m?c():a.H.push(c)},Yh=function(a){a.C++;return cb(function(){a.o++;a.Y&&a.o>=a.C&&Wh(a)})};var Zh=function(){function a(d){return!Ga(d)||0>d?0:d}if(!L._li&&G.performance&&G.performance.timing){var b=G.performance.timing.navigationStart,c=Ga(cf.get("gtm.start"))?cf.get("gtm.start"):0;L._li={cst:a(c-b),cbt:a(Se-b)}}};var ci={},di=function(){return G.GoogleAnalyticsObject&&G[G.GoogleAnalyticsObject]},ei=!1;
var fi=function(a){G.GoogleAnalyticsObject||(G.GoogleAnalyticsObject=a||"ga");var b=G.GoogleAnalyticsObject;if(G[b])G.hasOwnProperty(b)||F(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);G[b]=c}Zh();return G[b]},gi=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=di();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},hi=function(a){};
var ji=function(a){},ii=function(){return G.GoogleAnalyticsObject||"ga"},ki=function(a,b){return function(){var c=di(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var h=f.get("hitPayload"),k=f.get("hitCallback"),l=0>h.indexOf("&tid="+b);l&&(f.set("hitPayload",h.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",h,!0),f.set("hitCallback",k,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var pi=function(){return"&tc="+Ub.filter(function(a){return a}).length},si=function(){2022<=qi().length&&ri()},ui=function(){ti||(ti=G.setTimeout(ri,500))},ri=function(){ti&&(G.clearTimeout(ti),ti=void 0);void 0===vi||wi[vi]&&!xi&&!yi||(zi[vi]||Ai.Jh()||0>=Bi--?(F(1),zi[vi]=!0):(Ai.di(),jd(qi()),wi[vi]=!0,Ci=Di=Ei=yi=xi=""))},qi=function(){var a=vi;if(void 0===a)return"";var b=Aa("GTM"),c=Aa("TAGGING");return[Fi,wi[a]?"":"&es=1",Gi[a],b?"&u="+b:"",c?"&ut="+c:"",pi(),xi,yi,Ei?Ei:"",Di,Ci,"&z=0"].join("")},
Hi=function(){return[Te,"&v=3&t=t","&pid="+Ka(),"&rv="+Je.nc].join("")},Ii="0.005000">Math.random(),Fi=Hi(),Ji=function(){Fi=Hi()},wi={},xi="",yi="",Ci="",Di="",Ei="",vi=void 0,Gi={},zi={},ti=void 0,Ai=function(a,b){var c=0,d=0;return{Jh:function(){if(c<a)return!1;Za()-d>=b&&(c=0);return c>=a},di:function(){Za()-d>=b&&(c=0);c++;d=Za()}}}(2,1E3),Bi=1E3,Ki=function(a,b,c){if(Ii&&!zi[a]&&b){a!==vi&&(ri(),vi=a);var d,e=String(b[qb.Na]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;xi=xi?xi+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(Wb[h]?"1":"2")+d;Ci=Ci?Ci+"."+k:"&ti="+k;ui();si()}},Li=function(a,b,c){if(Ii&&!zi[a]){a!==vi&&(ri(),vi=a);var d=c+b;yi=yi?yi+"."+d:"&epr="+d;ui();si()}},Mi=function(a,b,c){};
function Ni(a,b,c,d){var e=Ub[a],f=Oi(a,b,c,d);if(!f)return null;var h=ac(e[qb.af],c,[]);if(h&&h.length){var k=h[0];f=Ni(k.index,{onSuccess:f,onFailure:1===k.qf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Oi(a,b,c,d){function e(){if(f[qb.Gg])k();else{var w=bc(f,c,[]);var A=Uh(c.Oa,String(f[qb.Na]),Number(f[qb.bf]),w[qb.Hg]),z=!1;w.vtp_gtmOnSuccess=function(){if(!z){z=!0;var E=Za()-D;Ki(c.id,Ub[a],"5");Vh(c.Oa,A,"success",
E);h()}};w.vtp_gtmOnFailure=function(){if(!z){z=!0;var E=Za()-D;Ki(c.id,Ub[a],"6");Vh(c.Oa,A,"failure",E);k()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;Ki(c.id,f,"1");var B=function(){var E=Za()-D;Ki(c.id,f,"7");Vh(c.Oa,A,"exception",E);z||(z=!0,k())};var D=Za();try{$b(w,c)}catch(E){B(E)}}}var f=Ub[a],h=b.onSuccess,k=b.onFailure,l=b.terminate;if(c.Cd(f))return null;var p=ac(f[qb.cf],c,[]);if(p&&p.length){var q=p[0],n=Ni(q.index,{onSuccess:h,onFailure:k,terminate:l},c,d);if(!n)return null;h=n;k=2===q.qf?l:n}if(f[qb.Xe]||f[qb.Jg]){var u=f[qb.Xe]?Vb:
c.li,t=h,r=k;if(!u[a]){e=cb(e);var v=Pi(a,u,e);h=v.onSuccess;k=v.onFailure}return function(){u[a](t,r)}}return e}function Pi(a,b,c){var d=[],e=[];b[a]=Qi(d,e,c);return{onSuccess:function(){b[a]=Ri;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=Si;for(var f=0;f<e.length;f++)e[f]()}}}function Qi(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ri(a){a()}function Si(a,b){b()};var Vi=function(a,b){for(var c=[],d=0;d<Ub.length;d++)if(a[d]){var e=Ub[d];var f=Yh(b.Oa);try{var h=Ni(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(h){var k=c,l=k.push,p=d,q=e["function"];if(!q)throw"Error: No function name given for function call.";var n=Wb[q];l.call(k,{Kf:p,Df:n?n.priorityOverride||0:0,th:h})}else Ti(d,b),f()}catch(r){f()}}var u=b.Oa;u.Y=!0;u.o>=u.C&&Wh(u);c.sort(Ui);for(var t=0;t<c.length;t++)c[t].th();
return 0<c.length};function Ui(a,b){var c,d=b.Df,e=a.Df;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Kf,k=b.Kf;f=h>k?1:h<k?-1:0}return f}function Ti(a,b){if(!Ii)return;var c=function(d){var e=b.Cd(Ub[d])?"3":"4",f=ac(Ub[d][qb.af],b,[]);f&&f.length&&c(f[0].index);Ki(b.id,Ub[d],e);var h=ac(Ub[d][qb.cf],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Wi=!1,aj=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Wi)return!1;Wi=!0}var d=Eh(b),e=!1;if(!d.active){if("gtm.js"!==c)return!1;e=!0;d=Eh(Number.MAX_SAFE_INTEGER)}Ii&&!zi[b]&&vi!==b&&(ri(),vi=b,Ci=xi="",Gi[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,ui());var f=a.eventCallback,h=a.eventTimeout,k={id:b,name:c,Cd:Ch(d.isAllowed),li:[],yf:function(){F(6)},hf:Xi(b),Oa:new Th(f,
h)};Yi(b,k.Oa);var l=ic(k);e&&(l=Zi(l));var p=Vi(l,k);"gtm.js"!==c&&"gtm.sync"!==c||ji(Je.D);switch(c){case "gtm.init":p&&F(20)}return $i(l,p)};function Xi(a){return function(b){Ii&&(pb(b)||Mi(a,"input",b))}}
function Yi(a,b){ff(a,"event",1);ff(a,"ecommerce",1);ff(a,"gtm");ff(a,"eventModel");}function Zi(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Le[String(Ub[c][qb.Na])]&&(b[c]=!0);return b}function $i(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Ub[c]&&!Me[String(Ub[c][qb.Na])])return!0;return!1}function bj(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return me(""+c+b).href}}function cj(a,b){return dj()?bj(a,b):void 0}function dj(){var a=!1;return a};var ej=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0},fj=function(a){var b=new ej;b.eventModel=a;return b},gj=function(a,b){a.targetConfig=b;return a},hj=function(a,b){a.containerConfig=b;return a},ij=function(a,b){a.remoteConfig=b;return a},jj=function(a,b){a.globalConfig=
b;return a},kj=function(a,b){a.onSuccess=b;return a},lj=function(a,b){a.setContainerTypeLoaded=b;return a},mj=function(a,b){a.getContainerTypeLoaded=b;return a},nj=function(a,b){a.onFailure=b;return a};ej.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var oj=function(a){function b(e){Oa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Oa(c,function(e){d.push(e)});return d};var pj;if(3===Je.nc.length)pj="g";else{var qj="G";pj=qj}
var rj={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:pj,OPT:"o"},sj=function(a){var b=Je.D.split("-"),c=b[0].toUpperCase(),d=rj[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Je.nc.length){var h="w";f="2"+h}else f="";return f+d+Je.nc+e};var tj=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var uj=function(){return Tc("iPhone")&&!Tc("iPod")&&!Tc("iPad")};Tc("Opera");Tc("Trident")||Tc("MSIE");Tc("Edge");!Tc("Gecko")||-1!=Qc.toLowerCase().indexOf("webkit")&&!Tc("Edge")||Tc("Trident")||Tc("MSIE")||Tc("Edge");-1!=Qc.toLowerCase().indexOf("webkit")&&!Tc("Edge")&&Tc("Mobile");Tc("Macintosh");Tc("Windows");Tc("Linux")||Tc("CrOS");var vj=qa.navigator||null;vj&&(vj.appVersion||"").indexOf("X11");Tc("Android");uj();Tc("iPad");Tc("iPod");uj()||Tc("iPad")||Tc("iPod");Qc.toLowerCase().indexOf("kaios");var wj=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(k){e=!1}if(e)return c;var f;a:{try{var h=c.parent;if(h&&h!=c){f=h;break a}}catch(k){}f=null}if(!(c=f))break}return null};var xj=function(){};var yj=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},zj=function(a,b){this.o=a;this.m=null;this.H={};this.Y=0;this.T=void 0===b?500:b;this.C=null};pa(zj,xj);
var Bj=function(a){return"function"===typeof a.o.__tcfapi||null!=Aj(a)};
zj.prototype.addEventListener=function(a){var b={},c=Ic(function(){return a(b)}),d=0;-1!==this.T&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.T));var e=function(f,h){clearTimeout(d);f?(b=f,b.internalErrorState=yj(b),h&&0===b.internalErrorState||(b.tcString="tcunavailable",h||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Cj(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};zj.prototype.removeEventListener=function(a){a&&a.listenerId&&Cj(this,"removeEventListener",null,a.listenerId)};
var Ej=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var h=e;if(0===h)return!1;var k=c;2===c?(k=0,2===h&&(k=1)):3===c&&(k=1,1===h&&(k=0));var l;if(0===k)if(a.purpose&&a.vendor){var p=Dj(a.vendor.consents,void 0===d?"755":d);l=p&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:p&&Dj(a.purpose.consents,b)}else l=!0;else l=1===k?a.purpose&&a.vendor?Dj(a.purpose.legitimateInterests,
b)&&Dj(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Dj=function(a,b){return!(!a||!a[b])},Cj=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.o.__tcfapi){var e=a.o.__tcfapi;e(b,2,c,d)}else if(Aj(a)){Fj(a);var f=++a.Y;a.H[f]=c;if(a.m){var h={};a.m.postMessage((h.__tcfapiCall={command:b,version:2,callId:f,parameter:d},h),"*")}}else c({},!1)},Aj=function(a){if(a.m)return a.m;a.m=wj(a.o,"__tcfapiLocator");return a.m},Fj=function(a){a.C||(a.C=function(b){try{var c;c=("string"===
typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.H[c.callId](c.returnValue,c.success)}catch(d){}},tj(a.o,a.C))};var Gj=!0;var Hj={1:0,3:0,4:0,7:3,9:3,10:3};function Ij(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var Jj=Ij("",550),Kj=Ij("",500);function Lj(){var a=L.tcf||{};return L.tcf=a}
var Mj=function(a,b){this.C=a;this.m=b;this.o=Za();},Nj=function(a){},Oj=function(a){},Uj=function(){var a=Lj(),b=new zj(G,Gj?3E3:-1),c=new Mj(b,a);if((Pj()?!0===G.gtag_enable_tcf_support:!1!==G.gtag_enable_tcf_support)&&!a.active&&("function"===typeof G.__tcfapi||Bj(b))){a.active=!0;a.Pb={};Qj();var d=null;Gj?d=G.setTimeout(function(){Rj(a);Sj(a);d=null},Kj):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Rj(a),Sj(a),Nj(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=Tj(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var h={},k;for(k in Hj)if(Hj.hasOwnProperty(k))if("1"===k){var l=e,p=!0;p=void 0===p?!1:p;var q;var n=l;!1===n.gdprApplies?q=!0:(void 0===n.internalErrorState&&(n.internalErrorState=yj(n)),q="error"===n.cmpStatus||0!==n.internalErrorState||"loaded"===n.cmpStatus&&("tcloaded"===n.eventStatus||"useractioncomplete"===
n.eventStatus)?!0:!1);h["1"]=q?!1===l.gdprApplies||"tcunavailable"===l.tcString||void 0===l.gdprApplies&&!p||"string"!==typeof l.tcString||!l.tcString.length?!0:Ej(l,"1",0):!1}else h[k]=Ej(e,k,Hj[k]);f=h}f&&(a.tcString=e.tcString||"tcempty",a.Pb=f,Sj(a),Nj(c))}}),Oj(c)}catch(e){d&&(clearTimeout(d),d=null),Rj(a),Sj(a)}}};function Rj(a){a.type="e";a.tcString="tcunavailable";Gj&&(a.Pb=Tj())}function Qj(){var a={};Ld((a.ad_storage="denied",a.wait_for_update=Jj,a))}
var Pj=function(){var a=!1;a=!0;return a};function Tj(){var a={},b;for(b in Hj)Hj.hasOwnProperty(b)&&(a[b]=!0);return a}function Sj(a){var b={};Md((b.ad_storage=a.Pb["1"]?"granted":"denied",b))}
var Vj=function(){var a=Lj();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Wj=function(){var a=Lj();return a.active?a.tcString||"":""},Xj=function(){var a=Lj();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},Yj=function(a){if(!Hj.hasOwnProperty(String(a)))return!0;var b=Lj();return b.active&&b.Pb?!!b.Pb[String(a)]:!0};var Zj=!1;function ak(a){var b=String(G.location).split(/[?#]/)[0],c=Je.Rf||G._CONSENT_MODE_SALT;return a?c?String(nf(b+a+c)):"0":""}
function bk(a){function b(t){var r;L.reported_gclid||(L.reported_gclid={});r=L.reported_gclid;var v;v=Zj&&h&&(!Ed()||Nd(C.B))?l+"."+(f.prefix||"_gcl")+(t?"gcu":"gcs"):l+(t?"gcu":"gcs");if(!r[v]){r[v]=!0;var w=[],y=function(D,E){E&&w.push(D+"="+encodeURIComponent(E))},x="https://www.google.com";if(Ed()){var A=Nd(C.B);y("gcs",Od());t&&y("gcu","1");L.dedupe_gclid||(L.dedupe_gclid=
""+Ef());y("rnd",L.dedupe_gclid);if((!l||p&&"aw.ds"!==p)&&Nd(C.B)){var z=Bg("_gcl_aw");y("gclaw",z.join("."))}y("url",String(G.location).split(/[?#]/)[0]);y("dclid",ck(d,q));!A&&d&&(x="https://pagead2.googlesyndication.com")}y("gdpr_consent",Wj()),y("gdpr",Xj());"1"===lg(!1)._up&&y("gtm_up","1");y("gclid",ck(d,
l));y("gclsrc",p);y("gtm",sj(!e));Zj&&h&&Nd(C.B)&&(Qf(f||{}),y("auid",Lf[Mf(f.prefix)]||""));var B=x+"/pagead/landing?"+w.join("&");qd(B)}}var c=!!a.sd,d=!!a.ra,e=a.R,f=void 0===a.uc?{}:a.uc,h=void 0===a.Bc?!0:a.Bc,k=Hg(),l=k.gclid||"",p=k.gclsrc,q=k.dclid||"",n=!c&&(!l||p&&"aw.ds"!==p?!1:!0),u=Ed();if(n||u)u?Pd(function(){b();Nd(C.B)||Id(function(t){return b(!0,t.jf)},
C.B)},[C.B]):b()}function ck(a,b){var c=a&&!Nd(C.B);return b&&c?"0":b}var Mk=function(){var a=!0;Yj(7)&&Yj(9)&&Yj(10)||(a=!1);var b=!0;b=!1;b&&!Lk()&&(a=!1);return a},Lk=function(){var a=!0;Yj(3)&&Yj(4)||(a=!1);return a};var hl=!1;function il(){var a=L;return a.gcq=a.gcq||new jl}
var kl=function(a,b,c){il().register(a,b,c)},ll=function(a,b,c,d){il().push("event",[b,a],c,d)},ml=function(a,b){il().push("config",[a],b)},nl=function(a,b,c,d){il().push("get",[a,b],c,d)},ol={},pl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.o=null;this.m=!1},ql=function(a,b,c,d,e){this.type=a;this.C=b;this.R=c||"";this.m=d;this.o=e},jl=function(){this.H={};this.o={};this.m=[];this.C={AW:!1,UA:!1}},rl=function(a,b){var c=bh(b);return a.H[c.containerId]=
a.H[c.containerId]||new pl},sl=function(a,b,c){if(b){var d=bh(b);if(d&&1===rl(a,b).status){rl(a,b).status=2;var e={};Ii&&(e.timeoutId=G.setTimeout(function(){F(38);ui()},3E3));a.push("require",[e],d.containerId);ol[d.containerId]=Za();if(eh()){}else{var h=
"/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=G.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=cj(c,h)||k;gd(l)}}}},tl=function(a,b,c,d){if(d.R){var e=rl(a,d.R),f=e.o;if(f){var h=m(c),k=m(e.targetConfig[d.R]),l=m(e.containerConfig),p=m(e.remoteConfig),q=m(a.o),n=bf("gtm.uniqueEventId"),u=bh(d.R).prefix,t=mj(lj(nj(kj(jj(ij(hj(gj(fj(h),k),l),p),q),function(){Li(n,u,"2");}),function(){
Li(n,u,"3");}),function(r,v){a.C[r]=v}),function(r){return a.C[r]});try{Li(n,u,"1");f(d.R,b,d.C,t)}catch(r){Li(n,u,"4");}}}};aa=jl.prototype;
aa.register=function(a,b,c){var d=rl(this,a);if(3!==d.status){d.o=b;d.status=3;if(c){m(d.remoteConfig,c);d.remoteConfig=c}var e=bh(a),f=ol[e.containerId];if(void 0!==f){var h=L[e.containerId].bootstrap,k=e.prefix.toUpperCase();L[e.containerId]._spx&&(k=k.toLowerCase());var l=bf("gtm.uniqueEventId"),p=k,q=Za()-h;if(Ii&&!zi[l]){l!==vi&&(ri(),vi=l);var n=p+"."+Math.floor(h-f)+
"."+Math.floor(q);Di=Di?Di+","+n:"&cl="+n}delete ol[e.containerId]}this.flush()}};aa.push=function(a,b,c,d){var e=Math.floor(Za()/1E3);sl(this,c,b[0][C.Da]||this.o[C.Da]);hl&&c&&rl(this,c).m&&(d=!1);this.m.push(new ql(a,e,c,b,d));d||this.flush()};aa.insert=function(a,b,c){var d=Math.floor(Za()/1E3);0<this.m.length?this.m.splice(1,0,new ql(a,d,c,b,!1)):this.m.push(new ql(a,d,c,b,!1))};
aa.flush=function(a){for(var b=this,c=[],d=!1;this.m.length;){var e=this.m[0];if(e.o)hl?!e.R||rl(this,e.R).m?(e.o=!1,this.m.push(e)):c.push(e):(e.o=!1,this.m.push(e));else switch(e.type){case "require":if(3!==rl(this,e.R).status&&!a){hl&&this.m.push.apply(this.m,c);return}Ii&&G.clearTimeout(e.m[0].timeoutId);break;case "set":Oa(e.m[0],function(u,t){m(ib(u,t),b.o)});break;case "config":var f=e.m[0],h=!!f[C.hc];delete f[C.hc];var k=rl(this,e.R),l=bh(e.R),p=l.containerId===l.id;h||(p?k.containerConfig=
{}:k.targetConfig[e.R]={});k.m&&h||tl(this,C.Z,f,e);k.m=!0;delete f[C.Ab];p?m(f,k.containerConfig):m(f,k.targetConfig[e.R]);hl&&(d=!0);break;case "event":tl(this,e.m[1],e.m[0],e);break;case "get":var q={},n=(q[C.Ba]=e.m[0],q[C.Aa]=e.m[1],q);tl(this,C.ya,n,e)}this.m.shift()}hl&&(this.m.push.apply(this.m,c),d&&this.flush())};aa.getRemoteConfig=function(a){return rl(this,a).remoteConfig};var ul=function(a,b,c){function d(f,h){var k=f[h];k=rd(f,h);return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||md(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},vl=function(a){L.hasOwnProperty("autoEventsSettings")||(L.autoEventsSettings={});var b=L.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},wl=function(a,b,c){vl(a)[b]=c},xl=function(a,b,c,d){var e=vl(a),f=$a(e,b,d);e[b]=c(f)},yl=function(a,b,c){var d=vl(a);return $a(d,b,c)};var zl=!!G.MutationObserver,Al=void 0,Bl=function(a){if(!Al){var b=function(){var c=H.body;if(c)if(zl)(new MutationObserver(function(){for(var e=0;e<Al.length;e++)J(Al[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;kd(c,"DOMNodeInserted",function(){d||(d=!0,J(function(){d=!1;for(var e=0;e<Al.length;e++)J(Al[e])}))})}};Al=[];H.body?b():J(b)}Al.push(a)};var Dl=!1,El=[];function Fl(){if(!Dl){Dl=!0;for(var a=0;a<El.length;a++)J(El[a])}}var Gl=function(a){Dl?J(a):El.push(a)};var Hl="HA GF G UA AW DC".split(" "),Il=!1,Jl={},Kl=!1;function Ll(a,b){var c={event:a};b&&(c.eventModel=m(b),b[C.Wc]&&(c.eventCallback=b[C.Wc]),b[C.$b]&&(c.eventTimeout=b[C.$b]));return c}function Ml(){return Il}
var Pl={config:function(a){var b;return b},consent:function(a){function b(){Ml()&&
m(a[2],{subcommand:a[1]})}if(3===a.length){F(39);var c=We(),d=a[1];"default"===d?(b(),Ld(a[2])):"update"===d&&(b(),Md(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&g(b)){var c;if(2<a.length){if(!ob(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=Ll(b,c);return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime)return Kl=!0,Ml(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&ob(a[1])?b=m(a[1]):3==a.length&&g(a[1])&&(b={},ob(a[2])||Ha(a[2])?b[a[1]]=m(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Ql={policy:!0};var Rl=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Tl=function(a){var b=Sl(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var lm=function(a){if(km(a))return a;this.m=a};lm.prototype.Ah=function(){return this.m};var km=function(a){return!a||"object"!==lb(a)||ob(a)?!1:"getUntrustedUpdateValue"in a};lm.prototype.getUntrustedUpdateValue=lm.prototype.Ah;var mm=[],nm=!1,om=!1,pm=!1,qm=function(a){return G["dataLayer"].push(a)},rm=function(a){var b=L["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function sm(a){var b=a._clear;Oa(a,function(d,e){"_clear"!==d&&(b&&ef(d,void 0),ef(d,e))});Re||(Re=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=We(),a["gtm.uniqueEventId"]=c,ef("gtm.uniqueEventId",c));return aj(a)}function tm(){var a=mm[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Qa(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function um(){for(var a=!1;!pm&&0<mm.length;){var b=!1;if(b&&!om&&tm()){var c={};mm.unshift((c.event=
"gtm.init",c));om=!0}var d=!1;if(d&&!nm&&tm()){var e={};mm.unshift((e.event="gtm.init_consent",e));nm=!0}pm=!0;delete Ze.eventModel;af();var f=mm.shift();if(null!=f){var h=km(f);
if(h){var k=f;f=km(k)?k.getUntrustedUpdateValue():void 0;for(var l=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],p=0;p<l.length;p++){var q=l[p],n=bf(q,1);if(Ha(n)||ob(n))n=m(n);$e[q]=n}}try{if(Da(f))try{f.call(cf)}catch(A){}else if(Ha(f)){var u=f;if(g(u[0])){var t=u[0].split("."),r=t.pop(),v=u.slice(1),w=bf(t.join("."),2);if(void 0!==w&&null!==w)try{w[r].apply(w,v)}catch(A){}}}else{if(Qa(f)){a:{var y=f;if(y.length&&g(y[0])){var x=Pl[y[0]];if(x&&(!h||!Ql[y[0]])){f=
x(y);break a}}f=void 0}if(!f){pm=!1;continue}}a=sm(f)||a}}finally{h&&af(!0)}}pm=!1}return!a}function vm(){var a=um();try{Rl(G["dataLayer"],Je.D)}catch(b){}return a}
var xm=function(){var a=cd("dataLayer",[]),b=cd("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Rh(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Gl(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<L.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new lm(arguments[f])}else e=[].slice.call(arguments,0);var h=c.apply(a,e);mm.push.apply(mm,e);if(300<
this.length)for(F(4);300<this.length;)this.shift();var k="boolean"!==typeof h||h;return um()&&k};var d=a.slice(0);mm.push.apply(mm,d);wm()&&J(vm)},wm=function(){var a=!0;return a};var ym={};ym.ic=new String("undefined");
var zm=function(a){this.m=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===ym.ic?b:a[d]);return c.join("")}};zm.prototype.toString=function(){return this.m("undefined")};zm.prototype.valueOf=zm.prototype.toString;ym.Mg=zm;ym.md={};ym.mh=function(a){return new zm(a)};var Am={};ym.ei=function(a,b){var c=We();Am[c]=[a,b];return c};ym.lf=function(a){var b=a?0:1;return function(c){var d=Am[c];if(d&&"function"===typeof d[b])d[b]();Am[c]=void 0}};ym.Ih=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};ym.Yh=function(a){if(a===ym.ic)return a;var b=We();ym.md[b]=a;return'google_tag_manager["'+Je.D+'"].macro('+b+")"};ym.Sh=function(a,b,c){a instanceof ym.Mg&&(a=a.m(ym.ei(b,c)),b=Ba);return{Ad:a,onSuccess:b}};var Bm=["input","select","textarea"],Cm=["button","hidden","image","reset","submit"],Dm=function(a){var b=a.tagName.toLowerCase();return!Ja(Bm,function(c){return c===b})||"input"===b&&Ja(Cm,function(c){return c===a.type.toLowerCase()})?!1:!0},Em=function(a){return a.form?a.form.tagName?a.form:H.getElementById(a.form):pd(a,["form"],100)},Fm=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(Dm(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Qm=G.clearTimeout,Rm=G.setTimeout,P=function(a,b,c){if(eh()){b&&J(b)}else return gd(a,b,c)},Sm=function(){return new Date},Tm=function(){return G.location.href},Um=function(a){return ke(me(a),"fragment")},Vm=function(a){return le(me(a))},Wm=function(a,b){return bf(a,b||2)},Xm=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=qm(a)):d=qm(a);return d},Ym=function(a,b){G[a]=b},U=function(a,b,c){b&&
(void 0===G[a]||c&&!G[a])&&(G[a]=b);return G[a]},Zm=function(a,b,c){return sf(a,b,void 0===c?!0:!!c)},$m=function(a,b,c){return 0===Bf(a,b,c)},an=function(a,b){if(eh()){b&&J(b)}else id(a,b)},bn=function(a){return!!yl(a,"init",!1)},cn=function(a){wl(a,"init",!0)},dn=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Pe;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";P(gh("https://","http://",c))},en=function(a,
b){var c=a[b];c=rd(a,b);return c},fn=function(a,b,c){Ii&&(pb(a)||Mi(c,b,a))};
var gn=ym.Sh;function En(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Fn=new La;function Gn(a,b){function c(h){var k=me(h),l=ke(k,"protocol"),p=ke(k,"host",!0),q=ke(k,"port"),n=ke(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==q||"https"==l&&"443"==q)l="web",q="default";return[l,p,q,n]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Hn(a){return In(a)?1:0}
function In(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ha(c)){for(var d=0;d<c.length;d++){var e=m(a,{});m({arg1:c[d],any_of:void 0},e);if(Hn(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var h=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var k=0;k<h.length;k++)if(b[h[k]]){f=b[h[k]](c);break a}}catch(t){}}f=!1}return f;case "_ew":return En(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Ia(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var q=a.ignore_case?"i":void 0;try{var n=String(c)+q,u=Fn.get(n);u||(u=new RegExp(c,q),Fn.set(n,u));p=u.test(b)}catch(t){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Gn(b,c)}return!1};var Jn=encodeURI,X=encodeURIComponent,Kn=jd;var Ln=function(a,b){if(!a)return!1;var c=ke(me(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Mn=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function sp(){return G.gaGlobal=G.gaGlobal||{}}var tp=function(){var a=sp();a.hid=a.hid||Ka();return a.hid},up=function(a,b){var c=sp();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var eq=window,fq=document,gq=function(a){var b=eq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===eq["ga-disable-"+a])return!0;try{var c=eq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=qf("AMP_TOKEN",String(fq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return fq.getElementById("__gaOptOutExtension")?!0:!1};var hq={};function jq(a){delete a.eventModel[C.Ab];lq(a.eventModel)}var lq=function(a){Oa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[C.na]||{};Oa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var oq=function(a,b,c){ll(b,c,a)},pq=function(a,b,c){ll(b,c,a,!0)},uq=function(a,b){};
function qq(a,b){}var Z={g:{}};Z.g.ctv=["google"],function(){(function(a){Z.__ctv=a;Z.__ctv.h="ctv";Z.__ctv.i=!0;Z.__ctv.priorityOverride=0})(function(){return"31"})}();

Z.g.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.h="jsm";Z.__jsm.i=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");var d=c&&c.e&&c.e(b);fn(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Z.g.c=["google"],function(){(function(a){Z.__c=a;Z.__c.h="c";Z.__c.i=!0;Z.__c.priorityOverride=0})(function(a){fn(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.g.e=["google"],function(){(function(a){Z.__e=a;Z.__e.h="e";Z.__e.i=!0;Z.__e.priorityOverride=0})(function(a){return String(gf(a.vtp_gtmEventId,"event"))})}();
Z.g.f=["google"],function(){(function(a){Z.__f=a;Z.__f.h="f";Z.__f.i=!0;Z.__f.priorityOverride=0})(function(a){var b=Wm("gtm.referrer",1)||H.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ke(me(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Vm(String(b)):String(b)})}();
Z.g.j=["google"],function(){(function(a){Z.__j=a;Z.__j.h="j";Z.__j.i=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=U(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];fn(c,"j",a.vtp_gtmEventId);return c})}();

Z.g.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.h="u";Z.__u.i=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Wm("gtm.url",1))||Tm();var d=b[a("vtp_component")];if(!d||"URL"==d)return Vm(String(c));var e=me(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],p;h?Ha(k)?p=k:p=String(k).replace(/\s+/g,
"").split(","):p=[String(k)];for(var q=0;q<p.length;q++){var n=ke(e,"QUERY",void 0,void 0,p[q]);if(void 0!=n&&(!l||""!==n)){f=n;break a}}f=void 0}else f=ke(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.g.v=["google"],function(){(function(a){Z.__v=a;Z.__v.h="v";Z.__v.i=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Wm(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;fn(d,"v",a.vtp_gtmEventId);return d})}();
Z.g.ua=["google"],function(){function a(n){return Nd(n)}function b(n,u){var t=!1;if(Ed()&&!t&&!e[n]){var r=function(){var v=di(),w="gtm"+We(),y=p(u),x={name:w};l(y,x,!0);v("create",n,x);v(function(){v.remove(w)})};Id(r,C.J);Id(r,C.B);e[n]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,
allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},h={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},k={urlPassthrough:!0},
l=function(n,u,t){var r=0;if(n)for(var v in n)if(!k[v]&&n.hasOwnProperty(v)&&(t&&f[v]||!t&&void 0===f[v])){var w=h[v]?Wa(n[v]):n[v];"anonymizeIp"!=v||w||(w=void 0);u[v]=w;r++}return r},p=function(n){var u={};n.vtp_gaSettings&&m(Mn(n.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),u);m(Mn(n.vtp_fieldsToSet,"fieldName","value"),u);Nd(C.J)||(u.storage="none");Nd(C.B)||(u.allowAdFeatures=!1,u.storeGac=!1);Mk()||(u.allowAdFeatures=!1);Lk()||(u.allowAdPersonalizationSignals=!1);n.vtp_transportUrl&&
(u._x_19=n.vtp_transportUrl);return u},
q=function(n){function u(ea,T){void 0!==T&&E("set",ea,T)}var t={},r={},v={},w={};if(n.vtp_gaSettings){var y=n.vtp_gaSettings;m(Mn(y.vtp_contentGroup,"index","group"),r);m(Mn(y.vtp_dimension,"index","dimension"),v);m(Mn(y.vtp_metric,"index","metric"),w);var x=m(y);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=void 0;x.vtp_metric=void 0;n=m(n,x)}m(Mn(n.vtp_contentGroup,"index","group"),r);m(Mn(n.vtp_dimension,"index","dimension"),v);m(Mn(n.vtp_metric,"index","metric"),w);var A=
p(n),z=fi(n.vtp_functionName);if(Da(z)){var B="",D="";n.vtp_setTrackerName&&"string"==typeof n.vtp_trackerName?""!==n.vtp_trackerName&&(D=n.vtp_trackerName,B=D+"."):(D="gtm"+We(),B=D+".");var E=function(ea){var T=[].slice.call(arguments,0);T[0]=B+T[0];z.apply(window,T)},I=function(ea,T){return void 0===T?T:ea(T)},M=function(ea,T){if(T)for(var Fa in T)T.hasOwnProperty(Fa)&&E("set",ea+Fa,T[Fa])},N=function(){},V={name:D};l(A,V,!0);var ia=n.vtp_trackingId||t.trackingId;z("create",ia,V);E("set","&gtm",sj(!0));var O=!1;
Ed()&&!O&&(E("set","&gcs",Od()),b(ia,n));A._x_19&&(null==bd&&delete A._x_19,A._x_20&&!d[D]&&(d[D]=!0,z(ki(D,String(A._x_20)))));n.vtp_enableRecaptcha&&E("require","recaptcha","recaptcha.js");(function(ea,T){void 0!==n[T]&&E("set",ea,n[T])})("nonInteraction","vtp_nonInteraction");M("contentGroup",r);M("dimension",v);M("metric",w);var K={};l(A,K,!1)&&E("set",K);var R;
n.vtp_enableLinkId&&E("require","linkid","linkid.js");E("set","hitCallback",function(){var ea=A&&A.hitCallback;Da(ea)&&ea();n.vtp_gtmOnSuccess()});var W=function(ea,T){return void 0===n[ea]?t[T]:n[ea]};if("TRACK_EVENT"==n.vtp_trackType){n.vtp_enableEcommerce&&(E("require","ec","ec.js"),N());var ja={hitType:"event",eventCategory:String(W("vtp_eventCategory","category")),eventAction:String(W("vtp_eventAction","action")),eventLabel:I(String,
W("vtp_eventLabel","label")),eventValue:I(Sa,W("vtp_eventValue","value"))};l(R,ja,!1);E("send",ja);}else if("TRACK_SOCIAL"==n.vtp_trackType){}else if("TRACK_TRANSACTION"==
n.vtp_trackType){}else if("TRACK_TIMING"==n.vtp_trackType){}else if("DECORATE_LINK"==
n.vtp_trackType){}else if("DECORATE_FORM"==n.vtp_trackType){}else if("TRACK_DATA"==n.vtp_trackType){}else{n.vtp_enableEcommerce&&
(E("require","ec","ec.js"),N());if(n.vtp_doubleClick||"DISPLAY_FEATURES"==n.vtp_advertisingFeaturesType){var Ea="_dc_gtm_"+String(n.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","displayfeatures",void 0,{cookieName:Ea})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==n.vtp_advertisingFeaturesType){var vb="_dc_gtm_"+String(n.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");E("require","adfeatures",{cookieName:vb})}R?E("send","pageview",R):E("send","pageview");Wa(A.urlPassthrough)&&hi(B)}if(!c){var mb=n.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";n.vtp_useInternalVersion&&!n.vtp_useDebugVersion&&(mb="internal/"+mb);c=!0;var eb=cj(A._x_19,"/analytics.js"),Pa=gh("https:","http:","//www.google-analytics.com/"+mb,A&&!!A.forceSSL);P("analytics.js"===mb&&eb?eb:Pa,function(){var ea=
di();ea&&ea.loaded||n.vtp_gtmOnFailure();},n.vtp_gtmOnFailure)}}else J(n.vtp_gtmOnFailure)};(function(n){Z.__ua=n;Z.__ua.h="ua";Z.__ua.i=!0;Z.__ua.priorityOverride=0})(function(n){Pd(function(){q(n)},
[C.J,C.B])})}();
Z.g.jel=["google"],function(){(function(a){Z.__jel=a;Z.__jel.h="jel";Z.__jel.i=!0;Z.__jel.priorityOverride=0})(function(a){if(!bn("jel")){var b=U("self"),c=b.onerror;b.onerror=function(d,e,f,h,k){c&&c(d,e,f,h,k);Xm({event:"gtm.pageError","gtm.errorMessage":d,"gtm.errorUrl":e,"gtm.errorLineNumber":f});return!1};cn("jel")}J(a.vtp_gtmOnSuccess)})}();



Z.g.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.h="cid";Z.__cid.i=!0;Z.__cid.priorityOverride=0})(function(){return Je.D})}();


Z.g.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.h="gas";Z.__gas.i=!0;Z.__gas.priorityOverride=0})(function(a){var b=m(a),c=b;c[qb.Na]=null;c[qb.Dg]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.g.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.h="remm";Z.__remm.i=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,h=0;h<c.length;h++){var k=c[h].key||"";d&&(k="^"+k+"$");var l=new RegExp(k,e);if(l.test(b)){var p=c[h].value;a.vtp_replaceAfterMatch&&(p=String(b).replace(l,p));f=p;break}}fn(f,"remm",a.vtp_gtmEventId);return f})}();
Z.g.fsl=[],function(){function a(){var e=U("document"),f=c(),h=HTMLFormElement.prototype.submit;kd(e,"click",function(k){var l=k.target;if(l&&(l=pd(l,["button","input"],100))&&("submit"==l.type||"image"==l.type)&&l.name&&md(l,"value")){var p;l.form?l.form.tagName?p=l.form:p=H.getElementById(l.form):p=pd(l,["form"],100);p&&f.store(p,l)}},!1);kd(e,"submit",function(k){var l=k.target;if(!l)return k.returnValue;var p=k.defaultPrevented||!1===k.returnValue,q=b(l)&&!p,n=f.get(l),u=!0;if(d(l,function(){if(u){var t;
n&&(t=e.createElement("input"),t.type="hidden",t.name=n.name,t.value=n.value,l.appendChild(t));h.call(l);t&&l.removeChild(t)}},p,q,n))u=!1;else return p||(k.preventDefault&&k.preventDefault(),k.returnValue=!1),!1;return k.returnValue},!1);HTMLFormElement.prototype.submit=function(){var k=this,l=b(k),p=!0;d(k,function(){p&&h.call(k)},!1,l)&&(h.call(k),p=!1)}}function b(e){var f=e.target;return f&&"_self"!==f&&"_parent"!==f&&"_top"!==f?!1:!0}function c(){var e=[],f=function(h){return Ja(e,function(k){return k.form===
h})};return{store:function(h,k){var l=f(h);l?l.button=k:e.push({form:h,button:k})},get:function(h){var k=f(h);return k?k.button:null}}}function d(e,f,h,k,l){var p=yl("fsl",h?"nv.mwt":"mwt",0),q;q=h?yl("fsl","nv.ids",[]):yl("fsl","ids",[]);if(!q.length)return!0;var n=ul(e,"gtm.formSubmit",q),u=e.action;u&&u.tagName&&(u=e.cloneNode(!1).action);n["gtm.elementUrl"]=u;l&&(n["gtm.formSubmitElement"]=l);if(k&&p){if(!Xm(n,rm(f),p))return!1}else Xm(n,function(){},p||2E3);return!0}(function(e){Z.__fsl=e;Z.__fsl.h=
"fsl";Z.__fsl.i=!0;Z.__fsl.priorityOverride=0})(function(e){var f=e.vtp_waitForTags,h=e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var p=function(n){return Math.max(k,n)};xl("fsl","mwt",p,0);h||xl("fsl","nv.mwt",p,0)}var q=function(n){n.push(l);return n};xl("fsl","ids",q,[]);h||xl("fsl","nv.ids",q,[]);bn("fsl")||(a(),cn("fsl"));J(e.vtp_gtmOnSuccess)})}();Z.g.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.h="smm";Z.__smm.i=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Mn(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;fn(d,"smm",a.vtp_gtmEventId);return d})}();





Z.g.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var p=H.createElement("script");p.async=!1;p.type="text/javascript";p.id=k.id;p.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(p.charset=k.charset);var q=k.getAttribute("data-gtmsrc");q&&(p.src=q,fd(p,l));d.insertBefore(p,null);q||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var n=
[];k.firstChild;)n.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,n,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(u){J(h)}}}var c=function(d){if(H.body){var e=d.vtp_gtmOnFailure,f=gn(d.vtp_html,d.vtp_gtmOnSuccess,
e),h=f.Ad,k=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(H.body,od(h),k,e)()}else Rm(function(){c(d)},200)};Z.__html=c;Z.__html.h="html";
Z.__html.i=!0;Z.__html.priorityOverride=0}();






Z.g.lcl=[],function(){function a(){var c=U("document"),d=0,e=function(f){var h=f.target;if(h&&3!==f.which&&!(f.Hh||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;h=pd(h,["a","area"],100);if(!h)return f.returnValue;var k=f.defaultPrevented||!1===f.returnValue,l=yl("lcl",k?"nv.mwt":"mwt",0),p;p=k?yl("lcl","nv.ids",[]):yl("lcl","ids",[]);if(p.length){var q=ul(h,"gtm.linkClick",p);if(b(f,h,c)&&!k&&l&&h.href){var n=String(en(h,"rel")||""),u=!!Ja(n.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
u&&F(36);var t=U((en(h,"target")||"_self").substring(1)),r=!0;if(Xm(q,rm(function(){var v;if(v=r&&t){var w;a:if(u){var y;try{y=new MouseEvent(f.type,{bubbles:!0})}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Hh=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(t.location.href=en(h,"href"))}),l))r=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Xm(q,function(){},l||2E3);return!0}}};kd(c,"click",e,!1);kd(c,"auxclick",
e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=en(d,"href"),h=f.indexOf("#"),k=en(d,"target");if(k&&"_self"!==k&&"_parent"!==k&&"_top"!==k||0===h)return!1;if(0<h){var l=Vm(f),p=Vm(e.location);return l!==p}return!0}(function(c){Z.__lcl=c;Z.__lcl.h="lcl";Z.__lcl.i=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);
if(!f||0>=f)f=2E3;var h=c.vtp_uniqueTriggerId||"0";if(d){var k=function(p){return Math.max(f,p)};xl("lcl","mwt",k,0);e||xl("lcl","nv.mwt",k,0)}var l=function(p){p.push(h);return p};xl("lcl","ids",l,[]);e||xl("lcl","nv.ids",l,[]);bn("lcl")||(a(),cn("lcl"));J(c.vtp_gtmOnSuccess)})}();



Z.g.csm=["nonGoogleScripts"],function(){(function(a){Z.__csm=a;Z.__csm.h="csm";Z.__csm.i=!0;Z.__csm.priorityOverride=0})(function(a){var b=U("document");Kn(function(d){if(2048<d.length){var e=d.substring(0,2040).lastIndexOf("&");d=d.substring(0,e)+"&ns_cut="+X(d.substring(e+1));d=d.substring(0,2048)}return d}(function(d,e){var f=Sm(),h=(e||"").split("&");e="";for(var k=0;k<h.length;k++)if(h[k]){var l=h[k].match(/([^=]*)=?(.*)/);e+="&"+X(l[1])+"="+X(l[2])}return gh("https://sb","http://b",".scorecardresearch.com/b?c1=2&c2="+
X(d)+"&ns__t="+f.valueOf()+"&ns_c="+(b.characterSet||b.Ii||"")+"&c8="+X(b.title||"")+e+"&c7="+X(b.URL)+"&c9="+X(b.referrer))}(a.vtp_clientId,function(){var d="",e=b.cookie;if(0<=e.indexOf("comScore"))for(var f=e.split(";"),h=0;h<f.length;h++){var k=f[h].indexOf("comScore");0<=k&&(d=unescape(f[h].substring(k+8)))}return d}())));var c=function(){var d=gh("https://sb","http://b",".scorecardresearch.com/c2/"+X(a.vtp_clientId)+"/cs.js");P(d,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)};"complete"===b.readyState?
c():kd(U("self"),"load",c)})}();var vq={};vq.macro=function(a){if(ym.md.hasOwnProperty(a))return ym.md[a]},vq.onHtmlSuccess=ym.lf(!0),vq.onHtmlFailure=ym.lf(!1);vq.dataLayer=cf;vq.callback=function(a){Ue.hasOwnProperty(a)&&Da(Ue[a])&&Ue[a]();delete Ue[a]};vq.bootstrap=0;vq._spx=!1;function wq(){L[Je.D]=vq;db(Ve,Z.g);Yb=Yb||ym;Zb=jc}
function xq(){sd.gtag_cs_api=!0;L=G.google_tag_manager=G.google_tag_manager||{};Uj();if(L[Je.D]){var a=L.zones;a&&a.unregisterChild(Je.D);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Rb.push(c[d]);
for(var e=b.tags||[],f=0;f<e.length;f++)Ub.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)Tb.push(h[k]);for(var l=b.rules||[],p=0;p<l.length;p++){for(var q=l[p],n={},u=0;u<q.length;u++)n[q[u][0]]=Array.prototype.slice.call(q[u],1);Sb.push(n)}Wb=Z;Xb=Hn;wq();xm();Ih=!1;Nh=0;if("interactive"==H.readyState&&!H.createEventObject||"complete"==H.readyState)Ph();else{kd(H,"DOMContentLoaded",Ph);kd(H,"readystatechange",Ph);if(H.createEventObject&&H.documentElement.doScroll){var t=!0;try{t=!G.frameElement}catch(x){}t&&
Qh()}kd(G,"load",Ph)}Dl=!1;"complete"===H.readyState?Fl():kd(G,"load",Fl);a:{if(!Ii)break a;G.setInterval(Ji,864E5);}Se=(new Date).getTime();}}
(function(a){if(!G["__TAGGY_INSTALLED"]){var b=!1;if(H.referrer){var c=me(H.referrer);b="cct.google"===je(c,"host")}if(!b){var d=sf("googTaggyReferrer");b=d.length&&d[0].length}b&&(G["__TAGGY_INSTALLED"]=!0,gd("https://cct.google/taggy/agent.js"))}var f=function(){var p=G["google.tagmanager.debugui2.queue"];p||(p=[],G["google.tagmanager.debugui2.queue"]=p,gd("https://www.googletagmanager.com/debug/bootstrap"));return p},h="x"===ke(G.location,"query",!1,void 0,"gtm_debug");if(!h&&H.referrer){var k=me(H.referrer);h="tagassistant.google.com"===je(k,"host")}if(!h){var l=sf("__TAG_ASSISTANT");h=l.length&&l[0].length}G.__TAG_ASSISTANT_API&&(h=!0);h&&bd?f().push({messageType:"CONTAINER_STARTING",
data:{scriptSource:bd,resume:function(){a()}}}):a()})(xq);

})()
