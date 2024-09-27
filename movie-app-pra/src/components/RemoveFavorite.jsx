import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareMinus} from '@fortawesome/free-solid-svg-icons';

function RemoveFavorite() {
  return (
    <>
        <span className='my-2'>Remove</span>
        <FontAwesomeIcon icon={faSquareMinus} color='red' />
    </>
  )
}

export default RemoveFavorite