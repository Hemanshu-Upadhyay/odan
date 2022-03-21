const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const auth = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ message: "No Token Provided" });
    }
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, secret);
    req.userData = decoded;
    next();
  } catch {
    res.status(401).json({ message: "UnAuthorized Reqest, Token Expired" });
  }
};

module.exports = auth;
