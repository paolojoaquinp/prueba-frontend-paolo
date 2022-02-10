import React from 'react';
import AluxionLogo from '../../assets/images/Aluxion_logo.png';
import SearchInput from '../SearchInput';

import { NavbarContainer, Img } from './styles';

const NavbarDetail: React.FC = () => {
  return (
      <NavbarContainer>
          <Img src={AluxionLogo} alt="aluxion logo" />
          <SearchInput />
      </NavbarContainer>
  );
};

export default NavbarDetail;
