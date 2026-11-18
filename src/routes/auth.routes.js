import express from "express"

const router = express.Router()

router.post("/login", (req, res) => {
  res.send("Este es el endpoint para loguearte")
})
