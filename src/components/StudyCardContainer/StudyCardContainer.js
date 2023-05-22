import React from 'react'
import StudiedCard from "../StudiedCard";
import {Wrapper} from "../DeckContainer/DeckContainer.styles";
import {Button, message} from "antd";
import logoutClick from "../../LogoutClick";
import {Link} from "react-router-dom";
import axios from "axios";
import EnvUrl from "../../EnvUrl";

class StudyCardContainer extends React.Component {
    componentDidMount() {
        axios.get(EnvUrl() + 'rating', {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        })
            .then(res => {
                const ratings = res.data;
                this.setState({ ratings });
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
       ratings: {
           "nikitosik": 100,
           "nast'ka": 100
       }
    };

    render() {
        return (
            <Wrapper>
                <Button onClick={logoutClick}>Logout</Button>
                <Link to={'../../cards'}>To cards</Link>
                { Object.entries(this.state.ratings).map(([key, value]) => (
                   <div> {key} {value} </div>
                ))
                }
                <StudiedCard> </StudiedCard>

            </Wrapper>
        );
    }
}

export default StudyCardContainer
