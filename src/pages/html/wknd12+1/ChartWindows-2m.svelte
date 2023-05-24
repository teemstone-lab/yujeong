<script>
	import Circle_2m from './Circle-2m.svelte';

	//1. Liquid Circle 컴포넌트 가져오기
	//2. 필요한 html 생성
</script>

<div>
	<button>⚙</button>
</div>

<div>
	<select>
		<option value="cpu">cpu</option>
		<option value="memory">memory</option>
		<opiton value="cpuAndMemory">cpu + memory</opiton>
	</select>
</div>

<div>
	<Circle_2m />
</div>
