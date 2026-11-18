import { generateToke } from '../utils/token-generator'

const defaultUser = {
  id: 1,
  email: 'admin@prueba.com',
  pasword: '123456789',
}

export async function login(req, res) {
  const { email, password } = req.body
}
