export const types = {
  SUBMIT_TASK: 'SUBMIT_TASK',
  REMOVE_TASK: 'REMOVE_TASK'
}

const actions = {
  submitTask ({ commit }, task) {
    commit(types.SUBMIT_TASK, task, true)
  },
  removeTask ({ commit }, task) {
    commit(types.REMOVE_TASK, task, true)
  }
}

export default actions
