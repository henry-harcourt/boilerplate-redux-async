import React from 'react'

class Buttons extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
    }


    // getActivities = () => {
    //     res.render()
    // }


    render() {
        return(
            <div>
                <button onClick = {this.props.clickThing}>I'M NOT FUCKING DOING THAT</button>
            </div>
        )
    }
}

export default Buttons