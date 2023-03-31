<script>
	import { delayRender } from './lifecycle';

	let done = delayRender(1000);
</script>

{#if $done}
	<hi>Something...</hi>
{/if}
