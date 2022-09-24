import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import React, { useState } from "react";
// import imageSource from "../img/to-do-list.png";
import styles from "./Todo.module.css";

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
	const checkedTodo = todo.isCompleted
		? `${styles.todo} ${styles.completedTodo}`
		: styles.todo;

	return (
		<div className={checkedTodo}>
			{/* <img src={imageSource} className={styles.todoImg} width="40" alt="Todo" /> */}
			<RiTodoFill className={styles.todoIcon} />
			<p className={styles.todoText}>{todo.text}</p>
			<RiDeleteBin2Line
				onClick={() => deleteTodo(todo.id)}
				className={styles.deleteIcon}
			/>
			<FaCheck
				className={styles.checkIcon}
				onClick={() => toggleTodo(todo.id)}
			/>
		</div>
	);
};

export default Todo;
