import express, { Application } from "express";
import cors from "cors";
import exampleRoutes from "./routes/example.routes";

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/example", exampleRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
