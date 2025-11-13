'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { VideosProps } from '@/interfaces/videos';

export const Videos = ({ videos }: VideosProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [playingVideos, setPlayingVideos] = useState<Record<number, boolean>>(
    {},
  );
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const handlePlayClick = (id: number) => {
    const target = videoRefs.current[id];
    if (target) {
      target.play();
    }
  };

  const handleVideoPlay = (id: number) => {
    setPlayingVideos((prev) => ({ ...prev, [id]: true }));
  };

  const handleVideoPause = (id: number) => {
    setPlayingVideos((prev) => ({ ...prev, [id]: false }));
  };

  // Obtener todas las categorías únicas de los videos
  const categories = Array.from(
    new Set(
      videos.flatMap((video) =>
        video.categorias.map((categoria) => categoria.nombre),
      ),
    ),
  );

  // Filtrar videos por categoría seleccionada
  const filteredVideos =
    selectedCategory === null
      ? videos
      : videos.filter((video) =>
          video.categorias.some(
            (categoria) => categoria.nombre === selectedCategory,
          ),
        );

  return (
    <section className="px-8 py-24" id="videos">
      {/* Navigation Bar */}
      <div className="mx-auto max-w-6xl">
        <nav className="flex flex-wrap border-b-2 border-gray-100 pb-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`rounded-xl px-4 py-1 text-lg font-medium transition-colors duration-200 hover:cursor-pointer ${
              selectedCategory === null
                ? 'bg-orange-200'
                : 'text-gray-700 hover:text-orange-400'
            }`}
          >
            Todos
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-xl px-4 py-1 text-lg font-medium transition-colors duration-200 hover:cursor-pointer ${
                selectedCategory === category
                  ? 'bg-orange-200'
                  : 'text-gray-700 hover:text-orange-400'
              }`}
            >
              {category}
            </button>
          ))}
        </nav>
      </div>

      {/* Videos Grid */}
      <div className="mx-auto mt-4 max-w-6xl">
        <motion.div
          layout
          className="mx-auto flex flex-wrap justify-center gap-4 md:justify-start md:gap-8"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredVideos.length > 0 &&
              filteredVideos.map((video, index) => (
                <motion.div
                  layout
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                  className="group cursor-pointer"
                >
                  <div className="before:z-3 rounded-4xl relative border-[rgba(255,255,255,0.06)] bg-[#0b0b0c] p-[7px] shadow-[0_10px_30px_rgba(0,0,0,0.25),inset_0_0_0_1px_rgba(255,255,255,0.06)] before:absolute before:left-1/2 before:top-3 before:h-2.5 before:w-10 before:-translate-x-1/2 before:rounded-[52px] before:bg-black before:shadow-[0_2px_6px_rgba(0,0,0,0.25)] before:content-[''] lg:rounded-[40px] lg:before:h-[15px] lg:before:w-[58px]">
                    <div className="aspect-390/844 relative h-[260px] w-full max-w-[360px] overflow-hidden rounded-3xl bg-black md:h-[300px] lg:h-[450px] lg:rounded-[40px]">
                      {video.url && (
                        <video
                          ref={(element) => {
                            videoRefs.current[video.id] = element;
                          }}
                          src={video.url}
                          controls={Boolean(playingVideos[video.id])}
                          autoPlay={false}
                          loop
                          onPlay={() => handleVideoPlay(video.id)}
                          onPause={() => handleVideoPause(video.id)}
                          className="block h-full w-full object-cover"
                        />
                      )}
                      {!playingVideos[video.id] && (
                        <button
                          type="button"
                          onClick={() => handlePlayClick(video.id)}
                          aria-label={`Reproducir ${video.titulo}`}
                          className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 hover:cursor-pointer focus:bg-opacity-30 focus:outline-none"
                        >
                          <span className="rounded-full bg-white bg-opacity-90 p-4 opacity-0 transition-opacity duration-300 focus:opacity-100 group-hover:opacity-100">
                            <svg
                              className="h-12 w-12 text-gray-900"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
