<script>
  import TripCard from '$lib/components/TripCard.svelte'
  import ErrorMessage from '$lib/components/ErrorMessage.svelte'
  import placeholder from '$lib/assets/images/placeholder-image.png'
  import Loader from '$lib/components/Loader.svelte'
  import { getPreviousTripData } from '$lib/api/api.js'
</script>

<section class="previous-trips">
  {#await getPreviousTripData()}
    <Loader />
  {:then res}
    <div class="previous-trips__header">
      <h2 class="previous-trips__header-title">Previous trips</h2>
      <span class="previous-trips__header-title-count">{res.length}</span>
    </div>
    {#each res as previousTrip}
      {#if previousTrip && Object.keys(previousTrip).length}
        <TripCard
          userInitials={`${previousTrip.firstName.charAt(0)}${previousTrip.lastName.charAt(0)}`}
          tripDate={previousTrip.tripDate}
          tripName={previousTrip.cities}
          tripImage={!!previousTrip.image ? `/assets/${previousTrip.image}` : placeholder}
          tripLikes={previousTrip.like}
          tripPrice={previousTrip.price}
          tripPriceType={previousTrip.priceType}
          tripDetailLink={`/trip/${previousTrip.id}`}
        />
      {/if}
    {/each}
  {:catch err}
    <ErrorMessage {err} />
  {/await}
</section>

<style>
  .previous-trips {
    padding: 1.5rem;
  }

  .previous-trips__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .previous-trips__header-title {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-rg);
    color: var(--color-anwb-blue);
    padding: 1rem 0;
  }

  .previous-trips__header-title-count {
    font-size: var(--font-size-l);
    color: var(--color-anwb-blue);
  }
</style>
