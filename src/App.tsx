import { useEffect, useState, useCallback } from "react";
/* import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base"; */
import "./App.css";
import Web3 from "web3";
import Login from "./pages/login/Login";
import Info from "./pages/info/Info";
/* import RPC from "./web3RPC"; // for using web3.js
 */

function App() {
 
  const [account,setAccount] = useState(false)
  const web3 = new Web3("https://eth-goerli.g.alchemy.com/v2/g25VCspEjizi4Kc863KXCUgIgQuYDZxY")
  
  const createAcc = useCallback(async ()=>{   
    if (!account){
      setAccount(true)
      const newAccount = await web3.eth.accounts.create()
      console.log("new acc: ", newAccount)
    }
    

  },[account])





  return (
    <div className="container">
      
      <button onClick={createAcc}>
          Create account
      </button>
      <Login />
      <Info />
    </div>
  );
}

export default App;
