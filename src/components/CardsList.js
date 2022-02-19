import React from "react"
import CardItem from "./CardItem";
class CardsList extends React.Component {
    render() {
        return (
            <div className="grid">
                {this.props.cards.map(card => (
                    <CardItem key={card.id} id={card.id} card={card} />
                ))}
            </div>
        )
    }
}

export default CardsList
