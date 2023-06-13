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
import NotFoundPage from './NotFoundPage';
import ErrorBoundary from './ErrorBoundary';
import ArticlesFeed from '../features/articles/ArticlesFeed';
import ArticleView from '../features/articles/ArticleView';
import ArticleEditor from '../features/articles/ArticleEditor';
import { ThemeToggle, MantineWrapper } from './MantineUtils';
import styled from '@emotion/styled';
import LoginForm from '../features/authentication/LoginForm';

function App() {
  const content = (
    <Styled>
      <nav>
        <h2>RealWorld</h2>
        <NavLink end to="/articles">
          Home
        </NavLink>
        <NavLink end to="/editor">
          Submit
        </NavLink>

        <NavLink end to="/login">
          Login
        </NavLink>
        <ThemeToggle />
      </nav>

      <main>
        <ErrorBoundary>
          <Routes>
            <Route path="/articles" element={<ArticlesFeed />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/articles/:articleId" element={<ArticleView />} />
            <Route path="/editor/:articleId?" element={<ArticleEditor />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </main>
    </Styled>
  );

  return (
    <MantineWrapper>
      <BrowserRouter>{content}</BrowserRouter>
    </MantineWrapper>
  );
}

const Styled = styled.div`
  nav {
    & :first-child {
      flex-grow: 1;
    }

    & a {
      &.active {
        text-decoration: underline;
      }
      color: unset;
    }

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
`;

export default App;
