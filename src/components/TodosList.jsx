import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({ todosProps, handleChange, delTodo }) => (
  <ul>
    {' '}
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
      />
    ))}
  </ul>
);

TodosList.propTypes = {
  todosProps: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired,
  delTodo: PropTypes.string.isRequired,
};

export default TodosList;
