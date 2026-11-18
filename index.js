import express from "express";
import cors from "cors";
import "dotenv/config";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

//ENDPOINTS
app.get("/api", (req, res) => {
  res.send("Hola, bienvenido a nuestro API");
});
app.get("/auth", (req, res) => {
  res.send("ENDPOINT AUTH");
});

//NOT FOUND
app.use((req, res, next) => {
  res.status(404).send("Ruta no encontrada.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
