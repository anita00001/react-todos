import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({
  itemProp, handleChange, delTodo, setUpdate,
}) => {
  // const [updateInput, setUpdateInput] = useState(itemProp.title);
  const editInputRef = useRef(null);
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          className="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
        <button
          type="button"
          className="btn-style"
          onClick={handleEditing}
        >
          <AiFillEdit style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
        <button
          type="button"
          className="btn-style"
          onClick={() => delTodo(itemProp.id)}
        >
          <FaTrash style={{ color: '#5e5e5e', fontSize: '16px' }} />
        </button>
      </div>
      <input
        type="text"
        ref={editInputRef}
        defaultValue={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};
TodoItem.propTypes = {
  itemProp: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  delTodo: PropTypes.string.isRequired,
  setUpdate: PropTypes.string.isRequired,
};
export default TodoItem;
