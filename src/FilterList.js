import React, { Component } from 'react'
import gunnaImg from './img/gunna.png'
import drakeImg from './img/drake.png'
import eminemImg from './img/eminem.png'
import biggieImg from './img/biggie.png'
import britneyImg from './img/britney.png'
import jtImg from './img/jt.png'
import mjImg from './img/mj.png'
import princeImg from './img/prince.png'
import taylorImg from './img/taylor.png'
import keshaImg from './img/kesha.png'
import pacImg from './img/2pac.png'
import floridaImg from './img/florida.png'
import logo from './img/HitsLibrary.png'

import './FilterList.css'
import FilterItem from './FilterItem'
import GenreFilter from './GenreFilter'
import EraFilter from './EraFilter'


class FilterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: initialItems(),
      displayItems: initialItems(),
      favoriteItems: [],
      genre: 'All',
      era: 'All',
      sort: false,
      favoriteOnly: false,
    }

    console.log(this.state.items);
  }


  render() {
    let favoriteButtonText = this.state.favoriteOnly ? 'Show All' : 'Favorites'
    console.log(this.state.displayItems);
    return (
      <div className = "ListContainer">
            <div className = "HeaderContainer">
              <div class = "LogoContainer">
                <div class = "LogoText">
                    <h1 className = "Header">HitsFinder</h1>
                </div>
              </div>
              <div className = "OptionsContainer">
                  <div className = "Item1">
                    <GenreFilter current={this.state.genre} onClickAll={this.filterGenreAll} onClickRap={this.filterRap} onClickPop={this.filterPop}/>
                  </div>

                  <div className = "Item2">
                    <EraFilter current={this.state.era} onClickAll={this.filterEraAll} onClickNineties={this.filterNineties} onClickZeros={this.filterZeros} onClickTens={this.filterTens}/>
                  </div>

                  <div class = "Item3">
                    <button className = "SortButton" onClick={this.sortByInitial}>Sort</button>
                  </div>

                  <div className = "Item4">
                    <button className = "SortButton" onClick={() => {this.setState((state)=> {return {...state, displayItems: state.displayItems, favoriteOnly:!state.favoriteOnly}})}}>{favoriteButtonText}</button>
                  </div>

                  <div className = "Item5">
                    <button className = "SortButton" onClick={() => {this.setState((state)=> {return {
                      items: initialItems(),
                      displayItems: initialItems(),
                      favoriteItems: [],
                      genre: 'All',
                      era: 'All',
                      sort: false,
                      favoriteOnly: false,}})}}>Reset</button>
                  </div>
              </div>

            </div>
            <div className = "ItemContainer">
              {
                this.state.displayItems.map((item, key) => {
                  if(!this.state.favoriteOnly || item.favorited) {
                    return <div className = "Items"><FilterItem key={item.artist} favorited={item.favorited} toggleFavorite={() => {this.addToFavorite(item)}} era={item.era} artist={item.artist} genre={item.genre} img={item.img}/></div>
                  }
                })
              }
            </div>


      </div>
    )
  }


  filterGenreAll = () => {
    this.setState((state) => {
      let temp = this.state.items;
      if(state.sort) {
        temp = temp.sort((a,b) => {return a.artist.localeCompare(b.artist)});
      }
      return {...state,
        genre: 'All',
        displayItems: temp.filter((item) => {return state.era === 'All' | item.era === state.era})}
    })
  }

  filterRap = () => {
    this.setState((state) => {
      let temp = this.state.items;
      if(state.sort) {
        temp = temp.sort((a,b) => {return a.artist.localeCompare(b.artist)});
      }
      console.log(temp)
      return {...state,
        genre: 'Rap',
        displayItems: temp
        .filter((item) => {return item.genre === 'Rap'})
        .filter((item) => {console.log(state.era === 'All' | item.era === state.era); return state.era === 'All' | item.era === state.era})}
    })
  }

  filterPop = () => {
    this.setState((state) => {
      let temp = this.state.items;
      if(state.sort) {
        temp = temp.sort((a,b) => {return a.artist.localeCompare(b.artist)})
      }
      return {...state,
        genre: 'Pop',
        displayItems: temp
        .filter((item) => {return item.genre === 'Pop'})
        .filter((item) => {return state.era === 'All' | item.era === state.era})}
    })
  }


  filterEraAll = () => {
    this.setState((state) => {
      let temp = this.state.items;
      if(state.sort) {
        temp = temp.sort((a,b) => {return a.artist.localeCompare(b.artist)});
      }
      return {...state,
        era: 'All',
        displayItems: temp.filter((item) => {return state.genre === 'All' | item.genre === state.genre})}
    })
  }

  filterNineties = () => {
    this.setState((state) => {
      let temp = this.state.items;
      if(state.sort) {
        temp = temp.sort((a,b) => {return a.artist.localeCompare(b.artist)})
      }
      return {...state,
        era: '1990s',
        displayItems: temp
        .filter((item) => {return item.era === '1990s'})
        .filter((item) => {return state.genre === 'All' | item.genre === state.genre})}
    })
  }

  filterZeros = () => {
    this.setState((state) => {
      let temp = this.state.items;
      if(state.sort) {
        temp = temp.sort((a,b) => {return a.artist.localeCompare(b.artist)})
      }
      return {...state,
        era: '2000s',
        displayItems: temp
        .filter((item) => {return item.era === '2000s'})
        .filter((item) => {return state.genre === 'All' | item.genre === state.genre})}
    })
  }

  filterTens = () => {
    this.setState((state) => {
      let temp = this.state.items;
      if(state.sort) {
        temp = temp.sort((a,b) => {return a.artist.localeCompare(b.artist)})
      }
      return {...state,
        era: '2010s',
        displayItems: temp
        .filter((item) => {return item.era === '2010s'})
        .filter((item) => {return state.genre === 'All' | item.genre === state.genre})}
    })
  }

  sortByInitial = () => {
    this.setState((state) => {
      return {...state,
        displayItems: state.items.sort((a,b) => {return a.artist.localeCompare(b.artist)}),
        sort: true,
      }
    })
  }

  addToFavorite = (item) => {
    // if(this.state.favoriteItems.indexOf(item) === -1) {
      item.favorited = !item.favorited;
      let temp = this.state.items.filter((el) => {return el.artist !== item.artist});
      this.setState((state) => {
        return {...state,
          items: temp.concat([item]),
          favoriteItems: state.favoriteItems.concat([item]),
        }
      })
  }
}

