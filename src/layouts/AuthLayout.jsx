import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <div className="sm:ml-64">
        <div className="h-[calc(100vh-100px)] mt-14">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
