/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { 
  Film, 
  Disc3, 
  TrendingUp, 
  ArrowUpRight, 
  Play, 
  Radio,
  MapPin, 
  Calendar,
  Sparkles,
  Music2,
  Tv,
  Camera,
  Image as ImageIcon,
  X
} from 'lucide-react';

interface MusicProject {
  title: string;
  url: string;
  youtubeId: string;
  genre: string;
  bgGradient: string;
}

const MUSIC_PROJECTS: MusicProject[] = [
  {
    title: 'Siri parakum (EDM Remix)',
    url: 'https://youtu.be/Cts6ralAzqc',
    youtubeId: 'Cts6ralAzqc',
    genre: 'EDM Remix',
    bgGradient: 'from-amber-950/60 via-neutral-900 to-neutral-950'
  },
  {
    title: 'HAWK | උකුZA',
    url: 'https://youtu.be/VumE2EuyPwQ',
    youtubeId: 'VumE2EuyPwQ',
    genre: 'Rap / Trap',
    bgGradient: 'from-rose-950/60 via-neutral-900 to-neutral-950'
  },
  {
    title: 'Kaviyak',
    url: 'https://youtu.be/Ikp-XPefeuA',
    youtubeId: 'Ikp-XPefeuA',
    genre: 'Ambient / Poetry',
    bgGradient: 'from-sky-950/60 via-neutral-900 to-neutral-950'
  },
  {
    title: 'DRILLA',
    url: 'https://youtu.be/hM2n9kEi5J8',
    youtubeId: 'hM2n9kEi5J8',
    genre: 'Drill',
    bgGradient: 'from-emerald-950/60 via-neutral-900 to-neutral-950'
  },
  {
    title: 'L I F E',
    url: 'https://youtu.be/Iy0zf9FdTX0',
    youtubeId: 'Iy0zf9FdTX0',
    genre: 'Ambient Hip-Hop',
    bgGradient: 'from-indigo-950/60 via-neutral-900 to-neutral-950'
  },
  {
    title: 'KUSH',
    url: 'https://youtu.be/DZfFPNJb1Yk',
    youtubeId: 'DZfFPNJb1Yk',
    genre: 'Rap',
    bgGradient: 'from-purple-950/60 via-neutral-900 to-neutral-950'
  },
  {
    title: 'NOTHING',
    url: 'https://youtu.be/fp1iCLFSa1s',
    youtubeId: 'fp1iCLFSa1s',
    genre: 'Atmospheric Beats',
    bgGradient: 'from-zinc-900 via-neutral-900 to-neutral-950'
  },
  {
    title: 'KILL ME',
    url: 'https://youtu.be/rbAF31aCi-I',
    youtubeId: 'rbAF31aCi-I',
    genre: 'Dark Ambient / Rap',
    bgGradient: 'from-red-950/60 via-neutral-900 to-neutral-950'
  },
];

const CAROUSEL_VIDEOS = [
  'https://res.cloudinary.com/k14qmg0t/video/upload/v1793894057/vid1.mp4',
  'https://res.cloudinary.com/k14qmg0t/video/upload/v1793894059/vid2.mp4',
  'https://res.cloudinary.com/k14qmg0t/video/upload/v1793894059/vid3.mp4',
  'https://res.cloudinary.com/k14qmg0t/video/upload/v1793894059/vid4.mp4',
  'https://res.cloudinary.com/k14qmg0t/video/upload/v1793894059/vid5.mp4',
  'https://res.cloudinary.com/k14qmg0t/video/upload/v1793894060/vid6.mp4',
  'https://res.cloudinary.com/k14qmg0t/video/upload/v1793894059/vid7.mp4',
  'https://res.cloudinary.com/k14qmg0t/video/upload/v1793894069/vid8.mp4',
  'https://res.cloudinary.com/k14qmg0t/video/upload/v1793894061/vid9.mp4',
  'https://res.cloudinary.com/k14qmg0t/video/upload/v1793894060/vid10.mp4',
  'https://res.cloudinary.com/k14qmg0t/video/upload/v1793894061/vid11.mp4'
];

const CAROUSEL_PHOTOS = [
  'https://res.cloudinary.com/k14qmg0t/image/upload/v1793893855/photo1.jpg',
  'https://res.cloudinary.com/k14qmg0t/image/upload/v1793894347/photo8.jpg',
  'https://res.cloudinary.com/k14qmg0t/image/upload/v1793894347/photo2.jpg',
  'https://res.cloudinary.com/k14qmg0t/image/upload/v1793894348/photo7.jpg',
  'https://res.cloudinary.com/k14qmg0t/image/upload/v1793894348/photo10.jpg',
  'https://res.cloudinary.com/k14qmg0t/image/upload/v1793894348/photo5.jpg',
  'https://res.cloudinary.com/k14qmg0t/image/upload/v1793894348/photo4.jpg',
  'https://res.cloudinary.com/k14qmg0t/image/upload/v1793894348/photo6.jpg'
];

