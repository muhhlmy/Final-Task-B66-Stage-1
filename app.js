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

// Routes
app.get("/", (req, res) => {
  res.render("home", {
    title: "Portofolio | Muhammad Helmy",
  });
});

// Jalankan Server
app.listen(PORT, () => {
  console.log(`Server Running: http://localhost:${PORT}`);
});
