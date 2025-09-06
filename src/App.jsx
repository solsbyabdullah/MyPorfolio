import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header/Navigation */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <h2>Your Name</h2>
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
          <h1>Hello, I'm <span className="highlight">Your Name</span></h1>
          <h2>Full Stack Developer</h2>
          <p>Passionate about creating amazing web experiences and solving complex problems through code.</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
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
                I'm a passionate developer with experience in modern web technologies. 
                I love creating user-friendly applications and learning new technologies.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or enjoying outdoor activities.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Technologies</p>
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
              <h3>Frontend</h3>
              <div className="skill-items">
                <span className="skill-item">React</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">HTML5</span>
                <span className="skill-item">CSS3</span>
                <span className="skill-item">TypeScript</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-items">
                <span className="skill-item">Node.js</span>
                <span className="skill-item">Express</span>
                <span className="skill-item">MongoDB</span>
                <span className="skill-item">PostgreSQL</span>
                <span className="skill-item">REST APIs</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skill-items">
                <span className="skill-item">Git</span>
                <span className="skill-item">Docker</span>
                <span className="skill-item">AWS</span>
                <span className="skill-item">Figma</span>
                <span className="skill-item">Agile</span>
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
                <h3>E-Commerce Platform</h3>
                <p>A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small">Live Demo</a>
                  <a href="#" className="btn btn-small btn-outline">GitHub</a>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">Project Image</div>
              </div>
              <div className="project-content">
                <h3>Task Management App</h3>
                <p>A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Socket.io</span>
                  <span>Express</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small">Live Demo</a>
                  <a href="#" className="btn btn-small btn-outline">GitHub</a>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">Project Image</div>
              </div>
              <div className="project-content">
                <h3>Weather Dashboard</h3>
                <p>A responsive weather application that provides current weather data and forecasts with beautiful visualizations and location-based services.</p>
                <div className="project-tech">
                  <span>JavaScript</span>
                  <span>API Integration</span>
                  <span>CSS3</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small">Live Demo</a>
                  <a href="#" className="btn btn-small btn-outline">GitHub</a>
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
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to collaborate!</p>
              <div className="contact-details">
                <div className="contact-item">
                  <strong>Email:</strong>
                  <span>your.email@example.com</span>
                </div>
                <div className="contact-item">
                  <strong>Phone:</strong>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <strong>Location:</strong>
                  <span>Your City, Country</span>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
