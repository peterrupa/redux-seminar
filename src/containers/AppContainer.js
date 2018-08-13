
import App from '../components/App/App';
import { connect } from 'react-redux';
import { nextSlide, prevSlide } from '../actions/slideActions';
import { addTodo, deleteTodo, toggleTodo } from '../actions/todoActions';

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextSlide: () => {
            dispatch(nextSlide());
        },
        prevSlide: () => {
            dispatch(prevSlide());
        },
        addTodo: (task) => {
            dispatch(addTodo(task));
        },
        deleteTodo: (id) => {
            dispatch(deleteTodo(id));
        },
        toggleTodo: (id) => {
            dispatch(toggleTodo(id));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
