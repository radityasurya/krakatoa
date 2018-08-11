<template>
  <div>
    <el-row type="flex" align="middle">
        <h2 class="title" style="display: inline-block">Servers</h2> 
        <el-button icon="el-icon-plus" type="primary" size="small" @click="addServer()" circle></el-button>
    </el-row>
    <server-list></server-list>
  </div>
</template>

<script>
import serverList from "~/components/ServerList";

export default {
  components: {
    serverList
  },
  methods: {
    addServer() {
      this.$router.push({ name: "servers-add" });
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  color: #5f5f74;
  font-size: 2em;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: default;
  margin: 0;
  margin-right: 10px;
}
</style>
