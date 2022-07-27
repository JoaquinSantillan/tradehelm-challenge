import '../../Styles/List.css'

export const List = ({item,handleDelete,handleToggle})=>{


    return(
        <li className='items-compra'>
            <p className={`${item.done && 'complete'} `}
            onClick={()=> handleToggle(item.id)}>
                {item.desc}
            </p>

            <button
            onClick={()=> handleDelete(item.id)} className='delete'>delete</button>
        </li>
    )
}