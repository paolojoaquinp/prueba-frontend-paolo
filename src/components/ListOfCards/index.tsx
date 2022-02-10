import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Card from '../Card';

import { ListOfCardsContainer } from './styles';


const ListOfCards: React.FC = () => {
  const { state }:any = useContext(AppContext);
  const { team } = state;
  return (
    <ListOfCardsContainer>
        {team.map((item:any) => (
            <Card key={item.id} info={item} />
        ))}
    </ListOfCardsContainer>
  );
};

export default ListOfCards;
