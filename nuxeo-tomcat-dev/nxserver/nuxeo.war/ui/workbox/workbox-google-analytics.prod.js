this.workbox=this.workbox||{},this.workbox.googleAnalytics=function(e,t,o,r,n,a,s){"use strict";try{self.workbox.v["workbox:google-analytics:3.6.3"]=1}catch(e){}const i=/^\/(\w+\/)?collect/,c=(l=babelHelpers.asyncToGenerator((function*(e){return yield new Promise((function(t,o){const r=new FileReader;r.onloadend=function(){return t(r.result)},r.onerror=function(){return o(r.error)},r.readAsText(e)}))})),function(e){return l.apply(this,arguments)});var l;const u=e=>(w=babelHelpers.asyncToGenerator((function*(t){let o,{url:r,requestInit:n,timestamp:a}=t;if(r=new URL(r),n.body){const e=n.body instanceof Blob?yield c(n.body):n.body;o=new URLSearchParams(e)}else o=r.searchParams;const s=a-(Number(o.get("qt"))||0),i=Date.now()-s;if(o.set("qt",i),e.parameterOverrides)for(const t of Object.keys(e.parameterOverrides)){const r=e.parameterOverrides[t];o.set(t,r)}"function"==typeof e.hitFilter&&e.hitFilter.call(null,o),n.body=o.toString(),n.method="POST",n.mode="cors",n.credentials="omit",n.headers={"Content-Type":"text/plain"},t.url=`${r.origin}${r.pathname}`})),function(e){return w.apply(this,arguments)});var w;return e.initialize=(e={})=>{const c=o.cacheNames.getGoogleAnalyticsName(e.cacheName),l=new t.Plugin("workbox-google-analytics",{maxRetentionTime:2880,callbacks:{requestWillReplay:u(e)}}),w=[(e=>{const t=new a.NetworkFirst({cacheName:e});return new r.Route((({url:e})=>"www.google-analytics.com"===e.hostname&&"/analytics.js"===e.pathname),t,"GET")})(c),(e=>{const t=new a.NetworkFirst({cacheName:e});return new r.Route((({url:e})=>"www.googletagmanager.com"===e.hostname&&"/gtag/js"===e.pathname),t,"GET")})(c),...(e=>{const t=({url:e})=>"www.google-analytics.com"===e.hostname&&i.test(e.pathname),o=new s.NetworkOnly({plugins:[e]});return[new r.Route(t,o,"GET"),new r.Route(t,o,"POST")]})(l)],m=new n.Router;for(const e of w)m.registerRoute(e);self.addEventListener("fetch",(e=>{const t=m.handleRequest(e);t&&e.respondWith(t)}))},e}({},workbox.backgroundSync,workbox.core._private,workbox.routing,workbox.routing,workbox.strategies,workbox.strategies);