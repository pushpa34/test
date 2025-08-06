import { useState } from "react";

export default function Buy() {
  const [walletAddress, setWalletAddress] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [status, setStatus] = useState("");

  const handleBuy = async () => {
    setStatus("Processing...");

    try {
      const response = await fetch("/api/buy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          walletAddress,
          amountPaidINR: parseFloat(amountPaid),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(`✅ Success! Sent ${data.coinsSent.toFixed(2)} RCB Coins.\nTransaction: ${data.txHash}`);
      } else {
        setStatus(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Error: Something went wrong.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Buy RCB Coin with UPI</h1>
      <p>📲 Send payment to UPI ID: <strong>pushpav1076@okicici</strong></p>
      <img src="/qr.png" alt="UPI QR Code" style={styles.qr} />
      <input
        type="text"
        placeholder="Amount you paid (INR)"
        value={amountPaid}
        onChange={(e) => setAmountPaid(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Your Wallet Address"
        value={walletAddress}
        onChange={(e) => setWalletAddress(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleBuy} style={styles.button}>Submit</button>
      <p style={styles.status}>{status}</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
  },
  qr: {
    width: "200px",
    margin: "10px auto",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "crimson",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
  status: {
    marginTop: "15px",
    whiteSpace: "pre-wrap",
  }
};
