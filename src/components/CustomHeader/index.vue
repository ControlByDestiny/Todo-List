<template>
  <div class="wrapper">
    <div class='header'>
      <input type='text' v-model='task.content' @keydown.enter="addTask()" placeholder='添加待办事项' required class='header-input'/>
      <button class='header-submit' @click='addTask()'>添加</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      task: {
        content: '',
        finished: false,
        deleted: false
      }
    }
  },
  methods: {
    addTask () {
      if (!this.task.content) {
        return
      }
      this.$emit('add-task', this.task)
      this.task = {
        content: '',
        finished: false,
        deleted: false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    background-color #BBBBBB
    width 100%
    height 50 px
    display flex
    justify-content center
    align-items center
  .header
    margin 0 auto
    width 40 rem
    display flex
    justify-content space-between
    &-input
      border 1px solid
      height 1.5 rem
      border-radius 0.5 rem
      width 28 rem
      outline none
      text-indent 0.5 rem
    &-submit
      border 1px solid #00CCFF
      height 1.5 rem
      border-radius 0.5 rem
      width 5 rem
      outline none
      background-color #00CCFF
  .header-input:focus
    border 1px solid
    height 1.5 rem
    border-radius 0.5 rem
    width 28 rem
</style>
