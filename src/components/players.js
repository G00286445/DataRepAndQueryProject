import React from 'react';
import '../App.css';
import PlayerItems from './playerItem';

class Players extends React.Component {

    render() {
        return this.props.myPlayers.map((player)=>
        {
            return <PlayerItems id={player.id} player={player}></PlayerItems>
        });
    }
}
export default Players;