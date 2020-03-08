import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {FaPen , FaTrash, FaSave} from 'react-icons/fa'

export class MesgItem extends Component {
    constructor(props){
    super(props);
    this.state = {
        edit: false,
        mesgEdit: {
            id : '',
            title: '',
            body: ''
        }
    }


}
    editing(id) {
        this.setState({mesgEdit : {id : id , title : this.state.mesgEdit.title , body : this.state.mesgEdit.body}})
        this.setState({edit: true})
    }

    editingT = (e) => {
        this.setState({mesgEdit: { id : this.state.mesgEdit.id , title : e.target.value , body : this.state.mesgEdit.body}});
    }

    editingB = (e) => {
        this.setState({ mesgEdit: {id : this.state.mesgEdit.id , title : this.state.mesgEdit.title, body : e.target.value }});
    }

    onSubmit = (e, id) => {
        e.preventDefault();
        this.props.updateMesgItem(this.state.mesgEdit.id, this.state.mesgEdit.title , this.state.mesgEdit.body);
        this.setState ({mesgEdit : {id: '' , title: '' , body : ''}}) ;
        this.setState ({edit: false}) ;
    }

    renderEdit() {
        return (
            <div>
                <form onSubmit = {this.onSubmit} className = "form-group">
                    <input
                    type="text"
                    name = "title"
                    value = {this.state.mesgEdit.title || ''}
                    onChange = {this.editingT}
                    style = {titleStyle}
                    className = "form-control" />

                    <input
                    type = "textarea"
                    title = "body"
                    value = {this.state.mesgEdit.body || ''} 
                    onChange = {this.editingB}
                    style = {bodyStyle}
                    className = "form-control" />

                    <button
                    type = "submit"
                    style = {submitStyle}>
                        <FaSave style = {saveStyle} />
                        </button>
                </form>
            </div>
        )
    }

    

    renderUI(id, title, body) {
        let titleToShow = title;
        if (titleToShow.length > 20)
        titleToShow = titleToShow.slice(0,19) + "..."

        return(
            
                <div style = {itemStyle}>
                    <span>{titleToShow}</span>
                    <FaTrash className="delete" style = {delStyle} onClick={this.props.delMsg.bind(this, id)} />
                    <FaPen className="edit" style = {editStyle} onClick= {this.editing.bind(this,id)}/>
                </div>
        )
    }
    
    render() {
        const {id, title, body} = this.props.mesgsItem;
        return this.state.edit ? this.renderEdit(id, title, body) : this.renderUI(id, title, body);
    }
}



const itemStyle ={
    position: 'relative',
    height: '62px',
    width: '100%',
    color: '#fff',
    fontHeight: '26px',
    paddingLeft: '16px',
    paddingTop: '19px',
    borderBottom: '1px #fff solid'
}



const delStyle = {
    float: 'right',
    marginRight: '17px',
    color: '#FD5842'
    
}


const editStyle = {
    float: 'right',
    marginRight: '16px'
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
    marginLeft: '-20%',
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

const saveStyle = {
    height: '54px',
    width: '54px',
    color: '#FD5842'
}


export default MesgItem;



