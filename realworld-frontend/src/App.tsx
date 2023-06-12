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
import NotFoundPage from './components/NotFoundPage';
import ErrorBoundary from './components/ErrorBoundary';
import ArticlesFeed from './features/articles/ArticlesFeed';
import ArticleView from './features/articles/ArticleView';
import ArticleEditor from './features/articles/ArticleEditor';
import { ThemeToggle, MantineWrapper } from './components/MantineUtils';
import Demo from './components/Demo';
import styled from 'styled-components';

function App() {
  const content = (
    <StyledWrapper>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
      />

      <nav>
        <h2>RealWorld</h2>
        <NavLink to="/articles">Feed</NavLink>
        <NavLink to="/editor">Submit</NavLink>
        <ThemeToggle />
      </nav>

      <main>
        <ErrorBoundary>
          <Routes>
            <Route path="/articles" element={<ArticlesFeed />} />
            <Route path="/articles/:articleId" element={<ArticleView />} />
            <Route path="/editor/:articleId?" element={<ArticleEditor />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </ErrorBoundary>
      </main>
    </StyledWrapper>
  );

  return (
    <MantineWrapper>
      <BrowserRouter>{content}</BrowserRouter>
    </MantineWrapper>
  );
}

const StyledWrapper = styled.div`
  nav {
    & :first-child {
      flex-grow: 1;
    }

    & a {
      text-decoration: underline;
    }

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
`;

export default App;
