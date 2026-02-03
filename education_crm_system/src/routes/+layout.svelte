<script lang="ts">
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Header from '$lib/components/Header.svelte';
</script>

<div class="flex min-h-screen">
  <Sidebar />

  <div class="flex-1">
    <Header />
    <main class="p-6">
      <slot />
    </main>
  </div>
</div>
