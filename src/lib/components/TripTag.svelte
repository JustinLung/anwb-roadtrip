<script>
  export let tripTitle
  export let tripDescription
  export let tripIcon
</script>

<div class="trip-tag">
  {@html tripIcon}
  <div class="trip-tag__content">
    <span class="trip-tag__content-title">{tripTitle}</span>
    <span class="trip-tag__content-description">{tripDescription}</span>
  </div>
</div>

<style>
  .trip-tag {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.8rem 1.5rem;
  }

  .trip-tag__content {
    display: flex;
    flex-direction: column;
    padding-left: 0.8rem;
  }

  .trip-tag__content-title {
    font-weight: var(--font-weight-bd);
    color: var(--color-anwb-blue);
  }
</style>
