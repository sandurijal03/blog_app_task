import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

import { GET_POST_BY_ID, DELETE_POST, GET_POSTS } from '../../graphql';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Wrapper from '../../components/Wrapper';
import {
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
} from './style';

const Post = ({ props }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [deletePost] = useMutation(DELETE_POST);

  const handleDelete = async (e) => {
    e.preventDefault();
    await deletePost({
      variables: { deletePostId: id },
      update: updateCache,
      refetchQueries: refetch,
    });
    navigate('/');
  };

  const updateCache = (cache, { data: { deletePost } }) => {
    const { getAllPost } = cache.readQuery({
      query: GET_POSTS,
    });

    const filteredPosts = getAllPost.filter(
      (post) => post._id !== deletePost._id,
    );

    cache.writeQuery({
      query: GET_POSTS,
      data: {
        getAllPost: filteredPosts,
      },
    });
  };

  const refetch = () => [{ query: GET_POSTS }];

  const { data, loading } = useQuery(GET_POST_BY_ID, {
    variables: {
      id,
    },
  });

  if (loading) <Loading />;

  if (data && data) {
    const {
      title,
      description,
      photo,
      categories,
      user: { username },
    } = data && data.getPostById;

    let category = categories.map((category, index) => (
      <Category key={index}>{category}</Category>
    ));

    const handleClick = (e) => {
      e.preventDefault();
      navigate(`/edit/${id}`);
    };

    return (
      <Wrapper>
        <Container>
          <Title>{title}</Title>
          <Buttons>
            <EditButton onClick={handleClick}>
              <AiOutlineEdit />
            </EditButton>
            <Button onClick={handleDelete}>
              <AiOutlineDelete />
            </Button>
          </Buttons>
          <Categories>{category}</Categories>
          <Author>
            Posted by: <strong>{username}</strong>
          </Author>
          <Image src={photo} alt={title} />
          <Description>{description}</Description>
        </Container>
      </Wrapper>
    );
  } else {
    return <Error />;
  }
};

export default Post;
