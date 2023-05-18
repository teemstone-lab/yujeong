import { writable } from 'svelte/store';
import type { OsInfoList } from './types';

export const drawItems = writable<number[]>([]);
export const osInfoStore = writable<OsInfoList>([]);
