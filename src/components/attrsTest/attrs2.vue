<!--  -->
<template>
  <div>
    <div>{{ msg }}</div>
    <div>{{ value }}</div>
    <!-- 犹豫父组件props占用 test 所以这里不会有值了 -->
    <!-- <div>{{ test }}</div> -->
    <div>{{ pardata }}</div>
    <div>{{ changeMsg }}</div>
    <button @click="changeParentParentDataFn">修改爷爷中的数据</button>
  </div>
</template>

<script>
export default {
  name: 'attrs2',
  props: ['msg', 'value', 'test', 'pardata'],
  data() {
    return {
      changeMsg: '000',
    }
  },
  watch: {
    msg(newval, oldval) {
      //监听msg变化 msg可以是当前data 也可以是父data 然后在做别的事情
      console.log(oldval)
      this.changeMsg = newval
    },
  },
  methods: {
    changeParentParentDataFn() {
      this.$parent.$parent.msg = 88888
      this.$parent.pardata = 'pardatassss'
    },
  },
}
</script>
