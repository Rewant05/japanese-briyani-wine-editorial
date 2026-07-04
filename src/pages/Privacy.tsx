import { Helmet } from 'react-helmet-async';
import { siteData } from '../config/siteData';
import { ResponsibleDrinkingNotice } from '../components/ResponsibleDrinkingNotice';

export const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>プライバシーポリシー | {siteData.name}</title>
      </Helmet>

      <div className="page-header">
        <div className="container max-w-3xl">
          <h1>プライバシーポリシー</h1>
          <p style={{ fontSize: '0.82rem' }}>最終更新日: 2024年4月1日</p>
        </div>
      </div>

      <div className="page-content">
        <div className="container max-w-3xl">
          <div className="legal-section">
            <h2>1. 個人情報の取得について</h2>
            <p>{siteData.name}（以下「当メディア」）は、お問い合わせフォームの利用等に際して、お名前、メールアドレス等の個人情報を取得する場合があります。偽りその他不正の手段によらず適正に個人情報を取得します。</p>
          </div>
          <div className="legal-section">
            <h2>2. 利用目的</h2>
            <p>取得した個人情報は、以下の目的で利用いたします。</p>
            <ul><li>お問い合わせに対するご返信やご連絡のため</li><li>当メディアのサービス向上・改善のための分析</li><li>重要なお知らせなどのご連絡のため</li></ul>
          </div>
          <div className="legal-section">
            <h2>3. お問い合わせ情報の管理</h2>
            <p>当メディアは、取得した個人情報の漏洩、滅失またはき損の防止、その他の個人情報の安全管理のために必要かつ適切な措置を講じます。</p>
          </div>
          <div className="legal-section">
            <h2>4. Cookieの利用について</h2>
            <p>当サイトでは、利便性の向上やアクセス状況の解析のためにCookie（クッキー）を使用しています。Cookieによりブラウザを識別していますが、特定の個人の識別はできない状態であり、匿名性が保たれています。</p>
          </div>
          <div className="legal-section">
            <h2>5. アクセス解析について</h2>
            <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このツールはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。</p>
          </div>
          <div className="legal-section">
            <h2>6. 第三者提供について</h2>
            <p>当メディアは、個人情報保護法等の法令に定めのある場合を除き、個人情報をあらかじめご本人の同意を得ることなく、第三者に提供いたしません。</p>
          </div>
          <div className="legal-section">
            <h2>7. 免責事項</h2>
            <p>当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。</p>
          </div>
          <div className="legal-section">
            <h2>8. お問い合わせ窓口</h2>
            <p>本ポリシーに関するお問い合わせは、以下の窓口までお願いいたします。</p>
            <p style={{ marginTop: 8 }}>{siteData.editor}<br />Email: {siteData.email}</p>
          </div>
          <div className="legal-section">
            <h2>9. 改定について</h2>
            <p>当メディアは、本プライバシーポリシーの内容を適宜見直し、その改善に努めます。改定されたプライバシーポリシーは、本ページに掲載された時点から効力を生じるものとします。</p>
          </div>
        </div>
      </div>

      <ResponsibleDrinkingNotice />
    </>
  );
};
