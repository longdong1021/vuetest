<template>
  <div id="app">
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
    <span @click="clickUrlFn">clickurl</span><br />
    <button @click="goUserCenterFn">去用户中心</button>
    <img
      alt="Vue logo"
      style="width: 20px"
      src="@/assets/images/coupon_icon_20210712.png"
    />
    <!-- <HelloWorld msg="1212121221" /> -->
    <router-view></router-view>
    <div>{{ athis() }} eeee {{ sss }},{{ c() }}</div>
    <div>,{{ getdata_cid }},</div>
    <div>,{{ str }},</div>
    <div>测试上传2</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
console.log(this, 'app this')
export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data() {
    // console.log(this, 555) //这里打印VueComponent 对象 但是拿不到data中的数据
    return {
      tests: 123,
      cid: 444,
      cname: 'admin',
      athis: () => {
        // console.log('app this data')
        // console.log(this.cid, 'app this data')
        return this.sss //这里可以拿到数据
      },
      sss: 'ss',
      c: function () {
        console.log(this) //
        return function () {
          console.log(this) //
          return 'erer'
        }
      },
      getdata_cid: this.cid, //直接取不到
      str: 'strstr',
    }
  },
  created() {
    window.vm = this
  },
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
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
