import styled from "styled-components";

export const SearchContainer = styled.div`
    width: 390px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Input = styled.input`
    display: inline-block;
    width: 100%;
    background: transparent;
    color: white;
    padding: 10px 0;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--primary-grey);
    ::placeholder {
        color: var(--primary-grey);
        font-size: 1.5rem;
        font-weight: lighter;
    }
    :focus {
        border-bottom: 1px solid white;
        ::placeholder {
            color: white;
        }
    }
`;