<button class="alt-button">
  <slot />
</button>

<style>
  .alt-button {
    all: unset;
    background-color: var(--light-grey);
    border-radius: var(--border-radius);
    width: 20%;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
