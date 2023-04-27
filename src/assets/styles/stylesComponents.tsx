import styled from "styled-components"
import { base } from "./theme"

export const Apps = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${props => props.theme.fonColor};

    color: ${props => props.theme.textColor};
`

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;

    @media ${base.media.tablet} {
        width: 95%
    }
`

export const Button = styled.button`
    font: 400 .8rem/1 ${base.font.textFonts};
    color: ${props => props.theme.textColor};

    background: ${props => props.theme.btnColor};
    border-radius: ${base.radius.px10};

    padding: .8rem;
    cursor: pointer
`

export const Block = styled.div`
    background: ${props => props.theme.blockColor};
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: ${base.radius.px13};

    padding: 5px 10px;
    margin: 20px auto;
    
    width: 45%;

    @media ${base.media.tablet} {
        width: 90%
    }
`

export const Title = styled.h3`
    font: 500 1.5rem/1 ${base.font.titleFonts};
    margin: 10px 0
`