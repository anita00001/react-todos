// import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ itemProp }) => {
  const { title } = itemProp;
  // const [completed, setCompleted] = useState({
  //   isChecked: false,
  // });
  // const handleChange = () => {
  //   setCompleted({
  //     isChecked: !completed.isChecked,
  //   });
  // };

  return (
    <div className="todo-item">
      {/* <input
        type="checkbox"
        className="checkbox"
        checked={completed.isChecked}
        onChange={handleChange}
        /> */}
      <input type="checkbox" className="checkbox" />
      {title}
      <button type="button" className="btn-style">
        edit
      </button>
      <button type="button" className="btn-style">
        delete
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.string.isRequired,
};
export default TodoItem;
