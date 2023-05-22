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
                const prioritized = card.prioritized
                const card_id = card.id
                const examples = card.examples
                const id = card.cards_user_id
                this.setState({
                    examples,
                    front,
                    back,
                    id,
                    card_id,
                    prioritized,
                });
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
        back: 'NO CARD',
        prioritized: false
    };

    render() { return <StudiedCardCollapse front={this.state.front}
                                           card_id={this.state.card_id}
                                           back={this.state.back}
                                           prioritized={this.state.prioritized}
                                           examples={this.state.examples}
                                           id={ this.state.id }> </StudiedCardCollapse> }
}

export default StudiedCard
