import ObjectToQueryParams from 'src/utils/ObjectToQueryParams';
import terminalQuery from 'src/utils/terminalQuery';
import APIService from '../apiService';
import handleCallback from './Callback';
import { Query } from './Query';
import { ALL_CONSTANT } from 'src/constants/AppConstants';

const API = process.env.REACT_APP_REMOTE_URL;

const BookingServices = {
  getSevenDaysData(storeId, terminalId) {
    let query = '';
    const terminalQueries = terminalQuery(terminalId);
    if (storeId === ALL_CONSTANT.ALL) {
      query += ``;
    } else {
      query += `?storeId=${storeId}${terminalQueries}`;
    }

    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/sale/last-oneweek${query}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },
  getThirtyDaysData(storeId, terminalId) {
    let query = '';
    const terminalQueries = terminalQuery(terminalId);
    if (storeId === ALL_CONSTANT.ALL) {
      query += ``;
    } else {
      query += `?storeId=${storeId}${terminalQueries}`;
    }
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/sale/last-onemonth${query}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },

  getOrderTypeData(options) {
    const { currentStore } = options;
    const query = Query(options);
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/order-type?storeId=${currentStore}${query}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },

  getTodayData(storeId, terminalId) {
    let query = '';
    const terminalQueries = terminalQuery(terminalId);
    if (storeId === ALL_CONSTANT.ALL) {
      query += ``;
    } else {
      query += `?storeId=${storeId}${terminalQueries}`;
    }
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/sale/today${query}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },

  getLastTenDaysTransaction(storeId, terminalId) {
    let query = '';
    const terminalQueries = terminalQuery(terminalId);
    if (storeId === ALL_CONSTANT.ALL) {
      query += ``;
    } else {
      query += `?storeId=${storeId}${terminalQueries}`;
    }
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/sale/recent-transactions${query}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },
  getTransactionByOrderId(props) {
    const { orderId, storeId, terminalId } = props;
    const query = terminalQuery(terminalId);
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/sale/order-details?storeId=${storeId}${query}&orderId=${orderId}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },
  getYesterdayData(storeId, terminalId) {
    let query = '';
    const terminalQueries = terminalQuery(terminalId);
    if (storeId === ALL_CONSTANT.ALL) {
      query += ``;
    } else {
      query += `?storeId=${storeId}${terminalQueries}`;
    }
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/sale/yesterday${query}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },
  getRAPaymentsData(options) {
    const { currentStore } = options;
    const query = Query(options);
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/payment-mode?storeId=${currentStore}${query}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },

  getDashboardPaymentStatusData(todayDate, storeId, terminalId) {
    let query = '';
    const terminalQueries = terminalQuery(terminalId);
    if (storeId === ALL_CONSTANT.ALL) {
      query += ``;
    } else {
      query += `&storeId=${storeId}${terminalQueries}`;
    }
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/payment-response?date=${todayDate}${query}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },

  getPaymentsReportOfRA(options) {
    const { currentStore, size, page } = options;
    let query = Query(options);
    if (currentStore === ALL_CONSTANT.ALL) {
      query = `?${query?.slice(1)}`;
    } else {
      query = `?storeId=${currentStore}${query}`;
    }
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/report/transaction-wise${query}&size=${size}&page=${page}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },
  getPaymentReportSummary(options) {
    const { currentStore } = options;
    let query = Query(options);
    if (currentStore === ALL_CONSTANT.ALL) {
      query = `?${query?.slice(1)}`;
    } else {
      query = `?storeId=${currentStore}${query}`;
    }
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/summary/transaction-wise${query}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },

  getOrdersReportOfRA(options) {
    const { currentStore, size, page } = options;
    let query = Query(options);
    if (currentStore === ALL_CONSTANT.ALL) {
      query = `?${query?.slice(1)}`;
    } else {
      query = `?storeId=${currentStore}${query}`;
    }
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/report/order-wise${query}&size=${size}&page=${page}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },
  getOrdersReportSummary(options) {
    const { currentStore, size, page } = options;
    let query = Query(options);
    if (currentStore === ALL_CONSTANT.ALL) {
      query = `?${query?.slice(1)}`;
    } else {
      query = `?storeId=${currentStore}${query}`;
    }
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/summary/order-wise${query}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },
  getProductsReportOfRA(options) {
    const { currentStore, size, page } = options;
    let query = Query(options);
    if (currentStore === ALL_CONSTANT.ALL) {
      query = `?${query?.slice(1)}`;
    } else {
      query = `?storeId=${currentStore}${query}`;
    }
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/report/product-wise${query}&size=${size}&page=${page}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },

  getBestSellerData(options) {
    const { currentStore } = options;
    let query = Query(options);
    if (currentStore === ALL_CONSTANT.ALL) {
      query = `?${query?.slice(1)}`;
    } else {
      query = `?storeId=${currentStore}${query}`;
    }
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/product/best-seller${query}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },
  fetchGstDetails(options) {
    return new Promise((resolve, reject) => {
      const query = ObjectToQueryParams(options);
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/report/GST${query}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },
  fetchGstSummaryReport(options) {
    return new Promise((resolve, reject) => {
      const query = ObjectToQueryParams(options);
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/summary/GST${query}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },
  getProfitAndLossReportOfRA(options) {
    const { currentStore, size, page } = options;
    const query = Query(options);
    return new Promise((resolve, reject) => {
      APIService.request(
        {
          url: `${API}/api/v1/POS/merchant/report/profit-loss?storeId=${currentStore}${query}&size=${size}&page=${page}`,
          method: 'GET',
        },
        handleCallback(resolve, reject)
      );
    });
  },
};

export default BookingServices;
