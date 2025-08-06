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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '30px',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '20px',
            padding: '40px 30px',
            maxWidth: '600px',
            width: '100%',
            color: '#fff',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6)',
          }}
        >
          <img
            src="/logo.png"
            alt="RCB Coin Logo"
            width={120}
            height={120}
            style={{ borderRadius: '50%', marginBottom: '20px' }}
          />

          <h1 style={{ fontSize: '2.4rem', marginBottom: '10px' }}>RCB Coin</h1>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Royal Challengers Battalion</h3>

          <p style={{ fontSize: '1rem', marginBottom: '30px', lineHeight: '1.6' }}>
            Join the fan-powered crypto movement. RCB Coin is here to revolutionize fan engagement and give power to the community. Buy now using UPI and become part of the battalion.
          </p>

          <Link href="/buy">
            <button
              style={{
                padding: '14px 30px',
                fontSize: '1rem',
                backgroundColor: '#e50914',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                marginBottom: '30px',
                transition: 'all 0.3s',
              }}
            >
              🚀 Buy RCB Coin with UPI
            </button>
          </Link>

          <div style={{ marginTop: '10px' }}>
            <h3>Scan to Pay</h3>
            <img
              src="/qrcode.png"
              alt="UPI QR Code"
              width={180}
              style={{ borderRadius: '10px', marginTop: '10px' }}
            />
            <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>
              UPI ID: <strong>pushpav1076@okicici</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
