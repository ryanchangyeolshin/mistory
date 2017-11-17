module.exports = (req, res, next) => {
  const { username, password } = req.body
  if (typeof username !== 'string' || typeof password !== 'string') {
    res.status(400).json({
      error: 'Bad Request',
      message: 'Credentials must include non-empty "username" and "password" strings.'
    })
    const err = new Error('Credentials must include non-empty "username" and "password" strings.')
    next(err)
  }
  const credentials = {
    username: username.trim(),
    password: password.trim()
  }
  if (!credentials.username || !credentials.password) {
    res.status(400).json({
      error: 'Bad Request',
      message: 'Credentials must include non-empty "username" and "password" strings.'
    })
  }
  req.body = credentials
  next()
}
