import React from "react"

class CardItem extends React.Component {
    render() {
        return <div className="item">
            <div className="item__content">{this.props.card.front} | {this.props.card.back}</div>
        </div>
    }
}

export default CardItem
