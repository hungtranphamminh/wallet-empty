/* eslint-disable no-undef */
// import Login from "../src/pages/login/Login";

console.log("Background service loaded");

// eslint-disable-next-line no-undef
chrome.runtime.onInstalled.addListener(() => {

    chrome.storage.local.get(['account']).then((result) => {
        console.log("new account saved is: ",result['account'])
        console.log("storage set")
    })
    /* const account = {
        publickey: "none",
        privatekey: "none"
    }

    chrome.storage.local.set({account:account})
    .then(()=>{
        console.log("storage set")
    }) */
})

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        console.log(sender.tab?
            "from a content script: "+sender.tab.url :
            "from the popup"
        )
        if (request.greeting === "hello")
            sendResponse({farewell:"goodbye"});
    }
)


export {}



