import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			emailId: '',
			userName: '',
			value: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios.post(' http://10.150.229.236:8080/lighthouse', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { emailId, userName, value } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="emailId"
							value={emailId}
							placeholder="emailId"
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="userName"
							value={userName}
							placeholder="username"
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="value"
							value={value}
							placeholder="value"
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm