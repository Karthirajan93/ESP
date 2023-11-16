import PropTypes from "prop-types";
import Navigation from "../services/NavigationService";
import AuthService from "../services/authService";

// ----------------------------------------------------------------------

GuestGuard.propTypes = {
  children: PropTypes.node,
};

export default function GuestGuard({ children }) {
  const isAuthenticated = AuthService._getAccessToken();

  if (isAuthenticated) {
    return Navigation.navigateToHome();
  }

  return <>{children}</>;
}
