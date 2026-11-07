const assets = import.meta.env.BASE_URL
const email = 'sreevalliiscute1234@gmail.com'

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/imakepart.13/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sreevalli-pallapothu-180b74321/' },
  { label: 'GitHub', href: 'https://github.com/Valli81106' },
]

function openEmailDraft(event) {
  event.preventDefault()
  const fields = new FormData(event.currentTarget)
  const subject = encodeURIComponent('Portfolio inquiry')
  const message = fields.get('message').replace(/\r?\n/g, '\r\n')
  const body = encodeURIComponent(`${message}\r\n\r\nReply to: ${fields.get('email')}`)
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
}

export function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <div className="contact-copy">
          <h2 id="contact-title">Let’s talk</h2>
          <p>Send me a message and I’ll make your idea come alive.</p>
        </div>
        <div className="mouth-frames" aria-hidden="true">
          <img src={`${assets}mouth-open.png`} width="208" height="248" alt="" loading="lazy" />
          <img src={`${assets}mouth-closed.png`} width="230" height="230" alt="" loading="lazy" />
        </div>
        <form className="contact-form" onSubmit={openEmailDraft}>
          <label className="visually-hidden" htmlFor="contact-email">Your email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="Enter your email" required />
          <label className="visually-hidden" htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="4" placeholder="Message" required />
          <button type="submit" aria-describedby="email-note">Send <span aria-hidden="true">↗</span></button>
          <p className="contact-note" id="email-note">Opens your email app.</p>
        </form>
      </div>
    </section>
  )
}

const star = 'M50 0l10 34 35-14-19 30 24 21-35-3-15 32-9-33-35 8 21-26L5 25l35 8Z'
const heart = 'M50 89C23 69 0 53 0 28 0 2 32-7 50 18 68-7 100 2 100 28c0 25-23 41-50 61Z'
const bolt = 'M54 0 18 58l28-3-3 45 42-63-30 5Z'
const flower = 'M50 14C69-13 99 7 91 31c25 5 24 44-1 49-2 26-37 31-47 9-20 15-51-5-36-27-21-17-7-46 17-44 4-12 17-14 26-4Z'

function FooterShapes() {
  return (
    <>
      <path d={heart} transform="translate(342 80) rotate(-13) scale(.62)" />
      <circle cx="444" cy="214" r="26" />
      <path d={bolt} transform="translate(507 99) rotate(-17) scale(.63)" />
      <path d={star} transform="translate(600 190) rotate(13) scale(.66)" />
      <path d={flower} transform="translate(659 122) rotate(10) scale(.53)" />
      <path d={bolt} transform="translate(782 166) rotate(-35) scale(.49)" />
      <path d={star} transform="translate(713 257) rotate(-16) scale(.62)" />
      <path d={flower} transform="translate(538 276) rotate(-10) scale(.57)" />
    </>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-sheet">
        <svg className="footer-paper" viewBox="0 0 1200 320" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <mask id="footer-cutouts">
              <rect width="1200" height="320" fill="white" />
              <g fill="black"><FooterShapes /></g>
            </mask>
          </defs>
          <rect className="footer-paper-fill" width="1200" height="320" mask="url(#footer-cutouts)" />
        </svg>
        <div className="footer-inner">
          <div className="footer-links">
            <a className="footer-name" href="#home">Sreevalli<br />Pallapothu</a>
            <nav aria-label="Footer pages">
              <p className="eyebrow">Pages</p>
              <a href="#work">Work</a>
              <a href="#about">About</a>
              <a href="#contact">Let’s talk</a>
            </nav>
            <nav aria-label="Social and email links">
              <p className="eyebrow">Say hi</p>
              <a href={`mailto:${email}`}>Email</a>
              {socialLinks.map(({ label, href }) => (
                <a href={href} key={label} target="_blank" rel="noreferrer">{label} <span aria-hidden="true">↗</span></a>
              ))}
            </nav>
          </div>
          <a className="footer-top" href="#home">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </div>
      <div className="footer-photo">
        <img src={`${assets}footer-photo.jpg`} width="1280" height="1599" alt="Sreevalli walking down a tree-lined street" loading="lazy" />
        <svg viewBox="0 0 1200 360" preserveAspectRatio="none" aria-hidden="true">
          <g transform="translate(1220 -28) scale(-1 1)"><FooterShapes /></g>
        </svg>
      </div>
    </footer>
  )
}
