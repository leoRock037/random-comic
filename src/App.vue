<template>
  <h1>Random Comic</h1>
</template>

<script>
import ComicsServices from "@/services/comics";

export default {
  name: 'App',
  mounted() {
    ComicsServices.get_current_commic()
    .then(resp => {
      console.log(resp.data);
    })
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>