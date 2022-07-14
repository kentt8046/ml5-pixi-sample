<div>
  <header class="Header">
    <h1><a href="/">TensorFlow + Pixi.js Sample</a></h1>
    <ul class="Header">
      <li><a href="/face-mosaic">顔認識 + モザイク</a></li>
      <li><a href="/bg-replace">背景置換</a></li>
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
