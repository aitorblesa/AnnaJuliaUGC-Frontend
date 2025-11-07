import { Images } from '@/interfaces/images';
import { query } from './strapi';

export function getImages() {
  const { STRAPI_HOST } = process.env;
  return query('imagenes?populate[imagenes][fields][0]=url').then((res) => {
    const imagenesData = res.data;
    const images = imagenesData[0]?.imagenes ?? ([] as Images[]);

    const newImages = images.map((img: Images) => ({
      id: img.id,
      url: img.url.startsWith('http') ? img.url : `${STRAPI_HOST}${img.url}`,
    }));
    return newImages;
  });
}
