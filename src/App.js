import React from 'react';
import Todos from './component/Todos';
import AddTodo from './component/AddTodo';
import * as actions from './action';
import { connect } from 'react-redux';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <Todos todos={this.props.todos} toggle={this.props.toggle}/>
                <AddTodo addTodo={this.props.addTodo}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: text => dispatch(actions.addTodo(text)),
        toggle: id => dispatch(actions.toggle(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);