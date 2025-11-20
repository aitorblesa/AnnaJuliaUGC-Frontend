'use client';

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GalleryProps } from '@/interfaces/gallery';

export const Gallery = ({ images }: GalleryProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <section id="galeria" className="px-4 py-8 md:px-8">
      <h1 className="text-center text-3xl font-semibold uppercase md:text-6xl">
        Explora los distintos
        <br />
        trabajos realizados
      </h1>

      {/* Masonry grid */}
      <div
        ref={ref}
        className="mx-auto mt-12 max-w-6xl columns-2 gap-4 [column-fill:balance] sm:columns-3 lg:columns-4 xl:columns-5"
      >
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="mb-4 break-inside-avoid overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.03]"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 20 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  delay: index * 0.1, // aparición escalonada
                  duration: 0.6,
                  ease: 'easeOut',
                },
              },
            }}
          >
            <img
              src={image.url}
              alt={`Imagen ${index + 1}`}
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
