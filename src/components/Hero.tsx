"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const handleScroll = () => {
    document.querySelector("#videos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface-950 via-surface-900 to-surface-950" />

      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold-400/[0.02] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/[0.01] rounded-full blur-3xl" />
      </div>

      {/* Sound wave lines (decorative) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-gold-400 rounded-full"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gold-400/80 uppercase tracking-[0.3em] text-xs md:text-sm font-medium"
          >
            Guitarrista Clásico
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
          >
            Carlos
            <br />
            <span className="gold-gradient-text">Quintero</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeInOut" }}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-surface-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Guitarrista clásico con raíces en Mérida, Venezuela. Mi dedicación a
            la música me ha llevado a explorar las profundidades de la guitarra
            clásica, creando experiencias sonoras únicas y emotivas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="pt-4"
          >
            <a
              href="#videos"
              onClick={(e) => {
                e.preventDefault();
                handleScroll();
              }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold-500 hover:bg-gold-400 text-surface-950 font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25 hover:-translate-y-0.5"
            >
              Descubre mi música
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-surface-500 hover:text-gold-400 transition-colors duration-300"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>
    </section>
  );
}
