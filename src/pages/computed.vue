<!--  -->
<template>
  <div class="computeds">
    <button @click="vuefullNameFn">
      现在再运行 vm.vuefullName = 'John Doe' 时，setter
      会被调用，vm.vuefirstName 和 vm.vuelastName 也会相应地被更新<br />但是vuefullName显示的值是通过get得来的
      而不是通过click给赋值的John Doe
    </button>
    <div id="demo">{{ vuefullName }},{{ vuefirstName }},{{ vuelastName }}</div>
    <div>
      计算属性依赖计算属性的结果vuefullNameAddage：{{ vuefullNameAddage }}
    </div>
    <div>
      methods中方法定义函数执行：{{ vuefullNameAddagemethods }}，{{
        vuefullNameAddagemethods()
      }}
    </div>
    <div>不可编辑：{{ fullname }}</div>
    4 v-model： 5 <input v-model="fullname" /> 6 <br />
    7 绑定响应式数据、触发input事件： 8
    <input
      v-bind:value="fullname"
      v-on:input="fullname = $event.target.value"
      type="text"
    />
  </div>
</template>

<script>
// import {computeds} from 'computeds.vue';
export default {
  name: 'computeds',
  data() {
    return {
      vuefirstName: 'Foo',
      vuelastName: 'Bar',
      // vuefullName: 'abc def',//计算属性不可以在这里定义
      firstname: { val: 'a' },
      lastname: { val: 'b' },
    }
  },
  computed: {
    vuefullName: {
      // getter 默认的
      get: function() {
        return this.vuefirstName + ' ' + this.vuelastName + '通过get得来的'
      },
      // setter
      set: function(newValue) {
        var names = newValue.split(' ')
        this.vuefirstName = names[0]
        this.vuelastName = names[names.length - 1]
      },
    },
    vuefullNameAddage() {
      return this.vuefullName + '25岁'
    },
    fullname: {
      get() {
        return this.firstname.val + '.' + this.lastname.val
      },
      set(val) {
        let a = val.split('.')[0]
        let b = val.split('.')[1]
        this.firstname = { val: a }
        this.lastname = { val: b }
      },
    },
  },
  methods: {
    vuefullNameAddagemethods() {
      return this.vuefullName + '25岁'
    },
    vuefullNameFn() {
      console.log('执行了设置set')
      this.vuefullName = 'John Doe'
    },
  },
}
</script>
<style lang="scss" scoped>
.computeds {
}
</style>
