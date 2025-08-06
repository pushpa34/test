import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [wallet, setWallet] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/buy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ wallet, amount }),
    });
    const data = await res.json();
    alert(data.message || "Transaction submitted!");
  };

  return (
    <>
      <Head>
        <title>RCB Coin - Royal Challengers Battalion</title>
      </Head>
      <main className="min-h-screen bg-black text-white font-sans p-4">
        <div className="max-w-4xl mx-auto py-10">
          <h1 className="text-4xl font-bold text-center mb-8 text-red-500">
            Royal Challengers Battalion (RCB Coin)
          </h1>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-10">
            <h2 className="text-xl font-semibold mb-2">Token Details</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Token Full Name: Royal Challengers Battalion (RCB Coin)</li>
              <li>Total Supply: 1.8 Crore (1,80,00,000)</li>
              <li>Contract Address: [Paste your contract address]</li>
              <li>Your Wallet Address: 0x2E82279E5b7172460797c01836ce053581c080fb</li>
              <li>Contact Email: pushpav1076@gmail.com</li>
            </ul>
          </div>

          {/* Buy Section */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-10">
            <h2 className="text-2xl font-bold mb-4 text-white text-center">
              Buy RCB Coin with UPI
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white">
                  UPI Payment QR / Link:
                </label>
                <p className="text-green-400 text-sm">
                  upi://pay?pa=pushpav1076@okicici&pn=RCB%20Coin&am=Amount&cu=INR
                </p>
              </div>
              <input
                type="text"
                placeholder="Your Wallet Address"
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-900 text-white"
                required
              />
              <input
                type="number"
                placeholder="Amount in INR"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-900 text-white"
                required
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
              >
                Buy Now
              </button>
            </form>
          </div>

          {/* Sell Section */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-10">
            <h2 className="text-2xl font-bold mb-4 text-white text-center">
              Sell RCB Coin
            </h2>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const res = await fetch("/api/sell", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    userWalletAddress: e.target.wallet.value,
                    amountToSell: e.target.amount.value,
                    userUPI: e.target.upi.value,
                  }),
                });
                const data = await res.json();
                alert(data.message || "Sell request submitted!");
              }}
              className="space-y-4"
            >
              <input
                type="text"
                name="wallet"
                placeholder="Your Wallet Address"
                className="w-full px-4 py-2 rounded-md bg-gray-900 text-white"
                required
              />
              <input
                type="number"
                name="amount"
                placeholder="Amount of RCB Coin to Sell"
                className="w-full px-4 py-2 rounded-md bg-gray-900 text-white"
                required
              />
              <input
                type="text"
                name="upi"
                placeholder="Your UPI ID (e.g., xyz@okaxis)"
                className="w-full px-4 py-2 rounded-md bg-gray-900 text-white"
                required
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
              >
                Submit Sell Request
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
