const express = require("express");
const router = express.Router();

const quotes = [
  { id: 1, text: "Learning never stops." },
  { id: 2, text: "Backend is the brain of apps." }
];

// GET route
router.get("/", (req, res) => {
  res.json(quotes);
});

// POST route
router.post("/", (req, res) => {
  const newQuote = req.body;
  quotes.push(newQuote);
  res.json({ message: "Quote added!", quotes });
});

module.exports = router;
