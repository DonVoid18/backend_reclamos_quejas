const app = require("./app");
require("dotenv").config();
const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`El servidor está corriendo en el ${port}`);
});
