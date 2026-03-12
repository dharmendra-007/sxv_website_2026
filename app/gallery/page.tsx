'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles, X as CloseIcon } from 'lucide-react';
import Image from 'next/image';

interface Photo {
  id: number;
  src: string;
}

interface GalleryData {
  [key: number]: Photo[];
}

const GalleryPage = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Gallery data structure with actual images from public folders
  const galleryData: GalleryData = {
    1: [
      // Day 1 images
      { id: 1, src: '/day 1/11.JPG' },
      { id: 2, src: '/day 1/12.jpg' },
      { id: 3, src: '/day 1/13.JPG' },
      { id: 4, src: '/day 1/14.JPG' },
      { id: 5, src: '/day 1/15.jpg' },
      { id: 6, src: '/day 1/16.jpg' },
      { id: 7, src: '/day 1/17.png' },
      { id: 8, src: '/day 1/18.png' },
      { id: 9, src: '/day 1/19.png' },
      { id: 10, src: '/day 1/110.png' },
      { id: 11, src: '/day 1/111.png' },
      { id: 12, src: '/day 1/r1.JPG' },
      { id: 13, src: '/day 1/r2.JPG' },
      { id: 14, src: '/day 1/r3.JPG' },
      { id: 15, src: '/day 1/r4.JPG' },
      { id: 16, src: '/day 1/r5.JPG' },
      { id: 17, src: '/day 1/r6.JPG' },
      { id: 18, src: '/day 1/r7.JPG' },
      { id: 19, src: '/day 1/r8.png' },
      { id: 20, src: '/day 1/r9.png' },
      { id: 21, src: '/day 1/r10.png' },
      { id: 22, src: '/day 1/r11.png' },
      { id: 23, src: '/day 1/r12.png' },
      { id: 24, src: '/day 1/r13.png' },
      { id: 25, src: '/day 1/r14.png' },
      { id: 26, src: '/day 1/r15.png' },
      { id: 27, src: '/day 1/r16.png' },
      { id: 28, src: '/day 1/r17.png' },
      { id: 29, src: '/day 1/r18.png' },
      { id: 30, src: '/day 1/r19.png' },
    ],
    2: [
      // Day 2 images
      { id: 31, src: '/day 2/21.JPG' },
      { id: 32, src: '/day 2/22.JPG' },
      { id: 33, src: '/day 2/23.jpg' },
      { id: 34, src: '/day 2/24.jpg' },
      { id: 35, src: '/day 2/25.JPG' },
      { id: 36, src: '/day 2/26.jpg' },
      { id: 37, src: '/day 2/27.JPG' },
      { id: 38, src: '/day 2/28.JPG' },
      { id: 39, src: '/day 2/29.JPG' },
      { id: 40, src: '/day 2/210.JPG' },
      { id: 41, src: '/day 2/211.JPG' },
      { id: 42, src: '/day 2/212.jpg' },
      { id: 43, src: '/day 2/213.jpg' },
      { id: 44, src: '/day 2/214.jpg' },
      { id: 45, src: '/day 2/215.JPG' },
    ],
    3: [
      // Day 3 images
      { id: 46, src: '/day 3/31.JPG' },
      { id: 47, src: '/day 3/32.JPG' },
      { id: 48, src: '/day 3/33.JPG' },
      { id: 49, src: '/day 3/34.JPG' },
      { id: 50, src: '/day 3/35.JPG' },
      { id: 51, src: '/day 3/36.JPG' },
      { id: 52, src: '/day 3/37.JPG' },
      { id: 53, src: '/day 3/38.JPG' },
      { id: 54, src: '/day 3/f1.JPG' },
      { id: 55, src: '/day 3/f2.JPG' },
      { id: 56, src: '/day 3/f3.JPG' },
      { id: 57, src: '/day 3/f4.JPG' },
      { id: 58, src: '/day 3/f5.JPG' },
      { id: 59, src: '/day 3/f6.JPG' },
      { id: 60, src: '/day 3/f7.JPG' },
      { id: 61, src: '/day 3/f8.JPG' },
      { id: 62, src: '/day 3/f9.JPG' },
      { id: 63, src: '/day 3/m1.JPG' },
      { id: 64, src: '/day 3/m2.JPG' },
      { id: 65, src: '/day 3/m3.JPG' },
      { id: 66, src: '/day 3/m4.JPG' },
      { id: 67, src: '/day 3/m5.JPG' },
      { id: 68, src: '/day 3/m6.JPG' },
      { id: 69, src: '/day 3/m7.JPG' },
    ],
  };

  return (
    <div className="min-h-screen bg-cyber-black text-paper-white font-shippori selection:bg-shrine-red/50 overflow-x-hidden">
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="washi-texture absolute inset-0"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-shrine-red/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rust-brown/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Animated Visuals */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop"
            alt="Hero Background"
            fill
            className={`object-cover transition-all duration-[3000ms] ${
              mounted ? 'scale-100 opacity-20 grayscale-0' : 'scale-110 opacity-0 grayscale'
            }`}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-cyber-black"></div>
        </div>

        {/* Vertical Japanese Decorative Text */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden 2xl:block opacity-20 pointer-events-none">
          <div className="flex flex-col gap-8 text-4xl font-serif-jp tracking-[1em] [writing-mode:vertical-rl] text-rust-brown">
            テクノ文化フェスティバル
          </div>
        </div>
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden 2xl:block opacity-20 pointer-events-none text-shrine-red">
          <div className="flex flex-col gap-8 text-4xl font-serif-jp tracking-[1em] [writing-mode:vertical-rl]">
            二千二十五年
          </div>
        </div>

        <div className="relative z-10 text-center px-4">
          <div
            className={`mb-8 transition-all duration-1000 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 border border-shrine-red/30 bg-shrine-red/5 rounded-full backdrop-blur-md">
              <Sparkles size={14} className="text-rust-brown animate-spin-slow" />
              <span className="text-[9px] font-black uppercase tracking-[0.5em] text-shrine-red">
                The 2025 Experience
              </span>
            </div>
          </div>

          <h2 className="text-7xl md:text-[160px] font-light tracking-[-0.04em] leading-[0.8] mb-12 font-serif-jp">
            <span
              className={`inline-block transition-all duration-1000 delay-500 ${
                mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              サマヴェシ
            </span>
            <span className="text-shrine-red mx-6 font-black scale-125 inline-block animate-pulse">×</span>
            <span
              className={`inline-block transition-all duration-1000 delay-700 ${
                mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              ヴァサント
            </span>
          </h2>

          <div className={`transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-[11px] md:text-[14px] tracking-[0.8em] uppercase font-black text-rust-brown mb-8 max-w-4xl mx-auto">
              The Techno-Cultural Odyssey of{' '}
              <span className="text-paper-white border-b border-shrine-red/50">VSSUT, BURLA</span>
            </p>
            <div className="flex justify-center gap-2 mb-16">
              <div className="w-1.5 h-1.5 bg-rust-brown rotate-45"></div>
              <div className="w-1.5 h-1.5 bg-shrine-red rotate-45 animate-bounce"></div>
              <div className="w-1.5 h-1.5 bg-rust-brown rotate-45"></div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-[1200ms] ${
              mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="group relative inline-block">
              <div className="absolute -inset-4 bg-rust-brown/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-blood-red/40 backdrop-blur-xl border border-shrine-red/20 px-20 py-10 rounded-[60px] hover:border-shrine-red/50 transition-colors">
                <h3 className="text-5xl md:text-8xl font-black italic tracking-tighter text-rust-brown uppercase leading-none drop-shadow-2xl">
                  Gallery!!
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Pretty Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-shrine-red/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>
      </header>

      {/* Gallery Section */}
      <section className="relative max-w-[1600px] mx-auto px-10 py-40">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-24 gap-12">
          <div className="relative group">
            <span className="text-[10px] font-black tracking-[0.8em] text-shrine-red uppercase mb-4 block">
              Archive 0025
            </span>
            <h2 className="text-6xl md:text-8xl font-serif-jp italic relative z-10">
              Fragments{' '}
              <span className="text-rust-brown font-sans not-italic text-4xl align-middle mx-4">&</span> Time
            </h2>
            <div className="h-[2px] w-24 bg-shrine-red mt-6 group-hover:w-full transition-all duration-1000"></div>
          </div>

          {/* Pretty Tabs */}
          <div className="flex gap-4 p-2 bg-blood-red/30 backdrop-blur-md rounded-[30px] border border-shrine-red/20">
            {[1, 2, 3].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-12 py-5 text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 rounded-[25px] flex items-center gap-3 ${
                  activeDay === day
                    ? 'bg-shrine-red text-paper-white shadow-[0_10px_30px_rgba(166,24,24,0.3)] scale-105'
                    : 'text-rust-brown hover:text-paper-white hover:bg-shrine-red/20'
                }`}
              >
                <Calendar size={14} />
                Day {day}
              </button>
            ))}
          </div>
        </div>

        {/* Staggered Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryData[activeDay].map((photo, index) => (
            <div
              key={photo.id + '-' + activeDay}
              onClick={() => setSelectedImage(photo)}
              className="group relative cursor-pointer overflow-hidden rounded-[40px] bg-blood-red/20 border border-shrine-red/20 hover:border-shrine-red/50 transition-all duration-700 shadow-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative w-full min-h-[300px] flex items-center justify-center p-4">
                <Image
                  src={photo.src}
                  alt={`Day ${activeDay} - Image ${photo.id}`}
                  width={800}
                  height={600}
                  className="w-auto h-auto max-w-full max-h-[500px] object-contain opacity-70 grayscale-[0.3] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Subtle Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="mt-40 text-center">
          <button className="group relative px-20 py-6 border border-shrine-red/20 overflow-hidden rounded-full transition-all hover:border-shrine-red">
            <span className="relative z-10 text-[12px] font-black uppercase tracking-[0.5em] text-rust-brown group-hover:text-paper-white transition-colors">
              Enter The Full Archive
            </span>
            <div className="absolute inset-0 bg-shrine-red/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 animate-fade-in">
          <div
            className="absolute inset-0 bg-cyber-black/98 backdrop-blur-3xl"
            onClick={() => setSelectedImage(null)}
          ></div>

          <button
            className="absolute top-10 right-10 text-paper-white hover:text-shrine-red z-[1010] p-5 bg-blood-red/20 rounded-full border border-shrine-red/30 transition-all hover:rotate-90"
            onClick={() => setSelectedImage(null)}
          >
            <CloseIcon size={24} />
          </button>

          <div className="relative z-[1005] max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <Image
              src={selectedImage.src}
              alt={`Day ${activeDay} - Image ${selectedImage.id}`}
              width={1920}
              height={1080}
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-[20px] shadow-[0_0_100px_rgba(166,24,24,0.3)] border border-shrine-red/20"
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(30px, -50px);
          }
          66% {
            transform: translate(-20px, 20px);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;
