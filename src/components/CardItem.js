import React from "react"
import {Link} from "react-router-dom";
import axios from "axios";
import EnvUrl from "../EnvUrl"

class CardItem extends React.Component {
    deleteCard = () => {
        if(window.confirm('Are you sure you want to delete a card?') === false) {
            return null
        } else {
            axios.delete(EnvUrl() + 'cards/' + (this.props.id), {
                headers: {
                    'Authorization': localStorage.getItem('authToken')
                }
            }).then(() => { window.location.reload() })
        };
    }
    render() {
        return <div className="item">
            <div className="item__content">
                {this.props.card.front} | {this.props.card.back}
                <span className="delete-button" onClick={this.deleteCard}>x</span>
                <Link to={{pathname: '/cards/' + (this.props.id) + '/edit'}}>✎</Link>
            </div>
        </div>
    }
}

export default CardItem
