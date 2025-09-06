import './App.css'

function App() {
  return (
    <div className="app">
      {/* Floating Particles Background */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      {/* Header/Navigation */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <h2>Abdullah Ashfaque</h2>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hello, I'm <span className="highlight">Abdullah Ashfaque</span></h1>
          <h2>Web Developer</h2>
          <p>Passionate about building responsive, user-friendly websites and optimizing performance with modern technologies.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="/webdev_resume.pdf" download className="btn btn-secondary">Download CV</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I am a Web Developer with hands-on experience in front-end and back-end development. 
                Skilled in HTML, CSS, JavaScript, and modern frameworks like React.
              </p>
              <p>
                I have practical experience from my internship at Askari Bank Head Office, where I developed 
                web-based tools and responsive websites to improve departmental workflow efficiency.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>2024</h3>
                <p>Internship at Askari Bank</p>
              </div>
              <div className="stat">
                <h3>2+</h3>
                <p>Major Projects</p>
              </div>
              <div className="stat">
                <h3>2025</h3>
                <p>Expected Graduation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <div className="skill-item">
                <span className="skill-name">HTML</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">CSS</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">JavaScript</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">React</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend & Database</h3>
              <div className="skill-item">
                <span className="skill-name">MongoDB</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '70%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">MySQL</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">PostgreSQL</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '65%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">MLflow</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <div className="skill-item">
                <span className="skill-name">GitHub</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">WordPress</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">DVC</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '55%'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">XAMPP</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">Project Image</div>
              </div>
              <div className="project-content">
                <h3>Askari Bank WordPress Website</h3>
                <p>Developed a responsive WordPress website for Askari Bank's head office using XAMPP as a local server environment. Customized themes and plugins, ensuring branding alignment, smooth navigation, and local testing before deployment.</p>
                <div className="project-tech">
                  <span>WordPress</span>
                  <span>XAMPP</span>
                  <span>PHP</span>
                  <span>MySQL</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small">Internal Tool</a>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">Project Image</div>
              </div>
              <div className="project-content">
                <h3>MLOps Web Platform</h3>
                <p>Built a React-based web interface to integrate MLflow and DVC for machine learning model tracking and version control. Used MongoDB Atlas for cloud data storage. Developed as part of the Machine Learning Operations (MLOps) course.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>MLflow</span>
                  <span>DVC</span>
                  <span>MongoDB Atlas</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small">University Project</a>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">Project Image</div>
              </div>
              <div className="project-content">
                <h3>Internal Operations Tool</h3>
                <p>Developed a local web-based tool for internal operations to improve departmental workflow efficiency. Designed and deployed a responsive website tailored to the needs of the GSD department at Askari Bank.</p>
                <div className="project-tech">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>Web Development</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small">Internal Tool</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <p>I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to collaborate!</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <h3>Email</h3>
                <p>abdullahhashfaque@gmail.com</p>
              </div>
              <div className="contact-item">
                <h3>Phone</h3>
                <p>0313-1731291</p>
              </div>
              <div className="contact-item">
                <h3>Location</h3>
                <p>House 9 Street 2A, H13, Islamabad</p>
              </div>
            </div>
            
            <div className="resume-links">
              <a href="/webdev_resume.pdf" download className="resume-link">Web Dev Resume</a>
              <a href="/Black Blue Modern Professional CV Resume Template (2).pdf" download className="resume-link">Professional CV</a>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Abdullah Ashfaque. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
