import express from "express"

const router = express.Router()

//GET ALL PRODUCTS
router.get("/products", (req, res) => {
  res.send("ENDPOINT GET ALL PRODUCTS")
})

//GET PRODUCT BY ID
router.get("/products/:id", (req, res) => {
  const { id } = req.params
  res.send(`ENDPOINT GET PRODUCT BY ID: ${id}`)
})

//CREATE A PRODUCT
router.post("/products/create", (req, res) => {
  res.send("Se ha creado un producto")
})

//DELETE A PRODUCT

router.delete("/product7:id", (req, res) => {
  const { id } = req.params
  res.send(`Se ha eliminado el producto con el ID:${id}`)
})

export default router
