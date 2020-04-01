<template>
  <div class="comic-wrapper">
    <!-- Image -->
    <div class="comic-image">
      <img :src="comic.img" alt="comic">
    </div>
    <!-- Description -->
    <div class="comic-description">
      <div>
        <h1>{{ comic.safe_title }}</h1>
        <p>Number: {{ comic.num }} - Year: {{ comic.year }}</p>
        <Stars v-model="rating"/>
        <Button
          class="btn-small"
          text="Add to favorites"
          @click.native="addToFavorites()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Stars from "@/components/common/Stars.vue";
import Button from "@/components/common/Button.vue";

export default {
  name: 'ComicWrapper',
  components: {
    Stars,
    Button
  },
  props: {
    comic: Object,
  },
  data () {
    return {
      rating: 0
    }
  },
  watch: {
    comic () {
      this.rating = 0;
    }
  },
  methods: {
    addToFavorites () {
      const comicsJson = localStorage.getItem('comics');
      const comicsList = comicsJson ? JSON.parse(comicsJson) : [];

      const comicToSave = { ...this.comic, rating: this.rating }

      if (comicsList.some(comic => comic.num === this.comic.num)) {
        const index = comicsList.findIndex(comic => comic.id === this.comic.num);
        comicsList.splice(index, 1, comicToSave)
      } else {
        comicsList.push(comicToSave)
      }

      localStorage.setItem('comics', JSON.stringify(comicsList))
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/components/comic/comic-wrapper.scss";
</style>
