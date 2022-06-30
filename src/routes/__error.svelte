<script context="module">
  export function load({ status }) {
    return {
      props: {
        status: `${status}`,
      },
    }
  }
</script>

<script>
  import PageTransition from '$lib/components/PageTransition.svelte'

  export let status
</script>

<PageTransition>
  <div class="error-container">
    <h1>{status}</h1>
    <h2>Ooops! Something went wrong.</h2>
    <p>The page you are looking for doesn't exist. Please return to <a href="/">Home</a></p>
  </div>
</PageTransition>

<style>
  .error-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 80vh;
    padding: 1rem;
  }
</style>
