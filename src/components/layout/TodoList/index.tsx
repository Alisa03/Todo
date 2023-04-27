import ItemTodo from "../../ui/ItemTodo";

import { Title } from "../../../assets/styles/stylesComponents"

export default function ListTodo({ list, setTodo, bool, title }: any) {

    const DeleteItem = (item: any) => {
        setTodo(list.filter((i: any) => i.id !== item.id))
    }

    const CheckedItem = (item: any) => {
        const newTodo = [...list];
        newTodo[list.indexOf(item)].checked = !item.checked
        setTodo(newTodo)
    }

    return (
        <div>
            <Title>{title}</Title>
            {list.map((item: any) =>
                item.checked === bool &&
                <ItemTodo
                    key={item.id}
                    todo={item}
                    deleted={DeleteItem}
                    checked={CheckedItem}
                />
            )}
        </div>
    )
}