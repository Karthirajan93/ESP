import { AppConstants } from 'src/constants/AppConstants';
import APIService from '../apiService';
import handleCallback from './Callback';
const API = process.env.REACT_APP_REMOTE_URL;

const BannerServices = {
  postBannerImage(data) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/stores/bannerImage`,
          method: 'POST',
          data: data,
        },
        handleCallback(resolve, reject)
      );
    });
  },
  getBannerImages(data) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/stores/get-bannerImage?storeId=${data}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },

  deleteBannerImage(id, storeId) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/stores/remove-bannerImage?id=${id}&storeId=${storeId}`,
          method: 'DELETE',
        },
        handleCallback(resolve, reject)
      );
    });
  },
};

export default BannerServices;
