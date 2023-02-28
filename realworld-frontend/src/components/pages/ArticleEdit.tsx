import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { articleUpdated } from '../redux/articlesSlice';
import { useAppSelector } from '../redux/store';

export const ArticleEdit = () => {
  const params = useParams();
  const { articleId } = params;

  const article = useAppSelector((state) =>
    state.articles.find((article) => article.id === articleId),
  );

  const [title, setTitle] = useState(article?.title);
  const [content, setContent] = useState(article?.content);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSaveArticleClicked = () => {
    if (title && content) {
      dispatch(articleUpdated({ id: articleId, title, content }));
      navigate(`/articles/${articleId}`);
    }
  };

  return (
    <section>
      <h2>Edit Article</h2>
      <form>
        <label htmlFor="articleTitle">Article Title:</label>
        <input
          type="text"
          id="articleTitle"
          name="articleTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="articleContent">Content:</label>
        <textarea
          id="articleContent"
          name="articleContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSaveArticleClicked}>
        Save Article
      </button>
    </section>
  );
};
