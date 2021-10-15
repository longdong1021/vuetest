<!--  -->
<template>
  <div id="watch-example">
    <p>
      问一个是/否问题：
      <input v-model="questionVal" placeholder="请输入您的问题" />
    </p>
    <p>{{ answer }}</p>
  </div>
</template>
<!-- 因为 AJAX 库和通用工具的生态已经相当丰富，Vue 核心代码没有重复 -->
<!-- 提供这些功能以保持精简。这也可以让你自由选择自己更熟悉的工具。 -->
<!-- 
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
 -->

<script>
export default {
  name: 'watch-example',
  components: {},
  data() {
    return {
      questionVal: '',
      answer: '在您提出问题之前，我无法给您答案！',
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    questionVal: function(newQuestion, oldQuestion) {
      console.log(newQuestion, oldQuestion)
      this.answer = '等你停止打字...'
      this.debouncedGetAnswer()
    },
  },
  created: function() {
    // `_lodashCDN.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_lodashCDN.debounce` 函数 (及其近亲 `_lodashCDN.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = window._.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function() {
      if (this.questionVal.indexOf('?') === -1) {
        this.answer = '问题通常包含一个问号. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      this.$axios
        .get('https://yesno.wtf/api')
        .then(function(response) {
          vm.answer = window._.capitalize(response.data.answer)
        })
        .catch(function(error) {
          vm.answer = '错误！ 无法访问 API。' + error
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.watch-example {
}
</style>
