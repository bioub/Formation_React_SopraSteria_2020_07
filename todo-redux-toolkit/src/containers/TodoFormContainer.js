import TodoForm from '../components/TodoForm';
import { connect } from 'react-redux';
import { selectNewTodo } from '../store/selectors';
import { newTodoChange, todoAdd } from '../store/actions';

function mapStateToProps(state) {
  return {
    value: selectNewTodo(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onValueChange(value) {
      dispatch(newTodoChange(value));
    },
    onTodoSubmit(value) {
      dispatch(todoAdd(value));
    },
  };
}

const enhance = connect(mapStateToProps, mapDispatchToProps);
const TodoFormContainer = enhance(TodoForm);
export default TodoFormContainer;
