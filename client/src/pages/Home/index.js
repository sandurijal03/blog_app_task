import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_POSTS } from '../../graphql';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import {
  BlogAuthor,
  Card,
  CardTitle,
  Cards,
  Category,
  Image,
  Left,
  Right,
} from './style';

const Home = ({ session }) => {
  const { loading, error, data } = useQuery(GET_POSTS);
  if (loading) return <Loading />;
  if (error) return <Error />;

  const posts = data.getPost;

  return (
    <div>
      <h2>Posts</h2>
      <Cards>
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
              <Left>
                <Image src={photo} alt={title} />
              </Left>
              <Right>
                <CardTitle>{title}</CardTitle>
                {category}
                <BlogAuthor>posted by: {username}</BlogAuthor>
              </Right>
            </Card>
          );
        })}
      </Cards>
    </div>
  );
};

export default Home;
