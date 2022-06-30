<script>
  import { heartIcon } from '$lib/icons.js'
  import UserIcon from '$lib/components/UserIcon.svelte'
  import placeholder from '$lib/assets/images/placeholder-image.png'

  export let tripDate
  export let tripName
  export let tripLikes
  export let tripPrice
  export let tripImage
  export let tripDetailLink
  export let userInitials
  export let tripPriceType
</script>

<article class="trip-card">
  <a href={tripDetailLink}>
    <div class="trip-card__content">
      <div class="trip-card__content-header">
        <UserIcon>{userInitials}</UserIcon>
      </div>
      <time class="trip-card__content-date">{tripDate}</time>
      <h3 class="trip-card__content-title">{tripName}</h3>
      <img
        src={tripImage}
        on:error={() => (tripImage = placeholder)}
        alt={tripName}
        class="trip-card__content-image"
      />
    </div>
  </a>
  <div class="trip-card__footer">
    <div class="trip-card__likes-wrapper">
      {@html heartIcon}
      <span class="total-likes">{tripLikes}</span>
    </div>
    <span class="trip-card__price">€ {tripPrice} {tripPriceType}</span>
  </div>
</article>

<style>
  .trip-card {
    scroll-snap-align: center;
    margin: auto;
    width: 20rem;
  }

  .trip-card__footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;
  }

  .trip-card__likes-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size-sm);
  }

  .total-likes {
    padding-left: 1rem;
  }

  .trip-card__content-header {
    padding: 1rem;
  }

  .trip-card__content {
    position: relative;
    background: var(--vignette);
    border-radius: var(--border-radius);
    color: var(--color-white);
    height: 15em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .trip-card__content-image {
    position: absolute;
    border-radius: var(--border-radius);
    object-fit: cover;
    z-index: -1;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .trip-card__content-title,
  .trip-card__content-date {
    font-size: var(--font-size-md);
    padding: 0 1rem;
    word-break: break-word;
  }

  .trip-card__content-title {
    padding-bottom: 1rem;
  }

  .trip-card__content-date {
    margin-top: auto;
  }
</style>
