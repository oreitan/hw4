import React, {Component} from 'react'
import MesgItem from './MesgItem'
import PropTypes from 'prop-types'

export class Mesgs extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        console.log(this.props.Megs);
        return (
            <ul style={listStyle}>
                {
                this.props.Megs.map((mesgItem) => (
                <li key={mesgItem.id}> <MesgItem mesgsItem = {mesgItem} delMsg = {this.props.delMsg} updateMesgItem = {this.props.updateMesgItem} /> </li>
                     ))
                 }
            </ul>
        )
    }
}

const listStyle = {
    position: 'absolute',
    marginLeft: '65.625vw',
    marginTop: '30.22vh',
    backgroundColor: 'rgba(23, 25, 50, 0.8)',    
    boxShadow: '0px 4px 14px rgba(23, 25, 50, 0.5)',
    borderRadius: '10px',
    width: '22.625vw',
    height: '42vh',
    overflowY: 'scroll'

}

export default Mesgs;