import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const { todosProps } = props;
  return (
    <ul>
      {todosProps.map((todo) => (
        <TodoItem key={todo.id} itemProp={todo} />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  todosProps: PropTypes.string.isRequired,
};

export default TodosList;