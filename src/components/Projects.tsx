"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  ZoomIn,
} from "lucide-react";
import Image from "next/image";

/* ─── Data ─── */
const panoramicImages = Array.from({ length: 7 }, (_, i) => ({
  src: `/images/panoramic/photo${i + 1}.jpg`,
  alt: `Foto panorámica ${i + 1}`,
}));

const verticalImages = Array.from({ length: 9 }, (_, i) => ({
  src: `/images/vertical/photo${i + 1}.jpg`,
  alt: `Foto vertical ${i + 1}`,
}));

const projectVideos = [
  "ADOgqp92z2I",
  "BxwdENAc2uI",
  "iQGDvK3CbN4",
  "FBQnXYI3ktY",
  "qgs7oJlVI34",
  "EbNdDpjDo2Y",
];

/* ─── Carousel Component ─── */
function ImageCarousel({
  images,
  aspect,
}: {
  images: { src: string; alt: string }[];
  aspect: "panoramic" | "vertical";
}) {
  const [current, setCurrent] = useState(0);
  const [modalImage, setModalImage] = useState<number | null>(null);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  const openModal = (index: number) => setModalImage(index);
  const closeModal = () => setModalImage(null);

  const modalPrev = useCallback(() => {
    setModalImage((c) =>
      c === null ? null : c === 0 ? images.length - 1 : c - 1
    );
  }, [images.length]);

  const modalNext = useCallback(() => {
    setModalImage((c) =>
      c === null ? null : c === images.length - 1 ? 0 : c + 1
    );
  }, [images.length]);

  return (
    <>
      <div className="relative group">
        {/* Main Image */}
        <div
          className={`relative overflow-hidden rounded-2xl bg-surface-900 cursor-pointer ${
            aspect === "panoramic" ? "aspect-video" : "aspect-[9/16] max-h-[70vh] mx-auto max-w-sm"
          }`}
          onClick={() => openModal(current)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={images[current].src}
                alt={images[current].alt}
                fill
                className={aspect === "panoramic" ? "object-cover" : "object-contain"}
                sizes={aspect === "panoramic" ? "100vw" : "400px"}
                priority={current === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Zoom overlay */}
          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <ZoomIn
              size={40}
              className="text-white opacity-0 group-hover:opacity-70 transition-opacity duration-300"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold-500/90 hover:bg-gold-400 text-surface-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
          aria-label="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold-500/90 hover:bg-gold-400 text-surface-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
          aria-label="Siguiente"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-gold-400 w-6"
                : "bg-surface-600 hover:bg-surface-500"
            }`}
            aria-label={`Imagen ${i + 1}`}
          />
        ))}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {modalImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Cerrar"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); modalPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gold-500/80 hover:bg-gold-400 text-surface-950 flex items-center justify-center transition-all duration-300 z-10"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); modalNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gold-500/80 hover:bg-gold-400 text-surface-950 flex items-center justify-center transition-all duration-300 z-10"
              aria-label="Siguiente"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              key={modalImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[modalImage].src}
                alt={images[modalImage].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Main Projects Component ─── */
export default function Projects() {
  const [activeProjectVideo, setActiveProjectVideo] = useState<string | null>(null);

  return (
    <>
      <section id="proyectos" className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/30 to-surface-950" />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="section-title">
              <span className="gold-gradient-text">Proyectos</span>
            </h2>
            <p className="section-subtitle mt-4">
              Galería fotográfica y videos de mis proyectos musicales.
            </p>
          </motion.div>

          {/* Panoramic Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h3 className="font-display text-2xl font-semibold text-white mb-2 text-center">
              Galería Panorámica
            </h3>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8" />
            <ImageCarousel images={panoramicImages} aspect="panoramic" />
          </motion.div>

          {/* Project Videos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h3 className="font-display text-2xl font-semibold text-white mb-2 text-center">
              Videos de Proyectos
            </h3>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {projectVideos.map((videoId, i) => (
                <motion.div
                  key={videoId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="glass-card glass-card-hover group cursor-pointer overflow-hidden"
                  onClick={() => setActiveProjectVideo(videoId)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt={`Proyecto de video ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-gold-500/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/30">
                        <Play size={18} fill="black" className="text-surface-950 ml-0.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vertical Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-semibold text-white mb-2 text-center">
              Galería Vertical
            </h3>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-8" />
            <ImageCarousel images={verticalImages} aspect="vertical" />
          </motion.div>
        </div>
      </section>

      {/* Project Video Modal */}
      {activeProjectVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setActiveProjectVideo(null)}
        >
          <button
            onClick={() => setActiveProjectVideo(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Cerrar video"
          >
            <X size={32} />
          </button>
          <div
            className="w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeProjectVideo}?autoplay=1&rel=0`}
              title="Video del proyecto"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
