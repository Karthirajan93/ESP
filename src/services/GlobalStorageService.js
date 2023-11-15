import isEmpty from "lodash/isEmpty";
import get from "lodash/get";
import set from "lodash/set";

const GlobalStorageService = {
  setItem(key, value) {
    if (isEmpty(key)) {
      throw new Error(
        "GlobalStorageService~Invalid Param Exception: key should not be empty"
      );
    }
    set(window, ["TRILATERATE", key], value);
  },
  getItem(key, defaultValue) {
    return get(window, ["TRILATERATE", key], defaultValue);
  },
  getItemArray(key, defaultValue) {
    return get(window, ["TRILATERATE", key], defaultValue);
  },
};
export default GlobalStorageService;
