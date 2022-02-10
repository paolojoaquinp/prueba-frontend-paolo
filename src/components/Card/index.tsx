import React from 'react';
import { CardContainer, Img, InfoContainer, Title, Role } from './styles';

const Card: React.FC<any> = ({ info }: any) => {
  return (
      <CardContainer>
          <Img src={info.image} alt="" />
          <InfoContainer>
              <Title>{ info.name }</Title>
              <Role>{ info.role }</Role>
          </InfoContainer>
      </CardContainer>
  );
};

export default Card;
