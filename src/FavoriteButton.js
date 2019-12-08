import React, { Component } from 'react'
import { IconButton } from '@material-ui/core'
import { Favorite, FavoriteBorder } from '@material-ui/icons'

export default class FavoriteButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorited: this.props.favorited,
    }
  }

  toggleFavorite = () => {
    this.props.toggleFavorite();
    this.setState((state) => {
      return {...state, favorited: !state.favorited};
    })
  }

  render() {
    let icon = this.state.favorited ? <Favorite/> : <FavoriteBorder/>
    return (
      <div>
        <IconButton onClick={this.toggleFavorite}>{icon}</IconButton>
      </div>
    )
  }
}
