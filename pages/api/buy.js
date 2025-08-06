import { sendToken } from "../../../utils/sendToken";
import { NextResponse } from 'next/server';
import { ethers } from 'ethers';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(req) {
  try {
    const { userAddress, amountInINR } = await req.json();

    // Convert INR to token amount (1 RCB = ₹1)
    const tokenAmount = ethers.utils.parseUnits(amountInINR.toString(), 18);

    const tx = await sendToken(userAddress, tokenAmount);

    return NextResponse.json({ success: true, hash: tx.hash });
  } catch (error) {
    console.error('Transaction Error:', error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
