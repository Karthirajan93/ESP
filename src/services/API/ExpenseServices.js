import APIService from '../apiService';
import handleCallback from './Callback';
const API = process.env.REACT_APP_REMOTE_URL;

const ExpenseServices = {
  getExpenseItemList(storeId) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/raw-materials?storeId=${storeId}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },

  getCategoryList(storeId) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/expense-category?storeId=${storeId}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },
};

export default ExpenseServices;
