// utils/sendToken.js

import Web3 from "web3";
import dotenv from "dotenv";
dotenv.config();

const web3 = new Web3("https://bsc-dataseed.binance.org/");

const CONTRACT_ADDRESS = process.env.TOKEN_CONTRACT; // Keep it in .env
const ABI = [
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", type: "bool" }],
    type: "function",
  },
];

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PUBLIC_ADDRESS = "0x2E82279E5b7172460797c01836ce053581c080fb"; // Your wallet address

export const sendToken = async (to, amountInINR) => {
  try {
    const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
    
    const tokenAmount = web3.utils.toWei(amountInINR.toString(), "ether");

    const tx = {
      from: PUBLIC_ADDRESS,
      to: CONTRACT_ADDRESS,
      data: contract.methods.transfer(to, tokenAmount).encodeABI(),
      gas: 100000,
    };

    const signed = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    const receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);

    console.log("✅ Tokens sent:", receipt.transactionHash);
    return receipt.transactionHash;
  } catch (err) {
    console.error("❌ Error sending tokens:", err);
    throw err;
  }
};
