module.exports = (err, req, res, next) => {
    const { message, code } = err;
    res.status(code).json({ message });
  }