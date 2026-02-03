<script lang="ts">
  import { onMount } from 'svelte';
  import { studentsApi } from '$lib/api/students.api';

  let students = [];
  let loading = true;

  onMount(async () => {
    try {
      students = await studentsApi.getAll();
    } finally {
      loading = false;
    }
  });
</script>

<h1 class="text-2xl font-bold mb-4">Dashboard</h1>

{#if loading}
  <p>Loading...</p>
{:else}
  <p>Students count: {students.length}</p>
{/if}
