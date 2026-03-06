"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Moon, Sparkles, Star, ChevronRight, Share2, Heart } from "lucide-react";
import React, { useState, useEffect } from "react";

// --- Components & Utils ---

/**
 * Floating Particle for background depth
 */
const Particle = ({ delay, size, top, left, duration }: { delay: number, size: number, top: string, left: string, duration: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{
      opacity: [0, 0.4, 0],
      y: [-20, -100],
      x: [0, Math.random() * 20 - 10]
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay: delay,
      ease: "linear"
    }}
    className="absolute rounded-full bg-gold-400/20 blur-sm pointer-events-none"
    style={{ top, left, width: size, height: size }}
  />
);

/**
 * Geometric Islamic Pattern SVG Overlay
 */
const IslamicPattern = () => (
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden select-none">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="islamic-grid" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0 0 L100 100 M0 100 L100 0" stroke="currentColor" strokeWidth="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#islamic-grid)" />
    </svg>
  </div>
);

export default function IftarInviteRedesign() {
  const [mounted, setMounted] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      } as const
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#020617] selection:bg-gold-500/30 font-sans">

      {/* --- Advanced Background Layer --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#064e3b_0%,transparent_50%)] opacity-40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,#1e1b4b_0%,transparent_50%)] opacity-30"></div>

      <IslamicPattern />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Particle
            key={i}
            delay={Math.random() * 5}
            size={Math.random() * 4 + 2}
            top={`${Math.random() * 100}%`}
            left={`${Math.random() * 100}%`}
            duration={5 + Math.random() * 5}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 text-gold-500/10 blur-[1px] hidden lg:block"
      >
        <Moon size={200} strokeWidth={0.5} />
      </motion.div>

      {/* --- Initial Intro Button (If not revealed) --- */}
      <AnimatePresence>
        {!isRevealed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
            className="z-50 text-center"
          >
            <motion.div
              animate={{ boxShadow: ["0 0 20px rgba(234,179,8,0.2)", "0 0 40px rgba(234,179,8,0.4)", "0 0 20px rgba(234,179,8,0.2)"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-1 rounded-full bg-linear-to-tr from-gold-500 to-amber-200 cursor-pointer"
              onClick={() => setIsRevealed(true)}
            >
              <div className="bg-[#020617] px-10 py-4 rounded-full flex items-center space-x-3 group active:scale-95 transition-all">
                <span className="text-gold-400 font-bold tracking-widest uppercase text-sm">Open Invitation</span>
                <ChevronRight className="text-gold-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
            <p className="mt-4 text-zinc-500 text-xs tracking-widest uppercase">Click to Reveal Experience</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Main Content (Revealed) --- */}
      {isRevealed && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 w-full max-w-2xl px-4 py-12 flex flex-col items-center"
        >
          {/* Card Wrapper with 3D Parallax Tilt */}
          <motion.div
            whileHover={{ rotateX: 2, rotateY: 2 }}
            style={{ perspective: 1000 }}
            className="w-full relative group"
          >
            {/* Outer Glow Shadow */}
            <div className="absolute -inset-1 bg-linear-to-r from-gold-600/20 via-emerald-600/20 to-gold-600/20 rounded-[2.5rem] blur-2xl group-hover:opacity-100 transition duration-1000 opacity-70"></div>

            <div className="relative glass-panel rounded-4xl p-6 sm:p-16 border border-white/10 shadow-3xl flex flex-col items-center text-center backdrop-blur-3xl overflow-hidden">

              {/* Inner Light Sweep Animation */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "linear" }}
                className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-[-30deg] pointer-events-none"
              />

              {/* Header Floating Icons */}
              <motion.div variants={itemVariants} className="mb-6 sm:mb-10 relative">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-linear-to-br from-gold-500/20 to-emerald-500/20 flex items-center justify-center border border-gold-500/30 relative shadow-[0_0_50px_rgba(234,179,8,0.2)]"
                >
                  <Moon className="text-gold-400 w-8 h-8 sm:w-12 sm:h-12" />
                  <Sparkles className="absolute top-1 right-1 sm:top-2 sm:right-2 text-gold-300 w-3 h-3 sm:w-5 sm:h-5 animate-pulse" />
                </motion.div>
                <div className="absolute -z-10 bg-gold-500/10 blur-3xl w-full h-full inset-0 rounded-full scale-150"></div>
              </motion.div>

              {/* Title & Batch */}
              <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 w-full">
                <motion.div variants={itemVariants} className="flex items-center justify-center space-x-2">
                  <div className="h-px w-6 sm:w-8 bg-gold-500/40"></div>
                  <span className="text-emerald-400 text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase">Ramadan Kareem</span>
                  <div className="h-px w-6 sm:w-8 bg-gold-500/40"></div>
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-4xl sm:text-7xl font-extrabold tracking-tighter text-white">
                  Iftar <span className="text-gradient-gold">2026</span>
                </motion.h1>

                <motion.p variants={itemVariants} className="text-zinc-400 font-medium tracking-widest text-xs sm:text-base border-y border-white/5 py-2 sm:py-3 scale-x-105">
                  2K21 A · SCHOOL FRIENDS REUNION
                </motion.p>
              </div>

              {/* Emotional Message */}
              <motion.p variants={itemVariants} className="text-zinc-300 text-base sm:text-xl leading-relaxed italic font-light max-w-sm sm:max-w-md mb-8 sm:mb-12">
                "Let’s gather together for a beautiful evening of Iftar, friendship, and unforgettable memories."
              </motion.p>

              {/* Detailed Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full mb-8 sm:mb-12">
                <motion.div variants={itemVariants} className="flex flex-row sm:flex-col items-center sm:justify-center bg-white/5 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 group-hover:bg-white/10 transition-colors text-left sm:text-center space-x-4 sm:space-x-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 sm:mb-3">
                    <MapPin className="text-emerald-400 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-gold-400 text-[8px] sm:text-[10px] uppercase font-bold tracking-widest mb-0.5">Location</p>
                    <p className="text-white text-sm sm:text-base font-semibold">Samha Home</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-row sm:flex-col items-center sm:justify-center bg-white/5 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/10 group-hover:bg-white/10 transition-colors text-left sm:text-center space-x-4 sm:space-x-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 sm:mb-3">
                    <Clock className="text-gold-400 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="text-gold-400 text-[8px] sm:text-[10px] uppercase font-bold tracking-widest mb-0.5">Time</p>
                    <p className="text-white text-sm sm:text-base font-semibold">At Sunset (Maghrib)</p>
                  </div>
                </motion.div>
              </div>

              {/* CTA Section */}
              <motion.div variants={itemVariants} className="w-full flex flex-col items-center space-y-4 sm:space-y-6">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(234,179,8,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full relative overflow-hidden px-6 py-4 sm:px-8 sm:py-5 rounded-full bg-linear-to-r from-gold-600 via-gold-500 to-amber-400 text-slate-950 font-black text-base sm:text-lg shadow-xl uppercase tracking-widest"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Join the Gathering <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-white/30 skew-x-[-20deg]"
                  />
                </motion.button>

                <div className="flex items-center space-x-6">
                  <motion.button whileHover={{ scale: 1.1 }} className="flex items-center text-zinc-400 text-xs gap-2 hover:text-white transition-colors">
                    <Share2 size={16} /> Share
                  </motion.button>
                  <div className="h-4 w-px bg-white/10"></div>
                  <motion.button whileHover={{ scale: 1.1 }} className="flex items-center text-zinc-400 text-xs gap-2 hover:text-white transition-colors">
                    <Heart size={16} /> Heart
                  </motion.button>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Footer Text */}
          <motion.p variants={itemVariants} className="mt-8 text-zinc-500 text-[10px] tracking-[0.5em] uppercase text-center opacity-50">
            Powered by friendship & memory
          </motion.p>
        </motion.div>
      )}

      {/* --- Overlay Vignette --- */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]"></div>
    </div>
  );
}
