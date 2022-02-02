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

const Navbar = ({ name, avatar }) => {
  console.log(name);
  return (
    <Container>
      <Left>
        <FaFacebook />
        <FaTwitter />
        <FaLinkedin />
      </Left>
      <Center>{routes}</Center>
      <Right>
        {name ? (
          <Link to='/settings'>
            <Avatar src={avatar} />
          </Link>
        ) : (
          <NavLinks>
            <NavLink>
              <Link to='/login'>Login</Link>
            </NavLink>
            <NavLink>
              <Link to='/register'>Register</Link>
            </NavLink>
          </NavLinks>
        )}
      </Right>
    </Container>
  );
};

export default Navbar;
