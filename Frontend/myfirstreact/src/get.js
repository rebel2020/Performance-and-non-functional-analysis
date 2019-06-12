import React, { Component } from 'react'
import axios from 'axios'
class userList extends Component {
	constructor(props) {
		super(props)

		this.state = {
      users: [],
      errorMsg: ''
		}
	}

	componentDidMount() {
		axios.get('http://5cf9ea97f26e8c00146d0113.mockapi.io/api/users')
			.then(response => {
				console.log(response)
				this.setState({ users: response.data })
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}

	render() {
		const { users, errorMsg } = this.state
		return (
			<center>
			<table >
  <tr>
    <th>createdAt</th>
    <th>name</th> 
  </tr>
				{users.length ? users.map(post => <div key={post.id}>
					
  <tr>
    <td>{post.createdAt}</td>
    <td>{post.name}</td> 
    
  </tr>

					</div>) : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
			 </table>
		</center>)
	}
}

export default userList