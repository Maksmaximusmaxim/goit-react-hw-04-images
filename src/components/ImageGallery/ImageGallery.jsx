import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
export class ImageGallery extends React.Component{

    state={
returnedPhotos:null,
    }
   componentDidUpdate(prevProps,prevState){
    if(prevProps.inputPhotoTittle!== this.props.inputPhotoTittle){
       fetch(`https://pixabay.com/api/?q=${this.props.inputPhotoTittle}&page=1&key=27737984-087ff865c77ff0cde11c21156&image_type=photo&orientation=horizontal&per_page=12`).then(res=> res.json()).then(r=> this.setState({returnedPhotos:r.hits}) )
    }
    
    }

render(){

  
    return (
<ul>
{this.state.returnedPhotos && this.state.returnedPhotos.map(p => <ImageGalleryItem key={p.id} webformatURL={p.webformatURL} largeImageURL={p.largeImageURL} tags={p.tags} />) }
</ul>
    )
}
}