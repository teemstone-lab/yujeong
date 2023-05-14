<script lang="ts">
	import type { TodoItem } from '../../types2';

	export let isEdit: boolean;
	export let todoItem: TodoItem;
</script>

{#if isEdit === false}
	<p>{todoItem.title} </p>
{/if}

{#if isEdit === true}
	<input type="text" />
{/if}
