"use strict";var precacheConfig=[["/index.html","8ea592a42a119b7f430014219b713d81"],["/static/css/main.2939b5b5.css","cc6c0f31bf0ccb261382c857832eb4a2"],["/static/js/main.e35edd35.js","1a538c3511c4c3e6b63e1c3a6ddda29a"],["/static/media/ajax.a4cef7b7.png","a4cef7b75913d7ae327741250b19cd2d"],["/static/media/apple.4b603be4.jpg","4b603be469eace94d05e664d31de3f42"],["/static/media/articlelance.744f4f46.jpg","744f4f4686350c0a0f727b569a5ce517"],["/static/media/ave.394c5d28.jpg","394c5d289ed50eaf97b3de449ffb83c5"],["/static/media/bible.c1337405.jpg","c133740586e4e9a7b52666cca7ae3111"],["/static/media/buildings.762cbb6d.jpg","762cbb6df3006db1b0ec2029945a7953"],["/static/media/coffee.97f7c4f5.jpg","97f7c4f51768fca3cc832c2ab15445a3"],["/static/media/comic.a99de60d.jpg","a99de60d7b75a3fca93ffe9f1ceb5061"],["/static/media/css.dd1cdcf9.png","dd1cdcf9f7247c8354ef5666cc0dfd38"],["/static/media/downtown.f69c9941.jpg","f69c994190d03cf127dc7e16782bbe48"],["/static/media/fair.94054252.jpg","94054252412e3de597f8edf52b465ee4"],["/static/media/html.931d9aab.png","931d9aab4c70f45c7faa3b019291dab2"],["/static/media/jquery.59c6ab77.png","59c6ab778fc25c0290f0856209fae9e8"],["/static/media/js.b1be48fa.png","b1be48fa52d6bf39f0ca460fb06bfd4c"],["/static/media/mexico.f1f6b54b.jpg","f1f6b54badc94085c93a5349da44d5e9"],["/static/media/moto.a9bd7681.jpg","a9bd76810e553a84da63ca6bf911dc1a"],["/static/media/paint-bg.9ebe3024.jpg","9ebe3024a2c1db0c630368ba5c6a858e"],["/static/media/pbj.701912e6.jpg","701912e63ad1ea97cd5e999c895b6768"],["/static/media/popoca.085f166b.jpg","085f166ba4e8a155874cd4b0a6fa51b0"],["/static/media/react.ae4e1eef.png","ae4e1eef34d7a59abb07130db89a5264"],["/static/media/sioux.453f658b.jpg","453f658b697c7aa23881149458c3efea"],["/static/media/stopwatch.5d91760f.jpg","5d91760fa00b9396d5da8dea85efc9e1"],["/static/media/support.1b7eb998.jpg","1b7eb998a287e08e64ef5a45764424f5"],["/static/media/titanlogo.a94b3a99.jpg","a94b3a996701e76db28128c278b5d584"],["/static/media/todo.0f3c67c0.jpg","0f3c67c03fd1373fb2ab4f4b5b6ac897"],["/static/media/tractor.32f82eae.jpg","32f82eae77fbac546dd1f664bfe0b128"],["/static/media/will.82271415.jpg","822714158a20de2a7d9af3e2ef212e81"],["/static/media/wmlogo.6c270c73.png","6c270c7340c78d828cc00aea964486e2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});