<script>
  import ErrorMessage from '$lib/components/ErrorMessage.svelte'
  import Loader from '$lib/components/Loader.svelte'
  import UserIcon from '$lib/components/UserIcon.svelte'
  import { getUpcomingTripData } from '$lib/api/api.js'
</script>

<section class="user-profile">
  {#await getUpcomingTripData()}
    <Loader />
  {:then res}
    {#if res && res.length}
      <UserIcon colorScheme="dark"
        >{res[0].firstName?.charAt(0)}{res[0].lastName?.charAt(0)}</UserIcon
      >
      <div class="user-profile__content">
        <span class="user-profile__message">Hi</span>
        <h2 class="user-profile__user">{res[0].firstName}</h2>
      </div>
    {/if}
  {:catch err}
    <ErrorMessage {err} />
  {/await}
</section>

<style>
  .user-profile {
    background-color: var(--color-anwb-yellow);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
    padding: 2rem 1.5rem 0;
    margin-top: 1rem;
  }

  .user-profile__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: var(--font-size-sm);
    color: var(--color-anwb-blue);
  }
</style>
