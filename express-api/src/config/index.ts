import dotenv from "dotenv";
import path from "path";

//dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const config = {
  port: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV || "development",
};
export default config;
