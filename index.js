const app = require("./app");
const port = process.env.PORT || 8080
app.listen(port, () => {
  console.warn(`✅  Server running on port updated again: ${port}`);
});
