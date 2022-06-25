import React from 'react'
import StudiedCardCollapse from "./StudiedCardCollapse/StudiedCardCollapse";
import axios from "axios";
import EnvUrl from "../EnvUrl";
import {message} from "antd";

class StudiedCard extends React.Component {
    componentDidMount() {
        axios.get(EnvUrl() + 'cards/select_for_study', {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        })
            .then(res => {
                const card = res.data;
                const front = card.front
                const back = card.back
                const card_id = card.id
                const examples = card.examples
                const id = card.cards_user_id
                this.setState({ examples: examples, front: front, back: back, id: id, card_id: card_id });
            }).catch(error => {
            if (error.response.status === 401) {
                localStorage.removeItem('authToken')
                window.location.reload()
            }
            message.error(error.response.data.errors)
        })
    }

    state = {
        front: 'NO CARD',
        back: 'NO CARD'
    };

    render() { return <StudiedCardCollapse front={this.state.front}
                                           card_id={this.state.card_id}
                                           back={this.state.back}
                                           examples={this.state.examples}
                                           id={ this.state.id }> </StudiedCardCollapse> }
}

export default StudiedCard
