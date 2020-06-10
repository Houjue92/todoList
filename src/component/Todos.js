import React from 'react';
import Todo from './Todo';

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <ul>
                {this.props.todos.map(todo => {
                    return <Todo key={todo.id} text={todo.text} completed={todo.completed} toggle={this.props.toggle}/>
                })}
            </ul>
        );   
    }
}
export default Todos;