import styled from 'styled-components';

const Container = styled.div`
  width: 1540px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #060f2f;
  padding: 10px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: lightGray;
  height: 500px;
  width: 350px;
  margin: 10px auto;
  box-shadow: 0 2px 4px rgba(42, 51, 66, 0.08);
  border-radius: 10px;
`;

const Categories = styled.div`
  display: flex;
`;

const Category = styled.span`
  background-color: white;
  padding: 10px 5px;
  margin: 2px;
  border-radius: 5px;
`;

const Top = styled.div`
  background-image: ${(props) =>
    props.image ? `url("${props.image}")` : '#f2bc22'};
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  width: 350px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  height: 300px;
  border-bottom: 1px solid;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  width: 350px;
  a {
    text-decoration: none;
    color: black;
  }
`;

const Right = styled.div`
  margin: 0 10px 10px 0;
`;

const CardTitle = styled.h3`
  margin: 20px 5px;
`;

const BlogAuthor = styled.p`
  margin: 30px 10px;
  font-weight: 600;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 10px;
  width: 80px;
  margin-top: 50px;
  margin-left: 10px;
  border-radius: 10px;
  border: none;
`;

const DeleteButton = styled(Button)`
  color: red;
  svg {
    font-size: 2rem;
  }
`;

export {
  CardsContainer,
  Card,
  Category,
  Top,
  Right,
  CardTitle,
  BlogAuthor,
  DeleteButton,
  Buttons,
  Container,
  Center,
  Categories,
};
