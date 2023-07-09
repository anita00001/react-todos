import Header from './Header';
import TodosLogic from './TodosLogic';
import '../styles/TodoApp.css';

function TodoApp() {
  return (
    <div className="App">
      <Header />
      <TodosLogic />
    </div>
  );
}

export default TodoApp;
