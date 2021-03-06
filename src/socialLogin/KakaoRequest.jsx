import { useLocation, useNavigate } from 'react-router-dom';
import { KAKAO_GET_TOKEN_URL } from './KakaoLogin';
import qs from 'qs';
import { useEffect } from 'react';
import { api } from 'config';

const { Kakao } = window;

Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);

function KakaoRequest(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const authCode = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  }).code;

  const getKakaoToken = async () => {
    const requestToken = qs.stringify({
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_KAKAO_REST_API_KEY,
      redirect_uri: process.env.REACT_APP_KAKAO_REDIRECT,
      code: authCode,
    });

    try {
      await fetch(KAKAO_GET_TOKEN_URL, {
        method: 'POST',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        body: requestToken,
      })
        .then(res => res.json())
        .then(data => {
          const { access_token } = data;

          fetch(api.login, {
            headers: {
              Authorization: access_token,
            },
          })
            .then(res => res.json())
            .then(data => {
              const { nickname, email, profile_image } = data.user_information;
              sessionStorage.setItem('access_token', data.token);
              sessionStorage.setItem(
                'userInfo',
                JSON.stringify({ nickname, profile_image, email })
              );
              navigate('/');
            });
        });
    } catch (err) {
      alert('다시 한번 시도해보세요');
      navigate(-1);
    }
  };

  useEffect(() => {
    getKakaoToken();
  }, []);

  return <></>;
}

export default KakaoRequest;
