const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello from the Workshop API" });
});

app.get("/bye", (req, res) => {
  res.json({ message: "Goodbye from the Workshop API" });
});

const PORT = process.env.PORT || 3000;

// Only start the server when run directly (not when imported by tests)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;