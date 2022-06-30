<script>
  import Content from '$lib/components/Content.svelte'
  import { getDetailCategory } from '$lib/api/api.js'
  import placeholder from '$lib/assets/images/placeholder-image.png'
  import { page } from '$app/stores'
  import ErrorMessage from '$lib/components/ErrorMessage.svelte'
  import Loader from '$lib/components/Loader.svelte'

  const categoryNameParams = $page.params.id
</script>

<section class="category-hero">
  {#await getDetailCategory(categoryNameParams)}
    <Loader />
  {:then res}
    <img
      src={!!res.image ? `/assets/${res.image}` : placeholder}
      alt={`Category: ${res?.categoryName}`}
      class="category-hero__image"
    />

    <Content contentTitle={res?.categoryName} contentDescription={res?.description} align="left" />
  {:catch err}
    <ErrorMessage {err} />
  {/await}
</section>

<style>
  .category-hero {
    margin-top: 1rem;
  }

  .category-hero__image {
    width: 100%;
    border-radius: var(--border-radius);
  }
</style>
