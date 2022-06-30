<script>
  import { fly } from 'svelte/transition'
</script>

<div in:fly={{ y: -10, duration: 500, delay: 500 }} out:fly={{ y: -10, duration: 500 }}>
  <slot />
</div>
