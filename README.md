# Tendai's Portfolio Website

A modern, responsive portfolio website for a Big Data Analyst transitioning to Data Engineering.

##  Live Demo

Visit the live site: [https://10ndai.github.io](https://10ndai.github.io)

##  Built With

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **GitHub Pages** - Static site hosting

##  Features

- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Subtle fade-in effects and transitions
- **Interactive Skills** - Categorized skills with animated progress bars
- **Project Showcase** - Featured projects with descriptions and links
- **Contact Form** - Functional contact form with validation
- **Professional Timeline** - Work experience and education history

##  Sections

1. **Hero** - Introduction with call-to-action
2. **About** - Personal bio and key highlights
3. **Skills** - Technical skills organized by category
4. **Projects** - Portfolio of data engineering projects
5. **Resume** - Professional timeline
6. **Contact** - Contact form and social links

##  Deployment to GitHub Pages

This site is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Fork or clone this repository**
2. **Update the repository name** to `yourusername.github.io` (replace `yourusername` with your GitHub username)
3. **Update the `next.config.mjs`** file:
   \`\`\`javascript
   basePath: process.env.NODE_ENV === 'production' ? '/yourusername.github.io' : '',
   assetPrefix: process.env.NODE_ENV === 'production' ? '/yourusername.github.io/' : '',
   \`\`\`
4. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
5. **Push to main branch** - The GitHub Action will automatically build and deploy

### Manual Deployment:

If you prefer manual deployment:

\`\`\`bash
# Install dependencies
npm install

# Build the static site
npm run build

# The static files will be in the 'out' directory
# Upload the contents of 'out' to your GitHub Pages repository
\`\`\`

##  Local Development

\`\`\`bash
# Clone the repository
git clone https://github.com/10ndai/10ndai.github.io.git

# Navigate to the project directory
cd tendai.github.io

# Install dependencies
npm install

# Start the development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

##  Customization

### Personal Information
- Update personal details in each component
- Replace the profile image in the About section
- Update social media links in the Contact section

### Projects
- Modify the projects array in `components/projects.tsx`
- Add your own project images and descriptions
- Update GitHub and live demo links

### Skills
- Update the skills array in `components/skills.tsx`
- Adjust skill levels and categories as needed

### Styling
- Colors are defined in `app/globals.css`
- The design uses a green color palette that can be customized

##  License

This project is open source and available under the [MIT License](LICENSE).

##  Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

Tendai - [LinkedIn](https://linkedin.com/in/tendai-d-512505257)

Project Link: [https://github.com/10ndai/10ndai.github.io](https://github.com/yourusername/10ndai.github.io)
