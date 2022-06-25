import React from 'react'
import { Collapse } from 'antd';
import { Wrapper } from './StudiedCardsCollapse.styles'
import { submitAnswer } from "../SubmitAnswer";
import {Link} from "react-router-dom";
const { Panel } = Collapse;

class StudiedCardCollapse extends React.Component {
    render() {
        return(
            <Wrapper>
                <Collapse >
                    <Panel header={this.props.front} key="1">
                        <Link to={{pathname: '/cards/' + (this.props.card_id) + '/edit'}}>Edit card ✎</Link>
                        <div>
                            <p> {this.props.back} </p>
                            <p> {this.props.examples} </p>
                            <div className={'answers-container'}>
                                <button className={'answer-button-1'}
                                        onClick={()=> submitAnswer(1, this.props.id)}>
                                    I couldn't guess this card
                                </button>

                                <button className={'answer-button-2'}
                                        onClick={()=>submitAnswer(2, this.props.id)}>
                                    With difficulties I barely guessed
                                </button>

                                <button className={'answer-button-3'}
                                        onClick={()=>submitAnswer(3, this.props.id)}>
                                    I guessed the card after some thinking
                                </button>

                                <button className={'answer-button-4'} onClick={()=>submitAnswer(4, this.props.id)}>
                                    Easy-breasy, lemon squeesy
                                </button>
                            </div>
                        </div>
                    </Panel>
                </Collapse>
            </Wrapper>
        )
    }
}

export default StudiedCardCollapse