interface YTLiveStream {
  title: string;
  url: string;
  youtubeId: string;
  category: string;
  bgGradient: string;
}

const YT_LIVES: YTLiveStream[] = [
  {
    title: 'NTE SINHALA GAMEPLAY',
    url: 'https://www.youtube.com/live/AOgCVgPQ_AI',
    youtubeId: 'AOgCVgPQ_AI',
    category: 'Gameplay Stream',
    bgGradient: 'from-blue-950/50 via-neutral-900 to-neutral-950'
  },
  {
    title: 'NTE EP2',
    url: 'https://www.youtube.com/live/EhtQDMw7hp4',
    youtubeId: 'EhtQDMw7hp4',
    category: 'Episode 02',
    bgGradient: 'from-violet-950/50 via-neutral-900 to-neutral-950'
  },
  {
    title: 'NTE EP3',
    url: 'https://www.youtube.com/live/8cLOs8WXwEg',
    youtubeId: '8cLOs8WXwEg',
    category: 'Episode 03',
    bgGradient: 'from-cyan-950/50 via-neutral-900 to-neutral-950'
  },
  {
    title: 'ets 2',
    url: 'https://www.youtube.com/live/xmaqoxyiQOs',
    youtubeId: 'xmaqoxyiQOs',
    category: 'Simulation Stream',
    bgGradient: 'from-amber-950/50 via-neutral-900 to-neutral-950'
  },
  {
    title: 'ets 2 | බස් පිස්සෙක් වුනි මා',
    url: 'https://www.youtube.com/live/QDlRmtidkys',
    youtubeId: 'QDlRmtidkys',
    category: 'Special Road Trip',
    bgGradient: 'from-teal-950/50 via-neutral-900 to-neutral-950'
  },
];

