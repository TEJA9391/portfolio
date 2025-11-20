import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';

const Layout = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
