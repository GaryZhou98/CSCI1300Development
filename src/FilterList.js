import React, { Component } from 'react'
import gunnaImg from './img/gunna.png'
import './FilterList.css'
import brockhamptonImg from './img/brockhampton.png'
import FilterItem from './FilterItem'
import GenreFilter from './GenreFilter'

class FilterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: initialItems(),
      sort: false,
    }
  }

  
  filterAll = () => {
    if(this.state.sort) {
      this.setState((state) => {
        return {...state, items: initialItems().sort((a,b) => {return a.artist.localeCompare(b.artist)})}
      })
    } else {
      this.setState((state) => {
        return {...state, items: initialItems()}
      })
    }
  }

  filterRap = () => {
    if(this.state.sort) {
      this.setState((state) => {
        return {...state, items: initialItems()
          .filter((item) => {return item.genre === 'Rap'})
          .sort((a,b) => {return a.artist.localeCompare(b.artist)})}
      })
    } else {
      this.setState((state) => {
        return {...state, items: initialItems().filter((item) => {return item.genre === 'Rap'})}
      })
    }
  }

  filterPop = () => {
    if(this.state.sort === true) {
      this.setState((state) => {
        return {...state, items: initialItems()
          .filter((item) => {return item.genre === 'Pop'})
          .sort((a,b) => {return a.artist.localeCompare(b.artist)})
        }
      })
    } else {
      this.setState((state) => {
        return {...state, items: initialItems().filter((item) => {return item.genre === 'Pop'})}
      })
    }
  }

  sortByInitial = () => {
    this.setState((state) => {
      return {...state,
        items: state.items.sort((a,b) => {return a.artist.localeCompare(b.artist)}),
        sort: true,
      }
    })
  }

  render() {
    return (
      <div className = "ListContainer">
        <div className = "HeaderContainer">
          <h1 className = "Header">Find Your Favorite Musicians!</h1>
          <GenreFilter onClickAll={this.filterAll} onClickRap={this.filterRap} onClickPop={this.filterPop}/>
          <button className = "SortButton" onClick={this.sortByInitial}>Sort by initial</button>
        </div>
        <div className = "ItemContainer">
          {
            this.state.items.map((item, key) => {
              return <FilterItem key={item.artist} artist={item.artist} genre={item.genre} img={item.img}/>
            })
          }
        </div> 
      </div>
    )
  }
}

const initialItems = () => {
  return [
    {id: 0, artist: 'Gunna', img: {gunnaImg}, genre: 'Rap'},
    {id: 1, artist: 'Drake', img: {brockhamptonImg}, genre: 'Rap'},
    {id: 2, artist: 'Eminem', img: {gunnaImg}, genre: 'Rap'},
    {id: 3, artist: '2Pac', img: {gunnaImg}, genre: 'Rap'},
    {id: 4, artist: 'The Notorious B.I.G.', img: {brockhamptonImg}, genre: 'Rap'},
    {id: 5, artist: 'Flo Rida', img: {gunnaImg}, genre: 'Rap'},
    {id: 6, artist: 'Prince', img: {gunnaImg}, genre: 'Pop'},
    {id: 7, artist: 'Michael Jackson', img: {brockhamptonImg}, genre: 'Pop'},
    {id: 8, artist: 'Brittany Spears', img: {gunnaImg}, genre: 'Pop'},
    {id: 9, artist: 'Justin Timberlake', img: {gunnaImg}, genre: 'Pop'},
    {id: 10, artist: 'Taylor Swift', img: {brockhamptonImg}, genre: 'Pop'},
    {id: 11, artist: 'Kesha', img: {gunnaImg}, genre: 'Pop'},
  ];
}

export default FilterList;