function admin(req, res, next) {
    if (req.user.role != "admin")
      return res.status(403).send("Authorization failed");
    next();
  }
  module.exports = admin;