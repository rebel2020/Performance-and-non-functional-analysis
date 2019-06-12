import React, { Component } from 'react'
import './App.css';
import PostList from './get'


class Welcome extends Component {

    constructor() {
    super();
    this.state = {
      towelcome: false
    };
}

handleLogin = () => {
      this.setState({
        towelcome: true
    });
}
	render() {
		if (this.state.towelcome === true) {
      return <PostList />
    }
		return (
			<div className="Welcome">
				<h1><center>Welcome</center></h1>
				<button onClick={this.handleLogin} >view posts</button>
			</div>
		);
	}

}
export default Welcome