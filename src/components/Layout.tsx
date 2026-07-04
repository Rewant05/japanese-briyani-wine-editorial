import { Outlet, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { siteData } from '../config/siteData';
import { useEffect } from 'react';

export const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Helmet>
        <title>{siteData.name} | {siteData.tagline}</title>
        <meta name="description" content={siteData.description} />
      </Helmet>

      <Navigation />

      <main style={{ flexGrow: 1 }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
