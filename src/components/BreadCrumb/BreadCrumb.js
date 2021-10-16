import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BreadCrumb(props) {
  const { list } = props;
  return (
    <section className="px-4 py-8 bg-gray-100">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {list?.map?.((val, index) => {
            const aria =
              index === list?.length ? { 'aria-label': 'current-page' } : {};
            return (
              <li key={val.url}>
                <Link to={val.url} {...aria}>
                  {val.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
BreadCrumb.propTypes = { list: propTypes.array.isRequired };
export default BreadCrumb;
