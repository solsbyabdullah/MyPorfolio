# Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite. Perfect for showcasing your skills, projects, and professional experience.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Loading**: Built with Vite for optimal performance
- **Easy to Customize**: Simple structure for adding your personal information
- **SEO Friendly**: Optimized for search engines
- **Deployment Ready**: Easy to deploy to various hosting platforms

## 🛠️ Built With

- React 18
- Vite
- Vanilla CSS (no external dependencies)
- Modern JavaScript (ES6+)

## 📋 Sections

1. **Header/Navigation** - Smooth scrolling navigation
2. **Hero Section** - Eye-catching introduction
3. **About** - Personal information and statistics
4. **Skills** - Technical skills organized by category
5. **Projects** - Featured work with descriptions and links
6. **Contact** - Contact form and social links
7. **Footer** - Copyright and additional info

## 🚀 Quick Start

1. **Clone or download** this project
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. **Open** http://localhost:5173 in your browser

## ✏️ Customization Guide

### 1. Personal Information

Edit `src/App.jsx` and replace placeholder content:

- **Name**: Replace "Your Name" with your actual name
- **Title**: Change "Full Stack Developer" to your profession
- **About text**: Update the about section with your story
- **Contact details**: Add your real email, phone, and location

### 2. Skills Section

Update the skills in `src/App.jsx`:

```jsx
// Frontend skills
<span className="skill-item">Your Skill</span>

// Backend skills
<span className="skill-item">Your Technology</span>

// Tools & Others
<span className="skill-item">Your Tool</span>
```

### 3. Projects Section

Replace the example projects with your own:

```jsx
<div className="project-card">
  <div className="project-content">
    <h3>Your Project Name</h3>
    <p>Your project description...</p>
    <div className="project-tech">
      <span>Technology 1</span>
      <span>Technology 2</span>
    </div>
    <div className="project-links">
      <a href="your-demo-link" className="btn btn-small">Live Demo</a>
      <a href="your-github-link" className="btn btn-small btn-outline">GitHub</a>
    </div>
  </div>
</div>
```

### 4. Social Links

Update social media links in the contact section:

```jsx
<div className="social-links">
  <a href="your-linkedin-url" className="social-link">LinkedIn</a>
  <a href="your-github-url" className="social-link">GitHub</a>
  <a href="your-twitter-url" className="social-link">Twitter</a>
</div>
```

### 5. Colors and Styling

Customize colors in `src/App.css`:

```css
/* Primary color */
.logo h2 { color: #2563eb; }

/* Accent color */
.highlight { color: #fbbf24; }

/* Background gradients */
.hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
```

### 6. Adding Your Photo

1. Add your photo to `src/assets/`
2. Import and use it in the about section:

```jsx
import yourPhoto from './assets/your-photo.jpg'

// In the about section
<img src={yourPhoto} alt="Your Name" className="profile-photo" />
```

## 📱 Responsive Design

The portfolio is fully responsive and includes:

- Mobile-first design approach
- Flexible grid layouts
- Optimized typography for all screen sizes
- Touch-friendly navigation

## 🚀 Deployment

See `DEPLOYMENT.md` for detailed deployment instructions to:

- Netlify (Recommended)
- Vercel
- GitHub Pages
- Firebase Hosting

### Quick Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)
3. Your site is live!

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Ready to showcase your work?** Start customizing and make this portfolio truly yours! 🎨

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
