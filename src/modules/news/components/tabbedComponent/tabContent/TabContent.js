import React from 'react';

import './TabContent.css';

function TabContent(props) {
  return (
    <div className='tab-content'>
      {props.children}
    </div>
  );
}

export default TabContent;