const assets = import.meta.env.BASE_URL

export default function About() {
  return (
    <section className="panel about-section" id="about" aria-labelledby="about-title">
      <div className="panel-inner about-inner">
        <div className="about-intro">
          <h2 id="about-title">about<br />me.</h2>
          <p>I take silly ideas seriously.</p>
          <img src={`${assets}logo.svg`} width="53" height="40" alt="" loading="lazy" />
        </div>
        <article className="id-card" aria-label="Sreevalli’s ID card">
          <div className="card-stars" aria-hidden="true">
            <span /><span /><span /><span />
          </div>
          <div className="id-card-profile">
            <img
              src={`${assets}about-portrait.png`}
              width="528"
              height="396"
              alt="Portrait of Sreevalli Pallapothu"
              loading="lazy"
            />
            <p>Based in India</p>
            <p>Game Development,<br />Product Design</p>
            <p>Figma, Godot, Blender, Next.js</p>
            <p>Always up for weird ideas &amp; building cool things 2gether</p>
          </div>
          <div className="id-card-bio">
            <p>I’m a professional “what if we actually made this?” person. I love turning silly ideas into real, interactive experiences, from cute, responsive websites to playful games and thoughtfully designed products.</p>
            <p>I love bringing ideas to life through design, code, and pretty much any creative medium I can get my hands on. I’m endlessly curious, always experimenting, and drawn to people who are just as excited about making cool stuff as I am.</p>
            <p>I believe no idea is too silly to explore, and that the best way to learn is to make something.</p>
          </div>
        </article>
      </div>
    </section>
  )
}
