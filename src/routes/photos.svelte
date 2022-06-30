<script>
  import Photo from '$lib/components/Photo.svelte'
  import PageTransition from '$lib/components/PageTransition.svelte'
  import Loader from '$lib/components/Loader.svelte'
  import ErrorMessage from '$lib/components/ErrorMessage.svelte'
  import { getImageData } from '$lib/api/api.js'
</script>

<PageTransition>
  <div class="image-wrapper">
    {#await getImageData()}
      <Loader />
    {:then res}
      {#each res.results as image}
        {#if image && Object.keys(image).length}
          <Photo image={image.urls.regular} />
        {/if}
      {/each}
    {:catch err}
      <ErrorMessage {err} />
    {/await}
  </div>
</PageTransition>

<style>
  .image-wrapper {
    padding: 1.5rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      'area-1 area-1 area-1'
      'area-1 area-1 area-1'
      'area-2 area-3 area-3'
      'area-4 area-3 area-3';
  }
</style>
