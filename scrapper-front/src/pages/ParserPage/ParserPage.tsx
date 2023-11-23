import {
  Card, Typography, Spin, message, FormProps,
} from 'antd';
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { observer } from 'mobx-react-lite';
import dayjs from 'dayjs';
import {
  useCreateHistoryRequestMutation,
  useGetParsingDataMutation,
  GetParsingDataMutation,
  useCreateHistoryDataParsingMutation,
} from '../../generated/graphql';
import ResultScrapper from '../../components/ResultScrapper/ResultScrapper';
import ParserForm from './ParserForm';
import CommonLayout from '../../components/layout/CommonLayout';
import useStore from '../../domain/modelLayer/store/useStore';

const { Title } = Typography;

interface IParsingDataItem {
  address?: string;
  currency?: string;
  dateOfPosting?: string;
  description?: string;
  id?: string;
  price?: number;
  title?: string;
  url?: string;
  sellerRating?: string;
  sellerReviewsCount?: string;
  sellerInfo?: string;
}

const ParserPage = () => {
  const {
    profileStore: { profile },
  } = useStore();
  const userId = profile?.id;
  const [parsingData, setParsingData] = useState<GetParsingDataMutation['getParsingData'] | undefined>(undefined);
  const [freeRequest, setFreeRequest] = useState(10);
  const [pending, setPending] = useState<boolean>(false);

  const [createHistoryDataParsing] = useCreateHistoryDataParsingMutation();
  const [createHistoryRequest, { data: historyRequestData }] = useCreateHistoryRequestMutation();
  const [getParsingData, { loading }] = useGetParsingDataMutation({
    onCompleted: (data) => {
      setPending(false);
      if (data) {
        setParsingData(data?.getParsingData?.json);
      }
      if (freeRequest > 0 && Number(freeRequest)) {
        setFreeRequest(() => {
          const currentDate = new Date();
          localStorage.setItem('storedDate', currentDate.toISOString());
          localStorage.setItem('freeRequest', JSON.stringify(freeRequest - 1));
          return freeRequest - 1;
        });
      }
    },
  });

  useEffect(() => {
    const currentDate = dayjs(new Date());
    const storedDate = dayjs(localStorage.getItem('storedDate'));
    let res;
    // Вычисляем разницу в днях между текущей датой и датой из хранилища
    if (currentDate && storedDate) {
      res = currentDate.diff(storedDate, 'day');
    }

    const oldCount = Number(localStorage.getItem('freeRequest'));
    if (oldCount && oldCount !== freeRequest) {
      setFreeRequest(oldCount);
    }

    if (res && res >= 1) {
      setFreeRequest(10);
    }
  }, [freeRequest]);

  useEffect(() => {
    const historyRequestId = historyRequestData?.createHistoryRequest?.data?.id;
    if (historyRequestId && parsingData) {
      (async () => {
        await createHistoryDataParsing({
          variables: {
            data: {
              history_request: historyRequestId,
              parsingData,
              ...(userId ? { user: userId } : {}),
            },
          },
        });
      })();
    }
  }, [historyRequestData, parsingData, createHistoryDataParsing, userId]);

  const onFinishFailed: FormProps['onFinishFailed'] = useCallback((errorInfo: {
    values: IParsingDataItem;
    errorFields: {
      name: (string | number)[];
      errors: string[];
    }[];
    outOfDate: boolean;
  }) => {
    const errorSet = new Set();

    errorInfo.errorFields.forEach((field) => {
      field.errors.forEach((e) => {
        errorSet.add(e);
      });
    });

    Array.from(errorSet).forEach((error: unknown) => {
      if (typeof error === 'string') {
        message.error(error);
      }
    });
  }, []);

  const goToScrapperForm = useCallback(() => {
    setParsingData(undefined);
  }, []);

  const onSubmit = useCallback(
    async (values: any) => {
      setPending(true);
      window.scrollTo(0, 0);
      if (values) {
        await createHistoryRequest({
          variables: {
            data: {
              dataForParsing: values,
              ...(userId ? { user: userId } : {}),
            },
          },
          onCompleted: async () => {
            await getParsingData({
              variables: {
                data: {
                  dataForParsing: values,
                },
              },
            });
          },
        });
      }
    },
    [createHistoryRequest, getParsingData, userId],
  );

  const historyRequestDataId = useMemo(() => historyRequestData?.createHistoryRequest?.data?.id, [historyRequestData]);

  const normalizedData = useMemo(() => {
    if (parsingData && Array.isArray(parsingData)) {
      return parsingData?.map((el: IParsingDataItem) => ({
        Название: el?.title,
        'Дата публикации': el?.dateOfPosting,
        'Цена товара': el?.price,
        Ссылка: el?.url,
        'Описание товара': el?.description,
        Валюта: el?.currency,
        Адрес: el?.address,
        'Информация о продавце': el?.sellerInfo,
      }));
    }
    return [];
  }, [parsingData]);

  return (
    <CommonLayout>
      <Spin
        spinning={pending}
        size="large"
        tip={(
          <div>
            Выполняеться парсинг...
            <br />
            Ожидайте полной загрузки
          </div>
        )}
      >
        <Card className="h-full">
          <Title className="text-center" type="danger" level={2}>
            БЕСПЛАТНЫЙ СБОР БАЗЫ
          </Title>
          {!parsingData && (
            <ParserForm
              userId={userId}
              freeRequestCount={freeRequest}
              onSubmitForm={onSubmit}
              onSubmitFormFailed={onFinishFailed}
            />
          )}
          {parsingData && (
            <ResultScrapper
              loading={loading}
              historyRequestDataId={historyRequestDataId}
              dataForDownload={normalizedData}
              goToScrapperForm={goToScrapperForm}
            />
          )}
        </Card>
      </Spin>
    </CommonLayout>
  );
};
export default observer(ParserPage);
