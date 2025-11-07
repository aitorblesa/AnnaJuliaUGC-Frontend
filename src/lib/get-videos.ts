import { Video } from '@/interfaces/videos';
import { query } from './strapi';

export function getVideos() {
  const { STRAPI_HOST } = process.env;
  return query(
    'videos?populate[video][fields][0]=url&populate[video_categorias][fields][1]=nombre',
  ).then((res) => {
    const videosData = res.data;

    const videos = videosData.map((video: any) => {
      const videoUrl = video.video?.url
        ? video.video.url.startsWith('http')
          ? video.video.url
          : `${STRAPI_HOST}${video.video.url}`
        : '';
      const thumbnailUrl = video.thumbnail?.url
        ? video.thumbnail.url.startsWith('http')
          ? video.thumbnail.url
          : `${STRAPI_HOST}${video.thumbnail.url}`
        : '';

      // Mapear las categorías (many-to-many)
      const categorias = video.video_categorias
        ? video.video_categorias.map((cat: any) => ({
            id: cat.id,
            nombre: cat.nombre || '',
            slug: cat.slug || '',
          }))
        : [];

      return {
        id: video.id,
        titulo: video.titulo || '',
        url: videoUrl,
        thumbnail: thumbnailUrl,
        categorias,
      };
    });

    return videos as Video[];
  });
}
