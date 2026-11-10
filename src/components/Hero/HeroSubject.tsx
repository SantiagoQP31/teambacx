import React, { useEffect, useRef } from 'react';

export const HeroSubject: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalized between -1 and 1
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const animate = () => {
      // Lerp for liquid smooth motion
      currentX += (mouseX - currentX) * 0.05;
      currentY += (mouseY - currentY) * 0.05;

      if (imageRef.current) {
        const rotateY = currentX * 12; // degrees
        const rotateX = -currentY * 8;  // degrees
        const translateX = currentX * 15; // px
        const translateY = currentY * 10; // px
        imageRef.current.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translate3d(${translateX}px, ${translateY}px, 20px)`;
      }

      if (glowRef.current) {
        const glowX = currentX * 40;
        const glowY = currentY * 30;
        glowRef.current.style.transform = `translate(${glowX}px, ${glowY}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative z-20 flex items-center justify-center pointer-events-none w-full max-w-[580px] lg:max-w-[700px] xl:max-w-[760px] mx-auto select-none"
    >
      {/* Dynamic Back-Spotlight behind the athlete */}
      <div
        ref={glowRef}
        className="absolute w-[440px] h-[440px] rounded-full bg-gradient-radial from-bacx-neon-green/20 via-bacx-mint/10 to-transparent blur-[70px] pointer-events-none transform -translate-y-6"
      />

      {/* Cyclist Cutout with 3D Matrix Perspective */}
      <div className="relative w-full flex items-center justify-center">
        <img
          ref={imageRef}
          src="/images/cyclist.png"
          alt="Team BACX Pro Cyclist"
          className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.85)] filter contrast-[1.05] brightness-[1.02] transition-transform duration-75 will-change-transform"
        />

        {/* Contact Shadow under wheels */}
        <div className="absolute -bottom-4 w-4/5 h-8 bg-black/80 blur-xl rounded-full transform scale-x-90" />
      </div>
    </div>
  );
};
