import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  fallback?: React.ReactNode;
  children: React.ReactNode;
}
interface State {
  message: any;
  stack: any;
}

const defaultState: State = {
  message: null,
  stack: null,
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = defaultState;
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/Error
    // console.log('ErrorBoundary.componentDidCatch', { error, info });
    console.log(error instanceof Error);
    this.setState({
      message: error.message,
      stack: info.componentStack,
    });
  }

  render() {
    const defaultFallback = (
      <div>
        <section>
          <h3>An error occured.</h3>
          <pre>
            {this.state.message}
            {this.state.stack}
          </pre>
        </section>
        <button
          onClick={() => {
            this.setState(defaultState);
          }}
        >
          Try again
        </button>
      </div>
    );

    if (this.state.message) {
      return this.props?.fallback ? this.props.fallback : defaultFallback;
    }

    return this.props.children;
  }
}

// TODO - Can I make stack trace file links clickable to open the file in VS Code?
function IDELink({ filePath }) {
  return (
    <a href={`vscode://${encodeURIComponent(filePath.replace(/\\/g, '/'))}`}>
      {filePath}
    </a>
  );
}

// Reset state on route change
function ErrorBoundaryWrapper(props) {
  const [key, setKey] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setKey((prevKey) => prevKey + 1); // increment key to force remount
  }, [location]);

  return <ErrorBoundary key={key} {...props} />;
}

export default ErrorBoundaryWrapper;
