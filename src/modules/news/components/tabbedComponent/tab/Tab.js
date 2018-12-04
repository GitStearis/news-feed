import React from 'react';

import './Tab.css';

function Tab(props) {
  const {
    active,
    onClick,
    children
  } = props;
  return (
    <button className={active ? 'active' : ''} onClick={onClick}>
      {children}
    </button>
  );
}

export default Tab;