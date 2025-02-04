import React from 'react';


const Text = ({ text, content, connectionAndPath }) => {
  return (
    <div 
            data-aue-resource={connectionAndPath}
            data-aue-type="richtext"
            data-aue-prop="text"
            dangerouslySetInnerHTML={{ __html: content }} >
    </div>
  );
};

export default Text;