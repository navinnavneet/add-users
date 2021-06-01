import { useSelector, useDispatch } from 'react-redux'
import classes from "./Input.module.css"

const Input = () => {
    const dispatch = useDispatch()
    const value = useSelector(state => state.newUser)
    return (
        <input 
            className={classes.Input} 
            type="text" 
            value={value}
            placeholder='Add User'
            onChange={e => dispatch({type: 'CHANGE_INPUT', payload: e})} />
    )
}

export default Input