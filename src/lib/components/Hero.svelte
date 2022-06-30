<script>
  import Loader from '$lib/components/Loader.svelte'
  import ErrorMessage from '$lib/components/ErrorMessage.svelte'
  import Content from '$lib/components/Content.svelte'
  import { getAdventureData } from '$lib/api/api.js'
</script>

{#await getAdventureData()}
  <Loader />
{:then formattedData}
  {#if formattedData && Object.keys(formattedData).length}
    <Content
      contentTitle={formattedData.title}
      contentDescription={formattedData.description}
      align="center"
    />
  {/if}
{:catch error}
  <ErrorMessage {error} />
{/await}
