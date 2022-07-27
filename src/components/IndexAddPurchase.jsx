import { useEffect, useReducer, useState } from "react";
import { ListUi } from "./ui/ListUi";
import { FormReducer } from"../Reducer/FormReducer";
import { ListReducer } from"../Reducer/ListReducer";
import '../Styles/Home.css'

const init = ()=>{
    return JSON.parse(localStorage.getItem('item')) || []
}

export const IdexAddPurchase =()=>{

    const [item,dispatch] = useReducer(ListReducer,[],init)
    const [open,setOpen] = useState(false)

    const OpenModal = ()=> setOpen(true)
    const CloseModal = ()=> setOpen(false)

    const handleDelete = (itemId)=>{
        const action = {
            type:'delete',
            payload:itemId
        }

        dispatch(action)
    }
    const handleToggle = (itemId)=>{
        dispatch({
            type:'bought',
            payload:itemId
        })
    }

    const handleAdd = (newItem)=>{
        dispatch({
            type:'add',
            payload:newItem
        })
    }

    useEffect(()=>{
        localStorage.setItem('item',JSON.stringify(item))
    },[item])

    return(
        <>
        <div className='container'>
        <h1 className="title-card">SuperMark List:</h1>
        <p>item's</p>
        <ListUi
        item={item}
        handleDelete={handleDelete}
        handleToggle={handleToggle}/>

        <button className="button-add" onClick={OpenModal}>add Item</button>
        </div>
        <div className={open? 'container-formulario active' : 'container-formulario'}>
        <FormReducer
            handleAddItem={handleAdd}
            CloseModal={CloseModal}/>
        </div>
        </>
    )
}