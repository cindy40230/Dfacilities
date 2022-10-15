import React from 'react';
import OffreForm from './OffreForm';

export default function ModalOffre(props) {
  return (
    <div className='modal'
    style={{
      transform: props.visible ?'translateY(0vh)':'translateY(-100vh)',
      opacity:props.visible ?'1':'0'
    }}
    >
    <button  onClick={props.cache}>X</button>
    <OffreForm/>

    </div>
  )
}
