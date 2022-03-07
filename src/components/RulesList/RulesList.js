import { Carousel } from 'antd';
import React from "react"
import RuleItem from "../RuleItem/RuleItem";

function onChange(a, b, c) {
    console.log(a, b, c);
}

const contentStyle = {
    height: '1601px',
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
};

class RulesList extends React.Component {
    render() {
        return (
            <Carousel afterChange={onChange} dotPosition={'top'}>
                {this.props.rules.map(rule => (
                    <div>
                        <div style={contentStyle}>
                            <RuleItem rule={rule}></RuleItem>
                        </div>
                    </div>
                ))}
            </Carousel>
        )
    }
}

export default RulesList