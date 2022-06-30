<script>
  import TripTag from '$lib/components/TripTag.svelte'
  import { travelIcon, durationIcon } from '$lib/icons.js'
  import ErrorMessage from '$lib/components/ErrorMessage.svelte'
  import Loader from '$lib/components/Loader.svelte'
  import { getTripData } from '$lib/api/api.js'
  import { page } from '$app/stores'

  const tripIdParams = $page.params.id
</script>

{#await getTripData(tripIdParams)}
  <Loader />
{:then res}
  {#if res && Object.keys(res).length}
    <TripTag
      tripIcon={travelIcon}
      tripTitle="Travel Distance"
      tripDescription={`${res.travelDistance} KM`}
    />
    <TripTag
      tripIcon={durationIcon}
      tripTitle="Duration"
      tripDescription={`${res.duration} Days`}
    />
  {/if}
{:catch err}
  <ErrorMessage {err} />
{/await}
