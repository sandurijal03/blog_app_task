import styled from 'styled-components';

const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Card = styled.div`
  border: 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 10px;
  background: lightGray;
  height: 200px;
`;

const Category = styled.span`
  background-color: white;
  padding: 10px 5px;
  font-weight: bold;
  margin: 5px;
  border-radius: 5px;
`;

const Left = styled.div``;

const Right = styled.div``;

const Image = styled.img`
  width: 100px;
`;

const CardTitle = styled.h3`
  margin: 30px 10px;
`;

const BlogAuthor = styled.p`
  margin: 30px 10px;
  font-weight: 500;
`;

export { Cards, Card, Category, Left, Right, Image, CardTitle, BlogAuthor };
