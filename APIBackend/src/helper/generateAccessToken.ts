const jwt = require('jsonwebtoken')

const generateAccessToken = (user: any) =>
{
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '180s' })
  }

  export default generateAccessToken;