import React from 'react';
import AluxionLogo from '../../assets/images/Aluxion_logo.png';
import SearchInput from '../SearchInput';
import {Link} from 'react-router-dom';
import { NavbarContainer, Img } from './styles';

const NavbarDetail: React.FC = () => {
  return (
      <NavbarContainer>
          <Link to="/">
            <Img src={AluxionLogo} alt="aluxion logo" />
          </Link>
          <SearchInput />
      </NavbarContainer>
  );
};

export default NavbarDetail;
