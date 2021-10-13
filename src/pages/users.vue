<!--  -->
<template>
  <router-view></router-view>
</template>

<script>
// import {users} from 'users.vue';
export default {
  name: 'users',
  components: {
    // users
  },
  data() {
    return {
      value: '',
    }
  },
  created() {},
  computed: {},
  mounted() {},
  filters: {},
  methods: {
    getFun() {},
  },
  beforeRouteEnter(to, from, next) {
    console.log('to to to')
    console.log(to)
    console.log(from)
    console.log(next)
    if (to.path === '/users/info') {
      next({ path: '/users/account' })
    } else {
      next()
    }
  },
}
</script>
<style lang="scss" scoped>
.users {
}
</style>
