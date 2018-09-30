<template>
  <div>
    <el-row type="flex" align="middle">
        <h2 class="title" style="display: inline-block">Domains</h2> 
        <el-button icon="el-icon-plus" type="primary" size="small" circle></el-button>
    </el-row>
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
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">Toggle selection status of second and third rows</el-button>
    <el-button @click="toggleSelection()">Clear selection</el-button>
  </div>
  </div>
</template>
<script>
export default {
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
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
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
