import React, { Component } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { DropdownItem } from 'react-bootstrap'
import './FilterSection.css'

class EraFilter extends Component {
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

  filterNineties = () => {
    this.props.onClickNineties();
    this.setState((state) => {
      return {...state, selected: '1990s'}
    })
  }

  filterZeros = () => {
    this.props.onClickZeros();
    this.setState((state) => {
      return {...state, selected: '2000s'}
    })
  }

  filterTens = () => {
    this.props.onClickTens();
    this.setState((state) => {
      return {...state, selected: '2010s'}
    })
  }

  render() {
    return (
      <div className = "FilterContainer">
        <div className = "HeadingContainer">
          <text className = "HeadingText">Filter By Era: Current - {this.state.selected} </text>
        </div>
        <DropdownButton id="dropdown-basic-button" sz='lg' variant="Primary" drop='down' title={this.state.selected}>
          <DropdownItem eventKey='1' className = "FilterButton" as="button" onClick={this.filterNineties}>1990s</DropdownItem>
          <DropdownItem eventKey='2' className = "FilterButton" as="button" onClick={this.filterZeros}>2000s</DropdownItem>
          <DropdownItem eventKey='3' className = "FilterButton" as="button" onClick={this.filterTens}>2010s</DropdownItem>
        </DropdownButton>   
        {/* <div className = "ButtonContainer">        
          <button id='All' className = "FilterButton" onClick={this.filterAll}>All</button>
          <button id='Nineties' className = "FilterButton" onClick={this.filterNineties}>1990s</button>
          <button id='Zeros' className = "FilterButton" onClick={this.filterZeros}>2000s</button>
          <button id='Tens' className = "FilterButton" onClick={this.filterTens}>2010s</button>
        </div> */}
      </div>
    )
  }
}

export default EraFilter;