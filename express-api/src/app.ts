import express from "express";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";
import { auth } from "./lib/auth";
const app = express();

// Configure CORS middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Specify allowed HTTP methods
    //allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  }),
);

//app.use(express.json());

//app.options("*", cors());

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());

//app.all("/api/auth/:path*", toNodeHandler(auth));

app.get("/", (req, res) => {
  res.send("Hello FullStack Developer!");
});
export default app;
