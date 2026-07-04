import { Helmet } from 'react-helmet-async';
import { siteData } from '../config/siteData';
import { ResponsibleDrinkingNotice } from '../components/ResponsibleDrinkingNotice';

export const About = () => {
  return (
    <>
      <Helmet>
        <title>私たちについて | {siteData.name}</title>
      </Helmet>

      <div className="page-header">
        <div className="container max-w-3xl">
          <h1>私たちについて</h1>
          <p style={{ fontFamily: 'var(--font-serif)', letterSpacing: '0.1em' }}>{siteData.tagline}</p>
        </div>
      </div>

      <div className="page-content">
        <div className="container max-w-3xl">
          <div className="stack-8">
            <p>
              葡萄日和は、ワインを特別な日のためだけに置いておくのではなく、日々の食卓や旅の記憶と結びつけるための編集メディアです。
              専門用語を並べるよりも、香り、温度、料理、季節の空気から、一本のワインをやさしく読み解いていきます。
            </p>

            <div className="about-highlight">
              <h2>ワインのある、日々の風景</h2>
              <p>
                私たちはワインの専門家ではありません。ただ、おいしい食卓と、美しい風景、そしてそこにあるワインを愛する編集チームです。
                「敷居が高い」と思われがちなワインの世界の入り口を、少しだけ広く、あたたかいものにするための場所を作りたいと考えました。
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: 12, marginTop: 40 }}>当サイトの運営について</h3>
              <p>
                葡萄日和は、ワイン文化や食事との楽しみ方を紹介することを目的に運営されています。
                酒類の販売、配送、購入手続きなどのeコマース機能は一切持っておりません。
                気になったワインがございましたら、ぜひお近くの酒販店やワイナリーの公式サイトをご利用ください。
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: 12, marginTop: 40 }}>編集部概要</h3>
              <table className="about-table">
                <tbody>
                  <tr><th>名称</th><td>{siteData.editor}</td></tr>
                  <tr><th>所在地</th><td>{siteData.address}</td></tr>
                  <tr><th>営業時間</th><td>{siteData.businessHours}</td></tr>
                  <tr><th>連絡先</th><td>{siteData.email}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <ResponsibleDrinkingNotice />
    </>
  );
};
