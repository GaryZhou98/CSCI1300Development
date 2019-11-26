import React, { Component } from 'react'
import './GenreFilter.css'

class GenreFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 'All', 
    }
  }

  filterAll = () => {
    this.props.onClickAll();
    this.setState((state) => {
      return {...state, selected: 'All'}
    })
  }

  filterRap = () => {
    this.props.onClickRap();
    this.setState((state) => {
      return {...state, selected: 'Rap'}
    })
  }

  filterPop = () => {
    this.props.onClickPop();
    this.setState((state) => {
      return {...state, selected: 'Pop'}
    })
  }

  render() {
    return (
      <div className = "FilterContainer">
        <div className = "HeadingContainer">
          <text className = "HeadingText">Filter By Genre: Current - {this.state.selected} </text>
        </div>
        <div className = "ButtonContainer">        
          <button id='All' className = "FilterButton" onClick={this.filterAll}>All</button>
          <button id='Rap' className = "FilterButton" onClick={this.filterRap}>Rap</button>
          <button id='Pop' className = "FilterButton" onClick={this.filterPop}>Pop</button>
        </div>
      </div>
    )
  }
}

export default GenreFilter;