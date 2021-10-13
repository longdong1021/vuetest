<template>
  <div id="app">
    <headers />
    <!-- <HelloWorld msg="1212121221" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import headers from './components/common/headers.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    headers,
  },
  data() {
    // console.log(this, 555) //这里打印VueComponent 对象 但是拿不到data中的数据
    return {}
  },
  created() {
    window.vm = this
  },
  methods: {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
