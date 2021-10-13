<!--  -->
<template>
  <div class="test">
    <div>{{ athis() }} eeee {{ sss }},{{ c() }}</div>
    <div>,{{ getdata_cid }},</div>
    <div>,{{ str }},</div>
    <div>测试上传3</div>
  </div>
</template>

<script>
// import {test} from 'test.vue';
export default {
  name: 'test',
  components: {
    // test
  },
  data() {
    return {
      tests: 123,
      cid: 444,
      athis: () => {
        // console.log('app this data')
        // console.log(this.cid, 'app this data')
        return this.sss //这里可以拿到数据
      },
      sss: 'ss',
      c: function() {
        // console.log(this) //
        return function() {
          // console.log(this) //
          return 'erer'
        }
      },
      getdata_cid: this.cid, //直接取不到
      str: 'strstr',
    }
  },
  created() {},
  computed: {},
  mounted() {},
  filters: {},
  methods: {
    getFun() {},
  },
}
</script>
<style lang="scss" scoped>
.test {
}
</style>
