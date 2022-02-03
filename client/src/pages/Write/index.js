import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';

// import withAuth from '../../components/withAuth';
// import withSession from '../../components/withSession';
import { CREATE_POST } from '../../graphql';

import {
  Container,
  Form,
  Input,
  InputContainer,
  Submit,
  Textarea,
  WriteIcon,
} from './style';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const Write = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState('');
  const [category, setCategory] = useState('');
  const categories = category.split(',');

  const [createPost, { loading, error }] = useMutation(CREATE_POST, {
    variables: {
      postInput: {
        title,
        description,
        photo: file,
        categories,
      },
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost().then((data) => {
      toast(data.data.createPost);
      setTitle('');
      setDescription('');
      setFile('');
      setCategory('');
    });
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <Container>
      <Form>
        <InputContainer>
          <label htmlFor='fileInput'>
            <WriteIcon />
          </label>
          {/* <Input
            type='file'
            id='fileInput'
            style={{ display: 'none' }}
            value={file}
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
          <Textarea
            className='form-control'
            id='body'
            rows='3'
            placeholder='Enter Blog Description here'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Textarea>
        </InputContainer>
        <Submit onClick={handleSubmit}>Publish</Submit>
      </Form>
    </Container>
  );
};

export default Write;
