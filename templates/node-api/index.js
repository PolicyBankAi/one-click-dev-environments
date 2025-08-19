const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("🚀 Node.js API Ready!");
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
