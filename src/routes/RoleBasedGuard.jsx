import { Fragment } from "react";
import PropTypes from "prop-types";
// assets
import AuthService from "../services/authService";

// ----------------------------------------------------------------------

RoleBasedGuard.propTypes = {
  children: PropTypes.node,
  hasContent: PropTypes.bool,
  roles: PropTypes.arrayOf(PropTypes.string),
};

export default function RoleBasedGuard({ roles, children }) {
  const role = AuthService.getCurrentRoleInLocal();
  const canAccess = roles.includes(role);
  if (!canAccess) {
    return (
      <div className="mt-5 text-center text-xl font-bold">
        You do not have permission to access this page
      </div>
    );
  }
  if (canAccess) {
    return <Fragment>{children}</Fragment>;
  }
}
