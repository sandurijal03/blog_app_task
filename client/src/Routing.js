import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Navbar from './components/Navbar';
import withSession from './components/withSession';
import Write from './pages/Write';
import Categories from './pages/About';
import Contact from './pages/Contact';
import Post from './pages/Post';
import EditPost from './components/EditPost';

const Routing = ({ refetch, session }) => {
  return (
    <>
      <Navbar session={session} />
      <ToastContainer position='top-center' />
      <Routes>
        <Route
          path='/'
          element={<Home session={session} refetch={refetch} />}
        />
        <Route path='/register' element={<Register refetch={refetch} />} />
        <Route path='/login' element={<Login refetch={refetch} />} />
        <Route path='/write' element={<Write session={session} />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/:id/post' element={<Post />} />
        <Route path='/edit/:id' element={<EditPost />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
};

const RouteWithSession = withSession(Routing);

export default RouteWithSession;
