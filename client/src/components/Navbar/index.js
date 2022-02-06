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
  SocialLink,
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
    name: 'Profile',
    path: '/profile',
  },
  {
    id: 3,
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
        <SocialLink>
          <FaFacebook />
        </SocialLink>
        <SocialLink>
          <FaTwitter />
        </SocialLink>
        <SocialLink>
          <FaLinkedin />
        </SocialLink>
      </Left>
      <Center>{routes}</Center>
      <Right>
        <NavLinks>
          <NavLink>
            <Link to='/login'>Login</Link>
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
        <SocialLink>
          <FaFacebook />
        </SocialLink>
        <SocialLink>
          <FaTwitter />
        </SocialLink>
        <SocialLink>
          <FaLinkedin />
        </SocialLink>
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
