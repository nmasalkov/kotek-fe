import React from "react"
import axios from "axios";
import EnvUrl from "../../EnvUrl";
import {Button, message} from "antd";
import RulesList from "../RulesList/RulesList";
import logoutClick from "../../LogoutClick";
import {Link} from "react-router-dom";

class RulesContainer extends React.Component {
    // todo make standard get
    componentDidMount() {
        axios.get(EnvUrl() + 'rules', {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        })
            .then(res => {
                const rules = res.data;
                this.setState({ rules });
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
        rules: []
    };

    render() {
        return (
            <div>
                <Button onClick={logoutClick}>Logout</Button>
                <Link to={'../../cards'}>To cards</Link>
                <RulesList rules={this.state.rules}></RulesList>
            </div>
        )
    }
}

export default RulesContainer