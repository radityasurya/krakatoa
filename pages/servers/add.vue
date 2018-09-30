<template>
    <div>
        <el-row type="flex" align="middle">
            <h2 class="title" style="display: inline-block"><nuxt-link to="/servers">Servers </nuxt-link> <i class="el-icon-arrow-right" style="font-size: 0.8em"></i> Add</h2> 
        </el-row>
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="Server Name" >
                    <el-input   v-model="form.name"></el-input>
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
                <el-form-item label="IP Address" >
                    <el-input v-model="form.ip"></el-input>
                </el-form-item>
                <el-form-item label="Username" >
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="Password">
                    <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                    <el-button type="text">Cancel</el-button>
                </el-form-item>
            </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        location: "",
        ip: "",
        provider: "",
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
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

form {
  margin-top: 50px;
  background: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
}
</style>
