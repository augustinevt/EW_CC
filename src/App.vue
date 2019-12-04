<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SearchControls @search="search"/>
    <Gallery :galleryData="galleryData"/>
  </div>
</template>

<script>
import api from './api.js'

import Gallery from './components/Gallery.vue';
import SearchControls from './components/SearchControls.vue';

const defaultParams = {
  section: 'user', sort: 'hot', resultWindow: 'week', viral: 'false'
}

export default {
  name: 'app',
  components: {
    Gallery,
    SearchControls,
  },
  data() {
    return {
      galleryData: []
    }
  },

  methods: {
    async search(params) {
      try {
        this.galleryData = (await api(params)).data.filter((item) => item.is_album)
        console.log(this.galleryData)
      } catch (e) {
        console.log(e)
      }
    }
  },

  async created() {
    this.search(defaultParams)
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
