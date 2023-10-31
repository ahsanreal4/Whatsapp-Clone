const userService = require("../service/user");

const login = async (data) => {
  const { email, password } = data;

  if (!email) return { success: false, message: "Email not provided" };
  if (!password) return { success: false, message: "Password not provided" };

  try {
    const token = await userService.login(data);
    return { success: true, token };
  } catch (err) {
    console.error(err.message);
    return { success: false };
  }
};

const signup = async (data) => {
  const { email, password, name } = data;

  if (!email) return { success: false, message: "Email not provided" };
  if (!password) return { success: false, message: "Password not provided" };
  if (!name) return { success: false, message: "Name not provided" };

  try {
    await userService.signUp(data);
    return { success: true };
  } catch (err) {
    console.error(err.message);
    return { success: false };
  }
};

module.exports = { login, signup };
