# Portfolio Website

A modern, interactive portfolio website built with React and Vite, featuring 3D animations, smooth transitions, and a custom cursor experience.

## 🚀 Features

- **3D Animations**: Interactive Spline scene for an immersive hero section
- **Custom Cursor**: Unique custom cursor interactions throughout the site
- **Smooth Animations**: Powered by Framer Motion and GSAP for fluid transitions
- **Project Showcase**: Interactive carousel displaying projects with Swiper.js
- **Contact Modal**: Integrated contact form modal
- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Gradient effects, glassmorphism, and dark theme

## 📦 Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Animation and scroll library
- **Spline** - 3D design and animation tool
- **Swiper** - Modern touch slider
- **React Icons** - Icon library

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-react.git
```

2. Navigate to the project directory:
```bash
cd portfolio-react
```

3. Install dependencies:
```bash
npm install
```

## 🏃 Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio-react/
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx      # About section with skills grid
│   │   ├── CustomCursor.jsx       # Custom cursor component
│   │   ├── Divider.jsx            # Section divider
│   │   ├── Footer.jsx             # Footer with social links
│   │   ├── header.jsx             # Navigation header
│   │   ├── HeroSection.jsx        # Hero with 3D Spline scene
│   │   ├── Modal.jsx              # Contact modal
│   │   ├── ProjectSection.jsx     # Project carousel
│   │   └── SkillsExperience.jsx   # Skills and experience
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # Entry point
│   ├── index.css                  # Global styles
│   └── assets/                    # Static assets
├── public/                        # Public assets
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Key Sections

### Hero Section
- Animated introduction text
- 3D interactive Spline scene
- Gradient background effects

### About Section
- Personal introduction
- Skills grid with icons
- Smooth scroll animations

### Skills & Experience
- Skills showcase
- Experience timeline
- Animated transitions

### Project Section
- Interactive carousel
- Project cards with technologies
- Navigation controls

### Footer
- Social media links
- Contact information
- Additional navigation

## ✨ Customization

### Update Spline Scene
Replace the Spline scene URL in `HeroSection.jsx`:
```jsx
<Spline scene="YOUR_SPLINE_SCENE_URL" />
```

### Modify Projects
Edit the `projects` array in `ProjectSection.jsx` to customize your projects.

### Theme Colors
Update colors in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      // Your custom colors
    }
  }
}
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configuration. Edit `tailwind.config.js` to customize the design system.

### Vite
Vite configuration can be modified in `vite.config.js` for build optimization.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Max Mendes**
- Portfolio: [Your Portfolio URL]
- Email: maxmendesnoah1991@gmail.com
- GitHub: [Max-Mendes91](https://github.com/Max-Mendes91)

## 🙏 Acknowledgments

- [Spline](https://spline.design/) for 3D design tools
- [React Icons](https://react-icons.github.io/react-icons/)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/gsap/)

---

Built using React and Vite
