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
		axios.get('http://10.150.229.236:8080/')
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
			
			<table >
			<center>
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
        </center>
			 </table>
		)
	}
}

export default userList