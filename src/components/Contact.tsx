export const Contact = () => {
  return (
    <section
      id="contacto"
      className="relative gap-16 px-8 pb-32 lg:h-[calc(100dvh-88px)]"
    >
      <img
        className="absolute left-0 top-0 -z-30 h-full w-full object-cover"
        src="/contact_bg.jpg"
        alt="Imagen de fondo del contacto"
      />
      <footer className="relative mx-auto flex max-w-[1440px] flex-col gap-16 px-8 pb-32 lg:h-[calc(100dvh-88px)] lg:justify-between">
        <div className="flex w-full flex-col gap-8">
          <h1 className="mt-12 text-6xl font-semibold md:text-9xl">Hablemos</h1>
          <a
            className="w-fit text-2xl md:text-3xl"
            href="mailto:annajulia.ugc@gmail.com"
          >
            annajulia.ugc@gmail.com
          </a>
        </div>
        <ul className="flex gap-8 [&>li>a>img]:w-8 lg:[&>li>a>img]:w-12">
          <li>
            <a
              href="https://www.instagram.com/creadora.anna/ "
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/instagram.svg" alt="Icono de instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@creadora.anna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/tiktok.svg" alt="Icono de tiktok" />
            </a>
          </li>
          <li>
            <a href="mailto:annajulia.ugc@gmail.com">
              <img src="/mail.svg" alt="Icono de mail" />
            </a>
          </li>
        </ul>
        <div className="max-w-[320px] bg-white p-6 pb-12 text-3xl uppercase lg:absolute lg:right-0 lg:top-52">
          <img
            className="aspect-square w-full"
            src="/anna_contact.webp"
            alt="Imagen de la creadora de contenido UGC, Anna"
          />
          <p className="mt-2">Contenido que</p>
          <div className="relative">
            <span className="absolute right-0 -rotate-3 justify-end self-end text-4xl font-semibold">
              conecta
            </span>
            <span className="-rotate-16 absolute -right-10 top-8 z-0 w-36 rounded-full border-4 border-[#E9A81C] opacity-65 lg:bottom-3"></span>
          </div>
        </div>
      </footer>
    </section>
  );
};
