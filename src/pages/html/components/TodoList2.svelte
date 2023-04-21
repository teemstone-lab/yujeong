<script lang="ts">
	import type { TodoList } from '../types2';
	export let todoList: TodoList;
</script>

{#each todoList as todoItem (todoItem.id)}
	<div>{todoItem.title}</div>
{/each}
