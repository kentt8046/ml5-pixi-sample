<script lang="ts">
  import { base } from "$app/paths";
</script>

<div>
  <header class="Header">
    <h1><a href={`${base}`}>TensorFlow + Pixi.js Sample</a></h1>
    <ul class="Header">
      <li><a href={`${base}/face-mosaic`}>顔認識 + モザイク</a></li>
      <li><a href={`${base}/bg-replace`}>背景置換</a></li>
    </ul>
  </header>
  <div class="HeaderSpace" />
  <main>
    <slot />
  </main>
</div>

<style lang="scss">
  h1 {
    margin-right: 10rem;
  }

  .Header {
    display: flex;
    align-items: flex-end;
    gap: 8px;
    padding: 0 16px;
  }

  .HeaderSpace {
    padding: 1rem;
  }

  main {
    padding: 0 16px;
  }
</style>
