import Web3 from "web3"
import { useState, useCallback, useEffect, useRef } from "react"
import { addressConvert } from "../../utils/lib"

export default function Info(){

    const [account,setAccount] = useState(false)
    const web3 = new Web3("https://eth-goerli.g.alchemy.com/v2/g25VCspEjizi4Kc863KXCUgIgQuYDZxY")
    const [alreadyCreated, setCreated] = useState(false)
    let walletAccount :any = null

    const walletAddress = useRef("")


    useEffect(()=>{
        onloadUserAccount()
        // if (walletAccount.publickey!=="none")setCreated(true)
    },[])


    const onloadUserAccount = async () => {
        const response = await chrome.runtime.sendMessage({greeting: "hello"});
        // do something with response here, not outside the function
        console.log(response);

        await chrome.storage.local.get(['account']).then((result) => {
            console.log("account saved is: ",result['account'])
            walletAccount = result['account']
            if(walletAccount.publickey!=="none"){
                setCreated(true)
                walletAddress.current=result["account"].publickey
                console.log('Log ~ file: Info.tsx:32 ~ awaitchrome.storage.local.get ~ walletAddress.current:', walletAddress.current)
            }
        })
    }

    const createAcc = useCallback(async ()=>{   
        if (!account){
        setAccount(true)
        const newAccount = await web3.eth.accounts.create()
        console.log("new acc: ", newAccount)
        chrome.storage.local.set({
                account:{
                    publickey: newAccount.address,
                    privatekey: newAccount.privateKey
                }
            })
            .then(()=>{
                console.log("new account set!")
            })
        }
        await chrome.storage.local.get(['account']).then((result) => {
            console.log("new account saved is: ",result['account'])
            walletAddress.current=result["account"].publickey
            
        })
        

    },[account])


    return(
        <>
            <div className="w-full flex flex-col justify-center items-center p-4 gap-5">
                {!alreadyCreated ? 
                <button onClick={createAcc} className="text-sm rounded-2xl bg-teal-400 w-[140px] px-3 py-[6px] text-[#ffffff]">
                    Create account
                </button>:<div className="flex flex-col gap-4">
                    <button className="rounded-[32px] px-4 py-2 bg-[#eb7106] font-bold w-[170px]">
                        {addressConvert(walletAddress.current)}
                    </button>
                        
                        
                </div>
                }

            </div>
        </>
    )
}