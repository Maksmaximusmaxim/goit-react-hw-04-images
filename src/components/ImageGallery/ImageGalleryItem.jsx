import React from 'react';
import css from '../ImageGallery/imgItem.module.css'
export const ImageGalleryItem =({webformatURL,largeImageURL,tags,onClick})=>{
    return (
    <li className={css.imageGalleryItem}>
    <img className={css.imageGalleryItemimage} src={webformatURL} alt={tags} onClick={()=>onClick(largeImageURL)}/>
  </li>)
}