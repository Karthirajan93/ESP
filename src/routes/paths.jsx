// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = "/sym";

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  login: "/login",
  forgot: "/forgot",
  register: "/register",
  resetPassword: "/resetPassword",
};
export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  home: path(ROOTS_DASHBOARD, "/home"),
  configuration: path(ROOTS_DASHBOARD, "/configuration"),
};
