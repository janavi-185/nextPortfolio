import { Palette, Database, Globe, Code } from 'lucide-react'

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

const skills = [
    { name: "JavaScript", level: 85, icon: Code },
    { name: "React", level: 80, icon: Code },
    { name: "HTML/CSS", level: 90, icon: Palette },
    { name: "Node.js", level: 75, icon: Database },
    { name: "Python", level: 70, icon: Code },
    { name: "Web Design", level: 85, icon: Globe },
    { name: "Tailwind CSS", level: 88, icon: Palette },
    { name: "Next.js", level: 82, icon: Code },
  ]

  const certifications = [
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      year: "2023",
      icon: Globe,
      description: "Complete full-stack web development course covering HTML, CSS, JavaScript, React, and Node.js"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      year: "2023",
      icon: Code,
      description: "Comprehensive course on JavaScript fundamentals, ES6, and algorithmic thinking"
    },
    {
      title: "React Development Certification",
      issuer: "Coursera",
      year: "2024",
      icon: Code,
      description: "Advanced React concepts including hooks, context, and modern React patterns"
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Google",
      year: "2024",
      icon: Palette,
      description: "User experience design principles, prototyping, and design thinking methodology"
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      year: "2023",
      icon: Palette,
      description: "Modern CSS techniques, Flexbox, Grid, and mobile-first design principles"
    },
    {
      title: "Git and GitHub Mastery",
      issuer: "Udemy",
      year: "2023",
      icon: Code,
      description: "Version control, collaboration workflows, and advanced Git techniques"
    },
  ]

  const interests = [
    "Web Development",
    "UI/UX Design",
    "Machine Learning",
    "Mobile App Development",
    "Open Source Contributing",
    "Tech Blogging",
    "Photography",
    "Digital Art"
  ]
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution with user authentication, product management, shopping cart functionality, payment integration using Stripe, and admin dashboard for inventory management.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
      featured: true,
      status: "Completed"
    },
    {
      title: "Task Management Dashboard",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, file attachments, and progress tracking.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion", "React DnD"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend",
      featured: true,
      status: "Completed"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "An interactive weather dashboard displaying current conditions, 7-day forecasts, weather maps, historical data analysis, and location-based weather alerts.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3", "Local Storage"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend",
      featured: false,
      status: "Completed"
    },
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website showcasing projects, skills, and experience with smooth animations, dark mode support, and contact form integration.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP", "EmailJS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend",
      featured: false,
      status: "Completed"
    },
    {
      title: "Blog Content Management System",
      description: "A modern blog platform with rich text editor, user authentication, comment system, social sharing, SEO optimization, and analytics dashboard.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "TinyMCE"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
      featured: true,
      status: "In Progress"
    },
    {
      title: "Recipe Discovery App",
      description: "A recipe finder application with advanced search filters, meal planning, nutritional information, shopping list generation, and user recipe collections.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Spoonacular API", "Local Storage", "Bootstrap", "React Router"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend",
      featured: false,
      status: "Completed"
    },
    {
      title: "Real-time Chat Application",
      description: "A modern chat application with real-time messaging, file sharing, group chats, emoji support, message encryption, and user presence indicators.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
      featured: false,
      status: "In Progress"
    },
    {
      title: "Expense Tracker Mobile App",
      description: "A mobile-first expense tracking application with budget management, category-wise spending analysis, receipt scanning, and financial goal setting.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["React Native", "Firebase", "Chart.js", "AsyncStorage"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile",
      featured: false,
      status: "Completed"
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course management, video streaming, quiz system, progress tracking, and student-teacher interaction features.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
      featured: true,
      status: "In Progress"
    }
  ]


  const categories = ["All", "Full Stack", "Frontend", "Mobile"]

export { navItems, skills, certifications, interests , projects , categories }