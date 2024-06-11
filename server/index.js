const app = require("./app");
const config = require("./utils/config");
const port = config.PORT || 3000;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
