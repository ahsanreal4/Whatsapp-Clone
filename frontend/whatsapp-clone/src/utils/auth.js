export const getAuthToken = () => {
  return "Bearer " + localStorage.getItem("token");
};

export const isAuth = () => {
  return typeof localStorage.getItem("token") === "string";
};

export const storeToken = (token) => {
  localStorage.setItem("token", token);
};
