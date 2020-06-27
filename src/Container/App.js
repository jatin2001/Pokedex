import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from '../Components/CardList'
import Card from '../Components/Card';
import SearchList from '../Components/SearchList';
import information from '../Components/pokedata';
class App extends React.Component
{ 
 constructor(props)
 {
   super(props)
   this.state={
     array:information.results,
     searchField:'',
   }
 }

 onSearchChange(e)
 {  
  this.setState({searchField:e.target.value});
 }
  render()
 {  const FilterRobot = this.state.array.filter(item=>(
      item.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    ));
    console.log(FilterRobot)
    return(
        <div>
          <SearchList searchChange={this.onSearchChange.bind(this)}/>
          <CardList PokemonArray = {FilterRobot}/>
        </div>
    )
  }
}

export default App;
