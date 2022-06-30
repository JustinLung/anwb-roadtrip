<script>
  import Hero from '$lib/components/Hero.svelte'
  import Category from '$lib/components/Category.svelte'
  import Trips from '$lib/components/Trips.svelte'
  import Seperator from '$lib/components/Seperator.svelte'
  import PageTransition from '$lib/components/PageTransition.svelte'
</script>

<PageTransition>
  <Hero />
  <Category />
  <Seperator />
  <Trips />
</PageTransition>
