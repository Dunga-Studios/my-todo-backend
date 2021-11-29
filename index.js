const express = require("express");
const router = require("./server/routes");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(router());

app.listen(port, () => {
  console.log(
    `Server started on ${port}, open http://localhost:${port} to run your application`
  );
});
