<script>
  export let tripCount
</script>

<section class="trip-heading">
  <h1 class="trip-heading__title">Upcoming Trips</h1>
  <span class="trip-heading__count">{tripCount}</span>
</section>

<style>
  .trip-heading {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-rg);
    color: var(--color-anwb-blue);
    background-color: var(--color-anwb-yellow);
    padding: 2rem 1.5rem;
    margin-bottom: 1rem;
  }
</style>
