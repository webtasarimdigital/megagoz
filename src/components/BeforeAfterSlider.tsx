"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "next-intl";

export default function BeforeAfterSlider() {
  const locale = useLocale();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initial animation to show it's draggable
  useEffect(() => {
    if (hasInteracted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animateSlider = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // Simple sine wave animation for wiggling
      // Wiggles between 45% and 55%
      const swing = Math.sin(progress / 300) * 5; 
      setSliderPosition(50 + swing);

      if (progress < 2500) { // animate for 2.5 seconds
        animationFrame = requestAnimationFrame(animateSlider);
      } else {
        setSliderPosition(50); // reset to center
      }
    };

    // delay before starting animation
    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animateSlider);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [hasInteracted]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = clientX - left;
    const percent = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percent);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setHasInteracted(true);
    handleMove(e.clientX);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setHasInteracted(true);
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", onMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="py-12 md:py-16 bg-white select-none">
      <div className="container mx-auto px-6 max-w-[1300px]">
        
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-[#162f5d]">{locale === 'en' ? 'See a Clearer World with Megagöz' : 'Megagöz İle Daha Net Bir Dünyaya Bakın'}</h2>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full h-[300px] md:h-[450px] xl:h-[550px] rounded-2xl overflow-hidden cursor-ew-resize group shadow-[0_15px_40px_rgba(22,47,93,0.15)]"
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        >
          {/* AFTER Image (Always behind, represents the clear vision) */}
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src="/images/megagoz-tedavi-sonrasi.webp" 
              alt={locale === 'en' ? 'After Treatment - Clear Vision' : 'Tedavi Sonrası Net Görüş'}
              fill
              className="object-cover pointer-events-none"
              priority
            />
          </div>

          {/* BEFORE Image (Overlay Image - Masked with clip-path) */}
          <div 
            className="absolute inset-0 w-full h-full z-10" 
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image 
              src="/images/megagoz-tedavi-oncesi.webp" 
              alt={locale === 'en' ? 'Before Treatment - Blurry Vision' : 'Tedavi Öncesi Bulanık Görüş'}
              fill
              className="object-cover pointer-events-none"
            />
          </div>

          {/* The Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white hover:bg-[#ecbb3f] transition-colors z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Circular button */}
            <div 
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-transform ${isDragging ? 'scale-90 bg-gray-50' : 'scale-100'} ${!hasInteracted ? 'animate-pulse' : ''}`}
            >
              <ChevronLeft className="text-[#162f5d] ml-1" size={24} />
              <ChevronRight className="text-[#162f5d] mr-1" size={24} />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
