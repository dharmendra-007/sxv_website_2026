'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles, X as CloseIcon, ArrowRight, Heart } from 'lucide-react';
import Image from 'next/image';

interface Photo {
  id: number;
  src: string;
  title: string;
  tag: string;
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

  // Gallery data structure with tags
  const galleryData: GalleryData = {
    1: [
      { id: 1, src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop', title: 'Moonlight Shadows', tag: 'Aesthetics' },
      { id: 2, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop', title: 'Pulse of the Crowd', tag: 'Vibe' },
      { id: 3, src: 'https://images.unsplash.com/photo-1514525253344-99a4299966c2?q=80&w=1974&auto=format&fit=crop', title: 'Techno Flora', tag: 'Exhibition' },
      { id: 4, src: 'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=2070&auto=format&fit=crop', title: 'Digital Horizons', tag: 'Innovation' },
      { id: 5, src: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=2070&auto=format&fit=crop', title: 'Sonic Wavefront', tag: 'Music' },
      { id: 6, src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop', title: 'Tradition Rewired', tag: 'Culture' },
    ],
    2: [
      { id: 7, src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop', title: 'Iron Heart Beats', tag: 'Robotics' },
      { id: 8, src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop', title: 'Runway Glow', tag: 'Fashion' },
      { id: 9, src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop', title: 'Code & Soul', tag: 'Hackathon' },
      { id: 10, src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop', title: 'Acoustic Whispers', tag: 'Theater' },
      { id: 11, src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2070&auto=format&fit=crop', title: 'Synth Dialogue', tag: 'Talks' },
      { id: 12, src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop', title: 'Neon Fairground', tag: 'Carnival' },
    ],
    3: [
      { id: 13, src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop', title: 'The Golden Hour', tag: 'Ceremony' },
      { id: 14, src: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2070&auto=format&fit=crop', title: 'Stardust Solo', tag: 'Rock' },
      { id: 15, src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop', title: 'Eternal Echoes', tag: 'Finale' },
      { id: 16, src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop', title: 'Nexus Point', tag: 'Connect' },
      { id: 17, src: 'https://images.unsplash.com/photo-1574433237611-331666870a41?q=80&w=2072&auto=format&fit=crop', title: 'Hyper Bass', tag: 'EDM' },
      { id: 18, src: 'https://images.unsplash.com/photo-1429962714451-bb934ecbb4ec?q=80&w=2070&auto=format&fit=crop', title: 'Lasting Light', tag: 'Outro' },
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
              <div className="relative w-full" style={{ paddingBottom: '125%' }}>
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-contain opacity-70 grayscale-[0.3] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Artistic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/10 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="absolute inset-x-8 bottom-8 flex flex-col items-start translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <span className="px-4 py-1 bg-shrine-red text-[8px] font-black uppercase tracking-[0.3em] rounded-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {photo.tag}
                </span>
                <h4 className="text-3xl font-black italic tracking-tighter uppercase mb-2 font-serif-jp">{photo.title}</h4>
                <div className="flex items-center gap-2 text-rust-brown group-hover:text-shrine-red transition-colors">
                  <span className="text-[10px] font-bold tracking-widest uppercase">View Memory</span>
                  <ArrowRight
                    size={14}
                    className="-translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all"
                  />
                </div>
              </div>

              {/* Pretty Floating Label */}
              <div className="absolute top-8 right-8 w-10 h-10 border border-shrine-red/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-50 group-hover:scale-100">
                <Heart size={16} className="text-shrine-red" />
              </div>
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
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 lg:p-24 animate-fade-in">
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

          <div className="relative z-[1005] max-w-7xl w-full flex flex-col lg:flex-row items-center gap-16">
            <div className="relative w-full lg:w-2/3 group flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={1200}
                height={1500}
                className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-[40px] shadow-[0_0_100px_rgba(166,24,24,0.3)] border border-shrine-red/20"
              />
              <div className="absolute -inset-10 bg-shrine-red/10 blur-[100px] -z-10 rounded-full"></div>
            </div>

            <div className="w-full lg:w-1/3 text-left">
              <span className="text-shrine-red font-black tracking-[0.5em] uppercase text-xs mb-4 block">
                Day {activeDay} Collection
              </span>
              <h5 className="text-6xl font-black italic uppercase tracking-tighter mb-8 leading-tight font-serif-jp">
                {selectedImage.title}
              </h5>
              <p className="text-rust-brown text-sm leading-relaxed mb-12 font-medium">
                A captured fragment from the Techno-Cultural Odyssey. This moment represents the synthesis of
                human creativity and technical precision that defines our festival.
              </p>
              <div className="flex gap-8 border-t border-shrine-red/20 pt-12">
                <div>
                  <span className="text-[10px] text-rust-brown block mb-2 uppercase font-black tracking-widest">
                    Metadata
                  </span>
                  <span className="text-paper-white text-xs font-bold uppercase tracking-widest">
                    Frag. ID #{selectedImage.id}025
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-rust-brown block mb-2 uppercase font-black tracking-widest">
                    Category
                  </span>
                  <span className="text-paper-white text-xs font-bold uppercase tracking-widest">
                    {selectedImage.tag}
                  </span>
                </div>
              </div>
            </div>
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
