import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { WineEditorialHero } from '../components/WineEditorialHero';
import { ArticleCard } from '../components/ArticleCard';
import { PairingCard } from '../components/PairingCard';
import { RegionCard } from '../components/RegionCard';
import { ResponsibleDrinkingNotice } from '../components/ResponsibleDrinkingNotice';
import { SmartImage } from '../components/SmartImage';
import { siteData } from '../config/siteData';

export const Home = () => {
  const featuredArticle = siteData.articles[0];
  const recentArticles = siteData.articles.slice(1, 4);
  const featuredPairing = siteData.pairings[0];
  const featuredRegion = siteData.regions[0];

  return (
    <>
      <Helmet>
        <title>{siteData.name} | ホーム</title>
      </Helmet>

      <WineEditorialHero />

      {/* Featured Article */}
      <section className="section-py">
        <div className="container">
          <div className="section-title-bar">
            <h2>注目の記事</h2>
            <Link to="/articles">すべての記事を見る →</Link>
          </div>

          <div className="featured-grid">
            <div>
              {featuredArticle.image && (
                <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-md)', aspectRatio: '16/10' }}>
                  <SmartImage
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    width={1024}
                    height={1024}
                    sizes="(min-width: 768px) 58vw, 100vw"
                    fallbackSrc="/images/article_wine_1.png"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              )}
            </div>
            <div>
              <span style={{ fontSize: '0.82rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-serif)' }}>{featuredArticle.category}</span>
              <h3 style={{ fontSize: '1.8rem', margin: '12px 0' }}>{featuredArticle.title}</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: 20, lineHeight: 1.8 }}>{featuredArticle.excerpt}</p>
              <Link to="/articles" className="btn">読む</Link>
            </div>
          </div>

          <div className="card-grid-3">
            {recentArticles.map(article => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Pairing Preview */}
      <section className="section-py" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="label">食事とワイン</span>
            <h2>食卓のペアリング</h2>
            <p>ワインと料理の組み合わせに正解はありません。ただ、少しの法則を知ることで、いつもの食卓がぐっと深まります。</p>
          </div>

          <div className="max-w-4xl">
            <PairingCard {...featuredPairing} />
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/pairing" className="btn-primary" style={{ padding: '14px 32px', borderRadius: 30, fontFamily: 'var(--font-serif)' }}>ペアリングガイドを見る</Link>
          </div>
        </div>
      </section>

      {/* Region Preview */}
      <section className="section-py">
        <div className="container">
          <div className="section-header">
            <span className="label">日本のワイン産地</span>
            <h2>日本ワインの産地を歩く</h2>
            <p>その土地の気候と土壌、そして作り手の情熱が生み出す日本のワイン。旅先としての産地の魅力もあわせてご紹介します。</p>
          </div>

          <div className="max-w-5xl">
            <RegionCard {...featuredRegion} />
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link to="/regions" className="btn" style={{ borderRadius: 30 }}>産地ガイドを見る</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container max-w-3xl">
          <div className="section-header">
            <h2>よくあるご質問</h2>
          </div>
          <div>
            {siteData.faq.map((item, idx) => (
              <div key={idx} className="faq-item">
                <h3>
                  <span className="q-mark">Q.</span>
                  {item.question}
                </h3>
                <p>
                  <span className="a-mark">A.</span>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ResponsibleDrinkingNotice />
    </>
  );
};
