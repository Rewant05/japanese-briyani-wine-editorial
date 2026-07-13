import { Link } from 'react-router-dom';
import { SmartImage } from './SmartImage';

interface ArticleCardProps {
  id: number;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  mood: string;
  image?: string;
}

export const ArticleCard = ({ title, category, date, readingTime, excerpt, mood, image }: ArticleCardProps) => {
  return (
    <div className="article-card">
      <div className="article-card-image">
        {image && (
          <SmartImage
            src={image}
            alt={title}
            width={1024}
            height={1024}
            sizes="(min-width: 768px) 33vw, 100vw"
            fallbackSrc="/images/article_wine_1.png"
          />
        )}
        <div className="article-card-category">{category}</div>
        <div className="article-card-mood">{mood}</div>
      </div>

      <div className="article-card-meta">
        <span>{date}</span>
        <span>{readingTime}</span>
      </div>

      <h3>{title}</h3>
      <p>{excerpt}</p>

      <Link to="/articles" className="article-card-link">
        記事を読む <span>→</span>
      </Link>
    </div>
  );
};
