import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // render custom fallback UI
      return (
        <div className="flex justify-center">
          <p>Something went wrong..</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
