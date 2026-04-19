// Import Packages
import express from "express";
import { engine } from "express-handlebars";

// Deklarasi Variable
const app = express();
const PORT = 3000;

// Folder "public" untuk menyimpan file statis seperti CSS, JavaScript, dan gambar
app.use(express.static("public"));

// Mengatur Handlebars sebagai Template Engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// Data Tech Stack
const techStack = [
  {
    iconPrefix: "fa-brands",
    icon: "fa-html5",
    iconClass: "text-[#E34F26]",
    iconName: "HTML",
  },
  {
    iconPrefix: "fa-brands",
    icon: "fa-css3-alt",
    iconClass: "text-[#204CE6]",
    iconName: "CSS",
  },
  {
    iconPrefix: "fa-brands",
    icon: "fa-js",
    iconClass: "text-[#F0DB4F]",
    iconName: "JavaScript",
  },
  {
    iconPrefix: "fa-brands",
    icon: "fa-python",
    iconClass: "text-[#3D74A3]",
    iconName: "Python",
  },
  {
    iconPrefix: "",
    icon: "devicon-tailwindcss-original",
    iconClass: "colored",
    iconName: "Tailwind",
  },
  {
    iconPrefix: "fa-brands",
    icon: "fa-vuejs",
    iconClass: "text-green-500",
    iconName: "Vue.js",
  },
  {
    iconPrefix: "fa-brands",
    icon: "fa-bootstrap",
    iconClass: "text-purple-600",
    iconName: "Bootstrap",
  },
  {
    iconPrefix: "fa-brands",
    icon: "fa-node-js",
    iconClass: "text-green-600",
    iconName: "Node.js",
  },
  {
    iconPrefix: "",
    icon: "devicon-express-original",
    iconClass: "colored",
    iconName: "Express.js",
  },
  {
    iconPrefix: "",
    icon: "devicon-postgresql-plain",
    iconClass: "colored",
    iconName: "PostgreSQL",
  },
  {
    iconPrefix: "",
    icon: "devicon-mysql-original",
    iconClass: "colored",
    iconName: "MySQL",
  },
];

const experiences = [
  {
    start: "2023",
    end: "Present",
    role: "Fullstack Web Developer",
    company: "Freelance",
    description:
      "Building modern web applications with Node.js, Express.js, PostgreSQL, and Tailwind CSS.",
  },
  {
    start: "2022",
    end: "2023",
    role: "Frontend Developer Trainee",
    company: "DumbWays Indonesia",
    description:
      "Developed responsive user interfaces and improved frontend development skills through intensive project-based learning.",
  },
  {
    start: "2021",
    end: "2022",
    role: "Personal Project Developer",
    company: "Self-Employed",
    description:
      "Worked on personal and academic projects including CRUD systems, authentication, and dashboard pages.",
  },
  {
    start: "2020",
    end: "2021",
    role: "Web Design Learner",
    company: "Independent Study",
    description:
      "Learned the fundamentals of web design, layouting, and responsive development through hands-on practice.",
  },
];

const projects = [
  {
    projectImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    projectName: "Web Portofolio",
    projectDesc:
      "Website portfolio modern dengan tampilan clean dan responsive.",
    tags: ["Node.js", "Express", "Tailwind CSS"],
  },
  {
    projectImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    projectName: "Dashboard Admin",
    projectDesc:
      "Dashboard management data dengan statistik interaktif dan UI modern.",
    tags: ["React", "Tailwind CSS", "PostgreSQL"],
  },
  {
    projectImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    projectName: "E-Commerce Store",
    projectDesc:
      "Toko online lengkap dengan fitur cart, checkout, dan payment gateway.",
    tags: ["Vue.js", "Node.js", "MySQL"],
  },
  {
    projectImage:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
    projectName: "Landing Page Startup",
    projectDesc:
      "Landing page profesional untuk startup dengan desain minimalis.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    projectImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    projectName: "Task Management App",
    projectDesc:
      "Aplikasi manajemen tugas dengan fitur drag and drop serta realtime.",
    tags: ["React", "Firebase", "Tailwind CSS"],
  },
];

// Routes
app.get("/", (req, res) => {
  res.render("home", {
    title: "Portofolio | Muhammad Helmy",
    techStack: techStack,
    experiences: experiences,
    projects: projects,
  });
});

// Jalankan Server
app.listen(PORT, () => {
  console.log(`Server Running: http://localhost:${PORT}`);
});
