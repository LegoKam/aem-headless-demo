import React from 'react';
import {fetchData} from '../utils/fetchData';
import Text from './Text';
import Title from './Title';
import Image from './Image';

const Container = ({ resource, type, isComponent = "" }) => {
  const [components, setComponents] = React.useState(null);

  const createChildComponents = (items, itemid) => {
    const components = [];
    for(let key in items) {
      const item = items[key];
      const type = item[":type"].split("/").pop();
      let itemType, Component;
      
      switch(type) {
        case "image": 
          itemType = "media";
          Component = Image;
          break;
        case "text": 
          itemType = item.richText ? "richtext" : "text";
          Component = item.type ? Title : Text;
          break;
        case "container": 
          itemType = "container";
          Component = Container;
          break;
        default: 
          itemType = "component";
          Component = () => (<div/>);
          break;
      }

      const props = {
        resource: `${itemid}/${key}`,
        type: itemType,
        data: item,
        isComponent: "component"
      };
      components.push(<Component key={key} {...props} />)
    }
    return components;
  }

  React.useEffect(() => {
    if(!resource) return;
    fetchData(resource).then((data) => {
      const childNodes = Object.keys(data).filter(key => typeof data[key] === 'object');
      console.log("CHILD NODES");
      console.log(childNodes);
    });
  }, [resource]);
  
  return (
    <div className="container" data-aue-filter="container-filter" data-aue-model="container" data-aue-behavior={isComponent} data-aue-resource={resource} data-aue-type={type}>
     {components}
    
    Yes the container is loaded with my content!!

    </div>
  )
};

export default Container;