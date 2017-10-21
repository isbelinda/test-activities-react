import React from 'react'

class FormTest extends React.Component {
    state = {
        code: '',
        name: '',
        room: '',
        date: '',
        title: 'Add Test'
    }

    componentWillMount() {
        if(this.props.initial.id) {
            this.setState({
                ...this.props.initial,
                title: `Edit: ${this.props.initial.name}`
            })
        }
    }

    updateTextCode = (e) => {
        this.setState({
            code: e.target.value
        })
    }

    updateTextName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    updateTextRoom = (e) => {
        this.setState({
            room: e.target.value
        })
    }

    updateTextTime = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleUpdateForm = () => {
        this.props.onSave(this.state)
    }

    render() {
        return (
            <div className="form">
                <h3>{this.state.title}</h3>
                <div>
                    <ul>
                        <li>Access code	</li>
                        <li><input type="text" value={this.state.code} onChange={this.updateTextCode}/></li>
                    </ul>
                    <ul>
                        <li>Exam</li>
                        <li><input type="text" value={this.state.name} onChange={this.updateTextName}/></li>
                    </ul>
                    <ul>
                        <li>Room</li>
                        <li><input type="text" value={this.state.room} onChange={this.updateTextRoom}/></li>
                    </ul>
                    <ul>
                        <li>Time</li>
                        <li><input type="text" value={this.state.date} onChange={this.updateTextTime}/></li>
                    </ul>
                    <button className="button add" type="button" onClick={this.handleUpdateForm}>Save</button>
                    <button className="button cancel" type="button" onClick={this.props.onClose}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default FormTest