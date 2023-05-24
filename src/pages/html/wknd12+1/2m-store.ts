import { writable } from 'svelte/store';
import type { OsInfoList } from './2m-types';

export const osInfoStore = writable<OsInfoList>([]);
