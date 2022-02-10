import styled from "styled-components";

export const CardContainer = styled.div`
    background: var(--primary-blue);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px 15px 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    cursor: pointer;
`;

export const NumberBus = styled.p`
    font-size: 2.6rem;
    font-weight: bold;
    color: white;
    margin-right: 10px;
`;

export const InfoBusContainer = styled.div`
    display: flex;
    flex-direction: var(--flex-orientation);
    width: 100%;
    justify-content: space-between;
`;


export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: var(--padding-aux);
`;

export const TitleBus = styled.p`
    color: white;
    font-size: 1.8rem;
    font-weight: bold;
`;

export const SubtitleBus = styled.p`
    color: #8993A4;

`;

export const DistanceContainer = styled.div`
    display: flex;
    width: auto;
    align-items: center;
`;

export const TimeWrapper = styled.div`
    display: flex;
`;

export const Time = styled.p`
    color: #FFC121;
    padding-left: 5px;
    font-size: 1.4rem;
`;

export const Img = styled.img`
    object-fit: none;
`;

export const Distance = styled.p`
    color: #2DC8A6;
    padding-left: 5px;
    font-size: 1.4rem;
    display: inline-block;
`;

export const DistanceWrapper = styled.div`
    display: flex;
    padding-left: 50px;
`;

