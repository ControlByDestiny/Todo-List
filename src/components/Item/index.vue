<template>
  <div class='wrapper' :class="{'wrapper-finish':task.finished}">
    <div class='item'>
      <div class='item-left'>
        <input type='checkbox' @click='changeState()' :checked='task.finished' class='mgc mgc-success item-check'/>
        <span :class="{'item-finish':task.finished}">{{task.content}}</span>
      </div>
      <div class='item-right'>
        <div @click="removeTask()" class="item-del" :class="{'item-finish-del':task.finished}">删除</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      content: '',
      finished: false,
      deleted: false
    }
  },
  methods: {
    removeTask () {
      this.$emit('remove-task', this.task)
    },
    changeState () {
      this.task.finished = !this.task.finished
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    font-size 14px
    color #222222
    text-align center
    background-color #009966
    width 100%
    height 30px
    display flex
    justify-content center
    align-items center
    border-radius 0.8 rem
    margin 5px auto
    &-finish
      background-color #999999
      font-size 14px
    &-del
      color #CC0033
  .item
    margin 0 auto
    width 95%
    display flex
    justify-content space-between
    &-check
      margin-right 5px
    &-del
      width 3 rem
      font-size 0.5 rem
      background #FF3333
      text-decoration none
      letter-spacing 2px
      padding 2px 5px
      border-radius 8px
      color #FFFFFF
      outline none
      cursor pointer
</style>
