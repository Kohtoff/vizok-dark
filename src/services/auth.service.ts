import { $login } from '@/api/interceptors';
import { login, logout } from '@/ducks/auth.ducks';
import store from '@/store/store';
import jwtDecode from 'jwt-decode';

type LoginPayload = {
  email: string;
  password: string;
};

type DecodedToken = {
    exp: bigint,
    iat: bigint,
    jti: string;
    token_type: 'access' | 'refresh',
    user_uid: string
}

const AuthService = {
  async login(payload: LoginPayload) {
    await $login.post('/user/authorization/', payload).then((res) => {
      const expiredAt = (jwtDecode(res.data.access) as DecodedToken).exp
      store.dispatch(login({...res.data, expiredAt}));
    });
  },

  async signup(payload: LoginPayload & {phone: string}) {
    await $login.post('/user/registration/', payload).then(res => {
      const expiredAt = (jwtDecode(res.data.access) as DecodedToken).exp
      store.dispatch(login({...res.data, expiredAt}));
    })
  },

  async logout() {
    store.dispatch(logout())
  }
};

export default AuthService;
