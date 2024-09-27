import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function AddToFavorite() {
  return (
    <>
        <span>Add To Favorite</span>
        <FontAwesomeIcon icon={faHeart} color='red' />
    </>
  )
}

export default AddToFavorite;