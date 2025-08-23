enum AuthTabs {
  LOGIN = "login",
  REGISTER = "register",
}

const tabOptions = [
  { value: AuthTabs.LOGIN, label: "Login" },
  { value: AuthTabs.REGISTER, label: "Register" },
];

export { AuthTabs, tabOptions };
