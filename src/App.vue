<template>
  <div>
    <!-- Navbar -->
    <NavBar
      v-on:get-random-comic="getRandomComic()"
      v-on:show-favorites="showFavorites()"
    />
    <!-- Comics -->
    <div class="loading" v-if="loading">
      <h1>Loading Random Comic</h1>
      <img src="@/assets/images/loading.gif" alt="loading">
    </div>
    <ComicWrapper :comic="comic" v-else />

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
      currentComicNumber: 0,
      loading: true
    }
  },
  created() {
    this.getCurrentComicNumber();
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
      this.loading = true;

      const random = Math.floor(Math.random() * this.currentComicNumber) + 1;

      ComicsServices.get_random_commic(random)
        .then(resp => {
          this.comic = resp.data;
          this.loading = false;
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
