/* eslint-disable no-undef */


console.log("Background service loaded");

// eslint-disable-next-line no-undef
chrome.runtime.onInstalled.addListener(() => {
    const account = {
        publickey: "account key",
        privatekey: "private"
    }

    chrome.storage.local.set({account:account})
    .then(()=>{
        console.log("storage set")
    })
})


export {}



