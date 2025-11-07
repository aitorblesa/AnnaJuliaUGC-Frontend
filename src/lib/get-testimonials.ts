import { query } from './strapi';

export function getTestimonials() {
  const { STRAPI_HOST } = process.env;
  return query(
    'testimonios?fields[0]=id&fields[1]=empresa&fields[2]=comentario&fields[3]=valoracion&fields[4]=comentario_2&sort[0]=createdAt',
  ).then((res) => res.data);
}
