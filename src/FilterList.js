import React, { Component } from 'react'
import gunnaImg from './img/gunna.png'
import './FilterList.css'
import brockhamptonImg from './img/brockhampton.png'
import FilterItem from './FilterItem'
import GenreFilter from './GenreFilter'
import EraFilter from './EraFilter'

class FilterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: initialItems(),
      genre: 'All',
      era: 'All',
      sort: false,
    }

    console.log(this.state.items);
  }

  filterGenreAll = () => {
    this.setState((state) => {
      let temp = initialItems();
      if(state.sort) {
        temp = temp.sort((a,b) => {return a.artist.localeCompare(b.artist)});
      }
      return {...state, 
        genre: 'All', 
        items: temp.filter((item) => {return state.era === 'All' | item.era === state.era})}
    })
  }

  filterRap = () => {
    this.setState((state) => {
      let temp = initialItems();
      if(state.sort) {
        temp = temp.sort((a,b) => {return a.artist.localeCompare(b.artist)});
      }
      return {...state, 
        genre: 'Rap', 
        items: temp
        .filter((item) => {return item.genre === 'Rap'})
        .filter((item) => {return state.era === 'All' | item.era === state.era})}
    })
  }

  filterPop = () => {
    this.setState((state) => {
      let temp = initialItems();
      if(state.sort) {
        temp = temp.sort((a,b) => {return a.artist.localeCompare(b.artist)})
      }
      return {...state, 
        genre: 'Pop', 
        items: temp
        .filter((item) => {return item.genre === 'Pop'})
        .filter((item) => {return state.era === 'All' | item.era === state.era})}
    })
  }

  
  filterEraAll = () => {
    this.setState((state) => {
      let temp = initialItems();
      if(state.sort) {
        temp = temp.sort((a,b) => {return a.artist.localeCompare(b.artist)});
      }
      return {...state, 
        era: 'All', 
        items: temp.filter((item) => {return state.genre === 'All' | item.genre === state.genre})}
    })
  }

  filterNineties = () => {
    this.setState((state) => {
      let temp = initialItems();
      if(state.sort) {
        temp = temp.sort((a,b) => {return a.artist.localeCompare(b.artist)})
      }
      return {...state, 
        era: '1990s',
        items: temp
        .filter((item) => {return item.era === '1990s'})
        .filter((item) => {return state.genre === 'All' | item.genre === state.genre})}
    })
  }

  filterZeros = () => {
    this.setState((state) => {
      let temp = initialItems();
      if(state.sort) {
        temp = temp.sort((a,b) => {return a.artist.localeCompare(b.artist)})
      }
      return {...state, 
        era: '2000s',
        items: temp
        .filter((item) => {return item.era === '2000s'})
        .filter((item) => {return state.genre === 'All' | item.genre === state.genre})}
    })
  }

  filterTens = () => {
    this.setState((state) => {
      let temp = initialItems();
      if(state.sort) {
        temp = temp.sort((a,b) => {return a.artist.localeCompare(b.artist)})
      }
      return {...state, 
        era: '2010s',
        items: temp
        .filter((item) => {return item.era === '2010s'})
        .filter((item) => {return state.genre === 'All' | item.genre === state.genre})}
    })
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
    console.log(this.state.items)
    return (
      <div className = "ListContainer">
        <div className = "HeaderContainer">
          <h1 className = "Header">Find Your Favorite Musicians!</h1>
          <GenreFilter onClickAll={this.filterGenreAll} onClickRap={this.filterRap} onClickPop={this.filterPop}/>
          <EraFilter onClickAll={this.filterEraAll} onClickNineties={this.filterNineties} onClickZeros={this.filterZeros} onClickTens={this.filterTens}/>
          <button className = "SortButton" onClick={this.sortByInitial}>Sort by initial</button>
        </div>
        <div className = "ItemContainer">
          {
            this.state.items.map((item, key) => {
              return <div className = "Items"><FilterItem key={item.artist} artist={item.artist} genre={item.genre} img={item.img}/></div>
            })
          }
        </div> 
      </div>
    )
  }
}

const initialItems = () => {
  return [
    {id: 0, artist: 'Gunna', img: {gunnaImg}, genre: 'Rap', era: '2010s'},
    {id: 1, artist: 'Drake', img: {brockhamptonImg}, genre: 'Rap', era: '2010s'},
    {id: 2, artist: 'Eminem', img: {gunnaImg}, genre: 'Rap', era: '2000s'},
    {id: 3, artist: '2Pac', img: {gunnaImg}, genre: 'Rap', era: '1990s'},
    {id: 4, artist: 'The Notorious B.I.G.', img: {brockhamptonImg}, genre: 'Rap', era: '1990s'},
    {id: 5, artist: 'Flo Rida', img: {gunnaImg}, genre: 'Rap', era: '2000s'},
    {id: 6, artist: 'Prince', img: {gunnaImg}, genre: 'Pop', era: '1990s'},
    {id: 7, artist: 'Michael Jackson', img: {brockhamptonImg}, genre: 'Pop', era: '1990s'},
    {id: 8, artist: 'Brittany Spears', img: {gunnaImg}, genre: 'Pop', era: '2000s'},
    {id: 9, artist: 'Justin Timberlake', img: {gunnaImg}, genre: 'Pop', era: '2000s'},
    {id: 10, artist: 'Taylor Swift', img: {brockhamptonImg}, genre: 'Pop', era: '2010s'},
    {id: 11, artist: 'Kesha', img: {gunnaImg}, genre: 'Pop', era: '2010s'},
  ];
}

export default FilterList;