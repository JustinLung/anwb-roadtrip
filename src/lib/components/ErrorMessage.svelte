<script>
  export let err
</script>

<section class="error">
  <h2 class="error__error-heading">Error. Something went wrong.</h2>
  <p class="error__error-message">{err}</p>
</section>

<style>
  .error {
    padding-bottom: 1rem;
  }

  .error__error-heading,
  .error__error-message {
    text-align: center;
  }
</style>
