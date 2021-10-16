import React from 'react';

export default function Client() {
  return (
    <section className="container py-8 mx-auto">
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-0 my-4 md:w-auto md:my-0 md:px-4">
          <img src="images/content/adobe.png" className="mx-auto" alt="" />
        </div>
        <div className="w-full px-0 my-4 md:w-auto md:my-0 md:px-4">
          <img src="images/content/ikea.png" className="mx-auto" alt="" />
        </div>
        <div className="w-full px-0 my-4 md:w-auto md:my-0 md:px-4">
          <img src="images/content/herman.png" className="mx-auto" alt="" />
        </div>
        <div className="w-full px-0 my-4 md:w-auto md:my-0 md:px-4">
          <img src="images/content/miele.png" className="mx-auto" alt="" />
        </div>
      </div>
    </section>
  );
}
