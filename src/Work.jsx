import { useRef } from 'react'

const projects = [
  {
    id: 'trishul',
    title: 'Trishul',
    genre: '2D platformer',
    description: 'Play as Isha and Shiva, traveling through portals across three lives to recover the scattered pieces of the Trishul before a demon claims them.',
    url: 'https://valli81106.itch.io/trishul',
  },
  {
    id: 'the-last-lala-bye',
    title: 'The Last Lala-Bye',
    genre: 'First-person horror',
    description: 'Enter a patient’s recurring nightmare as a sleep doctor. Explore four warped rooms in a witch’s cabin, wind the music boxes backward, and piece together what the patient remembers before time runs out.',
    url: 'https://sammy-ryed.itch.io/the-last-lala-bye',
  },
]

function ProjectCard({ project }) {
  const dialog = useRef(null)
  const { id, title, genre, description, url } = project
  const image = `${import.meta.env.BASE_URL}${id}.png`

  return (
    <li className="project">
      <button
        className="project-card"
        type="button"
        aria-haspopup="dialog"
        onClick={() => dialog.current.showModal()}
      >
        <span className="project-card-face">
          <img src={image} width="630" height="500" loading="lazy" alt="" />
          <span className="project-card-label">
            {title}
            <span aria-hidden="true">↗</span>
          </span>
        </span>
      </button>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-description`}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current.close()
        }}
      >
        <div className="project-detail">
          <button className="project-close" type="button" onClick={() => dialog.current.close()}>
            <span className="visually-hidden">Close project</span>
            <span aria-hidden="true">×</span>
          </button>
          <img src={image} width="630" height="500" loading="lazy" alt="" />
          <div className="project-detail-copy">
            <p className="eyebrow">{genre}</p>
            <h3 id={`${id}-title`}>{title}</h3>
            <p id={`${id}-description`}>{description}</p>
            <a className="project-play" href={url} target="_blank" rel="noreferrer">
              Play on itch.io <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </dialog>
    </li>
  )
}

export default function Work() {
  return (
    <section className="work-section panel" id="work" aria-labelledby="work-title">
      <div className="panel-inner work-inner">
        <div className="work-copy">
          <h2 id="work-title">My work</h2>
          <p>Pick a game to see more.</p>
        </div>
        <ul className="project-stack" aria-label="Game projects">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </ul>
      </div>
    </section>
  )
}
