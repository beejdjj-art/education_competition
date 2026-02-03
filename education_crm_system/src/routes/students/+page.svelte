<script lang="ts">
  import { onMount } from 'svelte';
  import { api } from '../../lib/api/client';

  let students: any[] = [];

  onMount(async () => {
    students = await api('/students');
  });
</script>

<h2 class="text-xl font-bold mb-4">Students</h2>

<table class="w-full bg-white shadow rounded">
  <thead>
    <tr class="border-b">
      <th class="p-2">Name</th>
      <th class="p-2">Phone</th>
    </tr>
  </thead>

  <tbody>
    {#each students as s}
      <tr class="border-b">
        <td class="p-2">{s.name}</td>
        <td class="p-2">{s.phone}</td>
      </tr>
    {/each}
  </tbody>
</table>
 