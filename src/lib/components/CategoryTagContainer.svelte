<script>
  import CategoryTag from '$lib/components/CategoryTag.svelte'
  import ErrorMessage from '$lib/components/ErrorMessage.svelte'
  import Loader from '$lib/components/Loader.svelte'
  import * as icons from '$lib/icons.js'
  import { getDetailCategory } from '$lib/api/api.js'
  import { page } from '$app/stores'

  const categoryNameParams = $page.params.id
</script>

<section class="tag-container">
  <h2 class="tag-container__title">Perfect for</h2>
  <div class="tag-container__tags">
    {#await getDetailCategory(categoryNameParams)}
      <Loader />
    {:then res}
      {#each res?.tags as categoryTag}
        {#if categoryTag && Object.keys(categoryTag).length}
          <CategoryTag tagTitle={categoryTag.tagName}>{@html icons[categoryTag.icon]}</CategoryTag>
        {/if}
      {/each}
    {:catch err}
      <ErrorMessage {err} />
    {/await}
  </div>
</section>

<style>
  .tag-container {
    padding: 0 1.5rem;
  }
  .tag-container__title {
    color: var(--color-anwb-blue);
    font-size: var(--font-size-md);
  }

  .tag-container__tags {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 1rem 0;
  }
</style>
