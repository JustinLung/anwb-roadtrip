<script>
  import Accordion from '$lib/components/Accordion.svelte'
  import AccordionContent from '$lib/components/AccordionContent.svelte'
  import ActivitySlider from '$lib/components/ActivitySlider.svelte'
  import ErrorMessage from '$lib/components/ErrorMessage.svelte'
  import Loader from '$lib/components/Loader.svelte'
  import { getTripData } from '$lib/api/api.js'
  import { page } from '$app/stores'
  import Seperator from '$lib/components/Seperator.svelte'

  const tripIdParams = $page.params.id
</script>

<section class="route">
  <h2 class="route__title">Route</h2>
  {#await getTripData(tripIdParams)}
    <Loader />
  {:then res}
    {#each res?.stopOvers as route}
      {#if route.activityCards.length}
        <div class="route__content">
          <Accordion accordionTitle={`${route.city} (${route.activityCards.length} activities)`}>
            <ActivitySlider>
              <AccordionContent />
            </ActivitySlider>
          </Accordion>
        </div>
      {:else}
        <p class="route__emtpy">{route?.city} (There are no activities yet)</p>
        <Seperator />
      {/if}
    {/each}
    <p class="route__description">
      The estimated price for this trip is approximately € {res?.price}
      {res?.priceType} for {res?.duration} days. Remove or add activities above to change the costs.
    </p>
  {:catch err}
    <ErrorMessage {err} />
  {/await}
</section>

<style>
  .route__title {
    padding: 1.5rem 1.5rem 0;
    color: var(--color-anwb-blue);
  }

  .route__description {
    padding: 1.5rem;
  }

  .route__emtpy {
    padding: 1.5rem;
    color: var(--color-anwb-blue);
    font-size: var(--font-size-md);
  }
</style>
