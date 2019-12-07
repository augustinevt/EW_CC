<template>
    <div
      :class="{
        'searchBar__wrapper': true,
        'searchBar__wrapper--active': active
      }"
    >
      <button
        aria-label="toggle search menu"
        tabindex="0"
        :class="{
          'searchBar__searchBtn': true,
          'searchBar__searchBtn--open': active
        }"
        @click="toggleActive"
      >
        <img
          v-if="!active"
          class="searchBar__searchIcon"
          src="../assets/searchIcon.jpg"
        />
        <div v-if="active" class="searchBar__searchIcon">
          X
        </div>
      </button>

      <fieldset>
        <legend>Section</legend>
        <input
          type="button"
          tabindex="0"
          :class="{active: section === 'top', 'searchBar__paramBtn': true}"
          @click="changeSection"
          value="top"
        />
        <input
          type="button"
          :class="{active: section === 'user', 'searchBar__paramBtn': true}"
          @click="changeSection"
          value="user"
        />
        <input
          type="button"
          :class="{active: section === 'hot', 'searchBar__paramBtn': true}"
          @click="changeSection"
          value="hot"
        />
      </fieldset>

      <fieldset>
        <legend>Sort</legend>
        <input
          class="searchBar__paramBtn"
          type="button"
          :class="{active: sort === 'top', 'searchBar__paramBtn': true}"
          @click="changeSort"
          value="top"
        />
        <input
          class="searchBar__paramBtn"
          type="button"
          :class="{active: sort === 'viral'}"
          @click="changeSort"
          value="viral"
        />
        <input
          class="searchBar__paramBtn"
          type="button"
          :class="{active: sort === 'time'}"
          @click="changeSort"
          value="time"
        />
        <input
          class="searchBar__paramBtn"
          type="button"
          :class="{active: sort === 'rising'}"
          @click="changeSort"
          value="rising"
        />
      </fieldset>

      <fieldset>
        <legend>Window</legend>
        <input
          class="searchBar__paramBtn"
          type="button"
          :class="{active: resultWindow === 'day'}"
          @click="changeResultWindow"
          value="day"
        />
        <input
          class="searchBar__paramBtn"
          type="button"
          :class="{active: resultWindow === 'week'}"
          @click="changeResultWindow"
          value="week"
        />
        <input
          class="searchBar__paramBtn"
          type="button"
          :class="{active: resultWindow === 'month'}"
          @click="changeResultWindow"
          value="month"
        />
        <input
          class="searchBar__paramBtn"
          type="button"
          :class="{active: resultWindow === 'year'}"
          @click="changeResultWindow"
          value="year"
        />
        <input
          class="searchBar__paramBtn"
          type="button"
          :class="{active: resultWindow === 'all'}"
          @click="changeResultWindow"
          value="all"
        />
      </fieldset>

      <fieldset>
        <legend>Viral</legend>
        <input
          class="searchBar__paramBtn"
          type="button"
          :class="{active: viral === 'true'}"
          @click="changeViral"
          value="true"
        >
        <input
          class="searchBar__paramBtn"
          type="button"
          :class="{active: viral === 'false'}"
          @click="changeViral"
          value="false"
        />
      </fieldset>

      <button class="searchBar__paramBtn" @click="searchHandler">
        Search
      </button>
    </div>

</template>

<script>
export default {
  name: 'SearchControls',
  props: {
    msg: String,
  },
  data() {
    return {
      active: false,
      gallaryData: [],
      section: 'top',
      sort: 'viral',
      resultWindow: 'week',
      viral: 'true',
    }
  },
  methods: {
    searchHandler() {
      const {
        section,
        sort,
        resultWindow,
        viral,
      } = this

      this.toggleActive()
      this.$emit('search', {
        section,
        sort,
        resultWindow,
        viral,
      })
    },
    toggleActive() {
      this.active = !this.active
    },
    changeSection(e) {
      this.section = e.target.value
    },
    changeSort(e) {
      this.sort = e.target.value
    },
    changeResultWindow(e) {
      this.resultWindow = e.target.value
    },
    changeViral(e) {
      this.viral = e.target.value
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.searchBar__paramBtn {
  margin: 10px;
  border: 1px solid grey;
}

.searchBar__searchIcon {
  width: 20px;
  font-size: 1.1rem;
}

.active {
  border: 1px solid red;
  outline-color: red;
}

.searchBar__wrapper {
  padding: 20px;
  width: 200px;
  right: -250px;
  position: fixed;
  z-index: 10;
  background: white;
  box-shadow: 0px 0px 10px grey;
  transition: 1s;
  border-radius: 3px;
}

.searchBar__wrapper--active {
  transition: 1s;
  right:  12px;
}

.searchBar__searchBtn {
  cursor: pointer;
  position: absolute;
  left: -63px;
  top: 1px;
  border-radius: 3px;
  background: white;
  width: 40px;
  height: 40px;
  transition: 1.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px grey;
}

.searchBar__searchBtn--open {
  transition: 1.5s;
  left: -50px;
  color: red;
}

select {
  width: 100%;
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
