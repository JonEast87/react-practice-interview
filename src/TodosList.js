import { useState, useEffect, Switch } from 'react'

function TodosList({ users: { id, name } }) {
	const [todos, setTodos] = useState([])
	const [toggle, setToggle] = useState(false)
	let url = 'https://jsonplaceholder.typicode.com/users/' + id + '/todos'

	const triggerToggle = () => {
		setToggle(!toggle)
	}

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setTodos(data))
	}, [url])

	const incompleteTodos = todos
		.filter((todo) => todo.completed === false)
		.map((todo, index) => {
			return (
				<li className='list-group-item' key={index}>
					<p>{todo.title}</p>
				</li>
			)
		})

	const todosList = todos.map((todo, index) => {
		return (
			<li className='list-group-item' key={index}>
				<p>{todo.title}</p>
			</li>
		)
	})

	// 	<div value={true}>
	// 	<h3>{name}</h3>
	// 	<p>Showing incomplete Todos</p>
	// 	<button onClick={triggerToggle}>Toggle filter</button>
	// 	<ul className='container list-group'>{todosList}</ul>
	// </div>

	return (
		<section>
			<Switch></Switch>
		</section>
	)
}

export default TodosList
