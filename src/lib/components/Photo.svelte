<script>
  export let image
</script>

<img src={image} alt="vacation" class="photo-item" />

<style>
  .photo-item {
    border-radius: var(--border-radius);
    width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .photo-item:nth-child(1) {
    grid-area: area-1;
  }

  .photo-item:nth-child(2) {
    grid-area: area-2;
  }

  .photo-item:nth-child(3) {
    grid-area: area-3;
  }

  .photo-item:nth-child(4) {
    grid-area: area-4;
  }
</style>
