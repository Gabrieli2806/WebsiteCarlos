"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";

interface Video {
  id: string;
  title: string;
  description: string;
  isShort?: boolean;
}

const videos: Video[] = [
  {
    id: "Y6RMb7Qs6uU",
    title: "Obra Solista — Alfonso Montes",
    description:
      "Interpretando una obra solista del maestro Alfonso Montes, cada nota resuena profundamente, transmitiendo una emoción intensa y duradera.",
  },
  {
    id: "n6fsWtQd_54",
    title: "Milonga — Alfonso Montes",
    description:
      "Una de las composiciones más emblemáticas del maestro Alfonso Montes, evocando la atmósfera y el ritmo característicos de la milonga.",
  },
  {
    id: "GYGMVIgFko8",
    title: "Suite Op. 71 N° 3 — Mauro Giuliani",
    description:
      "Una exquisita composición para tres guitarras. Una obra maestra del repertorio clásico.",
  },
  {
    id: "MIf8r7IUdB4",
    title: "Interpretación Musical",
    description:
      "Una interpretación especial que captura la esencia de la guitarra clásica.",
  },
  {
    id: "HZp6aboPp5g",
    title: "Short Musical",
    description: "Un momento especial capturado en formato corto.",
    isShort: true,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const openVideo = useCallback((videoId: string, isShort?: boolean) => {
    if (isShort) {
      window.open(`https://youtube.com/shorts/${videoId}`, "_blank", "noopener,noreferrer");
      return;
    }
    setActiveVideo(videoId);
  }, []);

  const closeVideo = useCallback(() => {
    setActiveVideo(null);
  }, []);

  return (
    <>
      <section id="videos" className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/50 to-surface-950" />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="section-title">
              <span className="gold-gradient-text">Interpretaciones</span>
            </h2>
            <p className="section-subtitle mt-4">
              Una selección de mis interpretaciones más significativas del
              repertorio clásico.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {videos.map((video) => (
              <motion.div
                key={video.id}
                variants={item}
                className="glass-card glass-card-hover group cursor-pointer overflow-hidden"
                onClick={() => openVideo(video.id, video.isShort)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-gold-500/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/30">
                      <Play size={22} fill="black" className="text-surface-950 ml-0.5" />
                    </div>
                  </div>
                  {video.isShort && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 bg-red-600/90 text-white text-xs font-semibold rounded">
                      Short
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-white group-hover:text-gold-400 transition-colors duration-300 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-surface-400 leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <button
            onClick={closeVideo}
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
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
              title="YouTube Video"
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
