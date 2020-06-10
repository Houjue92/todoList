import React from 'react';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return(
            <li
                onClick={this.props.toggle}
                style={{textDecoration: this.props.completed? 'line-through':'none'}}
            >
                {this.props.text}
            </li>
        );
    }
}
export default Todo;