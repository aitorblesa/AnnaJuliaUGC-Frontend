import { query } from './strapi';

export function getServices() {
  const { STRAPI_HOST } = process.env;
  return query('servicios?fields[0]=id&fields[1]=servicio').then(
    (res) => res.data,
  );
}
