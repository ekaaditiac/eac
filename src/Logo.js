import React from 'react';

function Logo(props){
  return(
    <a href="eka" title="eka: Eka Aditia C">
      <img src={props.src} title={props.title} alt={props.alt}/>
      
    </a>
  )
}

export default Logo;
