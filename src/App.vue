<template>
  <div>
    <!-- Navbar -->
    <NavBar
      v-on:get-random-comic="getRandomComic()"
      v-on:show-favorites="showFavorites()"
    />
    <!-- Comics -->
    <ComicWrapper :comic="comic" v-if="comic" />
    <!-- Favorite Comics -->
    <FavoriteComics v-if="showfavorites" v-on:close="showFavorites()" />
  </div>
</template>

<script>
import NavBar from '@/components/layout/NavBar.vue';
import ComicWrapper from '@/components/comic/ComicWrapper.vue';
import FavoriteComics from '@/components/comic/FavoriteComics.vue';

import ComicsServices from "@/services/comics";

export default {
  name: 'App',
  components: {
    NavBar,
    ComicWrapper,
    FavoriteComics
  },
    data () {
    return {
      comic: null,
      showfavorites: false,
      currentComicNumber: 0
    }
  },
  created() {
    this.getRandomComic();
  },
  methods: {
    getCurrentComicNumber () {

      ComicsServices.get_current_commic()
        .then(resp => {
          this.currentComicNumber = resp.data.num;
          this.getRandomComic();
        })
    },
    getRandomComic () {
      //const random = Math.floor(Math.random() * this.currentComicNumber) + 1;
      const random = Math.floor(Math.random() * 2000) + 1;

      ComicsServices.get_random_commic(random)
        .then(resp => {
          this.comic = resp.data;
        })
    },
    showFavorites () {
      this.showfavorites = !this.showfavorites;
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
