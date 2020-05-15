import React from 'react';
import { connect } from 'react-redux'

const ToDoList = (props) => {
  const { inputVal, inputChange, buttonClick, list } = props
  return (
    <div>
      <input
        value={inputVal}
        onChange={inputChange}
      />
      <button onClick={buttonClick}>添加</button>
      <ul>
        {
          list.map((v, i) => {
            return (
              <li key={i}>{v}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

const stateToProps = (state) => {
  return {
    inputVal: state.inputVal,
    list: state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      const action = {
        type: 'input_change',
        value: e.target.value
      }
      dispatch(action)
    },
    buttonClick() {
      const action = {
        type: 'add_value'
      }
      dispatch(action)
    }
  }
}

export default connect(stateToProps, dispatchToProps)(ToDoList)