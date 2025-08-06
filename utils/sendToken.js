import Web3 from "web3";
const web3 = new Web3("https://bsc-dataseed.binance.org/");

const CONTRACT_ADDRESS = "PASTE_YOUR_CONTRACT_ADDRESS_HERE";
const ABI = [PASTE_YOUR_ABI_HERE]; // Add your actual contract ABI here
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const PUBLIC_ADDRESS = "0x2E82279E5b7172460797c01836ce053581c080fb";

export const sendToken = async (to, amountInINR) => {
  const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
  const tokenAmount = web3.utils.toWei(amountInINR.toString(), "ether");

  const tx = {
    from: PUBLIC_ADDRESS,
    to: CONTRACT_ADDRESS,
    data: contract.methods.transfer(to, tokenAmount).encodeABI(),
    gas: 200000,
  };

  const signed = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  const receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);
  return receipt.transactionHash;
};
