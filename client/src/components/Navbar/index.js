import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaUser } from 'react-icons/fa';

import {
  // Avatar,
  Center,
  Container,
  Right,
  Left,
  NavLinks,
  NavLink,
} from './style';

const links = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'About',
    path: '/about',
  },
  {
    id: 3,
    name: 'Contact',
    path: '/contact',
  },
  {
    id: 4,
    name: 'Write',
    path: '/write',
  },
];

const routes = links.map((link) => (
  <NavLinks key={link.id}>
    <NavLink>
      <Link to={link.path}>{link.name}</Link>
    </NavLink>
  </NavLinks>
));

const Navbar = () => {
  return (
    <Container>
      <Left>
        <FaFacebook />
        <FaTwitter />
        <FaLinkedin />
      </Left>
      <Center>{routes}</Center>
      <Right>
        <FaUser style={{ marginRight: '20px' }} />
        <NavLinks>
          <NavLink>
            <Link to='/login'>Login</Link>
          </NavLink>
          <NavLink>
            <Link to='/register'>Register</Link>
          </NavLink>
        </NavLinks>
      </Right>
    </Container>
  );
};

export default Navbar;
