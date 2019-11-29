import React from 'react';
import '../App.css';
import Players from './players';
import axios from 'axios';

class View extends React.Component {
    state = { players: [] }

    componentDidMount(){
        axios.get('https://jsonblob.com/api/jsonblob/090d3cd5-e03d-11e9-a2ce-89c479f14772')

        .then(response => {
            this.setState({ players: response.data.Search});
        })
        .catch(function (error) {
            console.log(error);
        })
    }
render() {
    return (
        <div className="App">
            <h1>View Component</h1>
            <Players myPlayers={this.state.players}></Players>
        </div>
    );
 }
}
export default View;