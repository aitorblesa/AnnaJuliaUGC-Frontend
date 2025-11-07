import { Background } from '@/components/Background';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Brands } from '@/components/Brands';
import { Testimonials } from '@/components/Testimonials';
import { Services } from '@/components/Services';
import { Imagenes } from '@/components/Imagenes';
import { Videos } from '@/components/Videos';
// import { getCategories } from '@/lib/get-categories';
import { getHomeInfo } from '@/lib/get-home-info';
import { getBrands } from '@/lib/get-brands';
import { getTestimonials } from '@/lib/get-testimonials';
import { getServices } from '@/lib/get-services';
import { getImages } from '@/lib/get-images';
import { getVideos } from '@/lib/get-videos';
export default async function Home() {
  const homeInfo = await getHomeInfo();
  // const categories = await getCategories();
  const brandsImages = await getBrands();
  const testimonials = await getTestimonials();
  const services = await getServices();
  const imagenes = await getImages();

  const videos = await getVideos();

  return (
    <main>
      <Background />
      <Navigation />
      <Hero homeInfo={homeInfo} />
      <Brands images={brandsImages} />
      <Imagenes images={imagenes} />
      <Videos videos={videos} />
      <Testimonials testimonials={testimonials} />
      <Services services={services} />
      <Contact />
    </main>
  );
}
