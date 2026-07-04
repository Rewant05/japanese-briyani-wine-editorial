import { siteData } from '../config/siteData';

export const ResponsibleDrinkingNotice = () => {
  return (
    <div className="responsible-notice">
      <div className="container">
        <p>{siteData.responsibleDrinkingNotice}</p>
        <p className="disclaimer">{siteData.disclaimer}</p>
      </div>
    </div>
  );
};
