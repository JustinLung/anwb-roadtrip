<div class="activity-slider">
  <slot />
</div>

<style>
  ::-webkit-scrollbar {
    height: 2px;
  }

  ::-webkit-scrollbar-track {
    background: var(--scrollbar-track);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-anwb-black);
  }

  .activity-slider {
    height: 100%;
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    overflow-y: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    margin-bottom: 1em;
  }
</style>
