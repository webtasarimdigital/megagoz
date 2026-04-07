"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BeforeAfterSlider() {
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
    <section className="py-24 bg-white select-none">
      <div className="container mx-auto px-6 max-w-[1300px]">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
             <div className="h-[2px] w-12 bg-[#ecbb3f]" />
             <span className="text-[#ecbb3f] font-bold tracking-widest uppercase text-sm">TEDAVİLERİMİZ</span>
             <div className="h-[2px] w-12 bg-[#ecbb3f]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#1f313f]">Öncesi ve Sonrası</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Megagöz İle Daha Net Bir Dünyaya Bakın</p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full h-[400px] md:h-[600px] xl:h-[700px] rounded-2xl overflow-hidden cursor-ew-resize group shadow-2xl"
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
        >
          {/* AFTER Image (Background/Base Image) */}
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src="/images/megagoz-tedavi-sonrası.webp" 
              alt="Tedavi Sonrası Net Görüş"
              fill
              className="object-cover pointer-events-none"
              priority
            />
            {/* Label Base (After) */}
            <div className="absolute top-6 right-6 bg-[#1f313f]/80 backdrop-blur text-white px-4 py-2 rounded-lg font-bold text-sm z-0">
              Sonrası
            </div>
          </div>

          {/* BEFORE Image (Overlay Image - Masked with clip-path) */}
          <div 
            className="absolute inset-0 w-full h-full z-10" 
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image 
              src="/images/megagoz-tedavi-oncesi.webp" 
              alt="Tedavi Öncesi Bulanık Görüş"
              fill
              className="object-cover pointer-events-none"
            />
            {/* Label Overlay (Before) */}
            <div className="absolute top-6 left-6 bg-[#ecbb3f]/90 backdrop-blur text-white px-4 py-2 rounded-lg font-bold text-sm">
              Öncesi
            </div>
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
              <ChevronLeft className="text-[#1f313f] ml-1" size={24} />
              <ChevronRight className="text-[#1f313f] mr-1" size={24} />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
