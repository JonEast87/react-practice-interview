import { useState, useEffect } from 'react'
import TodosList from './TodosList'

function App() {
	const [users, setUsers] = useState([])
	const [currentUser, setCurrentUser] = useState({})

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => setUsers(data))
	}, [])

	console.log(currentUser)

	const userList = users.map((user, index) => {
		return (
			<li className='list-group-item' key={index}>
				<h6>{user.name}</h6>
				<button
					onClick={() => {
						setCurrentUser(user)
					}}
					type='button'
					name={`${user.name}`}>
					Show Todos
				</button>
			</li>
		)
	})

	function TodoListRender() {
		if (Object.entries(currentUser).length > 0) {
			return (
				<div className='col-6'>
					<TodosList users={currentUser} />
				</div>
			)
		} else {
			return null
		}
	}

	return (
		<div className='App container'>
			<h1>Users</h1>
			<div className='row'>
				<div className='col-6'>
					<ul className='list-group'>{userList}</ul>
				</div>
				<TodoListRender />
			</div>
		</div>
	)
}

export default App
