<template>
  <div class="watchs">
    <watchsArr :watchData="watchData" :watchArr="watchArr" />
  </div>
</template>

<script>
import watchsArr from '@/components/watchs/watchsArr.vue'
export default {
  name: 'watchs',
  components: { watchsArr },
  data() {
    return {
      watchData: {
        id: 4,
        name: 'zhang san',
        age: 34,
        info: '希望我能慢慢好起来',
        like: {
          run: '1000km',
          gequ: '最喜欢的人',
        },
        tedianArr: ['高', '瘦'],
      },
      watchArr: ['妻子', '青青'],
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
.watchs {
}
</style>
