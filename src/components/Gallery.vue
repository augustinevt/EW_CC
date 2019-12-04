<template>
  <div class="thumbGrid">

    <div class="thumb" v-for="(item) in galleryData" :key="item.id">
      <!-- {{ item.images[0].link.slice(0,-4) + 's.' + item.images[0].link.slice(-3) }} -->
      <img :src="item.images[0].link.slice(0,-4) + 's.' + item.images[0].link.slice(-3)" />
      <span v-if="item.images[0].description">
        {{ item.images[0].description.slice(0, 20) + '...' }}
      </span>
     </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    galleryData: Array,
  },
  data() {
    return {
      section: 'top',
      sort: 'viral',
      resultWindow: 'week',
      viral: 'true'
    }
  },


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.thumbGrid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr
}

.thumb {
  display: grid;
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
