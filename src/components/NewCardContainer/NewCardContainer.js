import {Button} from "antd";
import React from 'react'
import {Wrapper} from './NewCardContainer.styles'
import CardEditForm from "../CardEditForm/CardEditForm";

// todo move to separate component
const onClick = () => {
    localStorage.clear('authToken');
    window.location.reload()
}

class NewCardContainer extends React.Component {

    render() {
        return (
            <Wrapper>
                <Button onClick={onClick}>Logout</Button>
                <CardEditForm></CardEditForm>

            </Wrapper>
        );
    }
}
export default NewCardContainer