# Aradhana's Digital Canvas ✨

A modern, interactive portfolio website showcasing AI & Machine Learning expertise, built with cutting-edge web technologies and featuring a unique neobrutalism design aesthetic.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue) ![Vite](https://img.shields.io/badge/Vite-5.4-purple)

## 🌟 Features

- **Stunning Neobrutalism Design** - Bold colors, playful animations, and unique visual elements
- **Interactive 3D Elements** - Three.js powered 3D badge/lanyard component
- **Smooth Animations** - GSAP and Framer Motion for fluid transitions
- **Responsive Layout** - Mobile-first design that looks great on all devices
- **Contact Form** - EmailJS integration for seamless communication
- **Modern UI Components** - Built with shadcn/ui and Radix primitives
- **Marquee Scrolling Text** - Dynamic animated text sections
- **Bubble Menu Navigation** - Unique floating navigation experience

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18, TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS, CSS Modules |
| **UI Components** | shadcn/ui, Radix UI |
| **Animations** | GSAP, Framer Motion |
| **3D Graphics** | Three.js, React Three Fiber, Drei |
| **Forms** | React Hook Form, Zod |
| **Email** | EmailJS |
| **State Management** | TanStack Query |

## 📦 Project Structure

```
src/
├── components/
│   ├── BubbleMenu/      # Floating navigation menu
│   ├── Lanyard/         # 3D interactive badge
│   ├── stars/           # Decorative star SVG components
│   ├── ui/              # shadcn/ui components
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Projects showcase
│   ├── Skills.tsx       # Skills/expertise section
│   ├── Experience.tsx   # Work experience timeline
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer component
├── pages/               # Route pages
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── index.css            # Global styles & Tailwind config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- npm or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/The-Unindented/aradhana-s-digital-canvas.git
   cd aradhana-s-digital-canvas
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |

## 🎨 Customization

### Colors & Theme

The color palette is defined in `src/index.css` using CSS custom properties. Key colors include:

- **Primary**: Coral/Red accent
- **Secondary**: Soft pastels
- **Background**: Warm cream tones
- **Foreground**: Dark charcoal for text

### Fonts

The project uses Google Fonts:
- **Outfit** - Display/headings
- **Poppins** - Body text
- **Caveat** - Handwritten accents
- **Space Mono** - Monospace elements

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deploy Options

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect GitHub
- **GitHub Pages**: Use the `gh-pages` package

## 📧 EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
4. Copy your credentials to the `.env` file

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👩‍💻 Author

**Aradhana Singh**
- Website: [aiwitharadhana.in](https://aiwitharadhana.in)
- LinkedIn: [singharadhana](https://linkedin.com/in/singharadhana)
- GitHub: [The-Unindented](https://github.com/The-Unindented)

---

<p align="center">
  Built with 💖 and lots of ☕
</p>
