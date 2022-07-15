import React, { Component } from 'react';
import Notiflix from 'notiflix';
export class Searchbar extends Component {
    state={
        photoTittle: '',
    }
    reset =() =>{
        this.setState({
            photoTittle: '',
        })
    }
    onSubmit= e =>{
        e.preventDefault();
        if(this.state.photoTittle.trim() === ''){
            return Notiflix.Notify.info('Введите что нибудь');
        }
        this.reset();
        this.props.onSubmit(this.state.photoTittle)

    }
    onChange= e =>{
        this.setState({
            photoTittle: e.target.value,
        })
    }
    render(){
        return(
            <header className="searchbar">
  <form onSubmit={this.onSubmit} className="form">
    <button type="submit" className="button">
      <span className="button-label">поиск</span>
    </button>

    <input
    onChange={this.onChange}
      className="input"
      value={this.state.photoTittle}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }
}
