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
                const id = card.cards_user_id
                this.setState({ front: front, back: back, id: id });
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
                                           back={this.state.back}
                                           id={ this.state.id }> </StudiedCardCollapse> }
}

export default StudiedCard
