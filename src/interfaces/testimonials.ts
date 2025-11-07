interface Testimonial {
  id: number;
  empresa: string;
  comentario: string;
  comentario_2?: string;
  valoracion: number;
}

export interface TestimonialsProps {
  testimonials: Testimonial[];
}
