<style>
	.inputSection {
		border: 1px solid blue;
	}

	.todoListState {
		padding-left: 30px;
		padding-right: 30px;
	}

	.inputTodo {
		border: 1px solid brown;
		width: 600px;
		margin-left: 5%;
	}

	.buttonPlMa {
		width: 100%;
		text-align: center;
	}
</style>

<script lang="ts">
	import { writable } from 'svelte/store';

	import TodoList from './components/TodoList.svelte';
	import TodoHeader from './components/TodoHeader.svelte';
	import type { Todo } from './components/types';
	import { todos } from './store';
	let currentInputValue = '';
	// export let todos = writable<Todo[]>([]); // 어디서든지 반응성을 가짐 , Todo 배열을 다루는 writable  store 라는 뜻의 제네릭 활용 사례

	let id = 0;

	function createTodo(title: string) {
		//입력 안하거나, 공백을 다 지워도 빈내용인 경우
		if (!title.trim()) {
			title = '';
			return;
		}

		$todos.push({ id, done: false, title });
		$todos = $todos;
		id += 1; // item이 생성될 때마다 id 값 1씩 증가
	}

	
</script>

<main>
	<TodoHeader />
</main>

<div class="todoListState">
	<TodoList />
	<!-- {todos} = todos store, {$todos} = todos store 안의 todos -->
</div>

<div class="inputSection">
	<input
		class="inputTodo"
		value="{currentInputValue}"
		type="text"
		on:keydown="{(e) => {
			currentInputValue = e.currentTarget.value;
			if (e.key === 'Enter') {
				createTodo(currentInputValue);
				currentInputValue = '';
			}
		}}"
	/>
	<button
		class="buttonPlMa"
		on:click="{() => {
			createTodo(currentInputValue);
		}}"
	>
		Create Todo
	</button>
</div>
