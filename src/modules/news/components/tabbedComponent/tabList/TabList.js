import React from 'react';

import './TabList.css';

function TabList(props) {
  return (
    <div className='tab-list'>
      {props.children}
    </div>
  );
}

export default TabList;
