import React from 'react';
import { Link } from 'react-router-dom';
import Header from 'parts/Header';
import Sitemap from 'parts/HomePage/Sitemap';
import Footer from 'parts/Footer';
export default function PageNotFound() {
  return (
    <>
      <Header theme="black" position="relative" />
      <section class="py-4 md:py-16">
        <div class="container min-h-screen px-4 mx-auto">
          <div class="flex flex-col items-center justify-center">
            <div class="w-full text-center md:w-4/12">
              <h2 class="mb-6 text-3xl font-semibold">Page Not Found!</h2>
              <p class="mb-12 text-lg">Page what you search is not found.</p>
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
