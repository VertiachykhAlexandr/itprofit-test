const express = require("express");
const cors = require("cors");
const { validateRequest } = require("./validateRequest");

const app = express();

const port = 9090;
app.use(express.json());
app.use(cors());

app.post("/api/registration", async (req, res) => {
  const msg = validateRequest(req.body);
  res.statusCode = 200;
  res.send(msg);
});

app.get("/api/ping", (req, res) => {
  res.statusCode = 200;
  res.send({
    status: "success",
    message: "Server is ready",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
