// import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input
          type="checkbox"
          className="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
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
    </li>
  );
};
TodoItem.propTypes = {
  itemProp: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  delTodo: PropTypes.string.isRequired,
};
export default TodoItem;
