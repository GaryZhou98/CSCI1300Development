import React, { Component } from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { DropdownItem } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import './FilterSection.css'

class GenreFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.current,
    }
  }

  filterAll = () => {
    this.props.onClickAll();
    this.setState((state) => {
      return {...state, selected: 'All',}
    })
  }

  filterRap = () => {
    this.props.onClickRap();
    this.setState((state) => {
      return {...state, selected: 'Rap',}
    })
  }

  filterPop = () => {
    this.props.onClickPop();
    this.setState((state) => {
      return {...state, selected: 'Pop',}
    })
  }

  render() {
    return (
      <div className = "FilterContainer">
        <DropdownButton id="dropdown-basic-button" sz='lg' variant="Primary" drop='down' title="Genre">
          <DropdownItem toggle='true' eventKey='1' className = "FilterButton" as="button" onClick={this.filterAll}>All</DropdownItem>
          <DropdownItem toggle='true' eventKey='2' className = "FilterButton" as="button" onClick={this.filterRap}>Rap</DropdownItem>
          <DropdownItem toggle='true' eventKey='3' className = "FilterButton" as="button" onClick={this.filterPop}>Pop</DropdownItem>
        </DropdownButton>
      </div>

    )
  }
}

export default GenreFilter;
