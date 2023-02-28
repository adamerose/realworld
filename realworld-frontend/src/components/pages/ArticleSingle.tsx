import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { articleAdded } from '../redux/articlesSlice';

export const ArticleSingle = () => {
  const params = useParams();
  const { articleId } = params;

  const article = useSelector((state) =>
    state.articles.find((article) => article.id === articleId),
  );

  let content;
  if (!article) {
    content = <h2>Article not found!</h2>;
  } else {
    content = (
      <article className="article">
        <h2>{article.title}</h2>
        <p className="article-content">{article.content}</p>

        <Link to={`/editArticle/${article.id}`}>
          <button>Edit Article</button>
        </Link>
      </article>
    );
  }

  return (
    <section>
      <Link to="/articles">←Back</Link>
      {content}
    </section>
  );
};

export default ArticleSingle;
