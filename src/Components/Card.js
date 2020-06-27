import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props)
    {
        super(props);
        this.state ={
            id:0,
            name:'',
            isLoad:false,
        }
    }
    componentDidMount()
    {
        fetch(`${this.props.Pokedata.url}`)
        .then(res => res.json())
        .then(res => this.setState(
            {
                id: res.id,
                name:res.name,
                isLoad:true,
            }
        ));
    }
    render() {

          const {name,id} =this.state;
            return(
                <div className=" dib br3 pa3 ma2 grow shadow-5 tc" style={{height:'350px',width:'250px',backgroundImage: 'linear-gradient(#00ffff,#ff00ff)'}}>
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt=""  style={{height:'200px',width:'200px'}}/>
                    <h1>{name}</h1>
                    <a className="f6 link dim br3 ba ph3 pv2 mb2 dib dark-blue">More Information</a>
                 </div>
            )
        
    }
}
