import { query } from './strapi';

export function getServices() {
  return query('servicios?fields[0]=id&fields[1]=servicio').then(
    (res) => res.data,
  );
}
