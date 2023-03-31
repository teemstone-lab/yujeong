<script>
	let text = '';
	let number = 3;
	let checked = false;
	let fruits = ['apple', 'banana', 'cherry'];
	let selectedFruits = [];
	let group = 'banana';
	let textarea = '';
	let select = 'banana';
	let multripleselect = ['banana', 'cherry'];
</script>

<!-- let text = '' -->
<section>
	<h2>Text</h2>
	<input type="text" bind:value="{text}" />
</section>

<!-- let number = 3 -->
<section>
	<h2>Number/Range</h2>
	<div>
		<input type="number" bind:value="{number}" min="0" max="10" />
	</div>
	<div>
		<input type="range" bind:value="{number}" min="0" max="10" />
	</div>
</section>

<!-- let checked = false -->
<section>
	<section>
		<h2>Checkbox</h2>
		<div>
			<input type="checkbox" bind:checked="{checked}" /> Agree?
		</div>
		<div>
			<input type="checkbox" bind:checked="{checked}" /> Agree?(label wrapping)
		</div>
	</section>
</section>

<!-- let fruits = ['apple', 'banana', 'cherry']
let selectedFruits = [] -->
<section>
	<h2>Checkbox 다중 선택</h2>
	<strong>Selected: {selectedFruits}</strong>
	{#each fruits as fruit}
		<label>
			<input type="checkbox" value="{fruit}" bind:group="{selectedFruits}" />
			{fruit}
		</label>
	{/each}
</section>
