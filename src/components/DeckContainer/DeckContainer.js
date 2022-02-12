import React, {useCallback} from "react"
import CardsList from "../CardsList";
import axios from 'axios';
import {Button, message} from "antd";
import {Wrapper} from './DeckContainer.styles'
import {Link} from "react-router-dom";

const onClick = () => {
    localStorage.clear('authToken');
    window.location.reload()
}

class DeckContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:3000/cards`, {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        })
            .then(res => {
                const cards = res.data;
                this.setState({ cards });
            }).catch(error => {
                if (error.response.status === 401) {
                    localStorage.removeItem('authToken')
                    // Todo make it react way
                    window.location.reload()
                }
                message.error(error.response.data.errors)
        })
    }

    state = {
        cards: []
    };

    render() {
        return (
            <Wrapper>
                <Button onClick={onClick}>Logout</Button>
                <Link to='new'><Button >Create new card!</Button></Link>
                <CardsList cards={this.state.cards} />
            </Wrapper>
        );
    }
}
export default DeckContainer
