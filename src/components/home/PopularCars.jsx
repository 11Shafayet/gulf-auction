import carShape from '/images/car-shape.png';
import lineAbstract from '/images/line-abstract.png';
import car1 from '/images/1.png';
import car2 from '/images/2.png';
import car3 from '/images/3.png';
import car4 from '/images/4.png';
import car5 from '/images/5.png';
import car6 from '/images/6.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import CarItemLoader from '../loaders/CarItemLoader';

const data = [
  {
    images: [{ img: car1 }, { img: car2 }, { img: car3 }],
    title: 'classic Cars',
    count: 25,
  },
  {
    images: [{ img: car2 }, { img: car3 }, { img: car4 }],
    title: 'Sports Cars',
    count: 21,
  },
  {
    images: [{ img: car3 }, { img: car4 }, { img: car5 }],
    title: 'Convertible Cars',
    count: 9,
  },
  {
    images: [{ img: car4 }, { img: car5 }, { img: car6 }],
    title: 'Modal Cars',
    count: 29,
  },
  {
    images: [{ img: car5 }, { img: car6 }, { img: car1 }],
    title: 'Luxury Cars',
    count: 14,
  },
  {
    images: [{ img: car6 }, { img: car1 }, { img: car2 }],
    title: 'Mini Cars',
    count: 17,
  },
];

const PopularCars = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="relative">
            <div className="absolute -top-[130%] left-1/2 -translate-x-1/2">
              <img src={carShape} alt="" />
            </div>
            <h4 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-6">
              Buy your desire car with affordable price.
            </h4>
          </div>
          <h4 className="text-[#90A3BF] font-secondary text-2xl">
            Popular Car
          </h4>
          <div className="flex justify-center items-center mt-4 mb-10">
            <img src={lineAbstract} alt="" />
          </div>
        </div>

        {/* cars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {loading ? (
            <>
              <CarItemLoader />
              <CarItemLoader />
              <CarItemLoader />
              <CarItemLoader />
              <CarItemLoader />
              <CarItemLoader />
            </>
          ) : (
            <>
              {data?.length === 0 ? (
                <p className="text-lg font-medium">No Product Found!</p>
              ) : (
                <>
                  {' '}
                  {data?.map((item, i) => {
                    const { images, title, count } = item;

                    return (
                      <div key={i}>
                        <Swiper
                          modules={[Navigation]}
                          navigation={{
                            nextEl: '.arrow-right',
                            prevEl: '.arrow-left',
                          }}
                          // navigation={true}
                          className="mySwiper relative overflow-hidden"
                        >
                          <div className="flex gap-x-4 justify-center items-center absolute top-4 right-4 z-[1000]">
                            <button className="arrow-left bg-white p-3.5 rounded-full hover:bg-primary hover:text-white duration-300">
                              <FaArrowLeft size={20} />
                            </button>

                            <button className="arrow-right bg-white p-3.5 rounded-full hover:bg-primary hover:text-white duration-300">
                              <FaArrowRight size={20} />
                            </button>
                          </div>
                          {images.map((car, j) => (
                            <SwiperSlide
                              key={j}
                              className="relative z-10 w-full rounded-2xl overflow-hidden"
                            >
                              <div className="absolute inset-0 -z-10 text-center bg-black bg-opacity-10" />
                              <div className="flex justify-center items-center -z-20 relative">
                                <img src={car.img} alt="" />
                              </div>
                              <div
                                className="absolute top-0 left-0 bg-black text-white w-20 h-10 text-xl flex justify-center items-center"
                                style={{
                                  clipPath: `polygon(0% 0%, 100% 0, 85% 50%, 100% 100%, 0% 100%)`,
                                }}
                              >
                                {count}
                              </div>
                              <div className="relative bottom-6 left-8 right-8 z-10">
                                <h4 className="text-primary font-secondary text-2xl font-bold capitalize">
                                  {title}
                                </h4>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    );
                  })}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularCars;
