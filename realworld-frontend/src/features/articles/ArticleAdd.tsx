import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { articleAdded } from './articlesSlice';
import { nanoid } from '@reduxjs/toolkit';
import { Link } from 'react-router-dom';

function ArticleAdd() {
  // Local state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  // Redux state
  const dispatch = useDispatch();
  const onAuthorChanged = (e) => setUserId(e.target.value);
  const users = useSelector((state) => state.users);

  const onSaveArticleClicked = () => {
    if (title && content) {
      dispatch(articleAdded(title, content, userId));

      setTitle('');
      setContent('');
    }
  };

  // Other logic
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Article</h2>
      <form>
        <label htmlFor="articleTitle">Article Title:</label>
        <input
          type="text"
          id="articleTitle"
          name="articleTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="articleAuthor">Author:</label>
        <select id="articleAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="articleContent">Content:</label>
        <textarea
          id="articleContent"
          name="articleContent"
          value={content}
          onChange={onContentChanged}
        />
        <button
          type="button"
          onClick={onSaveArticleClicked}
          disabled={!canSave}
        >
          Save Article
        </button>
      </form>
    </section>
  );
}

export default ArticleAdd;
