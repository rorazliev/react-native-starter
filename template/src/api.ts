import axios from 'axios';
import { API_TIMEOUT, BASE_URL } from '@app/constants';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
});
