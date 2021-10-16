import React from 'react';
import { Link } from 'react-router-dom';

function CompleteRoom() {
  return (
    <section className="px-4 py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex mb-4 flex-start ">
          <h2 className="text-2xl font-semibold capitalize">
            Complete Your Room <br />
            With What We Designed
          </h2>
        </div>
        <div className="flex flex-wrap overflow-x-auto">
          <div
            className="flex-none w-3/12 py-3 pr-0 md:pr-6"
            style={{ width: 320 }}
          >
            <div className="relative p-4 pb-8 overflow-x-hidden bg-white rounded-xl">
              <div className="w-full overflow-hidden rounded-xl h-36">
                <img
                  src="/images/content/chair-1.jpg"
                  alt=""
                  className="object-cover object-center w-full h-full rounded-2xl"
                />
              </div>
              <h5 className="mt-4 font-semibold"> Cangkir Mautie</h5>
              <span>IDR 8000.000</span>
              <Link to="/cart" className="streched-link"></Link>
            </div>
          </div>
          <div
            className="flex-none w-3/12 py-3 pr-0 md:pr-6"
            style={{ width: 320 }}
          >
            <div className="relative p-4 pb-8 overflow-x-hidden bg-white rounded-xl">
              <div className="w-full overflow-hidden rounded-xl h-36">
                <img
                  src="/images/content/chair-2.jpg"
                  alt=""
                  className="object-cover object-center w-full h-full rounded-2xl"
                />
              </div>
              <h5 className="mt-4 font-semibold"> Cangkir Mautie</h5>
              <span>IDR 8000.000</span>
              <Link href="shopping.html" className="streched-link"></Link>
            </div>
          </div>
          <div
            className="flex-none w-3/12 py-3 pr-0 md:pr-6"
            style={{ width: 320 }}
          >
            <div className="relative p-4 pb-8 overflow-x-hidden bg-white rounded-xl">
              <div className="w-full overflow-hidden rounded-xl h-36">
                <img
                  src="/images/content/chair-3.jpg"
                  alt=""
                  className="object-cover object-center w-full h-full rounded-2xl"
                />
              </div>
              <h5 className="mt-4 font-semibold"> Cangkir Mautie</h5>
              <span>IDR 8000.000</span>
              <Link href="shopping.html" className="streched-link"></Link>
            </div>
          </div>
          <div
            className="flex-none w-3/12 py-3 pr-0 md:pr-6"
            style={{ width: 320 }}
          >
            <div className="relative p-4 pb-8 overflow-x-hidden bg-white rounded-xl">
              <div className="w-full overflow-hidden rounded-xl h-36">
                <img
                  src="/images/content/chair-4.jpg"
                  alt=""
                  className="object-cover object-center w-full h-full rounded-2xl"
                />
              </div>
              <h5 className="mt-4 font-semibold"> Cangkir Mautie</h5>
              <span>IDR 8000.000</span>
              <Link href="shopping.html" className="streched-link"></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompleteRoom;
