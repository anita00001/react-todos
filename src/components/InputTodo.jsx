import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item');
    }
  };
  return (
    <>
      <form
        className="form-container"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="input-text"
          placeholder="Add todo..."
          value={title}
          onChange={handleChange}
        />
        <button type="submit" className="input-submit">
          <FaPlusCircle />
        </button>
      </form>
      <div className="submit-warning">{message}</div>
    </>
  );
};
InputTodo.propTypes = {
  addTodoItem: PropTypes.string.isRequired,
};

export default InputTodo;
