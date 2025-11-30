# 🚀 3D Portfolio Template

A stunning portfolio template featuring jaw-dropping 3D animations, smooth interactions, and modern design. Perfect for developers, designers, and creative professionals who want to showcase their work in style.

## ✨ Features

- **Interactive 3D Elements**: Custom-made 3D keyboard using Spline with animated interactions
- **Smooth Animations**: Powered by GSAP and Framer Motion for buttery-smooth scroll and hover effects
- **Space Theme**: Particle effects on dark background creating an immersive cosmic experience
- **Fully Responsive**: Looks great on all devices - desktop, tablet, and mobile
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Easy Customization**: Simple configuration file to add your own information

## 🛠️ Tech Stack

- **Framework**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI, Aceternity UI
- **Animations**: GSAP, Framer Motion, Spline Runtime
- **Backend**: Socket.io for real-time features
- **Forms**: React Hook Form with Zod validation

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/baalaganeshr/3D--PORTFOLIO-2.git
    cd 3D--PORTFOLIO-2
    ```

2. Install dependencies:

    ```bash
    pnpm install
    # or
    npm install
    ```

3. Customize your portfolio by editing `src/data/config.ts`:

    ```typescript
    const config = {
      title: "Your Name | Full-Stack Developer",
      author: "Your Name",
      email: "your.email@example.com",
      site: "https://yourwebsite.com",
      githubUsername: "your-username",
      // ... update with your information
    }
    ```

4. Update your projects in `src/data/projects.tsx`

5. Run the development server:

    ```bash
    pnpm dev
    # or
    npm run dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📝 Customization Guide

### Update Personal Information

Edit `src/data/config.ts` to add your:
- Name and title
- Email and website
- Social media links
- GitHub username

### Add Your Projects

Edit `src/data/projects.tsx` to showcase your work:
- Add project details
- Include screenshots
- List technologies used
- Add project descriptions

### Customize Styling

- Colors and theme: `tailwind.config.ts`
- Global styles: `src/app/globals.css`
- Component styles: Individual component files

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Deploy to Other Platforms

Build the production version:

```bash
pnpm build
pnpm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

Original design by [Naresh Khatri](https://github.com/Naresh-Khatri)

## 💬 Support

If you have any questions or need help, feel free to open an issue!
