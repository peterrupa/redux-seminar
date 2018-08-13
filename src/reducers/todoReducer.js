import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions/todoActions';

const initialState = {
    todoList: [],
    currentId: 0
};

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO: {
            const newTodoList = [
                ...state.todoList, {
                    id: state.currentId,
                    task: action.task,
                    done: false
                }
            ];
        
            return Object.assign({}, state, {
                todoList: newTodoList,
                currentId: state.currentId + 1
            });
        }
            
        case DELETE_TODO: {
            const newTodoList = state.todoList.filter((todo) => todo.id !== action.id);
            
            return Object.assign({}, state, {
                todoList: newTodoList
            });
        }
        
        case TOGGLE_TODO: {
            const newTodoList = state.todoList.map((todo) => {
                if(todo.id !== action.id) return todo;
                
                return {
                    id: todo.id,
                    task: todo.task,
                    done: !todo.done
                };
            });
            
            return Object.assign({}, state, {
                todoList: newTodoList
            });
        }
            
        default:
            return state;
    }
}

export default todoReducer;