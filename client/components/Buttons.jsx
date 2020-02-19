import React from 'react'
import { connect } from 'react-redux'

class Buttons extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            isHyper: true
            }
    }


    // ------ the ! in this handleClick function will change the value to opposite of current value
    // i.e. it is changeable from its value at the time it is called on
    // - only works with booleans (true or false value properties)-----
    handleHyperClick = () => {
        this.setState({
            isHyper: !this.state.isHyper
        })
    }


    render() {

        const isHyper = this.state.isHyper;
        let button;

        if (isHyper) {
            button = <button onClick={this.handleHyperClick}>I'M TOO FUCKING LAZY</button>
        } else {
            button = <button onClick={this.handleHyperClick}>I'M HYPER AS FUCK</button>
        }

        return (

            <div>
                <button onClick={() => {
                    this.props.clickThing(this.state.isHyper)
                }}>I'M NOT FUCKING DOING THAT</button>
                {button}
            </div>
        )
    }
}

function mapStateToProps (globalState) {
    return {
        
    }
}
export default Buttons