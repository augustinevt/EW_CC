<template>
  <div id="app">
    <SearchControls @search="search"/>
    <Gallery :loading="loading" :galleryData="galleryData"/>
  </div>
</template>

<script>
import api from './api'
import Gallery from './components/Gallery.vue'
import SearchControls from './components/SearchControls.vue'

const defaultParams = {
  section: 'user', sort: 'hot', resultWindow: 'week', viral: 'false',
}

export default {
  name: 'app',
  components: {
    Gallery,
    SearchControls,
  },
  data() {
    return {
      galleryData: [],
      loading: false,
    }
  },

  methods: {
    async search(params) {
      try {
        this.loading = true
        this.galleryData = (await api(params)).data.filter(item => item.is_album)
        this.loading = false
      } catch (e) {
        console.log(e)
      }
    },
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
  position: relative;
}
</style>
