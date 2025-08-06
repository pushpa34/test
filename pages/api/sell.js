import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export async function POST(req) {
  try {
    const { userWalletAddress, amountToSell, userUPI } = await req.json();

    // Create the email content
    const message = `
      🛑 SELL REQUEST 🛑\n
      Wallet: ${userWalletAddress}\n
      Amount to Sell: ${amountToSell} RCB Coin\n
      User UPI ID: ${userUPI}
    `;

    // Send email to admin (you)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: 'RCB Coin Sell Request',
      text: message,
    });

    return NextResponse.json({ success: true, message: 'Sell request sent successfully.' });
  } catch (error) {
    console.error('Sell Error:', error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
