const BASE_URL = 'http://10.58.3.33:8000';
const tmpURL = 'http://10.58.7.136:8000';

export const api = {
  login: tmpURL + '/users/login',
  main: BASE_URL + '/products/main',
  products: tmpURL + '/products',
};
