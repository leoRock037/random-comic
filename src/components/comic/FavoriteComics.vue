<template>
  <div class="comics-list">
    <!-- close -->
    <i class="ri-close-line" @click="close()"></i>
    <!-- comics list -->
    <carousel :perPageCustom="carouselSettings" v-if="anyComic()">
      <slide v-for="(comic, index) in comics" :key="index">
        <div class="comic-item">
          <img :src="comic.img" alt="comic">
          <h3>{{ comic.safe_title }}</h3>
          <Stars v-model="comic.rating" onlyShow />
        </div>
      </slide>
    </carousel>
    <!-- Empty satte -->
    <p v-else>There are no comics added to your favorites</p>
  </div>
</template>

<script>
import Stars from "@/components/common/Stars.vue";
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'FavoriteComics',
  components: {
    Stars,
    Carousel,
    Slide
  },
  data () {
    return {
      comics: JSON.parse(localStorage.getItem('comics')),
      carouselSettings: [[0, 1], [480, 4], [1024, 6]]
    }
  },
  mounted () {
    document.body.classList.add('no-scroll');
  },
  destroyed () {
    document.body.classList.remove('no-scroll');
  },
  methods: {
    close () {
      this.$emit('close')
    },
    anyComic () {
      return this.comics && this.comics.length > 0
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/components/comic/favorite-comics.scss";
</style>
