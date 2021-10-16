import React from 'react';

function ShippingDetails() {
  return (
    <div className="w-full px-4 md:w-4/12" id="shipping-detail">
      <div className="p-6 bg-gray-100 rounded-2xl">
        <div className="mb-6">
          <h3 className="text-2xl">Shipping Details</h3>
        </div>
        <form action="success.html">
          <div className="mb-4">
            <div className="flex flex-col">
              <label for="complete-name" className="mb-2 text-sm">
                Complete Name
              </label>
              <input
                data-input
                type="text"
                id="complete-name"
                className="px-4 py-2 text-sm border border-gray-200 rounded-lg focus:border-blue-200 focus:outline-none"
                placeholder="Input your name"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-col">
              <label for="email-address" className="mb-2 text-sm">
                Email Address
              </label>
              <input
                data-input
                id="email-address"
                type="email"
                className="px-4 py-2 text-sm border border-gray-200 rounded-lg focus:border-blue-200 focus:outline-none"
                placeholder="Input your email address"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-col">
              <label for="address" className="mb-2 text-sm">
                Addres
              </label>
              <input
                data-input
                type="text"
                id="address"
                className="px-4 py-2 text-sm border border-gray-200 rounded-lg focus:border-blue-200 focus:outline-none"
                placeholder="Input your address"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-col">
              <label for="phone-number" className="mb-2 text-sm">
                Phone Number
              </label>
              <input
                data-input
                type="tel"
                id="phone-number"
                className="px-4 py-2 text-sm border border-gray-200 rounded-lg focus:border-blue-200 focus:outline-none"
                placeholder="Input your phone number"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-col">
              <label for="courier" className="mb-2 text-sm">
                Choose Courier
              </label>
              <div className="flex flex-wrap -mx-2">
                <div className="w-1/2 h-24 px-2 mb-4 rounded-lg">
                  <button
                    data-value="fedex"
                    data-name="courier"
                    type="button"
                    className="flex items-center justify-center w-full h-full bg-white rounded-lg "
                  >
                    <img
                      src="images/content/courier/courier-fedex.jpg"
                      className="object-contain max-h-full"
                      alt=""
                    />
                  </button>
                </div>
                <div className="w-1/2 h-24 px-2 mb-4 rounded-lg">
                  <button
                    type="button"
                    data-value="dhl"
                    data-name="courier"
                    className="flex items-center justify-center w-full h-full bg-white rounded-lg "
                  >
                    <img
                      src="images/content/courier/courier-dhl.jpg"
                      className="object-contain max-h-full"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex flex-col">
              <label for="payment" className="mb-2 text-sm">
                Choose Payment
              </label>
              <div className="flex flex-wrap mb-4 -mx-2">
                <div className="w-6/12 h-24 px-2 mb-4 ">
                  <button
                    type="button"
                    data-value="midtrans"
                    data-name="payment"
                    className="flex items-center justify-center w-full h-full bg-white border rounded-lg focus:outline-none focus:border-red-200"
                  >
                    <img
                      src="images/content/payment/payment-midtrans.jpg"
                      className="object-contain max-h-full"
                      alt=""
                    />
                  </button>
                </div>
                <div className="w-6/12 h-24 px-2 mb-4">
                  <button
                    type="button"
                    data-value="mastercard"
                    data-name="payment"
                    className="flex items-center justify-center w-full h-full bg-white border rounded-lg focus:outline-none focus:border-red-200"
                  >
                    <img
                      src="images/content/payment/payment-mastercard.jpg"
                      className="object-contain max-h-full"
                      alt=""
                    />
                  </button>
                </div>
                <div className="w-6/12 h-24 px-2 mb-4">
                  <button
                    type="button"
                    data-value="bitcoin"
                    data-name="payment"
                    className="flex items-center justify-center w-full h-full bg-white border rounded-lg focus:outline-none focus:border-red-200"
                  >
                    <img
                      src="images/content/payment/payment-bitcoin.jpg"
                      className="object-contain max-h-full"
                      alt=""
                    />
                  </button>
                </div>
                <div className="w-6/12 h-24 px-2 mb-4">
                  <button
                    type="button"
                    data-value="american-express"
                    data-name="payment"
                    className="flex items-center justify-center w-full h-full bg-white border rounded-lg focus:outline-none focus:border-red-200"
                  >
                    <img
                      src="images/content/payment/payment-american-express.jpg"
                      className="object-contain max-h-full"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="text-center">
                <button
                  className="w-full px-6 py-3 text-lg bg-pink-300 rounded-full hover:text-pink-300 hover:bg-black"
                  type="submit"
                  disabled
                >
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ShippingDetails;
