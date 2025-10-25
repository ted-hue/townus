import Hero from '../components/Hero';
import Why from '../components/Why';
import How from '../components/How';
import What from '../components/What';
import Process from '../components/Process';
import Promo from '../components/Promo';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Why />
      <How />
      <What />
      <Process />
      <Promo />
      <Testimonials />
      <CTA />
    </main>
  );
};

export default Home;