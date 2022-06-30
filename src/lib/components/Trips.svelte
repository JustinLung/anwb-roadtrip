<script>
  import TripSlider from '$lib/components/TripSlider.svelte'
  import TripCard from '$lib/components/TripCard.svelte'
  import placeholder from '$lib/assets/images/placeholder-image.png'
  import ErrorMessage from '$lib/components/ErrorMessage.svelte'
  import Loader from '$lib/components/Loader.svelte'
  import { getSuggestedTripsData } from '$lib/api/api.js'
</script>

<section class="trips">
  <h2 class="trips__title">Can't make up your mind? Get inspired by adventures of others!</h2>
  <TripSlider>
    {#await getSuggestedTripsData()}
      <Loader />
    {:then res}
      {#each res as trip}
        {#if trip}
          <TripCard
            userInitials={`${trip.firstName.charAt(0)}${trip.lastName.charAt(0)}`}
            tripDate={trip.tripDate}
            tripName={trip.cities}
            tripImage={!!trip.image ? `/assets/${trip.image}` : placeholder}
            tripLikes={trip.like}
            tripPrice={trip.price}
            tripPriceType={trip.priceType}
            tripDetailLink={`/trip/${trip.id}`}
          />
        {/if}
      {/each}
    {:catch err}
      <ErrorMessage {err} />
    {/await}
  </TripSlider>
</section>

<style>
  .trips {
    margin-bottom: 3rem;
  }

  .trips__title {
    color: var(--color-anwb-blue);
    font-weight: var(--font-weight-rg);
    font-size: var(--font-size-md);
    padding: 2rem 1rem 1.5rem;
  }
</style>
