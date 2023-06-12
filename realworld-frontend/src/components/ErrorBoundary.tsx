import React, { useState } from 'react';

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

export default ErrorBoundary;
