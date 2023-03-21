import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';

function CustomErrorBoundary({ children }) {
  const location = useLocation();
  const [stack, setStack] = useState('');

  function ErrorFallback(props) {
    const { componentStack, error, resetErrorBoundary } = props;
    console.log({ props, componentStack });
    return (
      <div>
        <section>
          <h3>An error occured.</h3>
          <p></p>
          <pre>
            {error.message}
            {stack}
          </pre>
        </section>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      key={location.pathname}
      onError={(error, info) => {
        setStack(info.componentStack);
      }}
    >
      {children}
    </ErrorBoundary>
  );
}

export default CustomErrorBoundary;
