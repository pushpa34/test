import { sendToken } from "../../utils/sendToken";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { walletAddress, amount, upiId } = req.body;

  if (!walletAddress || !amount || !upiId) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Step 1: Verify payment (fake simulation for now)
    const paymentSuccess = true; // In real world, you'd use Razorpay, Cashfree, etc.

    if (paymentSuccess) {
      // Step 2: Send token to wallet
      await sendToken(walletAddress, amount);

      // Step 3: Send email to your Gmail
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_ID,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_ID,
        to: process.env.EMAIL_ID, // send to yourself
        subject: "🟢 New RCB Coin Purchase",
        text: `Someone bought RCB Coin!\n\nWallet Address: ${walletAddress}\nAmount Paid (INR): ₹${amount}\nUPI ID: ${upiId}`,
      };

      await transporter.sendMail(mailOptions);

      return res.status(200).json({ success: true, message: "Token sent and email notified" });
    } else {
      return res.status(400).json({ error: "Payment verification failed" });
    }
  } catch (error) {
    console.error("Error in buy API:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
