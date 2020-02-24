import React from 'react'
import { connect } from 'react-redux'
import { fetchData } from '../actions'

class Buttons extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            isHyper: true
            }
    }

    handleHyperClick = () => {
        this.setState({
            isHyper: !this.state.isHyper
        })
    } 


    render() {
        

        const isHyper = this.state.isHyper;
        let button;
        let intensity = ''

        if (isHyper) {
            button = <button onClick={this.handleHyperClick}>I'M TOO FUCKING LAZY</button>
            intensity = 'high'
        } else {
            button = <button onClick={this.handleHyperClick}>I'M HYPER AS FUCK</button>
            intensity = 'low'
        }
        return (

            <div>
                <button onClick={() => this.props.dispatch(fetchData(intensity))}>I'M NOT FUCKING DOING THAT</button>
                {button}
            </div>
        )
    }
}



export default connect()(Buttons)