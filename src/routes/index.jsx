import { Navigate, useRoutes } from "react-router-dom";
// auth
import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";
// layouts
import AuthLayout from "../layouts/AuthLayout";
// config

import { LoginPage } from "./elements";
import { PATH_DASHBOARD } from "./paths";
import { Home } from "./elements";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        { element: <Navigate to={PATH_DASHBOARD.home} replace />, index: true },
        {
          path: "login",
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
      ],
    },
    {
      path: "/sym",
      element: (
        <AuthGuard>
          <AuthLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_DASHBOARD.home} replace />, index: true },
        {
          path: "home",
          element: <Home />,
        },
      ],
    },

    { path: "*", element: <Navigate to={PATH_DASHBOARD.home} replace /> },
  ]);
}
