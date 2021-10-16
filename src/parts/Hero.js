import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="flex items-center hero">
      {/* <!-- LEFT-HERO:Start  --> */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center w-full leading-tight text-center md:relative md:w-1/2">
        <h1 className="text-3xl font-semibold text-white md:text-5xl md:text-black">
          The Room <br className="hidden lg:block" />
          You’ve Dreaming
        </h1>
        <h2 className="px-8 my-6 text-base tracking-wide text-white md:text-black">
          Kami menyediakan furniture berkelas yang
          <br className="hidden lg:block" />
          membuat ruangan terasa homey
        </h2>
        <button className="px-8 py-3 mt-4 transition duration-100 bg-pink-300 rounded-full hover:bg-black hover:text-pink-300 focus:outline-none">
          <Link to="#browse-the-room">Explore Now</Link>
        </button>
      </div>
      {/* <!-- LEFT-HERO:End  -->
    <!-- RIGHT-HERO:Start  --> */}
      <div className="inset-0 w-full md:relative md:w-1/2 ">
        <div className="relative">
          <div className="absolute inset-0 z-20 bg-black opacity-30"></div>
          <div className="absolute bottom-0 right-0 z-30 cta">
            <button
              className="absolute flex items-center justify-center w-16 h-16 transform -translate-x-1/2 -translate-y-1/2 bg-blue-200 bg-center rounded-full md:w-20 md:h-20 md:inset-0 hover:bg-blue-300 focus:outline-none modal-triger"
              data-content=""
            >
              <img src="/images/design/icon-play.svg" alt="" />
            </button>
          </div>
          <img
            className="inset-0 z-10 object-cover object-center w-full hero-image md:h-full md:relative"
            src="/images/content/hero-image.jpg"
            alt="Sebuah object sofa dan meja pada ruang tamu"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
