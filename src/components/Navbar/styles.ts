import styled from "styled-components";
import { NavLink as LinkRouter } from "react-router-dom";

export const Nav = styled.nav`
    background: var(--secondary-blue);
    height: 130px;
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 90px;
`;


export const Img = styled.img``;

export const Link = styled(LinkRouter)`
    font-size: 1.2rem;
    padding-left: 6vw;
    color: white;
    text-decoration: none;
    letter-spacing: 1.5px;
`;

export const Ul = styled.ul`

`;