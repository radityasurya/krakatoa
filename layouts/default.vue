<template>
  <div class="wrapper">
    <sidebar></sidebar>
    <section class="content">
      <!-- <app-header></app-header> -->
      <div class="content__container">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import sidebar from "~/components/Sidebar";

export default {
  components: {
    sidebar
  }
};
</script>


<style lang="scss" scoped>
.wrapper {
  height: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(24, [col-start] 1fr) [col-end];
}

header {
  grid-column: col-start / col-end;
}

.sidebar {
  grid-column: col-start / col-end;
  position: sticky;
  top: 0;
  box-sizing: border-box;
  background: white;

  @include breakpoint(sm) {
    height: 100vh;
    grid-column: col-start / 8;
  }

  @include breakpoint(md) {
    height: 100vh;
    grid-column: col-start / 6;
  }

  @include breakpoint(lg) {
    height: 100vh;
    grid-column: col-start / 6;
  }

  @include breakpoint(xl) {
    height: 100vh;
    grid-column: col-start / 4;
  }
}

.content {
  grid-column: col-start / col-end;
  color: black;
  background: #f7f3ff;

  @include breakpoint(sm) {
    grid-column: 8 / col-end;
  }

  @include breakpoint(md) {
    grid-column: 6 / col-end;
  }

  @include breakpoint(lg) {
    grid-column: 6 / col-end;
  }

  @include breakpoint(xl) {
    grid-column: 4 / col-end;
  }

  &__container {
    max-width: 1200px;
    margin: 0 auto;

    @include breakpoint(sm) {
      padding: 50px;
    }
  }
}
</style>
