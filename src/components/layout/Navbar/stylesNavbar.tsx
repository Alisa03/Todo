import styled from "styled-components"
import { Container } from "../../../assets/styles/stylesComponents"
import { base } from "../../../assets/styles/theme"

export const NavbarContainer = styled(Container)`
    padding: 10px 0
`

export const Nav = styled.nav`
    background: ${props => props.theme.blockColor};
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: ${base.radius.px13};

    padding: 10px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.h1`
    font: 700 2rem/1 ${base.font.titleFonts};
    color: ${props => props.theme.textColor}
`