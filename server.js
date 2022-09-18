const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const JEST_WORKER_ID = process.env.JEST_WORKER_ID;

app.use(express.json());
app.use("/api/user", require("./routes/user.js"));

if (JEST_WORKER_ID === undefined) {
  app.listen(PORT, () => {
    console.log(`Server listening to port ${PORT}`);
  });
}
module.exports = app;
