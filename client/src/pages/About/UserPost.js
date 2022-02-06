import { useQuery, useMutation } from '@apollo/client';

import {
  GET_POSTS,
  DELETE_POST,
  GET_USER_POST,
  GET_PROFILE,
} from '../../graphql';

const UserPost = ({ username }) => {
  const { data, loading, error } = useQuery(GET_USER_POST, {
    variables: {
      username,
    },
  });

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

  const refetch = () => [{ query: GET_POSTS }, { query: GET_PROFILE }];

  const [deleteUserPost] = useMutation(DELETE_POST, {
    update: updateCache,
    refetchQueries: refetch,
  });

  return (
    <div>
      <h1>User Posts</h1>
    </div>
  );
};

export default UserPost;
