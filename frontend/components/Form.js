import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <>
        <form id='todoForm' onSubmit={this.props.onTodoFormSubmit}>
          <input value={this.props.todoNameInput} onChange={this.props.onTodoChange} type='text' placeholder='Type Todo'></input>
          <input type='submit'></input>
        </form>
        <button onClick={this.props.toggleDisplayCompleted}>{this.props.displayCompleted ? 'Hide' : 'Show'} Completed</button>
      </>
    )
  }
}
