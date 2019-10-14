<template>
  <div>
    <custom-header @add-task='addNewTask'/>
    <div class='content'>
      <div class='content-todo'>
        <div class='title'>正在进行</div>
        <div class='item'>
          <div v-for='(task, index) in taskList' :key="index">
            <item :task='task' v-if='!task.finished && !task.deleted' @remove-task='deleteTask'/>
          </div>
        </div>
      </div>
      <div class='content-finished'>
        <div class='title'>已经完成</div>
        <div class='item' v-if='taskList.length !== 0'>
          <div v-for='(task, index) in taskList' :key="index">
            <item :task='task' v-if='task.finished && !task.deleted' @remove-task='deleteTask'/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from '../../components/CustomHeader'
import { mapState, mapActions } from 'vuex'
import Item from '../../components/Item'
export default {
  components: {
    CustomHeader,
    Item
  },
  computed: {
    ...mapState(['taskList'])
  },
  methods: {
    ...mapActions(['submitTask', 'removeTask']),
    addNewTask (task) {
      // this.taskList.push(task)
      this.submitTask(task)
    },
    deleteTask (task) {
      // this.taskList.splice(this.taskList.indexOf(task), 1)
      this.removeTask(task)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    margin 0 auto
    &-todo
      width 38 rem
      margin 0 auto
    &-finished
      width 38 rem
      margin 0 auto
  .title
    width 38 rem
    height 30 px
    text-align left
  .item
    width 38 rem
    text-align left
</style>
