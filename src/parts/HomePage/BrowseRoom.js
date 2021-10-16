import React from 'react';
import { Link } from 'react-router-dom';

function BrowseRoom() {
  return (
    // <!-- START:Browse-The-Room -->
    <section className="flex px-4 py-16 bg-gray-100" id="browse-the-room">
      <div className="container mx-auto mb-4">
        <div className="flex mb-4">
          <h3 className="text-2xl font-semibold capitalize">
            Browse The Room <br /> That We Designed For You
          </h3>
        </div>
        <div className="grid grid-cols-9 grid-rows-2 gap-6 ">
          <div
            className="relative col-span-9 row-span-1 md:col-span-4 card"
            style={{ height: 180 }}
          >
            <div className="rounded-xl card-image">
              <img
                src="/images/content/living-room.jpg"
                className="object-cover object-center w-full h-full rounded-xl"
                alt=""
              />
            </div>
            <div className="title-card-on-sm">
              <h5 className="font-semibold">Living Room</h5>
              <span>180,000</span>
            </div>
            <Link className="streched-link"></Link>
          </div>
          <div className="relative col-span-9 row-span-1 md:col-span-2 md:row-span-2 card">
            <div className="rounded-xl card-image">
              <img
                src="/images/content/decoration.jpg"
                className="object-cover object-center w-full h-full rounded-xl"
                alt=""
              />
            </div>
            <div className="title-card-on-sm md:inset-0 md:items-center md:justify-start md:pt-16 md:pl-0">
              <h5 className="font-semibold">Decoration</h5>
              <span>180,000</span>
            </div>
            <Link className="streched-link"></Link>
          </div>
          <div className="relative col-span-9 row-span-1 md:col-span-3 md:row-span-2 card">
            <div className="rounded-xl card-image">
              <img
                src="/images/content/bed-room.jpg"
                className="object-cover object-center w-full h-full rounded-xl"
                alt=""
              />
            </div>
            <div className="title-card-on-sm md:inset-0 md:items-center md:justify-start md:pt-16 md:pl-0">
              <h5 className="font-semibold">Bed Room</h5>
              <span>180,000</span>
            </div>
            <Link className="streched-link"></Link>
          </div>
          <div className="relative col-span-9 row-span-1 md:col-span-4 card">
            <div className="rounded-xl card-image">
              <img
                src="/images/content/children-room.jpg"
                className="object-cover object-center w-full h-full rounded-xl"
                alt=""
              />
            </div>
            <div className="title-card-on-sm">
              <h5 className="font-semibold">Children Room</h5>
              <span>180,000</span>
            </div>
            <Link className="streched-link"></Link>
          </div>
        </div>
      </div>
    </section>
    //   {/* <!-- END:Browse-The-Room --> */}
  );
}

export default BrowseRoom;
