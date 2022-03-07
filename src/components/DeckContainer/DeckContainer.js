import React, {useCallback} from "react"
import CardsList from "../CardsList";
import axios from 'axios';
import {Button, message} from "antd";
import {Wrapper} from './DeckContainer.styles'
import EnvUrl from "../../EnvUrl";
import {Link} from "react-router-dom";
import logoutClick from "../../LogoutClick";


class DeckContainer extends React.Component {
    componentDidMount() {
        axios.get(EnvUrl() + 'cards', {
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
                <Button onClick={logoutClick}>Logout</Button>
                <Link to='new'><Button >Create new card!</Button></Link>
                <Link to='study'><Button >Start studying</Button></Link>
                <Link to='../rules'><Button >See rules</Button></Link>
                <Link to='../rules/new'><Button >Create new rule!</Button></Link>
                <CardsList cards={this.state.cards} />
            </Wrapper>
        );
    }
}
export default DeckContainer
