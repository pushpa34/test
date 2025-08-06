import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { ethers } from 'ethers';

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const RPC_URL = "https://bsc-dataseed.binance.org/";
const TOKEN_ADDRESS = "0x2E82279E5b7172460797c01836ce053581c080fb";
const ABI = ["function transfer(address to, uint amount) public returns (bool)"];

export async function POST(req) {
  const body = await req.json();
  const { walletAddress, amountPaidINR } = body;

  if (!walletAddress || !amountPaidINR) {
    return NextResponse.json({ error: "Missing wallet or amount." }, { status: 400 });
  }

  const dataPath = path.join(process.cwd(), 'data', 'data.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  let { totalINRReceived, totalCoinsSent } = data;

  let currentPrice = totalCoinsSent === 0 ? 1 : totalINRReceived / totalCoinsSent;
  const coinsToSend = amountPaidINR / currentPrice;

  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  const contract = new ethers.Contract(TOKEN_ADDRESS, ABI, wallet);

  const decimals = 18;
  const amountToSend = ethers.parseUnits(coinsToSend.toString(), decimals);

  try {
    const tx = await contract.transfer(walletAddress, amountToSend);
    await tx.wait();

    totalINRReceived += amountPaidINR;
    totalCoinsSent += parseFloat(coinsToSend.toFixed(6));

    fs.writeFileSync(dataPath, JSON.stringify({ totalINRReceived, totalCoinsSent }, null, 2));

    return NextResponse.json({
      success: true,
      message: "Tokens sent successfully.",
      txHash: tx.hash,
      coinsSent: coinsToSend,
      newPrice: totalINRReceived / totalCoinsSent
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Transfer failed." }, { status: 500 });
  }
}
