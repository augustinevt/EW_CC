<template>
  <div class="hello">
    <h1>{{ gallaryData }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      gallaryData: [],
    }
  },

  async created() {
    try {
      const res = await fetch('https://api.imgur.com/3/gallery/hot/viral/0.json')
      const resJson = await res.json()
      console.log(resJson)
      this.gallaryData = resJson
    } catch (e) {
      console.log(e)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
