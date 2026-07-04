interface PairingCardProps {
  food: string;
  wineStyle: string;
  flavorReason: string;
  servingTip: string;
  beginnerNote: string;
}

export const PairingCard = ({ food, wineStyle, flavorReason, servingTip, beginnerNote }: PairingCardProps) => {
  return (
    <div className="pairing-card">
      <div className="pairing-card-header">
        <h3>{food}</h3>
        <div className="pairing-wine-tag">
          <span className="pairing-wine-dot" />
          {wineStyle}
        </div>
      </div>

      <div className="pairing-card-body">
        <div>
          <label>なぜ合うのか：</label>
          <p>{flavorReason}</p>
        </div>
        <div>
          <label>おすすめの楽しみ方：</label>
          <p>{servingTip}</p>
        </div>
        <div className="pairing-beginner">
          <span>はじめての方へ</span>
          <p>{beginnerNote}</p>
        </div>
      </div>
    </div>
  );
};
