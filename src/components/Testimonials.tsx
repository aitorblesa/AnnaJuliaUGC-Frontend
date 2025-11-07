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
    <section
      className="mx-auto py-32 border"
      id="testimonios"
    >
      <h2 className="text-center text-xl font-semibold uppercase md:text-6xl">
        Testimonios
      </h2>
      <h1 className="mt-12 text-center text-4xl font-semibold uppercase md:text-2xl">
        Que piensan mis clientes
      </h1>
      <section className="flex flex-col items-stretch gap-12 md:flex-row md:justify-center md:gap-8">
        {testimonials.map((testimonial, index) => {
          const { background, shadow } =
            colorConfigs[index % colorConfigs.length];
          return (
            <article
              key={testimonial.id}
              className="shadow-custom relative flex w-full max-w-[340px] flex-col gap-8 rounded-3xl bg-white px-12 py-16"
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
              <p className="text-xl font-bold uppercase text-[#5A5A5A]">
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
