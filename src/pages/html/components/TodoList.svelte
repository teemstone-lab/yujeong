<script lang="ts">
	import type { Writable } from 'svelte/store';
	import TodoItem from './TodoItem.svelte';

	import type { Todo } from './types';
	import { todos } from '../store';

	let isEdit = false;
	let title = '';

	function deleteTodo(id: number) {
		$todos = $todos.filter((todo) => todo.id !== id);
	}

	function updateTodo(id: number, title: string) {
		console.log(id, title);
		console.log($todos);
		const target = $todos.find((todo) => todo.id === id);
		console.log(target);
		if (target) {
			target.title = title;
		}
		console.log($todos);
	}
</script>

{#each $todos as todo (todo.id)}
	<TodoItem todo="{todo}" updateTodo="{updateTodo}" deleteTodo="{deleteTodo}" />
{/each}
