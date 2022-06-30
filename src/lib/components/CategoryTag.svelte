<script>
  export let tagTitle
</script>

<figure class="category-tag">
  <slot />
  <figcaption class="category-tag__title">{tagTitle}</figcaption>
</figure>

<style>
  .category-tag {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 3rem;
    margin-bottom: 1rem;
  }

  .category-tag__title {
    margin-top: 0.5rem;
    font-size: var(--font-size-sm);
    text-align: center;
  }
</style>
