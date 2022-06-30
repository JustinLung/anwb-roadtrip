<script>
  import TripCard from '$lib/components/TripCard.svelte'
  import TripHeading from '$lib/components/TripHeading.svelte'
  import EmptyUpcomingTrip from '$lib/components/EmptyUpcomingTrip.svelte'
  import ErrorMessage from '$lib/components/ErrorMessage.svelte'
  import placeholder from '$lib/assets/images/placeholder-image.png'
  import Loader from '$lib/components/Loader.svelte'
  import { getUpcomingTripData } from '$lib/api/api.js'
</script>

{#await getUpcomingTripData()}
  <Loader />
{:then res}
  <TripHeading tripCount={res.length} />
  <section class="upcoming-trip">
    {#if res?.length === 0}
      <EmptyUpcomingTrip />
    {:else}
      {#each res as upcomingTrip}
        {#if upcomingTrip && Object.keys(upcomingTrip).length}
          <TripCard
            userInitials={`${upcomingTrip.firstName.charAt(0)}${upcomingTrip.lastName.charAt(0)}`}
            tripDate={upcomingTrip.tripDate}
            tripName={upcomingTrip.cities}
            tripImage={!!upcomingTrip.image ? `/assets/${upcomingTrip.image}` : placeholder}
            tripLikes={upcomingTrip.like}
            tripPrice={upcomingTrip.price}
            tripPriceType={upcomingTrip.priceType}
            tripDetailLink={`/trip/${upcomingTrip.id}`}
          />
        {/if}
      {/each}
    {/if}
  </section>
{:catch err}
  <ErrorMessage {err} />
{/await}

<style>
  .upcoming-trip {
    padding: 0 1.5rem;
  }
</style>
