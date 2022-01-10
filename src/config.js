const BASE_URL = 'http://10.58.3.33:8000';
const tmpURL = 'http://10.58.2.164:8000';

export const api = {
  signup: BASE_URL + '/users/signup',
  login: BASE_URL + '/users/login',
  main: BASE_URL + '/products/main',
  products: tmpURL + '/products',
};
