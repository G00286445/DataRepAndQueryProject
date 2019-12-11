import React from 'react';
import '../App.css';
import Players from './players';
import axios from 'axios';

class View extends React.Component {
    state = { 
        players: [] 
    };

    componentDidMount(){
        axios.get('http://localhost:4000/api/players')
        .then(response => {
            this.setState({ players: response.data.players});
        })
        .catch((error)=>{
            console.log(error);
        });
    }
render() {
    return (
        <div className="App">
            <h1>Player List</h1>
            <Players myPlayers={this.state.players}></Players>
        </div>
    );
 }
}
export default View;