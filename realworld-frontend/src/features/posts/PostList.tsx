import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded, fetchPosts, selectAllPosts } from './postsSlice';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';
import PostAdd from './PostAdd';
import { PostAuthor } from './PostAuthor';
import { TimeAgo } from './TimeAgo';
import { ReactionButtons } from './ReactionButton';
import { useAppDispatch } from '../../app/store';

export default function PostList() {
  return (
    <>
      <PostAdd />
      <PostsList />
    </>
  );
}
function PostsList() {
  const dispatch = useAppDispatch();

  const posts = useSelector(selectAllPosts);

  // sort posts by date in descending order
  const orderedPosts = posts
    ? posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    : [];

  const postStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  return (
    <section>
      <hr />
      <h2>Posts</h2>
      {orderedPosts.map((post) => (
        <article>
          <Link
            key={post.id}
            to={`/posts/${post.id}`}
            className="button muted-button"
          >
            <h3>{post.title}</h3>
          </Link>
          <div>
            <PostAuthor userId={post.user} />
            <TimeAgo timestamp={post.date} />
          </div>
          <p className="post-content">{post.content.substring(0, 100)}</p>
          <ReactionButtons post={post} />
        </article>
      ))}
    </section>
  );
}
