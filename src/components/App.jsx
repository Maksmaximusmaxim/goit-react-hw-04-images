import React from 'react';
import {Searchbar} from '../components/Searchbar/Searchbar';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
export class App extends React.Component{
  state={
    photos: '',
    page: 1,
    
  }
  inputData = data => {
    console.log(data)
    this.setState({
      photos:data,
      page:1,
      loader:true,
    })
    
  }
loadMore = ()=>{
this.setState(prevState=>({page:prevState.page + 1,})
  
)
}
  render(){
      return (
  <div>
    <Searchbar onSubmit={this.inputData}/>
    <ImageGallery inputPhotoTittle={this.state}/>
    <Button onClick={this.loadMore}/>
   
  </div>
  )
  }

};
