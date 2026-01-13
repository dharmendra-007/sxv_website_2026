"use client";

import { useEffect, useRef } from "react";
import styles from "./GlitchBackground.module.css";

export default function GlitchBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topLayerRef = useRef<HTMLImageElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const topLayer = topLayerRef.current;
    const cursor = cursorRef.current;

    if (!container || !topLayer || !cursor) return;

    // Animation config - exactly as provided
    const LERP_FACTOR = 0.08;
    const HOVER_RADIUS_INNER = 100;
    const HOVER_RADIUS_OUTER = 250;

    // State
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let currentRadiusInner = 0;
    let currentRadiusOuter = 0;
    let targetRadiusInner = 0;
    let targetRadiusOuter = 0;
    let isHovering = false;

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      isHovering = true;
      mouseX = e.clientX;
      mouseY = e.clientY;
      targetRadiusInner = HOVER_RADIUS_INNER;
      targetRadiusOuter = HOVER_RADIUS_OUTER;
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      targetRadiusInner = 0;
      targetRadiusOuter = 0;
    };

    const handleMouseEnter = () => {
      isHovering = true;
    };

    // Reveal loop
    function animateReveal() {
      if (!topLayer) return;
      
      currentX += (mouseX - currentX) * LERP_FACTOR;
      currentY += (mouseY - currentY) * LERP_FACTOR;
      currentRadiusInner += (targetRadiusInner - currentRadiusInner) * 0.1;
      currentRadiusOuter += (targetRadiusOuter - currentRadiusOuter) * 0.1;

      topLayer.style.maskImage = `radial-gradient(circle at ${currentX}px ${currentY}px, transparent ${currentRadiusInner}px, black ${currentRadiusOuter}px)`;
      topLayer.style.webkitMaskImage = `radial-gradient(circle at ${currentX}px ${currentY}px, transparent ${currentRadiusInner}px, black ${currentRadiusOuter}px)`;

      requestAnimationFrame(animateReveal);
    }

    animateReveal();

    // Handle window resize
    const handleResize = () => {
      if (!isHovering) {
        mouseX = window.innerWidth / 2;
        mouseY = window.innerHeight / 2;
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={styles.hero} ref={containerRef}>
      {/* Bottom Image (The Reveal) */}
      <img 
        src="/newjap.png" 
        alt="Background Base" 
        className={`${styles.imageLayer} ${styles.layerBottom}`}
        onError={(e) => {
          e.currentTarget.src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2664&auto=format&fit=crop';
        }}
      />

      {/* Top Image (The Cover) */}
      <img 
        ref={topLayerRef}
        src="/oldjap.png" 
        alt="Foreground Cover" 
        className={`${styles.imageLayer} ${styles.layerTop}`}
        id="topLayer"
        onError={(e) => {
          e.currentTarget.src = 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2664&auto=format&fit=crop';
        }}
      />

      {/* DARK OVERLAY */}
      <div className={styles.overlay} />

      {/* FILM GRAIN */}
      <div className={styles.grain} />

      {/* Custom Cursor */}
      <div ref={cursorRef} className={styles.cursorFollower} />

      {children}
    </section>
  );
}
