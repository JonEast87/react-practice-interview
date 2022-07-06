import { useState, useEffect, Switch } from 'react'

function TodosList(user) {
	const [todos, setTodos] = useState([])
	const [toggle, setToggle] = useState(false)
	const {
		users: { id, name },
	} = user
	let url = `https://jsonplaceholder.typicode.com/users/${id}/todos`

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
					<p>status: not done</p>
				</li>
			)
		})

	const todosList = todos.map((todo, index) => {
		return (
			<li className='list-group-item' key={index}>
				<p>{todo.title}</p>
				<p>status: done</p>
			</li>
		)
	})

	if (user && toggle === false) {
		return (
			<section>
				<div value={true}>
					<h3>{name}</h3>
					<p>Showing incomplete Todos</p>
					<button onClick={triggerToggle}>Toggle filter</button>
					<ul className='container list-group'>{incompleteTodos}</ul>
				</div>
			</section>
		)
	} else if (toggle === true)
		return (
			<section>
				<div value={true}>
					<h3>{name}</h3>
					<p>Showing completed Todos</p>
					<button onClick={triggerToggle}>Toggle filter</button>
					<ul className='container list-group'>{todosList}</ul>
				</div>
			</section>
		)
	else {
		return <section></section>
	}
}

export default TodosList
