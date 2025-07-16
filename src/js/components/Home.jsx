import React, { useEffect, useState } from "react";


//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("")
	const [tarea, setTarea] = useState([]);

	const onInputChange = (e) => {
		setInputValue(e.target.value);
	}

	const handleKeyUp = (e) => {
		if (e.key === "Enter") {
			setTarea([...tarea, inputValue]);
			setInputValue("");
		}
	}

	const borrarTarea = (indice) => {
		const tareasFiltradas = tarea.filter((_, i) => i !== indice);
		setTarea(tareasFiltradas);
	};

	const createUser = async () => {
		const response = await fetch("https://playground.4geeks.com/todo/users/user_gerardo", {
			method: "POST",
		})
	}

	

	const getTarea = async () => {
		const response = await fetch("https://playground.4geeks.com/todo/users/user_gerardo")
		if(!response.ok) {
			console.log("crear usuario!");
			createUser()
		}
		console.log(response);
		const data = await response.json()
		// console.log(data.todos);
		setTarea(data)
	}

	useEffect(()=>{
		console.log("Hola mundo");
		
	},[tarea])
	






return (
	<div className="container">
		<h1>to-do list*</h1>
		<label className="form-label label-tarea text-center w-100" htmlFor="task">Escribe una tarea</label>
		<input
			className="form-control w-50 mx-auto p-3 rounded-0"
			type="text"
			id="task"
			name="task"
			value={inputValue}
			onChange={onInputChange}
			onKeyUp={handleKeyUp}
		/>

		<ul className="list-group w-50 mx-auto rounded-0">
			{tarea.length === 0 ? (
				<li className="list-group-item text-center">
					No hay tareas pendientes, añadir una...
				</li>
			) : (tarea.map((tarea, index) => (
				<li key={index} className="list-group-item tarea-item text-center">
					{tarea}
					<button className="btn btn-sm btn-borrar" onClick={() => borrarTarea(index)}> X </button>
				</li>
			)))}
		</ul>

	</div>
);
};

export default Home;