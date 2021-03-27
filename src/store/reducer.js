import * as actionType from '../store/actions'

const initialState = {
    persons: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case(actionType.ADD_PERSON): {
            const newPerson = {
                id: Math.random(), // not really unique but good enough here
                name: 'Dasha',
                age: Math.floor(Math.random() * 40)
            }
            return {
                persons: state.persons.concat(newPerson)
            }
        }

        case(actionType.DELETE_PERSON): {
            const updatedPersonList = state.persons.filter(person => person.id !== action.id)
            return {
                persons: updatedPersonList
            }
        }

        default:
            return state;
    }
}

export default rootReducer;