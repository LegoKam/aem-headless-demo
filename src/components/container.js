import React from 'react';
import {fetchData, getAuthorHost} from '../utils/fetchData';
import Text from './Text';
import Image from './Image';

const Container = ({ resource, type, isComponent = "" }) => {
  const [components, setComponents] = React.useState(null);

  React.useEffect(() => {
    if(!resource) return;
    fetchData(resource).then((data) => {
      const childNodes = Object.keys(data).filter(key => typeof data[key] === 'object');
      const childComponents = renderChildComponents(childNodes, data);
      console.log("childComponents:====== " );
      console.log(childComponents);
      setComponents(childComponents);
    });
  }, [resource]);


  const renderChildComponents = (childNodes, data) => {
    return childNodes.map((key) => {
      const childNode = data[key];
      if (childNode['sling:resourceType'] === 'core/franklin/components/text/v1/text') {
        const cfConnection = `urn:aemconnection:${getAuthorHost()}/${resource}/${key}`;
        return <Text key={key} content={childNode.text} connectionAndPath={cfConnection} />;
      } else if (childNode['sling:resourceType'] === 'core/franklin/components/image/v1/image') {
        const cfConnection = `urn:aemconnection:${getAuthorHost()}/${resource}/${key}`;
        return <Image src={childNode.fileReference} connectionAndPath={cfConnection}/>;
      }
      return null;
    });
  };
  
  return (
    <div className="container" data-aue-filter="container-filter" data-aue-model="container" data-aue-behavior={isComponent} data-aue-resource={resource} data-aue-type={type}>
     {components}
    </div>
  )
};

export default Container;