'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ImagesProps } from '@/interfaces/images';

export const Imagenes = ({ images }: ImagesProps) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { amount: 0.3, once: true });

  const positions = [
    { x: -220, y: -300 }, //pesas
    { x: -40, y: -180 }, //cara
    { x: 320, y: 100 }, //crema
    { x: 120, y: 20 }, //ropa
    { x: -240, y: 40 }, //black
    { x: 120, y: -280 }, //impact
  ];

  // Definir dimensiones para cada imagen
  const imageDimensions = [
    { width: 'w-56', height: 'h-64' },
    { width: 'w-64', height: 'h-80' },
    { width: 'w-64', height: 'h-48' },
    { width: 'w-64', height: 'h-48' },
    { width: 'w-56', height: 'h-56' },
    { width: 'w-48', height: 'h-62' },
  ];

  useEffect(() => {
    if (inView) {
      // secuencia: primero fade-in, luego movimiento
      const runSequence = async () => {
        await controls.start('fadeIn');
        await controls.start('move');
      };
      runSequence();
    }
  }, [inView, controls]);

  return (
    <section ref={ref} id="galeria" className="px-4 pt-32 md:px-16">
      <h1 className="text-center text-4xl font-semibold uppercase md:text-6xl">
        Explora los distintos
        <br />
        trabajos realizados
      </h1>
      <div className="relative min-h-screen">
        {images.slice(0, 6).map((image, index) => (
          <motion.img
            key={image.id}
            src={image.url}
            alt={`Imagen ${index + 1}`}
            className={`transition-scale absolute left-[45%] top-1/2 ${imageDimensions[index].width} ${imageDimensions[index].height} rounded-2xl object-cover shadow-lg duration-300 hover:scale-105`}
            initial={{
              x: '-50%',
              y: '-50%',
              opacity: 0,
              scale: 0.9,
            }}
            animate={controls}
            variants={{
              fadeIn: {
                opacity: 1,
                scale: 1,
                transition: {
                  delay: index * 0.1, // aparecen escalonadas
                  duration: 0.8,
                  ease: 'easeOut',
                },
              },
              move: {
                x: positions[index].x,
                y: positions[index].y,
                transition: {
                  delay: index * 0.2,
                  duration: 1.2,
                  ease: 'easeOut',
                },
              },
            }}
          />
        ))}
      </div>
    </section>
  );
};
