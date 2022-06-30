<script>
  import Seperator from '$lib/components/Seperator.svelte'
  import { chevronIcon } from '$lib/icons.js'

  export let accordionTitle
</script>

<details class="accordion">
  <summary class="accordion__title">
    {accordionTitle}
    <div class="accordion__title-chevron" aria-hidden="true">
      {@html chevronIcon}
    </div>
  </summary>
  <div class="accordion__content">
    <slot />
  </div>
</details>
<Seperator />

<style>
  .accordion {
    padding: 1.5rem 1.5rem 0;
  }

  .accordion__title {
    color: var(--color-anwb-blue);
    font-size: var(--font-size-md);
    padding-bottom: 1rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .accordion .accordion__title::-webkit-details-marker,
  .accordion .accordion__title::marker {
    display: none;
    color: transparent;
    position: relative;
  }

  .accordion[open] {
    animation: open 0.8s ease;
  }

  .accordion[open] .accordion__title-chevron {
    transform: rotate(180deg);
  }

  @keyframes open {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
</style>
