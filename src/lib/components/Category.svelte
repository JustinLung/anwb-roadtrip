<script>
  import Loader from '$lib/components/Loader.svelte'
  import ErrorMessage from '$lib/components/ErrorMessage.svelte'
  import { whiteArrow } from '$lib/icons.js'
  import placeholder from '$lib/assets/images/placeholder-image.png'
  import { getCategoryData } from '$lib/api/api.js'
</script>

{#await getCategoryData()}
  <Loader />
{:then res}
  {#each res as category}
    {#if category && Object.keys(category).length}
      <a sveltekit:prefetch href="/category/{category.categoryName}">
        <section class="category">
          <img
            src={!!category.image ? `/assets/${category.image}` : placeholder}
            alt={category.categoryName}
            class="category__image"
            width="325"
            height="193"
          />
          <div class="category__wrapper">
            <h2 class="category__title">{category.categoryName}</h2>
            <a href="/category/{category.categoryName}" class="category__link" aria-label="Arrow">
              {@html whiteArrow}</a
            >
          </div>
        </section>
      </a>
    {/if}
  {/each}
{:catch err}
  <ErrorMessage {err} />
{/await}

<style>
  .category {
    position: relative;
    overflow: hidden;
    margin: 0 1.5rem 1.5rem;
    border-radius: var(--border-radius);
    color: var(--color-white);
  }

  .category__image {
    border-radius: var(--border-radius);
    object-fit: cover;
    width: 100%;
  }

  .category__wrapper {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    bottom: 0.3rem;
    border-radius: var(--border-radius);
    background: var(--vignette);
    padding-bottom: 1.2rem;
  }

  .category__title {
    padding-left: 2rem;
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-rg);
  }

  .category__link {
    padding-right: 2rem;
  }
</style>
