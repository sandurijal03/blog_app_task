import { Router } from 'express';
import {
  deleteBlog,
  getAllBlogs,
  getBlog,
  postBlog,
  updateBlog,
} from './index.controller';

const router = Router();

router
  .route('/')
  .get((req, res) => {
    getAllBlogs(req, res);
  })
  .post((req, res) => {
    postBlog(req, res);
  });

router
  .route('/:id')
  .get((req, res) => {
    getBlog(req, res);
  })
  .put((req, res) => {
    updateBlog(req, res);
  })
  .delete((req, res) => {
    deleteBlog(req, res);
  });

/*
router.get('/', (req, res) => {
  getAllBlogs(req, res);
});

router.post('/', (req, res) => {
  postBlog(req, res);
});

router.get('/:id', (req, res) => {
  getBlog(req, res);
});

router.put('/:id', (req, res) => {
  updateBlog(req, res);
});

router.delete('/:id', (req, res) => {
  deleteBlog(req, res);
});
*/

export default router;
