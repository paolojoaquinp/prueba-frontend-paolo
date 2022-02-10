import React, { useState, useEffect } from 'react';
import ClockIcon from '../../assets/images/Clock.png';
import DistanceIcon from '../../assets/images/Distance.png';
import {CardContainer,
        NumberBus, 
        InfoBusContainer, 
        TitleBus, 
        SubtitleBus, 
        DistanceContainer, 
        TimeWrapper, Img, Time, DistanceWrapper, Distance, InfoWrapper } from './styles';

const CardBus: React.FC<any> = ({ onClicked, id, selectedCard }: any) => {
  return (
      <CardContainer
        style={ selectedCard === id ? { backgroundColor: '#fff' }: {backgroundColor: 'var(--primary-blue)'}}
        onClick={() => onClicked(id)}>
        <NumberBus style={ selectedCard == id ? { color: '#091E42'} : { color: 'white'}}>
            220
        </NumberBus>
        <InfoBusContainer>
            <InfoWrapper>
                <TitleBus style={ selectedCard == id ? { color: '#091E42'} : { color: 'white'}}>
                    Plaza Lima
                </TitleBus>
                <SubtitleBus>
                    Hortaleza
                </SubtitleBus>
            </InfoWrapper>

            <DistanceContainer>
                <TimeWrapper>
                    <Img src={ClockIcon} alt="clock icon"/>
                        <Time>
                            10 min.
                        </Time>
                </TimeWrapper>
                <DistanceWrapper>
                    <Img src={DistanceIcon} alt="distance icon" />
                    <Distance>
                        300 mt
                    </Distance>
                </DistanceWrapper>
            </DistanceContainer>
        </InfoBusContainer>
          
      </CardContainer>
  );
};

export default CardBus;
