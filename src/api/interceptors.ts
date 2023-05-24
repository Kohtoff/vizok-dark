import { useAuth } from '@/hooks/useDucks';
import AuthService from '@/modules/auth/services/auth.service';
import getUnixTimestamp from '@/utils/getUnixTimestamp';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getJsonContentType } from './api.helpers';

const BASE_URL = process.env.BASE_URL;

export const $login = axios.create({
  baseURL: BASE_URL,
  headers: {
    ...getJsonContentType(),
  },
});

export const $auth = axios.create({
  baseURL: BASE_URL,
  headers: getJsonContentType(),
});

$auth.interceptors.request.use(async (config) => {
  const auth = useAuth();
  const isExpired = auth.expiredAt && auth.expiredAt < getUnixTimestamp();

  if (!isExpired) {
    if (auth.access) {
      config.headers.Authorization = `Bearer ${auth.access}`;
    }
  } else {
    await axios
      .post(BASE_URL + '/user/jwt/refresh/', auth.refresh)
      .then(({ data }) => {
        AuthService.login(data);
        config.headers.Authorization = `Bearer ${data.access}`;
      })
      .catch(() => {
        AuthService.logout();
      });
  }

  return config;
});
