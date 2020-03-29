module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import '@/assets/scss/_variables.scss';
          @import "@/assets/scss/_breakpoints.scss";
          @import "@/assets/scss/_grid.scss";
          @import "@/assets/scss/_fonts.scss";
          @import "@/assets/scss/_titles.scss";
          @import "@/assets/scss/_mixins.scss";
        `,
      }
    }
  }
};
