<script>
  import CtaButton from '$lib/components/CtaButton.svelte'
</script>

<h2 class="upcoming-trip__title">You have no upcoming trips</h2>
<CtaButton backgroundColor="background-dark">Plan a new trip</CtaButton>

<style>
  .upcoming-trip__title {
    color: var(--color-anwb-blue);
    font-weight: var(--font-weight-rg);
    padding: 1rem 0;
  }
</style>
