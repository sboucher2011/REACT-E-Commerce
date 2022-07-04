import jwt from "jsonwebtoken";

const generateToken = (token) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

export default generateToken;
