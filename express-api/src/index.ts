import "dotenv/config";
import app from "./app";
import config from "./config";

app.listen(8080, () => {
  console.log("Express server listening on port 8080");
});
