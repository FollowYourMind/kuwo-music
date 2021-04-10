// console.log("background.js called...")
// 在web请求头里面增加reffer字段
// chrome.webRequest.onBeforeSendHeaders.addListener(
//     function (details) {
//
//         details.requestHeaders.push({name:'Cookie',value:"kw_token=G"});
//         details.requestHeaders.push({name:'Referer',value:"http://www.kuwo.cn/"});
//         details.requestHeaders.push({name:'csrf',value:"G"});
//         let headers = details.requestHeaders;
//         console.log(JSON.stringify(headers));
//         return {requestHeaders: details.requestHeaders};
//     },
//     {urls: ["http://www.kuwo.cn/*"]},
//     ["blocking", "requestHeaders", "extraHeaders"]
// );
