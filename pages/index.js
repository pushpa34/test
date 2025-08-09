export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.75)',
          borderRadius: '15px',
          padding: '40px',
          maxWidth: '500px',
          textAlign: 'center',
          color: 'white',
          boxShadow: '0px 4px 20px rgba(0,0,0,0.4)'
        }}
      >
        {/* Logo */}
        <img
          src="/logo.jpg"
          alt="RCB Coin Logo"
          style={{ width: '100px', marginBottom: '20px' }}
        />

        <h1 style={{ marginBottom: '10px' }}>RCB Coin</h1>
        <h2 style={{ fontWeight: '400', marginBottom: '20px' }}>
          Royal Challengers Battalion
        </h2>
        <p style={{ marginBottom: '30px', lineHeight: '1.5' }}>
          Join the fan-powered crypto movement. RCB Coin is here to revolutionize fan
          engagement and give power to the community. Buy now using UPI and become part of the battalion.
        </p>

        {/* Contract Address */}
        <div
          style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            padding: '10px',
            borderRadius: '8px',
            marginBottom: '20px',
            fontSize: '14px',
            wordBreak: 'break-all'
          }}
        >
          <strong>Contract Address:</strong><br />
          0x28bb28cBFD45b647EE2b8A37B204f9C402E5e3c2
        </div>

        {/* Buy Button */}
        <button
          style={{
            backgroundColor: 'red',
            color: 'white',
            padding: '12px 25px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer'
          }}
        >
          🚀 Buy RCB Coin with UPI
        </button>

        {/* UPI Info */}
        <div style={{ marginTop: '30px' }}>
          <h3>Scan to Pay</h3>
          <img
            src="/qrcode.png"
            alt="UPI QR Code"
            style={{ width: '120px', marginTop: '10px' }}
          />
          <p style={{ marginTop: '10px' }}>
            UPI ID: <b>pushpav1076@okicici</b>
          </p>
        </div>
      </div>
    </div>
  );
}
