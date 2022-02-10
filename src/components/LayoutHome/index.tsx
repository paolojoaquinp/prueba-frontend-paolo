import React from 'react';
import { Main, Title } from './styles';
import SearchInput from '../SearchInput';
import ListOfCards from '../ListOfCards';

const LayoutHome: React.FC = () => {
  return (
    <>
      <Main>
          <Title>
              Don't be late,<br />
              aluxioner
          </Title>
          <SearchInput />
      </Main>
      <ListOfCards />
    </>
  );
};

export default LayoutHome;
