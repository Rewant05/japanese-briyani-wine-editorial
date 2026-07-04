import { Helmet } from 'react-helmet-async';
import { siteData } from '../config/siteData';
import { ArticleCard } from '../components/ArticleCard';
import { ResponsibleDrinkingNotice } from '../components/ResponsibleDrinkingNotice';

export const Articles = () => {
  const categories = ['すべて', 'ワインの基礎', '季節の一本', '食卓のペアリング', '旅とワイン', '編集部ノート'];

  return (
    <>
      <Helmet>
        <title>記事一覧 | {siteData.name}</title>
      </Helmet>

      <div className="page-header">
        <div className="container">
          <h1>すべての記事</h1>
          <p>ワインを知り、味わい、旅するための読み物。</p>
        </div>
      </div>

      <div className="page-content">
        <div className="container">
          <div className="filter-bar">
            {categories.map(cat => (
              <button key={cat} className={`filter-btn${cat === 'すべて' ? ' active' : ''}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="card-grid-3">
            {siteData.articles.map(article => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </div>

      <ResponsibleDrinkingNotice />
    </>
  );
};
