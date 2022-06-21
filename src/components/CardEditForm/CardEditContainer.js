import React from "react"
import CardEditForm from "./CardEditForm";
import axios from "axios";
import EnvUrl from "../../EnvUrl";
import {message} from "antd";

class CardEditContainer extends React.Component {

    render () {
        return(
            <CardEditForm
            />
        )
    }
}

export default CardEditContainer;
