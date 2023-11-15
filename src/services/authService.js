import get from "lodash/get";
import ObjectStorage from "../modules/ObjectStorage";

const AuthService = {
  _getAccessToken() {
    return get(ObjectStorage.getItem("accessToken", "token", ""));
  },
  _getRefreshToken() {
    return get(ObjectStorage.getItem("refreshToken", "token"));
  },
  goto404() {
    window.location.href = "*";
  },
};

export default AuthService;
