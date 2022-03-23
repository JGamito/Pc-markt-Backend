const router = require('express').Router();
const authService = require('./../services/authService');
const { validateLogin, validateRegister } = require('../routes/validations/auth');
const { createToken } = require('../helpers/token');

router.post('/register', validateRegister, async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await authService.register({ email, password });
    const token = await createToken({ userId: user._id });
    return res.json({ token });
  } catch (err) {
    next(err);
  }
});

router.post('/login', validateLogin, async (req, res, next) => {
  const { email, password } = req.body;
  
  try {
    const user = await authService.login({ email, password });
    
    const token = await createToken({ userId: user._id });
    return res.json({ token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;