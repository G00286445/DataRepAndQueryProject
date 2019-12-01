import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

class PlayerItem extends React.Component {
    constructor(){
        super();
        this.DeletePlayer = this.DeletePlayer.bind(this);
      }
    
      DeletePlayer(e){
        console.log("Delete Clicked");
        axios.delete("http://localhost:4000/api/players/"+this.props.player._id)
        .then()
        .catch();
    
      }
    
        render(){
            return(
                <div>
                    {/* <h4>{this.props.movie.Title}</h4>
                    <p>{this.props.movie.Year}</p>
                    <img src={this.props.movie.Poster}></img> */}
    
    
      <Card  border="primary" style={{ width: '28rem' }}>
      <Card.Header>{this.props.player.name}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
        <img src={this.props.player.poster}></img>
          <footer>
          {this.props.player.rank}
          </footer>
        </blockquote>
      </Card.Body>
      <Button variant="danger" onClick={this.DeletePlayer}>Delete</Button>
    <Link to={"/edit/" + this.props.player._id} className="btn btn-primary">Edit</Link>
    </Card>
                </div>
            )
        }
    }
export default PlayerItem;