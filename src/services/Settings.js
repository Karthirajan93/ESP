import handleCallback from "./API/Callback";
import APIService from "./apiService";
// eslint-disable-next-line no-undef

const API = "http://esp32.local";
const SETTINGS_API = {
  sendSettings(options) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/saveSettings`,
          method: "POST",
          data: JSON.stringify(options),
        },
        handleCallback(resolve, reject)
      );
    });
  },
  getSettings() {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/getSettings`,
          method: "GET",
        },
        handleCallback(resolve, reject)
      );
    });
  },
};
export default SETTINGS_API;
