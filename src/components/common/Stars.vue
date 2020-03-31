<template>
  <ul class="stars">
    <li
      v-for="(i, index) in 5"
      :key="index"
      @click="updateValue(i)"
    >
      <i :class="starClass(i)"></i>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Stars',
  data() {
    return {
      number: 0
    }
  },
  props: {
    value: Number,
    onlyShow: Boolean
  },
  methods: {
    updateValue (index) {
      if (!this.onlyShow) {
        this.number = index;
        this.$emit('input', this.number);
      }
    },
    starClass (index) {
      return index <= this.value ? "ri-star-fill" : "ri-star-line";
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/common/stars.scss";
</style>
