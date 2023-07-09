import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodosLogic = () => {
  const todos = [
    {
      id: 1,
      title: 'Setup development environment',
    },
    {
      id: 2,
      title: 'Develop website and add content',
    },
    {
      id: 3,
      title: 'Deploy to live server',
    },
  ];
  return (
    <div>
      <InputTodo />
      <TodosList todosProps={todos} />
    </div>
  );
};
export default TodosLogic;
