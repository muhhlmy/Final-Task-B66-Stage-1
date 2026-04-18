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

// Routes
app.get("/", (req, res) => {
  res.render("home", {
    title: "Portofolio | Muhammad Helmy",
    techStack: techStack,
  });
});

// Jalankan Server
app.listen(PORT, () => {
  console.log(`Server Running: http://localhost:${PORT}`);
});
