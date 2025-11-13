import { Gallery as GalleryImages } from '@/interfaces/gallery';
import { query } from './strapi';

export function getImages() {
  const { STRAPI_HOST } = process.env;
  return query('imagenes?populate[imagenes][fields][0]=url').then((res) => {
    const imagenesData = res.data;
    const images = imagenesData[0]?.imagenes ?? ([] as GalleryImages[]);

    const newImages = images.map((img: GalleryImages) => ({
      id: img.id,
      url: img.url.startsWith('http') ? img.url : `${STRAPI_HOST}${img.url}`,
    }));
    return newImages;
  });
}
