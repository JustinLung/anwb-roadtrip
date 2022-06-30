<script>
  import UserIcon from '$lib/components/UserIcon.svelte'
  import CtaButton from '$lib/components/CtaButton.svelte'
  import AltButton from '$lib/components/AltButton.svelte'
  import ErrorMessage from '$lib/components/ErrorMessage.svelte'
  import Loader from '$lib/components/Loader.svelte'
  import placeholder from '$lib/assets/images/placeholder-image.png'
  import { heartIconNoFill, shareIcon } from '$lib/icons.js'
  import { getTripData } from '$lib/api/api.js'
  import { page } from '$app/stores'

  const tripIdParams = $page.params.id
</script>

<section class="trip-hero">
  {#await getTripData(tripIdParams)}
    <Loader />
  {:then res}
    {#if res && Object.keys(res).length}
      <a href="/photos">
        <img
          src={!!res.image ? `/assets/${res.image}` : placeholder}
          alt="Placeholder"
          class="trip-hero__image"
        />
      </a>
      <div class="trip-hero__header">
        <div class="trip-hero__header-inner">
          <span class="trip-hero__header-inner-title">Trip by</span>
          <span>{`${res.userFirstName} ${res.userLastName}`}</span>
        </div>
        <UserIcon>{`${res.userFirstName?.charAt(0)}${res.userLastName?.charAt(0)}`}</UserIcon>
      </div>
      <h1 class="trip-hero__title">{`${res.startLocation} - ${res.destination}`}</h1>
      <div class="trip-hero__buttons-container">
        <CtaButton backgroundColor="background-light" textColor="text-color-dark"
          >Duplicate</CtaButton
        >
        <AltButton>{@html heartIconNoFill}</AltButton>
        <AltButton>{@html shareIcon}</AltButton>
      </div>
    {/if}
  {:catch err}
    <ErrorMessage {err} />
  {/await}
</section>

<style>
  .trip-hero {
    margin-top: 1rem;
  }

  .trip-hero__image {
    border-radius: var(--border-radius);
    width: 100%;
  }

  .trip-hero__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    margin: 1rem 0;
  }

  .trip-hero__header-inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: var(--font-size-sm);
  }

  .trip-hero__title {
    margin: 0 1rem;
  }

  .trip-hero__header-inner-title {
    font-weight: var(--font-weight-bd);
    color: var(--color-anwb-blue);
  }

  .trip-hero__buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    gap: 0.5rem;
  }
</style>
