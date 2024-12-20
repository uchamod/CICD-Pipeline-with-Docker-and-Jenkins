const jwt = require("jsonwebtoken");
//set up middleware
const middelware = (request, response, next) => {
  const token = request.header("auth-token");

  if (!token) {
    return response.status(401).json({ msg: "No token, authorization denied" });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_CODE);
    console.log(decodedToken);
    request.user = decodedToken;
    next();
  } catch (err) {
    console.error("Token verification error:", err.message);

    // Check if the error is due to token expiration
    if (err.name === "jwt expired") {
      return response.status(401).json({ msg: "Token has expired" });
    }

    // For other errors, respond with a generic message
    return response.status(400).json({ msg: "Token is not valid" });
  }
};
module.exports = middelware;
