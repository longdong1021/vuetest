<!--  -->
<template>
  <div>
    <!-- 
      v-bind="$attrs"  传递上一个传过来的组件 所有的数据（不包含当前页的props中的，上页的class、style）
     -->
    <attrs2 v-bind="$attrs" :pardata="pardata"></attrs2>
  </div>
</template>

<script>
import attrs2 from '@/components/attrsTest/attrs2.vue'
export default {
  name: 'attrs1',
  // props: ['msg',"value","test"],
  props: ['test'], //这里拦截了test  所有下个组件中肯定没有test了
  data() {
    return {
      pardata: 'pardata',
    }
  },
  components: {
    attrs2,
  },
}
</script>
