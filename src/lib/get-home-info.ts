import { query } from './strapi';

export function getHomeInfo() {
  return query(
    'inicio?fields[0]=encabezado_1&fields[1]=encabezado_2&fields[2]=encabezado_3&fields[3]=descripcion&populate[videoCover][fields][0]=url',
  ).then((res) => {
    const {
      descripcion,
      encabezado_1,
      encabezado_2,
      encabezado_3,
      videoCover,
    } = res.data;
    const video = `${videoCover[0]?.url}`;
    return {
      descripcion,
      encabezado_1,
      encabezado_2,
      encabezado_3,
      video,
    };
  });
}
