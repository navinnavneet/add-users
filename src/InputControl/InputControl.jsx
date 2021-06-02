import { useSelector, useDispatch } from 'react-redux'
import classes from './InputControl.module.css'
import Input from './Input/Input'
import Button from './Button/Button'

const InputControl = () => {
    const dispatch = useDispatch()
    const newUser = useSelector(state => state.newUser)
    const submitHandler = e => {
        e.preventDefault()
        if (newUser.length >= 4) {
            dispatch({type: 'ADD_USER'})
        }
    }
    return (
        <form onSubmit={submitHandler} className={classes.InputControl}>
            <Input />
            <Button />
        </form>
    )
}
export default InputControl