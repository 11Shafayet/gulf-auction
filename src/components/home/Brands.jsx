import { Link } from 'react-router-dom';
import brand1 from '/images/brand1.png';
import brand2 from '/images/brand2.png';
import brand3 from '/images/brand3.png';
import brand4 from '/images/brand4.png';
import brand5 from '/images/brand5.png';
import brand6 from '/images/brand6.png';
import lineAbstract from '/images/line-abstract.png';
import { useState } from 'react';
import BrandLoader from '../loaders/BrandLoader';

const brandsData = [
  {
    img: brand1,
    link: '/',
  },
  {
    img: brand2,
    link: '/',
  },
  {
    img: brand3,
    link: '/',
  },
  {
    img: brand4,
    link: '/',
  },
  {
    img: brand5,
    link: '/',
  },
  {
    img: brand6,
    link: '/',
  },
];

const Brands = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-secondary py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <h4 className="text-2xl md:text-4xl xl:text-5xl mb-4">
            Top Car Brands
          </h4>
          <div className="flex justify-center items-center mb-10">
            <img src={lineAbstract} alt="" />
          </div>
          <div className="grid sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 items-center">
            {loading ? (
              <>
                <BrandLoader />
                <BrandLoader />
                <BrandLoader />
                <BrandLoader />
                <BrandLoader />
                <BrandLoader />
              </>
            ) : (
              <>
                {brandsData?.length === 0 ? (
                  <p className="text-lg font-medium">No Product Found!</p>
                ) : (
                  <>
                    {brandsData?.map((brand, i) => (
                      <Link
                        to={brand.link}
                        key={i}
                        className="hover:bg-white hover:border-black border-2 border-transparent rounded-xl flex justify-center items-center  p-2 duration-500 h-40"
                      >
                        <img src={brand.img} alt="" />
                      </Link>
                    ))}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
