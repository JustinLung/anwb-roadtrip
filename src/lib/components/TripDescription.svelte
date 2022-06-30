<script>
  import ErrorMessage from '$lib/components/ErrorMessage.svelte'
  import Loader from '$lib/components/Loader.svelte'
  import { getTripData } from '$lib/api/api.js'
  import { page } from '$app/stores'

  const tripIdParams = $page.params.id
</script>

{#await getTripData(tripIdParams)}
  <Loader />
{:then res}
  <p class="trip-description">{res?.description}</p>
{:catch err}
  <ErrorMessage {err} />
{/await}

<style>
  .trip-description {
    font-size: var(--font-size-sm);
    line-height: var(--line-height);
    padding: 1.5rem;
  }
</style>
