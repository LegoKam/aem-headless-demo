import React from 'react';
const {REACT_APP_AEM_AUTHOR, REACT_APP_AEM_PUBLISH} = process.env;

const Image = ({ src,  alt = '', className = '', connectionAndPath }) => {
  return <img src={`${REACT_APP_AEM_PUBLISH}${src}`} alt={alt} className={className} />;
};

export default Image;