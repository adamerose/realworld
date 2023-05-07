import React, { useState } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';

function ErrorBoundary({ children }) {
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
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      key={location.pathname}
      onError={(error, info) => {
        setStack(info.componentStack);
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}

export default ErrorBoundary;
