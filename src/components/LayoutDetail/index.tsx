import React, { useState } from 'react';
import NavbarDetail from '../NavbarDetail';
import { MainContainer,
         MapContainer,
         DetailWrapper,
         InfoBusStopContainer,
         InfoContainer, Hint, Title, SortStyleContainer,
         StyledLogoList, StyledLogoCard} from './styles';
import { BiArrowBack } from "react-icons/bi";
/* import LogoCard from '../LogoCard';
import LogoList from '../LogoList'; */
import ListOfBusCards from '../ListOfBusCards';

const LayoutDetail: React.FC = () => {
  const [selectedCard, setSelectedTrack] = useState('');

  const [listView, setListView] = useState(true);
  const [cardIsActive, setCardIsActive] = useState('#fff');
  const [listIsActive, setListIsActive] = useState('#42526E');

  const handleCardView = () => { 
    setListView(true);
    setListIsActive('#42526E');
    setCardIsActive('#fff');
  }
  const handleListView = () => {
    setListView(false);
    setListIsActive('#fff');
    setCardIsActive('#42526E');
  }

  const handleActiveCard: () => void = (id='') => {
    setSelectedTrack(id);
    console.log(selectedCard);
  }
  return (
      <DetailWrapper>
        <MainContainer>
            <NavbarDetail />
            <InfoBusStopContainer>
              <BiArrowBack color="#42526E" size={20}/>
                <Hint>
                  Autobuses cercanos
                </Hint>
              <InfoContainer>
                <Title>316, Rubén Darío</Title>
                <SortStyleContainer>
                  <StyledLogoCard fill={cardIsActive} onClick={handleCardView}/>
                  <StyledLogoList fill={listIsActive} onClick={handleListView}/>
                </SortStyleContainer>
              </InfoContainer>
            </InfoBusStopContainer>
            {[1,2,3].map((el, index) => (
              <ListOfBusCards
               key={index}
               indexList={index}
               listView={listView}
               selectedCard={selectedCard}
               onClicked={handleActiveCard}/>
            ))}
        </MainContainer>
        <MapContainer>
        </MapContainer>
      </DetailWrapper>
  );
};

export default LayoutDetail;
