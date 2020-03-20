import React from 'react';
import axios from 'axios';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          pokemon: []
        }
        this.getPokemon = this.getPokemon.bind(this)
    }
    
    getPokemon() { 
      axios.get(`https://pokeapi.co/api/v2/generation/1/?limit=20`)
      .then((response) => {
      // handle success
      //response.text()
      console.log(response)
      this.setState({pokemon: response.data.pokemon_species});
    })
    // .then((response) => {
    // })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    }

    render() {
      return (
        <div>
          <button onClick={this.getPokemon}>Poke Go</button>
          <div>
            <ul>
            {this.state.pokemon.map((poke, index) => {
            return (
            <li key={index}>{poke.name}</li>
            )
          })}
            </ul>
          </div>
        </div>
      )
    }
    
}