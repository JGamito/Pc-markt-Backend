const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const categories = require("./src/routes/categories");

app.use(express.json());
app.use("/categoris", categorie);

app.listen(port, "", () => {
  console.log(`App running on port: ${port}`);
});
