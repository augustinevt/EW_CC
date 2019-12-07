<template>
  <div id="app">
    <SearchControls @search="search"/>
    <Gallery :loading="loading" :galleryData="galleryData"/>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

import api from './api'
import constants from './store/constants'

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
    ...mapActions({
      [constants.SET_GALLERY_LOADING]: constants.SET_GALLERY_LOADING,
      [constants.SET_GALLERY_DATA]: constants.SET_GALLERY_DATA,
    }),
    async search(params) {
      try {
        this[constants.SET_GALLERY_LOADING](true)
        const galleryData = (await api(params)).data.filter(item => item.is_album)
        this[constants.SET_GALLERY_DATA](galleryData)
        this[constants.SET_GALLERY_LOADING](false)
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
