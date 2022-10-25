import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from '../layouts/main-layout';
import AuthLayout from '../layouts/auth-layout';
import RegisterPage from '../pages/register-page';
import LoginPage from '../pages/login-page';
import HomePage from '../pages/home-page';
import ShopPage from '../pages/shop-page';
import AboutPage from '../pages/about-page';
import ErrorPage from '../pages/error-page';
import CartPage from '../pages/cart-page';
import HousePage from '../pages/house-page';
import OrderPage from '../pages/order-page';
import ProfilePage from '../pages/profile-page';

import RequireVisitor from './require-visitor';
import RequireAuth from './require-auth';

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="house/:houseId" element={<HousePage />} />
      <Route path="profile" element={<RequireAuth><ProfilePage /></RequireAuth>} />

      <Route path="auth/" element={<RequireVisitor><AuthLayout /></RequireVisitor>}>
        <Route path="login" element={<RequireVisitor><LoginPage /></RequireVisitor>} />
        <Route path="register" element={<RequireVisitor><RegisterPage /></RequireVisitor>} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default PageRoutes;
