import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import { EDIT_POST, GET_POST_BY_ID } from '../../graphql';
import Loading from '../Loading';

import {
  Container,
  // WriteIcon,
  Form,
  InputContainer,
  Input,
  Textarea,
  Submit,
} from './style';
import { toast } from 'react-toastify';
import Wrapper from '../Wrapper';

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [category, setCategory] = useState('');
  const categories = category.split(',');

  const navigate = useNavigate();

  const { data, loading } = useQuery(GET_POST_BY_ID, { variables: { id } });
  const [editPost] = useMutation(EDIT_POST);

  if (loading) return <Loading />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await editPost({
      variables: {
        id,
        postInput: {
          title,
          description,
          categories,
          photo,
        },
      },
    });
    toast(data.editPost);
    navigate('/');
  };

  const {
    title: oldTitle,
    description: oldDescription,
    categories: oldCategories,
  } = data.getPostById;

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
              placeholder={`${oldTitle}`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type='text'
              value={photo}
              name='img'
              placeholder='image link'
              onChange={(e) => setPhoto(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type='text'
              value={category}
              name='categories'
              placeholder={`${oldCategories}`}
              onChange={(e) => setCategory(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Textarea
              className='form-control'
              id='body'
              rows='3'
              placeholder={`${oldDescription}`}
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

export default EditPost;
