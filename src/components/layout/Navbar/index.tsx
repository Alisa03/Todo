import { NavbarContainer, Nav, Logo } from "./stylesNavbar"
import { Button } from "../../../assets/styles/stylesComponents"

export default function Navbar({ onClick, theme }: any) {
    return (
        <NavbarContainer>
            <Nav>
                <Logo>
                    STAR
                </Logo>
                <Button onClick={onClick}>
                    Switch to {theme === "light" ? '🌕' : '☀️'} mode
                </Button>
            </Nav>
        </NavbarContainer>
    )
}