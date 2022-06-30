<script>
  export let colorScheme = 'light'
</script>

<span class="user-icon user-icon--{colorScheme}"><slot /></span>

<style>
  .user-icon {
    height: 46px;
    width: 46px;
    background-color: var(--color-anwb-yellow);
    color: var(--color-anwb-blue);
    font-size: var(--font-size-md);
    text-transform: uppercase;
    border-radius: var(--border-radius-circle);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .user-icon--dark {
    background-color: var(--color-anwb-blue);
    color: var(--color-anwb-yellow);
  }
</style>
