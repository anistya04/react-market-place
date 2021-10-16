// disini tempat manggil API yang nanti bisa dipassing lewat props
import React from 'react';
import Header from 'parts/Header';
import BreadCrumb from 'components/BreadCrumb/BreadCrumb';
import Sitemap from 'parts/HomePage/Sitemap';
import Footer from 'parts/Footer';
import DetailProduct from 'parts/Details/DetailProduct';
import CompleteRoom from 'parts/Details/CompleteRoom';
function Details() {
  return (
    <>
      <Header theme="black" position="relative" />
      <BreadCrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/categories/123123', name: 'Office Room' },
          { url: '/categories/products/121212', name: 'Details' },
        ]}
      />
      <DetailProduct />
      <CompleteRoom />
      <Sitemap />
      <Footer />
    </>
  );
}

export default Details;
