import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import './index.css';

const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Articles = lazy(() => import('./pages/Articles').then(module => ({ default: module.Articles })));
const Pairing = lazy(() => import('./pages/Pairing').then(module => ({ default: module.Pairing })));
const Regions = lazy(() => import('./pages/Regions').then(module => ({ default: module.Regions })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Privacy = lazy(() => import('./pages/Privacy').then(module => ({ default: module.Privacy })));
const Terms = lazy(() => import('./pages/Terms').then(module => ({ default: module.Terms })));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ minHeight: '100vh', background: '#121010' }} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="articles" element={<Articles />} />
            <Route path="pairing" element={<Pairing />} />
            <Route path="regions" element={<Regions />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
