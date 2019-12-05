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
      era: this.props.era,
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
    return (
      <div className="Item" style={{backgroundImage :  `url(${this.state.img})`}}>
        <text className="Artist">{this.state.artist}</text> 
        <text className="Description"> {this.state.genre}</text>
        <text className="Description"> {this.state.era}</text>
        <IconButton onClick={this.toggleFavorite}>{icon}</IconButton>
      </div>
    )
  }
}

export default FilterItem;