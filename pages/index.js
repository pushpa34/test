import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>RCB Coin - Royal Challengers Battalion</title>
        <meta name="description" content="Buy RCB Coin, the fan-powered crypto revolution!" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div
        style={{
          backgroundImage: 'url("/background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          padding: '40px 20px',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <img
          src="/logo.png"
          alt="RCB Coin Logo"
          width={150}
          style={{ borderRadius: '10px', marginBottom: '20px' }}
        />

        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Royal Challengers Battalion</h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '30px' }}>RCB Coin</h2>

        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 30px' }}>
          Welcome to the future of fan-powered cryptocurrency. Buy RCB Coin now and become part of the revolution.
        </p>

        <Link href="/buy">
          <button
            style={{
              padding: '12px 24px',
              fontSize: '1rem',
              backgroundColor: '#e50914',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              marginBottom: '40px',
            }}
          >
            Buy RCB Coin with UPI
          </button>
        </Link>

        <div style={{ marginTop: '20px' }}>
          <h3>Scan to Pay</h3>
          <img
            src="/qrcode.png"
            alt="UPI QR Code"
            width={220}
            style={{ borderRadius: '8px', marginTop: '10px' }}
          />
          <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>
            UPI ID: <strong>pushpav1076@okicici</strong>
          </p>
        </div>
      </div>
    </>
  );
}
