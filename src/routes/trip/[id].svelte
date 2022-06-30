<script>
  import TripHero from '$lib/components/TripHero.svelte'
  import Seperator from '$lib/components/Seperator.svelte'
  import TripTagContainer from '$lib/components/TripTagContainer.svelte'
  import TripDescription from '$lib/components/TripDescription.svelte'
  import TripRoute from '$lib/components/TripRoute.svelte'
  import PageTransition from '$lib/components/PageTransition.svelte'
</script>

<PageTransition>
  <TripHero />
  <Seperator />
  <TripTagContainer />
  <Seperator />
  <TripDescription />
  <Seperator />
  <TripRoute />
</PageTransition>
