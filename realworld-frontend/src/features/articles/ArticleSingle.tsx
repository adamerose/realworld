import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { articleAdded } from './articlesSlice';
import { ArticleAuthor } from './ArticleAuthor';
import { TimeAgo } from './TimeAgo';
import { ReactionButtons } from './ReactionButton';

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
      <>
        <h2>{article.title}</h2>
        <div>
          <ArticleAuthor userId={article.user} />
          <TimeAgo timestamp={article.date} />
        </div>
        <p>{article.content}</p>
        <ReactionButtons article={article} />

        <Link to={`/editArticle/${article.id}`}>
          <button>Edit Article</button>
        </Link>
      </>
    );
  }

  return (
    <article>
      <Link to="/articles">←Back</Link>
      {content}
    </article>
  );
};

export default ArticleSingle;
