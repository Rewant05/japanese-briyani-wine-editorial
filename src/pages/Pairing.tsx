import { Helmet } from 'react-helmet-async';
import { siteData } from '../config/siteData';
import { PairingCard } from '../components/PairingCard';
import { ResponsibleDrinkingNotice } from '../components/ResponsibleDrinkingNotice';

export const Pairing = () => {
  return (
    <>
      <Helmet>
        <title>ペアリングガイド | {siteData.name}</title>
      </Helmet>

      <div className="page-header" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container max-w-4xl">
          <h1>食卓のペアリング</h1>
          <p>ワインと料理。お互いを高め合う組み合わせを見つけると、いつもの食卓がさらに豊かな時間になります。</p>
        </div>
      </div>

      <div className="page-content" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container max-w-4xl stack-8">
          {siteData.pairings.map(pairing => (
            <PairingCard key={pairing.id} {...pairing} />
          ))}

          <div className="pairing-footer-box">
            <h3>あなただけの組み合わせを</h3>
            <p>ここで紹介したのは、あくまでひとつのヒントです。あなたの好きな料理に、あなたの好きなワインを合わせるのが一番の正解。自由に、肩の力を抜いて楽しんでみてください。</p>
          </div>
        </div>
      </div>

      <ResponsibleDrinkingNotice />
    </>
  );
};
