'use client';

import { motion, cubicBezier } from 'framer-motion';
import '@/components/Hero.css';
import { HeroProps } from '@/interfaces/hero';
import { useRef, useEffect } from 'react';

const banner = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
} as const;

const letterAnimation = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: cubicBezier(0.6, 0.01, -0.05, 0.95),
      duration: 1,
    },
  },
};

export const Hero = ({ homeInfo }: HeroProps) => {
  const { encabezado_1, encabezado_2, encabezado_3, descripcion, video } =
    homeInfo;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.1; // volumen entre 0.0 (mute) y 1.0 (máximo)
    }
  }, []);

  return (
    <section className="relative mx-auto flex max-w-[1440px] flex-col justify-center gap-12 md:mt-0 lg:gap-0">
      <div className="banner mx-auto flex w-full max-w-[1400px] grow flex-col">
        <BannerRow title={encabezado_1} />
        <BannerRow title={encabezado_2} delay={1} className="sm:self-center" />
        <BannerRow title={encabezado_3} delay={2} className="sm:self-end" />
      </div>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 1.2,
        }}
        className="float-text max-w-[450px] sm:self-center lg:absolute lg:top-14 lg:mt-4"
      >
        {descripcion}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: cubicBezier(0.76, 0, 0.24, 1),
          duration: 1,
          delay: 1.4,
        }}
        className="aspect-video w-full max-w-[840px] self-center"
      >
        <video
          ref={videoRef}
          controls
          controlsList="nodownload"
          preload="metadata"
          className="aspect-video h-auto w-full max-w-4xl rounded-lg shadow-2xl"
        >
          <source src={video} type="video/mp4" />
        </video>
      </motion.div>
    </section>
  );
};

const BannerRow = ({
  title,
  className,
  delay,
}: {
  title: string;
  className?: string;
  delay?: number;
}) => {
  return (
    <div className={`banner-row ${className ? `${className}` : ''}`}>
      <AnimatedLetters title={title} delayNumber={delay} />
    </div>
  );
};

const AnimatedLetters = ({
  title,
  disabled,
  delayNumber,
}: {
  title: string;
  disabled?: boolean;
  delayNumber?: number;
}) => {
  return (
    <motion.h1
      className="row-title"
      variants={disabled ? undefined : banner}
      initial="initial"
      animate="animate"
      transition={{ duration: 1, delay: delayNumber }}
    >
      {[...title].map((letter, key) => (
        <motion.span
          key={key}
          className="row-letter"
          variants={disabled ? undefined : letterAnimation}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};
