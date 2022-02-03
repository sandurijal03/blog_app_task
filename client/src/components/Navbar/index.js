import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

import {
  Center,
  Container,
  Right,
  Left,
  NavLinks,
  NavLink,
  Avatar,
} from './style';
import Logout from '../../pages/auth/Logout';

const links = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'Categories',
    path: '/categories',
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

const Navbar = ({ session }) => {
  if (session.getProfile === null) {
    return <NavbarUnAuth />;
  } else {
    return <NavbarAuth session={session} />;
  }
};

const NavbarUnAuth = () => {
  return (
    <Container>
      <Left>
        <FaFacebook />
        <FaTwitter />
        <FaLinkedin />
      </Left>
      <Center>{routes}</Center>
      <Right>
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

const NavbarAuth = ({ session }) => {
  const { avatar } = session.getProfile;

  return (
    <Container>
      <Left>
        <FaFacebook />
        <FaTwitter />
        <FaLinkedin />
      </Left>
      <Center>{routes}</Center>
      <Right>
        <Link to='/settings'>
          <Avatar src={avatar} />
        </Link>
        <Logout />
      </Right>
    </Container>
  );
};

export default Navbar;
