"use client";

import { motion } from "framer-motion";
import { Music, BookOpen, Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    year: "2024 – 2025",
    title: "Profesor Particular de Música",
    icon: Music,
  },
  {
    year: "2022 – 2023",
    title: "Atención al Cliente",
    subtitle: "Delicateces El Faraón",
    icon: Briefcase,
  },
  {
    year: "2020 – 2022",
    title: "Profesor Particular Educación Media",
    subtitle: "Matemáticas, Física y Química",
    icon: BookOpen,
  },
];

const education = [
  {
    year: "2018 – 2023",
    title: "U.E Colegio San Martín de Porres",
    icon: GraduationCap,
  },
  {
    year: "2012 – 2018",
    title: "U.E Fermín Ruiz Valero",
    icon: GraduationCap,
  },
];

export default function About() {
  return (
    <section id="acerca" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/40 to-surface-950" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="section-title">
            <span className="gold-gradient-text">Acerca de Mí</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-surface-300 leading-relaxed">
              Soy Carlos Quintero, un apasionado guitarrista clásico. Mi
              formación se ha centrado en la interpretación y el estudio de la
              guitarra clásica, lo que me ha llevado a desarrollar un profundo
              amor por este instrumento y su rica tradición musical.
            </p>
            <p className="text-surface-300 leading-relaxed">
              Como concertista de música clásica, he tenido el privilegio de
              compartir mi música con el público en diversos escenarios. Me
              encanta la conexión que se crea entre el intérprete y el oyente, y
              me esfuerzo por transmitir emociones y crear experiencias
              significativas en cada una de mis presentaciones.
            </p>
            <p className="text-surface-300 leading-relaxed">
              También me dedico a la enseñanza de la música. Como profesor
              particular, comparto mi conocimiento con estudiantes de todos los
              niveles, desde principiantes hasta avanzados. Me apasiona ayudar a
              mis alumnos a descubrir su potencial musical.
            </p>
            <p className="text-surface-300 leading-relaxed">
              Desde hace 2 años, formo parte del Sistema de Orquestas Nacionales
              de Mérida, donde participo activamente en la Orquesta de Guitarras.
              Esta experiencia me ha permitido crecer como músico y como persona.
            </p>
            <p className="text-gold-400 font-display text-lg font-semibold italic mt-6">
              ¡Espero tener la oportunidad de compartir mi música contigo!
            </p>
          </motion.div>

          {/* Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Work Experience */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center">
                  <Briefcase size={16} className="text-gold-400" />
                </div>
                Experiencia Laboral
              </h3>

              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="relative pl-8 border-l border-surface-700"
                  >
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-gold-400 -translate-x-[5px] shadow-sm shadow-gold-400/50" />
                    <span className="text-xs text-gold-400/80 font-medium tracking-wide uppercase">
                      {item.year}
                    </span>
                    <h4 className="text-white font-medium mt-0.5">
                      {item.title}
                    </h4>
                    {item.subtitle && (
                      <p className="text-surface-400 text-sm mt-0.5">
                        {item.subtitle}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="glass-card p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center">
                  <GraduationCap size={16} className="text-gold-400" />
                </div>
                Formación Académica
              </h3>

              <div className="space-y-6">
                {education.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="relative pl-8 border-l border-surface-700"
                  >
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-gold-400 -translate-x-[5px] shadow-sm shadow-gold-400/50" />
                    <span className="text-xs text-gold-400/80 font-medium tracking-wide uppercase">
                      {item.year}
                    </span>
                    <h4 className="text-white font-medium mt-0.5">
                      {item.title}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
