import React, { useCallback, useState } from 'react';
import {
  Button,
  Card, Divider, message, Typography,
} from 'antd';
import FeedbackForm from './FeedbackForm';
import { useSendFeedbackDataLazyQuery } from '../../generated/graphql';
import CommonLayout from '../../components/layout/CommonLayout';

const { Title } = Typography;

const FeedBackPage = () => {
  const [pending, setPending] = useState<boolean>(false);
  const [sendFeedback] = useSendFeedbackDataLazyQuery({
    onCompleted: (data) => {
      if (data.sendFeedback.status) {
        message.success('Ваше сообщение отправлено!');
        setPending(false);
      } else {
        message.error('При отправке произошла ошибка!');
      }
    },
  });
  const onSubmitFailed = useCallback((errorInfo: any) => {
    console.error('Failed:', errorInfo);
  }, []);
  const onSubmit = useCallback(async (values: any) => {
    setPending(true);
    if (values) {
      await sendFeedback({
        variables: {
          data: values,
        },
      });
    }
  }, [sendFeedback]);
  return (
    <CommonLayout>
      <Card className="text-lg">
        <Title level={2}>Страница обратной связи:</Title>
        <Divider />
        <div className="my-4 flex flex-col lg:flex-row gap-2 items-center">
          <p>1)Техподдержка телеграм чат:</p>
          <Button type="primary" href="https://t.me/AdAnalyzerPro">Перейти в общий телеграм чат</Button>
        </div>
        <p className="my-4">2)Форма обратной связи email:</p>
        <FeedbackForm
          onSubmitForm={onSubmit}
          onSubmitFormFailed={onSubmitFailed}
          pending={pending}
        />
      </Card>
    </CommonLayout>

  );
};

export default FeedBackPage;
