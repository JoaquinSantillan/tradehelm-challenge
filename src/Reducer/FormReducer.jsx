import { useForm } from "../Hooks/useForm"
import '../Styles/Form.css'

export const FormReducer = ({handleAddItem,CloseModal})=>{
    const [{description},handleInputChange,reset] = useForm({
        description:""
    })


    const handleSubmit = (e)=>{
        e.preventDefault()

        if(description.trim().length <= 1){
            return
        }

        const newTodo = {
            id:new Date().getTime(),
            desc:[description],
            done:false
        }

        handleAddItem(newTodo)
        reset()
    }

    return(
        <div className="form-container">
        <h1 className="form-title">Add Item</h1>
        <form className="form" onSubmit={handleSubmit}>
            <input 
            type="text"
            name="description"
            className="input-form"
            placeholder="add compra"
            autoComplete="off"
            value={description}
            onChange={handleInputChange}
            />
            <div className="buttons">
            <button type="submit"
            className="button close"onClick={CloseModal}>Close</button>
            <button type="submit"
            className="button" onClick={CloseModal}>add</button>
            </div>
        </form>
        </div>
    )
}