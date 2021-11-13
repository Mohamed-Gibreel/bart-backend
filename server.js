const express = require("express");
const app = express();
const cors = require("cors");
const initRoutes = require("./routes/web");
let port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
initRoutes(app);

app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
