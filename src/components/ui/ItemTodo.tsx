import styled from "styled-components"

import { base } from "../../assets/styles/theme"
import { Button } from "../../assets/styles/stylesComponents"

const Wrap = styled.div`
    padding: 15px 5px;
    border-top: 2px solid ${props => props.theme.borderColor};
    width: 100 %;
    font: 400 1rem/1 ${base.font.textFonts};

    display: flex;
    align-items: center;
    justify-content: space-between;

`

const ItemBtn = styled.div`
    display: flex;
    gap: 0 5px
`


export default function ItemTodo({ todo, deleted, checked }: any) {

    return (
        <Wrap>
            {todo.title}
            <ItemBtn>
                <input type="checkbox"
                    defaultChecked={todo.checked}
                    onChange={() => checked(todo)}
                />
                <Button onClick={() => deleted(todo)}>Delete</Button>
            </ItemBtn>
        </Wrap>
    )
}