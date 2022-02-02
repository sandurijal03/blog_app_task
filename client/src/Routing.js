import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Error from './components/Error';

const getProfile = gql`
  query {
    getProfile {
      id
      name
      email
      avatar
    }
  }
`;

const Routing = () => {
  const { data, error, loading } = useQuery(getProfile);

  if (error) return <Error />;
  if (loading) return <Loading />;

  console.log(data.getProfile);

  const { name, email, avatar } = data.getProfile;
  return (
    <BrowserRouter>
      <Navbar name={name} avatar={avatar} />
      <Routes>
        <Route path='/' element={<Home name={name} email={email} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
