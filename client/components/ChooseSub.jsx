import React from 'react'

class ChooseSub extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            subreddit: ''
        }
    }

    onChange = (e) => {
        this.setState({
            subreddit: e.target.value
        })
    }

    onSubmit = () => {
        //here we grab the local state and shove it into an action which tells a reducer to put it into global state
    }

    render() {
        return (
            <form onSubmit={() => dispatch(fetchPosts(this.state.subreddit))}>
                <input type="text" onChange={this.onChange} />
                <input type="submit"  />
            </form>
        )
    }
}

export default ChooseSub