import React, { Component } from 'react'
import Card from './Card';
export default class CardList extends Component {
    constructor(props)
    {
      super(props);
      this.state={
          pokeList:[],
          itr:0,
          Searched:'',
          resultArray:[],
      }
    }

    componentDidMount()
    {
        this.setState(prevState =>(
            {
                pokeList:this.props.PokemonArray.filter((poke,index)=>(
                    index >=prevState.itr && index<= prevState.itr+9
                )),
                itr: prevState.itr+10,
            }
        ))
    }
  
   
    handleNext()
    {
        this.setState(prevState =>(
            {   pokeList: this.props.PokemonArray.filter((poke,index)=>(
                index >=prevState.itr && index< prevState.itr+10
                )),
                itr: prevState.itr+10,
            }
        ))
    }

    handlePrev()
    {
        this.setState(prevState =>(
            {   pokeList: this.props.PokemonArray.filter((poke,index)=>(
                index >=prevState.itr && index<= prevState.itr-10
                )),
                itr:prevState.itr-10,
             }
        )) 
    }
    render() {
        return (
            <div className='tc'>
               {
                      this.state.pokeList.map((pokemon,index)=>(
                        <Card key={pokemon.name} Pokedata ={pokemon}/>
                    ))
                }
                { 
                   this.state.itr>10?<button onClick={this.handlePrev.bind(this)}>Previous</button>:' '
                }
                { 
                   this.state.itr<964?<button onClick={this.handleNext.bind(this)}>Next</button>:' '
                }
            </div>
        )
    }
}
