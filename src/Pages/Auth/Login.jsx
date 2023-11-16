import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StorageConstants } from "../../constants/StorageConstants";
import ObjectStorage from "../../modules/ObjectStorage";
import toast from "react-hot-toast";
import { PATH_DASHBOARD } from "../../routes/paths";
import { Base64Images } from "../../constants/ImageConstants";

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  // });

  // const {
  //   reset,
  //   handleSubmit,
  //   setError,
  //   formState: { errors, isSubmitting },
  // } = methods;
  const handleTokenSetup = async () => {
    console.log("reached", data);
    if (data.password === "admin" && data.username === "admin") {
      ObjectStorage.setItem(StorageConstants.ACCESS_TOKEN, {
        token: "sample",
      });
      navigate(PATH_DASHBOARD.home, { replace: true });
    } else {
      toast.error("Incorrect username or password");
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-[#F3F4F6]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img className="h-14" src={Base64Images.logo} />
        </a>
        <div className="w-full bg-white rounded-lg shadow mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-6 sm:p-8">
            <div className="flex justify-between">
              <h1 className="font-bold leading-tight tracking-tight text-gray-900 text-2xl">
                Sign in to your account
              </h1>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="w-full">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={data["username"]}
                  onChange={handleChange}
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full p-2.5 focus:outline-primary-100"
                  required=""
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={data["password"]}
                  onChange={handleChange}
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-100 focus:border-primary-100 block w-full p-2.5 focus:outline-primary-100"
                  required=""
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handleTokenSetup}
              className="w-full !mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-5 py-2.5 text-center"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
