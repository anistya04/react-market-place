// disini tempat manggil API yang nanti bisa dipassing lewat props
import React from 'react';
import Header from 'parts/Header';
import ShoppingCart from 'parts/Cart/ShoppingCart';
import ShippingDetails from 'parts/Cart/ShippingDetails';
import Sitemap from 'parts/HomePage/Sitemap';
import Footer from 'parts/Footer';
import BreadCrumb from 'components/BreadCrumb/BreadCrumb';
function Details() {
  return (
    <>
      <Header theme="black" position="relative" />
      <BreadCrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/cart', name: 'Shopping Cart' },
        ]}
      />
      <section className="md:py-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-6">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  );
}

export default Details;
