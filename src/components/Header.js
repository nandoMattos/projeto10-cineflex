import styled from "styled-components"
import constants from "../constants"
const {LIGHT_GRAY, ORANGE} = constants;

export default function Header() {

    return(
        <HeaderStyle>
            <h1>MATTOMOVIE</h1>
        </HeaderStyle>
    )
};

const HeaderStyle = styled.header`
    display:flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    height: 80px;
    width: 100%;
    background-color: ${LIGHT_GRAY};
    font-family: 'Roboto';

    h1{
        color: ${ORANGE};
        font-size: 34px;
    }
`
