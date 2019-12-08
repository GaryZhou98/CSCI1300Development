import React, { Component } from 'react'
import FavoriteButton from './FavoriteButton'
import './FilterItem.css'

class FilterItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorited: this.props.item.favorited,
      artist: this.props.item.artist,
      img: this.props.item.img,
      genre: this.props.item.genre,
      era: this.props.item.era,
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.item.favorited != this.state.favorited) {
      this.setState((state) => {
        return {...state, favorited: nextProps.item.favorited}
      })
    }
  }

  toggleFavorite = () => {
    this.props.toggleFavorite()
    this.setState((state) => {
      return {...state, favorited: !state.favorited}
    })
  }

  render() {
    return (
      <div className="Item" style={{backgroundImage :  `url(${this.state.img})`}}>
        <text className="Artist">{this.state.artist}</text> 
        <text className="Description"> {this.state.genre}</text>
        <text className="Description"> {this.state.era}</text>
        <FavoriteButton toggleFavorite={this.toggleFavorite} favorited={this.state.favorited}></FavoriteButton>
      </div>
    )
  }
}

export default FilterItem;