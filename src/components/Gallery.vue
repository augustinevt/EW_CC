<template>
  <div>
    <div class="loadingContainer" v-if="loading">
      <img class="loadingContainer_img" src="../assets/loading.gif" />
    </div>
    <div v-if="!loading" class="thumbGrid">
      <div class="thumbModal_wrapper" v-if="showModal" @click="toggleModal">
        <div class="thumbModal_overlay"/>
        <div class="thumbModal_content">
          <div class="thumbModal_img">
            <img
              :src="activeItem.images[0].link.slice(0,-4)
                + 'm.' + activeItem.images[0].link.slice(-3)"
            />
          </div>
          <div class="thumbModal_infoWrapper">
            <div class="thumbModal_info">
              <div class="thumbModal_infoTitle">Description:</div>
              <div class="thumbModal_infoValue">
                {{ activeItem.images[0].description }}
              </div>
            </div>
            <div class="thumbModal_info">
              <div class="thumbModal_infoTitle">Title:</div>
              <div class="thumbModal_infoValue">
                {{ activeItem.title }}
              </div>
            </div>
            <div class="thumbModal_info">
              <div class="thumbModal_infoTitle">Upvotes:</div>
              <div class="thumbModal_infoValue">
                {{ activeItem.ups }}
              </div>
            </div>
            <div class="thumbModal_info">
              <div class="thumbModal_infoTitle">Downvotes:</div>
              <div class="thumbModal_infoValue">
                {{ activeItem.downs }}
              </div>
            </div>
            <div class="thumbModal_info">
              <div class="thumbModal_infoTitle">Score:</div>
              <div class="thumbModal_infoValue">
                {{ activeItem.score }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="thumb" v-for="(item) in galleryData" :key="item.id" @click="toggleModal(item)">
        <div class="thumb_img">
          <img :src="item.images[0].link.slice(0,-4) + 's.' + item.images[0].link.slice(-3)" />
        </div>
        <div class="thumb_text" v-if="item.images[0].description">
          {{ item.images[0].description.slice(0, 20) + '...' }}
        </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    galleryData: Array,
    loading: Boolean,
  },
  data() {
    return {
      activeItem: null,
      showModal: false,
      section: 'top',
      sort: 'viral',
      resultWindow: 'week',
      viral: 'true',
    }
  },
  methods: {
    toggleModal(item) {
      this.activeItem = item
      this.showModal = !this.showModal
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.loadingContainer {
  width: 100%;
  display: flex;
  justify-content: center;
}

.thumbModal_content {
  padding: 10px;
  border-radius: 3px;
  box-shadow: 2px 2px 10px grey;
  position: fixed;
  background: white;
  z-index: 200;
  opacity: 1;
  top: 5%;
  width: 40%;
  display: grid;
  min-height: 40%;
  grid-template-columns: 1fr;
  grid-column-gap: 5%;
  justify-content: center;
}

.thumbModal_wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  height: 100%;
}

.thumbModal_overlay {
  position: absolute;
  background: white;
  opacity: 0.7;
  width: 100%;
  height: 100%;
}

.thumbModal_img {
  border-radius: 3px 3px 0px 0px;
}

.thumbModal_img img {
  max-height: 400px;
  height: 100%;
}

.thumbModal_infoWrapper {
  padding: 10px;
}

.thumbModal_info {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding: 5px;
}

.thumbModal_info:last-child {
  border-bottom: none;
}

.thumbModal_infoValue {
  padding-left: 20px;
  display: flex;
  justify-content: flex-end;
  word-break:break-all;
}

.thumbModal_infoTitle {
  width:100%;
  display: flex;
  justify-content: flex-start;
}

.thumb {
  display: grid;
  justify-content: center;
}

.thumb_img {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
}

.thumb_img img {
  border-radius: 5px;
  max-height: 100px;
}

.thumbGrid {
  padding-top: 100px;
  display: grid;
  position: relative;
  min-height: 100vh;
  grid-template-columns: repeat(auto-fill, minmax(100px, max-content));
  grid-column-gap: 30px;
  grid-row-gap: 50px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
