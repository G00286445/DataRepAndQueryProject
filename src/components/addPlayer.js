import React from 'react';
import axios from 'axios';
import { newExpression } from '@babel/types';

class AddPlayer extends React.Component {

    constructor(props){
        super(props);

        this.state = {Name:'',
                    Rank:'',
                   Brand:'',
                   Base64Image:''};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);
        this.handlePlayerRankChange = this.handlePlayerRankChange.bind(this);
        this.handlePlayerBrandChange = this.handlePlayerBrandChange.bind(this);
        }
         handlePlayerNameChange(e){
        this.setState({Name: e.target.value});
        }

        handlePlayerRankChange(e){
                this.setState({Rank: e.target.value});
        }

        handlePlayerBrandChange(e){
                this.setState({Brand: e.target.value});
        }

        getBase64(file, cb) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (){
                cb(reader.result)
            };
            reader.onerror = function (error) {
                console.log('Error', error);
            };
        }

        handleSubmit(e){
            alert(this.state.Name+ " " + this.state.Rank+" "+ this.state.Brand);
            e.preventDefault();

            const newPlayer = {
                name: this.state.Name,
                rank: this.state.Rank,
                brand: this.state.Brand
            };
            axios.post('http://localhost:4000/api/players',newPlayer)
            .then()
            .catch();

            this.setState({Name:'',
                  Rank:'',
                Brand:''});    
        }

        render() {
            return (
              <div>
                <h1>Add Players here</h1>
                <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                  <label>Player Name</label>
                  <input type='text' 
                  className='form-control' 
                  value={this.state.Name} 
                  onChange={this.handlePlayerNameChange}
                  ></input>
                </div>
                <div className='form-group'>
                  <label>Player Rank</label>
                  <input
                  type='text'
                  className='form-control'
                  value={this.state.Year}
                  onChange={this.handlePlayerRankChange}
                  ></input>
                </div>
                <div className='form-group'>
                  <label>Player Brand</label>
                  <textarea
                  row='3'
                  className='form-control'
                  value={this.state.Brand}
                  onChange={this.handlePlayerBrandChange}
                  ></textarea>
                </div>
                <div>
                  <label>Upload Profile Picture</label>
                  <input
                  type='file'
                  className='form-control'
                  onChange={this.handleImageChange}
                  ></input>
        
                </div>
                <div>
                  <input
                  type="submit"
                  value="Add Player">
                  </input>
                </div>
                </form>
                <img src={this.state.Base64Image}></img>
              </div>
            );
          }
        }
export default AddPlayer;