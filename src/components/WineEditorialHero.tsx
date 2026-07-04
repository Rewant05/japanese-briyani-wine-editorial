import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteData } from '../config/siteData';

gsap.registerPlugin(ScrollTrigger);

export const WineEditorialHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      /*
       * LCP FIX: Animate ONLY secondary bento boxes (not .bento-main and not .bento-image).
       * The main title box (which contains the h1) and the hero image (which is likely the LCP element)
       * are NEVER hidden with opacity:0. They render immediately with the
       * server/critical CSS, giving the browser the fastest LCP possible.
       */
      gsap.from('.bento-box:not(.bento-main):not(.bento-image)', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.15,
      });

      // Subtle entrance for the main box content (translate only, NO opacity change)
      gsap.from('.bento-main .hero-desc, .bento-main .hero-actions', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.1,
      });

      if (!isReducedMotion) {
        // Wine fill animation on scroll
        gsap.to(fillRef.current, {
          height: '82%',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom center',
            scrub: 1.2,
          },
        });

        // Subtle image parallax
        gsap.to('.bento-parallax-img', {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const tastingNotes = ['香り', '酸味', '余韻', '産地', 'ペアリング'];

  return (
    <section ref={containerRef} className="hero-section">
      <div className="bento-grid">

        {/* ===== Main Title Box (LCP element — never hidden) ===== */}
        <div className="bento-box bento-main">
          <div>
            <div className="hero-subtitle">{siteData.name}</div>
            <h1>ワインを、<br />もっと日常の言葉で。</h1>
          </div>
          <div>
            <p className="hero-desc">
              {siteData.description}
            </p>
            <div className="hero-actions">
              <Link to="/articles" className="btn-primary" style={{ padding: '14px 32px', borderRadius: 30, fontSize: '0.92rem', fontFamily: 'var(--font-serif)' }}>
                最新の記事を読む
              </Link>
              <Link to="/pairing" className="btn" style={{ borderRadius: 30 }}>
                ペアリングを見る
              </Link>
            </div>
          </div>
        </div>

        {/* ===== Wine Glass Box ===== */}
        <div className="bento-box bento-glass">
          <div className="glass-label">scroll to pour</div>
          <div className="glass-shape">
            <div className="glass-fill" ref={fillRef}>
              <div className="glass-fill-surface" />
            </div>
            <div className="glass-highlight" />
          </div>
          <div className="glass-stem">
            <div className="glass-stem-bar" />
            <div className="glass-stem-base" />
          </div>
        </div>

        {/* ===== Tasting Notes Box ===== */}
        <div className="bento-box bento-notes">
          <h3>ワインを読み解くキーワード</h3>
          <div className="note-tags">
            {tastingNotes.map((note) => (
              <span key={note} className="note-tag">{note}</span>
            ))}
          </div>
        </div>

        {/* ===== Image Box (eager load + fetchpriority via preload in index.html) ===== */}
        <div className="bento-box bento-image">
          <img
            className="bento-parallax-img"
            src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop"
            alt="ワインのある暮らし"
            loading="eager"
            fetchPriority="high"
          />
          <div className="bento-image-overlay">
            <div>
              <span className="tag-label">Pairing Guide</span>
              <Link to="/pairing">食卓のペアリングを見る <span>→</span></Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
