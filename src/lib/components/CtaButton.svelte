<script>
  export let backgroundColor = 'background-light'
  export let textColor = 'text-color-light'
</script>

<button class="cta-button cta-button--{backgroundColor} cta-button--{textColor}">
  <slot />
</button>

<style>
  .cta-button {
    font-size: var(--font-size-sm);
    background-color: var(--color-anwb-yellow);
    color: var(--color-white);
    border-radius: var(--border-radius-cta-button);
    font-weight: var(--font-weight-bd);
    width: 100%;
    height: 48px;
    text-align: center;
    border: none;
  }

  .cta-button--background-dark {
    background-color: var(--color-anwb-blue);
  }

  .cta-button--background-light {
    background-color: var(--color-anwb-yellow);
  }

  .cta-button--text-color-dark {
    color: var(--color-anwb-blue);
  }

  .cta-button--text-color-light {
    color: var(--color-white);
  }
</style>
