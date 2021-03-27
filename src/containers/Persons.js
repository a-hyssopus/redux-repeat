import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import {connect} from "react-redux";

import * as actionType from '../store/actions'

class Persons extends Component {
    state = {
        persons: [],
    }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age}
                        clicked={() => this.props.onDeleteHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddHandler: () => dispatch({type: actionType.ADD_PERSON}),
        onDeleteHandler: (id) => dispatch({type: actionType.DELETE_PERSON, id: id})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Persons);