// import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo }) => (
  <div className="todo-item">
    <input
      type="checkbox"
      className="checkbox"
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}
    />
    {itemProp.title}
    <button type="button" className="btn-style">
      edit
    </button>
    <button
      type="button"
      className="btn-style"
      onClick={() => delTodo(itemProp.id)}
    >
      delete
    </button>
  </div>
);
TodoItem.propTypes = {
  itemProp: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  delTodo: PropTypes.string.isRequired,
};
export default TodoItem;
