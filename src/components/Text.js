import React from 'react';


const Text = ({ text, content, connectionAndPath }) => {
  return (
    <div 
            data-aue-resource={connectionAndPath}
    >
      <div>{text}</div>
      <div 
            data-aue-type="text"
            data-aue-prop="text"
            dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Text;