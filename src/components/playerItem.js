import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card'

class PlayerItem extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.player.Name}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>{this.props.player.Rank}</p>
                            <footer>
                                {this.props.player.Brand}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default PlayerItem;