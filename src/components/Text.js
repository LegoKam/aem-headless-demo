import React from 'react';

const Text = ({ text, content }) => {
  return (
    <div>
      <div>{text}</div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default Text;