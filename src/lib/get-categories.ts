import { query } from './strapi';
import { Category } from '@/types/category';

export function getCategories(): Promise<Category[]> {
  return query('video-categorias?fields[0]=id&fields[1]=nombre&fields[2]=slug').then(
    (res) => {
      console.log(res.data);
      return res.data.map((category: Category) => ({
        id: category.id,
        nombre: category.nombre,
        slug: category.slug,
      }));
    },
  );
}
