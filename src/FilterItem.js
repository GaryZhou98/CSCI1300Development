import React, { Component } from 'react'
import './FilterItem.css'

class FilterItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorited: false,
      artist: this.props.artist,
      img: this.props.img,
      genre: this.props.genre,
    }
  }

  render() {
    return (
      <div className="Item">
        <img src={this.state.img} alt='Artist'/>
        <h3 style={{"marginBottom": "2px",}}>{this.state.artist}</h3> 
        <text className="Genre">Genre: {this.state.genre}</text>
      </div>
    )
  }
}

export default FilterItem;