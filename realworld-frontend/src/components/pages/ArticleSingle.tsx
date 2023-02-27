import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articleAdded } from '../redux/articlesSlice';

export const ArticleSingle = ({ match }) => {
  const { postId } = match.params;

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId),
  );

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  );
};

export default ArticleSingle;
