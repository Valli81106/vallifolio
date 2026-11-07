import About from './About.jsx'
import { Contact, Footer } from './Contact.jsx'
import FlowerScene from './FlowerScene.jsx'
import Work from './Work.jsx'

const logo = `${import.meta.env.BASE_URL}logo.svg`

function Navigation() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <img className="nav-mark" src={logo} width="53" height="40" alt="" />
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a className="nav-contact" href="#contact">Let’s talk</a>
      </nav>
    </header>
  )
}

function PixelSeam({ from, to }) {
  return (
    <div
      className="pixel-seam"
      aria-hidden="true"
      style={{ '--seam-from': `var(--${from})`, '--seam-to': `var(--${to})` }}
    />
  )
}

function Hero() {
  return (
    <FlowerScene className="hero" id="home" titleId="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">Sreevalli<br />Pallapothu</h1>
        <div className="hero-mark" aria-hidden="true" />
      </div>
    </FlowerScene>
  )
}

function WhatIDo() {
  return (
    <FlowerScene className="what-i-do" id="what-i-do" titleId="what-i-do-title">
      <div className="what-i-do-copy">
        <h2 id="what-i-do-title">I <em>design</em> the<br /><em>thinking</em></h2>
        <p className="intro">i love making games and apps</p>
      </div>
    </FlowerScene>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <Hero />
        <PixelSeam from="blue" to="wine" />
        <WhatIDo />
        <PixelSeam from="blue" to="blue" />
        <About />
        <PixelSeam from="wine" to="blue" />
        <Work />
        <PixelSeam from="blue" to="wine" />
        <Contact />
      </main>
      <PixelSeam from="wine" to="blue" />
      <Footer />
    </>
  )
}
