import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { Models, ORAPlugin, Chain } from '@ora-io/web3-plugin-ora';
import './App.css';

function App() {
    const [prompt, setPrompt] = useState('');
    const [walletAddress, setWalletAddress] = useState('');
    const [transactionHash, setTransactionHash] = useState('');
    const [result, setResult] = useState('');
    const [estimatedFee, setEstimatedFee] = useState('');
    const [web3, setWeb3] = useState(null);

    useEffect(() => {
        if (window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            setWeb3(web3Instance);
            web3Instance.registerPlugin(new ORAPlugin(Chain.SEPOLIA));

            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(accounts => {
                    setWalletAddress(accounts[0]);
                })
                .catch(err => console.error('Error connecting to MetaMask:', err));
        } else {
            console.error('MetaMask not detected');
        }
    }, []);

    const estimateFee = async () => {
        if (!web3) return;
        try {
            const fee = await web3.ora.estimateFee(Models.STABLE_DIFFUSION);
            setEstimatedFee(fee.toString());
        } catch (error) {
            console.error("Error estimating fee:", error);
        }
    };

    const generateImage = async () => {
        if (!web3 || !walletAddress) return;
        try {
            const tx = await web3.ora.calculateAIResult(walletAddress, Models.STABLE_DIFFUSION, prompt, estimatedFee);
            setTransactionHash(tx.transactionHash);
            console.log("Oracle is generating result...");

            setTimeout(async () => {
                const result = await web3.ora.getAIResult(Models.STABLE_DIFFUSION, prompt);
                setResult(result);
            }, 30000); // Wait 30 seconds before fetching the result
        } catch (error) {
            console.error("Error generating image:", error);
        }
    };

    return (
        <div className="App">
            <h1>NFT Creator</h1>
            <p>Enter a creative prompt and generate a unique NFT image using the power of AI. Your image will be minted and securely stored on the blockchain.</p>
            <input 
                type="text" 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="Enter your creative prompt here..." 
            />
            <div className="button-group">
                <button onClick={estimateFee}>
                    Estimate Fee
                </button>
                <button onClick={generateImage}>
                    Generate Image
                </button>
            </div>
            {estimatedFee && <p>Estimated Fee: {estimatedFee}</p>}
            {transactionHash && <p>Transaction Hash: {transactionHash}</p>}
            {result && (
                <div className="Generated-Result">
                    <h3>Generated Image:</h3>
                    <p>IPFS Hash: {result}</p>
                    <img src={`https://ipfs.io/ipfs/${result}`} alt="Generated" />
                </div>
            )}
            {walletAddress && <p className="Connected-Wallet">Connected Wallet: {walletAddress}</p>}
        </div>
    );
}

export default App;
