import React from 'react';
import { Nav, Img, Ul, Link } from './styles';
import Aluxion from '../../assets/images/Aluxion_logo.png';

const NavBar: React.FC = () => {
  return (
      <Nav>
        <Img src={Aluxion} alt="aluxion logo" />
        <Ul>
            <Link to="/">
              metro
            </Link>
            <Link to="/">
              cercanías
            </Link>
            <Link to="/">
              carsharing
            </Link>
        </Ul>
      </Nav>
  );
};

export default NavBar;
