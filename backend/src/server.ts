import express = require("express");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (_req, res) => {
  res.json({
    message: "TeamFlow API is running",
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "TeamFlow API is healthy",
  });
});

app.listen(PORT, () => {
  console.log(`TeamFlow API running on http://localhost:${PORT}`);
});