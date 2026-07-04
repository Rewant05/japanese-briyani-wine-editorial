import { useState } from 'react';
import type { FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { siteData } from '../config/siteData';
import { ResponsibleDrinkingNotice } from '../components/ResponsibleDrinkingNotice';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>お問い合わせ | {siteData.name}</title>
      </Helmet>

      <div className="page-header">
        <div className="container max-w-3xl">
          <h1>お問い合わせ</h1>
          <p>記事に関するご感想、取材やコラボレーションのご相談などはこちらからお寄せください。</p>
        </div>
      </div>

      <div className="page-content">
        <div className="container max-w-3xl">
          {submitted ? (
            <div className="form-success">
              <h2>送信が完了しました</h2>
              <p>お問い合わせいただきありがとうございます。内容を確認の上、担当者よりご連絡させていただきます。</p>
              <button onClick={() => setSubmitted(false)} className="btn-primary" style={{ padding: '14px 32px', borderRadius: 30, fontFamily: 'var(--font-serif)', border: 'none', cursor: 'pointer' }}>
                新しく問い合わせる
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">お名前 <span className="required">*</span></label>
                <input type="text" id="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">メールアドレス <span className="required">*</span></label>
                <input type="email" id="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="company">会社・団体名</label>
                <input type="text" id="company" />
              </div>

              <div className="form-group">
                <label htmlFor="type">お問い合わせ種別 <span className="required">*</span></label>
                <select id="type" required>
                  <option value="">選択してください</option>
                  <option value="記事について">記事について</option>
                  <option value="取材・掲載について">取材・掲載について</option>
                  <option value="コラボレーションについて">コラボレーションについて</option>
                  <option value="広告・メディアについて">広告・メディアについて</option>
                  <option value="その他">その他</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">メッセージ <span className="required">*</span></label>
                <textarea id="message" required></textarea>
              </div>

              <div className="form-privacy">
                送信することで、当サイトの<a href="/privacy">プライバシーポリシー</a>に同意したものとみなされます。
              </div>

              <div style={{ textAlign: 'center' }}>
                <button type="submit" className="btn-primary" style={{ padding: '14px 48px', borderRadius: 30, fontFamily: 'var(--font-serif)', border: 'none', cursor: 'pointer', fontSize: '0.95rem' }}>
                  送信する
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <ResponsibleDrinkingNotice />
    </>
  );
};
