import { AppConstants } from 'src/constants/AppConstants';
import APIService from '../apiService';
import handleCallback from './Callback';

const API = process.env.REACT_APP_REMOTE_URL;

const LogoServices = {
  postLogoImage(data) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/stores/logo-upgrade`,
          method: 'PUT',
          data: data,
        },
        handleCallback(resolve, reject)
      );
    });
  },

  

  getLogoImage(storeId) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/stores/get-LogoImage?storeId=${storeId}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },

  deleteLogoImage(data) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/stores/remove-logo?id=${data}`,
          method: 'DELETE',
        },
        handleCallback(resolve, reject)
      );
    });
  },
};

export default LogoServices;
