export interface VideoCategoria {
  id: number;
  nombre: string;
  slug: string;
}

export interface Video {
  id: number;
  titulo: string;
  url: string;
  thumbnail?: string;
  categorias: VideoCategoria[];
}

export interface VideosProps {
  videos: Video[];
}

