<template>
  <div>
    <el-row type="flex" align="middle">
        <h2 class="title" style="display: inline-block">Servers</h2> 
        <el-button icon="el-icon-plus" type="primary" size="small" @click="dialogFormVisible = true" circle></el-button>
        <!-- <el-button icon="el-icon-plus" type="primary" size="small" @click="addServer()" circle></el-button> -->
    </el-row>
    <el-dialog title="Add New Server" :visible.sync="dialogFormVisible" width="30%">
      <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="Server Name" >
              <el-input   v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="IP Address" >
              <el-input v-model="form.ip"></el-input>
          </el-form-item>
          <el-form-item label="Username" >
              <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input :type="inputType" v-model="form.password" auto-complete="off">
            <el-button type="primary" slot="append" @click="toggleShowPassword" icon="el-icon-view"></el-button>
            </el-input>
          </el-form-item>
          <el-form-item label="Location">
              <el-select v-model="form.location" placeholder="please select the server location">
                  <el-option label="France" value="France"></el-option>
                  <el-option label="Canada" value="Canada"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="Provider">
              <el-select v-model="form.provider" placeholder="please select the provider">
                  <el-option label="Contabo" value="Contabo"></el-option>
                  <el-option label="OneProvider" value="OneProvider"></el-option>
              </el-select>
          </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">Create</el-button>
      </span>
    </el-dialog>
    <server-list></server-list>
  </div>
</template>

<script>
import serverList from "~/components/ServerList";

export default {
  components: {
    serverList
  },
  data() {
    return {
      inputType: "password",
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    toggleShowPassword() {
      this.inputType = this.inputType === "password" ? "text" : "password";
    },
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
