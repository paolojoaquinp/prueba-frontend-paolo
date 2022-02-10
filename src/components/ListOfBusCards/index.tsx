import React, { useEffect, useState } from 'react';
import BusIcon from '../../assets/images/BusIcon.png';
import CardBus from '../CardBus';

import { TitleContainer, Img, Title, CardsContainer, ListCardsContainer } from './styles';

const ListOfBusCards: React.FC<any> = ({ indexList, listView, selectedCard, onClicked}: any) => {

  const list = [1,2,3,4];
  useEffect(() => {
    if(listView) {
      document.body.style.setProperty("--list-view", "repeat(2,1fr");
      document.body.style.setProperty("--flex-orientation", "column");
      document.body.style.setProperty("--padding-aux", "10px");
    } else {
      document.body.style.setProperty("--list-view", "repeat(1,1fr");
      document.body.style.setProperty("--flex-orientation", "row");
      document.body.style.setProperty("--padding-aux", "0px");
    }
  },[listView]);

  return (
      <ListCardsContainer>
        <TitleContainer>
            <Img src={BusIcon} alt="bus icon" />
            <Title>Línea 220</Title>
        </TitleContainer>
        <CardsContainer>
          {list.map((el, index) =>{
            const id = indexList.toString() + index.toString();
            return (<CardBus
               selectedCard={selectedCard}
               key={id}
               onClicked={onClicked}
               id={id} />)
          } 
          )}
        </CardsContainer>
      </ListCardsContainer>
  );
};

export default ListOfBusCards;
