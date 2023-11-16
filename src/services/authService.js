import get from "lodash/get";
import ObjectStorage from "../modules/ObjectStorage";
import { StorageConstants } from "../constants/StorageConstants";

const AuthService = {
  _getAccessToken() {
    return get(
      ObjectStorage.getItem(StorageConstants.ACCESS_TOKEN),
      "token",
      ""
    );
  },
  _getRefreshToken() {
    return get(ObjectStorage.getItem("refreshToken", "token"));
  },
  goto404() {
    window.location.href = "*";
  },
  logout() {
    ObjectStorage.removeItem(StorageConstants.ACCESS_TOKEN);
  },
};

export default AuthService;
