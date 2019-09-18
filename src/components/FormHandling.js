import React, { Component } from 'react'

class FormHandling extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username: 'abc',
            comments: 'def',
            topic: '3'
        }
    }


    handleUsernameChange = (event) => {
        
        this.setState({
            username: event.target.value
        });
    }

    handleCommentsChange = (event) => {

        this.setState({
            comments: event.target.value
        });
    }

    handleTopicChange = (event) => {

        this.setState({
            topic: event.target.value
        });
    }

    handleSubmit = (event) => {

        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault();
    }

    
    render() {

        const { username, comments, topic } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                            type="text"
                            value={username}
                            onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea
                            value={comments}
                            onChange={this.handleCommentsChange} />
                </div>
                <div>
                    <label>Topic</label>
                    <select
                            value={topic}
                            onChange={this.handleTopicChange}>

                        <option value="1">React</option>
                        <option value="2">Angular</option>
                        <option value="3">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default FormHandling
