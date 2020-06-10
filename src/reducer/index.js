const todos = (state=[], action) => {
    switch('ADD TODO') {
        case 'ADD TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE':
            return state.map(todo => {
                if(todo.id !== action.id) {
                    return todo;
                } else {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
            });
        default:
            return state;
    }
}

export default todos;