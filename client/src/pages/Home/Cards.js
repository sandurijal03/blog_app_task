import { Link } from 'react-router-dom';

import {
  BlogAuthor,
  Card,
  CardTitle,
  Category,
  Top,
  CardsContainer,
  Center,
  Categories,
} from './style';

const Cards = ({ posts }) => {
  return (
    <CardsContainer>
      {posts.map((post) => {
        const {
          _id,
          title,
          categories,
          photo,
          user: { username },
        } = post;
        let category = categories.map((category, index) => (
          <Category key={index}>{category}</Category>
        ));

        return (
          <Card key={_id}>
            <Top image={photo}></Top>
            <Center>
              <Link to={`${_id}/post`}>
                <CardTitle>{title}</CardTitle>
              </Link>
              <Categories>{category}</Categories>
              <BlogAuthor>posted by: {username}</BlogAuthor>
            </Center>
          </Card>
        );
      })}
    </CardsContainer>
  );
};

export default Cards;
