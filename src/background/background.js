console.log("background.js called...")
chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
            console.log("url：" + details.url);
        details.requestHeaders.push({name:'Cookie',value:"kw_token=G"});
        details.requestHeaders.push({name:'Referer',value:"http://www.kuwo.cn/"});
        details.requestHeaders.push({name:'csrf',value:"G"});
        let headers = details.requestHeaders;
        console.log(JSON.stringify(headers));
        return {requestHeaders: details.requestHeaders};
    },
    {urls: ["http://www.kuwo.cn/*"]},
    ["blocking", "requestHeaders", "extraHeaders"]
);
