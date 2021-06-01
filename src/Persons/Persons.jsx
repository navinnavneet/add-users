import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classes from './Persons.module.css'

const Persons = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'INIT'})
    }, [])

    const deleteUserHandler = id => {
        dispatch({type: 'DELETE_USER', id: id})
    }

    const persons = users.map(person => {
        const {name, id} = person
        return (
            <li key={id} onClick={() => deleteUserHandler(id)}><h3>{name}</h3></li>
        )
    })
    return (
        <ul className={classes.Persons}>
            {persons}
        </ul>
    )
}

export default Persons