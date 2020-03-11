<template>
  <div id="app">
    <h1>Vue SSR</h1>
    <div>the page url is {{ url }}</div>
    <button @click="fn">click</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'location.href'
    }
  },
  created() {
    console.log('created')
  },
  methods: {
    fn() {
      console.log('click!!')
    }
  }
}
</script>

<style>
  h1 {
    color: brown;
  }
</style>


