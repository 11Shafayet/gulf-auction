import About from '../components/home/About';
import Brands from '../components/home/Brands';
import Hero from '../components/home/Hero';
import PopularCars from '../components/home/PopularCars';
import Services from '../components/home/Services';
import VehicleSearch from '../components/home/VehicleSearch';
import WhatWeOffer from '../components/home/WhatWeOffer';

const Home = () => {
  return (
    <div>
      <Hero />
      <VehicleSearch />
      <WhatWeOffer />
      <About />
      <Services />
      <Brands />
      <PopularCars />
    </div>
  );
};

export default Home;
