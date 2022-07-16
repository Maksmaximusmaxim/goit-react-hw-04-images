import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import {Loader} from '../Loader/Loader';
export class ImageGallery extends React.Component{

    state={
returnedPhotos:null,
loader:false,
    }
   componentDidUpdate(prevProps,prevState){
 
    if(prevProps.inputPhotoTittle!== this.props.inputPhotoTittle){
        this.setState({
            loader:true,
        });
       setTimeout(()=>{
        fetch(`https://pixabay.com/api/?q=${this.props.inputPhotoTittle.photos}&page=${this.props.inputPhotoTittle.page}&key=27737984-087ff865c77ff0cde11c21156&image_type=photo&orientation=horizontal&per_page=12`).then(res=> res.json()).then(r=> this.setState({returnedPhotos:r.hits}) ).finally(this.setState({loader:false}))
       }, 300)
   
    }
    
    }

render(){

  
    return (
        <>
    {this.state.loader && <Loader/>} 
<ul>
{this.state.returnedPhotos && this.state.returnedPhotos.map(p => <ImageGalleryItem key={p.id} webformatURL={p.webformatURL} largeImageURL={p.largeImageURL} tags={p.tags} />) }
</ul>
</>

    )
}
}