import React, {Component} from 'react';

export default class Task extends Component{
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
        }
    }

    edit = () => {
        this.setState({edit: true});
    }

    remove = () => {
        this.props.delTask(this.props.index);
    }

    save = () => {
        this.props.updTask(this.textInput.value, this.props.index);
        this.setState({edit: false});
    }

    rendDef = () => {
        return(
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="task">
                    <p>{this.props.children}</p>
                    <button onClick={this.edit} className="btn light">Редактировать</button>
                    <button onClick={this.remove} className="btn red">Удалить</button>
                </div>
            </div>
        );
    }

    rendEdit = () => {
        return(
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="task task-edit">
                    <textarea ref={(input) => { this.textInput = input; }} >{this.props.children}</textarea>
                    <button onClick={this.save} className="btn sucses">Сохранить</button>
                </div>
            </div>
        );
    }

    render() {
        if (this.state.edit) {
            return this.rendEdit();
        } else {
            return this.rendDef();
        }
    }
}