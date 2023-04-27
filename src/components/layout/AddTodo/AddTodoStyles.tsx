import styled from "styled-components"
import { Block } from "../../../assets/styles/stylesComponents"
import { base } from "../../../assets/styles/theme"

export const AddBlock = styled(Block)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Input = styled.input`
    background: none;
    padding: 7px;
    width: 100%;
    color: ${props => props.theme.textColor};
    font: 400 .8rem/1 ${base.font.textFonts}
`