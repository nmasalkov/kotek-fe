import React from 'react'
import StudiedCard from "../StudiedCard";
import {Wrapper} from "../DeckContainer/DeckContainer.styles";
import {Button} from "antd";
import logoutClick from "../../LogoutClick";
import {Link} from "react-router-dom";

class StudyCardContainer extends React.Component {

    render() {
        return (
            <Wrapper>
                <Button onClick={logoutClick}>Logout</Button>
                <Link to={'../../cards'}>To cards</Link>
                <StudiedCard> </StudiedCard>

            </Wrapper>
        );
    }
}

export default StudyCardContainer
