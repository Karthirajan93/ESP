import APIService from '../apiService';
import handleCallback from './Callback';
const API = process.env.REACT_APP_REMOTE_URL;

const StoreServices = {
  getRemainingDaysForExpiry(data) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/stores/trial-expiry`,
          method: 'GET',
          data,
        },
        handleCallback(resolve, reject)
      );
    });
  },
};

export default StoreServices;
