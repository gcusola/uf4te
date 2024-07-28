function ChucklePostAI(t){function e(t){const e=document.querySelector(".post-ai");e&&e.parentElement.removeChild(e);const o=window.location.href;if(t.eliminate&&t.eliminate.length&&t.eliminate.some((t=>o.includes(t))))return;if(t.whitelist&&t.whitelist.length&&!t.whitelist.some((t=>o.includes(t))))return;let n="";n=!t.auto_mount&&t.el?document.querySelector(t.el?t.el:"#post #article-container"):function(){function t(e){let o=1;for(const n of e.children)o+=t(n);return o}function e(t){if(["IFRAME","FOOTER","HEADER","BLOCKQUOTE"].includes(t.tagName))return!0;const e=["aplayer","comment"];return Array.from(t.classList).some((t=>e.some((e=>t.includes(e)))))}function o(t){const o={H1:1.5,H2:1,H3:.5,P:1};let n=0,i=null;function r(t){if(e(t))return;let a=0;for(const e of t.children)e.tagName in o&&(a+=o[e.tagName]);a>n&&(n=a,i=t);for(const e of t.children)r(e)}return r(t),i}function n(){const n=[document.body];let i=0,r=null;for(;n.length>0;){const o=n.shift();if(e(o))continue;const a=t(o);a>i&&(i=a,r=o);for(const t of o.children)n.push(t)}return o(r)}return n()}();const i=document.querySelector(t.title_el)?document.querySelector(t.title_el).textContent:document.title;if(!n)return;const r={name:"QX-AI",introduce:"我是文章辅助AI: QX-AI，点击下方的按钮，让我生成本文简介、推荐相关文章等。",version:"tianliGPT",button:["介绍自己","推荐相关文章","生成AI简介","矩阵穿梭"],...t.interface};!function(){const e="qx-ai-style";if(document.getElementById(e))return;const o=document.createElement("style");o.id=e,o.textContent=t.css||":root{--ai-font-color:#353535;--ai-post-bg:#f1f3f8;--ai-content-bg:#fff;--ai-content-border:1px solid #e3e8f7;--ai-border:1px solid #e3e8f7bd;--ai-tag-bg:rgba(48,52,63,0.80);--ai-cursor:#333;--ai-btn-bg:rgba(48,52,63,0.75);--ai-title-color:#4c4948;--ai-btn-color:#fff;--ai-speech-content:#fff;}[data-theme=dark],.theme-dark,body.dark,body.dark-theme{--ai-font-color:#00C4B6;--ai-post-bg:#30343f;--ai-content-bg:#1d1e22;--ai-content-border:1px solid #42444a;--ai-border:1px solid #3d3d3f;--ai-tag-bg:#1d1e22;--ai-cursor:rgb(255,255,255,0.9);--ai-btn-bg:#1d1e22;--ai-title-color:rgba(255,255,255,0.86);--ai-btn-color:rgb(255,255,255,0.9);--ai-speech-content:#1d1e22;}#post-ai.post-ai{background:var(--ai-post-bg);border-radius:12px;padding:10px 12px 11px;line-height:1.3;border:var(--ai-border);margin-top:10px;margin-bottom:6px;transition:all 0.3s;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;}#post-ai .ai-title{display:flex;color:var(--ai-title-color);border-radius:8px;align-items:center;padding:0 6px;position:relative;}#post-ai .ai-title i{font-weight:800;}#post-ai .ai-title-text{font-weight:bold;margin-left:8px;font-size:17px;}#post-ai .ai-tag{font-size:12px;background-color:var(--ai-tag-bg);color:var(--ai-btn-color);border-radius:4px;margin-left:auto;line-height:1;padding:4px 5px;border:var(--ai-border);}#post-ai .ai-explanation{margin-top:10px;padding:8px 12px;background:var(--ai-content-bg);border-radius:8px;border:var(--ai-content-border);font-size:15.5px;line-height:1.4;color:var(--ai-font-color);}#post-ai .ai-cursor{display:inline-block;width:7px;background:var(--ai-cursor);height:16px;margin-bottom:-2px;opacity:0.95;margin-left:3px;transition:all 0.3s;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;}#post-ai .ai-btn-box{font-size:15.5px;width:100%;display:flex;flex-direction:row;flex-wrap:wrap;}#post-ai .ai-btn-item{padding:5px 10px;margin:10px 16px 0px 5px;width:fit-content;line-height:1;background:var(--ai-btn-bg);border:var(--ai-border);color:var(--ai-btn-color);border-radius:6px 6px 6px 0;-webkit-border-radius:6px 6px 6px 0;-moz-border-radius:6px 6px 6px 0;-ms-border-radius:6px 6px 6px 0;-o-border-radius:6px 6px 6px 0;user-select:none;transition:all 0.3s;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;cursor:pointer;}#post-ai .ai-btn-item:hover{background:#00C4B6;}#post-ai .ai-recommend{display:flex;flex-direction:row;flex-wrap:wrap;}#post-ai .ai-recommend-item{width:50%;margin-top:2px;}#post-ai .ai-recommend-item a{border-bottom:2px solid #4c98f7;padding:0 .2em;color:#4c98f7;font-weight:700;text-decoration:none;transition:all 0.3s;-webkit-transition:all 0.3s;-moz-transition:all 0.3s;-ms-transition:all 0.3s;-o-transition:all 0.3s;}#post-ai .ai-recommend-item a:hover{background-color:#49b1f5;border-bottom:2px solid #49b1f5;color:#fff;border-radius:5px;}@media screen and (max-width:768px){#post-ai .ai-btn-box{justify-content:center;}}#post-ai .ai-title>svg{width:21px;height:21px;}#post-ai .ai-title>svg path{fill:var(--ai-font-color);}#post-ai .ai-Toggle{font-size:12px;border:var(--ai-border);background:var(--ai-btn-bg);color:var(--ai-btn-color);padding:3px 4px;border-radius:4px;margin-left:6px;cursor:pointer;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;-ms-transition:.3s;transition:.3s;font-weight:bolder;pointer-events:none;opacity:0;}#post-ai .ai-Toggle:hover{background:#00C4B6;}#post-ai .ai-speech-box{width:21px;height:21px;background:var(--ai-font-color);margin-left:7px;border-radius:50%;display:flex;flex-direction:row;flex-wrap:wrap;align-content:center;justify-content:center;pointer-events:none;opacity:0;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;-ms-transition:.3s;transition:.3s;cursor:pointer;}#post-ai .ai-speech-content{width:8px;background:var(--ai-speech-content);height:8px;border-radius:50%;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;-ms-transition:.3s;transition:.3s;}#post-ai .ai-speech-box:hover .ai-speech-content{background:#49b0f5;}@keyframes ai_breathe{0%{transform:scale(0.9);-webkit-transform:scale(0.9);-moz-transform:scale(0.9);-ms-transform:scale(0.9);-o-transform:scale(0.9);}50%{transform:scale(1);-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);}}",t.additional_css&&(o.textContent+=t.additional_css),document.head.appendChild(o)}();const a=document.createElement("div");a.className="post-ai",a.setAttribute("id","post-ai"),n.insertBefore(a,n.firstChild),a.innerHTML=`<div class="ai-title">\n        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="21px" height="21px" viewBox="0 0 48 48">\n        <g id="&#x673A;&#x5668;&#x4EBA;" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><path d="M34.717885,5.03561087 C36.12744,5.27055371 37.079755,6.60373651 36.84481,8.0132786 L35.7944,14.3153359 L38.375,14.3153359 C43.138415,14.3153359 47,18.1768855 47,22.9402569 L47,34.4401516 C47,39.203523 43.138415,43.0650727 38.375,43.0650727 L9.625,43.0650727 C4.861585,43.0650727 1,39.203523 1,34.4401516 L1,22.9402569 C1,18.1768855 4.861585,14.3153359 9.625,14.3153359 L12.2056,14.3153359 L11.15519,8.0132786 C10.920245,6.60373651 11.87256,5.27055371 13.282115,5.03561087 C14.69167,4.80066802 16.024865,5.7529743 16.25981,7.16251639 L17.40981,14.0624532 C17.423955,14.1470924 17.43373,14.2315017 17.43948,14.3153359 L30.56052,14.3153359 C30.56627,14.2313867 30.576045,14.1470924 30.59019,14.0624532 L31.74019,7.16251639 C31.975135,5.7529743 33.30833,4.80066802 34.717885,5.03561087 Z M38.375,19.4902885 L9.625,19.4902885 C7.719565,19.4902885 6.175,21.0348394 6.175,22.9402569 L6.175,34.4401516 C6.175,36.3455692 7.719565,37.89012 9.625,37.89012 L38.375,37.89012 C40.280435,37.89012 41.825,36.3455692 41.825,34.4401516 L41.825,22.9402569 C41.825,21.0348394 40.280435,19.4902885 38.375,19.4902885 Z M14.8575,23.802749 C16.28649,23.802749 17.445,24.9612484 17.445,26.3902253 L17.445,28.6902043 C17.445,30.1191812 16.28649,31.2776806 14.8575,31.2776806 C13.42851,31.2776806 12.27,30.1191812 12.27,28.6902043 L12.27,26.3902253 C12.27,24.9612484 13.42851,23.802749 14.8575,23.802749 Z M33.1425,23.802749 C34.57149,23.802749 35.73,24.9612484 35.73,26.3902253 L35.73,28.6902043 C35.73,30.1191812 34.57149,31.2776806 33.1425,31.2776806 C31.71351,31.2776806 30.555,30.1191812 30.555,28.6902043 L30.555,26.3902253 C30.555,24.9612484 31.71351,23.802749 33.1425,23.802749 Z" id="&#x5F62;&#x72B6;&#x7ED3;&#x5408;" fill="#444444" fill-rule="nonzero"></path></g></svg>\n        <div class="ai-title-text">${r.name}</div>\n        <div class="ai-Toggle">切换简介</div>\n        <div class="ai-speech-box">\n          <div class="ai-speech-content"></div>\n        </div>\n        <div class="ai-tag">${r.version}</div>\n      </div>\n      <div class="ai-explanation">${r.name}初始化中...</div>\n      <div class="ai-btn-box">\n        <div class="ai-btn-item">${r.button[0]}</div>\n        <div class="ai-btn-item">${r.button[1]}</div>\n        <div class="ai-btn-item">${r.button[2]}</div>\n        <div class="ai-btn-item">${r.button[3]}</div>\n      </div>`;let s=!0,l=document.querySelector(".ai-explanation"),c=document.querySelector(".post-ai"),d=document.querySelectorAll(".ai-btn-item"),m=document.querySelector(".ai-Toggle"),p=document.querySelector(".ai-speech-box"),u="",f="",h=600,g=0,y=0,b=t.speed||20,x=7.5*b,w=[],v=0,S=!1,k=new AbortController,E=k.signal,C="",I="";const L=t.summary_toggle??!0,T=t.summary_speech??!0;let A=0,$=!1,_="",N="",O=!1;const q=t.summary_num||3,j=!0,z="填入chatGPT的apiKey",M=`https://${window.location.host}/`,P=t.key?t.key:"123456",R=t=>{if(s)if(R.start||(R.start=t),v=t-R.start,v>=b){if(R.start=t,g<f-1){let t=u.charAt(g+1),e=/[,.，。!?！？]/.test(t)?x:b;l.firstElementChild&&l.removeChild(l.firstElementChild),l.innerHTML+=t;let o=document.createElement("div");o.className="ai-cursor",l.appendChild(o),g++,e===x&&(document.querySelector(".ai-explanation .ai-cursor").style.opacity="0"),g===f-1&&(B.disconnect(),l.removeChild(l.firstElementChild)),w[0]=setTimeout((()=>{requestAnimationFrame(R)}),e)}}else requestAnimationFrame(R)},B=new IntersectionObserver((t=>{let e=t[0].isIntersecting;s=e,s&&(h=0===g?200:20,w[1]=setTimeout((()=>{y&&(g=0,y=0),0===g&&(l.innerHTML=u.charAt(0)),requestAnimationFrame(R)}),h))}),{threshold:0});function H(t=!0,e="生成中. . ."){g=0,y=1,w.length&&w.forEach((t=>{t&&clearTimeout(t)})),s=!1,v=0,l.innerHTML=t?e:"请等待. . .",S||k.abort(),u="",f="",L&&(m.style.opacity="0",m.style.pointerEvents="none"),T&&(Z(),p.style.opacity="0",p.style.pointerEvents="none"),B.disconnect()}function J(e,o=!0){t.hasOwnProperty("typewriter")&&!t.typewriter?l.innerHTML=e:(H(o),u=e,f=u.length,B.observe(c))}function G(){J(r.introduce)}function F(){H(),w[2]=setTimeout((async()=>{let e=await async function(){S=!1,k=new AbortController,E=k.signal;let e="",o="",n="";const i={signal:E,method:"GET",headers:{"content-type":"application/x-www-form-urlencoded"}};if(sessionStorage.getItem("recommendList"))n=JSON.parse(sessionStorage.getItem("recommendList"));else{try{if(e=await fetch(`https://summary.tianli0.top/recommends?url=${encodeURIComponent(window.location.href)}&author=${t.rec_method?t.rec_method:"all"}`,i),S=!0,429===e.status&&J("请求过于频繁，请稍后再请求 AI。"),!e.ok)throw new Error("Response not ok")}catch(t){return"AbortError"===t.name||(console.error("Error occurred:",t),J("获取推荐出错了，请稍后再试。")),S=!0,!1}n=await e.json(),sessionStorage.setItem("recommendList",JSON.stringify(n))}if(n.hasOwnProperty("success")&&!n.success)return!1;o="推荐文章：<br />",o+='<div class="ai-recommend">',n.forEach(((t,e)=>{o+=`<div class="ai-recommend-item"><span>推荐${e+1}：</span><a target="_blank" href="${t.url}" title="${t.title?t.title:"未获取到题目"}">${t.title?t.title:"未获取到题目"}</a></div>`})),o+="</div>";return o}();""===e||!1===e?J(`${r.name}未能找到任何可推荐的文章。`):e&&(l.innerHTML=e)}),200)}async function U(){H();const t=Y(n),e=await tt(t,j);e&&(J(e.summary),L&&(m.style.opacity="1",m.style.pointerEvents="auto",Q()))}async function D(){H(!0,"矩阵穿梭中. . ."),S=!1,k=new AbortController,E=k.signal;let t="",e="";const o={signal:E,method:"GET",headers:{"content-type":"application/x-www-form-urlencoded"}};if(sessionStorage.getItem("matrixShuttle"))e=JSON.parse(sessionStorage.getItem("matrixShuttle"));else{try{if(t=await fetch("https://summary.tianli0.top/websites_used",o),S=!0,429===t.status&&J("请求过于频繁，请稍后再请求 AI。"),!t.ok)throw new Error("Response not ok")}catch(t){return"AbortError"===t.name||(console.error("Error occurred:",t),J("矩阵穿梭失败了，请稍后再试。")),S=!0,!1}e=await t.json(),sessionStorage.setItem("matrixShuttle",JSON.stringify(e))}const n=function(t){if(0===t.length)return null;const e=function(t){const e=new Uint32Array(1);return window.crypto.getRandomValues(e),e[0]%t}(t.length);return t[e]}(e.websites);n?(J(`正在前往 ${n} ，已有 ${e.count} 个网站接入 AI 摘要。`),w[2]=setTimeout((()=>{window.open(`https://${n}`,"_blank")}),100*b)):J("没有可以穿梭的网站。")}function Z(t=!1){T&&(_&&(_.pause(),_.remove()),_=null,p.style.opacity="1",p.style.animation="",t&&(N=null))}function Q(){T&&(p.style.opacity="1",p.style.animation="",p.style.pointerEvents="auto")}async function X(e){if(!T)return;const o=URL.createObjectURL(e);if(_=new Audio(o),_.play(),t.pjax){function n(){_.pause(),_.remove(),document.removeEventListener("pjax:complete",n)}document.removeEventListener("pjax:complete",n),document.addEventListener("pjax:complete",n)}p.style.opacity="0.4",p.style.animation="ai_breathe .7s linear infinite",_.removeEventListener("ended",K),_.addEventListener("ended",K)}function K(){Z()}function V(e){const o=t.exclude?t.exclude:["highlight","Copyright-Notice","post-ai","post-series","mini-sandbox"];o.includes("post-ai")||o.push("post-ai");const n=["script","style","iframe","embed","video","audio","source","canvas","img","svg","hr","input","form"];let i="";for(let t of e.childNodes)if(t.nodeType===Node.TEXT_NODE)i+=t.textContent.trim();else if(t.nodeType===Node.ELEMENT_NODE){let e=!1;for(let n of t.classList)if(o.includes(n)){e=!0;break}let r=n.includes(t.tagName.toLowerCase());if(!e&&!r){i+=V(t)}}return i.replace(/\s+/g,"")}function W(t){const e=t.querySelectorAll("h1, h2, h3, h4"),o=[];for(let t=0;t<e.length;t++){const n=e[t],i=n.textContent.trim();o.push(i);const r=W(n);o.push(...r)}return o.join(";")}function Y(e,o=!0){let n;if(o){const o=t.total_length||1e3,i=t.ratio_string||"5:3:2";n=`文章的各级标题：${W(e)}。文章内容的截取：${function(t,e=1e3,o="5:3:2"){if(e=Math.min(e,5e3),t.length<=e)return t;const n=o.split(":").map(Number),i=n.reduce(((t,e)=>t+e),0),r=Math.min(t.length,e),a=n.map((t=>Math.floor(r*t/i))),s=t.substring(0,a[0]),l=(t.length-300)/2;return s+t.substring(l,l+a[1])+t.substring(t.length-a[2])}(V(e),o,i)}`}else n=`${V(e)}`;return n}async function tt(t,e=!0){if(!P)return"没有获取到 key，代码可能没有安装正确，详细请查看文档。";if("123456"===P)return"请购买 key 使用，如果你能看到此条内容，则说明代码安装正确。";S=!1,k=new AbortController,E=k.signal;let o="";if(sessionStorage.getItem("summary"))return JSON.parse(sessionStorage.getItem("summary"));if(e){try{if(o=await fetch("https://summary.tianli0.top/",{signal:E,method:"POST",headers:{"Content-Type":"application/json",Referer:M},body:JSON.stringify({content:t,key:P,title:i,url:window.location.href,user_openid:C})}),S=!0,429===o.status&&J("请求过于频繁，请稍后再请求 AI。"),!o.ok)throw new Error("Response not ok")}catch(t){return"AbortError"===t.name||("localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname?J(`${r.name}请求 tianliGPT 出错了，你正在本地进行调试，请前往 summary.zhheo.com 添加本地域名（127.0.0.1:端口）的白名单。`):J(`${r.name}请求 tianliGPT 出错了，请稍后再试。`)),S=!0,""}const e=await o.json();return I=e.id,sessionStorage.setItem("summary",JSON.stringify(e)),Z(!0),e}{const e=`你是一个摘要生成工具，你需要解释我发送给你的内容，不要换行，不要超过200字，只需要介绍文章的内容，不需要提出建议和缺少的东西。请用中文回答，文章内容为：${t}`,n="https://api.openai.com/v1/chat/completions";try{if(o=await fetch(n,{signal:E,method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${z}`},body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"user",content:e}]})}),S=!0,429===o.status&&J("请求过于频繁，请稍后再请求 AI。"),!o.ok)throw new Error("Response not ok")}catch(t){return console.error("Error occurred:",t),J(`${r.name}请求 chatGPT 出错了，请稍后再试。`),S=!0,""}const i=(await o.json()).choices[0].message.content;return sessionStorage.setItem("summary",i),i}}!async function(){sessionStorage.removeItem("recommendList"),sessionStorage.removeItem("backupsSummary");for(let t=0;t<q;t++)sessionStorage.removeItem(`summary${"#".repeat(t)}`);l=document.querySelector(".ai-explanation"),c=document.querySelector(".post-ai"),d=document.querySelectorAll(".ai-btn-item");const e=[G,F,U,D];d.forEach(((o,n)=>{t.hide_shuttle&&n===d.length-1?o.style.display="none":o.addEventListener("click",(()=>{e[n]()}))})),m=document.querySelector(".ai-Toggle"),L?m.addEventListener("click",(()=>{!async function(){H(),N=null,A=(A+1)%q;const t=Y(n)+"#".repeat(A);let e="";1!==A||$||(sessionStorage.setItem("backupsSummary",sessionStorage.getItem("summary")),$=!0),sessionStorage.getItem(`summary${"#".repeat(A)}`)?(e=JSON.parse(sessionStorage.getItem(`summary${"#".repeat(A)}`)),I=e.id,0===A?sessionStorage.setItem("summary",sessionStorage.getItem("backupsSummary")):sessionStorage.setItem("summary",sessionStorage.getItem(`summary${"#".repeat(A)}`))):(sessionStorage.removeItem("summary"),e=await tt(t,j),e&&sessionStorage.setItem(`summary${"#".repeat(A)}`,JSON.stringify(e))),e&&(J(e.summary),m.style.opacity="1",m.style.pointerEvents="auto",Q())}()})):m.style.display="none",p=document.querySelector(".ai-speech-box"),T?p.addEventListener("click",(()=>{!async function(){if(!I)return;let t="";if(!N||_)if(_&&_)O?(O=!1,_.play(),p.style.opacity="0.4",p.style.animation="ai_breathe .7s linear infinite"):(O=!0,_.pause(),p.style.opacity="1",p.style.animation="");else{const e={method:"GET",headers:{"Content-Type":"application/json",Referer:M}},o=new URLSearchParams({key:P,id:I});try{p.style.pointerEvents="none",p.style.opacity="0.4",t=await fetch(`https://summary.tianli0.top/audio?${o}`,e),403===t.status?console.error("403 refer 与 key 不匹配。"):500===t.status?console.error("500 系统内部错误"):(N=await t.blob(),p.style.pointerEvents="auto",await X(N))}catch(t){p.style.opacity="1",p.style.pointerEvents="auto"}}else await X(N)}()})):p.style.display="none",t.summary_directly?U():G(),C=localStorage.getItem("visitorId")||await async function(){try{const t=await import("https://openfpcdn.io/fingerprintjs/v4"),e=await t.default.load(),o=(await e.get()).visitorId;return localStorage.setItem("visitorId",o),o}catch(t){return console.error("生成ID失败"),null}}()}()}e(t),t.pjax&&document.addEventListener("pjax:complete",(()=>{setTimeout((()=>{e(t)}),0)}))}window.hasOwnProperty("aiExecuted")||(window.aiExecuted="chuckle"),"undefined"!=typeof ai_option&&new ChucklePostAI(ai_option);