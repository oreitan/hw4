import React, { Component } from 'react'
import { FaPlusCircle } from 'react-icons/fa'

export class AddMsgItem extends Component {
    state = {
        title: '',
        body: ''
    };

    cTitle = (e) => {
        this.setState({ title: e.target.value });
    }

    cBody = (e) =>{
    this.setState({body: e.target.value});
    }

    onSubmit = (e) =>{
    e.preventDefault();
    this.props.addMsgItem(this.state.title,this.state.body);
    this.setState({title: '',body: ''});
    }

    render() {
        return (
            <div>
                <form style = {formStyle} onSubmit={this.onSubmit} className="form-group">
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter Mesges Title"
                        value={this.state.title}
                        onChange={this.cTitle}
                        style = {titleStyle}
                        className="form-control" />
                    <input
                        type="text"
                        name="body"
                        placeholder="Enter Mesges body"
                        value={this.state.body}
                        onChange={this.cBody}
                        style = {bodyStyle}
                        className="form-control" />

                    <button 
                    style = {submitStyle}>
                    <FaPlusCircle style = {circleStyle}/>
                    type = "submit"></button>
                </form>
            </div>
        )
    }

} 

const formStyle = {
    position: 'absolute',
    marginLeft: '10vw',
    marginTop: '30.22vh',
    width: '22.625vw',
    height: '42vh',
    background: 'rgba(23, 25, 50, 0.8)',
    boxShadow: '0px 4px 14px rgba(23, 25, 50, 0.5)',
    borderRadius: '10px'
}

const titleStyle = {
    position: 'relative',
    marginLeft: '05.198776758%',
    marginTop: '04.761904761%',
    width: '20.4375vw',
    height: '05.33vh',
    background: '#FFF',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',

}

const bodyStyle = {
    position: 'relative',
    marginLeft: '05.198776758%',
    marginTop: '04.761904761%',
    width: '20.4375vw',
    height: '30.55vh',
    background: '#FFF',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
}

const submitStyle = {
    border: '0',
    padding: '0',
    backgroundColor: '#FD584200',
    position: 'relative',
    marginLeft: '42.54%',
    marginTop: '-2.857%'

    
}

const circleStyle = {
    height: '54px',
    width: '54px',
    color: '#FD5842'
}
export default AddMsgItem;