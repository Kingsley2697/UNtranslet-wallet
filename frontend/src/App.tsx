const navItems = ['Home', 'Company', 'Trading', 'Program']

export default function App() {
  return (
    <div className="landing-page">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="UNtranslet Wallet home">A2B</a>
        <nav className="main-nav" aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}{item !== 'Home' && <span className="chevron" aria-hidden="true" />}</a>)}
        </nav>
        <div className="actions">
          <button className="login">Login</button>
          <button className="signup">Signup</button>
        </div>
      </header>

      <main id="home" className="hero">
        <div className="hero-copy">
          <h1>Trade with<br />Confidence.<br />Invest Globally.</h1>
          <button className="hero-cta">Sign Up Now</button>
        </div>

        <div className="trading-art" aria-label="UNtranslet Wallet trading illustration">
          <div className="grid-glow" />
          <div className="container container-gold"><span>GOLD</span></div>
          <div className="container container-aapl"><span>AAPL</span></div>
          <div className="container container-wallet"><span>UNtranslet<br />Wallet</span></div>
          <div className="orb"><i /></div>
        </div>
      </main>
    </div>
  )
}
