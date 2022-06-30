<script>
  import { getTripData } from '$lib/api/api.js'
  import { page } from '$app/stores'
  import Loader from '$lib/components/Loader.svelte'
  import ErrorMessage from '$lib/components/ErrorMessage.svelte'
  import placeholder from '$lib/assets/images/placeholder-image.png'
  import ActivityCard from '$lib/components/ActivityCard.svelte'

  const tripIdParams = $page.params.id
</script>

{#await getTripData(tripIdParams)}
  <Loader />
{:then res}
  {#each res.stopOvers as stopOver}
    {#each stopOver.activityCards as activityCard}
      {#if activityCard && Object.keys(activityCard).length}
        <ActivityCard
          activityTitle={activityCard.name}
          activityPrice={`€ ${activityCard.price} ${activityCard.priceType}`}
          activityImage={!!activityCard.image ? `/assets/${activityCard.image}` : placeholder}
        />
      {/if}
    {/each}
  {/each}
{:catch err}
  <ErrorMessage {err} />
{/await}
