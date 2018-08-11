<template>
    <div>
        <div>urlParam = {{$route.params}}</div>
    </div>
</template>

<script>
export default {
  created() {
    var _id = this.$route.params.id;
    console.log(_id);
  }
};
</script>


<style lang="scss" scoped>
</style>

