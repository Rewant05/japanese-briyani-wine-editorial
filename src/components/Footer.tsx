import { Link } from 'react-router-dom';
import { siteData } from '../config/siteData';

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h2>{siteData.name}</h2>
            <p>{siteData.tagline}</p>
            <div className="footer-info">
              <p>{siteData.editor}</p>
              <p>{siteData.address}</p>
              <p>{siteData.businessHours}</p>
            </div>
          </div>

          <div>
            <h3>Menu</h3>
            <ul>
              {siteData.navigation.map(link => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Legal & Social</h3>
            <ul>
              {siteData.footerLinks.map(link => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
            <a
              href={siteData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-instagram"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.</p>
          <p className="drinking-notice">
            {siteData.responsibleDrinkingNotice}
          </p>
        </div>
      </div>
    </footer>
  );
};
