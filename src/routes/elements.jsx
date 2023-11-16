import { Suspense, lazy } from "react";
import { BallTriangle } from "react-loader-spinner";

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) =>
  (
    <Suspense
      fallback={
        <div className="w-screen flex flex-auto items-center justify-center ">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#1c4ed8"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

export const LoginPage = Loadable(lazy(() => import("../Pages/Auth/Login")));

export const Configuration = Loadable(
  lazy(() => import("../Pages/Configuration"))
);

export const Home = Loadable(lazy(() => import("../Pages/Home")));
