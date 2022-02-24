import {Button} from "antd";
import React from 'react'
import {Wrapper} from './NewCardContainer.styles'
import CardEditForm from "../CardEditForm/CardEditForm";
import logoutClick from "../../LogoutClick";

class NewCardContainer extends React.Component {

    render() {
        return (
            <Wrapper>
                <Button onClick={logoutClick}>Logout</Button>
                <CardEditForm></CardEditForm>
            </Wrapper>
        );
    }
}
export default NewCardContainer
