import { TestimonialsProps } from '@/interfaces/testimonials';

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const colorConfigs = [
    {
      background: 'rgba(233, 171, 28, 1)', // orange
      shadow: 'rgba(233, 171, 28, 0.25)',
    },
    {
      background: 'rgba(28, 62, 233, 1)', // blue
      shadow: 'rgba(28, 62, 233, 0.25)',
    },
    {
      background: 'rgba(28, 233, 35, 1)', // green
      shadow: 'rgba(28, 233, 35, 0.25)',
    },
  ];

  return (
    <section className="mx-auto pt-8" id="testimonios">
      <h2 className="text-center text-2xl font-semibold uppercase md:text-6xl">
        Testimonios
      </h2>
      <h1 className="mt-6 text-center text-2xl font-semibold uppercase md:mt-12 md:text-4xl">
        Que piensan mis clientes
      </h1>
      <section className="mx-auto flex px-4 md:px-0 max-w-[1440px] flex-col items-center gap-16 pt-12 md:justify-between md:pt-16 lg:flex-row lg:items-stretch">
        {testimonials.map((testimonial, index) => {
          const { background, shadow } =
            colorConfigs[index % colorConfigs.length];
          return (
            <article
              key={testimonial.id}
              className="shadow-custom max-w-11/12 relative flex w-full flex-col gap-6 rounded-3xl bg-white px-8 py-12 md:gap-8 md:px-12 md:py-16"
            >
              <div className="flex gap-1 self-end">
                {[...Array(testimonial.valoracion)].map((_, i) => (
                  <img
                    key={i}
                    src="/star.svg"
                    alt="Imagen de una estrella para representar la valoracion de la empresa"
                    className="size-6"
                  />
                ))}
              </div>
              <div className="flex grow flex-col gap-4">
                <p className="text-lg font-semibold">
                  {testimonial.comentario}
                </p>
                {testimonial.comentario_2 && (
                  <p className="text-lg font-semibold">
                    {testimonial.comentario_2}
                  </p>
                )}
              </div>
              <p className="text-lg font-bold uppercase text-[#5A5A5A] md:text-xl">
                {testimonial.empresa}
              </p>
              <div
                className={`shadow-quotes absolute -top-7 left-7 grid size-20 place-content-center rounded-full py-5`}
                style={{
                  backgroundColor: background,
                  color: shadow,
                }}
              >
                <img src="/quotes.svg" alt="" />
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
};
