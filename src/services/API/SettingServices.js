import { ALL_CONSTANT, ROLES_DATA } from 'src/constants/AppConstants';
import terminalQuery from 'src/utils/terminalQuery';
import APIService from '../apiService';
import AuthService from '../authService';
import handleCallback from './Callback';

const API = process.env.REACT_APP_REMOTE_URL;

const SettingServices = {
  getConfiguration(storeId, terminalId) {
    let query = '';
    if (storeId === ALL_CONSTANT.ALL) {
      query = ``;
    } else {
      query = `?storeId=${storeId}&terminalId=${terminalId}`;
    }
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/stores/view-configurations${query}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },
  postPrintMode(data, storeId, terminalId) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/stores/print-configuration?storeId=${storeId}&terminalId=${terminalId}`,
          method: 'POST',
          data: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        },
        handleCallback(resolve, reject)
      );
    });
  },
  postCustomerData(data) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/customer/add-customer`,
          method: 'POST',
          data: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        },
        handleCallback(resolve, reject)
      );
    });
  },
  updateCustomer(data) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/customer/edit-details`,
          method: 'PUT',
          data: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        },
        handleCallback(resolve, reject)
      );
    });
  },
  removeCustomer(customerId) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/customer/remove?customerId=${customerId}`,
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        },
        handleCallback(resolve, reject)
      );
    });
  },
  getCustomerData(storeId) {
    let query = '';
    if (storeId === ALL_CONSTANT.ALL) {
      query = ``;
    } else {
      query = `?storeId=${storeId}`;
    }
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/customer/view-allcustomers${query}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },
  postCustomCode(data) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/add-customcode`,
          method: 'POST',
          data: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        },
        handleCallback(resolve, reject)
      );
    });
  },
  editCustomCode(data) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/edit/custom-code`,
          method: 'PUT',
          data: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        },
        handleCallback(resolve, reject)
      );
    });
  },
  removeCustomCode(codeLabel, codeName, id, storeId) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/remove/custom-code?codeLabel=${codeLabel}&codeName=${codeName}&id=${id}&storeId=${storeId}`,
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        },
        handleCallback(resolve, reject)
      );
    });
  },

  postConfiguration(data) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/stores/configurations`,
          method: 'POST',
          data: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        },
        handleCallback(resolve, reject)
      );
    });
  },
  getCustomCodesData(storeId, terminalId) {
    let query = '';
    if (storeId === ALL_CONSTANT.ALL) {
      query = ``;
    } else {
      query = `?storeId=${storeId}&terminalId=${terminalId}`;
    }
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/stores/view-customCodes${query}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },

  updateGst(data) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/stores/update-GST`,
          method: 'PUT',
          data: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        },
        handleCallback(resolve, reject)
      );
    });
  },
  addTemplate(data) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/add-templates`,
          method: 'POST',
          data,
        },
        handleCallback(resolve, reject)
      );
    });
  },
  updateTemplate(data) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/edit-template`,
          method: 'PUT',
          data,
        },
        handleCallback(resolve, reject)
      );
    });
  },
  getAllTemplate({ storeId, type }) {
    const currentRole = AuthService.getCurrentRoleInLocal();
    const isStoreStaff = currentRole === ROLES_DATA.store_staff.role;

    let url = `${API}/api/v1/POS/merchant/view-allTemplates?storeId=${storeId}&type=${type}`;
    if (isStoreStaff) {
      url = `${API}/api/v1/POS/merchant/view-allTemplates?type=${type}`;
    }

    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: url,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },
  getNotificationConfiguration(storeId, terminalId) {
    let query = '';
    if (storeId === ALL_CONSTANT.ALL) {
      query = ``;
    } else {
      query = `?storeId=${storeId}&terminalId=${terminalId}`;
    }
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/stores/view-notifications${query}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },
  updateNotificationConfiguration(data) {
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/stores/notifications`,
          method: 'PUT',
          data: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' },
        },
        handleCallback(resolve, reject)
      );
    });
  },
};

export default SettingServices;
