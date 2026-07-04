import { Helmet } from 'react-helmet-async';
import { siteData } from '../config/siteData';
import { ResponsibleDrinkingNotice } from '../components/ResponsibleDrinkingNotice';

export const Terms = () => {
  return (
    <>
      <Helmet>
        <title>利用規約 | {siteData.name}</title>
      </Helmet>

      <div className="page-header">
        <div className="container max-w-3xl">
          <h1>利用規約</h1>
          <p style={{ fontSize: '0.82rem' }}>最終更新日: 2024年4月1日</p>
        </div>
      </div>

      <div className="page-content">
        <div className="container max-w-3xl">
          <div className="legal-section">
            <h2>1. サービスの利用条件</h2>
            <p>この利用規約（以下「本規約」）は、{siteData.name}（以下「当メディア」）が提供するウェブサイトおよびコンテンツ（以下「本サービス」）の利用条件を定めるものです。</p>
          </div>
          <div className="legal-section">
            <h2>2. 掲載情報について</h2>
            <p>当メディアに掲載されている記事、写真、イラスト等のコンテンツは、一般的なワイン文化の紹介や食事との楽しみ方の提案を目的とした編集コンテンツです。</p>
          </div>
          <div className="legal-section legal-highlight">
            <h2>3. ワイン・飲酒に関する注意</h2>
            <p>当サイトはアルコール飲料に関する情報を扱っています。以下の点に十分ご留意ください。</p>
            <ul>
              <li>お酒は20歳になってから。未成年の飲酒は法律で禁じられています。</li>
              <li>飲酒運転は法律で厳しく禁じられています。絶対にやめましょう。</li>
              <li>妊娠中や授乳期の飲酒は、胎児・乳児の発育に悪影響を与えるおそれがあります。</li>
              <li>お酒は適量を守って楽しくお飲みください。</li>
            </ul>
            <p className="disclaimer-text">{siteData.disclaimer}</p>
          </div>
          <div className="legal-section">
            <h2>4. 予約・購入機能について</h2>
            <p>当サイトは編集メディアであり、ワイン等の酒類の販売、配送、決済等の機能は提供しておりません。</p>
          </div>
          <div className="legal-section">
            <h2>5. 禁止事項</h2>
            <ul>
              <li>法令または公序良俗に違反する行為</li>
              <li>当メディアのネットワークまたはシステム等に過度な負荷をかける行為</li>
              <li>当メディアの運営を妨害するおそれのある行為</li>
              <li>他の利用者または第三者に不利益、損害、不快感を与える行為</li>
              <li>当メディアが許諾しない本サービス上での宣伝、広告、勧誘、または営業行為</li>
            </ul>
          </div>
          <div className="legal-section">
            <h2>6. 免責事項</h2>
            <p>当メディアは、本サービスに事実上または法律上の瑕疵がないことを明示的にも黙示的にも保証しておりません。</p>
          </div>
          <div className="legal-section">
            <h2>7. 知的財産権</h2>
            <p>本サービスに含まれるテキスト、画像、ロゴ等のすべてのコンテンツに関する著作権その他の知的財産権は、当メディアまたは正当な権利を有する第三者に帰属します。</p>
          </div>
          <div className="legal-section">
            <h2>8. 外部リンクについて</h2>
            <p>当サイトからリンクされている外部ウェブサイトは、各運営者の責任において管理されるものであり、当メディアはそれらの内容について一切の責任を負いません。</p>
          </div>
          <div className="legal-section">
            <h2>9. コンテンツ変更について</h2>
            <p>当メディアは、利用者に通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとします。</p>
          </div>
          <div className="legal-section">
            <h2>10. 準拠法・裁判管轄</h2>
            <p>本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当メディアの所在地を管轄する裁判所を専属的合意管轄とします。</p>
          </div>
          <div className="legal-section">
            <h2>11. お問い合わせ</h2>
            <p>本規約に関するお問い合わせは、お問い合わせページよりご連絡ください。</p>
          </div>
        </div>
      </div>

      <ResponsibleDrinkingNotice />
    </>
  );
};
