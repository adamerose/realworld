import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { postAdded, selectPostById } from './postsSlice';
import { PostAuthor } from './PostAuthor';
import { TimeAgo } from './TimeAgo';
import { ReactionButtons } from './ReactionButton';

export const PostSingle = () => {
  const params = useParams();
  const { postId } = params;

  const post = useSelector((state) => selectPostById(state, postId));

  let content;
  if (!post) {
    content = <h2>Post not found!</h2>;
  } else {
    content = (
      <>
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p>{post.content}</p>
        <ReactionButtons post={post} />

        <Link to={`/editPost/${post.id}`}>
          <button>Edit Post</button>
        </Link>
      </>
    );
  }

  return (
    <article>
      <Link to="/posts">←Back</Link>
      {content}
    </article>
  );
};

export default PostSingle;
