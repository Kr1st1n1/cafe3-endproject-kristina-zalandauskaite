import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from '../../layouts/main-layout';
import AuthLayout from '../../layouts/auth-layout';
import RegisterPage from '../register-page';
import LoginPage from '../login-page';
import HomePage from '../home-page';
import ShopPage from '../shop-page';
import AboutPage from '../about-page';
import ErrorPage from '../error-page';
import CartPage from '../cart-page';
import HousePage from '../house-page';
import OrderPage from '../order-page';

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="house/:houseId" element={<HousePage />} />

      <Route path="auth/" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default PageRoutes;
