import React, { Component } from 'react'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import { DropdownItem } from 'react-bootstrap'
// import Dropdown from 'react-bootstrap/Dropdown'
import './FilterSection.css'

class GenreFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All', 
      show: false,
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
    console.log(this.state)
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
        {/* {/* <DropdownButton id="dropdown-basic-button" show={this.state.show} sz='lg' drop='down' title={this.state.selected}>
          <DropdownItem toggle='true' eventKey='1' className = "FilterButton" as="button" onClick={this.filterAll}>All</DropdownItem>
          <DropdownItem toggle='true' eventKey='2' className = "FilterButton" as="button" onClick={this.filterRap}>Rap</DropdownItem>
          <DropdownItem toggle='true' eventKey='3' className = "FilterButton" as="button" onClick={this.filterPop}>Pop</DropdownItem>
        </DropdownButton>   
        <Dropdown onToggle={() => {this.setState((state) => {return {...state, show: !this.state.show}})}}>
          <Dropdown.Toggle variant="Primary" id="dropdown-basic">
            {this.state.selected}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey='1' className = "FilterButton" as="button" onClick={this.filterAll}>All</Dropdown.Item>
            <Dropdown.Item eventKey='2' className = "FilterButton" as="button" onClick={this.filterRap}>Rap</Dropdown.Item>
            <Dropdown.Item eventKey='3' className = "FilterButton" as="button" onClick={this.filterPop}>Pop</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
      
    )
  }
}

export default GenreFilter;