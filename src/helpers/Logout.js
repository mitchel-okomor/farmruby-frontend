//import history from "../utility/history";

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  console.log("logged out successfully");
  window.location.reload();
};

export default logout;
