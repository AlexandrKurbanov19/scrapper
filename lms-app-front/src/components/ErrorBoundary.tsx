import React, { ErrorInfo, PropsWithChildren } from 'react';
import { Button, Result } from 'antd';

type State = {
  hasError: boolean;
};

const goToHome = () => {
  window.location.href = '/';
};

class ErrorBoundary extends React.Component<PropsWithChildren, State> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Result
          status="warning"
          title="Произошла непредвиденная ошибка, разработчики получили уведомление об ошибке и уже её устраняют."
          extra={(
            <Button
              type="primary"
              key="console"
              onClick={goToHome}
            >
              На главную страницу
            </Button>
          )}
        />
      );
    }

    return children;
  }
}

export default ErrorBoundary;
