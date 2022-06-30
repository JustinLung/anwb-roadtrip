<script>
  import placeholder from '$lib/assets/images/placeholder-image.png'
  
  export let activityTitle
  export let activityPrice
  export let activityImage
</script>

<article class="activity-card">
  <div class="activity-card__content">
    <h3 class="activity-card__content-title">{activityTitle}</h3>
    <img
      src={activityImage}
      on:error={() => (activityImage = placeholder)}
      alt={activityTitle}
      class="activity-card__image"
    />
  </div>
  <div class="activity-card__footer">
    <span class="activity-card__footer-price">{activityPrice}</span>
  </div>
</article>

<style>
  .activity-card {
    scroll-snap-align: center;
    margin: auto;
  }

  .activity-card__content {
    color: var(--color-white);
    border-radius: var(--border-radius);
    position: relative;
  }

  .activity-card__image {
    object-fit: cover;
    object-position: center;
    border-radius: var(--border-radius);
  }

  .activity-card__content-title {
    padding: 1rem;
    font-size: var(--font-size-md);
    font-weight: var(--font-weight-bd);
    position: absolute;
    bottom: 1rem;
  }

  .activity-card__footer {
    padding: 1rem;
  }
</style>
