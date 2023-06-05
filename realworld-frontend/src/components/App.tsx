import React, { useEffect, useRef, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import './App.scss';
import { ArticleEdit } from '../features/articles/ArticleEdit';
import ArticlesList from '../features/articles/ArticlesList';
import ArticleSingle from '../features/articles/ArticleSingle';
import NotFoundPage from './NotFoundPage';
import ErrorBoundary from './ErrorBoundary';
import { UsersList } from '../features/users/UsersList';
import { UserPage } from '../features/users/UserPage';
import NotificationsFetchButton from '../features/notifications/NotificationsFetchButton';
import { NotificationsList } from '../features/notifications/NotificationsList';
import NotificationCountBadge from '../features/notifications/NotificationCountBadge';

function App() {
  const toggleTheme = useToggleTheme();

  const pages = [
    { name: 'Articles', path: '/articles', Component: ArticlesList },
    { name: 'Users', path: '/users', Component: UsersList },
  ];

  return (
    <BrowserRouter>
      <nav>
        <h1>RealWorld</h1>
        <ul>
          <NavLink to="/articles">Articles</NavLink>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/notifications">
            Notifications (<NotificationCountBadge />)
          </NavLink>
        </ul>
        <NotificationsFetchButton />
        <button onClick={toggleTheme}>Toggle Theme</button>
      </nav>

      <main>
        <ErrorBoundary>
          <Routes>
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:articleId" element={<ArticleSingle />} />
            <Route path="/editArticle/:articleId" element={<ArticleEdit />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/users/:userId" element={<UserPage />} />
            <Route path="/notifications" element={<NotificationsList />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </main>
    </BrowserRouter>
  );
}

function useToggleTheme() {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const stylePath = isDark
    ? 'https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css'
    : 'https://cdn.jsdelivr.net/npm/water.css@2/out/light.css';

  let link = document.querySelector('#useToggleThemeLink');
  if (link == null) {
    let newLink = document.createElement('link');

    newLink.id = 'useToggleThemeLink';
    newLink.type = 'text/css';
    newLink.rel = 'stylesheet';
    newLink.href = stylePath;
    document.head.appendChild(newLink);
  } else {
    link.setAttribute('href', stylePath);
  }

  return toggleTheme;
}

export default App;
