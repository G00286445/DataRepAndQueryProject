import React from 'react';

class AddPlayer extends React.Component {

    constructor(){
        super();
        this.onChangePlayerName = this.onChangePlayerName.bind(this);
        this.onChangePlayerRank = this.onChangePlayerRank.bind(this);
        this.onChangePlayerBrand = this.onChangePlayerBrand.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
        Name: '',
        Rank: '',
        Brand: ''
    }
}

onChangePlayerName(e) {
    this.setState({
        Name: e.target.value
    });
}

onChangePlayerRank(e) {
    this.setState({
        Rank: e.target.value
    })
}

onChangePlayerBrand(e) {
    this.setState({
        Brand: e.target.value
    })
}

onSubmit(e) {
        e.preventDefault();
        console.log(`button clicked
        ${this.state.Name},
        ${this.state.Rank},
        ${this.state.Brand}`);
        this.setState({
            Title: '',
            Year: '',
            Poster: ''
        })
    }
    

    render() {
        return (
            <div className="App">
                <h1>Add player</h1>

      <form onSubmit={this.onSubmit}>
            <div className="form-group">
            <label>Add Player Name: </label>
            <input type="text"
            className="form-control"
            value={this.state.Name}
            onChange={this.onChangePlayerName}
            />
        </div>
            <div className="form-group">
            <label>Add Player Rank: </label>
            <input type="text"
            className="form-control"
            value={this.state.Rank}
            onChange={this.onChangePlayerRank}
        />
        </div>
            <div className="form-group">
            <label>Add Player brand: </label>
            <input type="text"
            className="form-control"
            value={this.state.Poster}
            onChange={this.onChangePlayerBrand}
        />
        </div>
            <div className="form-group">
            <input type="submit" value="Add Player" className="btn btn-primary" />
            </div>
            </form>
         </div>
        );
    }
}
export default AddPlayer;