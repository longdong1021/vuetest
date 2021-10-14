<!--  -->
<template>
  <div class="headers">
    <img alt="Vue logo" style="width: 20px" src="@/assets/logo.png" />
    <router-link to="/">home</router-link> |
    <router-link
      :to="{ path: `/news/${cid}/c/${cname}`, query: { name: 'waling' } }"
      >news</router-link
    >
    <!-- 
      对于跳转的页面中获取的params  其实是路由中定义的字段 
      例如： params: {id: '444', c_cname: 'admin'}
    -->

    |
    <!-- 
      在如下例子中 使用name  就可以使用 params 但是路由中必须是动态存在否则不会生效 
      如果路由中id没有传参则会显示url为首页路径 但组件仍然会渲染
    -->
    <router-link :to="{ name: 'test', params: { id: '444' } }"
      >test</router-link
    >
    |
    <router-link to="/attrstest">attrsTest</router-link>
    |
    <router-link to="/computed">computed</router-link>
    |
    <span @click="clickUrlFn">clickurl</span>
    <button @click="goUserCenterFn">去用户中心</button>
    <button @click="goWatchFn(1)">watchs 1</button>
    <button @click="goWatchFn(2)">watchs 2</button>
    <img
      alt="Vue logo"
      style="width: 20px"
      src="@/assets/images/coupon_icon_20210712.png"
    />
    <router-link to="/watchExample">watch-example</router-link>
    |
  </div>
</template>

<script>
// import {headers} from 'headers.vue';
export default {
  name: 'headers',
  components: {
    // headers
  },
  data() {
    return {
      cid: 444,
      cname: 'admin',
    }
  },
  created() {},
  computed: {},
  mounted() {},
  filters: {},
  methods: {
    clickUrlFn() {
      this.$router.push({
        path: 'clickurl',
      })
    },
    goUserCenterFn() {
      this.$router.push({
        path: '/users/info',
      })
    },
    goWatchFn(val) {
      this.$router.push({
        path: '/watchs',
        query: {
          id: val,
        },
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.headers {
  background: #ccc;
  padding: 10px;
  * {
    display: inline-block;
    margin: 0 10px;
  }
}
</style>
