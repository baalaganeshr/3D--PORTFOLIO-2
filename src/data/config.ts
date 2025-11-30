const config = {
  title: "Your Name | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work and let's build something amazing together!",
    short:
      "Discover the portfolio of a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Your Name",
  email: "your.email@example.com",
  site: "https://yourwebsite.com",

  // for github stars button
  githubUsername: "your-username",
  githubRepo: "your-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourusername/",
    instagram: "https://www.instagram.com/yourusername",
    facebook: "https://www.facebook.com/yourusername/",
    github: "https://github.com/yourusername",
  },
};
export { config };
