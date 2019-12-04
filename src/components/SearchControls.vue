<template>
  <div class="hello">

    section
    <select default="top" @change="changeSection">
      <option value="top">top</option>
      <option value="user">user</option>
      <option value="viral">viral</option>
    </select>

    sort
    <select default="top" @change="changeSort">
      <option value="viral">viral</option>
      <option value="top">top</option>
      <option value="time">time</option>
      <option value="rising">rising</option>
    </select>

    window
    <select default="" @change="changeResultWindow">
      <option value="day">day</option>
      <option value="week">week</option>
      <option value="month">month</option>
      <option value="year">year</option>
      <option value="all">all</option>
    </select>

    viral
    <select default="true" @change="changeViral">
      <option value="true">true</option>
      <option value="false">false</option>
    </select>

    <button @click="$emit('search', {section, sort, resultWindow, viral})"> search </button>

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
      section: 'top',
      sort: 'viral',
      resultWindow: 'week',
      viral: 'true'
    }
  },
  methods: {
    changeSection(e) {
      console.log('change section', e.target.value)
      this.section = e.target.value
    },
    changeSort(e) {
      console.log('change sort', e.target.value)
      this.sort = e.target.value
    },
    changeResultWindow(e) {
      console.log('change result window', e.target.value)
      this.resultWindow = e.target.value
    },
    changeViral(e) {
      console.log('change result viral', e.target.value)
      this.viral = e.target.value
    },
  }
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
