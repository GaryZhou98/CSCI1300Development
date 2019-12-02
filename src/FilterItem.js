import React, { Component } from 'react'
import { IconButton } from '@material-ui/core'
import { Favorite, FavoriteBorder } from '@material-ui/icons'
import './FilterItem.css'

class FilterItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorited: this.props.favorited,
      artist: this.props.artist,
      img: this.props.img,
      genre: this.props.genre,
    }
  }

  toggleFavorite = () => {
    this.props.toggleFavorite()
    this.setState((state) => {
      return {...state, favorited: !state.favorited}
    })
  }

  render() {
    let icon = this.state.favorited ? <Favorite/> : <FavoriteBorder/>
    if(!this.props.favoriteOnly || this.state.favorited) {
      return (
        <div className="Item">
          <img src={this.state.img} alt='Artist'/>
          <h3 style={{"marginBottom": "2px",}}>{this.state.artist}</h3> 
          <text className="Genre">Genre: {this.state.genre}</text>
          <IconButton onClick={this.toggleFavorite}>{icon}</IconButton>
        </div>
      )
    }

    return (
      <div></div>
    )
  }
}

export default FilterItem;