<script lang="ts">
	import type { TodoItem } from '../../types2';

	export let todoItem: TodoItem;

	let text = todoItem.title;

	export let handleEdit: (id: string, title: string) => void;
	export let handleDelete: (id: string) => void;

	let isEdit = false;
</script>

<div>
	{#if isEdit === false}
		<p>{todoItem.title} </p>
	{/if}

	{#if isEdit === true}
		<input
			type="text"
			value="{text}"
			on:keyup="{(e) => {
				text = e.currentTarget.value;
			}}"
		/>
	{/if}

	{#if isEdit === false}
		<button
			on:click="{() => {
				isEdit = true;
			}}">수정</button
		>
	{/if}

	{#if isEdit === true}
		<button
			on:click="{() => {
				if (text !== todoItem.title) {
					handleEdit(todoItem.id, text);
				}
				isEdit = false;
			}}">저장</button
		>
	{/if}

	<button
		on:click="{() => {
			handleDelete(todoItem.id);
		}}">삭제</button
	>
</div>
