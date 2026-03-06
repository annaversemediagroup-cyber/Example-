/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Instagram, 
  Twitter, 
  Mail, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight,
  MapPin,
  Clock
} from 'lucide-react';

// --- Types ---

interface Photo {
  id: number;
  url: string;
  title: string;
  category: 'Portrait' | 'Landscape' | 'Street' | 'Editorial';
  description: string;
}

// --- Mock Data ---

const PHOTOS: Photo[] = [
  {
    id: 1,
    url: 'https://picsum.photos/seed/photo1/1200/1600',
    title: 'Golden Hour Silence',
    category: 'Landscape',
    description: 'Captured in the high deserts of Nevada.'
  },
  {
    id: 2,
    url: 'https://picsum.photos/seed/photo2/1200/1600',
    title: 'Urban Geometry',
    category: 'Street',
    description: 'The intersection of light and shadow in Tokyo.'
  },
  {
    id: 3,
    url: 'https://picsum.photos/seed/photo3/1200/1600',
    title: 'The Gaze',
    category: 'Portrait',
    description: 'A study in natural light and raw emotion.'
  },
  {
    id: 4,
    url: 'https://picsum.photos/seed/photo4/1200/1600',
    title: 'Velvet Dreams',
    category: 'Editorial',
    description: 'Fashion editorial for Vogue Italia.'
  },
  {
    id: 5,
    url: 'https://picsum.photos/seed/photo5/1200/1600',
    title: 'Misty Peaks',
    category: 'Landscape',
    description: 'Dawn in the Scottish Highlands.'
  },
  {
    id: 6,
    url: 'https://picsum.photos/seed/photo6/1200/1600',
    title: 'Neon Nights',
    category: 'Street',
    description: 'Rainy reflections in New York City.'
  },
  {
    id: 7,
    url: 'https://picsum.photos/seed/photo7/1200/1600',
    title: 'Serenity',
    category: 'Portrait',
    description: 'Minimalist portraiture.'
  },
  {
    id: 8,
    url: 'https://picsum.photos/seed/photo8/1200/1600',
    title: 'Industrial Grace',
    category: 'Editorial',
    description: 'Bridging the gap between machine and human.'
  }
];

const CATEGORIES = ['All', 'Portrait', 'Landscape', 'Street', 'Editorial'] as const;

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-lg py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif italic tracking-tighter flex items-center gap-2">
          <Camera className="w-6 h-6" />
          <span>Lumina</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase tracking-[0.2em] font-medium text-white/60 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
            Book a Session
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-serif italic"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80&w=2000" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.4em] mb-6 text-white/70"
        >
          Visual Storyteller & Photographer
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-9xl font-serif italic mb-8 leading-tight"
        >
          Capturing the <br /> 
          <span className="not-italic font-sans font-light">Invisible</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12"
        >
          <a href="#work" className="group flex items-center gap-3 text-xs uppercase tracking-widest border-b border-white/30 pb-2 hover:border-white transition-all">
            View Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

const Gallery = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const filteredPhotos = filter === 'All' 
    ? PHOTOS 
    : PHOTOS.filter(p => p.category === filter);

  return (
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif italic mb-4">Selected Works</h2>
          <p className="text-white/50 max-w-md text-sm leading-relaxed">
            A collection of moments frozen in time, exploring the delicate balance between light, shadow, and human experience.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${
                filter === cat 
                  ? 'bg-white text-black border-white' 
                  : 'border-white/20 text-white/50 hover:border-white/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              layout
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer bg-zinc-900"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img 
                src={photo.url} 
                alt={photo.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <p className="text-[10px] uppercase tracking-widest text-white/60 mb-2">{photo.category}</p>
                <h3 className="text-2xl font-serif italic">{photo.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedPhoto(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white">
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 items-center">
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={selectedPhoto.url} 
                alt={selectedPhoto.title}
                className="max-h-[70vh] object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="max-w-md">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">{selectedPhoto.category}</p>
                <h2 className="text-4xl font-serif italic mb-6">{selectedPhoto.title}</h2>
                <p className="text-white/60 leading-relaxed mb-8">{selectedPhoto.description}</p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40">
                    <MapPin className="w-3 h-3" /> Location Unknown
                  </div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40">
                    <Clock className="w-3 h-3" /> 2024
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=1000" 
              alt="Photographer" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hidden md:block">
            <p className="text-4xl font-serif italic mb-2">12+</p>
            <p className="text-[10px] uppercase tracking-widest text-white/50">Years of Experience in Visual Arts</p>
          </div>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.5em] text-white/40 mb-8">The Philosophy</h2>
          <h3 className="text-4xl md:text-5xl font-serif italic mb-8 leading-tight">
            I don't just take photos; <br />
            <span className="not-italic font-sans font-light">I document emotions.</span>
          </h3>
          <div className="space-y-6 text-white/60 leading-relaxed">
            <p>
              Based in the heart of the Pacific Northwest, my work is deeply influenced by the rugged landscapes and the quiet, introspective moments of urban life. I believe that every frame should tell a story that words cannot reach.
            </p>
            <p>
              My approach is minimalist and intentional. I prefer natural light over artificial, and raw emotion over staged perfection. Whether it's a high-fashion editorial or a quiet street corner, I seek the soul of the subject.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/10">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-4">Exhibitions</h4>
              <ul className="text-sm space-y-2">
                <li>MoMA, NYC - 2023</li>
                <li>Tate Modern, London - 2022</li>
                <li>Tokyo Art Fair - 2021</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-white/40 mb-4">Awards</h4>
              <ul className="text-sm space-y-2">
                <li>Sony World Photo - 2023</li>
                <li>National Geographic - 2022</li>
                <li>IPA Gold Medal - 2020</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-serif italic mb-8">Let's create <br /> something timeless.</h2>
        <p className="text-white/50 mb-12 max-w-lg mx-auto">
          Available for international assignments, editorials, and private commissions.
        </p>
        
        <form className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40">Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-white/30 transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-white/30 transition-colors" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-white/40">Message</label>
            <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:outline-none focus:border-white/30 transition-colors" placeholder="Tell me about your project..."></textarea>
          </div>
          <button className="w-full py-5 bg-white text-black font-medium uppercase tracking-[0.2em] text-xs rounded-lg hover:bg-zinc-200 transition-colors">
            Send Message
          </button>
        </form>

        <div className="mt-20 flex justify-center gap-12">
          <a href="#" className="text-white/40 hover:text-white transition-colors"><Instagram /></a>
          <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter /></a>
          <a href="#" className="text-white/40 hover:text-white transition-colors"><Mail /></a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-serif italic tracking-tighter">Lumina</div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
          © 2024 Lumina Photography. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/40">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
