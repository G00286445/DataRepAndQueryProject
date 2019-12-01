import React from 'react';
import '../App.css';
import PlayerItem from './playerItem';

class Players extends React.Component {

    render(){
        return this.props.myPlayers.map((player)=>{
            //console.log({player});
            return <PlayerItem key={player._id} player={player}></PlayerItem>
        });
    }
}
export default Players;