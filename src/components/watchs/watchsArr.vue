<!--  -->
<template>
  <div class="watchsarr">
    {{ watchData }}
    <div><input type="text" v-model="test" /></div>
    <div><input type="text" v-model="watchData.name" /></div>
    <div><input type="text" v-model="cityName.name" /></div>
    <!-- <div><input type="text" v-model="cityName2.name" /></div> -->
  </div>
</template>

<script>
// import {watchsarr} from 'watchsarr.vue';
export default {
  name: 'watchsarr',
  components: {
    // watchsarr
  },
  props: {
    watchData: {
      type: Object,
      default: null,
    },
    watchArr: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      test: '当前页的数据',
      cityName: { id: 1, name: 'shanghai' },
      // cityName2: { id: 1, name: '通过方法名执行' },
    }
  },
  watch: {
    '$route.query': {
      handler(newName, oldName) {
        console.log(this.$route)
        console.log(newName, oldName)
      },
      deep: true,
      immediate: true,
    },
    cityName: {
      handler(newName, oldName) {
        console.log(newName, oldName)
      },
      deep: true,
      immediate: true,
    },
    // cityName2: {
    //   handler: 'functionFn',
    //   deep: true,
    //   immediate: true,
    // },
    test: {
      handler(oldVal, newVal) {
        console.log(oldVal, newVal)
      },
    },
    watchData: {
      handler: function(oldVal, newVal) {
        console.log(oldVal, newVal)
      },
      deep: true,
    },
  },
  created() {},
  computed: {},
  mounted() {},
  filters: {},
  methods: {
    functionFn(newName, oldName) {
      console.log(newName, oldName)
    },
  },
}
</script>
<style lang="scss" scoped>
.watchsarr {
}
</style>
