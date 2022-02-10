import styled from "styled-components";


export const ListCardsContainer = styled.section`
    padding-top: 50px;
    background-color: var(--secondary-blue);
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding-bottom: 20px;
`;

export const Img = styled.img`
    margin-right: 10px;
`;

export const Title = styled.p`
    color: white;
    font-size: 2rem;
`;

export const CardsContainer = styled.div`
    display: grid;

    // TO CHANGE!!!!
    grid-template-columns: var(--list-view);
    grid-gap: 0px 15px;
`;