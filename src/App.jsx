import { useState } from "react";
import profileImage from "../images/profile.png";
import resumeFile from "../images/Henry Ingraham Resume.pdf";

const experience = [
  {
    role: "Software Engineer I",
    company: "UKG",
    location: "Weston, FL",
    period: "Jan 2025 - Present",
    highlights: [
      "Led cloud cost optimization on Google Cloud compute, driving about 30% lower spend through rightsizing and decommissioning automation.",
      "Built infrastructure automation with Ansible, Terraform, and GitHub Actions to remove manual asset management and improve deployment speed.",
      "Created cross-team pipelines that identified underutilized servers and generated over $10K monthly savings."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "Dell Technologies",
    location: "Austin, TX",
    period: "May 2024 - Aug 2024",
    highlights: [
      "Designed a scalable model to automate security data retrieval across 16K+ virtual machines, cutting manual audit effort.",
      "Built ServiceNow notification workflows and integrated Jira automation to improve ownership routing and issue resolution speed.",
      "Developed a VM image from a Docker container to reduce environment setup from hours to under 30 minutes."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "UKG",
    location: "Weston, FL",
    period: "Jan 2024 - Apr 2024",
    highlights: [
      "Resolved automated and manual test issues using TeamCity and TestRails for more reliable regressions.",
      "Developed localization features in ASP.NET and C# to support international product expansion."
    ]
  }
];

const projects = [
  {
    name: "Myra - Personalized AI Assistant",
    stack: "Python, React, Node.js, Three.js, SQLite, OpenAI, ElevenLabs",
    description:
      "Built a personalized assistant that handles natural language prompts, executes system tasks, and responds in real time with voice support. Led 7 Agile sprints with a 5-person team and shipped 27+ OS-level features.",
    link: "https://github.com/henryingraham"
  },
  {
    name: "Stock Market Growth Forecasting",
    stack: "Python, Pandas, scikit-learn, XGBoost, Keras, Matplotlib",
    description:
      "Engineered an end-to-end forecasting pipeline with data cleaning, feature engineering, and model benchmarking to compare traditional ML and deep learning approaches using robust evaluation metrics.",
    link: "https://github.com/henryingraham"
  }
];

const skills = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "C++",
  "SQL",
  "React",
  "Node.js",
  "Express",
  "AWS",
  "Google Cloud",
  "Terraform",
  "Ansible",
  "GitHub Actions",
  "Postgres",
  "Firebase",
  "ServiceNow",
  "Jira"
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <header className="hero">
        <nav className="nav">
          <a className="brand" href="#top">
            Henry Ingraham
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation menu"
            aria-controls="site-navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`} id="site-navigation">
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
            <a href="#education" onClick={closeMenu}>
              Education
            </a>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-content">
            <p className="eyebrow">Software Engineer</p>
            <h1>
              Building <span className="text-pop-violet">scalable cloud systems</span> and{" "}
              <span className="text-pop-cyan">practical AI products</span>.
            </h1>
            <p className="intro">
              I am a Software Engineer at UKG focused on infrastructure
              automation, cost optimization, and developer productivity. I build
              reliable systems with modern cloud tooling and AI-assisted
              workflows.
            </p>

            <div className="socials" aria-label="Social links">
              <a
                className="social-link"
                href="https://linkedin.com/in/henryingraham"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 23.5h4V7.98h-4V23.5zM8.5 7.98h3.84v2.12h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.78 2.66 4.78 6.12v9.34h-4v-8.28c0-1.98-.04-4.53-2.76-4.53-2.76 0-3.18 2.16-3.18 4.39v8.42h-4V7.98z" />
                </svg>
              </a>
              <a
                className="social-link"
                href="https://github.com/henryingraham"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .5C5.65.5.5 5.8.5 12.33c0 5.22 3.44 9.64 8.2 11.2.6.12.82-.27.82-.6 0-.3-.01-1.09-.02-2.14-3.34.75-4.04-1.66-4.04-1.66-.54-1.42-1.33-1.8-1.33-1.8-1.09-.77.08-.76.08-.76 1.2.09 1.84 1.27 1.84 1.27 1.07 1.88 2.8 1.34 3.48 1.03.11-.8.42-1.34.76-1.65-2.66-.31-5.46-1.37-5.46-6.1 0-1.35.46-2.46 1.23-3.33-.12-.31-.53-1.58.12-3.29 0 0 1.01-.33 3.3 1.27.96-.27 1.99-.41 3.01-.41 1.02 0 2.05.14 3.01.41 2.29-1.6 3.3-1.27 3.3-1.27.65 1.71.24 2.98.12 3.29.77.87 1.23 1.98 1.23 3.33 0 4.75-2.8 5.78-5.47 6.09.43.38.81 1.13.81 2.28 0 1.65-.02 2.98-.02 3.38 0 .33.22.73.83.6 4.76-1.56 8.2-5.98 8.2-11.2C23.5 5.8 18.35.5 12 .5z" />
                </svg>
              </a>
              <a
                className="social-link"
                href="mailto:hingraham7@gmail.com"
                aria-label="Email"
                title="Email"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Get in touch
              </a>
              <a
                className="btn btn-secondary"
                href={resumeFile}
                target="_blank"
                rel="noreferrer"
              >
                View resume
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-visual-bg" />
            <div className="photo-frame">
              <img className="hero-photo" src={profileImage} alt="" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="experience" className="section">
          <h2>
            <span className="text-pop-cyan">Experience</span>
          </h2>
          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`} className="card">
                <div className="card-header">
                  <h3>
                    {item.role} - {item.company}
                  </h3>
                  <p>
                    {item.location} | {item.period}
                  </p>
                </div>
                <ul>
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2>
            Selected <span className="text-pop-violet">Projects</span>
          </h2>
          <div className="grid">
            {projects.map((project) => (
              <article className="card project-card" key={project.name}>
                <h3>{project.name}</h3>
                <p className="stack">{project.stack}</p>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View code
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <h2>
            <span className="text-pop-gold">Education</span>
          </h2>
          <div className="grid">
            <article className="card">
              <h3>University of Texas at Austin</h3>
              <p>Master of Science in Artificial Intelligence</p>
              <p>Expected Graduation: May 2027</p>
            </article>
            <article className="card">
              <h3>University of Florida</h3>
              <p>B.S. in Computer Science</p>
              <p>June 2021 - May 2025</p>
            </article>
          </div>
        </section>

        <section className="section">
          <h2>
            Core <span className="text-pop-cyan">Skills</span>
          </h2>
          <div className="tags">
            {skills.map((skill) => (
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <h2>Let us build something impactful.</h2>
        <p>
          <a href="mailto:hingraham7@gmail.com">hingraham7@gmail.com</a> |{" "}
          <a href="tel:+19549528234">(954) 952-8234</a>
        </p>
        <p>
          <a href="https://linkedin.com/in/henryingraham" target="_blank" rel="noreferrer">
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="https://github.com/henryingraham" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
