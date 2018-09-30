<template>
    <div>
      <el-row type="flex" align="middle">
            <h2 class="title" style="display: inline-block"><nuxt-link to="/servers"><i class="el-icon-arrow-left" style="font-size: 0.8em"></i> back</nuxt-link> </h2> 
        </el-row>
        <div class="server">
          <h2 class="server__name" style="display: inline-block">{{$route.params.name}}</h2> 
        </div>
        <el-button type="primary" icon="el-icon-plus" style="margin-top: 25px">Add Website</el-button>
        <el-table
    ref="multipleTable"
    :data="tableData3"
    style="width: 100%; margin-top: 15px;"
    @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        property="website"
        label="Website"
        >
      </el-table-column>
      <el-table-column
        property="da"
        label="DA"
        width="40">
      </el-table-column>
      <el-table-column
        property="pa"
        label="PA"
        >
      </el-table-column>
      <el-table-column
        property="niche"
        label="Niche"
        >
      </el-table-column>
      <el-table-column
        property="registrar"
        label="Registrar"
        
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        property="date"
        label="Expiration"
       
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {
  created() {
    var _id = this.$route.params.id;
    console.log(_id);
  },
  data() {
    return {
      tableData3: [
        {
          date: "2016-05-03",
          website: "hipnyan.com",
          da: "1",
          pa: "1",
          niche: "Wallpaper",
          registrar: "Namecheap"
        }
      ],
      multipleSelection: []
    };
  }
};
</script>


<style lang="scss" scoped>
.server {
  margin-top: 30px;
  background: #fff;
  border-radius: 3px;
  border: 2px solid transparent;
  padding: 20px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  transition: 0.3s all;
  color: #676767;

  &__name {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2em;
    display: block;
    color: #000;
  }
}

.el-table {
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
}
</style>

