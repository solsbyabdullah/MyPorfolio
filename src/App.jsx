import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // Prevent body scroll when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  // Handle section detection for active nav links
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = 'unset'
  }

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
          
          {/* Mobile Menu Toggle */}
          <div 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={handleNavClick}
            >Home</a></li>
            <li><a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={handleNavClick}
            >About</a></li>
            <li><a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={handleNavClick}
            >Skills</a></li>
            <li><a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={handleNavClick}
            >Projects</a></li>
            <li><a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={handleNavClick}
            >Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Hello, I'm <span className="highlight">Abdullah Ashfaque</span></h1>
          <h2>Full-Stack Developer & AI/ML Enthusiast</h2>
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
                I am a Full-Stack Developer and AI/ML enthusiast with expertise spanning web development, 
                data analytics, blockchain technology, and machine learning. Proficient in modern frameworks 
                like React, Unity 3D, and MLOps tools including MLflow and DVC.
              </p>
              <p>
                My experience ranges from developing innovative blockchain-based platforms and predictive 
                analytics systems to creating responsive web applications and internal business tools. 
                I gained practical industry experience during my internship at Askari Bank Head Office, 
                where I developed web-based solutions that improved departmental workflow efficiency.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>2024</h3>
                <p>Internship at Askari Bank</p>
              </div>
              <div className="stat">
                <h3>8+</h3>
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
                <h3>CarX - Car Advertising Platform</h3>
                <p>My Final Year Project featuring an innovative car advertising platform with 3D ad preview using Unity 3D. Integrated blockchain technology for smart contracts, implemented hate speech detection, and utilized various AI algorithms for enhanced user experience.</p>
                <div className="project-tech">
                  <span>Unity 3D</span>
                  <span>Blockchain</span>
                  <span>AI/ML</span>
                  <span>Smart Contracts</span>
                  <span>NLP</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small">Final Year Project</a>
                  <a href="#" className="btn btn-small">GitHub</a>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">Project Image</div>
              </div>
              <div className="project-content">
                <h3>Hospital Patient Wait Time Reduction</h3>
                <p>Analyzed hospital patient flow data to identify bottlenecks and implemented a predictive model that reduced average wait times by 35%, improving patient satisfaction and operational efficiency through data-driven insights.</p>
                <div className="project-tech">
                  <span>Python</span>
                  <span>Data Analytics</span>
                  <span>Predictive Modeling</span>
                  <span>Machine Learning</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small">Healthcare Analytics</a>
                  <a href="#" className="btn btn-small">GitHub</a>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">Project Image</div>
              </div>
              <div className="project-content">
                <h3>React Data Analytics Dashboard</h3>
                <p>Developed a comprehensive data analytics dashboard using React, providing interactive visualizations and real-time data insights for business intelligence and decision-making processes.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>Data Visualization</span>
                  <span>Charts.js</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small">Dashboard</a>
                  <a href="#" className="btn btn-small">GitHub</a>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">Project Image</div>
              </div>
              <div className="project-content">
                <h3>Timetable Scheduling System</h3>
                <p>Built an intelligent timetable scheduling system that optimizes class schedules, resource allocation, and conflict resolution using advanced algorithms to improve academic scheduling efficiency.</p>
                <div className="project-tech">
                  <span>Algorithm Design</span>
                  <span>Optimization</span>
                  <span>Scheduling</span>
                  <span>Database</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small">Scheduling System</a>
                  <a href="#" className="btn btn-small">GitHub</a>
                </div>
              </div>
            </div>
            
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
                  <a href="#" className="btn btn-small">Live Demo</a>
                  <a href="#" className="btn btn-small">GitHub</a>
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
                  <a href="#" className="btn btn-small">GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">Project Image</div>
              </div>
              <div className="project-content">
                <h3>Personal Portfolio Website</h3>
                <p>Modern, responsive portfolio website built with React and Vite. Features smooth animations, glass morphism design, mobile-first approach, and optimized performance. Showcases projects, skills, and professional experience with an elegant dark theme.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Vite</span>
                  <span>CSS3</span>
                  <span>JavaScript ES6+</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn btn-small">Live Demo</a>
                  <a href="#" className="btn btn-small">GitHub</a>
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
