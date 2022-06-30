<div class="trip-slider">
  <slot />
</div>

<style>
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  .trip-slider {
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    overflow-y: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    margin: 0 1rem;
  }
</style>
