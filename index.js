import express from "express"
import cors from "cors"
import "dotenv/config"
import bodyParser from "body-parser"
import jwt from "jsonwebtoken"
import productsRouter from "./src/routes/products.routes.js"

const PORT = process.env.PORT || 3000
const app = express()
app.use(cors())
app.use(bodyParser.json())

//ENDPOINTS
app.use("/api", productsRouter)
app.get("/auth", (req, res) => {
  res.send("ENDPOINT AUTH")
})

//NOT FOUND
app.use((req, res, next) => {
  res.status(404).send("Ruta no encontrada.")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
