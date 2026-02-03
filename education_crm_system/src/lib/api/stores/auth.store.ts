import { writable } from 'svelte/store';

export const auth = writable<{
  user: any | null;
  loading: boolean;
}>({
  user: null,
  loading: true
});
