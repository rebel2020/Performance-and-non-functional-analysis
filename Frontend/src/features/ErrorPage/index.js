import React from 'react';
import './styles.scss';

const ErrorPage = props => {
  return (
    <>
      <div className="innerdiv text-centre">
        <img src="error_img.png" className="innerdiv" alt="error_image" align="left" />
        <h1>Error</h1>
        <br/>
        <h4>Error message here</h4>
      </div>
    </>
  );
};

export default ErrorPage;
