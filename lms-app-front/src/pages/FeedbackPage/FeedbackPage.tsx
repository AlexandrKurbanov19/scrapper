import React, { useCallback, useState } from 'react';
import {
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
