<template>
  <nav>
    <span>Random Comic</span>
    <a class="mobile" @click="showFavorites()">My favourites</a>

    <div class="actions">
      <a class="web" @click="showFavorites()">My favourites</a>
      <Button
        text="Random Comic"
        icon="ri-shuffle-line"
        @click.native="getRandomComic()"
      />
    </div>
  </nav>
</template>

<script>
import Button from "@/components/common/Button.vue";

export default {
  name: 'Navbar',
  components: {
    Button
  },
  methods: {
    getRandomComic () {
      this.$emit('get-random-comic');
    },
    showFavorites () {
      this.$emit('show-favorites');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/navbar.scss';
</style>
