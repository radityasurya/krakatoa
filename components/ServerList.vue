<template>
    <div class="servers-listing">
      <el-row :gutter="20" class="servers-listing__header">
        <div class="container">
          <el-col :span="8">Name</el-col>
          <el-col :span="4" :offset="2">Location</el-col>
          <el-col :span="4">OS</el-col>
          <el-col :span="4">Website</el-col>
          <el-col :span="2"></el-col>
        </div>
      </el-row>
      <div v-for="(server, index) in servers" :key="index" >
        <nuxt-link :to="{name: 'servers-name', params: { id:server._id, name:server.name } }">
          <el-row type="flex" :gutter="20" class="server"  @click="open(1)" align="middle" >
            <el-col :span="8" class="server__details" >
              <span class="server__name">{{server.name}}</span>
              <span class="server__ip">{{server.ip}}</span>
            </el-col>
            <el-col :span="4" :offset="2" class="server__location">
              {{server.location}}
            </el-col>
            <el-col :span="4" class="server__os">
              {{server.os}}
            </el-col>
            <el-col :span="4" class="server__website">None</el-col>
            <el-col :span="2" class="server__action" style=" text-align: right">
              <el-dropdown>
                <span class="el-dropdown-link">
                  <i class="el-icon-more el-icon--right" style="font-size: 2em;"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>Edit</el-dropdown-item>
                  <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
        </el-row>
        </nuxt-link>

        
      </div>
     
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      servers: "servers/get"
    })
  },
  created() {
    this.$store.dispatch("servers/loadServers");
  },
  methods: {
    open(id) {
      console.log(`opening server ${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.servers-listing {
  width: 100%;

  .container {
    margin-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
  }

  &__header {
    font-weight: bold;
    font-size: 1.2em;
    letter-spacing: 1.2px;
    color: #b4aec1;
    cursor: default;
  }
}

.server {
  margin-top: 10px;
  height: 100%;
  background: #fff;
  border-radius: 5px;
  border: 2px solid transparent;
  padding: 20px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s all;
  color: #676767;
  cursor: pointer;

  &:hover {
    border-color: #0396ff;
  }

  &__name {
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 1.3em;
    display: block;
    color: #000;
  }
}
</style>
