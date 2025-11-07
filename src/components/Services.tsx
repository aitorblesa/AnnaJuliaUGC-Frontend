import { ServicesProps } from '@/interfaces/services';
import React from 'react';
//1203
export const Services = ({ services }: ServicesProps) => {
  return (
    <section id="servicios" className="border px-16 md:px-0">
      <h1 className="text-center text-4xl font-semibold uppercase md:text-6xl">
        Servicios
      </h1>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-16 px-12 py-24 lg:flex-row">
        <ul className="flex w-full min-w-96 flex-col gap-8">
          {services.map((service) => {
            return (
              <React.Fragment key={service.id}>
                <hr className="border-t-2 border-black" />

                {(service.servicio.toLowerCase().includes('video') && (
                  <li className="font-luxurious flex justify-between text-left text-2xl uppercase italic">
                    {service.servicio}
                    <span>15" - 30" - 60"</span>
                  </li>
                )) || (
                  <li className="font-luxurious text-left text-2xl uppercase italic">
                    {service.servicio}
                  </li>
                )}
              </React.Fragment>
            );
          })}
          <hr className="border-t-2 border-black" />
        </ul>

        <img
          src="/anna_2.webp"
          alt="Imagen orgánica con halo azul"
          className="rounded-blob hidden aspect-square h-[500px] object-cover lg:block"
        />
      </div>
    </section>
  );
};
