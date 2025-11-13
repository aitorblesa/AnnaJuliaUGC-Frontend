import { BrandsGalleryProps } from '@/interfaces/gallery';
import '@/components/brands.css';

export const Brands = ({ images }: BrandsGalleryProps) => {
  const title = 'Confían en mi';
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-8">
      <h1 className="mt-24 text-center text-4xl font-semibold uppercase md:text-6xl">
        {title}
      </h1>
      <div className="relative overflow-hidden py-24">
        <div className="animate-scroll stop-animation flex w-max">
          {duplicatedImages.map((image, index) => (
            <img
              key={`${image.id}-${index}`}
              src={image.url}
              alt={`Brand ${image.id}`}
              className="mx-6 h-12 w-auto shrink-0 md:h-16"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
