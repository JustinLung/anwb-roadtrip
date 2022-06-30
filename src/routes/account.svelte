<script>
  import PreviousTrips from '$lib/components/PreviousTrips.svelte'
  import UserProfile from '$lib/components/UserProfile.svelte'
  import UpcomingTrip from '$lib/components/UpcomingTrip.svelte'
  import PageTransition from '$lib/components/PageTransition.svelte'
</script>

<PageTransition>
  <UserProfile />
  <UpcomingTrip />
  <PreviousTrips />
</PageTransition>
