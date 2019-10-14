import { types } from './actions'

const mutations = {
  [types.SUBMIT_TASK] (state, task) {
    console.log(JSON.stringify(task))
    state.taskList.push(task)
  },
  [types.REMOVE_TASK] (state, task) {
    state.taskList.splice(state.taskList.indexOf(task), 1)
  }
}

export default mutations
