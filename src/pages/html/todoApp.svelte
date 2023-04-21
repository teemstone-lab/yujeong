<script lang="ts">
	import TodoItem2 from './components/TodoItem2.svelte';
	import TodoList2 from './components/TodoList2.svelte';
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
</script>

<input
	type="text"
	placeholder="입력! 할일"
	value="{inputValue}"
	on:keyup="{(e) => {
		updateInputValue(e.currentTarget.value);
	}}"
/>

<TodoItem2 btnClickHandler="{btnClickHandler}" />

{#each todoList as todoItem (todoItem.id)}
	<div>{todoItem.title}</div>
{/each}
