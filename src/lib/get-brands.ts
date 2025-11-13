import { Images } from '@/interfaces/gallery';
import { query } from './strapi';

export function getBrands() {
  const { STRAPI_HOST } = process.env;
  return query('marcas?populate[imagenes][fields][0]=url').then((res) => {
    const marcas = res.data;
    const images = marcas[0]?.imagenes ?? ([] as Images[]);

    const newImages = images.map((img: Images) => ({
      id: img.id,
      url: img.url.startsWith('http') ? img.url : `${STRAPI_HOST}${img.url}`,
    }));
    return newImages;
  });
}
