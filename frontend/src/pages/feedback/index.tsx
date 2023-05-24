import React, {useCallback, useState} from 'react';
import FeedbackForm from "./FeedbackForm";
import {Card, Divider, message, Typography} from "antd";
import {useSendFeedbackDataLazyQuery} from "../../generated/graphql";

const { Title} = Typography;

const FeedBack = () => {
  const [pending, setPending] = useState<boolean>(false);
  const [sendFeedback,{ data, error}] = useSendFeedbackDataLazyQuery({
    onCompleted: (data) => {
      if (data.sendFeedback.status) {
        message.success('Ваше сообщение отправлено!');
        setPending(false);
      } else {
        message.error('При отправке произошла ошибка!')
      }
    }
  })
  const onSubmitFailed = useCallback( (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  }, [])
  const onSubmit = useCallback(async (values: any) => {
    setPending(true)
    if (values) {
      await sendFeedback({
        variables: {
          data: values,
        }
      })
    }
  }, []);
  return (
    <Card className="text-lg">
      <Title level={2}>Страница обратной связи:</Title>
      <Divider/>
      <FeedbackForm
        onSubmitForm={onSubmit}
        onSubmitFormFailed={onSubmitFailed}
        pending={pending}
      />
    </Card>
  );
};

export default FeedBack;