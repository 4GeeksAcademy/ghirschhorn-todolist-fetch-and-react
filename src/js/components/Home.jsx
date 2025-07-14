import React, { useState } from "react";


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
					<li className="list-group-item text-center text-muted">
						No hay tareas, añadir una...
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