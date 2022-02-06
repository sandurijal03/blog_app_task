import styled from 'styled-components';

const Container = styled.div`
  width: 1540px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #fff;
  padding: 10px;
`;

const Image = styled.img`
  height: 500px;
`;

const Title = styled.h1`
  text-align: center;
  margin: 20px;
  font-size: 5rem;
  font-weight: 200;
  letter-spacing: 5px;
  color: blue;
`;

const Category = styled.span`
  background-color: gray;
  padding: 10px;
  color: white;
  width: 200px;
  font-weight: bold;
  margin: 2px;
  border-radius: 20px;
`;

const Categories = styled.div`
  margin: 20px auto;
`;

const Description = styled.p`
  margin: 20px;
  line-height: 2rem;
  font-size: 1.5rem;
`;

const Author = styled.p`
  margin: 10px 0;
  font-size: 1.2rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  color: red;
  margin-left: 10px;
  justify-content: right;
  svg {
    font-size: 2rem;
  }
`;

const EditButton = styled(Button)`
  right: 250px;
  color: green;
`;

export {
  EditButton,
  Buttons,
  Author,
  Description,
  Categories,
  Category,
  Title,
  Image,
  Container,
  Button,
};
