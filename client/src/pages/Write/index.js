import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

import { CREATE_POST, GET_POSTS } from '../../graphql';

import {
  Container,
  Form,
  Input,
  InputContainer,
  Submit,
  Textarea,
  // WriteIcon,
} from './style';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import Wrapper from '../../components/Wrapper';
import { useNavigate } from 'react-router-dom';
import withAuth from '../../components/withAuth';

const Write = ({ session }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // const [file, setFile] = useState(null);
  const [photo, setPhoto] = useState('');
  const [category, setCategory] = useState('');
  const categories = category.split(',');
  const navigate = useNavigate();

  const updateCache = (cache, { data: { createPost } }) => {
    const { getAllPost } = cache.readQuery({
      query: GET_POSTS,
    });
    cache.writeQuery({
      query: GET_POSTS,
      data: {
        getAllPost: getAllPost.concat([createPost]),
      },
    });
  };

  const [createPost, { loading, error }] = useMutation(CREATE_POST, {
    variables: {
      postInput: {
        title,
        description,
        photo: photo,
        categories,
      },
    },
    update: updateCache,
  });

  // const [uploadFile, { loading: loadingFile, error: errorFile }] = useMutation(FILE_UPLOAD);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const response = await uploadFile({ variables: { file } });
    // console.log('file added successfully: ', response);

    await createPost();
    toast('Post created successfully');
    navigate('/');
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <Wrapper>
      <Container>
        <Form>
          <InputContainer>
            {/*
            <label htmlFor='fileInput'>
              <WriteIcon />
            </label>
             <Input
              type='file'
              id='fileInput'
              accept='image/*'
              style={{ display: 'none' }}
              onChange={(e) => setFile(e.target.files[0])}
            /> */}

            <Input
              type='text'
              className='form-control'
              id='title'
              placeholder='Enter Post title here'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type='text'
              value={category}
              name='categories'
              placeholder='categories1, categories2'
              onChange={(e) => setCategory(e.target.value)}
            />
          </InputContainer>

          <InputContainer>
            <Input
              type='text'
              name='img'
              value={photo}
              placeholder='image link'
              onChange={(e) => setPhoto(e.target.value)}
            />
          </InputContainer>

          <InputContainer>
            <Textarea
              className='form-control'
              id='body'
              rows='3'
              placeholder='Enter Blog Description here'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Textarea>
          </InputContainer>
          <Submit onClick={(e) => handleSubmit(e)}>Publish</Submit>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default withAuth((session) => session && session.getProfile)(Write);
