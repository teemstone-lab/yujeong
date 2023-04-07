<script>
	let count = 0;
</script>

<button
	on:click="{() => {
		count += 1;
	}}"
>
	증가!
</button>
<button
	on:click="{() => {
		count -= 1;
	}}"
>
	감소!
</button>

<h2>{count}</h2>

<section>
	<h2>if</h2>
	{#if count > 3}
		<div>count &gt; 3</div>
	{/if}
</section>

<section>
	<h2>if else</h2>
	{#if count > 3}
		<div>count &gt; 3</div>
	{:else}
		<div>count &lt ;= 3</div>
	{/if}
</section>

<section>
	<h2>if else</h2>
	{#if count > 3}
		<div>count &gt; 3</div>
	{:else if count === 3}
		<div>count === 3</div>
	{:else}
		<div>count &1;3</div>
	{/if}
</section>
