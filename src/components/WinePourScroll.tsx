import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const WinePourScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glassRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1, // Smooth scrub
          pin: glassRef.current,
        }
      });

      // Background color shift (Ivory to faint Burgundy tint)
      tl.to(containerRef.current, {
        backgroundColor: '#f1e6e8', // very faint burgundy tint
        duration: 1
      }, 0);

      // Wine fills up
      tl.to(fillRef.current, {
        height: '80%',
        duration: 1,
        ease: 'none'
      }, 0);

      // Tasting notes appear
      const texts = textRef.current?.children;
      if (texts) {
        gsap.set(texts, { opacity: 0, y: 20 });
        tl.to(texts, {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.5,
          ease: 'power1.out'
        }, 0.2);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[200vh] w-full bg-ivory transition-colors duration-1000 paper-texture"
    >
      <div 
        ref={glassRef} 
        className="h-screen w-full flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-12"
      >
        {/* Text Side */}
        <div 
          ref={textRef} 
          className="flex-1 max-w-lg text-center md:text-left z-10"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-burgundy mb-8">
            一杯のなかに<br/>広がる景色
          </h2>
          <p className="text-walnut/80 mb-6 text-sm md:text-base leading-relaxed">
            グラスに注がれた瞬間から、ワインは呼吸を始めます。<br/>
            最初は固く閉じていた香りも、少しずつほぐれ、<br/>
            産地の土や、その年の太陽の暖かさを教えてくれます。
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="px-4 py-1 border border-gold text-gold text-xs rounded-full">色合い</span>
            <span className="px-4 py-1 border border-gold text-gold text-xs rounded-full">香り</span>
            <span className="px-4 py-1 border border-gold text-gold text-xs rounded-full">味わい</span>
            <span className="px-4 py-1 border border-gold text-gold text-xs rounded-full">余韻</span>
          </div>
        </div>

        {/* Glass Side */}
        <div className="flex-1 flex justify-center items-center h-full relative">
          {/* Simple CSS Glass Shape */}
          <div className="relative w-[180px] h-[250px] md:w-[220px] md:h-[300px] border-4 border-white/40 border-t-0 rounded-b-[100px] shadow-[0_10px_30px_rgba(92,31,48,0.1)] backdrop-blur-sm overflow-hidden z-20">
            {/* The Wine Fill */}
            <div 
              ref={fillRef}
              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-burgundy via-[#7e253e] to-[#9c304d] rounded-b-[96px]"
              style={{ height: '0%', transition: 'height 0.1s linear' }}
            >
              {/* Surface Reflection */}
              <div className="absolute top-0 left-0 w-full h-4 bg-white/20 rounded-[50%] -mt-2"></div>
            </div>
            
            {/* Glass Highlights */}
            <div className="absolute top-0 left-2 w-2 h-full bg-gradient-to-b from-white/30 to-transparent rounded-full mix-blend-overlay"></div>
            <div className="absolute top-0 right-4 w-1 h-3/4 bg-gradient-to-b from-white/20 to-transparent rounded-full mix-blend-overlay"></div>
          </div>
          
          {/* Glass Stem and Base */}
          <div className="absolute top-[50%] mt-[125px] md:mt-[150px] flex flex-col items-center">
             <div className="w-2 h-24 bg-white/40 shadow-sm backdrop-blur-sm"></div>
             <div className="w-24 h-2 bg-white/40 rounded-[50%] shadow-sm backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
