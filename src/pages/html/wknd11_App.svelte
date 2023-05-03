<script lang="ts">
	import TodoInput from './components/wknd11_Todo/TodoInput11.svelte';
	import TodoList2 from './components/wknd11_Todo/TodoList11.svelte';
	import type { TodoItem, TodoList } from './types2';
	import { v4 as uuid } from 'uuid';

	let todoList: TodoList = [];
	let inputValue = '';

	const createTodoItem = (title: string) => {
		// if (!title.trim()) {
		// 	title = '';
		// 	return;
		// }
		return { id: uuid(), isDone: false, title: title };
	};

	const btnClickHandler = () => {
		let item: TodoItem = createTodoItem(inputValue);
		todoList.push(item);
		todoList = todoList;
		console.log(todoList);
		inputValue = '';
	};

	const updateInputValue = (text: string) => {
		inputValue = text;
	};

	const handleDelete = (id: string) => {
		todoList = todoList.filter((deletedTodo) => deletedTodo.id !== id);
	};

	const handleEdit = (id: string, title: string) => {
		const originalInput = todoList.find((modifiedTodo) => modifiedTodo.id === id);
		if (originalInput) {
			originalInput.title = title;
		}
		todoList = todoList;
		console.log(todoList);
	};
</script>

<input
	type="text"
	placeholder="입력! 할일"
	value="{inputValue}"
	on:keyup="{(e) => {
		updateInputValue(e.currentTarget.value);
	}}"
/>

<TodoInput btnClickHandler="{btnClickHandler}" />

<TodoList2 todoList="{todoList}" handleEdit="{handleEdit}" handleDelete="{handleDelete}" />

<!-- {#each todoList as todoItem (todoItem.id)}
	<div>{todoItem.title}</div>
{/each} -->
