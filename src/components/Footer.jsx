import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitterSquare,
} from 'react-icons/fa';
import logoWide from '/images/logo-wide.png';
import google from '/images/google-button.png';
import apple from '/images/apple-button.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-[#F7F7F7] pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-12">
          <div className="w-full md:w-1/3 flex flex-col justify-center text-center md:text-start items-center md:items-start">
            <div className="mx-auto md:mx-0">
              <img src={logoWide} alt="" className="max-w-full h-auto" />
            </div>
            <p className="opacity-80 xl:pr-20 mt-5">
              We sell perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
            </p>
            <ul className="flex flex-col gap-y-2 my-10">
              <li className="flex items-center gap-x-2">
                <FaMapMarkerAlt className="text-primary" />
                <p className="uppercase opacity-80">
                  DUBAI, UNITED ARAB EMIRATES
                </p>
              </li>
              <li className="flex items-center gap-x-2">
                <FaPhoneAlt className="text-primary" />
                <p className="uppercase opacity-80">0581035772</p>
              </li>
              <li className="flex items-center gap-x-2">
                <FaEnvelope className="text-primary" />
                <p className="opacity-80">info@arianashippingline.com</p>
              </li>
            </ul>
            <ul className="flex items-center gap-x-4">
              <li>
                <Link>
                  <FaFacebookSquare
                    className="rounded-md text-gray-700 hover:text-primary hover:-translate-y-2 duration-500"
                    size={35}
                  />
                </Link>
              </li>
              <li>
                <Link>
                  <FaInstagramSquare
                    className="rounded-md text-gray-700 hover:text-primary hover:-translate-y-2 duration-500"
                    size={35}
                  />
                </Link>
              </li>
              <li>
                <Link>
                  <FaTwitterSquare
                    className="rounded-md text-gray-700 hover:text-primary hover:-translate-y-2 duration-500"
                    size={35}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-2/3 flex flex-col sm:flex-row justify-between gap-8 mt-12 md:mt-20 md:pl-32">
            <div>
              <h4 className="text-2xl font-medium mb-3">Resources</h4>
              <div className="h-[3px] w-32 bg-primary" />
              <ul className="flex flex-col gap-y-4 mt-8">
                <li className="text-lg font-medium hover:text-primary">
                  <Link>Our Team</Link>
                </li>
                <li className="text-lg font-medium hover:text-primary">
                  <Link>Contact Us</Link>
                </li>
                <li className="text-lg font-medium hover:text-primary">
                  <Link>About</Link>
                </li>
                <li className="text-lg font-medium hover:text-primary">
                  <Link>Services</Link>
                </li>
                <li className="text-lg font-medium hover:text-primary">
                  <Link>Terms & Conditions</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-medium mb-6">Download App</h4>
              <div className="flex gap-x-7">
                <Link>
                  <img src={google} alt="" />
                </Link>
                <Link>
                  <img src={apple} alt="" />
                </Link>
              </div>

              <div className="flex flex-col gap-y-4 mt-12">
                <div className="flex justify-between">
                  <p className="text-lg font-medium">Fri</p>
                  <p className="text-lg font-medium text-end">24 Hours</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-lg font-medium">Sun - Thu</p>
                  <p className="text-lg font-medium text-end">
                    6.00 am - 12.00 am
                  </p>
                </div>

                <div className="flex justify-between">
                  <p className="text-lg font-medium">Saturday</p>
                  <p className="text-lg font-medium text-end">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6" />
      <div className="container mx-auto px-4 text-center py-6">
        <p>© Copyright 2023, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