const initialItems = () => {
  return [
    {id: 0, artist:  'Gunna', img: gunnaImg, genre: 'Rap', era: '2010s', favorited: false},
    {id: 1, artist: 'Drake ', img: drakeImg, genre: 'Rap', era: '2010s', favorited: false},
    {id: 2, artist: 'Eminem', img: eminemImg, genre: 'Rap', era: '2000s', favorited: false},
    {id: 3, artist: '2Pac', img: pacImg, genre: 'Rap', era: '1990s'},
    {id: 4, artist: 'Notorious B.I.G.', img: biggieImg, genre: 'Rap', era: '1990s', favorited: false},
    {id: 5, artist: 'Flo Rida', img: floridaImg, genre: 'Rap', era: '2000s', favorited: false},
    {id: 6, artist: 'Prince', img: princeImg, genre: 'Pop', era: '1990s', favorited: false},
    {id: 7, artist: 'Michael Jackson', img: mjImg, genre: 'Pop', era: '1990s', favorited: false},
    {id: 8, artist: 'Brittany Spears', img: britneyImg, genre: 'Pop', era: '2000s', favorited: false},
    {id: 9, artist: 'Justin Timberlake', img: jtImg, genre: 'Pop', era: '2000s', favorited: false},
    {id: 10, artist: 'Taylor Swift', img: taylorImg, genre: 'Pop', era: '2010s', favorited: false},
    {id: 11, artist: 'Kesha', img: keshaImg, genre: 'Pop', era: '2010s', favorited: false},
  ];
}

export default FilterList;
