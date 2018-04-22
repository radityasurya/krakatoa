<template>
  <div class="wrapper">
    <app-header></app-header>
    <aside class="sidebar container">Sidebar</aside>
    <section class="content container"><nuxt /></section>
    <footer class="container">Footer</footer>
  </div>
</template>

<script>
import header from "~/components/Header";

export default {
  components: {
    "app-header": header
  }
};
</script>


<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(24, [col-start] 1fr) [col-end];
  grid-column-gap: 10px;
}

.container {
  background-color: white;
  border: 1px solid #f6f6f8;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.08);
  padding: 0.75em;
  transition: all 1s;
}

@include breakpoint(desktop) {
  .sidebar {
    grid-column: col-start / 6;
  }
}

header {
  grid-column: col-start / col-end;
}

.sidebar {
  grid-column: col-start / col-end;
  @include breakpoint(desktop) {
    grid-column: col-start / 6;
  }
}

.content {
  grid-column: col-start / col-end;
  @include breakpoint(desktop) {
    grid-column: 6 / col-end;
    min-height: 500px;
  }
}

footer {
  grid-column: col-start / col-end;
}
</style>
