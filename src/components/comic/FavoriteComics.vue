<template>
  <ul class="comics-list" >
    <li v-for="(comic, index) in comics" :key="index">
      <img :src="comic.img" alt="comic">
      <h3>{{ comic.safe_title }}</h3>
      <Stars v-model="comic.rating" onlyShow />
    </li>
  </ul>
</template>

<script>
import Stars from "@/components/common/Stars.vue";

export default {
  name: 'FavoriteComics',
  components: {
    Stars
  },
  data () {
    return {
      comics: JSON.parse(localStorage.getItem('comics'))
    }
  },
  mounted () {
    document.body.classList.add('no-scroll');
  },
  destroyed () {
    document.body.classList.remove('no-scroll');
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/components/comic/favorite-comics.scss";
</style>
