import React from 'react';

function ShoppingCart() {
  return (
    <div className="w-full px-4 md:w-8/12" id="shopping-cart">
      <div className="w-full pb-3 mt-6 mb-4 border-b-2 border-gray-100 md:border-b-0">
        <h3 className="text-2xl">Shopping Cart</h3>
      </div>
      <div className="hidden pb-3 mb-4 border-b-2 border-gray-100 md:block">
        <div className="flex -mx-4">
          <div className="flex-none px-4">
            <div className="" style={{ width: 90 }}>
              <h6>Photo</h6>
            </div>
          </div>
          <div className="w-5/12 px-4">
            <h6>Product</h6>
          </div>
          <div className="w-5/12 px-4">
            <h6>Price</h6>
          </div>
          <div className="w-2/12 px-4">
            <h6>Action</h6>
          </div>
        </div>
      </div>
      {/* <!-- START:Cart Empty --> */}
      <div className="hidden py-8 text-center" id="empty-cart">
        <p>
          Ooops... Cart is empty{' '}
          <a href="details.html" className="underline">
            Shop Now
          </a>
        </p>
      </div>
      {/* <!-- END:Cart Empty --> */}
      <div className="pb-3 mb-4">
        <div className="flex items-center py-2 -mx-4" data-row="1">
          <div className="px-4">
            <div className="rounded-lg" style={{ height: 90, width: 90 }}>
              <img
                src="images/content/chair-1.jpg"
                className="object-cover object-center w-full h-full rounded-lg"
                alt=""
              />
            </div>
          </div>
          <div className="w-5/12 px-4">
            <h6 className="font-semibold">Saman Kakka</h6>
            <span>Office Room</span>
            <span className="block font-semibold md:hidden">
              IDR 28.000.000
            </span>
          </div>
          <div className="hidden w-5/12 px-4 md:block">
            <span className="font-semibold">IDR 28.000.000</span>
          </div>
          <div className="relative w-7/12 px-4 md:w-2/12">
            <button
              className="absolute right-0 px-4 outline-none md:relative focus:outline-none"
              data-delete="1"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.88977 13L6.46977 8.212L3.08577 13H0.421766L5.10177 6.574L0.673766 0.399999H3.31977L6.54177 4.882L9.72777 0.399999H12.2658L7.85577 6.484L12.5898 13H9.88977Z"
                  fill="#E0195D"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center py-2 -mx-4" data-row="2">
          <div className="px-4">
            <div className="rounded-lg" style={{ height: 90, width: 90 }}>
              <img
                src="images/content/chair-1.jpg"
                className="object-cover object-center w-full h-full rounded-lg"
                alt=""
              />
            </div>
          </div>
          <div className="w-5/12 px-4">
            <h6 className="font-semibold">Saman Kakka</h6>
            <span>Office Room</span>
            <span className="block font-semibold md:hidden">
              IDR 28.000.000
            </span>
          </div>
          <div className="hidden w-5/12 px-4 md:block">
            <span className="font-semibold">IDR 28.000.000</span>
          </div>
          <div className="relative w-7/12 px-4 md:w-2/12">
            <button
              className="absolute right-0 px-4 md:relative focus:outline-none"
              data-delete="2"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.88977 13L6.46977 8.212L3.08577 13H0.421766L5.10177 6.574L0.673766 0.399999H3.31977L6.54177 4.882L9.72777 0.399999H12.2658L7.85577 6.484L12.5898 13H9.88977Z"
                  fill="#E0195D"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center py-2 -mx-4" data-row="3">
          <div className="px-4">
            <div className="rounded-lg" style={{ height: 90, width: 90 }}>
              <img
                src="images/content/chair-1.jpg"
                className="object-cover object-center w-full h-full rounded-lg"
                alt=""
              />
            </div>
          </div>
          <div className="w-5/12 px-4">
            <h6 className="font-semibold">Saman Kakka</h6>
            <span>Office Room</span>
            <span className="block font-semibold md:hidden">
              IDR 28.000.000
            </span>
          </div>
          <div className="hidden w-5/12 px-4 md:block">
            <span className="font-semibold">IDR 28.000.000</span>
          </div>
          <div className="relative w-7/12 px-4 md:w-2/12">
            <button
              className="absolute right-0 px-4 md:relative focus:outline-none"
              data-delete="3"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.88977 13L6.46977 8.212L3.08577 13H0.421766L5.10177 6.574L0.673766 0.399999H3.31977L6.54177 4.882L9.72777 0.399999H12.2658L7.85577 6.484L12.5898 13H9.88977Z"
                  fill="#E0195D"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center py-2 -mx-4" data-row="4">
          <div className="px-4">
            <div className="rounded-lg" style={{ height: 90, width: 90 }}>
              <img
                src="images/content/chair-1.jpg"
                className="object-cover object-center w-full h-full rounded-lg"
                alt=""
              />
            </div>
          </div>
          <div className="w-5/12 px-4">
            <h6 className="font-semibold">Saman Kakka</h6>
            <span>Office Room</span>
            <span className="block font-semibold md:hidden">
              IDR 28.000.000
            </span>
          </div>
          <div className="hidden w-5/12 px-4 md:block">
            <span className="font-semibold">IDR 28.000.000</span>
          </div>
          <div className="relative w-7/12 px-4 md:w-2/12">
            <button
              className="absolute right-0 px-4 focus:outline-none md:relative"
              data-delete="4"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.88977 13L6.46977 8.212L3.08577 13H0.421766L5.10177 6.574L0.673766 0.399999H3.31977L6.54177 4.882L9.72777 0.399999H12.2658L7.85577 6.484L12.5898 13H9.88977Z"
                  fill="#E0195D"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
