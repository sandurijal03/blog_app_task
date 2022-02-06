import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  z-index: 999;
  font-family: 'Josefin Sans', sans-serif;
  box-shadow: 0 2px 4px rgba(42, 51, 66, 0.08);
`;

const Left = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialLink = styled.span`
  margin: 0px 5px;
  svg {
    font-size: 2rem;
    color: blue;
  }
`;

const Center = styled.nav`
  flex: 6;
  display: flex;
  justify-content: center;
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavLink = styled.li`
  margin-right: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  a {
    text-decoration: none;
    :hover {
      color: red;
    }
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  cursor: pointer;
`;

export {
  Avatar,
  Left,
  Right,
  Center,
  NavLink,
  NavLinks,
  Container,
  SocialLink,
};
