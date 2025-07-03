export function IsLogin() {
  const token = localStorage.getItem("token");

  return token !== null && token.trim() !== "";
}
