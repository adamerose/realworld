import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import './App.scss';
import { PostEdit } from '../features/posts/PostEdit';
import PostsDisplay from '../features/posts/PostList';
import PostSingle from '../features/posts/PostSingle';
import Counter from '../features/counter/Counter';
import KitchenSink from './pages/KitchenSink';
import NotFoundPage from './pages/NotFoundPage';
import Profile from './pages/Profile';

function App() {
  const toggleTheme = useToggleTheme();

  const pages = [
    { name: 'Counter', path: '/counter', Component: Counter },
    { name: 'Posts', path: '/posts', Component: PostsDisplay },
    { name: 'Profile', path: '/profile', Component: Profile },
    { name: 'KitchenSink', path: '/kitchen-sink', Component: KitchenSink },
  ];

  return (
    <BrowserRouter>
      <nav>
        <h1>RealWorld</h1>
        <ul>
          {pages.map((page) => (
            <li key={page.name}>
              <NavLink to={page.path}>{page.name}</NavLink>
            </li>
          ))}
        </ul>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </nav>

      <main>
        <Routes>
          {pages.map((page) => (
            <Route
              key={page.name}
              path={page.path}
              element={<page.Component />}
            />
          ))}
          <Route path="/posts/:postId" element={<PostSingle />} />
          <Route path="/editPost/:postId" element={<PostEdit />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
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
