<template>
  <aside class="sidebar">
    <div class="logo">
      <img :src="`/mountains.png`"  class="logo__img responsive" alt="Kiwi standing on oval">
    </div>
    <div class="title">
     <span>Krakatoa</span>
    </div>
    <nav>
      <ul>
        <li><nuxt-link to="/" exact><span>Home</span></nuxt-link></li>
        <li v-for="(menu, index) in menus" :key="index">
          <nuxt-link :to="menu.url"><span>{{menu.name}}</span></nuxt-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      menus: "menus/get"
    })
  }
};
</script>


<style lang="scss" scoped>
.sidebar {
  color: #1e1e1f;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.logo {
  cursor: pointer;
  margin-top: 30px;
  width: 120px;

  &__img {
    height: 120px;
    height: auto;
    transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-5px);
      opacity: 0.7;
    }
  }
}

.title {
  margin-top: 15px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 22px;
  color: #5f5f74;

  .active {
    color: #0396ff;
  }

  &:hover {
    opacity: 0.7;
  }
}

.responsive {
  width: 100%;
  height: auto;
}

nav {
  width: 100%;
  margin-top: 20px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    position: relative;

    a {
      text-decoration: none;
      text-transform: capitalize;
      width: 100%;
      font-size: 14px;
      letter-spacing: 1.5px;
      position: relative;
      display: inline-block;
      color: #cdd8df;
      padding-top: 20px;
      padding-bottom: 20px;
      transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);

      span {
        margin-left: 40px;
      }

      &:hover {
        background: #f7f3ff;
        color: #0396ff;
      }
    }
    .active {
      color: #0396ff;
      background: #f7f3ff;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 5px;
        height: 100%;
        z-index: 999;
        background: #0396ff;
      }
    }
  }
}
</style>
