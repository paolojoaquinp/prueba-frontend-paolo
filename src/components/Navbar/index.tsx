import React from 'react';
import { Nav, Img, Ul, Link } from './styles';
import Aluxion from '../../assets/images/Aluxion_logo.png';
import {Link as LinkReact} from 'react-router-dom';
const NavBar: React.FC = () => {
  return (
      <Nav>
        <LinkReact to="/">
           <Img src={Aluxion} alt="aluxion logo"/>
        </LinkReact>
        <Ul>
            <Link to="/detail">
              Vista detalle!!
            </Link>
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
