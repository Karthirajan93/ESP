import React, { useState } from "react";
import SettingsForm from "./Configuration";
import { Base64Images } from "../constants/ImageConstants";
import AuthService from "../services/authService";
import Navigation from "../services/NavigationService";
import { BallTriangle } from "react-loader-spinner";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const handleLogout = () => {
    AuthService.logout();
    Navigation.navigateToLogin();
  };
  if (loading)
    return (
      <div className="w-screen h-screen flex flex-auto items-center justify-center">
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
    );
  return (
    <div className="w-screen flex">
      <div className="flex flex-col w-full">
        <div className="flex justify-center items-center  pl-3 py-1 mt-1">
          <img className="w-36 bg-blend-color" src={Base64Images.logo} />
        </div>
        <SettingsForm loading={loading} setLoading={setLoading} />
        <div className="w-full p-3">
          <button
            onClick={handleLogout}
            type="button"
            className="   text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
