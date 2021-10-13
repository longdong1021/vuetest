<!--  -->
<template>
  <attrs1 :msg="msg" :value="value" :test="test"></attrs1>
</template>

<script>
import attrs1 from '@/components/attrsTest/attrs1.vue'
export default {
  name: 'attrstest',
  components: {
    attrs1,
  },
  data() {
    return {
      value: 'att',
      msg: 'msg',
      test: 'test',
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
.attrstest {
}
</style>
