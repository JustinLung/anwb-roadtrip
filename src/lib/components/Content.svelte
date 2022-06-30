<script>
  export let contentTitle
  export let contentDescription
  export let align = 'left'
</script>

<section class="content content--{align}">
  <h1 class="content__title">{contentTitle}</h1>
  <p class="content__description">{contentDescription}</p>
</section>

<style>
  .content {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
  }

  .content__description {
    font-size: var(--font-size-sm);
    padding: 1rem 0;
  }

  .content--left {
    text-align: left;
  }

  .content--center {
    text-align: center;
  }
</style>
