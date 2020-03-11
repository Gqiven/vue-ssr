<template>
  <div>
    homepage
    <p>{{list}}</p>
  </div>
</template>

<script>
export default {
  //自定义函数，会在组件实例化之前调用
  asyncData({ store, route }) {
    //触发action
    return store.dispatch('getListData', {path: route.path})
  },
  computed: {
    list() {
      return this.$store.state.list;
    }
  },
}
</script>