import { List } from "./List"
import '../../Styles/ListUi.css'

export const ListUi  = ({item,handleDelete,handleToggle})=>{


    return(
        <ul className="ul-card-container">
            {
                item.map(items=>(
                    <List
                    key={item.id}
                    item={items}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                    />
                ))
            }
        </ul>
    )
}