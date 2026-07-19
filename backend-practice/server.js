const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to add custom header
app.use((req, res, next) => {
  res.setHeader("X-App-Name", "QuotesAPI");
  res.setHeader("X-Request-Time", new Date().toLocaleString());
  next();
});

app.get("/quotes", (req, res) => {
  res.json({ message: "Here are your quotes!" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
