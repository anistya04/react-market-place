import React from 'react';
import { Link } from 'react-router-dom';
import Header from 'parts/Header';
import BreadCrumb from 'components/BreadCrumb/BreadCrumb';
import Sitemap from 'parts/HomePage/Sitemap';
import Footer from 'parts/Footer';

function Congratulation() {
  return (
    <>
      <Header theme="black" position="relative" />
      <BreadCrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/success', name: 'Office Room' },
        ]}
      />
      <section class="py-4 md:py-16">
        <div class="container min-h-screen px-4 mx-auto">
          <div class="flex flex-col items-center justify-center">
            <div class="w-full text-center md:w-4/12">
              <img
                src="images/content/illustration-success.png"
                alt="illustration success"
              />
              <h2 class="mb-6 text-3xl font-semibold">Ah yes it’s success!</h2>
              <p class="mb-12 text-lg">
                Furniture yang anda beli akan kami kirimkan saat ini juga so now
                please sit tight and be ready for it
              </p>
              <Link
                to="index.html"
                class="px-8 py-3 text-lg text-gray-900 transition duration-200 bg-red-200 rounded-full focus:outline-none focus:text-black"
              >
                Back to Shop
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  );
}

export default Congratulation;
