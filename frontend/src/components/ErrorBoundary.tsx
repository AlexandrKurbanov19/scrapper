import React, { PropsWithChildren } from 'react';
import { Button, Result } from 'antd';

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<PropsWithChildren<{}>, State> {
  constructor(props: PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error: any) {
    // console.error(error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
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
              onClick={() => {
                window.location.href = '/';
              }}
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
