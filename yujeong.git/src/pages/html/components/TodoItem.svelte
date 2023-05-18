<style>
	.todoItem {
		border: 1px solid green;
	}
</style>

<script lang="ts">
	import type { Todo } from './types';

	export let todo: Todo;
	export let updateTodo: (id: number, title: string) => void;
	export let deleteTodo: (id: number) => void;

	let isEdit = false;
	let currentInputValue = todo.title;
</script>

<div class="todoItem">
	{#if isEdit}
		<div>
			<input
				value="{currentInputValue}"
				type="text"
				on:keydown="{(e) => {
					currentInputValue = e.currentTarget.value;
					if (e.key === 'Enter') {
						updateTodo(todo.id, currentInputValue);
						e.currentTarget.value = '';
						isEdit = false;
					}
				}}"
			/>
			<button
				on:click="{() => {
					updateTodo(todo.id, currentInputValue);
					isEdit = false;
				}}"
			>
				OK
			</button>

			<button
				on:click="{() => {
					currentInputValue = todo.title;
					isEdit = false;
				}}"
			>
				Cancle
			</button>
		</div>
	{:else}
		<div>
			{todo.title}
			<button
				on:click="{() => {
					isEdit = !isEdit;
				}}"
			>
				Edit
			</button>
			<button
				on:click="{() => {
					deleteTodo(todo.id);
				}}"
			>
				Delete
			</button>
		</div>
	{/if}
</div>
