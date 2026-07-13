import { SmartImage } from './SmartImage';

interface RegionCardProps {
  name: string;
  climate: string;
  grapes: string;
  travelNote: string;
  tastingStyle: string;
  image?: string;
}

export const RegionCard = ({ name, climate, grapes, travelNote, tastingStyle, image }: RegionCardProps) => {
  return (
    <div className="region-card">
      {image && (
        <div className="region-card-image">
          <SmartImage
            src={image}
            alt={name}
            width={1024}
            height={1024}
            sizes="(min-width: 768px) 50vw, 100vw"
            fallbackSrc="/images/region_vineyard.png"
          />
          <div className="region-card-image-overlay">
            <h3>{name}</h3>
          </div>
        </div>
      )}

      <div className="region-card-info">
        {!image && <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-burgundy-light)', marginBottom: 12 }}>{name}</h3>}

        <div className="region-info-grid">
          <div>
            <span>気候</span>
            <p>{climate}</p>
          </div>
          <div>
            <span>主なブドウ品種</span>
            <p>{grapes}</p>
          </div>
        </div>

        <div className="region-travel-note">
          <span>旅のノート</span>
          <p>{travelNote}</p>
        </div>

        <div className="region-taste">
          <span>味わいの特徴</span>
          <p>{tastingStyle}</p>
        </div>
      </div>
    </div>
  );
};
