import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from 'pages/Login/Login';
import Main from 'pages/Main/Main';
import Detail from 'pages/Detail/Detail';
import NewPost from 'pages/NewPost/NewPost';
import KakaoRequest from 'socialLogin/KakaoRequest';
import GNB from 'components/GNB/GNB';
import Layout from 'components/Layout/Layout';

function Router() {
  return (
    <BrowserRouter>
      <GNB />
      <Layout>
        <Routes>
          <Route path="/users/login" element={<Login />} />
          <Route path="/oauth" element={<KakaoRequest />} />
          <Route path="/" element={<Main />} />
          <Route path="/contents/:id" element={<Detail />} />
          <Route path="/contents/new" element={<NewPost />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
