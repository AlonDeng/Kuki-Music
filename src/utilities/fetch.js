import axios from 'taro-axios'
import { httpConfig } from './config';

const axiosInstance = axios.create({
  baseURL: `http://${httpConfig.SERVER_IP}:${httpConfig.SERVER_PORT}` || "http://43.128.3.218:4000",
  timeout: 10000,
});

export default axiosInstance; 