const HOST_URL = 'https://kauth.kakao.com';
const CLIENT_ID = process.env.REACT_APP_KAKAO_REST_API_KEY;
const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT;

export const KAKAO_GET_AUTH_URL = `${HOST_URL}/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const KAKAO_GET_TOKEN_URL = `${HOST_URL}/oauth/token`;
