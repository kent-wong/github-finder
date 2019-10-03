import React from 'react';
import spinImg from './spinner.gif'

const Spinner = () => {
  return (
    <React.Fragment>
      <img src={spinImg} alt='Loading...'
        style={{ width: '200px', margin: 'auto', display: 'block' }} />
    </React.Fragment>
  );
}

export default Spinner;
