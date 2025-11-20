'use client';
import { useEffect } from 'react';
import '@/components/Navigation.css';
export const Navigation = () => {
  useEffect(() => {
    const listItems = document.querySelectorAll('#landing-header li');
    const menuBackdrop = document.querySelector(
      '#menu-backdrop',
    ) as HTMLElement | null;

    if (!menuBackdrop || listItems.length === 0) {
      console.warn(
        'No se encontró el elemento de fondo o los elementos de la lista.',
      );
      return;
    }

    const handleMouseEnter = (event: Event) => {
      const item = event.currentTarget as HTMLElement;
      const { left, top, width, height } = item.getBoundingClientRect();
      menuBackdrop.style.setProperty('--left', `${left}px`);
      menuBackdrop.style.setProperty('--top', `${top}px`);
      menuBackdrop.style.setProperty('--width', `${width}px`);
      menuBackdrop.style.setProperty('--height', `${height}px`);
      menuBackdrop.style.opacity = '1';
      menuBackdrop.style.visibility = 'visible';
    };

    const handleMouseLeave = () => {
      menuBackdrop.style.opacity = '0';
      menuBackdrop.style.visibility = 'hidden';
    };

    listItems.forEach((item) => {
      item.addEventListener('mouseenter', handleMouseEnter as EventListener);
      item.addEventListener('mouseleave', handleMouseLeave as EventListener);
    });

    // Limpieza de eventos al desmontar el componente
    return () => {
      listItems.forEach((item) => {
        item.removeEventListener(
          'mouseenter',
          handleMouseEnter as EventListener,
        );
        item.removeEventListener(
          'mouseleave',
          handleMouseLeave as EventListener,
        );
      });
    };
  }, []);

  return (
    <header id="landing-header" className="sticky top-0 z-50">
      <div className="mx-auto flex w-full max-w-[1440px] flex-row items-center justify-between px-8 py-5 font-semibold tracking-wide lg:px-0">
        <div className="flex py-2 text-2xl *:inline-block">
          <a href="#">
            Anna
            <span className="text-2xl text-pink-400">.</span>
          </a>
        </div>
        <nav>
          <ul className="hidden lg:flex [&>li>a]:inline-block [&>li>a]:px-2 [&>li>a]:py-2">
            <li>
              <a href="#galeria">Galeria</a>
            </li>
            <li>
              <a href="#videos">Videos</a>
            </li>
            <li>
              <a href="#testimonios">Testimonios</a>
            </li>
            <li>
              <a href="#servicios">Servicios</a>
            </li>
          </ul>
        </nav>
        <div
          id="menu-backdrop"
          className="h-(--height) w-(--width) translate-x-(--left) absolute left-0 -z-10 rounded bg-[#6874E8]/30 opacity-0 backdrop-blur-lg transition-all duration-300 ease-in-out"
        ></div>
        <div className="flex justify-end py-2">
          <a
            className="transition-border border-b-2 border-transparent hover:border-black"
            href="#contacto"
          >
            Trabajemos juntos!
          </a>
        </div>
      </div>
    </header>
  );
};
