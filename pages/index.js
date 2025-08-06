// pages/index.js

import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-black text-white font-orbitron min-h-screen p-4">
      <Head>
        <title>RCB Coin - Royal Challengers Battalion</title>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap" rel="stylesheet" />
      </Head>

      <header className="text-center p-6 border-b border-gray-800">
        <h1 className="text-4xl text-[#ff0b56]">RCB Coin</h1>
        <p className="text-lg">Royal Challengers Battalion - The Future of Fan-Powered Crypto</p>
      </header>

      <section className="my-8">
        <h2 className="text-2xl">About RCB Coin</h2>
        <p><strong>Token Name:</strong> Royal Challengers Battalion (RCB Coin)</p>
        <p><strong>Total Supply:</strong> 1.8 Crore (1,80,00,000)</p>
        <p><strong>Contract Address:</strong> 0x2E82279E5b7172460797c01836ce053581c080fb</p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl">Live Price Chart</h2>
        <iframe
          src="https://poocoin.app/tokens/0x2E82279E5b7172460797c01836ce053581c080fb"
          width="100%"
          height="400"
          className="border-none"
        ></iframe>
      </section>

      <section className="my-8 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl">Buy RCB Coin</h2>
          <p className="mb-2">Scan QR or click to pay: <strong>pushpav1076@okicici</strong></p>
          <Image src="/qr.png" alt="UPI QR" width={200} height={200} />
          <p><a href="upi://pay?pa=pushpav1076@okicici&am=100&cu=INR" className="underline text-blue-400">Pay Now via UPI</a></p>
          <form action="/api/buy" method="POST" className="mt-4">
            <label className="block mb-2">Your BSC Wallet Address:</label>
            <input type="text" name="wallet" className="text-black w-full p-2 mb-2" required />
            <button type="submit" className="bg-[#ff0b56] px-4 py-2">Submit Payment Info</button>
          </form>
        </div>

        <div>
          <h2 className="text-xl">Sell RCB Coin</h2>
          <form action="/api/sell" method="POST" className="mt-4">
            <label className="block mb-2">Your BSC Wallet Address:</label>
            <input type="text" name="wallet" className="text-black w-full p-2 mb-2" required />
            <label className="block mb-2">Amount of RCB to Sell:</label>
            <input type="number" name="amount" className="text-black w-full p-2 mb-2" required />
            <label className="block mb-2">Your UPI ID (to receive INR):</label>
            <input type="text" name="upi" className="text-black w-full p-2 mb-2" required />
            <button type="submit" className="bg-[#ff0b56] px-4 py-2">Sell Tokens</button>
          </form>
        </div>
      </section>

      <section className="my-8">
        <h2 className="text-xl">Contact</h2>
        <p>Email: pushpav1076@gmail.com</p>
      </section>

      <footer className="text-center py-4 border-t border-gray-800">
        <p>&copy; 2025 RCB Coin. All rights reserved.</p>
      </footer>
    </div>
  );
}
