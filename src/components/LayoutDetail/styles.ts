import styled from "styled-components";
import LogoCard from '../LogoCard';
import LogoList from '../LogoList';

export const DetailWrapper = styled.main`
    width: 100%;
    background-color: white;
    height: 100%;
    display: flex;
`;

export const MainContainer = styled.section`
    width: 50%;
    padding: 50px 70px;
    background-color: var(--secondary-blue);
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
`;

export const MapContainer = styled.aside`
    width: 50%;
    height: 100vh;
`;

export const InfoBusStopContainer = styled.div`
    background: var(--secondary-blue);
    padding-top: 60px;
`;

export const Hint = styled.p`
    color: #42526E;
    font-size: 1.6rem;
    padding: 20px 0 10px 0;
`;

export const InfoContainer = styled.div`
    background: var(--secondary-blue);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #42526E;;
    line-height: 6rem;
`;

export const Title = styled.p`
    color: white;
    font-size: 3.2rem;
    font-weight: bold;
`;

export const SortStyleContainer = styled.div`
    width: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledLogoList = styled(LogoList)`
    cursor: pointer;
`;

export const StyledLogoCard = styled(LogoCard)`
    cursor: pointer;
`;