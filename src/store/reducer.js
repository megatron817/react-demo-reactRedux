const defaultState = {
  inputVal: '奥利给',
  list: ['憨憨', '混蛋', '白痴']
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'input_change':
      let newState = JSON.parse(JSON.stringify(state))
      newState.inputVal = action.value
      return newState
    case 'add_value':
      let newState2 = JSON.parse(JSON.stringify(state))
      newState2.list.push(newState2.inputVal)
      newState2.inputVal = ''
      return newState2
    default:
      return state
  }
}