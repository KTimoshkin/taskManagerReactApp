import React, {Component} from 'react';
import Task from './Task';

export default class Field extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
    }

    addTask = (text) => {
        let arr = this.state.tasks;
        arr.push(text);
        this.setState({tasks: arr});
    }

    removeTask = (i) => {
        let arr = this.state.tasks;
        arr.splice(i, 1);
        this.setState({tasks: arr});
    }

    updateText = (text, i) => {
        let arr = this.state.tasks;
        arr[i] = text;
        this.setState({tasks: arr});
    }

    eachTask = (task, i) => {
        return (
            <Task key={i} index={i} updTask={this.updateText} delTask={this.removeTask}>
                {task}
                </Task>
        );
    }

    render() {
        return(
            <div className="row tasks">
                {this.state.tasks.map(this.eachTask)}
                <div className="col-lg-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div className="add-task">
                        <button onClick={this.addTask.bind(null, 'Новый таск')} className="btn new">Добавить таск</button>
                    </div>
                </div>

            </div>

        );
    }
}