import { useDispatch } from 'react-redux'
import classes from './InputControl.module.css'
import Input from './Input/Input'
import Button from './Button/Button'

const InputControl = () => {
    const dispatch = useDispatch()
    const submitHandler = e => {
        e.preventDefault()
        dispatch({type: 'ADD_USER'})
    }
    return (
        <form onSubmit={submitHandler} className={classes.InputControl}>
            <Input />
            <Button />
        </form>
    )
}
export default InputControl