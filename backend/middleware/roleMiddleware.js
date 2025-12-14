// middleware/roleMiddleware.js
module.exports = function (allowedRoles = []) {
  // allowedRoles: e.g. ["admin"], or ["doctor","admin"]
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: "Not authorized" });
    if (!Array.isArray(allowedRoles)) allowedRoles = [allowedRoles];
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};
