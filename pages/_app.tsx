import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
export default function App({ Component, pageProps }: AppProps) {
  const [walletAddress, setWalletAddress] = useState("");


  


  const getCurrentWalletConnected = async () => {
    if(typeof window.ethereum !== "undefined"){
      ethereum.request({ method: 'eth_requestAccounts' })
      .then(wallets => setWalletAddress(wallets[0]))
    }
  };

  useEffect(() => {
    getCurrentWalletConnected()
  }, [])

  

  return <Component address={walletAddress} {...pageProps} />
}
