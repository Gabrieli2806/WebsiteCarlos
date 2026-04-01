"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/50 to-surface-950" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="section-title">
            <span className="gold-gradient-text">Contacto</span>
          </h2>

          <p className="text-surface-400 text-lg mt-6 mb-10 leading-relaxed">
            ¿Interesado en clases de guitarra clásica o en una presentación?
            No dudes en contactarme.
          </p>

          <motion.a
            href="mailto:carquinpar01@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 glass-card border-gold-500/20 hover:border-gold-400/40 hover:bg-gold-500/[0.05] transition-all duration-500 group"
          >
            <Mail
              size={20}
              className="text-gold-400 group-hover:text-gold-300 transition-colors"
            />
            <span className="text-white font-medium">
              carquinpar01@gmail.com
            </span>
            <ArrowUpRight
              size={16}
              className="text-surface-500 group-hover:text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
