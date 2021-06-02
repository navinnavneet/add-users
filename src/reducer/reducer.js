import { createUsers } from '../utility/utility'
const initialState = {
    users: [],
    newUser: ''
} 
const reducer = (state = initialState, action) => {
    if (action.type === 'INIT') {
        const createdUsers = createUsers()
        return {
            ...state,
            users: createdUsers
        }
    }
    if (action.type === 'DELETE_USER') {
        const updatedUsers = state.users.filter(user => user.id !== action.id)
        return {
            ...state,
            users: updatedUsers
        }
    } 
    if (action.type ==='CHANGE_INPUT') {
        let newUser = action.payload.target.value.trim()
        if (newUser[0]) {
            newUser = newUser[0].toUpperCase() + newUser.slice(1)
        }
        return {
            ...state,
            newUser: newUser
        }
    }
    if (action.type === 'ADD_USER') {
        let userId
        if (!state.users.length) {
            userId = 1
        } else {
            userId = state.users[0].id - 1
        }
        const updatedUser = {name: state.newUser, id: userId}
        let updatedUsers = []
        const isOriginal = state.users.every(singleUser => {
            return singleUser.name !== state.newUser
        })
        if (!isOriginal) {
            updatedUsers = state.users.filter(user => user.name !== state.newUser)
        } else {
            updatedUsers = [ ...state.users ]
        }
        updatedUsers.unshift(updatedUser)
        return {
            ...state,
            users: updatedUsers,
            newUser: ''
        }
    }
    return state
}

export default reducer