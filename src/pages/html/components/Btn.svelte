<style>
	button {
		background: gray;
		padding: 10px, 20px;
		border: none;
		border-radius: 10px;
		cursor: pointer;
		transition: 0.2s;
	}

	button:hover {
		text-decoration: underline;
	}

	button:active {
		transform: scale(1.05);
	}

	button.block {
		width: 100%;
	}
</style>

<script>
	export let block;
	export let color;
</script>

<button
	class:block="{block}"
	style="background-color: {color}; 
                    color: {color ? 'white' : ''};"
>
	<slot>이것은 디폴트</slot>
</button>
