import { writable } from 'svelte/store';
import type { Todo } from './components/types';
export let todos = writable<Todo[]>([]);
