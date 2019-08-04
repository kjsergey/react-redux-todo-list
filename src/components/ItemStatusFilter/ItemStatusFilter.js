import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './ItemStatusFilter.css';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'done', label: 'Done' }
];

const ItemStatusFilter = ({filter}) => {
  const buttons = filterButtons.map(({name, label}) => {
    const isActive = name === filter;
    const classNames = 'btn btn-filter ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

    return (
      <Link to={name} key={name}>
        <button type="button" className={classNames}>
          {label}
        </button>
      </Link>
    );
  });

  return (
    <div className="btn-group">
      { buttons }
    </div>
  );
};

ItemStatusFilter.propTypes = {
  filter: PropTypes.string
};

export default ItemStatusFilter;
