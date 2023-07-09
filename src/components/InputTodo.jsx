const InputTodo = () => {
  const inputText = {
    id: '',
    title: '',
    completed: false,
  };
  return (
    <form className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
      />
      <button type="submit" className="input-submit">
        Submit
      </button>
    </form>
  );
};
export default InputTodo;
