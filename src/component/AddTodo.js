import React from 'react';
import { addTodo } from '../action';

class AdTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ''}
    }

    handleChange = e => {
        this.setState({input: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addtodo(this.state.input);
        this.setState({input:''});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChange}/>
                <button type="submit">AddTodo</button>
            </form>
            
        );
    }
}
export default addTodo;