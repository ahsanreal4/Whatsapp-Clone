const User = require("../database/models/user");
var jwt = require("jsonwebtoken");
const { jwtSecret } = require("../data/secrets");

const login = async ({ email, password }) => {
  const user = await User.findOne({ email, password });

  if (!user) throw new Error("User not found");

  const token = await jwt.sign(
    {
      email,
      password,
    },
    jwtSecret,
    { expiresIn: 60 * 60 * 24 }
  );

  return token;
};

const signUp = async ({ email, password, name }) => {
  const user = new User({
    email,
    name,
    password,
  });

  await user.save();
};

module.exports = { login, signUp };
