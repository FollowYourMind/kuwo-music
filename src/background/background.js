console.log("background.js called...")
// // 在web请求头里面增加reffer字段
// chrome.webRequest.onBeforeSendHeaders.addListener(
//     function (details) {
//         let headers = details.requestHeaders
//         console.log(JSON.stringify(headers));
//         return {requestHeaders: details.requestHeaders};
//     },
//     {urls: ["<all_urls>"]},
//     ["blocking", "requestHeaders"]
// );
