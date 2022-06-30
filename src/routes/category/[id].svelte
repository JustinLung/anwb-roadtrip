<script>
  import CategoryHero from '$lib/components/CategoryHero.svelte'
  import TripSlider from '$lib/components/TripSlider.svelte'
  import CategoryTagContainer from '$lib/components/CategoryTagContainer.svelte'
  import TripCard from '$lib/components/TripCard.svelte'
  import placeholder from '$lib/assets/images/placeholder-image.png'
  import CategoryButtonContainer from '$lib/components/CategoryButtonContainer.svelte'
  import ErrorMessage from '$lib/components/ErrorMessage.svelte'
  import Loader from '$lib/components/Loader.svelte'
  import PageTransition from '$lib/components/PageTransition.svelte'
  import { getDetailCategory } from '$lib/api/api.js'
  import { page } from '$app/stores'

  const categoryNameParams = $page.params.id
</script>

<PageTransition>
  <CategoryHero />
  <CategoryTagContainer />
  <CategoryButtonContainer />
  <TripSlider>
    {#await getDetailCategory(categoryNameParams)}
      <Loader />
    {:then data}
      {#each data?.trips as trip}
        {#if trip && Object.keys(trip).length}
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
        {:else}
          <p>No Suggested Trips</p>
        {/if}
      {/each}
    {:catch err}
      <ErrorMessage {err} />
    {/await}
  </TripSlider>
</PageTransition>
