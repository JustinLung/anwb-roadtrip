<script>
  import { arrowBack, userIcon } from '$lib/icons.js'
  import { page } from '$app/stores'
</script>

<header class="header">
  <nav class="header__navigation">
    <a href="/" class:header__navigation--active={$page.url.pathname === '/'} aria-label="Back"
      >{@html arrowBack}</a
    >
    <a href="/"
      ><img
        src="/assets/images/anwb-logo.svg"
        alt="ANWB Logo"
        aria-label="ANWB Logo"
        width="60"
        height="30"
      /></a
    >
    <a href="/account" aria-label="Account">{@html userIcon}</a>
  </nav>
</header>

<style>
  .header {
    margin: 2rem 1.5rem 0;
  }

  .header__navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .header__navigation--active {
    opacity: 0;
    visibility: hidden;
  }
</style>
