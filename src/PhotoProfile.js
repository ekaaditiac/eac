import React from 'react';

function PhotoProfile(props){
  return(
    <div className="box-radial-photo gap-right">
      <img src={props.src} title={props.title} alt={props.title}/>
    </div>
  )
}

export default PhotoProfile;
