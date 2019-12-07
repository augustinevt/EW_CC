import Vue from 'vue'
import Vuex from 'vuex'

import constants from './constants'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    gallery: [],
    galleryLoading: false,
  },
  mutations: {
    [constants.SET_GALLERY_LOADING]: (state, status) => {
      state.galleryLoading = status
    },
    [constants.SET_GALLERY_DATA]: (state, galleryData) => {
      state.gallery = galleryData
    },
  },
  actions: {
    [constants.SET_GALLERY_LOADING]: (context, status) => {
      context.commit(constants.SET_GALLERY_LOADING, status)
    },
    [constants.SET_GALLERY_DATA]: (context, galleryData) => {
      context.commit(constants.SET_GALLERY_DATA, galleryData)
    },
  },
})

export default store
