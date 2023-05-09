<script lang="ts">
	import FruitsStore from './practice_FruitsShop.svelte';
</script>

<div class="flex flex-col gap-y-8">
	<div class="flex max-h-96 min-h-[300px]  flex-row gap-5">
		<div
			class="flex w-1/3 justify-center rounded border-2 border-solid border-blue-500/50 bg-stone-100 hover:bg-stone-200"
			><FruitsStore /></div
		>
		<div
			class="flex w-1/3 justify-center rounded border-2 border-solid border-blue-500/50 bg-stone-100 hover:bg-stone-200"
			><FruitsStore /></div
		>
		<div
			class="flex w-1/3 justify-center rounded border-2 border-solid border-blue-500/50 bg-stone-100 hover:bg-stone-200"
			><FruitsStore /></div
		>
	</div>
	<div class="flex max-h-96 min-h-[300px]">
		<div
			class="flex w-full justify-center rounded border-2 border-double border-rose-300/50 bg-orange-100 hover:bg-orange-200"
			><FruitsStore /></div
		>
	</div>
</div>
