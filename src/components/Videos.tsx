'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
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
      videos.flatMap((video) => video.categorias.map((cat) => cat.nombre)),
    ),
  );

  // Filtrar videos por categoría seleccionada
  const filteredVideos =
    selectedCategory === null
      ? videos
      : videos.filter((video) =>
          video.categorias.some((cat) => cat.nombre === selectedCategory),
        );

  return (
    <section className="h-[calc(100dvh-88px)] pt-32 md:px-16" id="videos">
      {/* Navigation Bar */}
      <div className="mx-auto max-w-6xl">
        <nav className="flex flex-wrap gap-4 border-b-2 border-gray-100 pb-2">
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
      <div className="mx-auto mt-16 max-w-6xl">
        <div className="mx-auto flex flex-wrap gap-8">
          {filteredVideos.length > 0 &&
            filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  {video.url && (
                    <video
                      ref={(element) => {
                        videoRefs.current[video.id] = element;
                      }}
                      src={video.url}
                      controls={Boolean(playingVideos[video.id])}
                      autoPlay={false}
                      className="h-[400px]"
                      loop
                      onPlay={() => handleVideoPlay(video.id)}
                      onPause={() => handleVideoPause(video.id)}
                    />
                  )}
                  {!playingVideos[video.id] && (
                    <button
                      type="button"
                      onClick={() => handlePlayClick(video.id)}
                      aria-label={`Reproducir ${video.titulo}`}
                      className="absolute inset-0 flex items-center justify-center transition-all duration-300 hover:cursor-pointer focus:bg-opacity-30 focus:outline-none"
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
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
