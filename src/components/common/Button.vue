<template>
  <button>
    {{ text }}
    <i v-if="icon" :class="icon"></i>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    icon: String
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/common/button.scss";
</style>
