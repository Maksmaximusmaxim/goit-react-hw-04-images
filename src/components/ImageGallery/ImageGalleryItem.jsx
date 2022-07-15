import React from 'react';
export const ImageGalleryItem =({webformatURL,largeImageURL,tags})=>{
    return (
    <li class="gallery-item">
    <img src={webformatURL} alt={tags} />
  </li>)
}