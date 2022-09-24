import React from "react";
import Todo from "./Todo";
import styles from "./TodoList.module.css";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
	return (
		<div className={styles.todoListContainer}>
			{/* {todos.toString() === "" ? (
				<h2>Todo list is empty</h2>
			) : (
				todos.map((todo, index) => <Todo key={index} todo={todo} />)
			)} */}
			{!todos.length && (
				<h2 className={styles.textColor}>Todo list is empty</h2>
			)}
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					todo={todo}
					deleteTodo={deleteTodo}
					toggleTodo={toggleTodo}
				/>
			))}
		</div>
	);
};

export default TodoList;
