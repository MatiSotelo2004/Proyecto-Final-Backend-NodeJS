import express from 'express'
import { login } from '../utils/token-generator.js'

const router = express.Router()

router.post('/login', login)

export default router