export default function App() {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Carousel States
  const [currentVidIndex, setCurrentVidIndex] = useState(0);
  const [isVidPaused, setIsVidPaused] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isPhotoPaused, setIsPhotoPaused] = useState(false);

  // Video auto-rotation timer (5s)
  useEffect(() => {
    if (isVidPaused) return;
    const interval = setInterval(() => {
      setCurrentVidIndex((prev) => (prev + 1) % CAROUSEL_VIDEOS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isVidPaused]);

  // Photo auto-rotation timer (3s)
  useEffect(() => {
    if (isPhotoPaused) return;
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % CAROUSEL_PHOTOS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPhotoPaused]);

  const nextVideo = () => setCurrentVidIndex((prev) => (prev + 1) % CAROUSEL_VIDEOS.length);
  const prevVideo = () => setCurrentVidIndex((prev) => (prev - 1 + CAROUSEL_VIDEOS.length) % CAROUSEL_VIDEOS.length);

  const nextPhoto = () => setCurrentPhotoIndex((prev) => (prev + 1) % CAROUSEL_PHOTOS.length);
  const prevPhoto = () => setCurrentPhotoIndex((prev) => (prev - 1 + CAROUSEL_PHOTOS.length) % CAROUSEL_PHOTOS.length);

  // Dynamic scroll animation (parallax and subtle scale) on the profile image
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (imageRef.current) {
            const parallaxOffset = currentScroll * 0.14;
            const dynamicScale = Math.max(0.92, 1 - currentScroll * 0.00025);
            imageRef.current.style.transform = `translate3d(0, ${parallaxOffset}px, 0) scale(${dynamicScale})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hidden Keystroke Easter Egg ('noriko' with Sakura rain and massive cursive text)
  useEffect(() => {
    let keyBuffer = '';
    let fadeOutTimer: ReturnType<typeof setTimeout>;
    let removeTimer: ReturnType<typeof setTimeout>;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key && e.key.length === 1) {
        keyBuffer = (keyBuffer + e.key.toLowerCase()).slice(-6);

        if (keyBuffer === 'noriko') {
          keyBuffer = '';

          const existingOverlay = document.getElementById('norikoEasterEggOverlay');
          if (existingOverlay && existingOverlay.parentNode) {
            existingOverlay.parentNode.removeChild(existingOverlay);
          }

          const overlay = document.createElement('div');
          overlay.id = 'norikoEasterEggOverlay';
          overlay.className = 'fixed inset-0 z-50 pointer-events-none overflow-hidden flex flex-col items-center justify-center opacity-0 transition-opacity duration-1000';
          overlay.style.background = 'radial-gradient(circle at center, rgba(12, 12, 12, 0.5) 0%, rgba(0, 0, 0, 0.72) 100%)';
          overlay.style.backdropFilter = 'blur(1px)';

          const petalsContainer = document.createElement('div');
          petalsContainer.className = 'absolute inset-0 pointer-events-none overflow-hidden';
          const sakuraChars = ['🌸', '🌸', '🌸', '🌸', '💮'];

          for (let i = 0; i < 48; i++) {
            const petal = document.createElement('div');
            petal.className = 'sakura-petal';
            petal.textContent = sakuraChars[Math.floor(Math.random() * sakuraChars.length)];

            const leftPos = Math.random() * 100;
            const duration = 4 + Math.random() * 4;
            const delay = Math.random() * 3.5;
            const drift = (Math.random() - 0.5) * 220;
            const rot = (Math.random() > 0.5 ? 1 : -1) * (180 + Math.random() * 540);
            const fontSize = 16 + Math.random() * 18;
            const opacity = 0.65 + Math.random() * 0.35;

            petal.style.left = `${leftPos}%`;
            petal.style.fontSize = `${fontSize}px`;
            petal.style.opacity = `${opacity}`;
            petal.style.setProperty('--sakura-duration', `${duration}s`);
            petal.style.setProperty('--sakura-delay', `${delay}s`);
            petal.style.setProperty('--sakura-drift', `${drift}px`);
            petal.style.setProperty('--sakura-rot', `${rot}deg`);
            petal.style.animationDuration = `${duration}s`;
            petal.style.animationDelay = `${delay}s`;

            petalsContainer.appendChild(petal);
          }
          overlay.appendChild(petalsContainer);

          const textContainer = document.createElement('div');
          textContainer.className = 'relative z-10 px-6 text-center select-none';

          const heading = document.createElement('h1');
          heading.className = 'text-6xl md:text-8xl lg:text-9xl text-pink-400 drop-shadow-[0_0_35px_rgba(244,114,182,0.85)] tracking-wide leading-tight';
          heading.style.fontFamily = "'Great Vibes', 'Dancing Script', cursive";
          heading.textContent = 'Dedicated to Noriko';

          const subtext = document.createElement('p');
          subtext.className = 'text-xs sm:text-sm tracking-[0.35em] uppercase text-pink-200/70 mt-3 font-sans font-medium drop-shadow-md';
          subtext.textContent = '永遠の桜 · forever in bloom';

          textContainer.appendChild(heading);
          textContainer.appendChild(subtext);
          overlay.appendChild(textContainer);

          document.body.appendChild(overlay);

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              overlay.classList.remove('opacity-0');
              overlay.classList.add('opacity-100');
            });
          });

          const copyrightEl = document.getElementById('footerCopyright');
          if (copyrightEl) {
            const existingEgg = document.getElementById('norikoEasterEgg');
            if (existingEgg) existingEgg.remove();
            const span = document.createElement('span');
            span.id = 'norikoEasterEgg';
            span.className = 'text-xs text-pink-200/70 drop-shadow-md ml-2 opacity-0 transition-opacity duration-1000 inline-block font-sans select-none';
            span.textContent = 'Dedicated to Noriko';
            copyrightEl.appendChild(span);
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                span.classList.remove('opacity-0');
                span.classList.add('opacity-100');
              });
            });
          }

          clearTimeout(fadeOutTimer);
          clearTimeout(removeTimer);
          fadeOutTimer = setTimeout(() => {
            overlay.style.transition = 'opacity 2s ease';
            overlay.classList.remove('opacity-100');
            overlay.classList.add('opacity-0');

            const footerEgg = document.getElementById('norikoEasterEgg');
            if (footerEgg) {
              footerEgg.style.transition = 'opacity 2s ease';
              footerEgg.classList.remove('opacity-100');
              footerEgg.classList.add('opacity-0');
            }

            removeTimer = setTimeout(() => {
              if (overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
              }
              if (footerEgg && footerEgg.parentNode) {
                footerEgg.parentNode.removeChild(footerEgg);
              }
            }, 2000);
          }, 12000);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(fadeOutTimer);
      clearTimeout(removeTimer);
      const overlay = document.getElementById('norikoEasterEggOverlay');
      if (overlay && overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    };
  }, []);

  // Compute carousel items for video
  const leftVidIdx = (currentVidIndex - 1 + CAROUSEL_VIDEOS.length) % CAROUSEL_VIDEOS.length;
  const centerVidIdx = currentVidIndex;
  const rightVidIdx = (currentVidIndex + 1) % CAROUSEL_VIDEOS.length;

  // Compute carousel items for photo
  const leftPhotoIdx = (currentPhotoIndex - 1 + CAROUSEL_PHOTOS.length) % CAROUSEL_PHOTOS.length;
  const centerPhotoIdx = currentPhotoIndex;
  const rightPhotoIdx = (currentPhotoIndex + 1) % CAROUSEL_PHOTOS.length;

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 selection:bg-neutral-100 selection:text-neutral-900 relative overflow-x-hidden font-sans">
      {/* Background Ambient Lighting Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[550px] h-[550px] bg-neutral-800/40 rounded-full blur-[140px]" />
        <div className="absolute top-[35%] left-[-10%] w-[450px] h-[450px] bg-neutral-800/30 rounded-full blur-[130px]" />
        <div className="absolute bottom-[-5%] right-[20%] w-[500px] h-[500px] bg-neutral-800/35 rounded-full blur-[160px]" />
      </div>

      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-900/80 border-b border-neutral-800/80 transition-colors">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
          <a 
            href="#hero" 
            className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-neutral-200 hover:text-white whitespace-nowrap shrink-0 text-interactive transition-colors"
          >
            <span className="group relative flex items-center justify-center w-2 h-2 transition-transform duration-300 hover:scale-125 cursor-pointer">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] transition-all duration-300 group-hover:opacity-0" />
              <span className="absolute inset-0 flex items-center justify-center text-[11px] font-extrabold font-sans text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.95)] leading-none select-none">
                N
              </span>
            </span>
            <span>RUMETH THAWASARA</span>
          </a>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-400">
            <a href="#biography" className="hover:text-white transition-colors text-interactive whitespace-nowrap shrink-0">
              Biography
            </a>
            <a href="#projects-music" className="hover:text-white transition-colors text-interactive whitespace-nowrap shrink-0">
              Music
            </a>
            <a href="#visual-projects" className="hover:text-white transition-colors text-interactive whitespace-nowrap shrink-0">
              Visual Executions
            </a>
            <a href="#event-captures" className="hover:text-white transition-colors text-interactive whitespace-nowrap shrink-0">
              Event Captures
            </a>
            <a href="#yt-lives" className="hover:text-white transition-colors text-interactive whitespace-nowrap shrink-0">
              YT Lives
            </a>
            <a href="#directing" className="hover:text-white transition-colors text-interactive whitespace-nowrap shrink-0">
              Executions
            </a>
            <a href="#contact" className="hover:text-white transition-colors text-interactive whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://loopstudio.rumeththawasara.lk/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-200 bg-neutral-800/90 hover:bg-neutral-800 rounded-md border border-neutral-700 hover:border-neutral-500 transition-all duration-200 shadow-sm whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span>Loop Studio</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 bg-white rounded-md hover:bg-neutral-200 transition-all duration-200 shadow-sm hover:shadow-white/20 whitespace-nowrap shrink-0"
            >
              Direct Inquiry
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section 
          id="hero" 
          className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 py-12 lg:py-20 max-w-7xl mx-auto"
        >
          <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* LEFT COLUMN: Text Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 lg:pr-6">
              
              <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-neutral-400 font-medium text-interactive">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-neutral-300" />
                  Nittabuwa, Sri Lanka
                </span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-neutral-300" />
                  Born July 12, 2008
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] text-interactive">
                <span className="block">RUMETH</span>
                <span className="block">THAWASARA</span>
              </h1>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                <a
                  href="https://loopstudio.rumeththawasara.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white hover:border-neutral-500 shadow-sm text-interactive inline-flex items-center gap-1.5 transition-all"
                >
                  <span>CO-FOUNDER • LOOP STUDIOS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </a>
                <span className="px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-300 shadow-sm text-interactive">
                  FOUNDER • KULT STUDIO
                </span>
              </div>

              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block text-interactive">
                  ABOUT ME
                </span>
              </div>

              <div className="border-l-2 border-neutral-500 pl-4 sm:pl-5 space-y-4">
                <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal text-interactive">
                  Rumeth Thawasara (born July 12, 2008) is a Director, Producer, and Digital Marketer based in Nittabuwa, Sri Lanka. As a multidisciplinary creative professional, he bridges the gap between high-end audiovisual production and strategic digital marketing.
                </p>

                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed text-interactive">
                  He specializes in delivering cinematic visuals for commercial advertising and music videos. In addition to his visual directorial work, Rumeth operates as a dedicated audio engineer, with a distinct focus on producing and engineering sound for the rap and ambient music genres.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#projects-music"
                  className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium rounded-lg border border-neutral-700 hover:border-neutral-500 transition-all duration-200 flex items-center gap-2 group shadow-lg"
                >
                  <Disc3 className="w-4 h-4 text-white group-hover:rotate-45 transition-transform" />
                  <span>Explore Music Projects</span>
                </a>
                
                <a
                  href="#visual-projects"
                  className="px-6 py-3 bg-transparent hover:bg-neutral-800/60 text-neutral-300 hover:text-white text-sm font-medium rounded-lg border border-neutral-800 hover:border-neutral-600 transition-all duration-200 flex items-center gap-2"
                >
                  <Film className="w-4 h-4 text-pink-400" />
                  <span>Visual Executions</span>
                </a>
              </div>

              <div className="pt-6 border-t border-neutral-800/80 flex items-center gap-8 text-xs text-neutral-400">
                <div className="text-interactive">
                  <span className="block text-lg font-bold text-white tabular-nums">100%</span>
                  <span>End-to-End Creative Direction</span>
                </div>
                <div className="h-8 w-[1px] bg-neutral-800" />
                <div className="text-interactive">
                  <span className="block text-lg font-bold text-white tabular-nums">4K RAW</span>
                  <span>Cinematic Visual Pipeline</span>
                </div>
                <div className="h-8 w-[1px] bg-neutral-800" />
                <div className="text-interactive">
                  <span className="block text-lg font-bold text-white tabular-nums">Hybrid</span>
                  <span>Audio & Growth Strategy</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Image & Effects */}
            <div 
              ref={containerRef}
              className="w-full md:w-1/2 flex items-center justify-center relative p-4 sm:p-8"
            >
              <div className="absolute inset-0 max-w-[420px] max-h-[420px] m-auto bg-gradient-to-tr from-neutral-700/20 via-neutral-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-square flex items-center justify-center">
                
                <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-8 z-20 pointer-events-none animate-float-wiggle-1">
                  <svg width="64" height="64" viewBox="0 0 100 100" fill="none" className="w-10 h-10 sm:w-14 sm:h-14 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]">
                    <path d="M50 0 C49 32 32 49 0 50 C32 51 49 68 50 100 C51 68 68 51 100 50 C68 49 51 32 50 0 Z" fill="currentColor"/>
                  </svg>
                </div>

                <div className="absolute -top-8 -right-4 sm:-top-10 sm:-right-8 z-20 pointer-events-none animate-float-wiggle-2">
                  <svg width="74" height="74" viewBox="0 0 100 100" fill="none" className="w-12 h-12 sm:w-16 sm:h-16 text-neutral-200 drop-shadow-[0_0_14px_rgba(255,255,255,0.5)] -rotate-12">
                    <path d="M85 15 C65 10 30 25 25 65" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/>
                    <path d="M15 50 L25 67 L42 62" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-10 z-20 pointer-events-none animate-float-wiggle-3">
                  <svg width="110" height="50" viewBox="0 0 120 50" fill="none" className="w-20 h-10 sm:w-28 sm:h-12 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">
                    <path d="M5 25 Q15 25 20 10 T35 40 T50 5 T65 45 T80 15 T95 35 T105 25 T115 25" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-8 z-20 pointer-events-none animate-float-wiggle-1">
                  <svg width="70" height="70" viewBox="0 0 80 80" fill="none" className="w-12 h-12 sm:w-14 sm:h-14 text-neutral-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
                    <path d="M65 40 V65 H40" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M30 40 L34 44 L30 48 L26 44 Z" fill="currentColor"/>
                  </svg>
                </div>

                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-3 sm:inset-5 rounded-full bg-gradient-to-b from-neutral-800/60 via-neutral-900/80 to-neutral-950/90 border border-neutral-700/50 shadow-2xl pointer-events-none" />

                  <img
                    ref={imageRef}
                    src="./profile.png"
                    alt="Rumeth Thawasara - Director, Producer, Audio Engineer & Digital Marketer"
                    referrerPolicy="no-referrer"
                    className="relative z-10 w-full h-full object-contain object-bottom profile-glow-filter transition-transform ease-out will-change-transform"
                    style={{
                      filter: 'drop-shadow(0 0 16px rgba(255, 255, 255, 0.55)) drop-shadow(0 0 38px rgba(255, 255, 255, 0.25)) drop-shadow(0 0 70px rgba(255, 255, 255, 0.12))'
                    }}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('WhatsApp_Image')) {
                        target.src = '/public/assets/aistudio/WhatsApp_Image_2026-11-05_at_2.01.44_PM-removebg-preview_41c0ac9c.png';
                      }
                    }}
                  />

                  <div className="absolute -bottom-3 z-20 flex items-center gap-2 bg-neutral-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-neutral-700 text-xs font-mono text-neutral-300 shadow-xl">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span>AUDIOVISUAL & MARKETING</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: BIOGRAPHY */}
        <section id="biography" className="py-24 px-6 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto space-y-12">
            
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-mono font-semibold block text-interactive">
                THE STORY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-interactive">
                Bridging Raw Art with Strategic Discipline.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-neutral-800/40 border border-neutral-700 rounded-2xl p-8 hover:-translate-y-1 hover:border-gray-400 transition-all duration-300 flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 block">
                    01 / THE ORIGIN
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    At just 15, he didn't just consume media—he engineered it.
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal">
                    What started as self-taught beat-making on FL Studio rapidly scaled into international collaborations. When he picked up a camera as his school's Media President, a hobby instantly became a profession, directing commercial campaigns and live events.
                  </p>
                </div>
              </div>

              <div className="bg-neutral-800/40 border border-neutral-700 rounded-2xl p-8 hover:-translate-y-1 hover:border-gray-400 transition-all duration-300 flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 block">
                    02 / THE EDGE
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    Where raw creativity meets strict financial discipline.
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal">
                    Backed by AAT and Commerce studies, Rumeth operates at a rare intersection. He doesn't just make things look and sound cinematic—he understands the mechanics of building sustainable, scalable digital businesses.
                  </p>
                </div>
              </div>

              <div className="bg-neutral-800/40 border border-neutral-700 rounded-2xl p-8 hover:-translate-y-1 hover:border-gray-400 transition-all duration-300 flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 block">
                    03 / THE EVOLUTION
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    Growth demands sacrifice and calculated pivots.
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal">
                    The release of the album DEATH OF AN ARTIST marked the intentional closure of Kult Studio. It wasn't an end, but an evolution to conquer workload fatigue. Today, he quietly builds the next era of digital media with Loop.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: PROJECTS: MUSIC */}
        <section id="projects-music" className="py-20 border-t border-neutral-800/90 bg-neutral-950/60 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-400 font-semibold text-interactive flex items-center gap-2">
                <Music2 className="w-3.5 h-3.5 text-neutral-300" />
                <span>Music</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1 text-interactive">
                Projects
              </h2>
            </div>
            <div className="text-xs text-neutral-400 max-w-sm text-interactive flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-400" />
              <span>Hover over tracks to pause the continuous marquee</span>
            </div>
          </div>

          <div className="marquee-row relative w-full overflow-hidden py-4 cursor-pointer select-none">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-r from-neutral-900 to-transparent z-30" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-36 bg-gradient-to-l from-neutral-900 to-transparent z-30" />

            <div className="animate-marquee-infinite flex gap-4 sm:gap-6 px-4">
              {[...MUSIC_PROJECTS, ...MUSIC_PROJECTS].map((project, idx) => (
                <a
                  key={`music-${project.youtubeId}-${idx}`}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-shrink-0 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-neutral-800/90 bg-neutral-900 card-hover-glow hover:border-neutral-500 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center overflow-hidden`}>
                    <img
                      src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                  <div className="absolute inset-0 bg-neutral-950/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-neutral-950 flex items-center justify-center shadow-[0_0_24px_rgba(255,255,255,0.8)] transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-neutral-950 ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 z-10">
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-0.5">
                      {project.genre}
                    </span>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-white leading-tight line-clamp-1 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-700/60 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-neutral-400 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* 1. VISUAL PROJECTS (VIDEO CAROUSEL)        */}
        {/* ========================================== */}
        <section className="py-24 bg-neutral-900 text-white overflow-hidden" id="visual-projects">
          <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
            <p className="text-xs uppercase tracking-widest text-pink-400 font-semibold mb-2">Director's Reel</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Visual Executions</h2>
          </div>

          <div 
            className="relative w-full flex items-center justify-center min-h-[500px] overflow-hidden px-4" 
            id="video-carousel-wrapper"
            onMouseEnter={() => setIsVidPaused(true)}
            onMouseLeave={() => setIsVidPaused(false)}
          >
            <div className="flex items-center justify-center gap-6 md:gap-10 transition-all duration-700 ease-out" id="video-carousel-track">
              {[
                { index: leftVidIdx, isCenter: false },
                { index: centerVidIdx, isCenter: true },
                { index: rightVidIdx, isCenter: false },
              ].map(({ index, isCenter }, posKey) => (
                <div
                  key={`vid-card-${posKey}`}
                  className={`transition-all duration-700 ease-out rounded-2xl overflow-hidden border ${
                    isCenter 
                      ? 'w-72 md:w-80 aspect-[9/16] scale-100 z-20 opacity-100 border-pink-500/50 shadow-2xl shadow-pink-500/20' 
                      : 'w-52 md:w-60 aspect-[9/16] scale-90 z-10 opacity-40 blur-[4px] border-neutral-800 grayscale-[30%]'
                  }`}
                >
                  <video
                    src={CAROUSEL_VIDEOS[index]}
                    className="w-full h-full object-cover"
                    playsInline
                    muted
                    autoPlay={isCenter}
                    loop={isCenter}
                    controls={isCenter}
                    onError={(e) => {
                      // Fallback or hide if video fails to load
                      console.error('Video load error:', CAROUSEL_VIDEOS[index]);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-10">
            <button 
              id="video-prev-btn" 
              onClick={prevVideo}
              className="px-6 py-3 rounded-full bg-neutral-800 hover:bg-pink-600 hover:text-white transition font-medium text-sm border border-neutral-700 shadow-lg cursor-pointer"
            >
              ← Prev
            </button>
            <button 
              id="video-next-btn" 
              onClick={nextVideo}
              className="px-6 py-3 rounded-full bg-neutral-800 hover:bg-pink-600 hover:text-white transition font-medium text-sm border border-neutral-700 shadow-lg cursor-pointer"
            >
              Next →
            </button>
          </div>
        </section>


        {/* ========================================== */}
        {/* 2. EVENT CAPTURES (PHOTO CAROUSEL)         */}
        {/* ========================================== */}
        <section className="py-24 bg-neutral-950 text-white overflow-hidden" id="event-captures">
          <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
            <p className="text-xs uppercase tracking-widest text-pink-400 font-semibold mb-2">Photography</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Event Captures</h2>
          </div>

          <div 
            className="relative w-full flex items-center justify-center min-h-[450px] overflow-hidden px-4" 
            id="photo-carousel-wrapper"
            onMouseEnter={() => setIsPhotoPaused(true)}
            onMouseLeave={() => setIsPhotoPaused(false)}
          >
            <div className="flex items-center justify-center gap-6 md:gap-10 transition-all duration-700 ease-out" id="photo-carousel-track">
              {[
                { index: leftPhotoIdx, isCenter: false },
                { index: centerPhotoIdx, isCenter: true },
                { index: rightPhotoIdx, isCenter: false },
              ].map(({ index, isCenter }, posKey) => (
                <div
                  key={`photo-card-${posKey}`}
                  className={`transition-all duration-700 ease-out rounded-2xl overflow-hidden border ${
                    isCenter 
                      ? 'w-72 md:w-90 aspect-[4/3] scale-100 z-20 opacity-100 border-pink-500/50 shadow-2xl shadow-pink-500/20' 
                      : 'w-52 md:w-64 aspect-[4/3] scale-90 z-10 opacity-40 blur-[3px] border-neutral-800'
                  }`}
                >
                  <img
                    src={CAROUSEL_PHOTOS[index]}
                    alt={`Event Capture ${index + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-10">
            <button 
              id="photo-prev-btn" 
              onClick={prevPhoto}
              className="px-6 py-3 rounded-full bg-neutral-800 hover:bg-pink-600 hover:text-white transition font-medium text-sm border border-neutral-700 shadow-lg cursor-pointer"
            >
              ← Prev
            </button>
            <button 
              id="photo-next-btn" 
              onClick={nextPhoto}
              className="px-6 py-3 rounded-full bg-neutral-800 hover:bg-pink-600 hover:text-white transition font-medium text-sm border border-neutral-700 shadow-lg cursor-pointer"
            >
              Next →
            </button>
          </div>
        </section>

        {/* SECTION: YT LIVES */}
        <section id="yt-lives" className="py-20 border-t border-neutral-800 bg-neutral-900/40 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-rose-400 font-semibold text-interactive flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span>Broadcasting & Gaming</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1 text-interactive">
                YT Lives
              </h2>
            </div>
            <div className="text-xs text-neutral-400 max-w-sm text-interactive flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-400" />
              <span>Hover over lives to pause the 16:9 widescreen marquee</span>
            </div>
          </div>

          <div className="marquee-row relative w-full overflow-hidden py-4 cursor-pointer select-none">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-neutral-900 to-transparent z-30" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-neutral-900 to-transparent z-30" />

            <div className="animate-marquee-slow flex gap-5 sm:gap-7 px-4">
              {[...YT_LIVES, ...YT_LIVES, ...YT_LIVES].map((stream, idx) => (
                <a
                  key={`yt-live-${stream.youtubeId}-${idx}`}
                  href={stream.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex-shrink-0 w-72 sm:w-96 md:w-[460px] lg:w-[520px] aspect-video rounded-2xl overflow-hidden border border-neutral-800/90 bg-neutral-900 card-hover-glow hover:border-neutral-500 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stream.bgGradient} flex items-center justify-center overflow-hidden`}>
                    <img
                      src={`https://img.youtube.com/vi/${stream.youtubeId}/hqdefault.jpg`}
                      alt={stream.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-95"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                  <div className="absolute inset-0 bg-neutral-950/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-neutral-950 flex items-center justify-center shadow-[0_0_28px_rgba(255,255,255,0.85)] transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-neutral-950 ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-neutral-700/70 text-[10px] sm:text-xs font-mono text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                    <span className="uppercase">{stream.category}</span>
                  </div>

                  <div className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-neutral-900/80 backdrop-blur-sm border border-neutral-700/60 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-neutral-400 transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10">
                    <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                      YouTube Live Archive
                    </span>
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug line-clamp-1 group-hover:text-white transition-colors">
                      {stream.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: CORE DISCIPLINES & EXPERTISE */}
        <section id="directing" className="py-24 border-t border-neutral-800 bg-neutral-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-neutral-400 font-semibold text-interactive">
                  Disciplines & Execution
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2 text-interactive">
                  The Complete Creative Direction
                </h2>
              </div>
              <p className="text-neutral-400 text-sm max-w-md text-interactive">
                Controlling every nuance from the initial beat and sound frequency to the final graded cut and performance marketing campaign.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-neutral-800/40 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform border border-neutral-700">
                  <Film className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-interactive">
                  Cinematic Directing
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed text-interactive mb-6">
                  Commercial advertising and high-retention music videos designed with cinematic camera movement, anamorphic lenses, and rhythmic visual pacing.
                </p>
                <div className="text-xs text-neutral-500 space-y-1 font-mono">
                  <div>· Music Videos & Commercials</div>
                  <div>· Pre-visualization & Storyboarding</div>
                  <div>· Color Grading & Post-production</div>
                </div>
              </div>

              <div id="audio" className="p-8 rounded-2xl bg-neutral-800/40 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform border border-neutral-700">
                  <Disc3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-interactive">
                  Audio Engineering
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed text-interactive mb-6">
                  Dedicated sound architecture for rap, hip-hop, and ambient music. Sculpting low-end punch, vocal presence, spatial width, and immersive atmospheres.
                </p>
                <div className="text-xs text-neutral-500 space-y-1 font-mono">
                  <div>· Rap & Hip-Hop Beat Production</div>
                  <div>· Ambient Soundscapes & Scoring</div>
                  <div>· Stem Mixing & Mastering</div>
                </div>
              </div>

              <div id="marketing" className="p-8 rounded-2xl bg-neutral-800/40 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-105 transition-transform border border-neutral-700">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-interactive">
                  Strategic Digital Marketing
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed text-interactive mb-6">
                  Bridging artistic output with market traction. Crafting data-informed distribution strategies, audience funnels, and viral release rollouts.
                </p>
                <div className="text-xs text-neutral-500 space-y-1 font-mono">
                  <div>· Campaign Strategy & Positioning</div>
                  <div>· Social Video Distribution</div>
                  <div>· Audience Retention Architecture</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: CONTACT */}
        <section id="contact" className="py-20 border-t border-neutral-800 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-interactive">
                Initiate a Project
              </h2>
              <p className="text-sm text-neutral-400 text-interactive">
                Commercial visual productions, custom music scoring & rap production, or marketing campaigns.
              </p>
              <div className="flex items-center gap-4 text-xs text-neutral-500 pt-2 font-mono">
                <span>Nittabuwa, Sri Lanka</span>
                <span>·</span>
                <span>thawasararumeth1@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://whatsapp.com/channel/0029VbE66jzC6ZvdUiQRyF3V"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-neutral-900 rounded-lg text-sm font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER & SOCIALS */}
      <footer className="border-t border-neutral-800/80 py-12 px-6 bg-neutral-950">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://www.instagram.com/rumeth_thawasara/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-all duration-200 card-hover-glow"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-none stroke-currentColor stroke-2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span className="text-xs font-medium">Instagram</span>
            </a>

            <a
              href="https://www.tiktok.com/@rumeth_thawasara"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-all duration-200 card-hover-glow"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.41a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.28 6.28 0 0 0 1.86-4.48V8.71a8.21 8.21 0 0 0 4.91 1.62v-3.4a4.85 4.85 0 0 1-1-.24z"/>
              </svg>
              <span className="text-xs font-medium">TikTok</span>
            </a>

            <a
              href="https://wa.me/94717923228"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-all duration-200 card-hover-glow"
              aria-label="WhatsApp"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="text-xs font-medium">WhatsApp</span>
            </a>

            <a
              href="https://youtube.com/@rumeth_thawasara"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 border border-neutral-800 hover:border-neutral-600 text-neutral-400 hover:text-white transition-all duration-200 card-hover-glow"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-xs font-medium">YouTube</span>
            </a>
          </div>

          <div id="footerCopyright" className="text-xs text-neutral-500 pt-2 text-interactive flex items-center justify-center flex-wrap">
            <span>© {new Date().getFullYear()} Rumeth Thawasara · Nittabuwa, Sri Lanka · All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
