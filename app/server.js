const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Homepage route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.post("/submit-lost", (req, res) => {
  console.log("Lost item submitted:");
  console.log(req.body);

  res.send(`
    <h1>Lost Item Report Submitted</h1>
    <p>Your lost item report was received successfully.</p>
    <a href="/submit-lost.html">Submit Another Report</a><br>
    <a href="/dashboard.html">Go to Dashboard</a>
  `);
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});