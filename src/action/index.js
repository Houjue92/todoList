let nextTodo = 0;
export const addTodo = text => {
    return {
        type:'ADD TODO',
        id: nextTodo++,
        text
    }
}

export const toggle = id => {
    return {
        type:'TOGGLE',
        id
    }
}
