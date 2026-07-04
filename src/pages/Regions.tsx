import { Helmet } from 'react-helmet-async';
import { siteData } from '../config/siteData';
import { RegionCard } from '../components/RegionCard';
import { ResponsibleDrinkingNotice } from '../components/ResponsibleDrinkingNotice';

export const Regions = () => {
  return (
    <>
      <Helmet>
        <title>産地ガイド | {siteData.name}</title>
      </Helmet>

      <div className="page-header">
        <div className="container max-w-5xl">
          <h1>日本ワインの産地を歩く</h1>
          <p>日本のワインは、北から南まで、多様な気候と土壌の中で育てられています。旅行先としてワイナリーを訪ねるのも、ワインの大きな楽しみ方のひとつです。</p>
        </div>
      </div>

      <div className="page-content">
        <div className="container max-w-5xl stack-8">
          {siteData.regions.map(region => (
            <RegionCard key={region.id} {...region} />
          ))}
        </div>
      </div>

      <ResponsibleDrinkingNotice />
    </>
  );
};
