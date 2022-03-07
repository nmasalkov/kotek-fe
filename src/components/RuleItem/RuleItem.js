import React from "react"
import {Wrapper} from "./RuleItem.styles";


class RuleItem extends React.Component {
    render() {
        return(
            <Wrapper>
                <div className="rule-container">
                    <h1 className={'rule-name'}>{this.props.rule.name}</h1>
                    <img className={'rule-image'} src={this.props.rule.image_url}/>
                    <div className={'rule-text'}> {this.props.rule.commentary} </div>
                </div>
            </Wrapper>
        )
    }
}

export default RuleItem