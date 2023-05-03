<script lang="ts">
	import type { TodoList } from '../../types2';
	import TodoItem from './TodoItem11.svelte';

	export let todoList: TodoList;
	export let handleEdit: (id: string, title: string) => void;

	export let handleDelete: (id: string) => void;
</script>

{#each todoList as todoItem (todoItem.id)}
	<TodoItem todoItem="{todoItem}" handleEdit="{handleEdit}" handleDelete="{handleDelete}" />
{/each}
