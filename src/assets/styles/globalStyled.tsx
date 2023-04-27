import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    
    button {
        background: none;
        border: none;
    }
    input {
        outline:none;
        border: none;
    }
    a {
        text-decoration: none;
        color: initial;
    }
    li {list-style: none}
    img {object-fit: cover}

    html{background: #fffffb;}
`
