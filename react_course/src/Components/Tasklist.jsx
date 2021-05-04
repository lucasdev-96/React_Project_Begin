import React from 'react';
import './tasklist.css'
import PropTypes from 'prop-types'

class Tasklist extends React.Component {
    render() {
        const {titles, addTask, task} = this.props;
       

        return (
            
        <div className="tasklist">
        <div className="title">{titles}</div>
       <div className="content">
       {task.map((task) => {
           return <div>{task}</div>
       })}
       <button  onClick={() => addTask('Nova tarefa')}>Adicione uma tarefa</button>
       </div>
        </div>
        )
    }
}

Tasklist.propTypes = {
    titles: PropTypes.string.isRequired,
    addTask: PropTypes.func,
}

export default Tasklist