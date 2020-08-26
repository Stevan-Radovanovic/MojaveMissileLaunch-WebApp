import React from 'react';

const WithClass = (props) => {
  return <div class={props.class}>{props.children}</div>;
};

export default WithClass;
