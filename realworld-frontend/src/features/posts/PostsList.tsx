import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectPostById, selectPostIds } from './postsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import PostAdd from './PostAdd';
import { PostAuthor } from './PostAuthor';
import { TimeAgo } from './TimeAgo';
import { ReactionButtons } from './ReactionButton';
import { useAppDispatch } from '../../app/store';
import { Spinner } from '../../components/Spinner';

export default function PostList() {
  return (
    <>
      <PostAdd />
      <PostsList />
    </>
  );
}

let PostExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));
  return (
    <article key={post.id}>
      <Link to={`/posts/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p>{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
    </article>
  );
};

function PostsList() {
  const dispatch = useAppDispatch();
  const orderedPostIds = useSelector(selectPostIds);

  // Data fetching
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;
  if (postStatus === 'loading') {
    content = <Spinner text="Loading..." />;
  } else if (postStatus === 'succeeded') {
    content = orderedPostIds.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ));
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <hr />
      <h2>Posts</h2>
      {content}
    </section>
  );
}
